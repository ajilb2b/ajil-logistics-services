import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Logistics Service Models — Software, On-Demand, Dedicated & Managed",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ServicesClient />
    </>
  );
}
