"use client";
import { useEffect } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function DedicatedPage() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Nav />

      <header className="dd-hero">
        <div className="hp-container">
          <span className="hp-section-tag">03 · Dedicated Logistics</span>
          <h1 className="dd-h1">Your Operation, <em>Engineered</em>.</h1>
          <p className="dd-lead">When the on-demand network can&apos;t deliver the SLA, brand experience or unit economics you need — Ajil designs and operates a dedicated logistics arm, exclusively for your business.</p>
        </div>
      </header>

      <section className="dd-section">
        <div className="hp-container">
          <div className="hp-ded-grid reveal">
            <div>
              <h3 className="hp-ded-h">Built Around <em>Your</em> Commerce,<br />Not The Other Way Around.</h3>
              <p className="hp-ded-p">A dedicated Ajil deployment is an operational design exercise, not a procurement transaction. We model your demand, place hubs and dark stores where they make sense, size the fleet to your peak, and hire teams to your standard.</p>
              <ul className="hp-ded-list">
                {[
                  { n: "01", title: "Network Design", desc: "Hub and dark-store placement modelled against your demand heatmaps and SLA targets." },
                  { n: "02", title: "Branded Operation", desc: "Riders in your uniform, vehicles in your livery, customer notifications in your tone of voice." },
                  { n: "03", title: "Tuned Dispatch", desc: "Your SLAs, priorities and constraints encoded into how our dispatch teams plan every route." },
                  { n: "04", title: "Single Accountability", desc: "One Ajil leadership team owns your operation end-to-end with a named General Manager." },
                ].map((item) => (
                  <li key={item.n}>
                    <span className="hp-ded-dot">{item.n}</span>
                    <div>
                      <strong>{item.title}</strong>
                      <span>{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="hp-ded-vis">
              <div className="hp-ded-label">Sample blueprint · grocery vertical · Qatar</div>
              <div className="hp-ded-name">Dedicated network · 4 dark stores</div>
              <div className="hp-ded-spec">
                {[
                  { lbl: "Catchment Cover", val: "94%", sub: "of customer base < 12 min" },
                  { lbl: "Promised SLA", val: "15 min", sub: "peak adherence 96%" },
                  { lbl: "Fleet Mix", val: "86 ⌁ 12", sub: "e-bikes / refrigerated vans" },
                  { lbl: "Cost Per Drop", val: "−27%", sub: "vs prior 3PL baseline" },
                ].map((spec) => (
                  <div className="hp-spec" key={spec.lbl}>
                    <div className="hp-spec-lbl">{spec.lbl}</div>
                    <div className="hp-spec-val">{spec.val}</div>
                    <div className="hp-spec-sub">{spec.sub}</div>
                  </div>
                ))}
              </div>
              <div className="hp-blueprint">
                <svg viewBox="0 0 500 240" preserveAspectRatio="xMidYMid meet" style={{ width: "100%", height: "100%" }}>
                  <defs>
                    <pattern id="bp-dots" x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse">
                      <circle cx="0.6" cy="0.6" r="0.5" fill="rgba(15,26,61,0.06)" />
                    </pattern>
                    <radialGradient id="bp-glow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#5A4BFF" stopOpacity=".4" />
                      <stop offset="100%" stopColor="#5A4BFF" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  <rect width="500" height="240" fill="url(#bp-dots)" />
                  {([[120, 80], [280, 100], [380, 170], [180, 180]] as [number, number][]).map(([cx, cy], i) => (
                    <g key={i}>
                      <circle cx={cx} cy={cy} r="60" fill="rgba(90,75,255,0.05)" stroke="rgba(90,75,255,0.45)" strokeWidth="1" strokeDasharray="3 3" />
                      <circle cx={cx} cy={cy} r="20" fill="url(#bp-glow)" />
                      <circle cx={cx} cy={cy} r="6" fill="#0E9D6E" />
                    </g>
                  ))}
                  <g fontFamily="monospace" fontSize="9" fill="rgba(15,26,61,0.7)">
                    <text x="132" y="76">DS-01 · West Bay</text>
                    <text x="292" y="96">DS-02 · Pearl</text>
                    <text x="392" y="166">DS-03 · Lusail</text>
                    <text x="192" y="176">DS-04 · Wakra</text>
                  </g>
                </svg>
              </div>
            </div>
          </div>

          <div className="dd-cta-row reveal">
            <a href="/contact" className="dd-btn-primary">
              Build your dedicated operation
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
            </a>
            <a href="/services" className="dd-btn-ghost">Compare all service models →</a>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        .hp-container { max-width: 1440px; margin: 0 auto; padding: 0 clamp(24px, 6vw, 88px); }
        @media (max-width: 760px) { .hp-container { padding: 0 20px; } }
        .hp-section-tag { font-family: var(--font-geist-mono), monospace; font-size: 11px; color: var(--indigo); text-transform: uppercase; letter-spacing: .18em; display: flex; align-items: center; gap: 10px; font-weight: 500; margin-bottom: 24px; }
        .hp-section-tag::before { content: ""; width: 24px; height: 1px; background: var(--indigo); }
        .reveal { opacity: 0; transform: translateY(20px); transition: opacity .7s ease, transform .7s ease; }
        .reveal.in { opacity: 1; transform: none; }

        .dd-hero { padding: 160px 0 96px; background: #fff; border-bottom: 1px solid var(--line); }
        .dd-h1 { font-size: clamp(38px, 5vw, 72px); line-height: 1; letter-spacing: -.04em; font-weight: 500; color: var(--ink); margin: 0 0 28px; }
        .dd-h1 em { font-family: var(--font-instrument), serif; font-style: italic; font-weight: 400; color: var(--indigo); }
        .dd-lead { font-size: clamp(15px, 1.2vw, 18px); color: var(--muted); max-width: 58ch; line-height: 1.7; }

        .dd-section { background: linear-gradient(180deg, var(--paper-2), var(--paper)); border-top: 1px solid var(--line); padding: 100px 0 140px; }
        .hp-ded-grid { display: grid; grid-template-columns: 1.1fr 1fr; gap: 80px; align-items: center; }
        @media (max-width: 980px) { .hp-ded-grid { grid-template-columns: 1fr; gap: 48px; } }
        .hp-ded-h { font-size: clamp(36px,4.5vw,60px); line-height: 1.04; letter-spacing: -.035em; font-weight: 500; margin-bottom: 24px; color: var(--ink); }
        .hp-ded-h em { font-family: var(--font-instrument), serif; font-style: italic; font-weight: 400; color: var(--indigo); }
        .hp-ded-p { font-size: 17px; color: var(--muted); line-height: 1.65; margin-bottom: 28px; max-width: 50ch; }
        .hp-ded-list { list-style: none; display: flex; flex-direction: column; gap: 14px; }
        .hp-ded-list li { display: flex; gap: 14px; align-items: flex-start; font-size: 15px; color: var(--ink); padding-bottom: 14px; border-bottom: 1px solid var(--line); }
        .hp-ded-list li:last-child { border-bottom: none; }
        .hp-ded-list strong { font-weight: 500; display: block; margin-bottom: 4px; color: var(--ink); }
        .hp-ded-list span { color: var(--muted); font-size: 13px; line-height: 1.55; }
        .hp-ded-dot { flex-shrink: 0; width: 32px; height: 32px; border-radius: 10px; background: linear-gradient(135deg, var(--violet-soft), rgba(238,240,255,.4)); border: 1px solid rgba(90,75,255,.22); display: flex; align-items: center; justify-content: center; color: var(--indigo); font-family: var(--font-geist-mono), monospace; font-size: 11px; font-weight: 600; }
        .hp-ded-vis { border: 1px solid var(--line-strong); border-radius: 24px; background: linear-gradient(180deg,#FCFDFF 0%,#F4F6FC 100%); padding: 32px; position: relative; overflow: hidden; box-shadow: 0 1px 0 rgba(255,255,255,.8) inset, 0 24px 60px -20px rgba(45,43,224,.14); }
        .hp-ded-label { font-family: var(--font-geist-mono), monospace; font-size: 11px; color: var(--muted-2); text-transform: uppercase; letter-spacing: .1em; margin-bottom: 18px; }
        .hp-ded-name { font-size: 20px; font-weight: 500; letter-spacing: -.02em; margin-bottom: 24px; color: var(--ink); }
        .hp-ded-spec { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: var(--line); border: 1px solid var(--line); border-radius: 14px; overflow: hidden; margin-bottom: 20px; }
        .hp-spec { background: var(--paper); padding: 18px; }
        .hp-spec-lbl { font-family: var(--font-geist-mono), monospace; font-size: 10px; color: var(--muted-2); text-transform: uppercase; letter-spacing: .08em; }
        .hp-spec-val { font-size: 24px; font-weight: 500; letter-spacing: -.02em; margin-top: 4px; font-family: var(--font-instrument), serif; font-style: italic; color: var(--ink); }
        .hp-spec-sub { font-family: var(--font-geist-mono), monospace; font-size: 10px; color: var(--muted); margin-top: 4px; }
        .hp-blueprint { height: 240px; border: 1px dashed var(--line-strong); border-radius: 14px; overflow: hidden; background: radial-gradient(ellipse 80% 80% at 50% 50%, rgba(45,43,224,.05), transparent); }
        .dd-cta-row { display: flex; align-items: center; gap: 16px; flex-wrap: wrap; margin-top: 80px; padding-top: 64px; border-top: 1px solid var(--line); }
        .dd-btn-primary { background: #1B1A68; color: #fff; font-weight: 600; padding: 14px 26px; border-radius: 999px; font-size: 15px; display: inline-flex; align-items: center; gap: 10px; transition: all .25s ease; box-shadow: 0 10px 28px -10px rgba(27,26,104,.5); }
        .dd-btn-primary:hover { background: var(--indigo); transform: translateY(-1px); }
        .dd-btn-ghost { color: var(--indigo); font-weight: 500; font-size: 15px; }
        .dd-btn-ghost:hover { text-decoration: underline; }
      `}</style>
    </>
  );
}
