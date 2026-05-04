import type { Metadata } from "next";
import MarketPage from "@/components/MarketPage";

export const metadata: Metadata = {
  title: "Logistics Services in Bahrain | Ajil Logistics Services",
  description:
    "Ajil Logistics Services operates across Manama, Juffair, Adliya and the Capital Governorate. Last-mile delivery, route optimization and dedicated logistics for Bahrain's commerce operators.",
  alternates: { canonical: "https://ajilb2b.com/bahrain" },
  openGraph: {
    title: "Logistics Services in Bahrain | Ajil Logistics Services",
    description:
      "Last-mile delivery across Manama, Juffair and the Capital Governorate. On-demand, dedicated and managed logistics for Bahrain's commerce operators.",
    url: "https://ajilb2b.com/bahrain",
  },
};

const localSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Ajil Logistics Services: Bahrain",
  "@id": "https://ajilb2b.com/#organization",
  "url": "https://ajilb2b.com/bahrain",
  "telephone": "+97441404004",
  "email": "hello@ajilb2b.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Manama",
    "addressCountry": "BH",
  },
  "geo": { "@type": "GeoCoordinates", "latitude": 26.2235, "longitude": 50.5876 },
  "areaServed": { "@type": "Country", "name": "Bahrain" },
  "description": "Ajil Logistics Services serves Bahrain's e-commerce and commerce operators across Manama, Riffa, Juffair, Adliya and the major residential and commercial districts.",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ajilb2b.com" },
    { "@type": "ListItem", "position": 2, "name": "Bahrain", "item": "https://ajilb2b.com/bahrain" },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <MarketPage
        country="Bahrain"
        heroMain="Bahrain Logistics."
        heroItalic="Manama and the Capital Governorate."
        lede="Ajil Logistics Services serves Bahrain's e-commerce and commerce operators across Manama, Riffa, Juffair, Adliya and all major residential and commercial districts. Fast deployment, local fleet management and the full Ajil platform, built for island-market delivery economics."
        stats={[
          { num: "2022", lbl: "Active in Bahrain" },
          { num: "Island-wide", lbl: "Bahrain coverage" },
          { num: "24/7", lbl: "Dispatch operations" },
          { num: "Same-day", lbl: "Delivery capability" },
        ]}
        coverageIntro="Ajil covers Manama's commercial core and the densely populated residential districts across the Capital and Southern Governorates. Our routing engine is optimised for Bahrain's compact road network, Causeway commerce flows, and local delivery protocols."
        zones={[
          { city: "Capital", name: "Manama City Centre" },
          { city: "Capital", name: "Juffair" },
          { city: "Capital", name: "Adliya & Gudaibiya" },
          { city: "Capital", name: "Seef District" },
          { city: "Southern", name: "Riffa" },
          { city: "Southern", name: "Isa Town" },
          { city: "Muharraq", name: "Muharraq City" },
          { city: "Northern", name: "Budaiya & Saar" },
        ]}
        services={[
          { num: "01", name: "Logistics Software", desc: "License Ajil Dispatch, TMS, WMS and the live control tower to manage your own Bahrain fleet and distribution network.", href: "/services" },
          { num: "02", name: "On-Demand Network", desc: "Pay-per-delivery access to Ajil's Bahrain rider and vehicle network across Manama and the major governorates.", href: "/services" },
          { num: "03", name: "Dedicated Logistics", desc: "A ringfenced Bahrain operation in your brand — branded riders, dedicated warehousing and island-wide SLA delivery.", href: "/dedicated" },
          { num: "04", name: "Fully Managed", desc: "Ajil takes ownership of your Bahrain logistics function — network design, fleet, warehouses and team on a single contract.", href: "/services" },
        ]}
        ctaLine="Ready to move in Bahrain?"
        ctaBody="Talk to our team about your Bahrain operation, delivery volumes and SLA requirements. We respond within one business day."
        ctaButton="Talk to us about Bahrain"
      />
    </>
  );
}
