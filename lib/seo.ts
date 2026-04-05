import { Metadata } from "next"

export function generateMetadata(data: any): Metadata {
  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords,

    openGraph: data.openGraph,
  }
}

export const amitySEO = {
  title:
    "Visit Amity Arkansas | Caddo River, Lake Greeson & Local Businesses",

  description:
    "Discover Amity Arkansas tourism. Float the Caddo River, visit Lake Greeson, explore local shops, and find things to do in Southwest Arkansas.",

  keywords: [
    "Amity Arkansas",
    "things to do in Amity Arkansas",
    "Caddo River float",
    "Lake Greeson Arkansas",
    "Arkansas tourism",
    "Ouachita Mountains",
    "Amity AR businesses",
  ],
}