// trigger deploy
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "M2E — Community Intelligence for the Age of AI Search",
  description:
    "We help brands build authentic community presence that search engines and AI can't ignore. Strategic services and intelligence platform from Memes to an End.",
  openGraph: {
    title: "M2E — From LOLs to LLMs",
    description:
      "Community intelligence for the age of AI search. Strategic services + M2E Signal platform.",
    url: "https://m2e.ai",
    siteName: "Memes to an End",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "M2E — From LOLs to LLMs",
    description:
      "Community intelligence for the age of AI search.",
  },
  icons: {
    icon: [
      { url: "/logos/m2e-favicon.png", type: "image/png" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
