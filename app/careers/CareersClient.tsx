"use client";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const roles = [
  { dept: "Operations", title: "Dispatch Manager", location: "Doha, Qatar", type: "Full-time" },
  { dept: "Operations", title: "Fleet Coordinator", location: "Dubai, UAE", type: "Full-time" },
  { dept: "Technology", title: "Senior Full-Stack Engineer", location: "Remote / Doha", type: "Full-time" },
  { dept: "Technology", title: "Product Manager — Dispatch Platform", location: "Doha, Qatar", type: "Full-time" },
  { dept: "Sales", title: "Enterprise Account Executive", location: "Riyadh, KSA", type: "Full-time" },
  { dept: "Sales", title: "Business Development Manager — UAE", location: "Dubai, UAE", type: "Full-time" },
];

const perks = [
  { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5"/></svg>, title: "Build For The Region", desc: "Work on infrastructure that moves real goods across 6 GCC markets every day." },
  { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>, title: "Move Fast", desc: "Flat structure. Ship quickly. See the impact of your work within weeks, not quarters." },
  { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>, title: "Operator DNA", desc: "Work alongside people who run logistics before they sell it — not the other way around." },
  { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="2" y="7" width="20" height="13" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg>, title: "Competitive Package", desc: "Market-rate salaries, visa support, health insurance and performance bonuses." },
];

export default function CareersPage() {
  return (
    <>
      <Nav />

      <header className="cr-hero">
        <div className="hp-container">
          <span className="hp-section-tag">Careers</span>
          <h1 className="cr-h1">Build The Logistics<br /><em>Infrastructure Of The GCC</em>.</h1>
          <p className="cr-lead">We&apos;re a small team solving a large problem. If you want to work on real operations — not demos — Ajil is hiring across engineering, operations and growth.</p>
        </div>
      </header>

      <section className="cr-perks-section">
        <div className="hp-container">
          <div className="cr-perks-grid">
            {perks.map((p) => (
              <div className="cr-perk" key={p.title}>
                <div className="cr-perk-icon">{p.icon}</div>
                <h3 className="cr-perk-title">{p.title}</h3>
                <p className="cr-perk-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cr-roles-section">
        <div className="hp-container">
          <span className="hp-section-tag">Open Roles</span>
          <div className="cr-roles-list">
            {roles.map((r) => (
              <a href="mailto:hello@ajilb2b.com" key={r.title} className="cr-role-row">
                <div>
                  <div className="cr-role-dept">{r.dept}</div>
                  <div className="cr-role-title">{r.title}</div>
                </div>
                <div className="cr-role-meta">
                  <span>{r.location}</span>
                  <span className="cr-role-type">{r.type}</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                </div>
              </a>
            ))}
          </div>

          <div className="cr-open-app">
            <h3 className="cr-open-h">Don&apos;t see your role?</h3>
            <p className="cr-open-p">We hire for attitude and capability. Send us your CV and tell us where you could add value.</p>
            <a href="mailto:hello@ajilb2b.com" className="cr-btn-primary">
              Send an open application
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
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

        .cr-hero { padding: 160px 0 96px; background: #fff; border-bottom: 1px solid var(--line); }
        .cr-h1 { font-size: clamp(38px, 5vw, 72px); line-height: 1; letter-spacing: -.04em; font-weight: 500; color: var(--ink); margin: 0 0 28px; }
        .cr-h1 em { font-family: var(--font-instrument), serif; font-style: italic; font-weight: 400; color: var(--indigo); }
        .cr-lead { font-size: clamp(15px, 1.2vw, 18px); color: var(--muted); max-width: 54ch; line-height: 1.7; }

        .cr-perks-section { padding: 96px 0; background: var(--paper-2); border-bottom: 1px solid var(--line); }
        .cr-perks-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
        @media (max-width: 900px) { .cr-perks-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 560px) { .cr-perks-grid { grid-template-columns: 1fr; } }
        .cr-perk { background: var(--paper); border: 1px solid var(--line-strong); border-radius: 18px; padding: 32px 28px; }
        .cr-perk-icon { width: 44px; height: 44px; border-radius: 12px; background: var(--paper-2); border: 1px solid var(--line-strong); display: flex; align-items: center; justify-content: center; color: var(--indigo); margin-bottom: 18px; }
        .cr-perk-title { font-size: 16px; font-weight: 600; color: var(--ink); letter-spacing: -.015em; margin-bottom: 8px; }
        .cr-perk-desc { font-size: 14px; color: var(--muted); line-height: 1.6; }

        .cr-roles-section { padding: 96px 0 140px; background: #fff; }
        .cr-roles-list { display: flex; flex-direction: column; border: 1px solid var(--line-strong); border-radius: 20px; overflow: hidden; margin: 40px 0 72px; }
        .cr-role-row { display: flex; align-items: center; justify-content: space-between; padding: 24px 32px; background: #fff; border-bottom: 1px solid var(--line); transition: background .2s ease; gap: 24px; text-decoration: none; color: inherit; }
        .cr-role-row:last-child { border-bottom: none; }
        .cr-role-row:hover { background: var(--paper-2); }
        .cr-role-dept { font-family: var(--font-geist-mono), monospace; font-size: 10px; font-weight: 600; letter-spacing: .12em; text-transform: uppercase; color: var(--indigo); margin-bottom: 6px; }
        .cr-role-title { font-size: 16px; font-weight: 500; color: var(--ink); letter-spacing: -.01em; }
        .cr-role-meta { display: flex; align-items: center; gap: 16px; font-size: 13px; color: var(--muted); flex-shrink: 0; }
        .cr-role-type { font-family: var(--font-geist-mono), monospace; font-size: 10px; padding: 3px 10px; border-radius: 999px; border: 1px solid var(--line-strong); text-transform: uppercase; letter-spacing: .08em; }
        @media (max-width: 640px) { .cr-role-row { flex-direction: column; align-items: flex-start; gap: 12px; padding: 20px 24px; } }

        .cr-open-app { background: var(--paper-2); border: 1px solid var(--line-strong); border-radius: 20px; padding: 48px; display: flex; flex-direction: column; align-items: flex-start; gap: 16px; }
        .cr-open-h { font-size: clamp(22px, 2.5vw, 36px); font-weight: 500; letter-spacing: -.03em; color: var(--ink); }
        .cr-open-p { font-size: 15px; color: var(--muted); line-height: 1.6; max-width: 52ch; }
        .cr-btn-primary { background: #1B1A68; color: #fff; font-weight: 600; padding: 13px 24px; border-radius: 999px; font-size: 14px; display: inline-flex; align-items: center; gap: 9px; transition: all .25s ease; box-shadow: 0 8px 24px -8px rgba(27,26,104,.45); }
        .cr-btn-primary:hover { background: var(--indigo); transform: translateY(-1px); }
      `}</style>
    </>
  );
}
