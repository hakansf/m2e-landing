import Link from "next/link";

export default function Logo({ size = "sm" }: { size?: "sm" | "lg" }) {
  const lg = size === "lg";

  return (
    <Link
      href="/"
      className="flex flex-col items-center leading-none select-none"
    >
      <span
        className={`${lg ? "text-3xl" : "text-[15px]"} font-bold tracking-[0.25em] text-white`}
      >
        MEMES
      </span>
      <span
        className={`${lg ? "text-[10px] my-0.5" : "text-[6px]"} font-semibold tracking-[0.4em] text-white/50`}
      >
        TO AN
      </span>
      <span
        className={`${lg ? "text-3xl" : "text-[15px]"} font-bold tracking-[0.25em] text-white`}
      >
        END
      </span>
    </Link>
  );
}
