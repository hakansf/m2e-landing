import Link from "next/link";
import Logo from "./Logo";

const nav = [
  { href: "/approach", label: "Approach" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12">
          {/* Logo + tagline */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <Logo />
            <p className="text-muted text-sm max-w-xs text-center md:text-left">
              Community intelligence for the age of AI search.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-1">
              Navigation
            </p>
            {nav.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-muted-light hover:text-white transition-colors text-sm"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-1">
              Connect
            </p>
            <a
              href="mailto:info@m2e.ai"
              className="text-muted-light hover:text-white transition-colors text-sm"
            >
              info@m2e.ai
            </a>
            <a
              href="https://linkedin.com/in/hakandegirmenci"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-light hover:text-white transition-colors text-sm"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p>&copy; {new Date().getFullYear()} Memes to an End. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <span>|</span>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
