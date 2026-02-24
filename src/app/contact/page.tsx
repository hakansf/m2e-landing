"use client";

import { type FormEvent } from "react";

export default function ContactPage() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") || "";
    const email = data.get("email") || "";
    const company = data.get("company") || "";
    const message = data.get("message") || "";

    const subject = encodeURIComponent(
      `M2E Contact: ${name}${company ? ` (${company})` : ""}`
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\n${message}`
    );

    window.location.href = `mailto:info@m2e.ai?subject=${subject}&body=${body}`;
  }

  return (
    <div className="min-h-dvh flex flex-col md:flex-row bg-[#0a0a0a]">
      {/* Left panel — form */}
      <div className="min-h-[60dvh] md:min-h-dvh md:w-1/2 flex flex-col items-center justify-center px-8 md:px-16">
        <div className="max-w-md w-full">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Get in Touch
          </h1>
          <p className="text-neutral-400 text-base mb-10">
            We&apos;d love to hear from you.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-neutral-400 mb-1.5"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full rounded-lg border border-neutral-800 bg-neutral-900 px-4 py-3 text-white text-sm placeholder:text-neutral-600 focus:outline-none focus:border-[#00BCD4] focus:ring-1 focus:ring-[#00BCD4] transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-neutral-400 mb-1.5"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full rounded-lg border border-neutral-800 bg-neutral-900 px-4 py-3 text-white text-sm placeholder:text-neutral-600 focus:outline-none focus:border-[#00BCD4] focus:ring-1 focus:ring-[#00BCD4] transition-colors"
                placeholder="you@company.com"
              />
            </div>

            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-neutral-400 mb-1.5"
              >
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="w-full rounded-lg border border-neutral-800 bg-neutral-900 px-4 py-3 text-white text-sm placeholder:text-neutral-600 focus:outline-none focus:border-[#00BCD4] focus:ring-1 focus:ring-[#00BCD4] transition-colors"
                placeholder="Company name"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-neutral-400 mb-1.5"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full rounded-lg border border-neutral-800 bg-neutral-900 px-4 py-3 text-white text-sm placeholder:text-neutral-600 focus:outline-none focus:border-[#00BCD4] focus:ring-1 focus:ring-[#00BCD4] transition-colors resize-none"
                placeholder="Tell us what you're working on..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#00BCD4] text-black font-semibold text-sm rounded-lg hover:brightness-110 transition-all"
            >
              Send Message
            </button>
          </form>

          <p className="mt-8 text-neutral-600 text-sm">
            Prefer email?{" "}
            <a
              href="mailto:info@m2e.ai"
              className="text-[#00BCD4] hover:brightness-110 transition-all"
            >
              info@m2e.ai
            </a>
          </p>
        </div>
      </div>

      {/* Right panel — dot grid + card */}
      <div
        className="min-h-[40dvh] md:min-h-dvh md:w-1/2 flex flex-col items-center justify-center relative"
        style={{
          backgroundImage:
            "radial-gradient(circle, #00BCD4 1.2px, transparent 1.2px)",
          backgroundSize: "28px 28px",
        }}
      >
        <div className="absolute inset-0 bg-[#0a0a0a] opacity-60" />
        <div className="relative z-10 max-w-sm w-full px-8">
          <div className="bg-neutral-900/80 border border-neutral-800 rounded-2xl p-8 text-center backdrop-blur-sm">
            <h3 className="text-white font-semibold text-lg mb-3">
              What happens next?
            </h3>
            <ul className="text-neutral-400 text-sm leading-relaxed text-left space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[#00BCD4] font-bold shrink-0">01</span>
                <span>We&apos;ll review your message within 24 hours.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00BCD4] font-bold shrink-0">02</span>
                <span>If there&apos;s a fit, we&apos;ll schedule a discovery call.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00BCD4] font-bold shrink-0">03</span>
                <span>We&apos;ll scope an approach tailored to your needs.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="fixed bottom-0 left-0 right-0 z-20 flex justify-between items-center px-6 md:px-8 py-3 md:py-4 text-neutral-600 text-[10px] md:text-xs">
        <a href="/contact" className="hover:text-neutral-400 transition-colors">
          Contact Us
        </a>
        <div className="flex gap-4 md:gap-6">
          <a href="/privacy" className="hover:text-neutral-400 transition-colors">
            Privacy Policy
          </a>
          <span>&copy; 2026 Memes to an End</span>
        </div>
      </div>
    </div>
  );
}
