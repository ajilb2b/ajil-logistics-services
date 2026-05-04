import type { Metadata } from "next";
import MarketPage from "@/components/MarketPage";

export const metadata: Metadata = {
  title: "Logistics Services in Saudi Arabia | Ajil Logistics Services",
  description:
    "Ajil Logistics Services operates in Saudi Arabia across Riyadh, Jeddah and Dammam. Last-mile delivery, route optimization, dedicated fleet and fully managed logistics for KSA commerce operators.",
  alternates: { canonical: "https://ajilb2b.com/saudi-arabia" },
  openGraph: {
    title: "Logistics Services in Saudi Arabia | Ajil Logistics Services",
    description:
      "Last-mile delivery across Riyadh, Jeddah and Dammam. On-demand, dedicated and managed logistics for Saudi Arabia's growing e-commerce market.",
    url: "https://ajilb2b.com/saudi-arabia",
  },
};

const localSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Ajil Logistics Services: Saudi Arabia",
  "@id": "https://ajilb2b.com/#organization",
  "url": "https://ajilb2b.com/saudi-arabia",
  "telephone": "+97441404004",
  "email": "hello@ajilb2b.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Riyadh",
    "addressCountry": "SA",
  },
  "geo": { "@type": "GeoCoordinates", "latitude": 24.6877, "longitude": 46.7219 },
  "areaServed": { "@type": "Country", "name": "Saudi Arabia" },
  "description": "Ajil Logistics Services operates across Saudi Arabia: Riyadh, Jeddah and Dammam, with last-mile delivery, route optimization, dedicated fleet and fully managed logistics.",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ajilb2b.com" },
    { "@type": "ListItem", "position": 2, "name": "Saudi Arabia", "item": "https://ajilb2b.com/saudi-arabia" },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <MarketPage
        country="Saudi Arabia"
        heroMain="Saudi Arabia Logistics."
        heroItalic="Riyadh. Jeddah. Dammam."
        lede="Saudi Arabia is the GCC's largest economy and fastest-growing e-commerce market. Ajil Logistics Services operates across the Kingdom's three major commerce hubs: Riyadh, Jeddah and Dammam, with dedicated dispatch teams, local fleet management and dark store infrastructure."
        stats={[
          { num: "2022", lbl: "Active in KSA" },
          { num: "3", lbl: "Major cities covered" },
          { num: "24/7", lbl: "Dispatch operations" },
          { num: "Same-day", lbl: "Delivery capability" },
        ]}
        coverageIntro="Ajil's Saudi Arabia operation covers Riyadh's major commercial districts, Jeddah's coastal and retail corridors, and Dammam's Eastern Province commerce zone. Routing is optimised for Saudi Arabia's road network, neighbourhood access rules, and prayer time windows."
        zones={[
          { city: "Riyadh", name: "Al Olaya & King Fahd Rd" },
          { city: "Riyadh", name: "Al Aqiq & Al Malaz" },
          { city: "Riyadh", name: "Diplomatic Quarter" },
          { city: "Riyadh", name: "Al Sulimaniyah" },
          { city: "Jeddah", name: "Al Hamra & Corniche" },
          { city: "Jeddah", name: "Al Balad & Al Rawdah" },
          { city: "Dammam", name: "Al Khobar & Dhahran" },
          { city: "Dammam", name: "Qatif & Saihat" },
        ]}
        services={[
          { num: "01", name: "Logistics Software", desc: "License Ajil Dispatch, TMS, WMS and the live control tower to manage your Saudi Arabia fleet and warehouse network.", href: "/services" },
          { num: "02", name: "On-Demand Network", desc: "Pay-per-delivery access to Ajil's Saudi Arabia rider and vehicle network across Riyadh, Jeddah and Dammam.", href: "/services" },
          { num: "03", name: "Dedicated Logistics", desc: "A ringfenced KSA operation in your brand — branded riders, dedicated dark stores in your Riyadh and Jeddah catchments.", href: "/dedicated" },
          { num: "04", name: "Fully Managed", desc: "Ajil takes ownership of your Saudi Arabia logistics function — network design, fleet, warehouses and team on a single contract.", href: "/services" },
        ]}
        ctaLine="Ready to move in Saudi Arabia?"
        ctaBody="Talk to our team about your Saudi Arabia operation, delivery volumes and SLA targets. We respond within one business day."
        ctaButton="Talk to us about KSA"
      />
    </>
  );
}
