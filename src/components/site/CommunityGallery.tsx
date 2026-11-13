"use client";

import { useState } from "react";
import { COMMUNITIES } from "@/lib/site-config";

/* "Every community has a culture": photo cards that turn over like playing
   cards. Front: just the photo. Back: the subreddit, what its culture is
   like, and what we'd tell a brand there. Hover or focus turns a card on a
   desktop; tapping turns it on a phone. With reduced motion turned on, the
   back fades in instead of spinning. Edit the cards in
   src/lib/site-config.ts (COMMUNITIES). */
export default function CommunityGallery() {
  const [open, setOpen] = useState<string | null>(null);
  if (!COMMUNITIES.length) return null;

  return (
    <section className="section section--dark communities" aria-labelledby="communities-title">
      <div className="wrap">
        <div className="section-head">
          <span className="kicker" aria-hidden="true"></span>
          <h2 className="display h2" id="communities-title">Every community has a culture</h2>
          <p className="body-lg muted-dark">
            Before we say a word, we learn who&rsquo;s in the room. Turn a card over to see what we&rsquo;d tell a brand there.
          </p>
        </div>
        <ul className="community-grid">
          {COMMUNITIES.map((c) => {
            const flipped = open === c.sub;
            return (
              <li key={c.sub} className="community">
                <button
                  type="button"
                  className={`flip${flipped ? " is-flipped" : ""}`}
                  aria-pressed={flipped}
                  aria-label={`${c.sub}: ${c.line} What we'd tell a brand: ${c.insight}`}
                  onClick={() => setOpen(flipped ? null : c.sub)}
                >
                  <span className="flip__inner" aria-hidden="true">
                    <span className="flip__face flip__front community__media">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={c.image} alt="" width={800} height={1000} loading="lazy" />
                    </span>
                    <span className="flip__face flip__back">
                      <span className="flip__sub">{c.sub}</span>
                      <span className="flip__line">{c.line}</span>
                      <span className="flip__label">What we&rsquo;d tell a brand</span>
                      <span className="flip__insight">{c.insight}</span>
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
