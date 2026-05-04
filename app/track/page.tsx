import type { Metadata } from "next";
import TrackClient from "./TrackClient";

export const metadata: Metadata = {
  title: "Track Your Delivery | Ajil Logistics Services",
  description: "Enter your tracking number to get live status updates on your Ajil delivery across Qatar and UAE.",
};

export default function TrackPage({ searchParams }: { searchParams: { id?: string } }) {
  return <TrackClient initialId={searchParams.id} />;
}
