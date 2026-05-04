import type { Metadata } from "next";
import WhyClient from "./WhyClient";

export const metadata: Metadata = {
  title: "Why Ajil",
  description:
    "Operators consolidate three logistics vendors into one Ajil contract, usually within their first year. Built for GCC roads, prayer times and gated compounds, not a European model retrofitted.",
  alternates: { canonical: "https://ajilb2b.com/why" },
  openGraph: {
    title: "Why Operators Choose Ajil | Ajil Logistics Services",
    description:
      "Operators consolidate three logistics vendors into one Ajil contract. Built for GCC roads, prayer times and gated compounds.",
    url: "https://ajilb2b.com/why",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ajilb2b.com" },
    { "@type": "ListItem", "position": 2, "name": "Why Ajil", "item": "https://ajilb2b.com/why" },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <WhyClient />
    </>
  );
}
