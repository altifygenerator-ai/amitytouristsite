import type { MetadataRoute } from "next";
import { featuredBusinesses, siteUrl } from "@/data/amity";

const routes = [
  { path: "", priority: 1, changeFrequency: "weekly" as const },
  { path: "/things-to-do", priority: 0.88, changeFrequency: "weekly" as const },
  { path: "/caddo-river", priority: 0.95, changeFrequency: "weekly" as const },
  { path: "/caddo-river-access-near-amity", priority: 0.94, changeFrequency: "weekly" as const },
  { path: "/hwy-182-caddo-river-access", priority: 0.92, changeFrequency: "weekly" as const },
  { path: "/glenwood-to-amity-float-guide", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/fishing-caddo-river-near-amity", priority: 0.86, changeFrequency: "weekly" as const },
  { path: "/amity-river-day-itinerary", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/caddo-river-safety-private-land", priority: 0.84, changeFrequency: "monthly" as const },
  { path: "/near-glenwood", priority: 0.88, changeFrequency: "weekly" as const },
  { path: "/restaurants", priority: 0.88, changeFrequency: "monthly" as const },
  { path: "/local-business", priority: 0.86, changeFrequency: "monthly" as const },
  { path: "/history", priority: 0.78, changeFrequency: "monthly" as const },
  { path: "/amity-trade-days", priority: 0.86, changeFrequency: "monthly" as const },
  { path: "/events", priority: 0.82, changeFrequency: "weekly" as const },
  { path: "/submit-event", priority: 0.58, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.65, changeFrequency: "monthly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const businessRoutes: MetadataRoute.Sitemap = featuredBusinesses.map((business) => ({
    url: `${siteUrl}/local-business/${business.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.74,
  }));

  return [...staticRoutes, ...businessRoutes];
}
