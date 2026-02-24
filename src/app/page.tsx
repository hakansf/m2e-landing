"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import FadeIn from "@/components/FadeIn";

const problems = [
  {
    title: "Reddit is brand infrastructure",
    body: "It's the #1 cited source in LLM outputs. Not a social channel — the foundation of how AI learns what to trust.",
  },
  {
    title: "Brands are flying blind",
    body: "Most have zero strategy for the communities that shape AI recommendations and purchase decisions.",
  },
  {
    title: "GEO misses the human layer",
    body: "Optimization platforms tune content for machines but miss the cultural context that makes it actually resonate.",
  },
  {
    title: "Authentic signal is scarce",
    body: "As AI-generated content floods the internet, real human signal from communities becomes exponentially more valuable.",
  },
];

const services = [
  "Community strategy & consulting",
  "Reddit & UGC platform activation",
  "Content strategy & production",
  "Team training & enablement",
  "GEO advisory",
];

const platform = [
  "Community intelligence & analysis",
  "Content performance tracking",
  "LLM citation monitoring",
  "Competitive landscape mapping",
  "Subreddit health diagnostics",
];

const stats = [
  { value: "157+", label: "Communities Analyzed" },
  { value: "1,700+", label: "Posts Classified" },
  { value: "24/7", label: "LLM Citation Monitoring" },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Dot grid background */}
        <div className="absolute inset-0 dot-grid opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

        <div className="relative z-10 text-center max-w-3xl mx-auto px-6 pt-20">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-teal text-sm font-medium tracking-wide uppercase mb-8"
          >
            Community Intelligence for the Age of AI Search
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-5xl sm:text-7xl font-bold tracking-tight text-white leading-[1.1]"
          >
            From LOLs
            <br />
            to LLMs
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 text-lg sm:text-xl text-muted-light max-w-2xl mx-auto leading-relaxed"
          >
            We help brands build authentic community presence that search
            engines and AI can&apos;t ignore.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#why-now"
              className="px-7 py-3 border border-border text-white text-sm font-medium rounded-md hover:border-muted-light transition-colors"
            >
              Learn More
            </a>
            <Link
              href="/contact"
              className="px-7 py-3 bg-teal text-background text-sm font-semibold rounded-md hover:bg-teal-light transition-colors"
            >
              Schedule a Call
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Why Now ───────────────────────────────────────── */}
      <section id="why-now" className="py-24 sm:py-32 px-6">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <p className="text-teal text-sm font-medium tracking-wide uppercase mb-4">
              Why This Matters Now
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white max-w-2xl">
              The signal shift
            </h2>
          </FadeIn>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            {problems.map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.1}>
                <div className="group rounded-xl border border-border bg-surface p-8 hover:border-teal/30 transition-colors h-full">
                  <p className="text-xs font-semibold text-teal mb-4 tracking-wider uppercase">
                    0{i + 1}
                  </p>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {p.title}
                  </h3>
                  <p className="text-muted-light text-sm leading-relaxed">
                    {p.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── What We Do ────────────────────────────────────── */}
      <section id="what-we-do" className="py-24 sm:py-32 px-6 bg-surface">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <p className="text-teal text-sm font-medium tracking-wide uppercase mb-4">
              What We Do
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white max-w-3xl">
              Platforms alone can&apos;t navigate community culture. Consultants
              alone can&apos;t scale.
            </h2>
            <p className="mt-4 text-muted-light text-lg">We do both.</p>
          </FadeIn>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Services */}
            <FadeIn delay={0.1}>
              <div className="rounded-xl border border-border bg-background p-8 sm:p-10 h-full">
                <h3 className="text-xl font-bold text-white mb-6">
                  Strategic Services
                </h3>
                <ul className="space-y-4">
                  {services.map((s) => (
                    <li key={s} className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal shrink-0" />
                      <span className="text-muted-light text-sm leading-relaxed">
                        {s}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* Platform */}
            <FadeIn delay={0.2}>
              <div className="rounded-xl border border-teal/20 bg-background p-8 sm:p-10 h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-teal/10 text-teal text-[11px] font-semibold tracking-wider uppercase px-4 py-1.5 rounded-bl-lg">
                  Private Beta
                </div>
                <h3 className="text-xl font-bold text-white mb-6">
                  M2E Signal
                  <span className="ml-2 text-xs font-medium text-teal align-middle">
                    Platform
                  </span>
                </h3>
                <ul className="space-y-4">
                  {platform.map((p) => (
                    <li key={p} className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal shrink-0" />
                      <span className="text-muted-light text-sm leading-relaxed">
                        {p}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Differentiator ────────────────────────────────── */}
      <section className="py-24 sm:py-32 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <FadeIn>
            <blockquote className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white leading-snug">
              &ldquo;The content humans trust is the content AI cites.
              <span className="text-teal"> We help brands earn both.</span>
              &rdquo;
            </blockquote>
          </FadeIn>
        </div>
      </section>

      {/* ── Stats ─────────────────────────────────────────── */}
      <section className="py-20 px-6 border-y border-border">
        <div className="mx-auto max-w-5xl grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-8 text-center">
          {stats.map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.1}>
              <p className="text-4xl sm:text-5xl font-bold text-teal">
                {s.value}
              </p>
              <p className="mt-2 text-sm text-muted-light">{s.label}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="relative py-24 sm:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-20" />
        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Ready to talk?
            </h2>
            <p className="mt-6 text-muted-light text-lg leading-relaxed">
              Whether you&apos;re exploring community strategy, evaluating GEO,
              or want to see M2E Signal in action — let&apos;s connect.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex px-8 py-3.5 bg-teal text-background font-semibold rounded-md hover:bg-teal-light transition-colors"
              >
                Schedule a Call
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
