import type { Metadata } from "next";
import Link from "next/link";

/* Converted from Will's static press.html. Edit the markup here;
   styles live in src/app/site.css. */

export const metadata: Metadata = {
  title: "Press",
  description: "The people the industry calls to explain Reddit: years of coverage, interviews, and talks from the Memes to an End team in Adweek, Variety, Digiday, The Drum, and more.",
  openGraph: {
    title: "Press — Memes to an End",
    description: "Memes to an End was founded by former Reddit leaders to help brands earn trust in the communities where people and AI form opinions.",
  },
};

export default function PressPage() {
  return (
    <>
      <section className="page-hero" aria-labelledby="page-title">
        <div className="wrap">
          <span className="tag">In the press</span>
          <h1 className="display h1" id="page-title">The people the industry calls to explain Reddit</h1>
          <p className="lede">
            Since 2016, reporters, brands, and conference stages have come to our team to understand what’s really happening on Reddit and why it matters. This is the record.
          </p>
        </div>
      </section>
      <section className="creds" aria-labelledby="record-title">
        <div className="wrap">
          <h2 className="visually-hidden" id="record-title">Highlights</h2>
          <ul className="creds__list">
            <li>
              <strong>Teaching the industry Reddit</strong>
              <span>From the stages of Cannes Lions, CES, SXSW, Variety’s summits, and more</span>
            </li>
            <li>
              <strong>Adweek 50, 2020</strong>
              <span>Named among the media, marketing, and tech leaders who delivered in a year that tested everyone</span>
            </li>
            <li>
              <strong>KarmaLab, 2021</strong>
              <span>Reddit’s in-house creative strategy agency, covered by Adweek and Marketing Dive at launch</span>
            </li>
            <li>
              <strong>Across the trade press</strong>
              <span>Adweek, Variety, Digiday, The Drum, Marketing Dive, Modern Retail, LBB</span>
            </li>
          </ul>
        </div>
      </section>
      <section className="section section--cloud" id="campaigns" aria-labelledby="campaigns-title">
        <div className="wrap">
          <div className="section-head">
            <span className="kicker" aria-hidden="true"></span>
            <h2 className="display h2" id="campaigns-title">The work, in the news</h2>
            <p className="body-lg muted-light">Some of Reddit’s biggest brand moments our team helped bring to life, and the coverage they earned.</p>
          </div>
          <ul className="camps">
            <li className="camp">
              <div className="camp__head">
                <h3 className="camp__name">Adobe PhotoshopBattles Live</h3>
                <span className="camp__year">2021</span>
              </div>
              <ul className="camp__links">
                <li>
                  <a href="https://engadget.com/reddit-adobe-photoshop-battle-streaming-170210802.html" target="_blank" rel="noopener">
                    <span className="camp__pub">Engadget · Oct 2021</span>
                    <span className="camp__title">Reddit’s first live show is a Photoshop competition</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.adweek.com/?p=1357927" target="_blank" rel="noopener">
                    <span className="camp__pub">Adweek · Oct 2021</span>
                    <span className="camp__title">How Adobe and Reddit are inspiring creativity and collaboration with a battle</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="camp">
              <div className="camp__head">
                <h3 className="camp__name">Reddit’s Super Bowl ad</h3>
                <span className="camp__year">2021</span>
              </div>
              <span className="camp__award">Cannes Lions Grand Prix</span>
              <ul className="camp__links">
                <li>
                  <a href="https://www.adweek.com/?p=1319824" target="_blank" rel="noopener">
                    <span className="camp__pub">Adweek · Jun 2021</span>
                    <span className="camp__title">Reddit, Burger King win Cannes Social and Influencer Grand Prix</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.adweek.com/brand-marketing/why-reddit-spent-its-entire-marketing-budget-on-a-5-second-super-bowl-ad/" target="_blank" rel="noopener">
                    <span className="camp__pub">Adweek · Feb 2021</span>
                    <span className="camp__title">Why Reddit spent its entire marketing budget on a 5-second Super Bowl ad</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.cnbc.com/2021/02/08/how-reddit-made-its-super-bowl-commercial-in-less-than-a-week.html" target="_blank" rel="noopener">
                    <span className="camp__pub">CNBC · Feb 2021</span>
                    <span className="camp__title">How Reddit put together that five-second Super Bowl commercial in less than a week</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="camp">
              <div className="camp__head">
                <h3 className="camp__name">Adobe r/Layer</h3>
                <span className="camp__year">2019–20</span>
              </div>
              <span className="camp__award">WARC case study</span>
              <ul className="camp__links">
                <li>
                  <a href="https://www.newsweek.com/reddit-layer-what-how-use-new-adobe-1458798" target="_blank" rel="noopener">
                    <span className="camp__pub">Newsweek · Sep 2019</span>
                    <span className="camp__title">What is Reddit Layer? Understanding the new collaboration with Adobe</span>
                  </a>
                </li>
                <li>
                  <a href="https://redditinc.com/news/the-internets-largest-collaborative-canvas-returns-to-reddit-with-r-layer-season-two-in-partnership-with-adobe" target="_blank" rel="noopener">
                    <span className="camp__pub">Reddit · Oct 2020</span>
                    <span className="camp__title">
                      The internet’s largest collaborative canvas returns to Reddit with r/Layer ‘Season Two’ in partnership with Adobe
                    </span>
                  </a>
                </li>
                <li>
                  <a href="https://www.warc.com/content/article/adobe-r-layer/134485" target="_blank" rel="noopener">
                    <span className="camp__pub">WARC · Nov 2020</span>
                    <span className="camp__title">Adobe: r/Layer</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="camp">
              <div className="camp__head">
                <h3 className="camp__name">Audi Think Faster</h3>
                <span className="camp__year">2018</span>
              </div>
              <span className="camp__award">Shorty Awards Gold Honor</span>
              <ul className="camp__links">
                <li>
                  <a href="https://digiday.com/marketing/nice-balance-audi-launches-reddit-campaign-think-faster-drive-conversation/" target="_blank" rel="noopener">
                    <span className="camp__pub">Digiday · May 2018</span>
                    <span className="camp__title">’A nice balance’: Audi launches Reddit campaign ’Think Faster’ to drive conversation</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.warc.com/content/article/event-reports/audis-think-faster-hits-the-road-with-reddit/en-gb/122872" target="_blank" rel="noopener">
                    <span className="camp__pub">WARC · Jul 2018</span>
                    <span className="camp__title">Audi’s ’Think Faster’ hits the road with Reddit</span>
                  </a>
                </li>
                <li>
                  <a href="https://shortyawards.com/10th/audi" target="_blank" rel="noopener">
                    <span className="camp__pub">The Shorty Awards · 2018</span>
                    <span className="camp__title">Think Faster: the world’s fastest AMA</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="camp camp--wide">
              <div className="camp__head">
                <h3 className="camp__name">Reddit live events</h3>
                <span className="camp__year">2017–2023</span>
              </div>
              <a className="camp__award camp__award--link" href="https://www.eventmarketer.com/article/grand-ex-2023-reddit-giant-spoon-find-your-people/" target="_blank" rel="noopener">Grand Ex · Campaign of the Year 2023, for Cannes Lions 2022 + CES 2023</a>
              <ul className="camp__events">
                <li className="camp__event">
                  <p className="camp__event-name">SXSW 2017{" "}</p>
                  <p className="camp__event-sub">Twitch x Reddit IRL: four days of live AMAs</p>
                  <ul className="camp__links">
                    <li>
                      <a href="https://www.tubefilter.com/2017/03/01/reddit-twitch-live-stream-sxsw-ama/" target="_blank" rel="noopener">
                        <span className="camp__pub">Tubefilter · Mar 2017</span>
                        <span className="camp__title">Reddit teams with Twitch for four days of live-streaming AMAs at SXSW</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://blog.twitch.tv/en/2017/03/10/twitch-and-reddit-join-forces-for-sxsw-4af57ee66419" target="_blank" rel="noopener">
                        <span className="camp__pub">Twitch · Mar 2017</span>
                        <span className="camp__title">Twitch and Reddit join forces for SXSW</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="camp__event">
                  <p className="camp__event-name">
                    Cannes Lions 2022{" "}
                    <span className="camp__mini">Grand Ex</span>
                  </p>
                  <p className="camp__event-sub">Reddit Explorers Club</p>
                  <ul className="camp__links">
                    <li>
                      <a href="https://www.eventmarketer.com/article/reddits-activationn-cannes-lions-2022-explorer-theme" target="_blank" rel="noopener">
                        <span className="camp__pub">Event Marketer · Aug 2022</span>
                        <span className="camp__title">Inside Reddit’s Explorer-themed Cannes Lions activation</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="camp__event">
                  <p className="camp__event-name">
                    CES 2023{" "}
                    <span className="camp__mini">Grand Ex</span>
                  </p>
                  <p className="camp__event-sub">Reddit Future Tellers lounge</p>
                  <ul className="camp__links">
                    <li>
                      <a href="https://www.bizbash.com/meetings/ces-2023-the-high-tech-inventions-and-high-level-activations-that-caught-our-eye" target="_blank" rel="noopener">
                        <span className="camp__pub">BizBash · Jan 2023</span>
                        <span className="camp__title">CES 2023: the high-tech inventions and high-level activations that caught our eye</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="camp__event">
                  <p className="camp__event-name">Cannes Lions 2023{" "}</p>
                  <p className="camp__event-sub">Reddit Recommends</p>
                  <ul className="camp__links">
                    <li>
                      <a href="https://www.eventmarketer.com/article/reddit-returns-to-cannes-lions-with-reddit-recommends" target="_blank" rel="noopener">
                        <span className="camp__pub">Event Marketer · Aug 2023</span>
                        <span className="camp__title">Reddit returns to Cannes Lions with a new ’Reddit Recommends’ activation</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
      <section className="section section--light" aria-labelledby="articles-title">
        <div className="wrap">
          <div className="section-head">
            <span className="kicker" aria-hidden="true"></span>
            <h2 className="display h2" id="articles-title">On the record</h2>
            <p className="body-lg muted-light">
              Before Reddit was a line in most media plans, we were explaining how it works, what it means for brands, and how to earn a place there. The thinking has held up.
            </p>
          </div>
          <ul className="press-list">
            <li>
              <a className="press-row" href="https://lbbonline.com/news/how-reddit-recommendations-drive-business-for-brands" target="_blank" rel="noopener">
                <span className="press-row__date">Jul 2023</span>
                <span className="press-row__pub">LBB</span>
                <span className="press-row__title">How Reddit recommendations drive business for brands</span>
              </a>
            </li>
            <li>
              <a className="press-row" href="https://www.marketingdive.com/news/reddit-sets-up-in-house-creative-agency-karmalab-to-scale-ad-business/600152/" target="_blank" rel="noopener">
                <span className="press-row__date">May 2021</span>
                <span className="press-row__pub">Marketing Dive</span>
                <span className="press-row__title">Reddit sets up in-house creative agency KarmaLab to scale ad business</span>
              </a>
            </li>
            <li>
              <a className="press-row" href="https://www.adweek.com/media/a-lot-more-consultative-reddit-rebrands-its-creative-strategy-team-as-karmalab/" target="_blank" rel="noopener">
                <span className="press-row__date">May 2021</span>
                <span className="press-row__pub">Adweek</span>
                <span className="press-row__title">’A lot more consultative’: Reddit rebrands its creative strategy team as KarmaLab</span>
              </a>
            </li>
            <li>
              <a className="press-row" href="https://www.modernretail.co/retailers/brands-are-increasingly-seeing-reddit-as-a-marketing-goldmine/" target="_blank" rel="noopener">
                <span className="press-row__date">Apr 2021</span>
                <span className="press-row__pub">Modern Retail</span>
                <span className="press-row__title">Brands are increasingly seeing Reddit as a marketing goldmine</span>
              </a>
            </li>
            <li>
              <a className="press-row" href="https://www.thedrum.com/news/2021/03/15/gone-fishing-why-marketers-should-be-loading-up-their-tackle-boxes" target="_blank" rel="noopener">
                <span className="press-row__date">Mar 2021</span>
                <span className="press-row__pub">The Drum</span>
                <span className="press-row__title">Gone fishing: why marketers should be loading up their tackle boxes</span>
              </a>
            </li>
            <li>
              <a className="press-row" href="https://www.adweek.com/brand-marketing/the-adweek-50-media-marketing-and-tech-leaders-who-delivered-the-goods-despite-trying-times/" target="_blank" rel="noopener">
                <span className="press-row__date">Sep 2020</span>
                <span className="press-row__pub">Adweek</span>
                <span className="press-row__title">The Adweek 50 of 2020: these leaders delivered the goods in trying times</span>
              </a>
            </li>
            <li>
              <a className="press-row" href="https://www.thedrum.com/news/2020/07/23/what-s-trending-reddit-and-what-does-it-mean-brands" target="_blank" rel="noopener">
                <span className="press-row__date">Jul 2020</span>
                <span className="press-row__pub">The Drum</span>
                <span className="press-row__title">What’s trending on Reddit, and what does it mean for brands?</span>
              </a>
            </li>
            <li>
              <a className="press-row" href="https://digiday.com/marketing/reddit-new-york-office-new-hire/" target="_blank" rel="noopener">
                <span className="press-row__date">May 2019</span>
                <span className="press-row__pub">Digiday</span>
                <span className="press-row__title">’A new narrative’: Reddit’s ad-focused New York office now has 60 people</span>
              </a>
            </li>
            <li>
              <a className="press-row" href="https://www.adweek.com/performance-marketing/this-musician-found-a-community-of-fans-on-reddit-now-he-leads-brand-strategy-for-the-platform/" target="_blank" rel="noopener">
                <span className="press-row__date">Jan 2019</span>
                <span className="press-row__pub">Adweek</span>
                <span className="press-row__title">This musician found a community of fans on Reddit. Now, he leads brand strategy for the platform</span>
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section className="section section--cloud" aria-labelledby="talks-title">
        <div className="wrap">
          <div className="section-head">
            <span className="kicker" aria-hidden="true"></span>
            <h2 className="display h2" id="talks-title">On stage and on air</h2>
            <p className="body-lg muted-light">
              Conversations on community, creativity, and what changes when AI starts learning from the internet’s most honest conversations.
            </p>
          </div>
          <ul className="press-list">
            <li>
              <a className="press-row" href="https://missionmatters.com/bringing-humanity-back-to-modern-insights-with-vanessa-hensler" target="_blank" rel="noopener">
                <span className="press-row__date">Jun 2026</span>
                <span className="press-row__pub">Mission Matters</span>
                <span className="press-row__title">Bringing humanity back to modern insights with Vanessa Hensler</span>
              </a>
            </li>
            <li>
              <a className="press-row" href="https://www.youtube.com/watch?v=AeMp26IKtvA" target="_blank" rel="noopener">
                <span className="press-row__date">2024</span>
                <span className="press-row__pub">Samsung (SGCC ’24)</span>
                <span className="press-row__title">Owning your creativity in a world going AI with Reddit’s Will Cady</span>
              </a>
            </li>
            <li>
              <a className="press-row" href="https://variety.com/2023/digital/news/variety-entertainment-technology-summit-innovation-media-trendsetters-1235732051/" target="_blank" rel="noopener">
                <span className="press-row__date">Sep 2023</span>
                <span className="press-row__pub">Variety</span>
                <span className="press-row__title">Industry leaders talk technology and business innovation, and when it’s better to be a fast follower</span>
              </a>
            </li>
            <li>
              <a className="press-row" href="https://www.youtube.com/watch?v=_DgIbLXwphg" target="_blank" rel="noopener">
                <span className="press-row__date">Mar 2023</span>
                <span className="press-row__pub">Samsung</span>
                <span className="press-row__title">Finding your community on Reddit</span>
              </a>
            </li>
            <li>
              <a className="press-row" href="https://www.adweek.com/brand-marketing/remember-the-human-with-will-cady/" target="_blank" rel="noopener">
                <span className="press-row__date">Feb 2022</span>
                <span className="press-row__pub">Adweek</span>
                <span className="press-row__title">Remember the human with Will Cady</span>
              </a>
            </li>
            <li>
              <a className="press-row" href="https://onlinegeniuses.com/will-cady-qa-session/" target="_blank" rel="noopener">
                <span className="press-row__date">Jul 2020</span>
                <span className="press-row__pub">Online Geniuses</span>
                <span className="press-row__title">Will Cady Q&A session</span>
              </a>
            </li>
            <li>
              <a className="press-row" href="https://www.youtube.com/watch?v=Pqdt9S_hjlw" target="_blank" rel="noopener">
                <span className="press-row__date">Mar 2017</span>
                <span className="press-row__pub">The Daily Dot</span>
                <span className="press-row__title">How can Reddit monetize responsibly?</span>
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section className="section section--light" aria-labelledby="podcasts-title">
        <div className="wrap">
          <div className="section-head">
            <span className="kicker" aria-hidden="true"></span>
            <h2 className="display h2" id="podcasts-title">On the mic</h2>
            <p className="body-lg muted-light">
              Long-form conversations on how Reddit works, why community beats broadcast, and how brands earn trust there.
            </p>
          </div>
          <ul className="press-list">
            <li>
              <a className="press-row" href="https://open.spotify.com/episode/3HX9ZEHYRz28R7mdRA3YUs" target="_blank" rel="noopener">
                <span className="press-row__date">Aug 2026</span>
                <span className="press-row__pub">Marketing, Demystified</span>
                <span className="press-row__title">Reddit marketing strategy: how to build trust and earn attention</span>
              </a>
            </li>
            <li>
              <a className="press-row" href="https://open.spotify.com/episode/0xaJadcWWT7wzpCnEjF1Pr" target="_blank" rel="noopener">
                <span className="press-row__date">Jun 2026</span>
                <span className="press-row__pub">Well To Do</span>
                <span className="press-row__title">Building Reddit and culture creation with Will Cady</span>
              </a>
            </li>
            <li>
              <a className="press-row" href="https://open.spotify.com/episode/7pNrnw2jrzE7HzMuBXuCqt" target="_blank" rel="noopener">
                <span className="press-row__date">May 2023</span>
                <span className="press-row__pub">The GALE Podcast</span>
                <span className="press-row__title">What community teaches us about culture</span>
              </a>
            </li>
            <li>
              <a className="press-row" href="https://open.spotify.com/episode/3DJXPul97GscA8qCoClGaX" target="_blank" rel="noopener">
                <span className="press-row__date">Mar 2023</span>
                <span className="press-row__pub">The Influence Factor</span>
                <span className="press-row__title">Exploring the influence and impact of Reddit</span>
              </a>
            </li>
            <li>
              <a className="press-row" href="https://open.spotify.com/episode/2DIUh3HaKAtvzxbMgo74iq" target="_blank" rel="noopener">
                <span className="press-row__date">Apr 2021</span>
                <span className="press-row__pub">Marketing News Canada</span>
                <span className="press-row__title">Will Cady on Reddit</span>
              </a>
            </li>
            <li>
              <a className="press-row" href="https://open.spotify.com/episode/0daX6lYYvEYa6gPj2TZV7A" target="_blank" rel="noopener">
                <span className="press-row__date">Jul 2019</span>
                <span className="press-row__pub">Leads2Scale</span>
                <span className="press-row__title">Reddit’s community approach to brand marketing</span>
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section className="section section--dark section--tight" aria-labelledby="press-cta-title">
        <div className="wrap">
          <span className="kicker" aria-hidden="true"></span>
          <h2 className="display h2" id="press-cta-title">The same thinking, applied to your brand</h2>
          <div className="btn-row">
            <Link className="btn btn--primary" href="/contact">Start a conversation</Link>
          </div>
          <p className="after-grid muted-dark" style={{ fontSize: "15px" } as React.CSSProperties}>
            Press inquiries:{" "}
            <a className="text-link" href="mailto:info@m2e.ai">info@m2e.ai</a>
          </p>
        </div>
      </section>
    </>
  );
}
