"use client";

import Image from "next/image";

export default function UnderConstructionPage() {
  return (
    <div className="min-h-screen flex">
      {/* Left panel */}
      <div className="w-full md:w-1/2 bg-[#0a0a0a] flex flex-col items-center justify-center px-12">
        <div className="max-w-sm w-full flex flex-col items-center text-center gap-8">
          <Image
            src="/m2e-logo.png"
            alt="Memes to an End"
            width={280}
            height={80}
            className="object-contain"
          />
          <p className="text-neutral-400 text-lg leading-relaxed">
            This post has been removed by the moderators.
            <br />
            <span className="text-white font-medium">Just kidding —</span> we&apos;re building.
            <br />
            Check back soon.
          </p>
        </div>
      </div>

      {/* Right panel — dot grid matching login page */}
      <div
        className="hidden md:flex w-1/2 bg-[#0a0a0a] flex-col items-center justify-center relative"
        style={{
          backgroundImage:
            "radial-gradient(circle, #00BCD4 1.2px, transparent 1.2px)",
          backgroundSize: "28px 28px",
        }}
      >
        <div className="absolute inset-0 bg-[#0a0a0a] opacity-60" />
        <div className="relative z-10 max-w-sm w-full mx-8">
          <div className="bg-neutral-900/80 border border-neutral-800 rounded-2xl p-8 text-center backdrop-blur-sm">
            <p className="text-neutral-400 text-sm mb-1">Want early access?</p>
            <h3 className="text-white font-semibold text-lg mb-4">
              Schedule a Call
            </h3>
            <a
              href="mailto:info@m2e.ai"
              className="inline-block w-full py-2.5 px-4 rounded-lg border border-[#00BCD4] text-[#00BCD4] text-sm font-medium hover:bg-[#00BCD4] hover:text-black transition-colors"
            >
              Get in touch →
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="fixed bottom-0 left-0 right-0 flex justify-between items-center px-8 py-4 text-neutral-600 text-xs">
        <a href="mailto:info@m2e.ai" className="hover:text-neutral-400 transition-colors">
          Contact Us
        </a>
        <div className="flex gap-6">
          <a href="/privacy" className="hover:text-neutral-400 transition-colors">
            Privacy Policy
          </a>
          <span>&copy; 2026 Memes to an End</span>
        </div>
      </div>
    </div>
  );
}
