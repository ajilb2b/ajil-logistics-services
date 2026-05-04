import type { Metadata } from "next";
import ProductsClient from "./ProductsClient";

export const metadata: Metadata = {
  title: "Products",
  description:
    "The Ajil platform: Dispatch console, Rider App (iOS & Android), customer tracking, WMS and control tower. TMS software for GCC logistics operations. Multi-tenant, white-label, API-first.",
  alternates: { canonical: "https://ajilb2b.com/products" },
  openGraph: {
    title: "Logistics Products — Dispatch, Rider App, Track & WMS | Ajil",
    description:
      "The Ajil platform: Dispatch console, Rider App, customer tracking, WMS and control tower. TMS software for GCC logistics operations.",
    url: "https://ajilb2b.com/products",
  },
};

const productsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Ajil Logistics Platform Products",
  "description": "The Ajil platform — six products for end-to-end logistics operations.",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "SoftwareApplication",
        "@id": "https://ajilb2b.com/products/dispatch",
        "name": "Ajil Dispatch",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "description":
          "Command centre for your entire delivery operation. Auto & manual order assignment, live operations map, shift & roster management, client portals and brand integrations.",
        "offers": {
          "@type": "Offer",
          "price": "1200",
          "priceCurrency": "QAR",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "1200",
            "priceCurrency": "QAR",
            "unitText": "monthly",
          },
        },
        "provider": { "@id": "https://ajilb2b.com/#organization" },
      },
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "MobileApplication",
        "name": "Ajil Rider App",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "iOS, Android",
        "description":
          "The app every rider runs their shift on. Auto-receive orders, photo and signature proof of delivery, earnings dashboard. Offline-first. Multilingual: EN / AR / UR / FR.",
        "provider": { "@id": "https://ajilb2b.com/#organization" },
      },
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "SoftwareApplication",
        "name": "Ajil Track",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "description":
          "Real-time delivery tracking for end customers and brand partners. Live map, ETA updates, delivery confirmation and proof-of-delivery documentation.",
        "provider": { "@id": "https://ajilb2b.com/#organization" },
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ajilb2b.com" },
    { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://ajilb2b.com/products" },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productsSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ProductsClient />
    </>
  );
}
