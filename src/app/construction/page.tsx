"use client";

import Image from "next/image";

export default function UnderConstructionPage() {
  return (
    <div className="h-dvh flex flex-col md:flex-row overflow-hidden">
      {/* Top / Left panel */}
      <div className="h-[50dvh] md:h-auto md:w-1/2 bg-[#0a0a0a] flex flex-col items-center justify-center px-8 md:px-12 shrink-0">
        <div className="max-w-sm w-full flex flex-col items-center text-center gap-6 md:gap-8">
          <Image
            src="/m2e-logo.png"
            alt="Memes to an End"
            width={280}
            height={80}
            className="object-contain w-[200px] md:w-[280px]"
          />
          <div className="flex flex-col gap-3 md:gap-4">
            <p className="text-neutral-300 text-xl md:text-2xl font-medium leading-snug">
              This post has been removed by the moderators.
            </p>
            <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
              <span className="text-white font-medium">Just kidding —</span> we&apos;re building.
              <br />
              Check back soon.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom / Right panel — dot grid */}
      <div
        className="h-[50dvh] md:h-auto md:w-1/2 bg-[#0a0a0a] flex flex-col items-center justify-center relative shrink-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, #00BCD4 1.2px, transparent 1.2px)",
          backgroundSize: "28px 28px",
        }}
      >
        <div className="absolute inset-0 bg-[#0a0a0a] opacity-60" />
        <div className="relative z-10 max-w-sm w-full px-8">
          <div className="bg-neutral-900/80 border border-neutral-800 rounded-2xl p-8 text-center backdrop-blur-sm">
            <h3 className="text-white font-semibold text-lg mb-4">
              Don&apos;t want to wait?
            </h3>
            <a
              href="/contact"
              className="inline-block w-full py-2.5 px-4 rounded-lg border border-[#00BCD4] text-[#00BCD4] text-sm font-medium hover:bg-[#00BCD4] hover:text-black transition-colors"
            >
              Get in touch →
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="fixed bottom-0 left-0 right-0 z-20 flex justify-between items-center px-6 md:px-8 py-3 md:py-4 text-neutral-600 text-[10px] md:text-xs">
        <a href="/contact" className="hover:text-neutral-400 transition-colors">
          Contact Us
        </a>
        <div className="flex gap-4 md:gap-6">
          <a href="/privacy" className="hover:text-neutral-400 transition-colors">
            Privacy
          </a>
          <span>|</span>
          <a href="/terms" className="hover:text-neutral-400 transition-colors">
            Terms
          </a>
          <a href="/" className="hover:text-neutral-400 transition-colors">&copy; 2026 Memes to an End</a>
        </div>
      </div>
    </div>
  );
}
