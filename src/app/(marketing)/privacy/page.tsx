import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";

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
    <section className="pt-32 pb-24 sm:pt-40 sm:pb-32 px-6">
      <div className="mx-auto max-w-2xl">
        <FadeIn>
          <p className="text-teal text-sm font-medium tracking-wide uppercase mb-4">
            Legal
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            Privacy Policy
          </h1>
          <p className="mt-6 text-muted-light text-sm">
            Effective January 1, 2026
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="mt-10 text-muted-light leading-relaxed">
            Memes to an End (&ldquo;M2E,&rdquo; &ldquo;we,&rdquo;
            &ldquo;us&rdquo;) respects your privacy. This policy explains what
            information we collect through m2e.ai and how we handle it. Short
            version: we collect very little, and we don&apos;t do anything
            sketchy with it.
          </p>
        </FadeIn>

        <div className="mt-12 space-y-10">
          {sections.map((s, i) => (
            <FadeIn key={s.title} delay={0.05 * i}>
              <div>
                <h2 className="text-lg font-semibold text-white mb-3">
                  {s.title}
                </h2>
                <p className="text-muted-light text-sm leading-relaxed">
                  {s.content}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.1}>
          <div className="mt-16 pt-8 border-t border-border">
            <h2 className="text-lg font-semibold text-white mb-3">
              Questions?
            </h2>
            <p className="text-muted-light text-sm leading-relaxed">
              If you have any questions about this policy or your data, reach
              out to{" "}
              <a
                href="mailto:info@m2e.ai"
                className="text-teal hover:text-teal-light transition-colors"
              >
                info@m2e.ai
              </a>
              .
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
