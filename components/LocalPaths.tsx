import Link from "next/link";
import styles from "./LocalPaths.module.css";

export default function LocalPaths() {
  return (
    <section className={styles.paths} aria-label="Start with a local stop">
      <div className="container">
        <p className="eyebrow">Start with a local stop</p>
        <nav aria-label="Explore Amity" className={`button-row ${styles.links}`}>
          <Link href="/caddo-river-access-near-amity" className="btn-secondary">Lower Caddo access</Link>
          <Link href="/restaurants" className="btn-secondary">Local food</Link>
          <Link href="/things-to-do" className="btn-secondary">Around Amity</Link>
          <Link href="/events" className="btn-secondary">Community events</Link>
        </nav>
      </div>
    </section>
  );
}
