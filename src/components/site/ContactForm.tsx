"use client";

import { useRef, useState, type FormEvent } from "react";

/* Sends through the existing /api/contact route (Resend → info@m2e.ai).
   Markup and validation messages match the original static design. */

const REQUIRED = [
  { name: "name", label: "name" },
  { name: "email", label: "work email" },
  { name: "company", label: "company" },
  { name: "goal", label: "note on what you want to change" },
] as const;

type FieldName = (typeof REQUIRED)[number]["name"];

export default function ContactForm({ idPrefix }: { idPrefix: string }) {
  const id = (n: string) => `${idPrefix}-${n}`;
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "failed">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const value = (n: string) => ((form.elements.namedItem(n) as HTMLInputElement | null)?.value ?? "").trim();

    const next: Partial<Record<FieldName, string>> = {};
    for (const f of REQUIRED) {
      const v = value(f.name);
      if (!v) next[f.name] = `Add your ${f.label}.`;
      else if (f.name === "email" && !(form.elements.namedItem("email") as HTMLInputElement).checkValidity())
        next[f.name] = "Enter an email address like name@company.com.";
    }
    setErrors(next);
    const firstBad = REQUIRED.find((f) => next[f.name]);
    if (firstBad) {
      (form.elements.namedItem(firstBad.name) as HTMLElement | null)?.focus();
      return;
    }

    // the API takes one free-text message; fold role and timeline into it
    const message = [
      value("goal"),
      "",
      value("role") ? `Role: ${value("role")}` : "",
      value("timeline") ? `Timeline: ${value("timeline")}` : "",
    ]
      .filter((line, i, all) => line !== "" || (i > 0 && all[i - 1] !== ""))
      .join("\n")
      .trim();

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: value("name"), email: value("email"), company: value("company"), message }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
    } catch {
      setStatus("failed");
    }
  }

  if (status === "sent") {
    return (
      <div className="form" role="status">
        <p className="body-lg">Thanks. Your note is on its way to our team, and we&rsquo;ll reply by email.</p>
      </div>
    );
  }

  const field = (name: FieldName, label: string, input: React.ReactNode) => (
    <div className="field">
      <label htmlFor={id(name)}>{label}</label>
      {input}
      <p className="field__error" id={`${id(name)}-error`} hidden={!errors[name]}>
        {errors[name]}
      </p>
    </div>
  );
  const invalid = (n: FieldName) => (errors[n] ? true : undefined);
  const describedBy = (n: FieldName) => (errors[n] ? `${id(n)}-error` : undefined);

  return (
    <form ref={formRef} className="form" noValidate onSubmit={onSubmit}>
      <div className="form__row">
        {field("name", "Name",
          <input id={id("name")} name="name" type="text" autoComplete="name" required aria-invalid={invalid("name")} aria-describedby={describedBy("name")} />)}
        {field("email", "Work email",
          <input id={id("email")} name="email" type="email" autoComplete="email" required aria-invalid={invalid("email")} aria-describedby={describedBy("email")} />)}
      </div>
      <div className="form__row">
        {field("company", "Company",
          <input id={id("company")} name="company" type="text" autoComplete="organization" required aria-invalid={invalid("company")} aria-describedby={describedBy("company")} />)}
        <div className="field">
          <label htmlFor={id("role")}>Your role <span className="opt">(optional)</span></label>
          <input id={id("role")} name="role" type="text" autoComplete="organization-title" />
        </div>
      </div>
      {field("goal", "What are you trying to change?",
        <textarea id={id("goal")} name="goal" required aria-invalid={invalid("goal")} aria-describedby={describedBy("goal")} />)}
      <div className="field">
        <label htmlFor={id("timeline")}>Timeline <span className="opt">(optional)</span></label>
        <select id={id("timeline")} name="timeline" defaultValue="">
          <option value="">Choose one</option>
          <option>As soon as possible</option>
          <option>This quarter</option>
          <option>Next quarter</option>
          <option>Just exploring</option>
        </select>
      </div>
      <button className="btn btn--primary" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Start a conversation"}
      </button>
      {status === "failed" ? (
        <p className="form__note" role="alert">
          Something went wrong sending your note. Please email us at <a href="mailto:info@m2e.ai">info@m2e.ai</a>.
        </p>
      ) : (
        <p className="form__note">Goes straight to our team. We reply by email.</p>
      )}
    </form>
  );
}
