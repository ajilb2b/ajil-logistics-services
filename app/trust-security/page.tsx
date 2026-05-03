import type { Metadata } from "next";
import TrustClient from "./TrustClient";

export const metadata: Metadata = {
  title: "Security & Trust — Ajil Logistics Platform",
  description:
    "AES-256 encryption, TLS 1.3, role-based access control, SSO and 99.9% uptime SLA. Data protection compliance across all GCC markets. Serving 60+ brands across 6 markets.",
  alternates: { canonical: "https://ajilb2b.com/trust-security" },
  openGraph: {
    title: "Security & Trust | Ajil Logistics Services",
    description:
      "AES-256 encryption, TLS 1.3, RBAC, SSO and 99.9% uptime SLA. Data protection compliance across all GCC markets.",
    url: "https://ajilb2b.com/trust-security",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ajilb2b.com" },
    { "@type": "ListItem", "position": 2, "name": "Trust & Security", "item": "https://ajilb2b.com/trust-security" },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <TrustClient />
    </>
  );
}
