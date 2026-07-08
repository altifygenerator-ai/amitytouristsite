import type { Metadata } from "next";
import Link from "next/link";
import ContactForms from "@/components/ContactForms";
import { siteUrl } from "@/data/amity";
import Image from "next/image";
export const metadata: Metadata = {
  title: "Get Listed or Sponsor Amity Arkansas Guide | Local Business Promotion",
  description:
    "Add, update, feature, or sponsor an Amity, Arkansas business, event, market idea, river note, or Trade Days memory on the Amity Arkansas Guide.",
  alternates: { canonical: `${siteUrl}/contact` },
};

export default function ContactPage() {
  return (
    <main>
      <section className="section section-warm">
        <div className="container split-grid">
          <div className="copy-block">
            <span className="eyebrow">For Amity businesses, locals, vendors, and sponsors</span>
            <h1>Help more people find what is still here.</h1>
            <p className="lead">
              Amity needs clear, current information online. Send a business listing, sponsor question, event idea, river access note, Trade Days memory, old photo, or correction so visitors can find the town more easily.
            </p>
            <p>
              Good information, clear listings, lower-Caddo planning, and local events can bring more people through town and help the places that are still open.
            </p>
            <div className="button-row" style={{ marginTop: 26 }}>
              <a href="tel:8702604880" className="btn-primary">Call or Text: (870) 260-4880</a>
              <Link href="/local-business" className="btn-secondary">View Local Businesses</Link>
            </div>
          </div>
        <div className="contact-card contact-basics-card">
  <div className="contact-basics-image">
    <Image
      src="/images/og-cover.png"
      alt="Amity Arkansas visitor guide"
      fill
      sizes="(max-width: 1080px) 100vw, 540px"
      priority
    />
  </div>

  <div className="contact-basics-body">
    <span className="eyebrow small">What helps most</span>
    <h2>Send the basics first.</h2>

    <p>
      A good listing does not need to be fancy. It just needs enough clear information
      for someone to know where to go, when to stop, and how to check before they drive over.
    </p>

    <div className="basics-list">
      <div>
        <strong>For businesses</strong>
        <span>
          Send the name, address, phone, current hours, website or Facebook link,
          a few photos, and what visitors should know before they stop.
        </span>
      </div>

      <div>
        <strong>For events or market ideas</strong>
        <span>
          Include the date, location, contact person, vendor needs, sponsor needs,
          and whether the event is already planned or still just an idea.
        </span>
      </div>

      <div>
        <strong>For Trade Days memories</strong>
        <span>
          Old photos, names, dates, stories, and photo credit all help. Please say
          whether it is okay to share anything publicly.
        </span>
      </div>
    </div>

    <div className="contact-note-box">
      <strong>Not sure what to send?</strong>
      <p>
        Start with the name of the business, event, place, or memory and the best
        way to reach you. We can follow up for the rest.
      </p>
    </div>

    <div className="button-row contact-basics-actions">
      <a href="#advertise-form" className="btn-primary">
        Add or Sponsor a Listing
      </a>
      <a href="mailto:naturalstatetourismproject@gmail.com" className="btn-secondary">
        Email Photos or Updates
      </a>
    </div>
  </div>
</div>
        </div>
      </section>

      <ContactForms />
    </main>
  );
}
