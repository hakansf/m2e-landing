"use client";

import { useEffect, useRef } from "react";

/* Reactive dot texture for the home hero and every page header.
   The CSS dot grid (.hero::after) stays as the base layer. This canvas only
   lights up the dots near the cursor, on the same 28px grid, so nothing
   moves: dots just brighten where you point and fade back when you leave.
   Off on touch screens and when the visitor has reduced motion turned on. */
const STEP = 28;
const RADIUS = 150;

export default function DotField() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const hero = canvas?.closest<HTMLElement>(".hero, .page-hero, .contact-page");
    if (!canvas || !hero) return;
    if (!window.matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)").matches) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0, h = 0, dpr = 1, raf = 0;
    let target = { x: -9999, y: -9999 };
    let point = { ...target };
    let strength = 0; // fades in/out as the cursor enters and leaves

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = hero.clientWidth;
      h = hero.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
    };

    const draw = () => {
      raf = 0;
      // ease toward the cursor so the glow glides rather than jumps
      point.x += (target.x - point.x) * 0.25;
      point.y += (target.y - point.y) * 0.25;
      const want = target.x > -9000 ? 1 : 0;
      strength += (want - strength) * 0.18;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      // match the CSS field: the home hero covers the full width with a soft
      // fade from the left (behind the text scrim); page headers cover the
      // right 52% and fade in from that edge
      const full = hero.classList.contains("hero") && w > 760;
      const x0 = full ? 0 : w * 0.48;
      const coverage = (gx: number) => {
        if (full) {
          const t = gx / w;
          return t < 0.3 ? 0.25 + (t / 0.3) * 0.35 : t < 0.6 ? 0.6 + ((t - 0.3) / 0.3) * 0.4 : 1;
        }
        const fadeEnd = x0 + w * 0.52 * 0.38;
        return Math.min(1, Math.max(0, (gx - x0) / (fadeEnd - x0)));
      };
      for (let gx = x0 + STEP / 2; gx < w; gx += STEP) {
        const edge = coverage(gx);
        for (let gy = STEP / 2; gy < h; gy += STEP) {
          const d = Math.hypot(gx - point.x, gy - point.y);
          if (d > RADIUS) continue;
          const k = (1 - d / RADIUS) ** 2 * strength * edge;
          if (k < 0.02) continue;
          ctx.fillStyle = `rgba(0, 188, 212, ${0.42 + 0.58 * k})`;
          ctx.beginPath();
          ctx.arc(gx, gy, 1.1 + 1.6 * k, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      const settling = Math.abs(target.x - point.x) + Math.abs(target.y - point.y) > 0.5 || Math.abs(want - strength) > 0.01;
      if (settling) raf = requestAnimationFrame(draw);
    };
    const kick = () => { if (!raf) raf = requestAnimationFrame(draw); };

    const move = (e: PointerEvent) => {
      const r = hero.getBoundingClientRect();
      target = { x: e.clientX - r.left, y: e.clientY - r.top };
      if (point.x < -9000) point = { ...target };
      kick();
    };
    const leave = () => { target = { x: -9999, y: -9999 }; kick(); };

    resize();
    const ro = new ResizeObserver(() => { resize(); kick(); });
    ro.observe(hero);
    hero.addEventListener("pointermove", move);
    hero.addEventListener("pointerleave", leave);
    return () => {
      ro.disconnect();
      hero.removeEventListener("pointermove", move);
      hero.removeEventListener("pointerleave", leave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={ref} className="dot-field" aria-hidden="true" />;
}
