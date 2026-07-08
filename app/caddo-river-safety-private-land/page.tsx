import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteUrl } from "@/data/amity";

export const metadata: Metadata = {
  title: "Caddo River Safety & Private Land | Amity Arkansas Access Notes",
  description:
    "Read Caddo River safety and private land reminders for Amity, Arkansas river access, including parking, posted property, weather, water levels, and respectful use.",
  keywords: [
    "Caddo River safety",
    "Caddo River private land",
    "Amity Arkansas river access rules",
    "Caddo River access etiquette",
    "Hwy 182 Caddo River safety",
  ],
  alternates: { canonical: `${siteUrl}/caddo-river-safety-private-land` },
};

const safetyNotes = [
  {
    title: "Public access is specific",
    text: "A bridge, gravel bar, or pretty river bend does not automatically mean public access. Use confirmed access points and follow signs on the ground.",
  },
  {
    title: "Parking matters",
    text: "Do not block lanes, bridges, gates, driveways, farm entrances, or emergency access. Bad parking is one of the fastest ways to lose local support.",
  },
  {
    title: "Water changes fast",
    text: "The Caddo can rise after rain and can get shallow during dry stretches. Check conditions before wading, swimming, or floating.",
  },
  {
    title: "Pack out everything",
    text: "If you bring it in, take it back out. Trash hurts the river, the landowners, and the chance of keeping access useful for the next person.",
  },
  {
    title: "Respect posted land",
    text: "Do not cross fences, walk past signs, cut through yards, or use private river frontage because someone else did it before.",
  },
  {
    title: "Do not oversell quiet spots",
    text: "Quiet river spots are not invitations to crowd private land. Amity needs useful traffic, not messes left behind for locals and landowners.",
  },
];

export default function CaddoSafetyPrivateLandPage() {
  return (
    <main>
      <section className="section section-warm">
        <div className="container split-grid">
          <div className="copy-block">
            <span className="eyebrow">River safety & private land</span>
            <h1>Good access stays good when people act right.</h1>
            <p className="lead">
              The Amity side of the Caddo can be a real asset, but only if people treat it carefully. That means legal access, clean parking, no trespassing, and no acting like a quiet road is a public campground.
            </p>
            <p>
              Visitors, locals, landowners, and businesses all need the same message: keep the river clean, use legal access, and leave quiet places quiet.
            </p>
            <div className="button-row" style={{ marginTop: 26 }}>
              <Link href="/hwy-182-caddo-river-access" className="btn-primary">Hwy 182 Access Notes</Link>
              <Link href="/caddo-river" className="btn-secondary">Back to River Guide</Link>
            </div>
          </div>
          <div className="image-panel">
            <Image src="/images/amity/CaddoRiverTrees.jpg" alt="Caddo River bank near Amity Arkansas" fill sizes="(max-width: 900px) 100vw, 45vw" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Before you go</span>
            <h2>Simple rules that keep the river useful.</h2>
          </div>
          <div className="card-grid">
            {safetyNotes.map((note) => (
              <div key={note.title} className="note-card">
                <h3>{note.title}</h3>
                <p>{note.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="dark-band">
        <div className="dark-band-image">
          <Image src="/images/amity/CaddoRiver3.jpg" alt="Caddo River access near Amity Arkansas" fill sizes="100vw" />
        </div>
        <div className="container dark-band-content">
          <span className="eyebrow">The local deal</span>
          <h2>Leave the access better than you found it.</h2>
          <p>
            Amity needs more people finding the town. It does not need litter, blocked gates, trespassing, or access drama. Keep it clean and easy for the next person.
          </p>
        </div>
      </section>
    </main>
  );
}
