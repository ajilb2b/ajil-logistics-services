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

const dispatchFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Ajil's dispatch service?",
      "acceptedAnswer": { "@type": "Answer", "text": "Ajil's dispatch service is a 24/7 command centre that plans, monitors and optimises delivery routes across your fleet using stacking logic, live re-routing and local GCC intelligence. The operation runs from Doha with senior dispatchers managing every active route across all 6 GCC markets." },
    },
    {
      "@type": "Question",
      "name": "How does route optimization reduce cost per drop?",
      "acceptedAnswer": { "@type": "Answer", "text": "Stacking logic bundles multiple deliveries onto a single route based on time windows, vehicle capacity and SLA priority. In live deployments, Ajil's optimization engine has reduced cost per drop by up to 34% and cut route time by up to 28% versus unoptimised dispatch plans." },
    },
    {
      "@type": "Question",
      "name": "What is order stacking logic in logistics?",
      "acceptedAnswer": { "@type": "Answer", "text": "Order stacking is the process of combining multiple customer deliveries into a single optimised route. The Ajil engine considers time windows, vehicle capacity, geographic clustering and SLA risk to determine the optimal stack — typically reducing empty kilometres by over 30% versus separate single-delivery routes." },
    },
    {
      "@type": "Question",
      "name": "Does Ajil's dispatch cover Ramadan and public holiday scheduling?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Local intelligence is built into the routing engine for all 6 GCC markets: prayer time windows, Ramadan schedule shifts, school zones, public holiday road patterns and gated compound access rules for Qatar, UAE, Saudi Arabia, Kuwait, Bahrain and Oman." },
    },
    {
      "@type": "Question",
      "name": "Can I use Ajil's dispatch service with my own riders?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Ajil dispatch integrates with your existing fleet via API. The dispatch platform can plan and monitor third-party and in-house fleets alongside Ajil riders, with a unified live dashboard showing all active routes and SLA status." },
    },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dispatchFaqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <DispatchClient />
    </>
  );
}
