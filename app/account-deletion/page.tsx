import type { Metadata } from "next";
import AccountDeletionClient from "./AccountDeletionClient";

export const metadata: Metadata = {
  title: "Request Account Deletion | Ajil Runner",
  description: "Submit a request to delete your Ajil Runner account and associated data.",
  robots: { index: false, follow: false },
};

export default function AccountDeletionPage() {
  return <AccountDeletionClient />;
}
