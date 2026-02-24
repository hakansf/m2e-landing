"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

const HUBSPOT_URL =
  "https://api.hsforms.com/submissions/v3/integration/submit/245315051/7d64d8a9-7342-45bd-9d9b-ec3ac33a7c28";

export default function ContactPage() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const data = new FormData(e.currentTarget);

    try {
      const res = await fetch(HUBSPOT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fields: [
            { objectTypeId: "0-1", name: "firstname", value: data.get("name") || "" },
            { objectTypeId: "0-1", name: "email", value: data.get("email") || "" },
            { objectTypeId: "0-1", name: "company", value: data.get("company") || "" },
            { objectTypeId: "0-1", name: "message", value: data.get("message") || "" },
          ],
          context: {
            pageUri: "https://m2e.ai/contact",
            pageName: "M2E Contact",
          },
        }),
      });

      if (!res.ok) throw new Error("Submission failed");

      router.push("/thank-you");
    } catch {
      setError("Something went wrong. Please try again or email us directly.");
      setSubmitting(false);
    }
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

            {error && (
              <p className="text-red-400 text-sm">{error}</p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-3 bg-[#00BCD4] text-black font-semibold text-sm rounded-lg hover:brightness-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? "Sending..." : "Send Message"}
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
          <a href="/" className="hover:text-neutral-400 transition-colors">&copy; 2026 Memes to an End</a>
        </div>
      </div>
    </div>
  );
}
