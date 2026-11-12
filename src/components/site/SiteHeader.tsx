"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/press", label: "Press" },
  // no separate "Contact" item: the "Start a conversation" button goes there
];

export default function SiteHeader() {
  const pathname = usePathname();
  // the menu remembers which page it was opened on, so it closes by itself
  // as soon as you navigate somewhere else
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;
  const setOpen = (fn: (o: boolean) => boolean) => setOpenOn(fn(open) ? pathname : null);

  return (
    <header className="site-header">
      <div className="wrap site-header__inner">
        <Link className="logo" href="/" aria-label="Memes to an End, home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/img/m2e-logo-light.png" alt="Memes to an End" width={131} height={24} />
        </Link>
        <button
          className="nav-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Close" : "Menu"}
        </button>
        <nav className={`nav${open ? " is-open" : ""}`} id="site-nav" aria-label="Main">
          <ul className="nav__links">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} aria-current={pathname === item.href ? "page" : undefined}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link className="btn btn--primary" href="/contact">
            Start a conversation
          </Link>
        </nav>
      </div>
    </header>
  );
}
