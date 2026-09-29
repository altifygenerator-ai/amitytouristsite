const website = "https://www.riverviewcabins-canoes.com/";
const heroImage =
  "https://irp.cdn-website.com/3c00cf11/dms3rep/multi/opt/river%2Bview%2B%282%29-576h.webp";

export default function RiverViewCabinsHomeAd() {
  return (
    <section className="py-8 md:py-10">
      <div className="container">
        <div className="overflow-hidden rounded-3xl border border-black/10 bg-white/90 shadow-sm">
          <div className="grid md:grid-cols-[280px_1fr]">
            <a
              href={website}
              target="_blank"
              rel="sponsored noopener noreferrer"
              className="relative block min-h-[220px] overflow-hidden bg-stone-200 md:min-h-full"
              aria-label="Visit River View Cabins & Canoes website"
            >
              <img
                src={heroImage}
                alt="River View Cabins & Canoes in Oden Arkansas"
                className="absolute inset-0 h-full w-full object-cover transition duration-500 hover:scale-[1.03]"
              />
            </a>

            <div className="flex flex-col gap-6 p-6 md:p-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p
                  className="mb-2 text-xs font-bold uppercase tracking-[0.2em]"
                  style={{ color: "var(--color-accent, #315947)" }}
                >
                  Featured Cabin Stay
                </p>
                <h2
                  className="text-2xl font-semibold leading-tight md:text-3xl"
                  style={{ color: "var(--color-text, #292524)" }}
                >
                  River View Cabins & Canoes
                </h2>
                <p
                  className="mt-3 text-sm leading-7 md:text-base"
                  style={{ color: "var(--color-muted, #57534e)" }}
                >
                  14 cabins on the Ouachita River with river views, hot tubs, a
                  pool, horseback riding, canoe and kayak trips, private hiking
                  trails, and fireplaces available November 1 through March 1.
                </p>
              </div>

              <a
                href={website}
                target="_blank"
                rel="sponsored noopener noreferrer"
                className="inline-flex shrink-0 items-center justify-center rounded-full px-5 py-3 text-sm no-underline transition hover:-translate-y-0.5"
                style={{
                  backgroundColor: "var(--color-accent, #315947)",
                  color: "#ffffff",
                  fontFamily: "inherit",
                  fontWeight: 700,
                  lineHeight: 1.2,
                }}
              >
                Visit River View Cabins ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
