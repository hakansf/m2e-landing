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
   One tile per community. Images live in public/assets/img/communities/
   as 4:5 portraits (800 × 1000), dark backgrounds, teal/magenta grade, so
   the set reads as one series. To add one: drop the image in that folder
   and add a line here. Keep the descriptions about culture, never numbers. */
export type Community = { sub: string; image: string; alt: string; line: string };

export const COMMUNITIES: Community[] = [
  {
    sub: "r/coffee",
    image: "/assets/img/communities/coffee.jpg",
    alt: "Teal latte art in a black cup, steam rising",
    line: "Home brewers and espresso obsessives. High trust, low tolerance for brand posts.",
  },
  {
    sub: "r/personalfinance",
    image: "/assets/img/communities/personalfinance.jpg",
    alt: "Close-up engraving of a hundred-dollar bill in teal light",
    line: "Careful savers who check every claim twice. Advice earns trust; pitches don't.",
  },
  {
    sub: "r/mycology",
    image: "/assets/img/communities/mycology.jpg",
    alt: "Teal, magenta and ochre mushrooms arranged against black",
    line: "Foragers and citizen scientists. Precision is respect, and a wrong ID gets corrected fast.",
  },
];

/* PRESS MARQUEE (home page, under the credentials band)
   Outlets that have covered the team's work. Only list outlets with
   confirmed coverage on the Press page. */
export const PRESS_OUTLETS = [
  "Adweek", "CNBC", "Variety", "Digiday", "The Drum", "Newsweek", "Engadget",
  "Marketing Dive", "Modern Retail", "WARC", "Event Marketer", "BizBash", "LBB", "Tubefilter",
];

/* CLIENT QUOTES
   Short, attributed quotes (not case studies). The first quote is shown
   large; the rest sit in a row of cards below it. A quote only appears once
   its `text` is filled in, so add new ones here as clients approve them. */
export type ClientQuote = { text: string; name: string; title: string; company: string };

export const QUOTES: ClientQuote[] = [
  {
    text: "Most brands think they can just run more ads on Reddit to show up in AI search. That’s not how it works. You have to build a real relationship with the community first, and Memes to an End is the only team I’ve seen that truly gets that.",
    name: "Ellen VanderWilt",
    title: "Director, Customer Marketing",
    company: "Adobe",
  },
  // Waiting on quotes:
  { text: "", name: "", title: "", company: "Amazon" },
  { text: "", name: "", title: "", company: "Root Insurance" },
  { text: "", name: "", title: "", company: "Chime" },
];
