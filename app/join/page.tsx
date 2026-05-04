import type { Metadata } from "next";
import JoinClient from "./JoinClient";

export const metadata: Metadata = {
  title: "Join Us",
  description:
    "Earn weekly in QAR, AED or SAR. Bikes, cars and vans. Performance bonuses, health insurance and visa support for riders and drivers across Qatar, UAE, KSA, Kuwait, Bahrain and Oman.",
  alternates: { canonical: "https://ajilb2b.com/join" },
  openGraph: {
    title: "Drive With Ajil — Rider & Driver Jobs | Ajil Logistics Services",
    description:
      "Earn weekly in QAR, AED or SAR. Performance bonuses, health insurance and visa support across 6 GCC markets.",
    url: "https://ajilb2b.com/join",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ajilb2b.com" },
    { "@type": "ListItem", "position": 2, "name": "Join Us", "item": "https://ajilb2b.com/join" },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <JoinClient />
    </>
  );
}
