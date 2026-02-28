import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You — M2E",
  description: "Thanks for reaching out to Memes to an End.",
};

export default function ThankYouPage() {
  return (
    <div
      className="min-h-dvh bg-[#0a0a0a] flex flex-col items-center justify-center relative px-8"
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(0, 188, 212, 0.06) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    >
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

      {/* Footer */}
      <div className="fixed bottom-0 left-0 right-0 z-20 flex justify-between items-center px-6 md:px-8 py-3 md:py-4 text-neutral-600 text-[10px] md:text-xs">
        <a href="/contact" className="hover:text-neutral-400 transition-colors">
          Contact Us
        </a>
        <div className="flex gap-4 md:gap-6">
          <span>
            <a href="/privacy" className="hover:text-neutral-400 transition-colors">Privacy</a>
            {" | "}
            <a href="/terms" className="hover:text-neutral-400 transition-colors">Terms</a>
          </span>
          <a href="/" className="hover:text-neutral-400 transition-colors">&copy; 2026 Memes to an End</a>
        </div>
      </div>
    </div>
  );
}
