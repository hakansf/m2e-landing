/* APPROVAL SWITCHES
   Content waiting on sign-off is in the pages but hidden. Flip a switch to
   true once it's cleared, and every element marked data-flag="<name>"
   on every page will show. */
export const SHOW = {
  clients: false, // "Trusted by" client logo bar
};

/* TEAM LINKEDIN
   Paste each profile URL here. Until a URL is filled in, the icon still
   shows under the name but isn't clickable. */
export const TEAM_LINKEDIN = {
  hakan: "",
  will: "",
  vanessa: "",
  rachelle: "",
} as const;

export type TeamMember = keyof typeof TEAM_LINKEDIN;

/* COMMUNITY GALLERY ("Every community has a culture", home page)
   One card per community. The front is just the photo; hovering (or tapping
   on a phone) turns the card over to show:
     line    — what the culture is like
     insight — what we'd tell a brand that wants to show up there
   Keep both about culture and behavior, never numbers or data claims.
   Images live in public/assets/img/communities/ as 4:5 portraits
   (800 × 1000): tangible, close-up objects, dark, graded to the coffee
   image's teal so the set reads as one series. */
export type Community = { sub: string; image: string; alt: string; line: string; insight: string };

export const COMMUNITIES: Community[] = [
  {
    sub: "r/coffee",
    image: "/assets/img/communities/coffee.jpg",
    alt: "Teal latte art in a black cup, steam rising",
    line: "Home brewers and espresso obsessives. High trust, low tolerance for brand posts.",
    insight: "Talk craft before product. A brand that geeks out about grind size with them gets listened to; one that pushes a machine gets ignored.",
  },
  {
    sub: "r/personalfinance",
    image: "/assets/img/communities/personalfinance.jpg",
    alt: "Close-up engraving of a hundred-dollar bill in teal light",
    line: "Careful savers who check every claim twice. Advice earns trust; pitches don't.",
    insight: "Show the math. Plain fees and honest trade-offs earn more goodwill here than any rate promo.",
  },
  {
    sub: "r/mycology",
    image: "/assets/img/communities/mycology.jpg",
    alt: "Teal, magenta and ochre mushrooms arranged against black",
    line: "Foragers and citizen scientists. Precision is respect, and a wrong ID gets corrected fast.",
    insight: "Cite your sources and let the experts correct you. Here, being willing to be wrong in public reads as credibility.",
  },
  {
    sub: "r/shaving",
    image: "/assets/img/communities/shaving.jpg",
    alt: "Swirls of teal shaving cream, close up",
    line: "Ritual over routine. Members trade technique and product notes like collectors.",
    insight: "Respect the ritual. Samples and honest side-by-sides travel further here than any ad.",
  },
];

/* PRESS MARQUEE (home page, under the credentials band)
   Outlets that have covered the team's work. Only list outlets with
   confirmed coverage on the Press page. Each name links to that outlet's
   most recent article on the Press page: when you add a newer one there,
   update `url` here too.
   Logos: put each outlet's logo in public/assets/img/press/ (SVG best,
   transparent PNG fine) and set `logo`. Any colour works: the marquee shows
   every logo in white. Outlets without a logo file show their name instead. */
export type Outlet = { name: string; url: string; logo?: string };

export const PRESS_OUTLETS: Outlet[] = [
  { name: "Adweek", url: "https://www.adweek.com/brand-marketing/remember-the-human-with-will-cady/" },
  { name: "CNBC", url: "https://www.cnbc.com/2021/02/08/how-reddit-made-its-super-bowl-commercial-in-less-than-a-week.html" },
  { name: "Variety", url: "https://variety.com/2023/digital/news/variety-entertainment-technology-summit-innovation-media-trendsetters-1235732051/" },
  { name: "Digiday", url: "https://digiday.com/marketing/reddit-new-york-office-new-hire/" },
  { name: "The Drum", url: "https://www.thedrum.com/news/2021/03/15/gone-fishing-why-marketers-should-be-loading-up-their-tackle-boxes" },
  { name: "Newsweek", url: "https://www.newsweek.com/reddit-layer-what-how-use-new-adobe-1458798" },
  { name: "Engadget", url: "https://engadget.com/reddit-adobe-photoshop-battle-streaming-170210802.html", logo: "/assets/img/press/engadget.svg" },
  { name: "Marketing Dive", url: "https://www.marketingdive.com/news/reddit-sets-up-in-house-creative-agency-karmalab-to-scale-ad-business/600152/" },
  { name: "Modern Retail", url: "https://www.modernretail.co/retailers/brands-are-increasingly-seeing-reddit-as-a-marketing-goldmine/" },
  { name: "WARC", url: "https://www.warc.com/content/article/adobe-r-layer/134485" },
  { name: "Event Marketer", url: "https://www.eventmarketer.com/article/reddit-returns-to-cannes-lions-with-reddit-recommends" },
  { name: "BizBash", url: "https://www.bizbash.com/meetings/ces-2023-the-high-tech-inventions-and-high-level-activations-that-caught-our-eye" },
  { name: "LBB", url: "https://lbbonline.com/news/how-reddit-recommendations-drive-business-for-brands" },
  { name: "Tubefilter", url: "https://www.tubefilter.com/2017/03/01/reddit-twitch-live-stream-sxsw-ama/" },
];

/* CLIENT QUOTES ("In their words", home page)
   Short, attributed quotes, not case studies, shown as cards four across.
   logo:  white-on-transparent file in public/assets/img/clients/ (shown in
          dark on the card); without one, the company name shows instead.
   photo: square headshot in the same folder (shown as a circle).
   Placeholders: a quote with empty `text` shows as a grey "quote coming"
   card on preview links only. The live site (Vercel production) skips it,
   so an unapproved slot never goes public. */
export type ClientQuote = {
  text: string;
  name: string;
  title: string;
  company: string;
  logo?: string;
  photo?: string;
};

export const QUOTES: ClientQuote[] = [
  {
    text: "Most brands think they can just run more ads on Reddit to show up in AI search. That’s not how it works. You have to build a real relationship with the community first, and Memes to an End is the only team I’ve seen that truly gets that.",
    name: "Ellen VanderWilt",
    title: "Director, Customer Marketing",
    company: "Adobe",
    logo: "/assets/img/clients/adobe.png",
    photo: "/assets/img/clients/ellen-vanderwilt.jpg",
  },
  // Placeholders until each quote is approved:
  { text: "", name: "", title: "", company: "Root Insurance" },
  { text: "", name: "", title: "", company: "Chime" },
  { text: "", name: "", title: "", company: "Amazon" },
];
