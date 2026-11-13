import type { Metadata } from "next";
import DotField from "@/components/site/DotField";
import ContactForm from "@/components/site/ContactForm";

/* Converted from Will's static contact.html. Edit the markup here;
   styles live in src/app/site.css. */

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell us about your brand and what you want to change. We'll come back with an honest read on whether we're the right fit.",
  openGraph: {
    title: "Contact — Memes to an End",
    description: "Tell us about your brand and what you want to change. We'll come back with an honest read on whether we're the right fit.",
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="section section--dark contact-page" id="contact" aria-labelledby="contact-title">
        <DotField />
        <div className="wrap contact">
          <div>
            <span className="kicker" aria-hidden="true"></span>
            <h1 className="display h2" id="contact-title">Let’s see what your communities are saying</h1>
            <p className="body-lg muted-dark" style={{ marginTop: "24px" } as React.CSSProperties}>
              Tell us about your brand and what you want to change. We take on a small number of engagements at a time, and we’ll come back with an honest read on whether we’re the right fit.
            </p>
            <p className="contact__direct">
              <a href="mailto:info@m2e.ai">info@m2e.ai</a>
            </p>
          </div>
          <ContactForm idPrefix="c" />
        </div>
      </section>
    </>
  );
}
