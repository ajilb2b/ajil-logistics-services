import type { Metadata } from "next";
import PartnerClient from "./PartnerClient";

export const metadata: Metadata = {
  title: "Partner Programme — Ajil Logistics GCC",
  description:
    "Join the Ajil partner network as a technology partner, reseller or logistics operator. API access, white-label options and revenue share across Qatar, UAE, KSA, Kuwait, Bahrain and Oman.",
  alternates: { canonical: "https://ajilb2b.com/partner-programme" },
  openGraph: {
    title: "Partner Programme | Ajil Logistics Services",
    description:
      "Join the Ajil partner network. API access, white-label and revenue share across 6 GCC markets.",
    url: "https://ajilb2b.com/partner-programme",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ajilb2b.com" },
    { "@type": "ListItem", "position": 2, "name": "Partner Programme", "item": "https://ajilb2b.com/partner-programme" },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PartnerClient />
    </>
  );
}
