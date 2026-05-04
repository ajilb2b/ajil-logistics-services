"use client";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const models = [
  {
    num: "01",
    title: "Technology Partner",
    desc: "Integrate your platform with the Ajil API. Offer your customers real-time dispatch, tracking and delivery as a native feature — powered by Ajil under the hood.",
    tags: ["API Access", "White-Label", "Revenue Share"],
  },
  {
    num: "02",
    title: "Logistics Reseller",
    desc: "Resell Ajil's on-demand and dedicated logistics services to your client base. You own the relationship — we run the operation.",
    tags: ["Commission Model", "Full Support", "Co-Branding"],
  },
  {
    num: "03",
    title: "Fleet Partner",
    desc: "Own vehicles or manage a rider pool? Connect your capacity to the Ajil dispatch network and earn on every completed delivery.",
    tags: ["Capacity Network", "Per-Drop Revenue", "Flexible Hours"],
  },
];

export default function PartnerProgrammePage() {
  return (
    <>
      <Nav />

      <header className="pp-hero">
        <div className="hp-container">
          <span className="hp-section-tag">Partner Programme</span>
          <h1 className="pp-h1">Grow Together.<br /><span className="pp-accent">Powered By Ajil</span>.</h1>
          <p className="pp-lead">Whether you build software, manage fleets or sell logistics services — there&apos;s a partnership model that puts the Ajil network to work for your business.</p>
          <a href="mailto:hello@ajilb2b.com" className="pp-btn-primary">
            Enquire about partnering
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
        </div>
      </header>

      <section className="pp-models-section">
        <div className="hp-container">
          <div className="pp-models-grid">
            {models.map((m) => (
              <div className="pp-model-card" key={m.num}>
                <div className="pp-model-num">{m.num}</div>
                <h3 className="pp-model-title">{m.title}</h3>
                <p className="pp-model-desc">{m.desc}</p>
                <div className="pp-model-tags">
                  {m.tags.map((t) => <span key={t}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pp-cta-section">
        <div className="hp-container">
          <div className="pp-cta-inner">
            <h2 className="pp-cta-h">Ready to explore a<br /><span className="pp-accent">partnership?</span></h2>
            <p className="pp-cta-p">Send us a short intro — who you are, what you do, and how you think we could work together. Our partnerships team responds within 48 hours.</p>
            <a href="mailto:hello@ajilb2b.com" className="pp-btn-primary">
              hello@ajilb2b.com
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        .hp-container { max-width: 1440px; margin: 0 auto; padding: 0 clamp(24px, 6vw, 88px); }
        @media (max-width: 760px) { .hp-container { padding: 0 20px; } }
        .hp-section-tag { font-family: var(--font-jetbrains), monospace; font-size: 11px; color: rgba(27,26,104,.42); text-transform: uppercase; letter-spacing: .14em; display: flex; align-items: center; gap: 10px; font-weight: 500; margin-bottom: 24px; }

        .pp-hero { padding: 160px 0 96px; background: #fff; border-bottom: 1px solid var(--line); }
        .pp-h1 { font-size: clamp(38px, 5vw, 72px); line-height: 1; letter-spacing: -.04em; font-weight: 600; color: var(--ink); margin: 0 0 28px; }
        .pp-accent { color: #2D2BE0; font-style: normal; font-weight: 600; }
        .pp-lead { font-size: clamp(15px, 1.2vw, 18px); color: var(--muted); max-width: 54ch; line-height: 1.7; margin-bottom: 36px; }
        .pp-btn-primary { background: #1B1A68; color: #fff; font-weight: 600; padding: 12px 22px; border-radius: 8px; font-size: 14px; display: inline-flex; align-items: center; gap: 9px; transition: background .2s ease; }
        .pp-btn-primary:hover { background: #14136B; }

        .pp-models-section { padding: 96px 0; background: var(--paper-2); border-bottom: 1px solid var(--line); }
        .pp-models-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        @media (max-width: 900px) { .pp-models-grid { grid-template-columns: 1fr; } }
        .pp-model-card { border: 1px solid var(--line-strong); border-radius: 10px; padding: 36px 32px; background: #fff; transition: border-color .2s ease; }
        .pp-model-card:hover { border-color: rgba(27,26,104,.22); }
        .pp-model-num { font-family: var(--font-jetbrains), monospace; font-size: 13px; font-weight: 600; color: rgba(27,26,104,.42); letter-spacing: .1em; margin-bottom: 20px; }
        .pp-model-title { font-size: 18px; font-weight: 600; color: var(--ink); letter-spacing: -.02em; margin-bottom: 12px; }
        .pp-model-desc { font-size: 14px; color: var(--muted); line-height: 1.65; margin-bottom: 24px; }
        .pp-model-tags { display: flex; flex-wrap: wrap; gap: 8px; }
        .pp-model-tags span { font-family: var(--font-jetbrains), monospace; font-size: 10px; padding: 3px 9px; border-radius: 4px; border: 1px solid var(--line-strong); color: var(--muted); text-transform: uppercase; letter-spacing: .08em; }

        .pp-cta-section { padding: 96px 0 140px; background: #fff; }
        .pp-cta-inner { max-width: 680px; }
        .pp-cta-h { font-size: clamp(32px, 4vw, 60px); line-height: 1.05; letter-spacing: -.04em; font-weight: 600; color: var(--ink); margin-bottom: 20px; }
        .pp-cta-p { font-size: 16px; color: var(--muted); line-height: 1.7; max-width: 52ch; margin-bottom: 32px; }
      `}</style>
    </>
  );
}
