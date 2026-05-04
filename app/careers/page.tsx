import type { Metadata } from "next";
import CareersClient from "./CareersClient";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join 600+ team members across Qatar & UAE. Operations, technology and commercial roles open now. Operations, tech and sales positions open.",
  alternates: { canonical: "https://ajilb2b.com/careers" },
  openGraph: {
    title: "Careers at Ajil | Ajil Logistics Services",
    description:
      "Join 600+ team members across 6 GCC markets. Operations, technology and commercial roles open now.",
    url: "https://ajilb2b.com/careers",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ajilb2b.com" },
    { "@type": "ListItem", "position": 2, "name": "Careers", "item": "https://ajilb2b.com/careers" },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <CareersClient />
    </>
  );
}
