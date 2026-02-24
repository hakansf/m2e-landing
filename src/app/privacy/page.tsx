import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — M2E",
  description: "Privacy policy for Memes to an End (m2e.ai).",
};

const sections = [
  {
    title: "What we collect",
    content:
      "When you use our contact form or reach out via email, we collect the information you provide — typically your name, email address, and company name. We don't use tracking cookies, and we don't collect data beyond what you voluntarily share with us.",
  },
  {
    title: "How we use it",
    content:
      "We use your information to respond to your inquiry and, if relevant, to follow up about our services. That's it. We won't add you to a mailing list without your permission or use your data for anything unrelated to your request.",
  },
  {
    title: "Who we share it with",
    content:
      "Nobody. We don't sell, rent, or share your personal information with third parties. Your data stays between us.",
  },
  {
    title: "How we protect it",
    content:
      "We use industry-standard security practices to keep your information safe. Our site is served over HTTPS, and any data you submit is transmitted securely.",
  },
  {
    title: "Your rights",
    content:
      "You can ask us to delete any personal information we have about you at any time. Just send us an email and we'll take care of it.",
  },
  {
    title: "Changes to this policy",
    content:
      "If we update this policy, we'll post the revised version here with an updated effective date. We won't make material changes without giving you a heads up.",
  },
];

export default function PrivacyPage() {
  return (
    <div
      className="min-h-dvh bg-[#0a0a0a] relative"
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(0, 188, 212, 0.06) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    >
      {/* Content */}
      <div className="relative z-10 mx-auto max-w-2xl px-8 pt-20 pb-24 md:pt-28 md:pb-32">
        <p className="text-[#00BCD4] text-sm font-medium tracking-wide uppercase mb-4">
          Legal
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
          Privacy Policy
        </h1>
        <p className="mt-3 text-neutral-600 text-sm">
          Effective January 1, 2026
        </p>

        <p className="mt-10 text-neutral-400 leading-relaxed">
          Memes to an End (&ldquo;M2E,&rdquo; &ldquo;we,&rdquo;
          &ldquo;us&rdquo;) respects your privacy. This policy explains what
          information we collect through m2e.ai and how we handle it. Short
          version: we collect very little, and we don&apos;t do anything
          sketchy with it.
        </p>

        <div className="mt-12 space-y-10">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="text-lg font-semibold text-white mb-3">
                {s.title}
              </h2>
              <p className="text-neutral-400 text-sm leading-relaxed">
                {s.content}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-neutral-800">
          <h2 className="text-lg font-semibold text-white mb-3">
            Questions?
          </h2>
          <p className="text-neutral-400 text-sm leading-relaxed">
            If you have any questions about this policy or your data, reach
            out to{" "}
            <a
              href="mailto:info@m2e.ai"
              className="text-[#00BCD4] hover:brightness-110 transition-all"
            >
              info@m2e.ai
            </a>
            .
          </p>
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
