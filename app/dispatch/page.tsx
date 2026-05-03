import type { Metadata } from "next";
import DispatchClient from "./DispatchClient";

export const metadata: Metadata = {
  title: "Dispatch & Route Optimization — GCC Logistics",
  description:
    "24/7 dispatch management and route optimization built for the GCC. Stacking logic, live re-routing, prayer-time awareness and demand planning. Doha operations centre serving 6 markets.",
  alternates: { canonical: "https://ajilb2b.com/dispatch" },
  openGraph: {
    title: "Dispatch & Route Optimization | Ajil Logistics Services",
    description:
      "24/7 dispatch management and route optimization built for the GCC. Stacking logic, live re-routing, prayer-time awareness.",
    url: "https://ajilb2b.com/dispatch",
  },
};

const dispatchServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://ajilb2b.com/dispatch",
  "name": "Dispatch & Route Optimization",
  "serviceType": "Dispatch Management",
  "description":
    "24/7 dispatch management with stacking logic, live re-routing, local GCC intelligence and demand planning. Doha-based control room serving 6 markets.",
  "provider": { "@id": "https://ajilb2b.com/#organization" },
  "areaServed": [
    { "@type": "Country", "name": "Qatar" },
    { "@type": "Country", "name": "United Arab Emirates" },
    { "@type": "Country", "name": "Saudi Arabia" },
    { "@type": "Country", "name": "Kuwait" },
    { "@type": "Country", "name": "Bahrain" },
    { "@type": "Country", "name": "Oman" },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ajilb2b.com" },
    { "@type": "ListItem", "position": 2, "name": "Dispatch", "item": "https://ajilb2b.com/dispatch" },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dispatchServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <DispatchClient />
    </>
  );
}
