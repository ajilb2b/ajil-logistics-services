"use client";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const principles = [
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    title: "Data Security",
    desc: "All customer and operational data is encrypted in transit (TLS 1.3) and at rest (AES-256). We never sell or share your data with third parties.",
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>,
    title: "Access Controls",
    desc: "Role-based access control across all platform features. Full audit logs, SSO support and two-factor authentication on all accounts.",
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5"/></svg>,
    title: "Infrastructure",
    desc: "Hosted on enterprise-grade cloud infrastructure with 99.9% uptime SLA. Redundant systems across multiple availability zones.",
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>,
    title: "Uptime & Reliability",
    desc: "Our dispatch and tracking systems are monitored 24/7. Incident response SLAs backed by contractual guarantees for enterprise clients.",
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>,
    title: "Compliance",
    desc: "Ajil operates in compliance with applicable data protection regulations across GCC markets. Enterprise clients receive a Data Processing Agreement on request.",
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
    title: "Responsible Disclosure",
    desc: "We take security reports seriously. If you discover a vulnerability, contact us at security@ajilb2b.com and we will respond within 48 hours.",
  },
];

export default function TrustSecurityPage() {
  return (
    <>
      <Nav />

      <header className="ts-hero">
        <div className="hp-container">
          <span className="hp-section-tag">Trust & Security</span>
          <h1 className="ts-h1">Built To Be<br /><em>Trusted</em>.</h1>
          <p className="ts-lead">Ajil handles sensitive operational data for over 60 brands across 6 markets. Security and reliability are not features — they are the foundation everything else runs on.</p>
        </div>
      </header>

      <section className="ts-section">
        <div className="hp-container">
          <div className="ts-grid">
            {principles.map((p) => (
              <div className="ts-card" key={p.title}>
                <div className="ts-icon">{p.icon}</div>
                <h3 className="ts-card-title">{p.title}</h3>
                <p className="ts-card-desc">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="ts-contact">
            <h3 className="ts-contact-h">Security questions?</h3>
            <p className="ts-contact-p">For enterprise security reviews, penetration test requests or data processing agreements, reach out directly.</p>
            <a href="mailto:security@ajilb2b.com" className="ts-btn-primary">
              security@ajilb2b.com
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        .hp-container { max-width: 1440px; margin: 0 auto; padding: 0 clamp(24px, 6vw, 88px); }
        @media (max-width: 760px) { .hp-container { padding: 0 20px; } }
        .hp-section-tag { font-family: var(--font-geist-mono), monospace; font-size: 11px; color: var(--indigo); text-transform: uppercase; letter-spacing: .18em; display: flex; align-items: center; gap: 10px; font-weight: 500; margin-bottom: 24px; }
        .hp-section-tag::before { content: ""; width: 24px; height: 1px; background: var(--indigo); }

        .ts-hero { padding: 160px 0 96px; background: #fff; border-bottom: 1px solid var(--line); }
        .ts-h1 { font-size: clamp(38px, 5vw, 72px); line-height: 1; letter-spacing: -.04em; font-weight: 500; color: var(--ink); margin: 0 0 28px; }
        .ts-h1 em { font-family: var(--font-instrument), serif; font-style: italic; font-weight: 400; color: var(--indigo); }
        .ts-lead { font-size: clamp(15px, 1.2vw, 18px); color: var(--muted); max-width: 56ch; line-height: 1.7; }

        .ts-section { padding: 96px 0 140px; background: var(--paper); }
        .ts-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-bottom: 80px; }
        @media (max-width: 900px) { .ts-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 560px) { .ts-grid { grid-template-columns: 1fr; } }
        .ts-card { border: 1px solid var(--line-strong); border-radius: 18px; padding: 36px 30px; background: #fff; transition: box-shadow .25s ease, border-color .25s ease; }
        .ts-card:hover { border-color: rgba(27,26,104,.2); box-shadow: 0 12px 36px -14px rgba(27,26,104,.12); }
        .ts-icon { width: 44px; height: 44px; border-radius: 12px; background: var(--paper-2); border: 1px solid var(--line-strong); display: flex; align-items: center; justify-content: center; color: var(--indigo); margin-bottom: 18px; }
        .ts-card-title { font-size: 16px; font-weight: 600; color: var(--ink); letter-spacing: -.015em; margin-bottom: 10px; }
        .ts-card-desc { font-size: 14px; color: var(--muted); line-height: 1.65; }

        .ts-contact { background: var(--paper-2); border: 1px solid var(--line-strong); border-radius: 20px; padding: 48px; display: flex; flex-direction: column; align-items: flex-start; gap: 16px; }
        .ts-contact-h { font-size: clamp(22px, 2.5vw, 36px); font-weight: 500; letter-spacing: -.03em; color: var(--ink); }
        .ts-contact-p { font-size: 15px; color: var(--muted); line-height: 1.6; max-width: 52ch; }
        .ts-btn-primary { background: #1B1A68; color: #fff; font-weight: 600; padding: 13px 24px; border-radius: 999px; font-size: 14px; display: inline-flex; align-items: center; gap: 9px; transition: all .25s ease; box-shadow: 0 8px 24px -8px rgba(27,26,104,.45); }
        .ts-btn-primary:hover { background: var(--indigo); transform: translateY(-1px); }
      `}</style>
    </>
  );
}
