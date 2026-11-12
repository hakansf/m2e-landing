import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/img/m2e-logo-light.png" alt="Memes to an End" width={153} height={28} />
            <p className="site-footer__tag">
              From LOL<span className="s">s</span> to LLM<span className="s">s</span>
            </p>
          </div>
          <ul className="footer-links">
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/press">Press</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            {/* TODO before launch: confirm this is M2E's real LinkedIn page */}
            <li><a href="https://www.linkedin.com/company/memes-to-an-end/">LinkedIn</a></li>
          </ul>
        </div>
        <div className="site-footer__bottom">
          {/* TODO before launch: the existing /privacy page describes the app; link it once its wording is settled */}
          <p>© 2026 Memes to an End · <a href="#">Privacy</a></p>
          <p>M2E is not affiliated with or endorsed by Reddit.</p>
        </div>
      </div>
    </footer>
  );
}
