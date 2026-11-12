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
