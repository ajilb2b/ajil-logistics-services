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

const dedicatedFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Ajil Dedicated Logistics?",
      "acceptedAnswer": { "@type": "Answer", "text": "Ajil Dedicated Logistics is a ringfenced delivery operation that runs exclusively for your business. Ajil designs the network, sources the warehouse and dark store footprint, hires and manages the riders, and operates the branded delivery arm under your name — with a named General Manager accountable to your SLAs." },
    },
    {
      "@type": "Question",
      "name": "What is a dark store in logistics?",
      "acceptedAnswer": { "@type": "Answer", "text": "A dark store is a fulfilment hub closed to the public and optimised for rapid picking and dispatch. Ajil operates dark stores as micro-fulfilment nodes positioned in high-density catchments — enabling 15-minute delivery SLAs for grocery, pharmacy and quick-commerce operators across the GCC." },
    },
    {
      "@type": "Question",
      "name": "How long does it take to set up a dedicated logistics operation with Ajil?",
      "acceptedAnswer": { "@type": "Answer", "text": "A standard dedicated deployment — covering network design, hub and dark store procurement, rider hiring and operations go-live — takes 8 to 12 weeks depending on the geographic footprint and vehicle mix required. Enterprise deployments covering multiple GCC markets may require additional lead time." },
    },
    {
      "@type": "Question",
      "name": "Who is accountable for the Ajil dedicated operation?",
      "acceptedAnswer": { "@type": "Answer", "text": "A named Ajil General Manager owns the entire dedicated operation, supported by a dedicated operations and technology team. You have a single escalation path, a single contract and monthly SLA review sessions with Ajil senior leadership." },
    },
    {
      "@type": "Question",
      "name": "Can Ajil white-label the dedicated operation under our brand?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. The dedicated operation is fully white-labelled to your identity: riders wear your uniform, vehicles carry your livery, customer notifications are sent in your tone of voice, and all customer-facing touchpoints — tracking pages, SMS, email — are branded to your company." },
    },
  ],
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dedicatedFaqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <DedicatedClient />
    </>
  );
}
