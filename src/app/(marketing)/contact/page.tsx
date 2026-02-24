"use client";

import { useState, type FormEvent } from "react";
import FadeIn from "@/components/FadeIn";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire up form submission (e.g., API route, Formspree, Resend)
    setSubmitted(true);
  }

  return (
    <>
      <section className="pt-32 pb-24 sm:pt-40 sm:pb-32 px-6">
        <div className="mx-auto max-w-2xl">
          <FadeIn>
            <p className="text-teal text-sm font-medium tracking-wide uppercase mb-4">
              Contact
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              Let&apos;s talk
            </h1>
            <p className="mt-6 text-muted-light text-lg leading-relaxed">
              Whether you&apos;re exploring community strategy, evaluating GEO,
              or want to see M2E Signal in action — we&apos;d love to hear from
              you.
            </p>
          </FadeIn>

          {submitted ? (
            <FadeIn>
              <div className="mt-12 rounded-xl border border-teal/30 bg-teal/5 p-8 text-center">
                <p className="text-white text-lg font-semibold">
                  Thanks for reaching out.
                </p>
                <p className="mt-2 text-muted-light text-sm">
                  We&apos;ll be in touch within 24 hours.
                </p>
              </div>
            </FadeIn>
          ) : (
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
                    className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-white text-sm placeholder:text-muted focus:outline-none focus:border-teal transition-colors"
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
                    className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-white text-sm placeholder:text-muted focus:outline-none focus:border-teal transition-colors"
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
                    className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-white text-sm placeholder:text-muted focus:outline-none focus:border-teal transition-colors"
                    placeholder="Company name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-muted-light mb-2"
                  >
                    How can we help?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-white text-sm placeholder:text-muted focus:outline-none focus:border-teal transition-colors resize-none"
                    placeholder="Tell us about your goals, challenges, or what you're looking to explore..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 bg-teal text-background font-semibold text-sm rounded-md hover:bg-teal-light transition-colors"
                >
                  Send Message
                </button>
              </form>
            </FadeIn>
          )}

          <FadeIn delay={0.2}>
            <div className="mt-16 pt-8 border-t border-border">
              <p className="text-muted text-sm">
                Prefer email?{" "}
                <a
                  href="mailto:hello@m2e.ai"
                  className="text-teal hover:text-teal-light transition-colors"
                >
                  hello@m2e.ai
                </a>
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
