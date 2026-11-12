"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { SHOW } from "@/lib/site-config";

/* Small page behaviors from the original static site, re-run on each page:
   - reveal content whose approval switch is on (data-flag)
   - measure the hero network's lines so the draw-in animation is exact
   - let the hero network drift slightly toward the cursor */
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

    const hero = document.querySelector<HTMLElement>(".hero");
    const net = document.querySelector<SVGElement>(".hero .network");
    if (!hero || !net || !window.matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)").matches) return;
    const move = (e: PointerEvent) => {
      const r = hero.getBoundingClientRect();
      net.style.setProperty("--mx", ((e.clientX - r.left) / r.width - 0.5).toFixed(3));
      net.style.setProperty("--my", ((e.clientY - r.top) / r.height - 0.5).toFixed(3));
    };
    const leave = () => {
      net.style.setProperty("--mx", "0");
      net.style.setProperty("--my", "0");
    };
    hero.addEventListener("pointermove", move);
    hero.addEventListener("pointerleave", leave);
    return () => {
      hero.removeEventListener("pointermove", move);
      hero.removeEventListener("pointerleave", leave);
    };
  }, [pathname]);

  return null;
}
