import type { Metadata } from "next";
import Link from "next/link";

/* Converted from Will's static services.html. Edit the markup here;
   styles live in src/app/site.css. */

export const metadata: Metadata = {
  title: "Services",
  description: "Community research, strategy, enablement, and content from Memes to an End. Every engagement starts with research and ends with a team that runs it themselves.",
  openGraph: {
    title: "Services — Memes to an End",
    description: "Community research, strategy, enablement, and content from Memes to an End. Every engagement starts with research and ends with a team that runs it themselves.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero" aria-labelledby="page-title">
        <div className="wrap">
          <span className="kicker" aria-hidden="true"></span>
          <h1 className="display h1" id="page-title">Everything you need to show up well</h1>
          <p className="lede">Every engagement starts with research. From there we plan, build, and hand it to your team.</p>
        </div>
      </section>
      <section className="section section--light" aria-label="Services in detail">
        <div className="wrap">
          <article className="service-block" id="research">
            <div>
              <h2>Research + Intelligence</h2>
              <p className="service-block__lead">Know what communities really think before you say a word.</p>
              <div className="service-block__out">
                <b>You walk away with</b>
                A clear read of the conversation and a prioritized list of where to show up.
              </div>
            </div>
            <div>
              <p className="muted-light" style={{ fontSize: "18px", maxWidth: "58ch" } as React.CSSProperties}>
                Surveys tell you what people say when asked. Social listening tells you how often you&apos;re mentioned. Our research tells you what a community has decided about your brand, why, and who it believes.
              </p>
              <ul className="checklist" style={{ marginTop: "20px" } as React.CSSProperties}>
                <li>
                  <span className="sq" aria-hidden="true"></span>
                  <span>
                    <strong>Narrative mapping.</strong>
                    {" "}The stories people tell about your brand and category, and which ones are spreading.
                  </span>
                </li>
                <li>
                  <span className="sq" aria-hidden="true"></span>
                  <span>
                    <strong>Sentiment.</strong>
                    {" "}Where it&apos;s positive, where it&apos;s negative, and the reasons behind both.
                  </span>
                </li>
                <li>
                  <span className="sq" aria-hidden="true"></span>
                  <span>
                    <strong>Competitive.</strong>
                    {" "}Who your category trusts and how they earned it.
                  </span>
                </li>
                <li>
                  <span className="sq" aria-hidden="true"></span>
                  <span>
                    <strong>Audience.</strong>
                    {" "}Your advocates, critics, and power users, in their own words.
                  </span>
                </li>
                <li>
                  <span className="sq" aria-hidden="true"></span>
                  <span>
                    <strong>Ongoing briefings.</strong>
                    {" "}A regular read on what&apos;s shifting, before it shows up in search, AI answers, or your support queue.
                  </span>
                </li>
              </ul>
            </div>
          </article>
          <article className="service-block" id="strategy">
            <div>
              <h2>Strategy</h2>
              <p className="service-block__lead">A plan for where to show up, how, and with whom.</p>
              <div className="service-block__out">
                <b>You walk away with</b>
                A roadmap your team can execute, with clear priorities and guardrails.
              </div>
            </div>
            <div>
              <p className="muted-light" style={{ fontSize: "18px", maxWidth: "58ch" } as React.CSSProperties}>
                We turn the research into a plan tied to your business goals: where to show up, what to say, what to avoid, and who should be saying it.
              </p>
              <ul className="checklist" style={{ marginTop: "20px" } as React.CSSProperties}>
                <li>
                  <span className="sq" aria-hidden="true"></span>
                  <span>
                    <strong>Owned communities.</strong>
                    {" "}Launching a new community, or growing one you already have.
                  </span>
                </li>
                <li>
                  <span className="sq" aria-hidden="true"></span>
                  <span>
                    <strong>Brand accounts.</strong>
                    {" "}Setting up and building accounts with real credibility.
                  </span>
                </li>
                <li>
                  <span className="sq" aria-hidden="true"></span>
                  <span>
                    <strong>Communities you don&apos;t own.</strong>
                    {" "}Showing up well where the conversation already happens.
                  </span>
                </li>
                <li>
                  <span className="sq" aria-hidden="true"></span>
                  <span>
                    <strong>Relationships.</strong>
                    {" "}Moderator relationships and community partnerships.
                  </span>
                </li>
              </ul>
            </div>
          </article>
          <article className="service-block" id="enablement">
            <div>
              <h2>Enablement</h2>
              <p className="service-block__lead">Your team, trained and set up to run it themselves.</p>
              <div className="service-block__out">
                <b>You walk away with</b>
                An in-house capability that runs without us.
              </div>
            </div>
            <div>
              <p className="muted-light" style={{ fontSize: "18px", maxWidth: "58ch" } as React.CSSProperties}>
                Communities trust brands that show up as themselves, so the presence should belong to you. We build the skills and systems your team needs to run it.
              </p>
              <ul className="checklist" style={{ marginTop: "20px" } as React.CSSProperties}>
                <li>
                  <span className="sq" aria-hidden="true"></span>
                  <span>
                    <strong>Training and workshops.</strong>
                    {" "}For marketing, social, support, and comms teams.
                  </span>
                </li>
                <li>
                  <span className="sq" aria-hidden="true"></span>
                  <span>
                    <strong>Operating playbooks.</strong>
                    {" "}Voice guidelines, approval workflows, and standards.
                  </span>
                </li>
                <li>
                  <span className="sq" aria-hidden="true"></span>
                  <span>
                    <strong>Response and escalation.</strong>
                    {" "}Clear processes for when conversations need a fast, careful answer.
                  </span>
                </li>
                <li>
                  <span className="sq" aria-hidden="true"></span>
                  <span>
                    <strong>Coaching.</strong>
                    {" "}Ongoing support while your team ramps up.
                  </span>
                </li>
              </ul>
            </div>
          </article>
          <article className="service-block" id="content">
            <div>
              <h2>Content + Editorial</h2>
              <p className="service-block__lead">Ideas communities actually want.</p>
              <div className="service-block__out">
                <b>You walk away with</b>
                Content that earns its place in the feed, and a team that knows how to make more.
              </div>
            </div>
            <div>
              <p className="muted-light" style={{ fontSize: "18px", maxWidth: "58ch" } as React.CSSProperties}>
                We co-create with your team and coach as we go, so every piece earns its place and your people learn how to make the next one.
              </p>
              <ul className="checklist" style={{ marginTop: "20px" } as React.CSSProperties}>
                <li>
                  <span className="sq" aria-hidden="true"></span>
                  <span>
                    <strong>AMAs and expert sessions.</strong>
                    {" "}Putting your people in front of the communities that want to hear from them.
                  </span>
                </li>
                <li>
                  <span className="sq" aria-hidden="true"></span>
                  <span>
                    <strong>Big ideas and moments.</strong>
                    {" "}Creative programs built for how communities actually behave.
                  </span>
                </li>
                <li>
                  <span className="sq" aria-hidden="true"></span>
                  <span>
                    <strong>Everyday posts.</strong>
                    {" "}Guidance on posting and engagement your team can use daily.
                  </span>
                </li>
                <li>
                  <span className="sq" aria-hidden="true"></span>
                  <span>
                    <strong>Evergreen resources.</strong>
                    {" "}Guides, FAQs, and wikis communities keep coming back to.
                  </span>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>
      <section className="section section--cloud" id="process" aria-labelledby="how-title">
        <div className="wrap">
          <div className="section-head">
            <span className="kicker" aria-hidden="true"></span>
            <h2 className="display h2" id="how-title">Listen first. Build together. Hand it over.</h2>
          </div>
          <ol className="steps">
            <li className="step step--start">
              <span className="step__num">01 · Start here</span>
              <h3 className="display">Listen</h3>
              <p>
                We research the communities that matter to your brand: what they value, what they believe about you and your competitors, and who they trust. You get a clear read before anyone posts a word.
              </p>
            </li>
            <li className="step">
              <span className="step__num">02</span>
              <h3 className="display">Plan</h3>
              <p>
                We turn that into a strategy tied to your business goals, with clear priorities on where to show up, what to say, and what to avoid.
              </p>
            </li>
            <li className="step">
              <span className="step__num">03</span>
              <h3 className="display">Build</h3>
              <p>
                We help stand up the foundation: accounts, owned communities, moderator relationships, voice guidelines, and first content.
              </p>
            </li>
            <li className="step">
              <span className="step__num">04</span>
              <h3 className="display">Hand off + grow</h3>
              <p>
                We train your team, set up the workflows, and stay on as advisors while you run it. AMAs and bigger moments come once the foundation is in place.
              </p>
            </li>
          </ol>
          <p className="steps-note">
            <span className="sq" aria-hidden="true"></span>
            Training runs alongside every stage, so your team is learning from day one.
          </p>
        </div>
      </section>
      <section className="section section--light" aria-labelledby="faq-title">
        <div className="wrap">
          <div className="section-head">
            <span className="kicker" aria-hidden="true"></span>
            <h2 className="display h2" id="faq-title">Questions we hear a lot</h2>
          </div>
          <div className="faq">
            <details>
              <summary>Do you post on Reddit for us?</summary>
              <div className="faq__answer">
                <p>
                  We can help create content and run early programs, but the goal is for your team to own your presence. Communities trust brands that show up as themselves, so we build your capability rather than become a permanent ghostwriter.
                </p>
              </div>
            </details>
            <details>
              <summary>Isn&apos;t Reddit hostile to brands?</summary>
              <div className="faq__answer">
                <p>
                  It&apos;s hostile to brands that act like spammers. Communities welcome brands that are useful, honest, and follow the rules each community sets. We help you be that kind of brand.
                </p>
              </div>
            </details>
            <details>
              <summary>How does this help us show up in AI search?</summary>
              <div className="faq__answer">
                <p>
                  AI systems look for a consistent, credible story about your brand across many sources, and community conversations are a big one. When real people say good things about you in detail, that carries into the answers AI gives. It&apos;s a result of earning trust, not a trick.
                </p>
              </div>
            </details>
            <details>
              <summary>How is this different from a social media agency?</summary>
              <div className="faq__answer">
                <p>
                  Social agencies broadcast. Reddit is organized around communities with their own norms, moderators, and memory. Our team comes from inside Reddit, and we work inside-out, starting with the community rather than the campaign.
                </p>
              </div>
            </details>
            <details>
              <summary>How long until we see results?</summary>
              <div className="faq__answer">
                <p>
                  Research takes weeks. A real presence takes months, and it compounds. We set outcomes with you at the start and report against them, but anyone promising overnight results on Reddit is selling a shortcut.
                </p>
              </div>
            </details>
            <details>
              <summary>Do we need an existing Reddit presence to start?</summary>
              <div className="faq__answer">
                <p>
                  No. Many clients start from zero, and some start from a reputation problem. Either way, we begin by understanding where you stand.
                </p>
              </div>
            </details>
            <details>
              <summary>Who do you work with?</summary>
              <div className="faq__answer">
                <p>
                  Mostly enterprise brands in categories people discuss on Reddit, with a team ready to own the work. We&apos;re a fit when you want a durable presence, not a one-off campaign.
                </p>
              </div>
            </details>
          </div>
          <div className="btn-row">
            <Link className="btn btn--primary" href="/contact">Start a conversation</Link>
          </div>
        </div>
      </section>
    </>
  );
}
