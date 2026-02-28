import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You — M2E",
  description: "Thanks for reaching out to Memes to an End.",
};

export default function ThankYouPage() {
  return (
    <div
      className="min-h-dvh bg-[#0a0a0a] flex flex-col relative"
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(0, 188, 212, 0.06) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    >
      <div className="flex-1 flex flex-col items-center justify-center px-8">
        <div className="text-center max-w-md">
          <Image
            src="/m2e-logo.png"
            alt="Memes to an End"
            width={220}
            height={64}
            className="object-contain mx-auto mb-10"
          />
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Thanks for reaching out.
          </h1>
          <p className="text-neutral-400 text-base leading-relaxed mb-10">
            Our team will get back to you shortly.
          </p>
          <a
            href="/"
            className="inline-block px-8 py-3 border border-[#00BCD4] text-[#00BCD4] text-sm font-medium rounded-lg hover:bg-[#00BCD4] hover:text-black transition-colors"
          >
            Back to homepage
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full px-6 md:px-8 py-4 text-neutral-600 text-xs">
        {/* Mobile */}
        <div className="flex justify-center md:hidden">
          <span>
            <a href="/contact" className="hover:text-neutral-400 transition-colors">Contact</a>
            {" | "}
            <a href="/privacy" className="hover:text-neutral-400 transition-colors">Privacy</a>
            {" | "}
            <a href="/terms" className="hover:text-neutral-400 transition-colors">Terms</a>
          </span>
        </div>
        {/* Desktop */}
        <div className="hidden md:flex md:justify-between">
          <a href="/contact" className="hover:text-neutral-400 transition-colors">
            Contact Us
          </a>
          <div className="flex gap-4 items-center">
            <span>
              <a href="/privacy" className="hover:text-neutral-400 transition-colors">Privacy</a>
              {" | "}
              <a href="/terms" className="hover:text-neutral-400 transition-colors">Terms</a>
            </span>
            <span>&copy; 2026 Memes to an End</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
