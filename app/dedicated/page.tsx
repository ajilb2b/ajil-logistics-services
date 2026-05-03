import type { Metadata } from "next";
import DedicatedClient from "./DedicatedClient";

export const metadata: Metadata = {
  title: "Dedicated Logistics — Branded Fleet & Warehouse Across the GCC",
  description:
    "Ringfenced fleet, branded riders, dedicated dark stores and a named GM — capacity that operates exclusively for your brand across 6 GCC markets. Same Ajil platform, your colours.",
  alternates: { canonical: "https://ajilb2b.com/dedicated" },
  openGraph: {
    title: "Dedicated Logistics — Branded Fleet & Warehouse | Ajil",
    description:
      "Ringfenced fleet, branded riders, dedicated dark stores across the GCC. Capacity that operates exclusively for your brand.",
    url: "https://ajilb2b.com/dedicated",
  },
};

const dedicatedSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://ajilb2b.com/dedicated",
  "name": "Dedicated Logistics",
  "serviceType": "Dedicated Last-Mile Delivery",
  "description":
    "Capacity that operates exclusively for your business — branded riders, ringfenced fleet, dedicated warehouse footprint, dark store hubs and a named General Manager. SLA-bound, custom KPIs.",
  "provider": { "@id": "https://ajilb2b.com/#organization" },
  "areaServed": [
    { "@type": "Country", "name": "Qatar" },
    { "@type": "Country", "name": "United Arab Emirates" },
    { "@type": "Country", "name": "Saudi Arabia" },
    { "@type": "Country", "name": "Kuwait" },
    { "@type": "Country", "name": "Bahrain" },
    { "@type": "Country", "name": "Oman" },
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Dedicated Logistics Features",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Branded Fleet" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Dedicated Warehouse" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Dark Store Hubs" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Named General Manager" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Dispatch Platform" } },
    ],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ajilb2b.com" },
    { "@type": "ListItem", "position": 2, "name": "Dedicated Logistics", "item": "https://ajilb2b.com/dedicated" },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dedicatedSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <DedicatedClient />
    </>
  );
}
