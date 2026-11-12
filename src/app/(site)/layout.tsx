import SiteChrome from "@/components/site/SiteChrome";

/* Every marketing page shares the frame, header and footer. */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return <SiteChrome>{children}</SiteChrome>;
}
