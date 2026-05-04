import type { Metadata } from "next";
import MarketPage from "@/components/MarketPage";

export const metadata: Metadata = {
  title: "Logistics Services in Oman | Ajil Logistics Services",
  description:
    "Ajil Logistics Services operates in Oman, serving commerce operators across Muscat: Qurum, Al Khuwair, Ruwi, Al Ghubra and the Muscat Governorate. Last-mile delivery and dedicated logistics for Oman.",
  alternates: { canonical: "https://ajilb2b.com/oman" },
  openGraph: {
    title: "Logistics Services in Oman | Ajil Logistics Services",
    description:
      "Last-mile delivery across Muscat and the Muscat Governorate. On-demand, dedicated and managed logistics for Oman's commerce operators.",
    url: "https://ajilb2b.com/oman",
  },
};

const localSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Ajil Logistics Services: Oman",
  "@id": "https://ajilb2b.com/#organization",
  "url": "https://ajilb2b.com/oman",
  "telephone": "+97441404004",
  "email": "hello@ajilb2b.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Muscat",
    "addressCountry": "OM",
  },
  "geo": { "@type": "GeoCoordinates", "latitude": 23.5880, "longitude": 58.3829 },
  "areaServed": { "@type": "Country", "name": "Oman" },
  "description": "Ajil Logistics Services operates in Oman, serving commerce operators across Muscat: Qurum, Al Khuwair, Ruwi, Al Ghubra and the Muscat Governorate.",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ajilb2b.com" },
    { "@type": "ListItem", "position": 2, "name": "Oman", "item": "https://ajilb2b.com/oman" },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <MarketPage
        country="Oman"
        heroMain="Oman Logistics."
        heroItalic="Muscat and the Muscat Governorate."
        lede="Ajil Logistics Services operates in Oman, serving commerce operators across Muscat: Qurum, Al Khuwair, Ruwi, Al Ghubra and Madinat Al Sultan Qaboos. On-demand and dedicated logistics, powered by the Ajil platform and backed by our GCC-wide dispatch operation."
        stats={[
          { num: "2023", lbl: "Active in Oman" },
          { num: "Muscat", lbl: "Primary coverage" },
          { num: "24/7", lbl: "Dispatch operations" },
          { num: "Same-day", lbl: "Delivery capability" },
        ]}
        coverageIntro="Ajil's Oman operation covers Muscat's major commercial and residential districts, from Ruwi's business core to the coastal zones of Qurum and Al Ghubra. Our routing engine is tuned for Muscat's expressway network, wadi road access and prayer window scheduling."
        zones={[
          { city: "Muscat", name: "Qurum" },
          { city: "Muscat", name: "Al Khuwair" },
          { city: "Muscat", name: "Al Ghubra" },
          { city: "Muscat", name: "Madinat Sultan Qaboos" },
          { city: "Muscat", name: "Ruwi Business District" },
          { city: "Muscat", name: "Al Azaiba & Seeb" },
          { city: "Muscat", name: "Muttrah" },
          { city: "South", name: "Salalah" },
        ]}
        services={[
          { num: "01", name: "Logistics Software", desc: "License Ajil Dispatch, TMS, WMS and the live control tower to manage your own Oman fleet and distribution network.", href: "/services" },
          { num: "02", name: "On-Demand Network", desc: "Pay-per-delivery access to Ajil's Oman rider and vehicle network across Muscat and the Muscat Governorate.", href: "/services" },
          { num: "03", name: "Dedicated Logistics", desc: "A ringfenced Oman operation in your brand — branded riders, dedicated warehousing and SLA-bound delivery across Muscat.", href: "/dedicated" },
          { num: "04", name: "Fully Managed", desc: "Ajil takes ownership of your Oman logistics function — network design, fleet, warehouses and team on a single contract.", href: "/services" },
        ]}
        ctaLine="Ready to move in Oman?"
        ctaBody="Talk to our team about your Oman operation, delivery volumes and SLA targets. We respond within one business day."
        ctaButton="Talk to us about Oman"
      />
    </>
  );
}
