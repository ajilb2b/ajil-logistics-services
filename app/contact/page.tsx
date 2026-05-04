import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to our team in Doha. Sales & partnerships: hello@ajilb2b.com · +974 77058594. Serving Qatar, UAE, KSA, Kuwait, Bahrain and Oman. Reply within one business day.",
  alternates: { canonical: "https://ajilb2b.com/contact" },
  openGraph: {
    title: "Contact Ajil Logistics Services",
    description:
      "Talk to our team in Doha. Sales: hello@ajilb2b.com · +974 77058594. Serving Qatar, UAE, KSA, Kuwait, Bahrain and Oman.",
    url: "https://ajilb2b.com/contact",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://ajilb2b.com/#organization",
  "name": "Ajil Logistics Services",
  "url": "https://ajilb2b.com",
  "logo": "https://ajilb2b.com/ajil-logo-transparent.png",
  "image": "https://ajilb2b.com/ajil-logo-transparent.png",
  "telephone": "+97441404004",
  "email": "hello@ajilb2b.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Almuntazah Trading Center",
    "addressLocality": "Doha",
    "addressCountry": "QA",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 25.2854,
    "longitude": 51.531,
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
      "opens": "08:00",
      "closes": "18:00",
    },
  ],
  "description":
    "End-to-end logistics services for modern commerce in Qatar and UAE. 600+ riders, 9 hubs.",
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
    { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://ajilb2b.com/contact" },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ContactClient />
    </>
  );
}
