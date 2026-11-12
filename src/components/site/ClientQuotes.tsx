import { QUOTES } from "@/lib/site-config";

/* "In their words": the first approved quote large, the rest as cards. */
export default function ClientQuotes() {
  const quotes = QUOTES.filter((q) => q.text.trim());
  if (!quotes.length) return null;
  const [lead, ...rest] = quotes;
  const who = (q: (typeof quotes)[number]) => [q.title, q.company].filter(Boolean).join(", ");

  return (
    <section className="section section--light" aria-labelledby="voice-title">
      <div className="wrap">
        <div className="section-head">
          <span className="kicker" aria-hidden="true"></span>
          <h2 className="display h2" id="voice-title">In their words</h2>
        </div>
        <figure className="quote">
          <span className="quote__mark" aria-hidden="true">“</span>
          <div>
            <blockquote>{lead.text}</blockquote>
            <figcaption>
              <strong>{lead.name}</strong>
              {who(lead)}
            </figcaption>
          </div>
        </figure>
        {rest.length > 0 && (
          <ul className="quote-grid">
            {rest.map((q) => (
              <li key={q.name + q.company}>
                <figure className="quote-card">
                  <blockquote>{q.text}</blockquote>
                  <figcaption>
                    <strong>{q.name}</strong>
                    {who(q)}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
