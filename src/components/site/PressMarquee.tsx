import Link from "next/link";
import { PRESS_OUTLETS } from "@/lib/site-config";

/* A slow strip of outlets that have covered the team's work. Each name (or
   logo) opens that outlet's most recent article. Pauses on hover so a name
   can be clicked; holds still for people who turn off motion. */
export default function PressMarquee() {
  // the belt holds two copies so it loops seamlessly; the second copy is
  // hidden from screen readers and keyboard focus
  const row = (copy: boolean) => (
    <ul className="marquee__row" aria-hidden={copy || undefined}>
      {PRESS_OUTLETS.map((o) => (
        <li key={o.name}>
          <a
            className="marquee__link"
            href={o.url}
            target="_blank"
            rel="noopener"
            tabIndex={copy ? -1 : undefined}
            aria-label={copy ? undefined : `${o.name}: read the latest coverage (opens in a new tab)`}
          >
            {o.logo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img className="marquee__logo" src={o.logo} alt="" />
            ) : (
              o.name
            )}
          </a>
        </li>
      ))}
    </ul>
  );
  return (
    <section className="marquee" aria-label="The team's work in the news">
      <div className="wrap marquee__inner">
        <Link className="mono-note marquee__label" href="/press">
          The work, in the news
        </Link>
        <div className="marquee__track">
          <div className="marquee__belt">
            {row(false)}
            {row(true)}
          </div>
        </div>
      </div>
    </section>
  );
}
