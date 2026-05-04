import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Ajil Logistics Services",
  description:
    "End-to-end logistics for modern commerce across 6 GCC markets. Delivery management software, on-demand network, dedicated fleet and fully managed operations. Headquartered in Doha, Qatar.",
  alternates: { canonical: "https://ajilb2b.com" },
  openGraph: {
    title: "Ajil Logistics Services — Efficiency in Motion",
    description:
      "End-to-end logistics infrastructure for modern commerce. Built in Doha, deployed across the GCC.",
    url: "https://ajilb2b.com",
  },
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://ajilb2b.com/#website",
  "name": "Ajil Logistics Services",
  "url": "https://ajilb2b.com",
  "description":
    "End-to-end logistics infrastructure for modern commerce across 6 GCC markets.",
  "publisher": { "@id": "https://ajilb2b.com/#organization" },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://ajilb2b.com/?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

const homePageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://ajilb2b.com/#webpage",
  "url": "https://ajilb2b.com",
  "name": "Ajil Logistics Services — GCC Delivery & Dispatch",
  "description":
    "End-to-end logistics for modern commerce across 6 GCC markets. Delivery management software, on-demand network, dedicated fleet and fully managed operations.",
  "isPartOf": { "@id": "https://ajilb2b.com/#website" },
  "about": { "@id": "https://ajilb2b.com/#organization" },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ajilb2b.com" },
    ],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }}
      />
      <HomeClient />
    </>
  );
}
