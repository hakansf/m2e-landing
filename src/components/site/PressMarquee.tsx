import Link from "next/link";
import { PRESS_OUTLETS } from "@/lib/site-config";

/* A slow strip of outlets that have covered the team's work.
   Pauses on hover; holds still for people who turn off motion. */
export default function PressMarquee() {
  const row = (hidden: boolean) => (
    <ul className="marquee__row" aria-hidden={hidden || undefined}>
      {PRESS_OUTLETS.map((o) => (
        <li key={o}>{o}</li>
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
