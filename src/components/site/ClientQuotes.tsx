import { QUOTES, type ClientQuote } from "@/lib/site-config";

/* "In their words": client quotes as cards, four across.
   Quotes with empty text are placeholders: they show on preview links so
   the layout can be judged, and are left off the live site. */
const IS_LIVE = process.env.VERCEL_ENV === "production";

const initials = (s: string) =>
  s.split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase();

function Card({ q }: { q: ClientQuote }) {
  const placeholder = !q.text.trim();
  return (
    <figure className={`client-quote${placeholder ? " client-quote--placeholder" : ""}`}>
      <div className="client-quote__brand">
        {q.logo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img className="client-quote__logo" src={q.logo} alt={q.company} />
        ) : (
          <span className="client-quote__name-mark">{q.company}</span>
        )}
      </div>
      <blockquote className="client-quote__text">
        {placeholder ? `Quote from ${q.company} coming soon.` : `“${q.text}”`}
      </blockquote>
      <figcaption className="client-quote__by">
        {q.photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img className="client-quote__photo" src={q.photo} alt="" width={56} height={56} loading="lazy" />
        ) : (
          <span className="client-quote__photo client-quote__photo--empty" aria-hidden="true">
            {placeholder ? "" : initials(q.name)}
          </span>
        )}
        <span>
          <strong>{placeholder ? "Name, title" : q.name}</strong>
          {placeholder ? q.company : [q.title, q.company].filter(Boolean).join(", ")}
        </span>
      </figcaption>
    </figure>
  );
}

export default function ClientQuotes() {
  const quotes = QUOTES.filter((q) => q.text.trim() || !IS_LIVE);
  if (!quotes.length) return null;
  return (
    <section className="section section--light" aria-labelledby="voice-title">
      <div className="wrap">
        <div className="section-head">
          <span className="kicker" aria-hidden="true"></span>
          <h2 className="display h2" id="voice-title">In their words</h2>
        </div>
        <ul className="client-quotes">
          {quotes.map((q) => (
            <li key={q.company}>
              <Card q={q} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
