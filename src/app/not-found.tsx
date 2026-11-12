import Link from "next/link";
import SiteChrome from "@/components/site/SiteChrome";

/* Converted from Will's static 404.html. Edit the markup here;
   styles live in src/app/site.css. */


export default function NotFound() {
  return (
    <SiteChrome>
      <title>Page not found — Memes to an End</title>
        <section className="page-hero" aria-labelledby="page-title" style={{ minHeight: "60vh" } as React.CSSProperties}>
          <div className="wrap">
            <span className="kicker" aria-hidden="true"></span>
            <h1 className="display h1" id="page-title">This thread was deleted</h1>
            <p className="lede">The page you’re looking for moved or never existed.</p>
            <div className="btn-row">
              <Link className="btn btn--primary" href="/">Go to the homepage</Link>
              <Link className="btn btn--ghost" href="/contact">Start a conversation</Link>
            </div>
          </div>
        </section>
    </SiteChrome>
  );
}
