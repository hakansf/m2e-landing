import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "About — M2E",
  description:
    "Meet the team behind Memes to an End. Two Reddit veterans bridging community strategy and GEO.",
};

const team = [
  {
    name: "Hakan Degirmenci",
    role: "Founder",
    bio: "6 years at Reddit. 15+ years in digital and social strategy. Hakan sits at the intersection of data, strategy, and systems — building the infrastructure that turns community intelligence into brand advantage.",
    focus: "Data + Strategy + Systems",
  },
  {
    name: "Will Cady",
    role: "Partner — Heal Movement",
    bio: "Former Head of Creative & Brand Strategy at Reddit. Chief Global Brand Ambassador. Will brings deep expertise in community culture and creative expression — the human layer that makes brand presence authentic.",
    focus: "Community + Culture + Creative",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 px-6">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <p className="text-teal text-sm font-medium tracking-wide uppercase mb-4">
              About
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              Two Reddit veterans.
              <br />
              One clear gap.
            </h1>
            <p className="mt-6 text-muted-light text-lg leading-relaxed max-w-2xl">
              We saw the space between community strategy and generative engine
              optimization — and built a firm to bridge it.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6 bg-surface">
        <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
          {team.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.15}>
              <div className="rounded-xl border border-border bg-background p-8 sm:p-10 h-full flex flex-col">
                <p className="text-teal text-xs font-semibold tracking-wider uppercase mb-3">
                  {t.focus}
                </p>
                <h3 className="text-2xl font-bold text-white">{t.name}</h3>
                <p className="text-muted-light text-sm mt-1 mb-6">{t.role}</p>
                <p className="text-muted-light text-sm leading-relaxed">
                  {t.bio}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Origin */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <p className="text-teal text-sm font-medium tracking-wide uppercase mb-4">
              Origin
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
              Why M2E exists
            </h2>
            <div className="space-y-6 text-muted-light leading-relaxed">
              <p>
                We spent years inside Reddit watching brands try — and mostly
                fail — to build genuine community presence. The ones that
                succeeded shared something: they understood community culture
                before they tried to participate in it.
              </p>
              <p>
                Then generative AI changed the game. Suddenly the authentic,
                human-generated content from communities like Reddit became the
                most cited source in LLM outputs. The brands that had done the
                hard work of earning community trust were now being rewarded by
                AI systems too.
              </p>
              <p>
                But there was no one connecting these dots. GEO platforms
                optimize for algorithms. Agencies run social campaigns.
                Community managers handle support tickets. Nobody was building
                the bridge between community strategy and AI visibility.
              </p>
              <p className="text-white font-medium text-lg">
                So we built it. Memes to an End is a community intelligence firm
                — part consultancy, part platform — that helps brands earn trust
                with humans and visibility with AI.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
