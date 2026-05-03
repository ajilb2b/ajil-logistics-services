import type { Metadata } from "next";
import MarketPage from "@/components/MarketPage";

export const metadata: Metadata = {
  title: "Logistics Services in Kuwait — Ajil Logistics Services",
  description:
    "Ajil Logistics Services operates across Kuwait City, Salmiya, Hawally and the greater Kuwait metropolitan area. Last-mile delivery, route optimization and dedicated logistics for Kuwait's commerce operators.",
  alternates: { canonical: "https://ajilb2b.com/kuwait" },
  openGraph: {
    title: "Logistics Services in Kuwait | Ajil Logistics Services",
    description:
      "Last-mile delivery across Kuwait City, Salmiya and Hawally. On-demand, dedicated and managed logistics for Kuwait's commerce operators.",
    url: "https://ajilb2b.com/kuwait",
  },
};

const localSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Ajil Logistics Services — Kuwait",
  "@id": "https://ajilb2b.com/#organization",
  "url": "https://ajilb2b.com/kuwait",
  "telephone": "+97477058594",
  "email": "hello@ajilb2b.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Kuwait City",
    "addressCountry": "KW",
  },
  "geo": { "@type": "GeoCoordinates", "latitude": 29.3759, "longitude": 47.9774 },
  "areaServed": { "@type": "Country", "name": "Kuwait" },
  "description": "Ajil Logistics Services operates across Kuwait City, Salmiya, Hawally, Fintas and the major Kuwait metropolitan districts with last-mile delivery and route optimization.",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ajilb2b.com" },
    { "@type": "ListItem", "position": 2, "name": "Kuwait", "item": "https://ajilb2b.com/kuwait" },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <MarketPage
        country="Kuwait"
        heroMain="Kuwait Logistics."
        heroItalic="Kuwait City and beyond."
        lede="Ajil Logistics Services operates across the Kuwait metropolitan area — Kuwait City, Salmiya, Hawally, Fintas and the major commercial and residential districts — with on-demand, dedicated and managed logistics for e-commerce, grocery, pharmacy and B2B distribution operators."
        stats={[
          { num: "2022", lbl: "Active in Kuwait" },
          { num: "Metro", lbl: "Kuwait coverage" },
          { num: "24/7", lbl: "Dispatch operations" },
          { num: "Same-day", lbl: "Delivery capability" },
        ]}
        coverageIntro="Ajil covers Kuwait City's major commercial zones and the densely populated residential governorates of Hawally, Farwaniya and Ahmadi. Routing is optimised for Kuwait's grid network, compound deliveries and prayer windows."
        zones={[
          { city: "Kuwait City", name: "Sharq & Mirqab" },
          { city: "Hawally", name: "Salmiya" },
          { city: "Hawally", name: "Rumaithiya" },
          { city: "Farwaniya", name: "Farwaniya Centre" },
          { city: "Ahmadi", name: "Fahaheel" },
          { city: "Ahmadi", name: "Fintas & Mahboula" },
          { city: "Al Asimah", name: "Al Qurain" },
          { city: "Al Asimah", name: "Bayan & Jabriya" },
        ]}
        services={[
          { num: "01", name: "Logistics Software", desc: "License Ajil Dispatch, TMS, WMS and the live control tower to manage your own Kuwait fleet and fulfilment network.", href: "/services" },
          { num: "02", name: "On-Demand Network", desc: "Pay-per-delivery access to Ajil's Kuwait rider and vehicle network across Kuwait City and the major governorates.", href: "/services" },
          { num: "03", name: "Dedicated Logistics", desc: "A ringfenced Kuwait operation in your brand — branded riders, dedicated warehousing and SLA-bound delivery.", href: "/dedicated" },
          { num: "04", name: "Fully Managed", desc: "Ajil takes ownership of your Kuwait logistics function — network design, fleet, warehouses and team on a single contract.", href: "/services" },
        ]}
        ctaLine="Ready to move in Kuwait?"
        ctaBody="Talk to our team about your Kuwait operation, delivery volumes and SLA requirements. We respond within one business day."
        ctaButton="Talk to us about Kuwait"
      />
    </>
  );
}
