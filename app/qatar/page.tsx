import type { Metadata } from "next";
import MarketPage from "@/components/MarketPage";

export const metadata: Metadata = {
  title: "Qatar",
  description:
    "Ajil Logistics Services is headquartered in Doha, Qatar. 9 hubs, 24/7 dispatch command centre. Delivery management software, on-demand network, dedicated fleet and fully managed logistics for Qatar's commerce operators.",
  alternates: { canonical: "https://ajilb2b.com/qatar" },
  openGraph: {
    title: "Logistics Services in Qatar | Ajil Logistics Services",
    description:
      "Doha-headquartered, Qatar & UAE deployed. 9 hubs, 24/7 dispatch command centre. Four logistics service models for Qatar's modern commerce operators.",
    url: "https://ajilb2b.com/qatar",
  },
};

const localSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Ajil Logistics Services — Qatar",
  "@id": "https://ajilb2b.com/#organization",
  "url": "https://ajilb2b.com/qatar",
  "telephone": "+97477058594",
  "email": "hello@ajilb2b.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Almuntazah Trading Center",
    "addressLocality": "Doha",
    "addressRegion": "Doha",
    "addressCountry": "QA",
  },
  "geo": { "@type": "GeoCoordinates", "latitude": 25.2854, "longitude": 51.531 },
  "areaServed": { "@type": "Country", "name": "Qatar" },
  "description": "Ajil Logistics Services is headquartered in Doha, Qatar — the 24/7 operations hub for all GCC markets. Delivery management software, on-demand network, dedicated fleet and managed logistics.",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ajilb2b.com" },
    { "@type": "ListItem", "position": 2, "name": "Qatar", "item": "https://ajilb2b.com/qatar" },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <MarketPage
        country="Qatar"
        heroMain="Qatar Logistics."
        heroItalic="Built here. Run here."
        lede="Ajil Logistics Services is headquartered in Doha — the command centre for all GCC markets. From Almuntazah Trading Center, our 24/7 dispatch operation plans and monitors every route across Qatar's major catchments, gated compounds and delivery corridors."
        stats={[
          { num: "2019", lbl: "Founded in Doha" },
          { num: "9", lbl: "Logistics hubs" },
          { num: "24/7", lbl: "Dispatch command centre" },
          { num: "15 min", lbl: "SLA in prime Doha zones" },
        ]}
        coverageIntro="Ajil operates across all major Qatar catchments — gated compounds, Lusail's new city grid, Pearl Island routes, Industrial Area B2B distribution, and Al Wakra south-corridor deliveries. Our routing engine is tuned for Qatar's road network, prayer windows, and the Ramadan calendar."
        zones={[
          { city: "Doha", name: "West Bay" },
          { city: "Doha", name: "The Pearl" },
          { city: "Doha", name: "Lusail City" },
          { city: "Doha", name: "Msheireb Downtown" },
          { city: "Doha", name: "Industrial Area" },
          { city: "South Qatar", name: "Al Wakra" },
          { city: "North Qatar", name: "Al Khor" },
          { city: "Doha", name: "Duhail & Ain Khaled" },
        ]}
        services={[
          { num: "01", name: "Logistics Software", desc: "License Ajil Dispatch, TMS, WMS, driver and rider apps, and the live control tower for your own Qatar fleet.", href: "/services" },
          { num: "02", name: "On-Demand Network", desc: "Pay-per-delivery access to Ajil's Qatar rider and vehicle network — scale up during Ramadan and peak campaigns without fixed costs.", href: "/services" },
          { num: "03", name: "Dedicated Logistics", desc: "A ringfenced Qatar operation in your brand — riders in your uniform, dark stores in your target Doha catchments, SLA-bound.", href: "/dedicated" },
          { num: "04", name: "Fully Managed", desc: "Ajil takes ownership of your entire Qatar logistics function — network design, fleet, warehouses, team and a named General Manager.", href: "/services" },
        ]}
        ctaLine="Ready to move in Qatar?"
        ctaBody="Talk to our Doha team about your operation, your volume, and your SLA targets. We respond within one business day."
        ctaButton="Talk to us in Doha"
      />
    </>
  );
}
