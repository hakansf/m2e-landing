import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./site.css";

// Fonts: Poppins (body), IBM Plex Mono (labels), and Anton as the web
// fallback for headlines. Headlines use Impact first (installed on Mac +
// Windows); phones without Impact get Anton.
const FONTS_URL =
  "https://fonts.googleapis.com/css2?family=Anton&family=IBM+Plex+Mono:wght@400;500&family=Poppins:wght@400;500;600;700&display=swap";

const description =
  "Memes to an End helps enterprise brands earn trust in the communities where people and AI form opinions. Community research, strategy, and enablement from former Reddit leaders.";

export const metadata: Metadata = {
  metadataBase: new URL("https://m2e.ai"),
  title: {
    default: "Memes to an End — From LOLs to LLMs",
    template: "%s — Memes to an End",
  },
  description,
  openGraph: {
    title: "Memes to an End — From LOLs to LLMs",
    description:
      "We harness the power of online culture as a force to strengthen your business. Community research, strategy, and enablement from former Reddit leaders.",
    url: "https://m2e.ai",
    siteName: "Memes to an End",
    type: "website",
    images: ["/assets/img/og-image.jpg"],
  },
  twitter: { card: "summary_large_image" },
  icons: {
    icon: [{ url: "/assets/img/favicon.svg", type: "image/svg+xml" }],
    apple: "/assets/img/m2e-icon.png",
  },
};

export const viewport: Viewport = { themeColor: "#0c1012" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href={FONTS_URL} />
        {/* Lets the CSS run the hero's draw-in animation only when JavaScript is on */}
        <script dangerouslySetInnerHTML={{ __html: 'document.documentElement.classList.add("js")' }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
