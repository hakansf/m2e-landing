"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { SHOW } from "@/lib/site-config";

/* Small page behaviors from the original static site, re-run on each page:
   - reveal content whose approval switch is on (data-flag)
   - measure the hero network's lines so its one-time draw-in is exact
   (The network no longer follows the cursor or keeps moving after it draws.) */
export default function PageEffects() {
  const pathname = usePathname();

  useEffect(() => {
    document.querySelectorAll<HTMLElement>("[data-flag]").forEach((el) => {
      if (SHOW[el.dataset.flag as keyof typeof SHOW]) el.hidden = false;
    });

    document.querySelectorAll<SVGPathElement>(".network .path").forEach((p) => {
      try {
        p.style.setProperty("--len", String(Math.ceil(p.getTotalLength())));
      } catch {
        /* not measurable; the CSS default applies */
      }
    });
  }, [pathname]);

  // Spotlight cards: tell the hovered card where the pointer is, so its
  // soft cyan light sits under the cursor (styles in site.css).
  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const SPOT = ".service, .feature, .step, .service-block__out, .creds__list li, .quote-card, .community";
    const move = (e: PointerEvent) => {
      const card = (e.target as Element | null)?.closest<HTMLElement>(SPOT);
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty("--sx", `${e.clientX - r.left}px`);
      card.style.setProperty("--sy", `${e.clientY - r.top}px`);
    };
    document.addEventListener("pointermove", move, { passive: true });
    return () => document.removeEventListener("pointermove", move);
  }, []);

  return null;
}
