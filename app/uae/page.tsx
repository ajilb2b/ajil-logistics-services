import type { Metadata } from "next";
import MarketPage from "@/components/MarketPage";

export const metadata: Metadata = {
  title: "UAE",
  description:
    "Ajil Logistics Services operates across Dubai, Abu Dhabi and Sharjah. Last-mile delivery, route optimization, dedicated fleet and fully managed logistics for UAE commerce operators.",
  alternates: { canonical: "https://ajilb2b.com/uae" },
  openGraph: {
    title: "Logistics Services in UAE | Ajil Logistics Services",
    description:
      "Last-mile delivery across Dubai, Abu Dhabi and Sharjah. On-demand, dedicated and managed logistics for UAE's modern commerce operators.",
    url: "https://ajilb2b.com/uae",
  },
};

const localSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Ajil Logistics Services — UAE",
  "@id": "https://ajilb2b.com/#organization",
  "url": "https://ajilb2b.com/uae",
  "telephone": "+97477058594",
  "email": "hello@ajilb2b.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Dubai",
    "addressCountry": "AE",
  },
  "geo": { "@type": "GeoCoordinates", "latitude": 25.2048, "longitude": 55.2708 },
  "areaServed": { "@type": "Country", "name": "United Arab Emirates" },
  "description": "Ajil Logistics Services operates across Dubai, Abu Dhabi and Sharjah with last-mile delivery, route optimization, dedicated fleet and fully managed logistics.",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ajilb2b.com" },
    { "@type": "ListItem", "position": 2, "name": "UAE", "item": "https://ajilb2b.com/uae" },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <MarketPage
        country="UAE"
        heroMain="UAE Logistics."
        heroItalic="Dubai, Abu Dhabi, Sharjah."
        lede="Ajil Logistics Services operates across the UAE's major commerce corridors — Dubai, Abu Dhabi and Sharjah. Same-day delivery, route optimization, dedicated dark stores and fully managed logistics for UAE's e-commerce and quick-commerce operators."
        stats={[
          { num: "2022", lbl: "Active in UAE" },
          { num: "3", lbl: "Emirates covered" },
          { num: "24/7", lbl: "Dispatch operations" },
          { num: "Same-day", lbl: "Delivery capability" },
        ]}
        coverageIntro="Ajil's UAE operation covers Dubai's major business and residential districts, Abu Dhabi's commercial centres and Sharjah's industrial and retail zones. Routes are optimised for UAE's road network, Salik toll gates, and compound delivery protocols."
        zones={[
          { city: "Dubai", name: "Downtown & DIFC" },
          { city: "Dubai", name: "Dubai Marina & JBR" },
          { city: "Dubai", name: "Deira & Bur Dubai" },
          { city: "Dubai", name: "Business Bay" },
          { city: "Abu Dhabi", name: "Corniche & Al Reem" },
          { city: "Abu Dhabi", name: "Al Maryah Island" },
          { city: "Sharjah", name: "Al Majaz & Al Nahda" },
          { city: "Sharjah", name: "Industrial Area" },
        ]}
        services={[
          { num: "01", name: "Logistics Software", desc: "License Ajil Dispatch, TMS, WMS and the live control tower to manage your own UAE fleet and warehouse network.", href: "/services" },
          { num: "02", name: "On-Demand Network", desc: "Pay-per-delivery access to Ajil's UAE rider and vehicle network across Dubai, Abu Dhabi and Sharjah.", href: "/services" },
          { num: "03", name: "Dedicated Logistics", desc: "A ringfenced UAE operation in your brand — branded riders, dedicated dark stores in your target UAE catchments.", href: "/dedicated" },
          { num: "04", name: "Fully Managed", desc: "Ajil takes ownership of your UAE logistics function — network design, local fleet management, warehouses and team.", href: "/services" },
        ]}
        ctaLine="Ready to move in UAE?"
        ctaBody="Talk to our team about your UAE operation, your delivery volumes and SLA requirements. We respond within one business day."
        ctaButton="Talk to us about UAE"
      />
    </>
  );
}
