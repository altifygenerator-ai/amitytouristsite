import Image from "next/image";
import TrackedBusinessLink from "@/components/TrackedBusinessLink";
import type { FeaturedBusiness } from "@/data/amity";

export default function BusinessCard({
  business,
  page,
  placement,
}: {
  business: FeaturedBusiness;
  page: string;
  placement: string;
}) {
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${business.name} Amity Arkansas`
  )}`;
  const detailsUrl = `/local-business/${business.slug}`;

  return (
    <article className="business-card">
      <TrackedBusinessLink
        href={detailsUrl}
        business={business.name}
        page={page}
        placement={placement}
        placementType={business.placementType}
        action="view-details"
        className="business-card-image"
      >
        <Image src={business.image} alt={business.name} fill sizes="(max-width: 800px) 100vw, 33vw" />
        <span className={business.placementType === "paid" ? "badge badge-paid" : "badge"}>
          {business.badge}
        </span>
      </TrackedBusinessLink>

      <div className="business-card-body">
        <p className="eyebrow small">{business.category}</p>
        <h3>{business.name}</h3>
        <p>{business.shortDescription}</p>

        {business.notes ? (
          <div className="chip-row">
            {business.notes.map((note) => (
              <span key={note}>{note}</span>
            ))}
          </div>
        ) : null}

        <div className="card-actions">
          <TrackedBusinessLink
            href={detailsUrl}
            business={business.name}
            page={page}
            placement={placement}
            placementType={business.placementType}
            action="details-page"
            className="mini-button"
          >
            Details
          </TrackedBusinessLink>

          <TrackedBusinessLink
            href={directionsUrl}
            business={business.name}
            page={page}
            placement={placement}
            placementType={business.placementType}
            action="directions"
            className="mini-button mini-button-outline"
          >
            Directions
          </TrackedBusinessLink>
        </div>
      </div>
    </article>
  );
}
