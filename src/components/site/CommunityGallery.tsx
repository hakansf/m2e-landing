import { COMMUNITIES } from "@/lib/site-config";

/* "Every community has a culture": a row of portrait tiles, one per
   community, all in the same dark teal grade. Edit the list in
   src/lib/site-config.ts (COMMUNITIES). */
export default function CommunityGallery() {
  if (!COMMUNITIES.length) return null;
  return (
    <section className="section section--dark communities" aria-labelledby="communities-title">
      <div className="wrap">
        <div className="section-head">
          <span className="kicker" aria-hidden="true"></span>
          <h2 className="display h2" id="communities-title">Every community has a culture</h2>
          <p className="body-lg muted-dark">
            Before we say a word, we learn who&rsquo;s in the room: what they value, what they argue about, and who they trust.
          </p>
        </div>
        <ul className="community-grid">
          {COMMUNITIES.map((c) => (
            <li key={c.sub} className="community spot">
              <div className="community__media">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.image} alt={c.alt} width={800} height={1000} loading="lazy" />
                <span className="community__sub">{c.sub}</span>
              </div>
              <p className="community__line">{c.line}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
