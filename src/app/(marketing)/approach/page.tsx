import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Approach — M2E",
  description:
    "How we think about community strategy, GEO, and brand intelligence.",
};

const pillars = [
  {
    name: "Spirit",
    description:
      "Shared identity and belonging. The intangible feeling that makes a community more than a collection of users.",
  },
  {
    name: "Trust",
    description:
      "Authentic voice and reliability. Brands earn trust in communities by contributing value, not extracting attention.",
  },
  {
    name: "Trade",
    description:
      "Value exchange between brand and community. What you give matters more than what you promote.",
  },
  {
    name: "Art",
    description:
      "Cultural fluency and creative expression. Speaking the language of a community without sounding like a tourist.",
  },
];

const pipeline = [
  {
    step: "Ingest",
    description: "Collect signals from communities, forums, and UGC platforms at scale.",
  },
  {
    step: "Process",
    description: "Clean, normalize, and structure raw community data for analysis.",
  },
  {
    step: "Classify",
    description: "Categorize content by intent, sentiment, topic, and brand relevance.",
  },
  {
    step: "Synthesize",
    description: "Generate actionable intelligence from classified community signals.",
  },
  {
    step: "Activate",
    description: "Turn insights into strategy — content plans, engagement frameworks, GEO recommendations.",
  },
];

export default function ApproachPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 px-6">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <p className="text-teal text-sm font-medium tracking-wide uppercase mb-4">
              Approach
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              How we think
            </h1>
            <p className="mt-6 text-muted-light text-lg leading-relaxed max-w-2xl">
              Community strategy is the missing layer of modern brand building.
              Not just another channel to optimize — a fundamental shift in how
              brands earn trust, credibility, and visibility.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Sense of Community Framework */}
      <section className="py-24 px-6 bg-surface">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <p className="text-teal text-sm font-medium tracking-wide uppercase mb-4">
              Framework
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              The Sense of Community
            </h2>
            <p className="mt-4 text-muted-light max-w-2xl">
              Adapted from McMillan&apos;s foundational research. Four
              dimensions that determine whether a brand can truly belong in a
              community.
            </p>
          </FadeIn>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p, i) => (
              <FadeIn key={p.name} delay={i * 0.1}>
                <div className="rounded-xl border border-border bg-background p-8 h-full">
                  <p className="text-teal font-bold text-2xl mb-3">
                    {p.name}
                  </p>
                  <p className="text-muted-light text-sm leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Intelligence Engine Pipeline */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <p className="text-teal text-sm font-medium tracking-wide uppercase mb-4">
              Platform
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              The M2E Intelligence Engine
            </h2>
            <p className="mt-4 text-muted-light max-w-2xl">
              Our platform processes thousands of community signals, turning raw
              UGC into actionable brand intelligence.
            </p>
          </FadeIn>

          <div className="mt-16 space-y-0">
            {pipeline.map((p, i) => (
              <FadeIn key={p.step} delay={i * 0.08}>
                <div className="flex items-start gap-6 py-6 border-b border-border last:border-0">
                  <span className="text-teal font-bold text-sm w-20 shrink-0 pt-0.5">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="text-white font-semibold text-lg">
                      {p.step}
                    </h3>
                    <p className="mt-1 text-muted-light text-sm leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Community-First GEO */}
      <section className="py-24 px-6 bg-surface">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <p className="text-teal text-sm font-medium tracking-wide uppercase mb-4">
              Philosophy
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Community-first GEO
            </h2>
            <div className="mt-8 space-y-6 text-muted-light leading-relaxed">
              <p>
                Traditional GEO starts with keywords and optimizes for
                algorithms. It treats content as a vector for machine
                readability.
              </p>
              <p>
                We start with communities and optimize for humans — because the
                content people genuinely trust is the content AI consistently
                cites.
              </p>
              <p className="text-white font-medium text-lg">
                GEO platforms optimize content for machines. We build community
                presence that resonates with humans — and gets cited by AI as a
                result.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
