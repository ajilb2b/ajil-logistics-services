"use client";
import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

const channels = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: "Sales & partnerships",
    value: "hello@ajilb2b.com",
    href: "mailto:hello@ajilb2b.com",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
    label: "Sales line · Qatar & UAE",
    value: "+974 77058594",
    href: "tel:+97477058594",
  },
];

const specialistLines = [
  { label: "Existing customer support", email: "support@ajilb2b.com" },
  { label: "Driver enquiries", email: "drivers@ajilb2b.com" },
  { label: "Careers", email: "careers@ajilb2b.com" },
];

const serviceInterests = ["Logistics Software", "On-Demand Network", "Dedicated Capacity", "Fully Managed", "Product demo", "Partnership"];

export default function ContactPage() {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [form, setForm] = useState({ firstName: "", lastName: "", company: "", email: "", phone: "", volume: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  function toggleInterest(interest: string) {
    setSelectedInterests((prev) =>
      prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, interests: selectedInterests }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error ?? 'Something went wrong');
      }
      setSubmitted(true);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <Nav />

      {/* Breadcrumb */}
      <div style={{ padding: "24px 0", borderBottom: "1px solid var(--ink-line)", fontFamily: "var(--font-jetbrains),monospace", fontSize: 11, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.12em" }}>
        <div className="ajil-container">
          <Link href="/" style={{ color: "var(--text-muted)" }} className="bc-link">Home</Link>
          <span style={{ margin: "0 10px", color: "var(--text-faint)" }}>/</span>
          <span style={{ color: "var(--text)" }}>Contact</span>
        </div>
      </div>

      {/* Hero */}
      <header style={{ padding: "80px 0 60px", borderBottom: "1px solid var(--ink-line)" }}>
        <div className="ajil-container">
          <div className="ct-eyebrow">Contact · Get in Touch</div>
          <h1 className="ct-h1">
            Let&apos;s talk<br /><span className="ct-accent">logistics</span>.
          </h1>
        </div>
      </header>

      {/* Grid */}
      <div style={{ padding: "80px 0 120px" }}>
        <div className="ajil-container">
          <div className="ct-grid">
            {/* Left rail */}
            <div className="ct-rail">
              {/* Head Office */}
              <div style={{ paddingBottom: 36, borderBottom: "1px solid var(--ink-line)" }}>
                <h4 style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 10, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.16em", marginBottom: 14 }}>
                  Head Office
                </h4>
                <div style={{ fontSize: 18, fontWeight: 600, color: "var(--ink)", lineHeight: 1.2, letterSpacing: "-0.015em", marginBottom: 8 }}>
                  Ajil Logistics HQ
                </div>
                <p style={{ fontSize: 14, color: "var(--text-soft)", lineHeight: 1.65 }}>
                  Almuntazah Trading Center<br />
                  Doha, Qatar
                </p>
                <p style={{ marginTop: 10 }}>
                  <a href="https://maps.google.com/?q=Doha+West+Bay" target="_blank" rel="noopener noreferrer" style={{ color: "var(--indigo-2)", fontWeight: 500, borderBottom: "1px solid currentColor", fontSize: 14 }}>
                    Open in Maps →
                  </a>
                </p>
              </div>

              {/* Direct Channels */}
              <div style={{ paddingBottom: 36, borderBottom: "1px solid var(--ink-line)" }}>
                <h4 style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 10, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.16em", marginBottom: 14 }}>
                  Direct Channels
                </h4>
                {channels.map((ch) => (
                  <div key={ch.label} style={{ display: "flex", alignItems: "flex-start", gap: 14, marginTop: 14 }}>
                    <div style={{ width: 36, height: 36, borderRadius: 6, flexShrink: 0, background: "var(--paper-3)", border: "1px solid var(--line-strong)", color: "var(--ink)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      {ch.icon}
                    </div>
                    <div>
                      <strong style={{ display: "block", fontSize: 14, fontWeight: 500, color: "var(--text)", marginBottom: 2 }}>{ch.label}</strong>
                      <a href={ch.href} style={{ fontSize: 14, color: "var(--ink)", fontWeight: 500, borderBottom: "1px solid var(--line-strong)" }}>{ch.value}</a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Specialist Lines */}
              <div style={{ paddingBottom: 36, borderBottom: "1px solid var(--ink-line)" }}>
                <h4 style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 10, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.16em", marginBottom: 14 }}>
                  Specialist Lines
                </h4>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {specialistLines.map((s) => (
                    <div key={s.label}>
                      <strong style={{ fontSize: 13, fontWeight: 500, color: "var(--text)", display: "block" }}>{s.label}</strong>
                      <a href={`mailto:${s.email}`} style={{ fontSize: 13, color: "var(--ink)", borderBottom: "1px solid var(--line-strong)" }}>{s.email}</a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Regional Offices */}
              <div>
                <h4 style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 10, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.16em", marginBottom: 14 }}>
                  Regional Offices
                </h4>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {[
                    { country: "Qatar", detail: "Doha, Almuntazah Trading Center", href: "/qatar" },
                    { country: "UAE", detail: "Dubai, UAE", href: "/uae" },
                  ].map((office) => (
                    <p key={office.country} style={{ fontSize: 13.5, color: "var(--text-soft)", lineHeight: 1.7, margin: 0 }}>
                      <Link href={office.href} style={{ color: "var(--text)", fontWeight: 500 }}>{office.country}</Link>
                      <span style={{ color: "var(--text-faint)" }}> · </span>
                      {office.detail}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div>
              <div style={{ background: "var(--paper)", border: "1px solid var(--ink-line)", borderRadius: 10, overflow: "hidden" }}>
                <div style={{ padding: "32px 40px", borderBottom: "1px solid var(--ink-line)", background: "var(--paper-2)" }}>
                  <h3 style={{ fontSize: 20, fontWeight: 600, letterSpacing: "-0.015em", color: "var(--ink)" }}>
                    Tell us about your operation
                  </h3>
                  <p style={{ fontSize: 14, color: "var(--text-soft)", marginTop: 6 }}>
                    The right person at Ajil will reply within one business day. For urgent matters, WhatsApp gets the fastest response.
                  </p>
                </div>

                <div style={{ padding: 40 }} className="ct-form-padding">
                  {submitted ? (
                    <div style={{ padding: "48px 0", textAlign: "center" }}>
                      <div style={{ width: 48, height: 48, borderRadius: 8, background: "rgba(14,157,110,.08)", border: "1px solid rgba(14,157,110,.2)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", color: "#0E9D6E" }}>
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                      </div>
                      <h3 style={{ fontSize: 22, fontWeight: 600, color: "var(--ink)", marginBottom: 12 }}>Message sent.</h3>
                      <p style={{ fontSize: 15, color: "var(--text-soft)" }}>We&apos;ll get back to you within one business day.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>

                      {/* Name row */}
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginBottom: 18 }} className="ct-row-resp">
                        {["firstName", "lastName"].map((field) => (
                          <div key={field} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                            <label style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 10, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.12em" }}>
                              {field === "firstName" ? "First name" : "Last name"} <span style={{ color: "var(--violet)" }}>*</span>
                            </label>
                            <input
                              required
                              value={form[field as keyof typeof form]}
                              onChange={(e) => setForm((f) => ({ ...f, [field]: e.target.value }))}
                              style={{ background: "var(--paper)", border: "1px solid var(--ink-line-strong)", borderRadius: 6, padding: "12px 14px", fontFamily: "inherit", fontSize: 14, color: "var(--ink)", outline: "none" }}
                            />
                          </div>
                        ))}
                      </div>

                      {/* Company & Email */}
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginBottom: 18 }} className="ct-row-resp">
                        {[
                          { key: "company", label: "Company", req: true },
                          { key: "email", label: "Email address", req: true },
                        ].map(({ key, label, req }) => (
                          <div key={key} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                            <label style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 10, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.12em" }}>
                              {label} {req && <span style={{ color: "var(--violet)" }}>*</span>}
                            </label>
                            <input
                              required={req}
                              type={key === "email" ? "email" : "text"}
                              value={form[key as keyof typeof form]}
                              onChange={(e) => setForm((f) => ({ ...f, [key]: e.target.value }))}
                              style={{ background: "var(--paper)", border: "1px solid var(--ink-line-strong)", borderRadius: 6, padding: "12px 14px", fontFamily: "inherit", fontSize: 14, color: "var(--ink)", outline: "none" }}
                            />
                          </div>
                        ))}
                      </div>

                      {/* I'm interested in */}
                      <div style={{ marginBottom: 18 }}>
                        <label style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 10, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.12em", display: "block", marginBottom: 8 }}>
                          I&apos;m interested in
                        </label>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                          {serviceInterests.map((interest) => {
                            const selected = selectedInterests.includes(interest);
                            return (
                              <button
                                key={interest}
                                type="button"
                                onClick={() => toggleInterest(interest)}
                                style={{
                                  display: "inline-flex", alignItems: "center", gap: 8,
                                  padding: "7px 13px", borderRadius: 6,
                                  border: `1px solid ${selected ? "var(--ink)" : "var(--ink-line-strong)"}`,
                                  background: selected ? "var(--ink)" : "var(--paper)",
                                  color: selected ? "#fff" : "var(--muted)",
                                  fontWeight: selected ? 500 : 400,
                                  fontSize: 13, cursor: "pointer",
                                  transition: "all .15s ease",
                                }}
                              >
                                {interest}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Message */}
                      <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 18 }}>
                        <label style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 10, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.12em" }}>
                          Brief description of your operation <span style={{ color: "var(--violet)" }}>*</span>
                        </label>
                        <textarea
                          required
                          rows={4}
                          value={form.message}
                          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                          placeholder="Volume, geographies, current setup, biggest pain point..."
                          style={{ background: "var(--paper)", border: "1px solid var(--ink-line-strong)", borderRadius: 10, padding: "12px 14px", fontFamily: "inherit", fontSize: 14, color: "var(--text)", outline: "none", resize: "vertical", minHeight: 120, lineHeight: 1.5 }}
                        />
                      </div>

                      {/* Submit */}
                      <div style={{ paddingTop: 24, borderTop: "1px solid var(--ink-line)" }}>
                        {submitError && (
                          <p style={{ fontSize: 13, color: "#C0392B", marginBottom: 14, padding: "10px 14px", background: "rgba(192,57,43,.06)", borderRadius: 8, border: "1px solid rgba(192,57,43,.18)" }}>
                            {submitError}
                          </p>
                        )}
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
                          <p style={{ fontSize: 12, color: "var(--text-muted)", maxWidth: "38ch", lineHeight: 1.5 }}>
                            By submitting you agree to our{" "}
                            <a href="#" style={{ color: "var(--indigo-2)", borderBottom: "1px solid currentColor" }}>Privacy Policy</a>.
                          </p>
                          <button
                            type="submit"
                            disabled={submitting}
                            style={{
                              display: "inline-flex", alignItems: "center", gap: 8,
                              padding: "12px 22px", borderRadius: 8, fontSize: 14, fontWeight: 600,
                              background: submitting ? "var(--muted)" : "var(--ink)", color: "#fff", border: "none",
                              cursor: submitting ? "not-allowed" : "pointer",
                              transition: "background .2s ease",
                              opacity: submitting ? 0.7 : 1,
                            }}
                          >
                            {submitting ? "Sending…" : "Send message"}
                            {!submitting && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7" /></svg>}
                          </button>
                        </div>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      <style>{`
        .ajil-container { max-width: 1380px; margin: 0 auto; padding: 0 40px; }
        .ct-eyebrow { font-family: var(--font-jetbrains),monospace; font-size: 11px; color: rgba(27,26,104,.42); text-transform: uppercase; letter-spacing: .14em; font-weight: 500; margin-bottom: 20px; }
        .ct-h1 { font-size: clamp(40px,6.5vw,88px); font-weight: 700; line-height: .95; letter-spacing: -.04em; color: var(--ink); margin: 0 0 0; }
        .ct-accent { color: #2D2BE0; }
        .ct-grid { display: grid; grid-template-columns: 1fr 1.4fr; gap: 80px; }
        .ct-rail { display: flex; flex-direction: column; gap: 36px; position: sticky; top: 96px; align-self: start; }
        .ct-row-resp { }
        .bc-link:hover { color: var(--text) !important; }
        input:focus, textarea:focus, select:focus {
          border-color: rgba(27,26,104,.4) !important;
          box-shadow: 0 0 0 2px rgba(27,26,104,.06) !important;
        }
        input::placeholder, textarea::placeholder { color: var(--text-faint); }
        @media (max-width: 980px) {
          .ct-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .ct-rail { position: static !important; }
        }
        @media (max-width: 760px) {
          .ajil-container { padding: 0 22px !important; }
        }
        @media (max-width: 540px) {
          .ct-row-resp { grid-template-columns: 1fr !important; }
          .ct-form-padding { padding: 24px !important; }
        }
      `}</style>
    </>
  );
}
