import type { Metadata } from "next";
import Link from "next/link";
import LinkedInLink from "@/components/site/LinkedInLink";
import ClientQuotes from "@/components/site/ClientQuotes";
import CommunityGallery from "@/components/site/CommunityGallery";
import DotField from "@/components/site/DotField";
import PressMarquee from "@/components/site/PressMarquee";
import ContactForm from "@/components/site/ContactForm";

/* Converted from Will's static index.html. Edit the markup here;
   styles live in src/app/site.css. */

export const metadata: Metadata = {
  title: { absolute: "Memes to an End — From LOLs to LLMs" },
  description: "Memes to an End helps enterprise brands earn trust in the communities where people and AI form opinions. Community research, strategy, and enablement from former Reddit leaders.",
  openGraph: {
    title: "Memes to an End — From LOLs to LLMs",
    description: "We harness the power of online culture as a force to strengthen your business. Community research, strategy, and enablement from former Reddit leaders.",
  },
};

/* eslint-disable @next/next/no-img-element -- plain images keep the original sizing exactly */

export default function HomePage() {
  return (
    <>
      {/* ============================== HERO ============================== Background is a placeholder. To add a photo:   style="--hero-image:url('assets/img/hero.jpg')" on .hero To add a video loop: put <video autoplay muted loop playsinline src="assets/video/hero.mp4"></video> inside .hero__bg */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__bg" aria-hidden="true"></div>
        <DotField />
        <div className="wrap hero__grid">
          <div className="hero__copy">
            <h1 className="display h1" id="hero-title">
              <span className="line">
                From LOL
                <span className="s">s</span>
              </span>
              <span className="line">
                to LLM
                <span className="s">s</span>…
              </span>
            </h1>
            {/* the headline runs into this line: "From LOLs to LLMs… we harness…" */}
            <p className="lede">…we harness the power of online culture as a force to strengthen your business.</p>
            <p className="hero__sub">
              M2E reads the communities that shape your reputation (what people believe, who they trust, and why) and turns it into strategy. Then we fortify your capability to show up where it matters most for the long run: on Reddit, in search, and in the AI answers people now trust.
            </p>
            <p className="hero__tagline">Understand the questions. Be part of the answers.</p>
            <div className="btn-row">
              <Link className="btn btn--primary" href="/contact">Start a conversation</Link>
              <Link className="btn btn--ghost" href="/services#process">See how we work</Link>
            </div>
          </div>
          <div className="hero__art" aria-hidden="true">
            <svg className="network" viewBox="0 0 560 640" role="presentation">
              {/* spine */}
              <path className="path" style={{ "--d": ".15s" } as React.CSSProperties} d="M60 600 C 150 590, 210 540, 250 470 S 290 340, 300 300 S 340 200, 400 170 S 470 90, 520 40"></path>
              {/* branches */}
              <path className="path" style={{ "--d": "1.1s" } as React.CSSProperties} d="M300 300 C 330 300, 350 330, 392 334"></path>
              <path className="path" style={{ "--d": "1.2s" } as React.CSSProperties} d="M250 470 C 280 470, 300 448, 342 446"></path>
              <path className="path" style={{ "--d": "1.3s" } as React.CSSProperties} d="M400 170 C 420 190, 440 205, 470 206"></path>
              <path className="path" style={{ "--d": "1.4s" } as React.CSSProperties} d="M452 112 C 480 104, 500 116, 520 126"></path>
              <path className="path" style={{ "--d": "1.0s" } as React.CSSProperties} d="M130 586 C 150 610, 175 625, 205 622"></path>
              <path className="path" style={{ "--d": "1.25s" } as React.CSSProperties} d="M300 300 C 270 290, 250 268, 236 250"></path>
              <g className="layer layer--far">
                {/* nodes */}
                <rect className="node node--cyan pop" style={{ "--d": ".3s" } as React.CSSProperties} x="38" y="578" width="44" height="44"></rect>
                <rect className="node node--cyan pop" style={{ "--d": ".55s" } as React.CSSProperties} x="126" y="582" width="9" height="9"></rect>
                <rect className="node node--hollow pop" style={{ "--d": "1.5s" } as React.CSSProperties} x="205" y="604" width="38" height="34"></rect>
                <rect className="node pop" style={{ "--d": ".8s" } as React.CSSProperties} x="240" y="460" width="20" height="20"></rect>
                <rect className="node node--cyan pop" style={{ "--d": "1.55s" } as React.CSSProperties} x="342" y="440" width="13" height="13"></rect>
                <g className="pulse">
                  <rect className="node node--cyan pop" style={{ "--d": "1s" } as React.CSSProperties} x="276" y="276" width="48" height="48"></rect>
                </g>
                <rect className="node node--hollow pop" style={{ "--d": "1.6s" } as React.CSSProperties} x="392" y="324" width="22" height="20"></rect>
                <rect className="node pop" style={{ "--d": "1.65s" } as React.CSSProperties} x="226" y="236" width="16" height="16"></rect>
                <rect className="node pop" style={{ "--d": "1.25s" } as React.CSSProperties} x="391" y="161" width="18" height="18"></rect>
                <rect className="node pop" style={{ "--d": "1.7s" } as React.CSSProperties} x="470" y="199" width="14" height="14"></rect>
                <rect className="node node--deep pop" style={{ "--d": "1.45s" } as React.CSSProperties} x="430" y="96" width="46" height="30"></rect>
                <rect className="node node--hollow pop" style={{ "--d": "1.9s" } as React.CSSProperties} x="514" y="30" width="12" height="10"></rect>
                <rect className="node pop" style={{ "--d": "1.8s" } as React.CSSProperties} x="518" y="118" width="40" height="40" fill="#1a2023"></rect>
              </g>
              <g className="layer layer--near">
                {/* labels */}
                <text className="fade label--strong" style={{ "--d": "1.2s" } as React.CSSProperties} x="96" y="566">Search</text>
                <text className="fade" style={{ "--d": "1.9s" } as React.CSSProperties} x="250" y="634" textAnchor="start" dx="0">Reviews</text>
                <text className="fade label--strong" style={{ "--d": "1.3s" } as React.CSSProperties} x="228" y="476" textAnchor="end">People</text>
                <text className="fade" style={{ "--d": "1.9s" } as React.CSSProperties} x="362" y="452">Support</text>
                <text className="fade label--brand" style={{ "--d": "1.4s" } as React.CSSProperties} x="300" y="346" textAnchor="middle">YOUR BRAND</text>
                <text className="fade" style={{ "--d": "2s" } as React.CSSProperties} x="422" y="339">Product</text>
                <text className="fade" style={{ "--d": "2s" } as React.CSSProperties} x="218" y="232" textAnchor="end">Press</text>
                <text className="fade label--strong" style={{ "--d": "1.6s" } as React.CSSProperties} x="380" y="175" textAnchor="end">Communities</text>
                <text className="fade" style={{ "--d": "2.1s" } as React.CSSProperties} x="492" y="211">Experts</text>
                <text className="fade label--strong" style={{ "--d": "1.8s" } as React.CSSProperties} x="418" y="88" textAnchor="end">AI answers</text>
              </g>
            </svg>
          </div>
        </div>
      </section>
      {/* ============================== CREDENTIALS ============================== */}
      <section className="creds" aria-labelledby="creds-title">
        <div className="wrap">
          <h2 className="creds__lead" id="creds-title">The team that helped build Reddit’s brand business, now on your side.</h2>
          <ul className="creds__list">
            <li>
              <strong>Founded KarmaLab</strong>
              <span>Reddit’s in-house creative strategy agency</span>
            </li>
            <li>
              <strong>Behind Reddit’s biggest brand moments</strong>
              <span>Award-winning, internet-breaking brand campaigns</span>
            </li>
            <li>
              <strong>Built Reddit’s teams and offices</strong>
              <span>The same capability we now build inside your company, so your team can run it</span>
            </li>
            <li>
              <strong>Research led by USC faculty</strong>
              <span>Academic rigor on how communities form and what they trust</span>
            </li>
          </ul>
        </div>
      </section>
      {/* ============================== PRESS MARQUEE (outlets in src/lib/site-config.ts) ============================== */}
      <PressMarquee />
      {/* ============================== PROOF BAR (needs approval) ============================== */}
      <section className="proof" data-flag="clients" hidden aria-label="Clients">
        <div className="wrap proof__inner">
          <span className="mono-note">Trusted by</span>
          {/* Swap these text names for the official logo files once cleared */}
          <ul className="proof__logos">
            <li>Adobe</li>
            <li>Root Insurance</li>
          </ul>
        </div>
      </section>
      {/* ============================== THE SHIFT ============================== */}
      <section className="section section--light" aria-labelledby="manifesto-title">
        <div className="wrap">
          <h2 className="visually-hidden" id="manifesto-title">The shift</h2>
          <div className="manifesto__text">
            <p>
              People love brands but stopped trusting ads a long time ago. Now, when people ask questions, they’re not just looking for answers, they’re looking for conversations. Even when they ask AI, the AI asks people.
            </p>
            <p>
              The conversations that decide what a brand means happen in communities, and the brands that win there show up as members, not marketers.
            </p>
            <p>We help you become one.</p>
          </div>
          <p className="manifesto__close">
            <Link className="text-link" href="/about#manifesto">Read our manifesto</Link>
          </p>
        </div>
      </section>
      {/* ============================== COMMUNITIES (tiles in src/lib/site-config.ts) ============================== */}
      <CommunityGallery />
      {/* ============================== WHAT WE DO ============================== */}
      <section className="section section--cloud" id="services" aria-labelledby="do-title">
        <div className="wrap">
          <div className="section-head">
            <span className="kicker" aria-hidden="true"></span>
            <h2 className="display h2" id="do-title">Everything you need to show up well, and keep showing up</h2>
            <p className="body-lg muted-light">
              Every engagement starts with research. It’s the part of our work brands tell us they can’t get anywhere else.
            </p>
          </div>
          <div className="feature">
            <div className="feature__body">
              <span className="feature__label">Research + Intelligence</span>
              <h3>Understand the beliefs behind the behaviors.</h3>
              <p>
                Surveys tell you what people say when asked. Social listening tells you how often you&apos;re mentioned. Neither tells you what a community has decided about your brand, why it decided that, and who it believes.
              </p>
              <p>
                Our research reads communities the way an anthropologist would and reports on them the way a strategist would. It&apos;s led by an academic researcher and built on years of watching how communities form opinions from the inside.
              </p>
              <p className="feature__pull">Insight you can use well beyond Reddit, in product, support, comms, and every channel AI reads.</p>
            </div>
            <div>
              <p className="feature__list-title">What you get</p>
              <ul className="checklist">
                <li>
                  <span className="sq" aria-hidden="true"></span>
                  <span>
                    <strong>Community audit.</strong>
                    {" "}Where your brand stands today, what&apos;s driving it, and where to focus first.
                  </span>
                </li>
                <li>
                  <span className="sq" aria-hidden="true"></span>
                  <span>
                    <strong>Narrative report.</strong>
                    {" "}The stories people tell about your brand and category, and which ones are spreading.
                  </span>
                </li>
                <li>
                  <span className="sq" aria-hidden="true"></span>
                  <span>
                    <strong>Competitive read.</strong>
                    {" "}Who your category trusts and how they earned it.
                  </span>
                </li>
                <li>
                  <span className="sq" aria-hidden="true"></span>
                  <span>
                    <strong>Audience and advocate profiles.</strong>
                    {" "}Your fans, critics, and power users, in their own words.
                  </span>
                </li>
                <li>
                  <span className="sq" aria-hidden="true"></span>
                  <span>
                    <strong>Ongoing briefings.</strong>
                    {" "}What&apos;s shifting, before it shows up in search, AI answers, or your support queue.
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="services">
            <article className="service">
              <h3>Research</h3>
              <p>Know what communities really think before you say a word.</p>
              <p className="service__out">
                <b>You walk away with</b>
                A clear read of the conversation and a prioritized list of where to show up.
              </p>
            </article>
            <article className="service">
              <h3>Strategy</h3>
              <p>A plan for where to show up, how, and with whom.</p>
              <p className="service__out">
                <b>You walk away with</b>
                A roadmap your team can execute, with clear priorities and guardrails.
              </p>
            </article>
            <article className="service">
              <h3>Enablement</h3>
              <p>Your team, trained and set up to run it themselves.</p>
              <p className="service__out">
                <b>You walk away with</b>
                An in-house capability that runs without us.
              </p>
            </article>
            <article className="service">
              <h3>Content</h3>
              <p>Ideas communities actually want.</p>
              <p className="service__out">
                <b>You walk away with</b>
                Content that earns its place in the feed, and a team that knows how to make more.
              </p>
            </article>
          </div>
          <p className="after-grid">
            <Link className="text-link" href="/services">See everything included in each service</Link>
          </p>
        </div>
      </section>
      {/* ============================== CLIENT QUOTES (edit in src/lib/site-config.ts) ============================== */}
      <ClientQuotes />
      {/* ============================== WHY REDDIT ============================== */}
      <section className="section section--light section--tight" id="why-reddit" aria-labelledby="reddit-title">
        <div className="wrap">
          <div className="section-head">
            <span className="tag">Why Reddit</span>
            <h2 className="display h2" id="reddit-title">Upstream of everything</h2>
          </div>
          <div className="reddit__body">
            <p>
              For twenty years, Reddit has been where ideas get tested before they spread. What gets debated, upvoted, and settled there shows up later in search results, in the press, in group chats, and now in AI answers.
            </p>
            <p>
              The AI rush is just the latest reason brands are paying attention. Before it, people started adding “reddit” to their Google searches to find real answers. After it, there will be another reason. And as the internet reorganizes around information real people have vouched for, Reddit only matters more.
            </p>
          </div>
        </div>
      </section>
      <aside className="payoff" aria-label="Our advice">
        <div className="wrap">
          <p className="payoff__line">Reddit before you have to Reddit, so when you have to Reddit, you’ve already Reddited.</p>
        </div>
      </aside>
      {/* ============================== WHY NOW ============================== */}
      <section className="section section--dark" aria-labelledby="ai-title">
        <div className="wrap">
          <div className="section-head">
            <span className="tag">Why now</span>
            <h2 className="display h2" id="ai-title">People ask AI. AI asks people.</h2>
          </div>
          <div className="split">
            <div className="split__body">
              <p>
                Instead of clicking through ten blue links, people ask ChatGPT, Gemini, Perplexity, or Google’s AI. Those systems look for a story that holds up everywhere: your site, reviews, press, and the communities where people talk about you. When those agree, AI repeats it with confidence. When they don’t, it hedges or picks someone else.
              </p>
              <p className="pullquote">Reddit isn’t a hack for AI visibility. It’s where people, and AI, go to check the story.</p>
            </div>
            <ul className="stats">
              <li className="stat">
                <p className="stat__fig">1 in 2</p>
                <p className="stat__text">US shoppers verify AI recommendations on Reddit before they buy.</p>
                <p className="stat__src">
                  Reddit Path to Purchase survey, fielded by Attest, May 2026 ·{" "}
                  <a href="https://www.business.reddit.com/blog/path-to-purchase">Reddit</a>
                  {" "}·{" "}
                  <a href="https://ppc.land/half-of-us-shoppers-fact-check-ai-on-reddit-before-buying-survey-finds/">PPC Land</a>
                </p>
              </li>
              <li className="stat">
                <p className="stat__fig">
                  60%
                  <small>vs 53%</small>
                </p>
                <p className="stat__text">of US shoppers trust Reddit to verify AI recommendations, more than they trust family or friends.</p>
                <p className="stat__src">
                  Same survey · 13,956 US adults ·{" "}
                  <a href="https://www.business.reddit.com/blog/path-to-purchase">Reddit</a>
                </p>
              </li>
              <li className="stat">
                <p className="stat__fig stat__fig--word">Google + OpenAI</p>
                <p className="stat__text">both license Reddit conversations for their AI.</p>
                <p className="stat__src">
                  Public announcements, 2024 ·{" "}
                  <a href="https://blog.google/inside-google/company-announcements/expanded-reddit-partnership/">Google</a>
                  {" "}·{" "}
                  <a href="https://openai.com/index/openai-and-reddit-partnership/">OpenAI</a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* ============================== TEAM ============================== */}
      <section className="section section--light" aria-labelledby="why-title">
        <div className="wrap">
          <div className="section-head">
            <span className="tag">The team</span>
            <h2 className="display h2" id="why-title">Built by the people who built Reddit’s brand business</h2>
            <p className="body-lg muted-light">
              We build your team’s capability, not your dependence on us, so your presence keeps working after we step back.
            </p>
          </div>
          <ul className="team">
            <li className="person">
              <div className="person__media" data-eye="0.583,0.397" data-label="Partnerships">
                <img className="person__photo" src="/assets/img/team/hakan.jpg" alt="Hakan Degirmenci, stipple portrait" width="720" height="720" loading="lazy" />
                <span className="sq" aria-hidden="true"></span>
              </div>
              <h3>Hakan Degirmenci</h3>
              <LinkedInLink who="hakan" />
              <p className="person__role">Founder + CEO</p>
              <p>Six years in brand partnerships at Reddit, where he led the commercial partnership with Adobe.</p>
            </li>
            <li className="person">
              <div className="person__media" data-eye="0.380,0.520" data-label="Storytelling">
                <img className="person__photo" src="/assets/img/team/will.jpg" alt="Will Cady, stipple portrait" width="720" height="720" loading="lazy" />
                <span className="sq" aria-hidden="true"></span>
              </div>
              <h3>Will Cady</h3>
              <LinkedInLink who="will" />
              <p className="person__role">Head of Strategy and Storytelling</p>
              <p>Launched Reddit&apos;s LA office and built KarmaLab, Reddit&apos;s in-house creative strategy agency.</p>
            </li>
            <li className="person">
              <div className="person__media" data-eye="0.494,0.432" data-label="Intelligence">
                <img className="person__photo" src="/assets/img/team/vanessa.jpg" alt="Vanessa Hensler, stipple portrait" width="720" height="720" loading="lazy" />
                <span className="sq" aria-hidden="true"></span>
              </div>
              <h3>Vanessa Hensler</h3>
              <LinkedInLink who="vanessa" />
              <p className="person__role">Head of Intelligence</p>
              <p>Leads our research practice and teaches at the University of Southern California.</p>
            </li>
            <li className="person">
              <div className="person__media" data-eye="0.589,0.389" data-label="Enablement">
                <img className="person__photo" src="/assets/img/team/rachelle.jpg" alt="Rachelle Cady, stipple portrait" width="720" height="720" loading="lazy" />
                <span className="sq" aria-hidden="true"></span>
              </div>
              <h3>Rachelle Cady</h3>
              <LinkedInLink who="rachelle" />
              <p className="person__role">Head of Operations</p>
              <p>
                Leads enablement programs to empower client operations. Previously operations at Alltroo, Omaze, and UTA.
              </p>
            </li>
          </ul>
          <p className="after-grid">
            <Link className="text-link" href="/about">Meet the team</Link>
          </p>
        </div>
      </section>
      {/* ============================== IN THE PRESS ============================== */}
      <section className="section section--cloud" id="press" aria-labelledby="press-title">
        <div className="wrap">
          <div className="section-head">
            <span className="tag">In the press</span>
            <h2 className="display h2" id="press-title">Trusted voices on Reddit strategy</h2>
            <p className="body-lg muted-light">
              Since 2016, the industry has called on our team to explain what’s happening on Reddit and what it means for brands.
            </p>
          </div>
          <ul className="press-cards">
            <li>
              <a className="press-card" href="https://www.adweek.com/media/a-lot-more-consultative-reddit-rebrands-its-creative-strategy-team-as-karmalab/" target="_blank" rel="noopener">
                <span className="press-card__meta">Adweek · May 2021</span>
                <span className="press-card__title">’A lot more consultative’: Reddit rebrands its creative strategy team as KarmaLab</span>
              </a>
            </li>
            <li>
              <a className="press-card" href="https://lbbonline.com/news/how-reddit-recommendations-drive-business-for-brands" target="_blank" rel="noopener">
                <span className="press-card__meta">LBB · Jul 2023</span>
                <span className="press-card__title">How Reddit recommendations drive business for brands</span>
              </a>
            </li>
            <li>
              <a className="press-card" href="https://digiday.com/marketing/reddit-new-york-office-new-hire/" target="_blank" rel="noopener">
                <span className="press-card__meta">Digiday · May 2019</span>
                <span className="press-card__title">’A new narrative’: Reddit’s ad-focused New York office now has 60 people</span>
              </a>
            </li>
            <li>
              <a className="press-card" href="https://variety.com/2023/digital/news/variety-entertainment-technology-summit-innovation-media-trendsetters-1235732051/" target="_blank" rel="noopener">
                <span className="press-card__meta">Variety · Sep 2023</span>
                <span className="press-card__title">Industry leaders talk technology and business innovation, and when it’s better to be a fast follower</span>
              </a>
            </li>
          </ul>
          <p className="after-grid">
            <Link className="text-link" href="/press">See all press and talks</Link>
          </p>
        </div>
      </section>
      {/* ============================== CONTACT ============================== */}
      <section className="section section--dark" id="contact" aria-labelledby="contact-title">
        <div className="wrap contact">
          <div>
            <span className="kicker" aria-hidden="true"></span>
            <h2 className="display h2" id="contact-title">Let’s see what your communities are saying</h2>
            <p className="body-lg muted-dark" style={{ marginTop: "24px" } as React.CSSProperties}>
              Tell us about your brand and what you want to change. We take on a small number of engagements at a time, and we’ll come back with an honest read on whether we’re the right fit.
            </p>
            <p className="contact__direct">
              <a href="mailto:info@m2e.ai">info@m2e.ai</a>
            </p>
          </div>
          <ContactForm idPrefix="h" />
        </div>
      </section>
    </>
  );
}
