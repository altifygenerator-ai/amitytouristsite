"use client";

import Link from "next/link";
import { track } from "@vercel/analytics";
import type { ReactNode } from "react";

type Props = {
  href: string;
  business: string;
  city?: string;
  page: string;
  placement: string;
  placementType: "editorial" | "paid";
  action: string;
  className?: string;
  children: ReactNode;
  external?: boolean;
  target?: string;
  rel?: string;
};

export default function TrackedBusinessLink({
  href,
  business,
  city = "Amity",
  page,
  placement,
  placementType,
  action,
  className,
  children,
  external,
  target,
  rel,
}: Props) {
  const handleClick = () => {
    track("business_click", {
      business,
      city,
      page,
      placement,
      placementType,
      action,
    });
  };

  const isExternal = external || href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");

  if (isExternal) {
    return (
      <a
        href={href}
        target={target ?? (href.startsWith("http") ? "_blank" : undefined)}
        rel={rel ?? (href.startsWith("http") ? "noopener noreferrer" : undefined)}
        className={className}
        onClick={handleClick}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}
