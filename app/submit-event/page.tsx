import type { Metadata } from "next";
import Link from "next/link";
import ContactForms from "@/components/ContactForms";
import { siteUrl } from "@/data/amity";

export const metadata: Metadata = {
  title: "Submit an Amity Event | Market, Vendor & Town Square Ideas",
  description:
    "Submit an Amity, Arkansas event, market idea, vendor interest, Trade Days memory, or town-square update for the Amity Arkansas Guide.",
  alternates: { canonical: `${siteUrl}/submit-event` },
};

export default function SubmitEventPage() {
  return (
    <main>
      <section className="section section-warm">
        <div className="container">
          <span className="eyebrow">Submit an event or idea</span>
          <h1>Send something that could help Amity gather again.</h1>
          <p className="lead" style={{ marginTop: 18 }}>
            This can be a real event, a vendor idea, a market lead, a Trade Days memory, a fundraiser, a cleanup day, or a local group that wants to help bring people back into town.
          </p>
          <div className="button-row" style={{ marginTop: 26 }}>
            <Link href="/events" className="btn-primary">Back to Events</Link>
            <Link href="/amity-trade-days" className="btn-secondary">Read Trade Days Story</Link>
          </div>
        </div>
      </section>

      <ContactForms showPromotion={false} />
    </main>
  );
}
