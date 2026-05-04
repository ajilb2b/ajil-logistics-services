import type { Metadata } from "next";
import DriverApplicationClient from "./DriverApplicationClient";

export const metadata: Metadata = {
  title: "Driver Application",
  description:
    "Apply to drive or ride with Ajil across Qatar and UAE. Weekly payouts, daily stacked routes, health insurance, visa support and performance bonuses.",
  alternates: { canonical: "https://ajilb2b.com/driver-application" },
};

export default function Page() {
  return <DriverApplicationClient />;
}
