import type { Metadata } from "next";
import { Fraunces, Geist, Geist_Mono, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT"],
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: "400",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Ajil Logistics Services",
    template: "%s",
  },
  description:
    "Ajil Logistics Services is the end-to-end logistics partner for modern commerce in the GCC. Four service models: software, network, dedicated, fully managed. Backed by GCC-built dispatch management. Headquartered in Doha, Qatar.",
  metadataBase: new URL("https://ajilb2b.com"),
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    apple: { url: "/icon.svg", type: "image/svg+xml" },
  },
  openGraph: {
    title: "Ajil Logistics Services: Efficiency in Motion",
    description: "End-to-end logistics infrastructure for modern commerce. Built in Doha, deployed across the GCC.",
    url: "https://ajilb2b.com",
    siteName: "Ajil Logistics Services",
    locale: "en_US",
    type: "website",
    images: [{ url: "/ajil-logo-transparent.png", width: 1200, height: 630, alt: "Ajil Logistics Services" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ajil Logistics Services: Efficiency in Motion",
    description: "End-to-end logistics infrastructure for modern commerce. Built in Doha, deployed across the GCC.",
    images: ["/ajil-logo-transparent.png"],
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://ajilb2b.com/#organization",
  "name": "Ajil Logistics Services",
  "alternateName": "Ajil",
  "url": "https://ajilb2b.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://ajilb2b.com/ajil-logo-transparent.png",
    "width": 140,
    "height": 46,
  },
  "description": "End-to-end logistics infrastructure for modern commerce across 6 GCC markets. Four service models: software, on-demand network, dedicated, and fully managed operations. Headquartered in Doha, Qatar.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Almuntazah Trading Center",
    "addressLocality": "Doha",
    "addressCountry": "QA",
  },
  "telephone": "+97441404004",
  "email": "hello@ajilb2b.com",
  "foundingDate": "2019",
  "numberOfEmployees": { "@type": "QuantitativeValue", "value": 600 },
  "areaServed": [
    { "@type": "Country", "name": "Qatar" },
    { "@type": "Country", "name": "United Arab Emirates" },
    { "@type": "Country", "name": "Saudi Arabia" },
    { "@type": "Country", "name": "Kuwait" },
    { "@type": "Country", "name": "Bahrain" },
    { "@type": "Country", "name": "Oman" },
  ],
  "sameAs": [
    "https://www.linkedin.com/company/ajilb2b",
    "https://twitter.com/ajilb2b",
    "https://www.instagram.com/ajilb2b",
  ],
  "slogan": "Efficiency in Motion",
  "knowsAbout": [
    "Last-mile logistics",
    "Route optimization",
    "Delivery management software",
    "Dark store operations",
    "3PL outsourcing",
    "Dispatch management",
    "Fleet management",
    "GCC logistics",
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "telephone": "+97441404004",
    "email": "hello@ajilb2b.com",
    "areaServed": ["QA", "AE", "SA", "KW", "BH", "OM"],
    "availableLanguage": ["English", "Arabic"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${geist.variable} ${geistMono.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
