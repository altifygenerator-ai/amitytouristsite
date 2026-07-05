import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/amity";

const routes = [
  "",
  "/things-to-do",
  "/caddo-river",
  "/near-glenwood",
  "/restaurants",
  "/local-business",
  "/history",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
