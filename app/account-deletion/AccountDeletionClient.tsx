"use client";
import { useState } from "react";
import Image from "next/image";

export default function AccountDeletionClient() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!email.trim() || !email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("/api/account-deletion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error ?? "Something went wrong");
      }
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <div className="ad-page">
        <div className="ad-container">
          <div className="ad-logo">
            <Image src="/ajil-logo-transparent2.png" alt="Ajil" width={92} height={30} style={{ objectFit: "contain" }} />
          </div>

          {submitted ? (
            <div className="ad-card">
              <div className="ad-success-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
              </div>
              <h1 className="ad-h1">Request received.</h1>
              <p className="ad-lead">We have received your account deletion request for <strong>{email}</strong>. Our team will process it within 7 days and confirm by email once complete.</p>
              <p className="ad-note">If you did not submit this request, please contact us at <a href="mailto:support@ajilb2b.com">support@ajilb2b.com</a>.</p>
            </div>
          ) : (
            <div className="ad-card">
              <h1 className="ad-h1">Request Account Deletion</h1>
              <p className="ad-lead">Enter the email address associated with your Ajil Runner account. We will process your deletion request within 7 days.</p>

              <form onSubmit={handleSubmit} className="ad-form">
                <label className="ad-label" htmlFor="email">Email address</label>
                <input
                  id="email"
                  type="email"
                  className="ad-input"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                />
                {error && <p className="ad-error">{error}</p>}
                <button type="submit" className="ad-btn" disabled={submitting}>
                  {submitting ? "Submitting..." : "Submit deletion request"}
                </button>
              </form>

              <div className="ad-divider" />
              <p className="ad-footer-note">
                Deleting your account will permanently remove your profile, earnings history, and all associated data from the Ajil platform. This action cannot be undone.
              </p>
              <p className="ad-footer-note">
                Need help instead? Contact <a href="mailto:support@ajilb2b.com">support@ajilb2b.com</a>
              </p>
            </div>
          )}
        </div>
      </div>

      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        .ad-page { min-height: 100vh; background: #f7f7f9; display: flex; align-items: flex-start; justify-content: center; padding: 60px 20px 80px; }
        .ad-container { width: 100%; max-width: 480px; }
        .ad-logo { margin-bottom: 40px; }
        .ad-card { background: #fff; border: 1px solid #e4e4ec; border-radius: 12px; padding: 44px 40px; }
        @media (max-width: 520px) { .ad-card { padding: 32px 24px; } }
        .ad-h1 { font-size: 22px; font-weight: 600; color: #0f1a3d; letter-spacing: -.02em; margin-bottom: 12px; }
        .ad-lead { font-size: 15px; color: #5a6478; line-height: 1.65; margin-bottom: 28px; }
        .ad-form { display: flex; flex-direction: column; gap: 10px; }
        .ad-label { font-size: 13px; font-weight: 500; color: #0f1a3d; }
        .ad-input { width: 100%; padding: 11px 14px; border: 1px solid #d8d8e8; border-radius: 8px; font-size: 15px; color: #0f1a3d; outline: none; transition: border-color .2s; }
        .ad-input:focus { border-color: #2D2BE0; }
        .ad-error { font-size: 13px; color: #c2342a; }
        .ad-btn { margin-top: 6px; background: #1B1A68; color: #fff; font-weight: 600; font-size: 15px; padding: 13px 20px; border-radius: 8px; border: none; cursor: pointer; transition: background .2s; }
        .ad-btn:hover:not(:disabled) { background: #14136B; }
        .ad-btn:disabled { opacity: .6; cursor: not-allowed; }
        .ad-divider { height: 1px; background: #e4e4ec; margin: 28px 0; }
        .ad-footer-note { font-size: 13px; color: #8a91a8; line-height: 1.6; margin-bottom: 10px; }
        .ad-footer-note a { color: #2D2BE0; text-decoration: none; }
        .ad-footer-note a:hover { text-decoration: underline; }
        .ad-success-icon { width: 48px; height: 48px; border-radius: 50%; background: #edfaf4; border: 1px solid #b6ecd4; display: flex; align-items: center; justify-content: center; color: #0e9d6e; margin-bottom: 20px; }
        .ad-note { font-size: 13px; color: #8a91a8; line-height: 1.6; margin-top: 16px; }
        .ad-note a { color: #2D2BE0; text-decoration: none; }
        .ad-note a:hover { text-decoration: underline; }
      `}</style>
    </>
  );
}
