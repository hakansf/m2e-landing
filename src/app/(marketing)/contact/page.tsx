"use client";

import { type FormEvent } from "react";
import FadeIn from "@/components/FadeIn";

export default function ContactPage() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") || "";
    const email = data.get("email") || "";
    const company = data.get("company") || "";
    const message = data.get("message") || "";

    const subject = encodeURIComponent(`M2E Contact: ${name}${company ? ` (${company})` : ""}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\n${message}`);

    window.location.href = `mailto:hakan@m2e.ai?subject=${subject}&body=${body}`;
  }

  return (
    <section className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 px-6 overflow-hidden">
      {/* Dot grid background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(0, 188, 212, 0.08) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-2xl">
        <FadeIn>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            Get in Touch
          </h1>
          <p className="mt-4 text-muted-light text-lg">
            We&apos;d love to hear from you.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <form onSubmit={handleSubmit} className="mt-12 space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-muted-light mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-white text-sm placeholder:text-muted focus:outline-none focus:border-[#00BCD4] transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-muted-light mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-white text-sm placeholder:text-muted focus:outline-none focus:border-[#00BCD4] transition-colors"
                placeholder="you@company.com"
              />
            </div>

            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-muted-light mb-2"
              >
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-white text-sm placeholder:text-muted focus:outline-none focus:border-[#00BCD4] transition-colors"
                placeholder="Company name"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-muted-light mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-white text-sm placeholder:text-muted focus:outline-none focus:border-[#00BCD4] transition-colors resize-none"
                placeholder="Tell us what you're working on..."
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3.5 bg-[#00BCD4] text-background font-semibold text-sm rounded-md hover:brightness-110 transition-all"
            >
              Send Message
            </button>
          </form>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-16 pt-8 border-t border-border">
            <p className="text-muted text-sm">
              Prefer email?{" "}
              <a
                href="mailto:hakan@m2e.ai"
                className="text-[#00BCD4] hover:brightness-110 transition-all"
              >
                hakan@m2e.ai
              </a>
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
