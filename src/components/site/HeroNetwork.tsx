"use client";

import { useEffect, useRef } from "react";

/* The home hero graphic: a 3D web of what we read for a brand, in the deck's
   style (thin lines, square nodes, mono labels). It assembles on load, then
   turns slowly so it's clear you can play with it. Pointing at it pauses the
   turn (so labels can be read), dragging turns it by hand, and hovering a node
   lights its connections; moving away lets it drift again. The front is lit
   and the back falls away into shadow. Subreddit squares are sized by roughly
   how big each community is. Still for reduced motion and while off screen.
   Hand-built on a 2D canvas, no 3D library. */

type Group = { hub: string; members: string[] };

const BRAND = "Your brand";
const GROUPS: Group[] = [
  { hub: "Communities", members: ["r/personalfinance", "r/coffee", "r/SkincareAddiction", "r/BuyItForLife", "r/running", "r/shaving"] },
  { hub: "Narratives", members: ["Is it worth it?", "Alternatives", "Pricing", "Support", "How-to"] },
  { hub: "Signals", members: ["Sentiment", "Share of voice", "Search rank", "AI answers", "Engagement"] },
  { hub: "Voices", members: ["Moderators", "Power users", "Advocates", "Critics"] },
  { hub: "Actions", members: ["Strategy", "Playbooks", "Training", "AMAs"] },
];
// a few ties across groups, so it reads as a web rather than a tree
const CROSS: [string, string][] = [
  ["r/personalfinance", "Pricing"], ["r/coffee", "How-to"], ["Critics", "Sentiment"],
  ["Moderators", "AMAs"], ["Alternatives", "Share of voice"], ["Advocates", "AI answers"],
  ["r/BuyItForLife", "Is it worth it?"], ["Power users", "Playbooks"], ["Support", "Search rank"],
];

// relative community size (no numbers shown): 1 = small, 2 = big
const SCALE: Record<string, number> = {
  "r/personalfinance": 2, "r/SkincareAddiction": 1.45, "r/running": 1.4,
  "r/BuyItForLife": 1.35, "r/coffee": 1.2, "r/shaving": 0.95,
};
const SPIN = 0.16; // radians per second when idle (about one turn every 40s)

type Node = { id: number; label: string; kind: "brand" | "hub" | "member"; x: number; y: number; z: number };
const baseSize = (n: Node) => n.kind === "brand" ? 18 : n.kind === "hub" ? 12 : 7 * (SCALE[n.label] ?? 1);

function build() {
  const nodes: Node[] = [{ id: 0, label: BRAND, kind: "brand", x: 0, y: 0, z: 0 }];
  const edges: [number, number][] = [];
  const byLabel = new Map<string, number>();
  // each group gets its own direction, spread evenly around the brand
  // (golden-angle spiral); the hub sits partway out along it and its members
  // ring the hub further out, so every group reads as its own cluster
  const n = GROUPS.length;
  GROUPS.forEach((g, gi) => {
    const t = (gi + 0.5) / n;
    const inc = Math.acos(1 - 2 * t), az = gi * 2.39996 + 0.4;
    const d = { x: Math.sin(inc) * Math.cos(az), y: Math.cos(inc) * 0.9, z: Math.sin(inc) * Math.sin(az) };
    const dl = Math.hypot(d.x, d.y, d.z); d.x /= dl; d.y /= dl; d.z /= dl;
    // two directions at right angles to d, to ring the members around it
    const ref = Math.abs(d.y) < 0.9 ? { x: 0, y: 1, z: 0 } : { x: 1, y: 0, z: 0 };
    let u = { x: d.y * ref.z - d.z * ref.y, y: d.z * ref.x - d.x * ref.z, z: d.x * ref.y - d.y * ref.x };
    const ul = Math.hypot(u.x, u.y, u.z); u = { x: u.x / ul, y: u.y / ul, z: u.z / ul };
    const v = { x: d.y * u.z - d.z * u.y, y: d.z * u.x - d.x * u.z, z: d.x * u.y - d.y * u.x };
    const hub = nodes.length;
    nodes.push({ id: hub, label: g.hub, kind: "hub", x: d.x * 0.5, y: d.y * 0.5, z: d.z * 0.5 });
    edges.push([0, hub]);
    g.members.forEach((m, k) => {
      const a = (k / g.members.length) * Math.PI * 2 + gi;
      const cone = 0.55, r = k % 2 ? 1.08 : 0.92;
      const px = d.x * Math.cos(cone) + (u.x * Math.cos(a) + v.x * Math.sin(a)) * Math.sin(cone);
      const py = d.y * Math.cos(cone) + (u.y * Math.cos(a) + v.y * Math.sin(a)) * Math.sin(cone);
      const pz = d.z * Math.cos(cone) + (u.z * Math.cos(a) + v.z * Math.sin(a)) * Math.sin(cone);
      const id = nodes.length;
      nodes.push({ id, label: m, kind: "member", x: px * r, y: py * r, z: pz * r });
      edges.push([hub, id]);
      byLabel.set(m, id);
    });
  });
  CROSS.forEach(([a, b]) => {
    const ia = byLabel.get(a), ib = byLabel.get(b);
    if (ia !== undefined && ib !== undefined) edges.push([ia, ib]);
  });
  return { nodes, edges };
}

export default function HeroNetwork() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const { nodes, edges } = build();
    const neighbors = nodes.map(() => new Set<number>());
    edges.forEach(([a, b]) => { neighbors[a].add(b); neighbors[b].add(a); });

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0, h = 0, dpr = 1, raf = 0;
    let yaw = 0.5, pitch = -0.28, vYaw = 0, vPitch = 0;
    let assemble = reduce ? 1 : 0;
    const t0 = performance.now();
    let hover = -1, dragging = false, lastX = 0, lastY = 0;
    let over = false, onScreen = true, drift = 0, lastT = performance.now();
    let projected: { x: number; y: number; z: number; s: number }[] = [];

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth; h = canvas.clientHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
    };

    const draw = () => {
      raf = 0;
      if (assemble < 1) {
        const p = Math.min(1, (performance.now() - t0) / 1600);
        assemble = 1 - Math.pow(1 - p, 3);
      }
      const now = performance.now(), dt = Math.min(0.05, (now - lastT) / 1000);
      lastT = now;
      // the idle turn eases out when the pointer is over it, back in after
      const wantDrift = reduce || over || dragging ? 0 : 1;
      drift += (wantDrift - drift) * Math.min(1, dt * 5);
      if (Math.abs(wantDrift - drift) < 0.02) drift = wantDrift;
      if (!dragging) {
        yaw += vYaw + SPIN * dt * drift; pitch += vPitch;
        vYaw *= 0.93; vPitch *= 0.93;
        // drift back toward a gentle downward tilt while turning on its own
        pitch += (-0.28 - pitch) * dt * 0.4 * drift;
      }
      pitch = Math.max(-1.1, Math.min(1.1, pitch));
      const spin = yaw + (1 - assemble) * -0.9;        // the one-time settle on load
      const cy = Math.cos(spin), sy = Math.sin(spin), cp = Math.cos(pitch), sp = Math.sin(pitch);
      const R = Math.min(w, h) * 0.46, cx0 = w / 2, cy0 = h / 2;

      projected = nodes.map((n) => {
        const k = assemble;
        const x = n.x * k, y = n.y * k, z = n.z * k;
        const x1 = x * cy - z * sy, z1 = x * sy + z * cy;           // turn left/right
        const y2 = y * cp - z1 * sp, z2 = y * sp + z1 * cp;         // tilt up/down
        const s = 2.6 / (2.6 - z2);                                  // perspective
        return { x: cx0 + x1 * R * s, y: cy0 + y2 * R * s, z: z2, s };
      });

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      const lit = hover >= 0 ? neighbors[hover] : null;
      // front lit, back in shadow: z runs about -1.1 (back) to 1.1 (front)
      const depthAlpha = (z: number) => {
        const t = Math.max(0, Math.min(1, (z + 1.15) / 2.3));
        return 0.07 + 0.93 * t ** 1.7;
      };

      // lines, far ones first
      const order = edges.map((e, i) => i).sort((a, b) =>
        (projected[edges[a][0]].z + projected[edges[a][1]].z) - (projected[edges[b][0]].z + projected[edges[b][1]].z));
      for (const i of order) {
        const [a, b] = edges[i];
        const pa = projected[a], pb = projected[b];
        const on = hover >= 0 && (a === hover || b === hover);
        const al = depthAlpha((pa.z + pb.z) / 2) * (hover >= 0 && !on ? 0.35 : 1);
        ctx.strokeStyle = on ? `rgba(0, 188, 212, ${Math.min(1, al + 0.3)})` : `rgba(255, 255, 255, ${al * 0.5})`;
        ctx.lineWidth = on ? 1.4 : 0.6 + 0.7 * Math.max(0, (pa.z + pb.z) / 2);
        ctx.beginPath();
        // a slight curve, like the deck's lines
        const mx = (pa.x + pb.x) / 2 + (pb.y - pa.y) * 0.08, my = (pa.y + pb.y) / 2 - (pb.x - pa.x) * 0.08;
        ctx.moveTo(pa.x, pa.y);
        ctx.quadraticCurveTo(mx, my, pb.x, pb.y);
        ctx.stroke();
      }

      // nodes and labels, far ones first
      const byDepth = nodes.map((n) => n.id).sort((a, b) => projected[a].z - projected[b].z);
      ctx.textBaseline = "middle";
      for (const i of byDepth) {
        const n = nodes[i], p = projected[i];
        const focus = i === hover || (lit?.has(i) ?? false);
        const dim = hover >= 0 && !focus ? 0.35 : 1;
        // the brand at the centre always stays lit
        const al = (n.kind === "brand" ? 1 : depthAlpha(p.z)) * dim;
        const size = baseSize(n) * p.s;
        const lift = Math.max(0, p.z);              // how far toward the viewer
        if (n.kind === "member") {
          // grey squares that brighten as they come forward
          const g = Math.round(40 + 70 * lift);
          ctx.fillStyle = focus ? "#00bcd4" : `rgba(${g}, ${g + 10}, ${g + 14}, ${Math.min(1, al + 0.1)})`;
          ctx.strokeStyle = `rgba(${170 + 60 * lift}, ${185 + 55 * lift}, ${190 + 55 * lift}, ${al * 0.9})`;
          ctx.fillRect(p.x - size / 2, p.y - size / 2, size, size);
          ctx.strokeRect(p.x - size / 2 + 0.5, p.y - size / 2 + 0.5, size - 1, size - 1);
        } else {
          // cyan nodes glow when they're at the front
          ctx.shadowColor = "rgba(0, 188, 212, 0.75)";
          ctx.shadowBlur = (n.kind === "brand" ? 16 : 10 * lift) * dim;
          ctx.fillStyle = `rgba(0, 188, 212, ${Math.min(1, al + 0.1)})`;
          ctx.fillRect(p.x - size / 2, p.y - size / 2, size, size);
          ctx.shadowBlur = 0;
        }
      }

      // labels, front to back, skipping any that would collide with one
      // already placed (keeps it readable from every angle)
      if (assemble > 0.85) {
        const placed: [number, number, number, number][] = [];
        const fade = (assemble - 0.85) / 0.15;
        const front = [...byDepth].reverse();
        // the brand and hubs claim their space first
        const rank = { brand: 0, hub: 1, member: 2 } as const;
        front.sort((a, b) => rank[nodes[a].kind] - rank[nodes[b].kind]);
        for (const i of front) {
          const n = nodes[i], p = projected[i];
          const focus = i === hover || (lit?.has(i) ?? false);
          if (n.kind === "member" && !focus && p.z < 0.1) continue;
          const size = baseSize(n) * p.s;
          ctx.font = `${n.kind === "member" ? 400 : 500} ${n.kind === "brand" ? 13 : 11}px "IBM Plex Mono", ui-monospace, monospace`;
          const text = n.kind === "member" ? n.label : n.label.toUpperCase();
          const tw = ctx.measureText(text).width;
          // labels sit to the right of their node, or to the left near the edge
          // try the right of the node, then the left; skip if both collide
          const hits = (b: number[]) => placed.some((q) => b[0] < q[2] && b[2] > q[0] && b[1] < q[3] && b[3] > q[1]);
          const right = p.x + size / 2 + 7, left = p.x - size / 2 - 7 - tw;
          const sides = right + tw > w - 4 ? [left] : [right, left];
          let tx = sides[0];
          let box: [number, number, number, number] = [tx - 2, p.y - 8, tx + tw + 2, p.y + 8];
          if (!focus) {
            const free = sides.find((x) => !hits([x - 2, p.y - 8, x + tw + 2, p.y + 8]));
            if (free === undefined) continue;
            tx = free; box = [tx - 2, p.y - 8, tx + tw + 2, p.y + 8];
          }
          placed.push(box);
          const dim = hover >= 0 && !focus ? 0.35 : 1;
          const la = n.kind === "member" ? Math.max(0, Math.min(1, (p.z - 0.1) * 2.2)) : 1;
          const a = (focus || n.kind === "brand" ? 1 : la * depthAlpha(p.z) * dim) * fade;
          ctx.fillStyle = `rgba(255,255,255,${n.kind === "member" ? a * 0.85 : a})`;
          ctx.fillText(text, tx, p.y);
        }
      }

      const moving = assemble < 1 || drift > 0 || Math.abs(vYaw) > 0.0004 || Math.abs(vPitch) > 0.0004;
      if (moving && onScreen && !document.hidden) raf = requestAnimationFrame(draw);
    };
    const kick = () => { if (!raf) { lastT = performance.now(); raf = requestAnimationFrame(draw); } };

    const pick = (x: number, y: number) => {
      let best = -1, bd = 16;
      projected.forEach((p, i) => {
        const d = Math.hypot(p.x - x, p.y - y);
        if (d < bd && p.z > -0.6) { bd = d; best = i; }
      });
      return best;
    };
    const down = (e: PointerEvent) => {
      dragging = true; lastX = e.clientX; lastY = e.clientY; vYaw = vPitch = 0;
      canvas.setPointerCapture(e.pointerId); canvas.classList.add("is-dragging");
    };
    const move = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      if (dragging) {
        const dx = e.clientX - lastX, dy = e.clientY - lastY;
        lastX = e.clientX; lastY = e.clientY;
        yaw += dx * 0.008; pitch += dy * 0.006;
        vYaw = dx * 0.008; vPitch = dy * 0.006;
        kick();
      } else if (e.pointerType === "mouse") {
        const h2 = pick(e.clientX - r.left, e.clientY - r.top);
        if (h2 !== hover) { hover = h2; kick(); }
      }
    };
    const up = (e: PointerEvent) => {
      dragging = false; canvas.classList.remove("is-dragging");
      if (canvas.hasPointerCapture(e.pointerId)) canvas.releasePointerCapture(e.pointerId);
      if (reduce) { vYaw = vPitch = 0; }
      kick();
    };
    const enter = (e: PointerEvent) => { if (e.pointerType === "mouse") { over = true; kick(); } };
    const leave = () => { over = false; hover = -1; kick(); };
    // only turn while the hero is on screen and the tab is visible
    const io = new IntersectionObserver(([en]) => { onScreen = en.isIntersecting; if (onScreen) kick(); });
    io.observe(canvas);
    const vis = () => { if (!document.hidden) kick(); };
    document.addEventListener("visibilitychange", vis);

    resize(); kick();
    const ro = new ResizeObserver(() => { resize(); kick(); });
    ro.observe(canvas);
    document.fonts?.ready.then(kick);
    canvas.addEventListener("pointerdown", down);
    canvas.addEventListener("pointermove", move);
    canvas.addEventListener("pointerup", up);
    canvas.addEventListener("pointercancel", up);
    canvas.addEventListener("pointerleave", leave);
    canvas.addEventListener("pointerenter", enter);
    return () => {
      ro.disconnect(); io.disconnect(); cancelAnimationFrame(raf);
      document.removeEventListener("visibilitychange", vis);
      canvas.removeEventListener("pointerenter", enter);
      canvas.removeEventListener("pointerdown", down);
      canvas.removeEventListener("pointermove", move);
      canvas.removeEventListener("pointerup", up);
      canvas.removeEventListener("pointercancel", up);
      canvas.removeEventListener("pointerleave", leave);
    };
  }, []);

  return (
    <div className="hero-net">
      <canvas ref={ref} className="hero-net__canvas" aria-hidden="true" />
    </div>
  );
}
