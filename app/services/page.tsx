import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Four ways to partner with Ajil: license our TMS/WMS software, use our on-demand network, build dedicated capacity, or outsource fully. One contract across all 6 GCC markets.",
  alternates: { canonical: "https://ajilb2b.com/services" },
  openGraph: {
    title: "Logistics Service Models | Ajil Logistics Services",
    description:
      "Four ways to partner with Ajil: license our TMS/WMS software, use our on-demand network, build dedicated capacity, or outsource fully.",
    url: "https://ajilb2b.com/services",
  },
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Ajil Logistics Service Models",
  "description": "Four logistics service models for modern commerce across the GCC.",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Service",
        "@id": "https://ajilb2b.com/services#software",
        "name": "Logistics Delivery Management Software",
        "serviceType": "Logistics Software",
        "description":
          "License the Ajil platform — TMS, WMS, dispatch, driver and rider apps, customer tracking and a unified control tower. Multi-tenant, white-label and API-first.",
        "provider": { "@id": "https://ajilb2b.com/#organization" },
        "areaServed": [
          { "@type": "Country", "name": "Qatar" },
          { "@type": "Country", "name": "United Arab Emirates" },
          { "@type": "Country", "name": "Saudi Arabia" },
          { "@type": "Country", "name": "Kuwait" },
          { "@type": "Country", "name": "Bahrain" },
          { "@type": "Country", "name": "Oman" },
        ],
      },
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Service",
        "@id": "https://ajilb2b.com/services#on-demand",
        "name": "On-Demand Logistics",
        "serviceType": "On-Demand Delivery",
        "description":
          "Tap into Ajil's existing rider, vehicle and warehouse network on a pay-per-delivery basis. Flex up during peaks, scale down on quiet days. Same-day and scheduled delivery across the GCC.",
        "provider": { "@id": "https://ajilb2b.com/#organization" },
        "areaServed": [
          { "@type": "Country", "name": "Qatar" },
          { "@type": "Country", "name": "United Arab Emirates" },
          { "@type": "Country", "name": "Saudi Arabia" },
          { "@type": "Country", "name": "Kuwait" },
          { "@type": "Country", "name": "Bahrain" },
          { "@type": "Country", "name": "Oman" },
        ],
      },
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "Service",
        "@id": "https://ajilb2b.com/dedicated",
        "name": "Dedicated Logistics",
        "serviceType": "Dedicated Last-Mile Delivery",
        "description":
          "Capacity that operates exclusively for your business — branded riders, ringfenced fleet, dedicated warehouse footprint and dark store hubs in your target catchments.",
        "provider": { "@id": "https://ajilb2b.com/#organization" },
        "areaServed": [
          { "@type": "Country", "name": "Qatar" },
          { "@type": "Country", "name": "United Arab Emirates" },
          { "@type": "Country", "name": "Saudi Arabia" },
          { "@type": "Country", "name": "Kuwait" },
          { "@type": "Country", "name": "Bahrain" },
          { "@type": "Country", "name": "Oman" },
        ],
      },
    },
    {
      "@type": "ListItem",
      "position": 4,
      "item": {
        "@type": "Service",
        "@id": "https://ajilb2b.com/services#managed",
        "name": "Fully Managed Operations",
        "serviceType": "Outsourced Logistics Management",
        "description":
          "We take ownership of your entire logistics function. Network design, hiring, warehouse leasing, dark store operations, fleet management — single accountable leadership team.",
        "provider": { "@id": "https://ajilb2b.com/#organization" },
        "areaServed": [
          { "@type": "Country", "name": "Qatar" },
          { "@type": "Country", "name": "United Arab Emirates" },
          { "@type": "Country", "name": "Saudi Arabia" },
          { "@type": "Country", "name": "Kuwait" },
          { "@type": "Country", "name": "Bahrain" },
          { "@type": "Country", "name": "Oman" },
        ],
      },
    },
  ],
};

const servicesFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the difference between On-Demand and Dedicated Logistics?",
      "acceptedAnswer": { "@type": "Answer", "text": "On-Demand Logistics uses Ajil's shared rider, vehicle and warehouse network on a pay-per-delivery basis — ideal for variable volumes and seasonal peaks. Dedicated Logistics is a ringfenced operation running exclusively for your business, with branded riders, a reserved fleet and a dedicated warehouse footprint. The choice comes down to volume predictability and how much control you need over brand experience and unit economics." },
    },
    {
      "@type": "Question",
      "name": "Does Ajil operate its own riders and vehicles?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. All 600+ Ajil riders are directly employed — not gig workers or sub-contractors. Every vehicle is managed by a dedicated fleet operations team. This is how Ajil Logistics Services can offer guaranteed SLAs and consistent service quality across Qatar and UAE." },
    },
    {
      "@type": "Question",
      "name": "Which GCC markets does Ajil Logistics Services operate in?",
      "acceptedAnswer": { "@type": "Answer", "text": "Ajil Logistics Services operates in Qatar, UAE, Saudi Arabia, Kuwait, Bahrain and Oman. All six markets are managed from the Doha operations centre, with local logistics hubs and dedicated teams in each country." },
    },
    {
      "@type": "Question",
      "name": "Can we start with one service model and switch to another later?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. All four service models — Software, On-Demand, Dedicated and Fully Managed — sit under a single Ajil master agreement. Most clients start with On-Demand to validate the network and migrate to Dedicated or Fully Managed as volumes grow. No new procurement process is required." },
    },
    {
      "@type": "Question",
      "name": "Is the Ajil platform included in every service model?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. All four service models include full platform access: Ajil Dispatch (TMS and route optimization), the rider app, customer tracking, the live operations dashboard and API integrations. You never pay separately for software when using an Ajil service model." },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ajilb2b.com" },
    { "@type": "ListItem", "position": 2, "name": "Service Models", "item": "https://ajilb2b.com/services" },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesFaqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ServicesClient />
    </>
  );
}
