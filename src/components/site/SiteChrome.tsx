import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import PageEffects from "./PageEffects";

/* The frame, header and footer shared by every marketing page. */
export default function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="frame" aria-hidden="true">
        <div className="frame__side">
          <span>Memes to an End&nbsp;&nbsp;/&nbsp;&nbsp;From LOLs to LLMs</span>
        </div>
      </div>
      <SiteHeader />
      <main id="main">{children}</main>
      <SiteFooter />
      <PageEffects />
    </>
  );
}
