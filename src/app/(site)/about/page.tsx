import type { Metadata } from "next";
import DotField from "@/components/site/DotField";
import Link from "next/link";
import LinkedInLink from "@/components/site/LinkedInLink";

/* Converted from Will's static about.html. Edit the markup here;
   styles live in src/app/site.css. */

export const metadata: Metadata = {
  title: "About",
  description: "Memes to an End was founded by former Reddit leaders to help brands earn trust in the communities where people and AI form opinions.",
  openGraph: {
    title: "About — Memes to an End",
    description: "Memes to an End was founded by former Reddit leaders to help brands earn trust in the communities where people and AI form opinions.",
  },
};

/* eslint-disable @next/next/no-img-element -- plain images keep the original sizing exactly */

export default function AboutPage() {
  return (
    <>
      <section className="page-hero" aria-labelledby="page-title">
        <DotField />
        <div className="wrap">
          <span className="kicker" aria-hidden="true"></span>
          <h1 className="display h1" id="page-title">
            <span className="keep">Do right by humans.</span> <span className="keep">AI&nbsp;visibility follows.</span>
          </h1>
        </div>
      </section>
      <section className="section section--light section--tight" id="manifesto" aria-labelledby="meme-title">
        <div className="wrap definition">
          <div>
            <h2 className="definition__word" id="meme-title">Meme</h2>
            <p className="definition__pron">/miːm/ · noun</p>
          </div>
          <p className="definition__def">An idea that spreads from person to person within a culture.</p>
        </div>
      </section>
      <section className="section section--light" aria-labelledby="manifesto-title">
        <div className="wrap">
          <span className="kicker" aria-hidden="true"></span>
          <h2 className="visually-hidden" id="manifesto-title">Manifesto</h2>
          <div className="prose">
            <p>
              That&apos;s where our name comes from, and it&apos;s still the whole job.
            </p>
            <p>
              For twenty years, brands could buy their way into attention. Search traffic, social reach, paid placements. That world is shrinking. People now get answers from AI, and AI looks for something brands can&apos;t buy: consistent, credible, human agreement about what&apos;s true.
            </p>
            <p>
              That agreement is built in communities. On Reddit, a thread with a thousand upvotes is a verdict. It gets read, searched, quoted, and learned from long after it&apos;s posted.
            </p>
            <p>
              So we don&apos;t start with your message. We start with the community: what it values, what it argues about, who it listens to, and where your brand fits. Then we help your team earn a place there, honestly and over time.
            </p>
            <p>
              Shortcuts don&apos;t survive here. Communities notice them, and so does AI. What lasts is presence your own people build and own.
            </p>
            <p className="closer">
              <span className="keep">Do right by humans.</span> <span className="keep">AI&nbsp;visibility follows.</span>
            </p>
          </div>
        </div>
      </section>
      <section className="section section--dark" aria-labelledby="believe-title">
        <div className="wrap beliefs">
          <div className="section-head">
            <span className="kicker" aria-hidden="true"></span>
            <h2 className="display h2" id="believe-title">What we believe</h2>
          </div>
          <ul className="principles">
            <li>
              <h3>
                <span className="sq" aria-hidden="true"></span>
                Outcomes, not overcomplication
              </h3>
              <p>
                We keep it simple: a clear plan tied to the goals your business already tracks, like reputation, consideration, support costs, and how AI describes you. No vanity metrics, no jargon.
              </p>
            </li>
            <li>
              <h3>
                <span className="sq" aria-hidden="true"></span>
                Inside-out before outside-in
              </h3>
              <p>
                We start with the community, not your campaign. Understanding what a community values comes before anything a brand says to it.
              </p>
            </li>
            <li>
              <h3>
                <span className="sq" aria-hidden="true"></span>
                Built to last
              </h3>
              <p>
                Platforms, algorithms, and AI models keep changing. Trust earned with real people holds up through all of it.
              </p>
            </li>
            <li>
              <h3>
                <span className="sq" aria-hidden="true"></span>
                Your team, your presence
              </h3>
              <p>
                Communities trust brands that show up as themselves, so the presence should belong to you. We make it easy to build and sustainable to run.
              </p>
            </li>
            <li>
              <h3>
                <span className="sq" aria-hidden="true"></span>
                No shortcuts to AI visibility
              </h3>
              <p>
                Reddit isn&apos;t a hack for showing up in ChatGPT. AI looks for a consistent story across every channel, and community is one part of a broader strategy.
              </p>
            </li>
          </ul>
        </div>
      </section>
      <section className="section section--light" aria-labelledby="team-title">
        <div className="wrap">
          <div className="section-head">
            <span className="kicker" aria-hidden="true"></span>
            <h2 className="display h2" id="team-title">The team</h2>
          </div>
          <ul className="team">
            <li className="person">
              <div className="person__media" data-eye="0.583,0.397" data-label="Partnerships">
                <img className="person__photo" src="/assets/img/team/hakan.jpg" alt="Hakan Degirmenci" width="720" height="720" loading="lazy" />
                <span className="sq" aria-hidden="true"></span>
              </div>
              <h3>Hakan Degirmenci</h3>
              <LinkedInLink who="hakan" />
              <p className="person__role">Founder + CEO</p>
              <p>
                Hakan spent six years at Reddit in brand partnerships, where he led the commercial partnership with Adobe and worked with some of the world&apos;s largest brands on how to show up in communities. Before Reddit, he built and sold a multi-location healthcare business. He founded M2E to help brands earn trust where it&apos;s actually formed.
              </p>
            </li>
            <li className="person">
              <div className="person__media" data-eye="0.380,0.520" data-label="Storytelling">
                <img className="person__photo" src="/assets/img/team/will.jpg" alt="Will Cady" width="720" height="720" loading="lazy" />
                <span className="sq" aria-hidden="true"></span>
              </div>
              <h3>Will Cady</h3>
              <LinkedInLink who="will" />
              <p className="person__role">Head of Strategy and Storytelling</p>
              <p>
                Will is a multimedia artist and cultural strategist. An early leader at Reddit, he launched its LA office, built KarmaLab, Reddit&apos;s in-house creative strategy agency, and helped shape it into a billion-dollar platform. His book,{" "}
                <em>Which Way Is North</em>
                {" "}(distributed by Simon & Schuster), explores culture, creativity, and decision-making for modern leaders.
              </p>
            </li>
            <li className="person">
              <div className="person__media" data-eye="0.494,0.432" data-label="Intelligence">
                <img className="person__photo" src="/assets/img/team/vanessa.jpg" alt="Vanessa Hensler" width="720" height="720" loading="lazy" />
                <span className="sq" aria-hidden="true"></span>
              </div>
              <h3>Vanessa Hensler</h3>
              <LinkedInLink who="vanessa" />
              <p className="person__role">Head of Intelligence</p>
              <p>
                Vanessa leads M2E&apos;s research practice, turning what communities say into insight brands can act on. She is a faculty member at the University of Southern California and brings an academic&apos;s rigor to understanding how communities form, how trust is built, and what makes them healthy.
              </p>
            </li>
            <li className="person">
              <div className="person__media" data-eye="0.589,0.389" data-label="Enablement">
                <img className="person__photo" src="/assets/img/team/rachelle.jpg" alt="Rachelle Cady" width="720" height="720" loading="lazy" />
                <span className="sq" aria-hidden="true"></span>
              </div>
              <h3>Rachelle Cady</h3>
              <LinkedInLink who="rachelle" />
              <p className="person__role">Head of Operations</p>
              <p>
                Rachelle leads M2E&apos;s enablement programs, helping client teams build the operations to run their own community presence: the playbooks, workflows, and processes that keep it going. She was the first operations hire at Alltroo, where she ran talent and charity partnerships with the NFL and NHL, and previously led gaming and esports sponsorships at United Talent Agency. She also worked at Omaze.
              </p>
            </li>
          </ul>
          <span className="team-bar">Advisor</span>
          <ul className="advisors">
            <li>
              <strong>Roxy Young</strong>
              <span className="muted-dark">Former Global CMO, Reddit</span>
            </li>
          </ul>
        </div>
      </section>
      <section className="section section--light section--tight" aria-labelledby="cta-title">
        <div className="wrap">
          <h2 className="display h2" id="cta-title">Let&apos;s see what your communities are saying</h2>
          <div className="btn-row">
            <Link className="btn btn--primary" href="/contact">Start a conversation</Link>
          </div>
        </div>
      </section>
    </>
  );
}
