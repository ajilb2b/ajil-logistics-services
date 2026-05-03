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
    default: "Ajil Logistics Services — GCC Delivery & Dispatch",
    template: "%s | Ajil Logistics Services",
  },
  description:
    "Ajil Logistics Services is the end-to-end logistics partner for modern commerce in the GCC. Four service models — software, network, dedicated, fully managed — backed by GCC-built dispatch management. Headquartered in Doha, Qatar.",
  metadataBase: new URL("https://ajilb2b.com"),
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    apple: { url: "/icon.svg", type: "image/svg+xml" },
  },
  openGraph: {
    title: "Ajil Logistics Services — Efficiency in Motion",
    description: "End-to-end logistics infrastructure for modern commerce. Built in Doha, deployed across the GCC.",
    url: "https://ajilb2b.com",
    siteName: "Ajil Logistics Services",
    locale: "en_US",
    type: "website",
    images: [{ url: "/ajil-logo-transparent.png", width: 1200, height: 630, alt: "Ajil Logistics Services" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ajil Logistics Services — Efficiency in Motion",
    description: "End-to-end logistics infrastructure for modern commerce. Built in Doha, deployed across the GCC.",
    images: ["/ajil-logo-transparent.png"],
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
      <body>{children}</body>
    </html>
  );
}
