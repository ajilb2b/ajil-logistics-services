"use client";
import { useEffect } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const layers = [
  {
    grad: "linear-gradient(180deg,#0F1A3D,#1F1E9C)",
    num: "01", tag: "SOFTWARE",
    title: "Logistics Delivery Management Software",
    desc: "License the Ajil platform — TMS, WMS, dispatch, driver and rider apps, customer tracking and a unified control tower. Run with your own fleet, your own warehouses, your own people. Multi-tenant, white-label and API-first.",
    chips: ["TMS", "WMS", "Dispatch", "Driver App", "Control Tower"],
    cta: "License The Platform →", href: "/contact",
  },
  {
    grad: "linear-gradient(180deg,#1F1E9C,#2D2BE0)",
    num: "02", tag: "ON-DEMAND",
    title: "On-Demand Logistics",
    desc: "Tap into Ajil's existing rider, vehicle and warehouse network on a pay-per-delivery basis — flex up during peaks, scale down on quiet days. A ready-made network across the GCC, available the day you onboard. Software is included.",
    chips: ["Pay Per Delivery", "Same-Day", "Scheduled", "Surge Capacity", "Software Included"],
    cta: "Use On-Demand →", href: "/contact",
  },
  {
    grad: "linear-gradient(180deg,#2D2BE0,#5A4BFF)",
    num: "03", tag: "DEDICATED",
    title: "Dedicated Logistics",
    desc: "Capacity that operates exclusively for your business — branded riders, ringfenced fleet, dedicated warehouse footprint, dark store hubs in your target catchments. The same operating platform, but the operation wears your colours.",
    chips: ["Branded Fleet", "Dedicated Warehouse", "Dark Stores", "SLA-Bound", "Custom KPIs"],
    cta: "Build Dedicated →", href: "/dedicated",
  },
  {
    grad: "linear-gradient(180deg,#5A4BFF,#8775FF)",
    num: "04", tag: "MANAGED",
    title: "Fully Managed Operations",
    desc: "We take ownership of your entire logistics function. Network design, hiring, warehouse leasing, dark store operations, fleet management — and a single accountable leadership team reporting against the KPIs you set.",
    chips: ["End-To-End", "Outsourced", "Single Contract", "Custom SLAs", "Quarterly Reviews"],
    cta: "Outsource To Ajil →", href: "/contact",
  },
];

export default function ServicesPage() {
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

      <header className="sv-hero">
        <div className="hp-container">
          <span className="hp-section-tag">02 · Service Models</span>
          <h1 className="sv-h1">Four Ways To <em>Partner With Us</em>.</h1>
          <p className="sv-lead">Every business runs logistics differently. Pick the model that fits today — and scale the partnership as your operation grows. One contract spans all four.</p>
        </div>
      </header>

      <section className="sv-section">
        <div className="hp-container">
          <p className="sv-intro reveal">Most providers force you into a single shape. Ajil meets you where you are — license our software, tap our on-demand network, ringfence dedicated capacity, or hand us the entire function.</p>
          <div className="hp-layer-stack reveal">
            {layers.map((layer) => (
              <a href={layer.href} key={layer.num} className="hp-layer-row" style={{ "--hp-gradient": layer.grad } as React.CSSProperties}>
                <div className="hp-layer-num">
                  {layer.num}
                  <small>{layer.tag}</small>
                </div>
                <div className="hp-layer-content">
                  <h3>{layer.title}</h3>
                  <p>{layer.desc}</p>
                  <div className="hp-layer-tags">
                    {layer.chips.map((c) => <span key={c}>{c}</span>)}
                  </div>
                </div>
                <span className="hp-layer-cta">{layer.cta}</span>
              </a>
            ))}
          </div>

          <div className="sv-cta-row reveal">
            <a href="/contact" className="sv-btn-primary">
              Book a working session
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
            </a>
            <a href="/dedicated" className="sv-btn-ghost">See Dedicated Logistics →</a>
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

        .sv-hero { padding: 160px 0 96px; background: #fff; border-bottom: 1px solid var(--line); }
        .sv-h1 { font-size: clamp(38px, 5vw, 72px); line-height: 1; letter-spacing: -.04em; font-weight: 500; color: var(--ink); margin: 0 0 28px; }
        .sv-h1 em { font-family: var(--font-instrument), serif; font-style: italic; font-weight: 400; color: var(--indigo); }
        .sv-lead { font-size: clamp(15px, 1.2vw, 18px); color: var(--muted); max-width: 58ch; line-height: 1.7; }

        .sv-section { padding: 100px 0 140px; background: var(--paper); }
        .sv-intro { font-size: 18px; color: var(--muted); line-height: 1.6; max-width: 760px; margin: 0 auto 64px; text-align: center; }
        .hp-layer-stack { display: flex; flex-direction: column; gap: 16px; max-width: 1100px; margin: 0 auto; }
        .hp-layer-row { position: relative; display: grid; grid-template-columns: 120px 1fr auto; gap: 32px; padding: 32px; border: 1px solid var(--line); border-radius: 20px; background: var(--paper); transition: all .35s ease; overflow: hidden; align-items: center; text-decoration: none; color: inherit; }
        @media (max-width: 780px) { .hp-layer-row { grid-template-columns: 1fr; gap: 18px; padding: 24px; } }
        .hp-layer-row::before { content: ""; position: absolute; top: 0; bottom: 0; left: 0; width: 4px; background: var(--hp-gradient, linear-gradient(180deg,#1A2654,#2D2BE0)); }
        .hp-layer-row:hover { border-color: var(--line-strong); background: linear-gradient(110deg, rgba(238,240,255,.55), #fff); transform: translateX(4px); box-shadow: 0 12px 32px -16px rgba(45,43,224,.18); }
        .hp-layer-num { font-family: var(--font-instrument), serif; font-style: italic; font-size: 64px; line-height: 1; background: var(--hp-gradient, linear-gradient(180deg,#1A2654,#2D2BE0)); -webkit-background-clip: text; background-clip: text; color: transparent; }
        .hp-layer-num small { font-size: 14px; font-family: var(--font-geist-mono), monospace; font-style: normal; color: var(--muted-2); letter-spacing: .1em; display: block; margin-top: -4px; -webkit-text-fill-color: var(--muted-2); }
        .hp-layer-content h3 { font-size: 24px; font-weight: 500; letter-spacing: -.02em; margin-bottom: 8px; color: var(--ink); }
        .hp-layer-content p { font-size: 15px; color: var(--muted); line-height: 1.6; margin-bottom: 14px; max-width: 60ch; }
        .hp-layer-tags { display: flex; flex-wrap: wrap; gap: 6px; }
        .hp-layer-tags span { font-family: var(--font-geist-mono), monospace; font-size: 10px; padding: 4px 10px; border-radius: 999px; background: var(--paper-3); border: 1px solid var(--line); color: var(--muted); text-transform: uppercase; letter-spacing: .06em; }
        .hp-layer-cta { display: inline-flex; align-items: center; gap: 6px; padding: 10px 16px; border-radius: 999px; border: 1px solid var(--line-strong); background: var(--paper); font-family: var(--font-geist-mono), monospace; font-size: 11px; text-transform: uppercase; letter-spacing: .08em; color: var(--ink); transition: all .2s ease; white-space: nowrap; font-weight: 500; }
        .hp-layer-cta:hover { background: var(--ink); color: var(--paper); border-color: var(--ink); }
        @media (max-width: 780px) { .hp-layer-cta { align-self: flex-start; } }
        .sv-cta-row { display: flex; align-items: center; gap: 16px; flex-wrap: wrap; margin-top: 80px; padding-top: 64px; border-top: 1px solid var(--line); }
        .sv-btn-primary { background: #1B1A68; color: #fff; font-weight: 600; padding: 14px 26px; border-radius: 999px; font-size: 15px; display: inline-flex; align-items: center; gap: 10px; transition: all .25s ease; box-shadow: 0 10px 28px -10px rgba(27,26,104,.5); }
        .sv-btn-primary:hover { background: var(--indigo); transform: translateY(-1px); }
        .sv-btn-ghost { color: var(--indigo); font-weight: 500; font-size: 15px; }
        .sv-btn-ghost:hover { text-decoration: underline; }
      `}</style>
    </>
  );
}
