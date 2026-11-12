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
- `src/components/site/` — `SiteChrome` (frame, header, footer), `SiteHeader` (mobile menu + current-page state), `SiteFooter`, `ContactForm`, `PageEffects` (hero network animation + approval switches).
- `src/lib/site-config.ts` — the things that change most:
  - `SHOW.clients = true` reveals the "Trusted by" client logo bar (marked `data-flag="clients"`).
  - `QUOTES` — client quotes for the home page "In their words" section. Short attributed quotes, not case studies. First one shows large, the rest as cards; a quote only appears once its `text` is filled in.
  - `TEAM_LINKEDIN` — profile URLs for the LinkedIn icons under each team name (home + About). An empty URL shows the icon without a link.
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
- **Dot texture:** a fine teal dot grid on the right side of dark areas and ink dots on the cyan band, fading in from the left so it never sits under body copy (`--dots` / `--dots-ink` in site.css). Keep it subtle and off white sections.
- **Hover:** one subtle cyan glow on boxes and cards (`--glow`). Portraits have no hover effect.
- **Hero network:** draws itself in once on load, then stays still. No cursor-follow and no looping pulse (Hakan removed both, Nov 2026).
- **Line breaks:** headlines use `text-wrap: balance` so no line ends with a lone word. Use `<span className="keep">` to hold a phrase on one line (wider screens only) and `&nbsp;` to tie two words together everywhere.
- **Navigation:** Services, About, Press, plus the "Start a conversation" button. There is deliberately no separate "Contact" nav item (the button goes there); the footer still lists Contact.
- **Hero line:** the headline runs into the line below it: "From LOLs to LLMs…" / "…we harness the power of online culture…".
- **Spacing** was deliberately tightened; standard section padding is `--section-y`, short sections use `.section--tight`.

## Copy guardrails

- Describe outcomes and the team's method. No software, tool or "platform" language, and no named proprietary frameworks or metrics.
- No AI-citation-share percentages (they date quickly). Stats must have a visible, working source link.
- Keep these claims worded exactly: "Founded KarmaLab", "Behind Reddit's biggest brand moments", "Built Reddit's teams and offices", "Research led by USC faculty", and "Since 2016" on press copy.
- Positioning: M2E builds the client's own capability (enablement). Don't imply M2E posts on a brand's behalf as the long-term model.
- Tone: confident, plain, specific. Sentence case for body copy and buttons (buttons display uppercase via CSS). Primary CTA everywhere: "Start a conversation."
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
