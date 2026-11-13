# m2e.ai — context for Claude

Marketing site for **Memes to an End (M2E)**. Designed and first built by Will Cady as a static site, converted to Next.js (Nov 2026) so it shares a stack with the rest of M2E's tools. Read this before changing anything; it records decisions made on purpose.

## Stack

- Next.js 16 (app router, TypeScript), React 19, deployed on Vercel from `main`.
- Styling is **one stylesheet**, `src/app/site.css` (Will's original design system). Pages use its class names.
- Tailwind 4 is loaded **without its preflight reset** (`src/app/globals.css`), so the site's own base styles stay in charge. Tailwind utility classes still work, so shadcn / 21st.dev components can be added later; check them visually, since site.css element styles can override them.
- Fonts come from a Google Fonts `<link>` in `src/app/layout.tsx` (not `next/font`).

## Layout of the code

- `src/app/(site)/` — the marketing pages: `page.tsx` (home), `services`, `about`, `press`, `contact`. They share `(site)/layout.tsx`.
- `src/app/not-found.tsx` — the 404 page (renders the site chrome itself).
- `src/components/site/` — `SiteChrome` (frame, header, footer), `SiteHeader` (mobile menu + current-page state), `SiteFooter`, `ContactForm`, `PageEffects` (reveals, spotlight + approval switches), `HeroNetwork` (home hero 3D web), `DotField`.
- `src/lib/site-config.ts` — the things that change most:
  - `SHOW.clients = true` reveals the "Trusted by" client logo bar (marked `data-flag="clients"`).
  - `QUOTES` — client quotes for the home page "In their words" section: short attributed quotes (not case studies) as cards four across, each with the client's logo (`public/assets/img/clients/`, white on transparent, shown dark) and the person's photo. A quote with empty `text` is a placeholder card: it shows on Vercel preview links but is left off the live site (`VERCEL_ENV=production`).
  - `TEAM_LINKEDIN` — profile URLs for the LinkedIn icons under each team name (home + About). An empty URL shows the icon without a link.
  - `COMMUNITIES` — cards for the home "Every community has a culture" gallery. Front is the photo only; hover (desktop) or tap (phone) turns the card over to show the subreddit, `line` (the culture) and `insight` (what we'd tell a brand there). Culture and behavior only, never numbers.
  - `PRESS_OUTLETS` — names in the home press marquee; only outlets with confirmed coverage on the Press page. Each links to that outlet's most recent article there; update `url` when a newer one is added.
- `src/app/api/contact/route.ts` — contact form backend. Sends to info@m2e.ai through Resend (`RESEND_API_KEY` is set in Vercel).
- `src/app/privacy`, `src/app/terms` — older legal pages with their own styling, not yet linked from the new footer.
- `public/assets/img/` — logos, favicon, OG image, team portraits.

## Previewing

`npm run dev`, then open http://localhost:3000. A local `npm run build` needs `RESEND_API_KEY` set to any placeholder value.

## Design system (matches the M2E deck; do not drift from it)

- **Type:** Impact for headlines (uppercase), Poppins for everything else, IBM Plex Mono for small labels. Anton is only the web fallback for devices without Impact (phones). No serif fonts.
- **Color:** near-black `#0c1012`, white, cloud gray `#f2f3f4`, one accent: cyan `#00bcd4`. Cyan text on white uses `#00838f` for contrast.
- **Color blocking:** keep the mix of white, black and cyan sections.
- **Signature details:** thin frame lines and vertical side text, small cyan square bullets, cyan pill labels (`.tag`, used sparingly), the hero's network of curved lines and squares.
- **Dot texture:** a fine teal dot grid on the right side of dark areas (the home hero's grid runs the full width, fading toward the text, with a dark scrim behind the copy so it stays legible) and ink dots on the cyan band, fading in from the left so it never sits under body copy (`--dots` / `--dots-ink` in site.css). Keep it subtle and off white sections.
- **Hover:** one subtle cyan glow on boxes and cards (`--glow`). Portraits have no hover effect.
- **Header:** sticky and nearly opaque (97%) so headlines scrolling underneath don't show through. Hakan found the lighter version hard to read.
- **Scale:** Hakan found the site too big on a laptop (Nov 2026); the "Scale pass" block at the end of site.css brings headlines, ledes and spacing down. Keep new sections at that scale.
- **Team portraits:** fine stipple portraits in deep teal-black ink on white, made from the real photos (cut out, faces aligned to the same size and position, error-diffusion dots), framed with a hairline (`public/assets/img/team/`). Matches a reference Hakan chose (Nov 2026). Keep them clean: no labels, overlays or hover effects.
- **Effects (21st.dev-style, hand-built):** reactive dots in the home hero, every inner page header and the contact section (`DotField.tsx`: dots near the cursor brighten, nothing moves; off on touch and reduced motion); spotlight cards (soft cyan light under the cursor on cards, set by `PageEffects`); scroll reveals (headings, cards, tiles, team and press items fade and rise in one after another, heading rules draw in, community images settle from a slight zoom; added by `PageEffects`, so nothing is hidden without JavaScript or with reduced motion); and the press marquee (`PressMarquee.tsx`: pauses on hover, still for reduced motion).
- **Press marquee logos:** files in `public/assets/img/press/`, set as `logo` in `PRESS_OUTLETS`. Any colour works; CSS shows them all in white. Outlets without a file show their name in Impact.
- **Community imagery:** tangible things, not people: zoomed-in, textured, product-focused shots of an object that stands for a subreddit's culture (latte for r/coffee, banknote for r/personalfinance, shaving cream for r/shaving). Dark and low-key, graded to the coffee image's teal; other colours may survive as accents but teal leads. 4:5 portraits, 800 × 1000, in `public/assets/img/communities/`. All images should look like one series.
- **Hero network:** a 3D web of what we read for a brand (`HeroNetwork.tsx`, hand-built canvas, no 3D library): "Your brand" at the centre, five hubs (Communities, Narratives, Signals, Voices, Actions) with their members clustered around them, plus a few cross-links. It assembles once on load, then stays still; visitors can drag to turn it and hover a node to light its connections. It never moves on its own and never follows the cursor (Hakan removed both, Nov 2026). Labels are terms, topics and measures only, never numbers.
- **Line breaks:** headlines use `text-wrap: balance` so no line ends with a lone word. Use `<span className="keep">` to hold a phrase on one line (wider screens only) and `&nbsp;` to tie two words together everywhere.
- **Navigation:** Services, About, Press, plus the "Start a conversation" button. There is deliberately no separate "Contact" nav item (the button goes there); the footer still lists Contact.
- **Hero line:** the headline runs into the line below it: "From LOLs to LLMs…" / "…we harness the power of online culture…".
- **Manifesto link:** "Read our manifesto" lands on the Meme definition at the top of the About page (`#manifesto`).
- **Meme definition (About):** a dark block set like the logo: "MEME" in white with "S TO AN END" faded grey (the focus is on MEME), then "noun | (mēm, MEEM)" and the full dictionary sense with a cyan "1": "an idea, behavior, style, or usage that spreads from person to person within a culture". Only the first sense is shown, by choice.
- **Spacing** was deliberately tightened; standard section padding is `--section-y`, short sections use `.section--tight`.

## Copy guardrails

- Describe outcomes and the team's method. No software, tool or "platform" language, and no named proprietary frameworks or metrics.
- No AI-citation-share percentages (they date quickly). Stats must have a visible, working source link.
- Keep these claims worded exactly: "Founded KarmaLab", "Behind Reddit's biggest brand moments", "Built Reddit's teams and offices", "Research led by USC faculty", and "Since 2016" on press copy.
- Positioning: M2E builds the client's own capability (enablement). Don't imply M2E posts on a brand's behalf as the long-term model.
- Tone: confident, plain, specific. Avoid slogan-style rhymes and taglines ("We've been on the inside. Now we're on your side." read like a law-firm ad and was cut). Sentence case for body copy and buttons (buttons display uppercase via CSS). Primary CTA everywhere: "Start a conversation."
- Keep the footer line "M2E is not affiliated with or endorsed by Reddit."

## Team (current titles)

| Person | Title |
|---|---|
| Hakan Degirmenci | Founder + CEO |
| Will Cady | Head of Strategy and Storytelling |
| Vanessa Hensler | Head of Intelligence |
| Rachelle Cady | Head of Operations |

Advisor: Roxy Young (former Global CMO, Reddit) is the only advisor listed.
Short bios are on the home team cards; full bios on the About page. Update both when a bio changes.

## Press

Press items are written directly in `src/app/(site)/press/page.tsx` (newest first) and four featured cards on the home page. Only add coverage from credible outlets that has been opened and confirmed. Keep headlines exactly as published.

## Before launch (still open)

1. Add the team's LinkedIn URLs (`TEAM_LINKEDIN`) and new client quotes as they're approved (`QUOTES`).
2. Footer **Privacy** link is a placeholder; the existing `/privacy` and `/terms` pages need a wording review before they're linked.
3. Confirm the company LinkedIn URL in `SiteFooter.tsx`.
4. Client approval for logos, then flip `SHOW.clients`.
5. Confirm the "Why now" stats and source links still resolve.
