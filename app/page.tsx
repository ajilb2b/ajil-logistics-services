"use client";
import { useEffect } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

/* ─── data ─── */
const signals = [
  { num: "23", unit: " %", label: "Avg. Cost Reduction" },
  { num: "98", unit: " .4%", label: "SLA Adherence" },
  { num: "14", unit: " hubs", label: "Across The GCC" },
  { num: "6", unit: " markets", label: "QA · UAE · KSA · KW · BH · OM" },
];

const clients = [
  { name: "Carrefour",        logo: "/logos/carrefour.svg" },
  { name: "noon",             logo: "/logos/noon.svg" },
  { name: "Jarir",            logo: "/logos/jarir.svg" },
  { name: "Talabat",          logo: "/logos/talabat.svg" },
  { name: "Kitopi",           logo: "/logos/kitopi.svg" },
  { name: "Tamimi Markets",   logo: "/logos/tamimi.svg" },
  { name: "IFFCO",            logo: "/logos/iffco.svg" },
  { name: "Panda Retail",     logo: "/logos/panda.svg" },
  { name: "Landmark Group",   logo: "/logos/landmark.svg" },
  { name: "LuLu Hypermarket", logo: "/logos/lulu.svg" },
  { name: "Deliveroo",        logo: "/logos/deliveroo.svg" },
  { name: "noon food",        logo: "/logos/noonfood.svg" },
  { name: "Spinneys",         logo: "/logos/spinneys.svg" },
  { name: "Alshaya Group",    logo: "/logos/alshaya.svg" },
  { name: "Chalhoub",         logo: "/logos/chalhoub.svg" },
  { name: "Amazon.ae",        logo: "/logos/amazon.svg" },
];

const routeCaps = [
  { n: "/ 01", title: "Stacking Logic", desc: "We bundle multiple deliveries onto a single route to drive down cost per drop without breaking SLA." },
  { n: "/ 02", title: "Live Re-Routing", desc: "Routes adjust continuously as traffic, breakdowns and new orders enter the network." },
  { n: "/ 03", title: "Local Intelligence", desc: "Routes built around prayer times, gated compounds, school zones and Ramadan timings." },
  { n: "/ 04", title: "Demand Planning", desc: "We anticipate volume by daypart and location, pre-positioning vehicles before peak windows." },
];

const layers = [
  {
    cls: "l1",
    grad: "linear-gradient(180deg,#0F1A3D,#1F1E9C)",
    num: "01", tag: "SOFTWARE",
    title: "Logistics Delivery Management Software",
    desc: "License the Ajil platform — TMS, WMS, dispatch, driver and rider apps, customer tracking and a unified control tower. Run with your own fleet, your own warehouses, your own people. Multi-tenant, white-label and API-first.",
    chips: ["TMS", "WMS", "Dispatch", "Driver App", "Control Tower"],
    cta: "License The Platform →", href: "/services",
  },
  {
    cls: "l2",
    grad: "linear-gradient(180deg,#1F1E9C,#2D2BE0)",
    num: "02", tag: "ON-DEMAND",
    title: "On-Demand Logistics",
    desc: "Tap into Ajil's existing rider, vehicle and warehouse network on a pay-per-delivery basis — flex up during peaks, scale down on quiet days. A ready-made network across the GCC, available the day you onboard. Software is included.",
    chips: ["Pay Per Delivery", "Same-Day", "Scheduled", "Surge Capacity", "Software Included"],
    cta: "Use On-Demand →", href: "/services",
  },
  {
    cls: "l3",
    grad: "linear-gradient(180deg,#2D2BE0,#5A4BFF)",
    num: "03", tag: "DEDICATED",
    title: "Dedicated Logistics",
    desc: "Capacity that operates exclusively for your business — branded riders, ringfenced fleet, dedicated warehouse footprint, dark store hubs in your target catchments. The same operating platform, but the operation wears your colours.",
    chips: ["Branded Fleet", "Dedicated Warehouse", "Dark Stores", "SLA-Bound", "Custom KPIs"],
    cta: "Build Dedicated →", href: "/services/dedicated",
  },
  {
    cls: "l4",
    grad: "linear-gradient(180deg,#5A4BFF,#8775FF)",
    num: "04", tag: "MANAGED",
    title: "Fully Managed Operations",
    desc: "We take ownership of your entire logistics function. Network design, hiring, warehouse leasing, dark store operations, fleet management — and a single accountable leadership team reporting against the KPIs you set.",
    chips: ["End-To-End", "Outsourced", "Single Contract", "Custom SLAs", "Quarterly Reviews"],
    cta: "Outsource To Ajil →", href: "/services",
  },
];

const whyCards = [
  { n: "i.", title: "Built For The GCC", desc: "Our dispatch operation was built on this region's roads, traffic patterns, prayer times and gated compounds — not retrofitted from a European model." },
  { n: "ii.", title: "One Model Or All Four", desc: "License software, use the network, build dedicated capacity, or outsource the function entirely — without changing partners as you grow." },
  { n: "iii.", title: "Operator DNA", desc: "We run logistics ourselves before we sell it. Every capability is shaped by a live operations team, not a roadmap committee." },
];

const industries = [
  { svgPath: <><path d="M3 21V8l9-5 9 5v13"/><path d="M9 21V12h6v9"/></>, label: "Quick Commerce & Grocery" },
  { svgPath: <><path d="M3 8h18M5 8v12h14V8M9 4h6v4H9z"/></>, label: "Cloud Kitchens & QSR" },
  { svgPath: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/></>, label: "B2B Distribution" },
  { svgPath: <><rect x="2" y="7" width="20" height="13" rx="1"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></>, label: "Pharmacy & Healthcare" },
  { svgPath: <><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></>, label: "Fashion & Retail" },
  { svgPath: <><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5"/></>, label: "3PL & Marketplaces" },
  { svgPath: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></>, label: "On-Demand Services" },
  { svgPath: <><path d="M5 12h14M12 5l7 7-7 7"/></>, label: "Cross-Border & Freight" },
];

const testimonials = [
  { industry: "Grocery", q: `We replaced three logistics vendors with a single Ajil contract — software, network and a dedicated dark-store layer. Cost per drop fell 27% and our COO finally has <em>one number to look at</em>.`, initials: "FA", name: "Fatima Al Sayed", role: "VP Operations · Regional Grocery Group" },
  { industry: "Quick Commerce", q: `Ajil's stacking logic took our cost-per-drop down by 31% in the first quarter. The dispatch team flagged exceptions before our own ops noticed them. <em>It just runs</em>.`, initials: "RM", name: "Rashid Mansoori", role: "Head Of Logistics · Quick Commerce Platform" },
  { industry: "QSR", q: `We onboarded across 47 outlets in 14 days. Branded riders, our packaging, our SLA. The customer never knows it's outsourced — they just know <em>their food is on time</em>.`, initials: "SK", name: "Sara Khoury", role: "COO · Multi-Brand Restaurant Group" },
  { industry: "Pharmacy", q: `Cold-chain compliance, signature capture and live driver tracking — all working out of the box. We cut RTO incidents by 42% and our pharmacists trust the platform. <em>Audit-ready by default</em>.`, initials: "MA", name: "Dr. Mariam Al-Thani", role: "Operations Director · Pharmacy Chain" },
  { industry: "Retail", q: `We needed scheduled, branded last-mile across three GCC markets. Ajil delivered the software, the riders and the warehouse footprint. <em>One partner, one contract, one team to call</em>.`, initials: "YH", name: "Yousef Habib", role: "Head Of E-Commerce · Fashion Retailer" },
  { industry: "B2B Distribution", q: `Route optimization that actually understands GCC roads — prayer windows, gated compounds, the lot. Our drivers complete 23% more drops per shift and they're <em>happier doing it</em>.`, initials: "AB", name: "Abdullah Bilal", role: "Logistics Manager · F&B Distributor" },
];

/* ─── WA SVG ─── */
const WaSvg = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function HomePage() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      }),
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Nav />

      {/* ====== HERO ====== */}
      <header className="hp-hero">
          <div className="hp-hero-inner">

            {/* LEFT: text */}
            <div className="hp-hero-text">
              <h1 className="hp-hero-h">
                The intelligence<br />
                layer for{" "}<em>everything<br />that moves</em>.
              </h1>
              <p className="hp-hero-sub">
                Ajil builds the dispatch operation, the operating software, and the physical
                infrastructure that runs modern commerce — across 6 GCC markets.
              </p>
              <div className="hp-hero-actions">
                <a href="#cta" className="hp-btn-hero">
                  Talk to a logistics architect
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                </a>
                <a href="#dispatch" className="hp-btn-hero2">How dispatch works</a>
              </div>
              <div className="hp-hero-signal">
                {signals.map((s) => (
                  <div className="hp-signal-item" key={s.label}>
                    <div className="hp-signal-num">{s.num}<span className="hp-signal-unit">{s.unit}</span></div>
                    <div className="hp-signal-lbl">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: network visual — same white bg, no panel */}
            <div className="hp-hero-visual">
              <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="hp-map-svg">
                {/* Soft glow behind main hub */}
                <circle cx="268" cy="120" r="80" fill="rgba(45,43,224,.05)"/>
                {/* Route lines */}
                <path d="M 88 228 C 150 170 215 144 268 120" stroke="rgba(27,26,104,.32)" strokeWidth="1.6" strokeDasharray="8 5"/>
                <path d="M 268 120 C 330 104 385 126 418 158" stroke="rgba(27,26,104,.32)" strokeWidth="1.6" strokeDasharray="8 5"/>
                <path d="M 418 158 C 436 202 440 242 432 276" stroke="rgba(27,26,104,.2)" strokeWidth="1.3" strokeDasharray="6 5"/>
                <path d="M 88 228 C 148 250 202 262 252 268" stroke="rgba(27,26,104,.2)" strokeWidth="1.3" strokeDasharray="6 5"/>
                <path d="M 252 268 C 312 272 365 264 402 256" stroke="rgba(27,26,104,.15)" strokeWidth="1.1" strokeDasharray="5 6"/>
                <path d="M 178 190 C 222 158 248 136 268 120" stroke="rgba(27,26,104,.13)" strokeWidth="1" strokeDasharray="5 7"/>
                {/* KW hub */}
                <circle cx="88" cy="228" r="28" fill="rgba(27,26,104,.07)"/>
                <circle cx="88" cy="228" r="11" fill="rgba(27,26,104,.22)"/>
                <circle cx="88" cy="228" r="4.5" fill="#1B1A68"/>
                <text x="88" y="266" textAnchor="middle" fontFamily="monospace" fontSize="9.5" fill="rgba(27,26,104,.6)" fontWeight="700" letterSpacing="0.1em">KW</text>
                {/* KSA hub */}
                <circle cx="252" cy="268" r="20" fill="rgba(27,26,104,.07)"/>
                <circle cx="252" cy="268" r="8" fill="rgba(27,26,104,.24)"/>
                <circle cx="252" cy="268" r="3.5" fill="#2D2BE0"/>
                <text x="252" y="294" textAnchor="middle" fontFamily="monospace" fontSize="9.5" fill="rgba(27,26,104,.6)" fontWeight="700" letterSpacing="0.1em">KSA</text>
                {/* QA hub — main */}
                <circle cx="268" cy="120" r="42" fill="rgba(45,43,224,.08)"/>
                <circle cx="268" cy="120" r="18" fill="rgba(45,43,224,.28)"/>
                <circle cx="268" cy="120" r="7.5" fill="#4A49E0"/>
                <text x="268" y="96" textAnchor="middle" fontFamily="monospace" fontSize="9.5" fill="rgba(27,26,104,.65)" fontWeight="700" letterSpacing="0.1em">QA</text>
                {/* BH hub */}
                <circle cx="402" cy="256" r="18" fill="rgba(27,26,104,.07)"/>
                <circle cx="402" cy="256" r="7" fill="rgba(27,26,104,.22)"/>
                <circle cx="402" cy="256" r="3" fill="#3230A8"/>
                <text x="402" y="280" textAnchor="middle" fontFamily="monospace" fontSize="9.5" fill="rgba(27,26,104,.6)" fontWeight="700" letterSpacing="0.1em">BH</text>
                {/* UAE hub */}
                <circle cx="418" cy="158" r="36" fill="rgba(45,43,224,.07)"/>
                <circle cx="418" cy="158" r="14" fill="rgba(45,43,224,.26)"/>
                <circle cx="418" cy="158" r="6" fill="#5A4BFF"/>
                <text x="418" y="134" textAnchor="middle" fontFamily="monospace" fontSize="9.5" fill="rgba(27,26,104,.65)" fontWeight="700" letterSpacing="0.1em">UAE</text>
                {/* OM hub */}
                <circle cx="432" cy="276" r="15" fill="rgba(27,26,104,.06)"/>
                <circle cx="432" cy="276" r="6" fill="rgba(27,26,104,.2)"/>
                <circle cx="432" cy="276" r="2.5" fill="#1B1A68"/>
                <text x="432" y="298" textAnchor="middle" fontFamily="monospace" fontSize="9.5" fill="rgba(27,26,104,.55)" fontWeight="700" letterSpacing="0.1em">OM</text>
                {/* Animated packets */}
                <circle className="hp-pkt hp-pkt-1" r="4.5" fill="#0E9D6E"/>
                <circle className="hp-pkt hp-pkt-2" r="4" fill="#F5A623"/>
                <circle className="hp-pkt hp-pkt-3" r="3.5" fill="#0E9D6E"/>
                <circle className="hp-pkt hp-pkt-4" r="3.5" fill="#E05A4A"/>
              </svg>
              {/* Floating metric cards */}
              <div className="hp-intel-card" style={{top:"18%",left:"4%",animationDelay:".2s"}}>
                <div className="hp-icard-label">Active Routes</div>
                <div className="hp-icard-val">2,847</div>
              </div>
              <div className="hp-intel-card" style={{top:"32%",right:"2%",animationDelay:".35s"}}>
                <div className="hp-icard-label">SLA Adherence</div>
                <div className="hp-icard-val">98.4%</div>
              </div>
              <div className="hp-intel-card" style={{bottom:"16%",right:"6%",animationDelay:".5s"}}>
                <div className="hp-icard-label">Cost / Drop</div>
                <div className="hp-icard-val">−23%</div>
              </div>
            </div>

          </div>
      </header>

      {/* ====== CLIENT MARQUEE ====== */}
      <section className="hp-clients">
        <div className="hp-container">
          <p className="hp-clients-label">Trusted By Operators Moving The Region Forward</p>
        </div>
        <div className="hp-marquee">
          <div className="hp-marquee-track">
            {[...clients, ...clients].map((client, i) => (
              <div className="hp-logo-card" key={i}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={client.logo} alt={client.name} className="hp-logo-img" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== DISPATCH ====== */}
      <section className="hp-routing" id="dispatch">
        <div className="hp-container">
          <div className="hp-route-hero reveal">
            {/* Text */}
            <div className="hp-route-text">
              <span className="hp-section-tag">01 · Dispatch &amp; Route Optimization</span>
              <h3 className="hp-route-h">
                Smarter Routing. <em>Lower Cost.</em><br />Higher Efficiency.
              </h3>
              <p className="hp-route-p">
                Our dispatch teams plan, monitor and intervene across thousands of routes every day — driven by route optimization and stacking logic built specifically for the GCC. Every plan balances cost per drop, on-time delivery, vehicle utilization and driver workload, the way a senior dispatcher would, only at network scale.
              </p>
              <div className="hp-route-pills">
                {["24/7 Control Room", "Route Optimization", "Order Stacking Logic", "Live Re-Routing"].map((pill) => (
                  <span className="hp-route-pill" key={pill}><span className="hp-pdot" />{pill}</span>
                ))}
              </div>
            </div>

            {/* Canvas */}
            <div className="hp-route-canvas">
              <div className="hp-route-canvas-bg" />
              <div className="hp-ai-badge">
                <span className="hp-ai-dot" />
                Live Plan · v3.41 · Stacked
              </div>
              <div className="hp-route-legend">
                <div className="hp-legend-item"><span className="hp-legend-line hp-leg-old" />Unstacked</div>
                <div className="hp-legend-item"><span className="hp-legend-line hp-leg-new" />Optimized</div>
                <div className="hp-legend-item"><span className="hp-legend-dot hp-leg-hub" />Hub</div>
              </div>
              <svg className="hp-route-svg" viewBox="0 0 600 500" preserveAspectRatio="xMidYMid meet">
                <path className="hp-route-old" d="M120 380 L 420 110 L 180 200 L 480 320 L 230 290 L 380 420" />
                <path className="hp-route-new" d="M120 380 C 140 320, 180 280, 230 290 S 320 270, 380 230 S 460 160, 420 110 M 420 110 C 380 140, 320 180, 380 230 S 460 280, 480 320 C 460 380, 420 410, 380 420" />
                <circle className="hp-route-hub" cx="120" cy="380" r="9" />
                <text x="138" y="385" fontFamily="monospace" fontSize="11" fill="rgba(15,26,61,0.7)">HUB · DOHA</text>
                <circle className="hp-route-pt" cx="420" cy="110" r="6" />
                <circle className="hp-route-pt2" cx="180" cy="200" r="6" />
                <circle className="hp-route-pt" cx="480" cy="320" r="6" />
                <circle className="hp-route-pt2" cx="230" cy="290" r="6" />
                <circle className="hp-route-pt" cx="380" cy="420" r="6" />
                <circle className="hp-route-pt2" cx="380" cy="230" r="5" />
                <g fontFamily="monospace" fontSize="9" fill="rgba(15,26,61,0.4)">
                  <text x="432" y="106">stop 04</text>
                  <text x="192" y="196">stop 02</text>
                  <text x="492" y="316">stop 05</text>
                  <text x="242" y="286">stop 01</text>
                  <text x="392" y="416">stop 06</text>
                  <text x="392" y="226">stop 03</text>
                </g>
              </svg>
              <div className="hp-decision-panel">
                {[
                  { lbl: "Cost / Drop", val: "−34%", up: true },
                  { lbl: "Time Saved", val: "−28%", up: true },
                  { lbl: "Stops Stacked", val: "6 / 6", up: false },
                  { lbl: "SLA Risk", val: "Low", up: true },
                  { lbl: "Plan Built In", val: "142 ms", up: false },
                ].map((row) => (
                  <div className="hp-decision-row" key={row.lbl}>
                    <span className="hp-dlbl">{row.lbl}</span>
                    <span className={row.up ? "hp-dval hp-dup" : "hp-dval"}>{row.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Caps grid */}
          <div className="hp-route-caps reveal">
            {routeCaps.map((cap) => (
              <div className="hp-route-cap" key={cap.n}>
                <span className="hp-cap-num">{cap.n}</span>
                <h4 className="hp-cap-h">{cap.title}</h4>
                <p className="hp-cap-p">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== SERVICE MODELS ====== */}
      <section className="hp-layers" id="services">
        <div className="hp-container">
          <div className="hp-section-head reveal">
            <div>
              <span className="hp-section-tag">02 · Service Models</span>
              <h2 className="hp-section-title">Four Ways To <em>Partner With Us</em>.</h2>
            </div>
            <p className="hp-section-desc">Every business runs logistics differently. Ajil offers four service models — pick the one that fits where you are today, and scale up the partnership as your operation matures. One contract spans all four.</p>
          </div>
          <div className="hp-layer-intro reveal">
            <p>Most providers force you into a single shape. Ajil meets you where you are — license our software, tap our on-demand logistics, ringfence dedicated capacity, or hand us the entire logistics function.</p>
          </div>
          <div className="hp-layer-stack reveal">
            {layers.map((layer) => (
              <a href={layer.href} key={layer.num} className={`hp-layer-row hp-${layer.cls}`} style={{ "--hp-gradient": layer.grad } as React.CSSProperties}>
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
        </div>
      </section>

      {/* ====== DEDICATED ====== */}
      <section className="hp-dedicated" id="dedicated">
        <div className="hp-container">
          <div className="hp-section-head reveal">
            <div>
              <span className="hp-section-tag">03 · Dedicated Logistics</span>
              <h2 className="hp-section-title">Your Operation, <em>Engineered</em>.</h2>
            </div>
            <p className="hp-section-desc">When the on-demand network can&apos;t deliver the SLA, brand experience or unit economics you need, Ajil designs and operates a dedicated logistics arm — staffed, kitted and tuned to your business. The full Ajil platform, exclusively yours.</p>
          </div>
          <div className="hp-ded-grid reveal">
            <div>
              <h3 className="hp-ded-h">Built Around <em>Your</em> Commerce, Not The Other Way Around.</h3>
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
                  {([[120, 80], [280, 100], [380, 170], [180, 180]] as [number,number][]).map(([cx, cy], i) => (
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
        </div>
      </section>

      {/* ====== WHY AJIL ====== */}
      <section className="hp-why" id="why">
        <div className="hp-container">
          <div className="hp-section-head reveal">
            <div>
              <span className="hp-section-tag">04 · Why Ajil</span>
              <h2 className="hp-section-title">Why Operators <em>Switch</em>.</h2>
            </div>
            <p className="hp-section-desc">Three reasons our customers consolidate three vendors into one Ajil contract — usually within their first year.</p>
          </div>
          <div className="hp-why-grid reveal">
            {whyCards.map((card) => (
              <div className="hp-why-card" key={card.n}>
                <div className="hp-why-num">{card.n}</div>
                <h4 className="hp-why-h4">{card.title}</h4>
                <p className="hp-why-p">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== INDUSTRIES ====== */}
      <section className="hp-industries" id="industries">
        <div className="hp-container">
          <div className="hp-section-head reveal" style={{ gridTemplateColumns: "1fr", textAlign: "center" }}>
            <div style={{ margin: "0 auto" }}>
              <span className="hp-section-tag" style={{ justifyContent: "center", display: "inline-flex" }}>06 · Industries We Serve</span>
              <h2 className="hp-section-title" style={{ margin: "18px auto 0", textAlign: "center" }}>Tuned For <em>Every Category</em> That Moves.</h2>
            </div>
          </div>
          <div className="hp-ind-strip reveal">
            {industries.map((ind) => (
              <div className="hp-ind-chip" key={ind.label}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">{ind.svgPath}</svg>
                {ind.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== JOIN US ====== */}
      <section className="hp-join" id="join">
        <div className="hp-container">
          <div className="hp-section-head reveal" style={{ gridTemplateColumns: "1fr", textAlign: "center", marginBottom: 48 }}>
            <div style={{ margin: "0 auto" }}>
              <span className="hp-section-tag" style={{ justifyContent: "center", display: "inline-flex" }}>05 · Join Us</span>
              <h2 className="hp-section-title" style={{ margin: "18px auto 0", textAlign: "center" }}>Two Paths, <em>One Network</em>.</h2>
              <p className="hp-section-desc" style={{ margin: "18px auto 0", textAlign: "center" }}>Whether you move goods or have goods to move — Ajil is hiring, partnering and onboarding every week.</p>
            </div>
          </div>
          <div className="hp-join-grid reveal">
            {/* Driver card */}
            <div className="hp-join-card">
              <div className="hp-join-bg hp-join-bg-driver" />
              <div className="hp-join-inner">
                <div className="hp-join-icon hp-join-icon-driver">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="6" cy="17" r="3"/><circle cx="18" cy="17" r="3"/><path d="M6 17l4-9 4 4h4M14 6l4 11"/></svg>
                </div>
                <span className="hp-join-eyebrow" style={{ color: "var(--indigo)" }}>For Riders &amp; Drivers</span>
                <h3 className="hp-join-title">Drive With Ajil.<br /><em style={{ fontFamily: "var(--font-instrument),serif", fontStyle: "italic", background: "linear-gradient(110deg,#1B1A68,#5A4BFF)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>Earn Every Day.</em></h3>
                <p className="hp-join-desc">Bikes, cars and vans — owned or rented. Daily routes, weekly payouts, performance bonuses, and a network big enough to keep you moving every shift.</p>
                <ul className="hp-join-perks">
                  {["Weekly Payouts In QAR / AED / SAR", "Daily Stacked Routes — Earn More Per Hour", "Bike, Vehicle & Fuel Support", "Health Insurance & Visa Support", "Performance Bonuses Every Month"].map((perk) => (
                    <li key={perk}><span className="hp-perk-dot" />{perk}</li>
                  ))}
                </ul>
                <div className="hp-join-actions">
                  <a href="https://wa.me/97400000000?text=Hi%20Ajil%20-%20I%20want%20to%20join%20as%20a%20driver" className="hp-join-btn hp-btn-wa">
                    <WaSvg />
                    <span><small>WhatsApp Us</small><strong>Apply In 60 Seconds</strong></span>
                  </a>
                  <a href="#" className="hp-join-btn hp-btn-form">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                    Driver Application Form
                  </a>
                </div>
                <p className="hp-join-foot">Now Hiring · Doha · Dubai · Riyadh · Kuwait</p>
              </div>
            </div>

            {/* Client card */}
            <div className="hp-join-card">
              <div className="hp-join-bg hp-join-bg-client" />
              <div className="hp-join-inner">
                <div className="hp-join-icon hp-join-icon-client">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 21V8l9-5 9 5v13"/><path d="M9 21V12h6v9"/></svg>
                </div>
                <span className="hp-join-eyebrow" style={{ color: "var(--indigo)" }}>For Businesses</span>
                <h3 className="hp-join-title">Move Your Goods.<br /><em style={{ fontFamily: "var(--font-instrument),serif", fontStyle: "italic", background: "linear-gradient(110deg,#0F1A3D,#5A4BFF)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>Move Faster.</em></h3>
                <p className="hp-join-desc">Whether you ship 100 or 100,000 deliveries a month — book a working session with our logistics team. We&apos;ll show you which service model fits and what it would cost against your real numbers.</p>
                <ul className="hp-join-perks">
                  {["Same-Day & Scheduled Coverage Across The GCC", "Pricing Built Around Your Volume", "Onboarded In 14 Days Or Less", "Live Visibility & Branded Tracking Pages", "Named Account Manager From Day One"].map((perk) => (
                    <li key={perk}><span className="hp-perk-dot hp-perk-dot-client" />{perk}</li>
                  ))}
                </ul>
                <div className="hp-join-actions">
                  <a href="https://wa.me/97400000000?text=Hi%20Ajil%20-%20I'd%20like%20to%20discuss%20logistics%20for%20my%20business" className="hp-join-btn hp-btn-wa">
                    <WaSvg />
                    <span><small>WhatsApp Sales</small><strong>Get A Quote Today</strong></span>
                  </a>
                  <a href="/contact" className="hp-join-btn hp-btn-form-alt">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
                    Request Working Session
                  </a>
                </div>
                <p className="hp-join-foot">Trusted By 60+ Brands Across 6 Markets</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== TESTIMONIALS ====== */}
      <section style={{ padding: "140px 0" }}>
        <div className="hp-container">
          <div className="hp-section-head reveal">
            <div>
              <span className="hp-section-tag">06 · Testimonials</span>
              <h2 className="hp-section-title">What Our <em>Customers Say</em>.</h2>
            </div>
            <p className="hp-section-desc">From quick commerce to QSR to enterprise retail — operators across the GCC are running their logistics on Ajil, and finding new efficiency in motion.</p>
          </div>
          <div className="hp-quotes-grid reveal">
            {testimonials.map((t) => (
              <div className="hp-quote-card" key={t.name}>
                <span className="hp-industry-tag">{t.industry}</span>
                <div className="hp-qmark">&ldquo;</div>
                <p dangerouslySetInnerHTML={{ __html: t.q }} />
                <div className="hp-author">
                  <div className="hp-avatar">{t.initials}</div>
                  <div>
                    <div className="hp-qname">{t.name}</div>
                    <div className="hp-qrole">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== CTA ====== */}
      <section className="hp-cta" id="cta">
        <div className="hp-container hp-cta-inner reveal">
          <h2 className="hp-cta-h">Ready to put your operations <em>in motion?</em></h2>
          <p className="hp-cta-p">Book 30 minutes with a logistics architect. Bring your real numbers — we&apos;ll show you which service model fits, where the savings come from, and how the operation would look in practice.</p>
          <div className="hp-cta-actions">
            <a href="/contact" className="hp-cta-btn-primary">
              Book a working session
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
            </a>
            <a href="#" className="hp-cta-btn-ghost">Download capability deck</a>
          </div>
          <div className="hp-big-wordmark">
            <svg height="90" viewBox="0 0 300 90" fill="none">
              <text x="0" y="82" fontFamily="Georgia, serif" fontSize="90" fontWeight="700" fill="white" style={{ letterSpacing: "-0.04em" }}>ajil</text>
            </svg>
          </div>
          <div className="hp-big-tagline">— Efficiency in Motion —</div>
        </div>
      </section>

      <Footer />

      {/* ====== ALL STYLES ====== */}
      <style>{`
        /* Container */
        .hp-container { max-width: 1440px; margin: 0 auto; padding: 0 clamp(24px, 6vw, 88px); }
        @media (max-width: 760px) { .hp-container { padding: 0 20px; } }
        /* Section framework */
        .hp-section-head { display: grid; grid-template-columns: auto 1fr; gap: 48px; margin-bottom: 72px; align-items: end; }
        @media (max-width: 780px) { .hp-section-head { grid-template-columns: 1fr; gap: 24px; margin-bottom: 48px; } }
        .hp-section-tag { font-family: var(--font-geist-mono), monospace; font-size: 11px; color: var(--indigo); text-transform: uppercase; letter-spacing: .18em; display: flex; align-items: center; gap: 10px; font-weight: 500; }
        .hp-section-tag::before { content: ""; width: 24px; height: 1px; background: var(--indigo); }
        .hp-section-title { font-size: clamp(36px,5vw,68px); line-height: 1; letter-spacing: -.04em; font-weight: 500; margin-top: 18px; max-width: 18ch; color: var(--ink); }
        .hp-section-title em { font-family: var(--font-instrument), serif; font-style: italic; font-weight: 400; color: var(--indigo); }
        .hp-section-desc { font-size: 17px; color: var(--muted); max-width: 50ch; line-height: 1.6; }

        /* ── HERO ── */
        .hp-hero { position: relative; min-height: 100svh; background: #fff; overflow: hidden; border-bottom: 1px solid var(--line); }
        .hp-hero-inner { display: grid; grid-template-columns: 1fr 1fr; align-items: center; min-height: 100svh; width: 100%; }
        .hp-hero-text { padding: 160px 40px 100px clamp(28px, 8vw, 140px); }

        .hp-hero-eyebrow { display: inline-flex; align-items: center; gap: 10px; font-family: var(--font-geist-mono), monospace; font-size: 11px; font-weight: 500; letter-spacing: .14em; text-transform: uppercase; color: var(--muted); margin-bottom: 40px; animation: fadeUp .6s both; }
        .hp-live-dot { width: 7px; height: 7px; border-radius: 50%; background: #0E9D6E; box-shadow: 0 0 12px rgba(14,157,110,.75); animation: pulse 2.5s infinite; flex-shrink: 0; }

        .hp-hero-h { font-size: clamp(44px,5.2vw,84px); line-height: .96; letter-spacing: -.045em; font-weight: 600; color: var(--ink); margin: 0 0 32px; animation: fadeUp .8s .1s both; }
        .hp-hero-h em { font-family: var(--font-instrument), serif; font-style: italic; font-weight: 400; background: linear-gradient(115deg,#1B1A68 0%,#2D2BE0 48%,#5A4BFF 100%); -webkit-background-clip: text; background-clip: text; color: transparent; letter-spacing: -.025em; }

        .hp-hero-sub { font-size: clamp(16px,1.3vw,18px); color: var(--muted); max-width: 46ch; line-height: 1.7; font-weight: 400; margin-bottom: 48px; animation: fadeUp .8s .2s both; }
        .hp-hero-actions { display: flex; gap: 14px; flex-wrap: wrap; margin-bottom: 72px; animation: fadeUp .8s .3s both; }

        .hp-btn-hero { background: #1B1A68; color: #fff; font-weight: 600; padding: 14px 26px; border-radius: 999px; font-size: 15px; display: inline-flex; align-items: center; gap: 10px; transition: all .25s cubic-bezier(.2,.7,.2,1); box-shadow: 0 1px 0 rgba(255,255,255,.1) inset, 0 12px 32px -10px rgba(27,26,104,.5); white-space: nowrap; }
        .hp-btn-hero:hover { transform: translateY(-2px); background: var(--indigo); box-shadow: 0 1px 0 rgba(255,255,255,.12) inset, 0 20px 44px -10px rgba(45,43,224,.55); }
        .hp-btn-hero2 { background: transparent; color: var(--ink); font-weight: 500; padding: 14px 24px; border-radius: 999px; font-size: 15px; border: 1px solid var(--line-strong); display: inline-flex; align-items: center; gap: 10px; transition: all .25s ease; white-space: nowrap; }
        .hp-btn-hero2:hover { background: var(--paper-3); border-color: var(--line-dark); }

        .hp-hero-signal { display: flex; gap: 40px; flex-wrap: wrap; padding-top: 36px; border-top: 1px solid var(--line); animation: fadeUp 1s .44s both; }
        .hp-signal-item { display: flex; flex-direction: column; }
        .hp-signal-num { font-family: var(--font-instrument), serif; font-style: italic; font-size: 40px; line-height: 1; background: linear-gradient(115deg,var(--ink),#2D2BE0); -webkit-background-clip: text; background-clip: text; color: transparent; }
        .hp-signal-unit { font-size: .52em; opacity: .5; }
        .hp-signal-lbl { font-family: var(--font-geist-mono), monospace; font-size: 10px; color: var(--muted-2); text-transform: uppercase; letter-spacing: .12em; margin-top: 6px; }

        /* Right visual — same white canvas, no panel */
        .hp-hero-visual { position: relative; height: 100%; display: flex; align-items: center; padding: 100px clamp(20px, 7vw, 120px) 60px 0; }
        .hp-map-svg { width: 100%; height: auto; display: block; }
        .hp-intel-card { position: absolute; z-index: 4; background: #fff; border: 1px solid rgba(27,26,104,.1); border-radius: 12px; padding: 14px 20px; min-width: 148px; animation: fadeUp .8s both; box-shadow: 0 2px 12px -2px rgba(27,26,104,.1), 0 8px 32px -8px rgba(27,26,104,.12); }
        .hp-icard-label { font-family: var(--font-geist-mono), monospace; font-size: 9px; font-weight: 500; letter-spacing: .14em; text-transform: uppercase; color: rgba(27,26,104,.42); margin-bottom: 6px; }
        .hp-icard-val { font-family: var(--font-instrument), serif; font-style: italic; font-size: 30px; line-height: 1; color: var(--ink); letter-spacing: -.02em; }

        /* Animated delivery packets */
        .hp-pkt-1 { offset-path: path("M 88 228 C 150 170 215 144 268 120"); animation: pktMove 5.2s linear infinite; }
        .hp-pkt-2 { offset-path: path("M 268 120 C 330 104 385 126 418 158"); animation: pktMove 4.1s 1.6s linear infinite; }
        .hp-pkt-3 { offset-path: path("M 88 228 C 148 250 202 262 252 268"); animation: pktMove 6.8s 2.9s linear infinite; }
        .hp-pkt-4 { offset-path: path("M 418 158 C 436 202 440 242 432 276"); animation: pktMove 5.6s 0.7s linear infinite; }
        @keyframes pktMove { 0% { offset-distance: 0%; opacity: 0; } 8% { opacity: 1; } 92% { opacity: 1; } 100% { offset-distance: 100%; opacity: 0; } }

        @media (max-width: 1100px) { .hp-hero-inner { grid-template-columns: 1fr; } .hp-hero-visual { min-height: 400px; padding: 20px 24px 60px; } }
        @media (max-width: 640px) { .hp-hero-text { padding: 120px 20px 60px 20px; } .hp-hero-signal { gap: 28px; } }

        /* ── CLIENTS ── */
        .hp-clients { padding: 80px 0 90px; background: var(--paper-2); border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); position: relative; overflow: hidden; }
        .hp-clients::before { content: ""; position: absolute; top: 0; left: 30%; right: 30%; height: 1px; background: linear-gradient(90deg, transparent, var(--violet-line), transparent); }
        .hp-clients-label { text-align: center; font-family: var(--font-geist-mono), monospace; font-size: 11px; color: var(--muted-2); text-transform: uppercase; letter-spacing: .18em; margin-bottom: 48px; font-weight: 500; }
        .hp-marquee { position: relative; width: 100%; overflow: hidden; -webkit-mask-image: linear-gradient(90deg, transparent 0, #000 8%, #000 92%, transparent 100%); mask-image: linear-gradient(90deg, transparent 0, #000 8%, #000 92%, transparent 100%); }
        .hp-marquee-track { display: flex; gap: 24px; width: max-content; animation: marquee 60s linear infinite; will-change: transform; }
        .hp-marquee:hover .hp-marquee-track { animation-play-state: paused; }
        .hp-logo-card { flex-shrink: 0; width: 200px; height: 110px; border-radius: 18px; background: var(--paper); border: 1px solid var(--line-strong); display: flex; align-items: center; justify-content: center; padding: 22px 26px; box-shadow: 0 1px 0 rgba(255,255,255,.6) inset, 0 1px 2px rgba(15,26,61,.04), 0 12px 28px -16px rgba(45,43,224,.18); transition: transform .35s cubic-bezier(.2,.7,.2,1), box-shadow .35s ease, border-color .35s ease; }
        .hp-logo-card:hover { transform: translateY(-4px) scale(1.02); border-color: var(--violet-line); box-shadow: 0 1px 0 rgba(255,255,255,.6) inset, 0 22px 44px -16px rgba(90,75,255,.32); }
        .hp-logo-name { font-family: var(--font-instrument), serif; font-style: italic; font-size: 20px; color: var(--muted); letter-spacing: .02em; }
        .hp-logo-img { max-height: 44px; max-width: 140px; width: auto; object-fit: contain; transition: opacity .3s ease; }
        .hp-logo-card:hover .hp-logo-img { opacity: .75; }

        /* ── ROUTING ── */
        .hp-routing { position: relative; background: linear-gradient(180deg, var(--paper) 0%, var(--paper-2) 100%); overflow: hidden; border-top: 1px solid var(--line); padding: 140px 0; }
        .hp-routing::before { content: ""; position: absolute; top: 0; left: 0; right: 0; height: 1px; background: linear-gradient(90deg, transparent, var(--violet-line), transparent); }
        .hp-route-hero { display: grid; grid-template-columns: 1fr 1.3fr; gap: 80px; align-items: center; }
        @media (max-width: 980px) { .hp-route-hero { grid-template-columns: 1fr; gap: 48px; } }
        .hp-route-h { font-size: clamp(38px,5vw,72px); line-height: 1; letter-spacing: -.04em; font-weight: 500; margin: 24px 0 28px; color: var(--ink); }
        .hp-route-h em { font-family: var(--font-instrument), serif; font-style: italic; font-weight: 400; color: var(--indigo); }
        .hp-route-p { font-size: 18px; color: var(--muted); line-height: 1.65; margin-bottom: 32px; max-width: 48ch; }
        .hp-route-pills { display: flex; flex-wrap: wrap; gap: 8px; }
        .hp-route-pill { display: inline-flex; align-items: center; gap: 8px; padding: 8px 14px; border-radius: 999px; background: var(--paper); border: 1px solid var(--line-strong); font-family: var(--font-geist-mono), monospace; font-size: 12px; color: var(--ink); letter-spacing: .02em; box-shadow: 0 1px 2px rgba(15,26,61,.04); }
        .hp-pdot { width: 6px; height: 6px; border-radius: 50%; background: var(--violet); box-shadow: 0 0 6px rgba(90,75,255,.5); display: inline-block; flex-shrink: 0; }

        /* Canvas */
        .hp-route-canvas { position: relative; border: 1px solid var(--line-strong); border-radius: 24px; background: radial-gradient(ellipse 80% 80% at 50% 50%, rgba(90,75,255,.04), transparent 70%), linear-gradient(180deg,#FCFDFF 0%,#F4F6FC 100%); padding: 32px; overflow: hidden; aspect-ratio: 1.2/1; box-shadow: 0 1px 0 rgba(255,255,255,.8) inset, 0 24px 60px -20px rgba(45,43,224,.18), 0 4px 14px -6px rgba(15,26,61,.06); }
        .hp-route-canvas::before { content: ""; position: absolute; top: -1px; left: 25%; right: 25%; height: 1px; background: linear-gradient(90deg, transparent, var(--violet-line), transparent); }
        .hp-route-canvas-bg { position: absolute; inset: 0; background-image: linear-gradient(rgba(15,26,61,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(15,26,61,.05) 1px, transparent 1px); background-size: 40px 40px; mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, #000, transparent 95%); -webkit-mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, #000, transparent 95%); }
        .hp-route-svg { position: absolute; inset: 0; width: 100%; height: 100%; }
        .hp-route-old { stroke: rgba(194,52,42,.55); stroke-width: 1.4; fill: none; stroke-dasharray: 3 4; }
        .hp-route-new { stroke: var(--violet); stroke-width: 2.2; fill: none; stroke-dasharray: 8 4; animation: hp-dashflow 3s linear infinite; }
        @keyframes hp-dashflow { to { stroke-dashoffset: -50; } }
        .hp-route-pt { fill: var(--violet); animation: hp-ptpulse 2.4s infinite; }
        .hp-route-pt2 { fill: var(--indigo); animation: hp-ptpulse 2.4s .8s infinite; }
        .hp-route-hub { fill: #0E9D6E; filter: drop-shadow(0 0 8px rgba(14,157,110,.5)); }
        @keyframes hp-ptpulse { 0%,100% { r: 5px; } 50% { r: 7px; } }

        /* AI badge */
        .hp-ai-badge { position: absolute; top: 24px; left: 24px; padding: 10px 14px; border-radius: 12px; background: rgba(255,255,255,.92); border: 1px solid var(--violet-line); backdrop-filter: blur(8px); font-family: var(--font-geist-mono), monospace; font-size: 11px; color: var(--ink); display: flex; align-items: center; gap: 10px; letter-spacing: .04em; text-transform: uppercase; box-shadow: 0 4px 14px -6px rgba(45,43,224,.2); }
        .hp-ai-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--violet); animation: pulse 1.6s infinite; box-shadow: 0 0 10px rgba(90,75,255,.7); display: inline-block; flex-shrink: 0; }

        /* Legend */
        .hp-route-legend { position: absolute; top: 24px; right: 24px; padding: 12px 14px; border-radius: 12px; background: rgba(255,255,255,.9); border: 1px solid var(--line); backdrop-filter: blur(8px); display: flex; flex-direction: column; gap: 8px; font-family: var(--font-geist-mono), monospace; font-size: 10px; box-shadow: 0 4px 14px -6px rgba(15,26,61,.12); }
        .hp-legend-item { display: flex; align-items: center; gap: 8px; color: var(--muted); }
        .hp-legend-line { width: 18px; height: 2px; border-radius: 2px; display: inline-block; }
        .hp-leg-old { background: rgba(194,52,42,.6); }
        .hp-leg-new { background: var(--violet); }
        .hp-legend-dot { width: 8px; height: 8px; border-radius: 50%; display: inline-block; }
        .hp-leg-hub { background: #0E9D6E; box-shadow: 0 0 6px rgba(14,157,110,.5); }

        /* Decision panel */
        .hp-decision-panel { position: absolute; bottom: 24px; right: 24px; width: 240px; padding: 18px; border-radius: 14px; background: rgba(255,255,255,.95); border: 1px solid var(--line-strong); backdrop-filter: blur(10px); box-shadow: 0 14px 40px -16px rgba(15,26,61,.18), 0 2px 6px rgba(15,26,61,.04); }
        .hp-decision-row { display: flex; justify-content: space-between; font-family: var(--font-geist-mono), monospace; font-size: 11px; padding: 6px 0; border-bottom: 1px solid rgba(15,26,61,.06); }
        .hp-decision-row:last-child { border-bottom: none; }
        .hp-dlbl { color: var(--muted-2); text-transform: uppercase; letter-spacing: .06em; }
        .hp-dval { color: var(--ink); font-weight: 500; }
        .hp-dup { color: #0E9D6E; }

        /* Route caps */
        .hp-route-caps { display: grid; grid-template-columns: repeat(4,1fr); gap: 1px; margin-top: 120px; background: var(--line); border: 1px solid var(--line); border-radius: 20px; overflow: hidden; box-shadow: 0 1px 2px rgba(15,26,61,.03); }
        @media (max-width: 1000px) { .hp-route-caps { grid-template-columns: repeat(2,1fr); } }
        @media (max-width: 560px) { .hp-route-caps { grid-template-columns: 1fr; } }
        .hp-route-cap { background: var(--paper); padding: 32px 28px; transition: background .3s ease; }
        .hp-route-cap:hover { background: var(--paper-3); }
        .hp-cap-num { font-family: var(--font-geist-mono), monospace; font-size: 11px; color: var(--indigo); letter-spacing: .1em; font-weight: 500; }
        .hp-cap-h { font-size: 18px; font-weight: 500; letter-spacing: -.02em; margin: 14px 0 8px; color: var(--ink); }
        .hp-cap-p { font-size: 13px; color: var(--muted); line-height: 1.6; }

        /* ── LAYERS ── */
        .hp-layers { background: var(--paper); padding: 140px 0; }
        .hp-layer-intro { text-align: center; max-width: 760px; margin: 0 auto 64px; }
        .hp-layer-intro p { font-size: 18px; color: var(--muted); line-height: 1.6; }
        .hp-layer-stack { display: flex; flex-direction: column; gap: 16px; max-width: 1100px; margin: 0 auto; }
        .hp-layer-row { position: relative; display: grid; grid-template-columns: 120px 1fr auto; gap: 32px; padding: 32px; border: 1px solid var(--line); border-radius: 20px; background: var(--paper); transition: all .35s ease; overflow: hidden; align-items: center; box-shadow: 0 1px 2px rgba(15,26,61,.03); text-decoration: none; color: inherit; }
        @media (max-width: 780px) { .hp-layer-row { grid-template-columns: 1fr; gap: 18px; padding: 24px; } }
        .hp-layer-row::before { content: ""; position: absolute; top: 0; bottom: 0; left: 0; width: 4px; background: var(--hp-gradient, linear-gradient(180deg,#1A2654,#2D2BE0)); opacity: .95; }
        .hp-layer-row:hover { border-color: var(--line-strong); background: linear-gradient(110deg, rgba(238,240,255,.55), rgba(255,255,255,1)); transform: translateX(4px); box-shadow: 0 12px 32px -16px rgba(45,43,224,.18), 0 1px 2px rgba(15,26,61,.05); }
        .hp-layer-num { font-family: var(--font-instrument), serif; font-style: italic; font-size: 64px; line-height: 1; background: var(--hp-gradient, linear-gradient(180deg,#1A2654,#2D2BE0)); -webkit-background-clip: text; background-clip: text; color: transparent; }
        .hp-layer-num small { font-size: 14px; font-family: var(--font-geist-mono), monospace; font-style: normal; color: var(--muted-2); letter-spacing: .1em; display: block; margin-top: -4px; -webkit-text-fill-color: var(--muted-2); }
        .hp-layer-content h3 { font-size: 24px; font-weight: 500; letter-spacing: -.02em; margin-bottom: 8px; color: var(--ink); }
        .hp-layer-content p { font-size: 15px; color: var(--muted); line-height: 1.6; margin-bottom: 14px; max-width: 60ch; }
        .hp-layer-tags { display: flex; flex-wrap: wrap; gap: 6px; }
        .hp-layer-tags span { font-family: var(--font-geist-mono), monospace; font-size: 10px; padding: 4px 10px; border-radius: 999px; background: var(--paper-3); border: 1px solid var(--line); color: var(--muted); text-transform: uppercase; letter-spacing: .06em; }
        .hp-layer-cta { display: inline-flex; align-items: center; gap: 6px; padding: 10px 16px; border-radius: 999px; border: 1px solid var(--line-strong); background: var(--paper); font-family: var(--font-geist-mono), monospace; font-size: 11px; text-transform: uppercase; letter-spacing: .08em; color: var(--ink); transition: all .2s ease; white-space: nowrap; font-weight: 500; }
        .hp-layer-cta:hover { background: var(--ink); color: var(--paper); border-color: var(--ink); }
        @media (max-width: 780px) { .hp-layer-cta { align-self: flex-start; } }

        /* ── DEDICATED ── */
        .hp-dedicated { background: linear-gradient(180deg, var(--paper-2), var(--paper)); border-top: 1px solid var(--line); padding: 140px 0; }
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
        .hp-ded-dot { flex-shrink: 0; width: 32px; height: 32px; border-radius: 10px; background: linear-gradient(135deg, var(--violet-soft), rgba(238,240,255,.4)); border: 1px solid var(--violet-line); display: flex; align-items: center; justify-content: center; color: var(--indigo); font-family: var(--font-geist-mono), monospace; font-size: 11px; font-weight: 600; }
        .hp-ded-vis { border: 1px solid var(--line-strong); border-radius: 24px; background: linear-gradient(180deg,#FCFDFF 0%,#F4F6FC 100%); padding: 32px; position: relative; overflow: hidden; box-shadow: 0 1px 0 rgba(255,255,255,.8) inset, 0 24px 60px -20px rgba(45,43,224,.14), 0 4px 14px -6px rgba(15,26,61,.05); }
        .hp-ded-vis::before { content: ""; position: absolute; top: -1px; left: 30%; right: 30%; height: 1px; background: linear-gradient(90deg, transparent, var(--violet-line), transparent); }
        .hp-ded-label { font-family: var(--font-geist-mono), monospace; font-size: 11px; color: var(--muted-2); text-transform: uppercase; letter-spacing: .1em; margin-bottom: 18px; }
        .hp-ded-name { font-size: 20px; font-weight: 500; letter-spacing: -.02em; margin-bottom: 24px; color: var(--ink); }
        .hp-ded-spec { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: var(--line); border: 1px solid var(--line); border-radius: 14px; overflow: hidden; margin-bottom: 20px; }
        .hp-spec { background: var(--paper); padding: 18px; }
        .hp-spec-lbl { font-family: var(--font-geist-mono), monospace; font-size: 10px; color: var(--muted-2); text-transform: uppercase; letter-spacing: .08em; }
        .hp-spec-val { font-size: 24px; font-weight: 500; letter-spacing: -.02em; margin-top: 4px; font-family: var(--font-instrument), serif; font-style: italic; color: var(--ink); }
        .hp-spec-sub { font-family: var(--font-geist-mono), monospace; font-size: 10px; color: var(--muted); margin-top: 4px; }
        .hp-blueprint { height: 240px; border: 1px dashed var(--line-strong); border-radius: 14px; position: relative; overflow: hidden; background: radial-gradient(ellipse 80% 80% at 50% 50%, rgba(45,43,224,.05), transparent); }

        /* ── WHY ── */
        .hp-why { background: var(--paper); border-top: 1px solid var(--line); padding: 140px 0; }
        .hp-why-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 24px; }
        @media (max-width: 900px) { .hp-why-grid { grid-template-columns: 1fr; } }
        .hp-why-card { border: 1px solid var(--line); border-radius: 20px; padding: 36px 32px; background: var(--paper); position: relative; overflow: hidden; transition: all .35s ease; box-shadow: 0 1px 2px rgba(15,26,61,.03); }
        .hp-why-card:hover { border-color: var(--violet-line); transform: translateY(-4px); box-shadow: 0 18px 40px -18px rgba(45,43,224,.2), 0 1px 2px rgba(15,26,61,.05); }
        .hp-why-num { font-family: var(--font-instrument), serif; font-style: italic; font-size: 80px; line-height: 1; background: linear-gradient(135deg,#0F1A3D,#5A4BFF); -webkit-background-clip: text; background-clip: text; color: transparent; margin-bottom: 16px; }
        .hp-why-h4 { font-size: 21px; font-weight: 500; letter-spacing: -.02em; margin-bottom: 10px; color: var(--ink); }
        .hp-why-p { font-size: 14px; color: var(--muted); line-height: 1.6; }

        /* ── INDUSTRIES ── */
        .hp-industries { background: linear-gradient(180deg,var(--paper),var(--paper-2)); border-top: 1px solid var(--line); padding: 140px 0; }
        .hp-ind-strip { display: flex; flex-wrap: wrap; gap: 12px; justify-content: center; max-width: 920px; margin: 0 auto; }
        .hp-ind-chip { padding: 14px 22px; border-radius: 999px; border: 1px solid var(--line-strong); background: var(--paper); font-size: 14px; color: var(--ink); display: inline-flex; align-items: center; gap: 10px; transition: all .25s ease; box-shadow: 0 1px 2px rgba(15,26,61,.03); }
        .hp-ind-chip:hover { border-color: var(--violet); background: var(--violet-soft); transform: translateY(-2px); box-shadow: 0 10px 22px -10px rgba(90,75,255,.25); }
        .hp-ind-chip svg { color: var(--indigo); flex-shrink: 0; }

        /* ── JOIN ── */
        .hp-join { background: linear-gradient(180deg,var(--paper-2),var(--paper)); position: relative; overflow: hidden; border-top: 1px solid var(--line); padding: 140px 0; }
        .hp-join::before { content: ""; position: absolute; top: 0; left: 0; right: 0; height: 1px; background: linear-gradient(90deg, transparent, var(--violet-line), transparent); }
        .hp-join-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
        @media (max-width: 900px) { .hp-join-grid { grid-template-columns: 1fr; } }
        .hp-join-card { position: relative; border-radius: 32px; overflow: hidden; border: 1px solid var(--line-strong); min-height: 600px; transition: transform .35s ease, border-color .35s ease, box-shadow .35s ease; box-shadow: 0 1px 2px rgba(15,26,61,.03); }
        .hp-join-card:hover { transform: translateY(-6px); border-color: var(--violet-line); box-shadow: 0 30px 60px -24px rgba(45,43,224,.2), 0 4px 14px -6px rgba(15,26,61,.06); }
        .hp-join-bg { position: absolute; inset: 0; pointer-events: none; z-index: 0; }
        .hp-join-bg-driver { background: radial-gradient(ellipse 80% 60% at 80% 20%, rgba(90,75,255,.1), transparent 65%), radial-gradient(ellipse 60% 80% at 0% 100%, rgba(27,26,104,.07), transparent 65%), linear-gradient(150deg,#FAFBFF 0%,#F4F5FF 50%,#ECEFFE 100%); }
        .hp-join-bg-driver::after { content: ""; position: absolute; inset: 0; background-image: radial-gradient(rgba(27,26,104,.06) 1px, transparent 1px); background-size: 28px 28px; mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, #000, transparent 95%); -webkit-mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, #000, transparent 95%); }
        .hp-join-bg-client { background: radial-gradient(ellipse 80% 60% at 20% 20%, rgba(45,43,224,.12), transparent 65%), radial-gradient(ellipse 60% 80% at 100% 100%, rgba(123,107,255,.10), transparent 65%), linear-gradient(150deg,#FAFBFF 0%,#F0F2FE 50%,#E5E7FB 100%); }
        .hp-join-bg-client::after { content: ""; position: absolute; inset: 0; background-image: linear-gradient(rgba(15,26,61,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(15,26,61,.04) 1px, transparent 1px); background-size: 32px 32px; mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, #000, transparent 95%); -webkit-mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, #000, transparent 95%); }
        .hp-join-inner { position: relative; z-index: 1; padding: 48px 44px; display: flex; flex-direction: column; height: 100%; min-height: 600px; color: var(--ink); }
        @media (max-width: 680px) { .hp-join-inner { padding: 36px 28px; min-height: auto; } }
        .hp-join-icon { width: 56px; height: 56px; border-radius: 16px; display: flex; align-items: center; justify-content: center; margin-bottom: 24px; }
        .hp-join-icon-driver { background: linear-gradient(135deg, rgba(90,75,255,.15), rgba(27,26,104,.06)); border: 1px solid var(--violet-line); color: var(--indigo); }
        .hp-join-icon-client { background: linear-gradient(135deg, rgba(123,107,255,.22), rgba(45,43,224,.08)); border: 1px solid var(--violet-line); color: var(--indigo); }
        .hp-join-eyebrow { font-family: var(--font-geist-mono), monospace; font-size: 11px; text-transform: uppercase; letter-spacing: .18em; display: block; margin-bottom: 14px; font-weight: 500; }
        .hp-join-title { font-size: clamp(32px,3.6vw,46px); line-height: 1.05; letter-spacing: -.035em; font-weight: 500; margin-bottom: 18px; color: var(--ink); }
        .hp-join-desc { font-size: 16px; color: var(--muted); line-height: 1.6; margin-bottom: 28px; }
        .hp-join-perks { list-style: none; display: flex; flex-direction: column; gap: 10px; margin-bottom: 32px; flex: 1; }
        .hp-join-perks li { display: flex; align-items: center; gap: 12px; font-size: 14px; color: var(--ink); }
        .hp-perk-dot { flex-shrink: 0; width: 8px; height: 8px; border-radius: 50%; background: linear-gradient(135deg,#5A4BFF,#2D2BE0); box-shadow: 0 0 8px rgba(90,75,255,.35); display: inline-block; }
        .hp-perk-dot-client { background: linear-gradient(135deg,#9B8BFF,#5A4BFF) !important; box-shadow: 0 0 8px rgba(123,107,255,.4) !important; }
        .hp-join-actions { display: flex; flex-direction: column; gap: 10px; margin-bottom: 20px; }
        .hp-join-btn { display: flex; align-items: center; gap: 14px; padding: 14px 20px; border-radius: 14px; font-size: 15px; font-weight: 500; transition: all .25s ease; text-decoration: none; }
        .hp-join-btn span { display: flex; flex-direction: column; text-align: left; }
        .hp-join-btn span small { font-size: 11px; font-family: var(--font-geist-mono), monospace; opacity: .8; text-transform: uppercase; letter-spacing: .08em; margin-bottom: 1px; }
        .hp-join-btn span strong { font-weight: 600; }
        .hp-btn-wa { background: #1B1A68; color: #fff; box-shadow: 0 1px 0 rgba(255,255,255,.1) inset, 0 10px 28px -10px rgba(27,26,104,.5); }
        .hp-btn-wa:hover { background: var(--indigo); transform: translateY(-2px); box-shadow: 0 1px 0 rgba(255,255,255,.12) inset, 0 18px 36px -10px rgba(45,43,224,.55); }
        .hp-btn-form { background: rgba(255,255,255,.7); border: 1px solid var(--line-strong); color: var(--ink); }
        .hp-btn-form:hover { background: var(--paper-3); border-color: var(--line-dark); }
        .hp-btn-form-alt { background: rgba(255,255,255,.7); border: 1px solid var(--line-strong); color: var(--ink); }
        .hp-btn-form-alt:hover { background: var(--paper-3); border-color: var(--line-dark); }
        .hp-join-foot { font-family: var(--font-geist-mono), monospace; font-size: 11px; color: var(--muted-2); text-transform: uppercase; letter-spacing: .1em; font-weight: 500; padding-top: 18px; border-top: 1px solid var(--line); margin-top: auto; }

        /* ── TESTIMONIALS ── */
        .hp-quotes-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 24px; }
        @media (max-width: 980px) { .hp-quotes-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 680px) { .hp-quotes-grid { grid-template-columns: 1fr; } }
        .hp-quote-card { position: relative; border: 1px solid var(--line-strong); border-radius: 24px; padding: 36px 32px; background: var(--paper); display: flex; flex-direction: column; transition: border-color .35s ease, transform .35s ease, box-shadow .35s ease; overflow: hidden; box-shadow: 0 1px 2px rgba(15,26,61,.03); }
        .hp-quote-card::before { content: ""; position: absolute; top: -1px; left: 30%; right: 30%; height: 1px; background: linear-gradient(90deg, transparent, var(--violet-line), transparent); }
        .hp-quote-card:hover { border-color: var(--violet-line); transform: translateY(-4px); box-shadow: 0 18px 40px -18px rgba(45,43,224,.18), 0 1px 2px rgba(15,26,61,.05); }
        .hp-qmark { font-family: var(--font-instrument), serif; font-style: italic; font-size: 80px; line-height: .5; color: var(--violet); margin-bottom: 18px; height: 32px; }
        .hp-quote-card p { font-size: 16px; line-height: 1.55; color: var(--ink); font-weight: 400; margin-bottom: 28px; flex: 1; }
        .hp-quote-card p em { font-family: var(--font-instrument), serif; font-style: italic; color: var(--indigo); font-weight: 400; }
        .hp-author { display: flex; align-items: center; gap: 14px; padding-top: 20px; border-top: 1px solid var(--line); }
        .hp-avatar { width: 44px; height: 44px; border-radius: 50%; background: linear-gradient(135deg,#1F1E9C,#5A4BFF); display: flex; align-items: center; justify-content: center; color: #fff; font-weight: 600; font-size: 14px; flex-shrink: 0; box-shadow: 0 4px 14px -4px rgba(45,43,224,.45); }
        .hp-qname { font-size: 14px; font-weight: 500; color: var(--ink); line-height: 1.2; }
        .hp-qrole { font-family: var(--font-geist-mono), monospace; font-size: 11px; color: var(--muted); margin-top: 4px; letter-spacing: .02em; }
        .hp-industry-tag { position: absolute; top: 18px; right: 20px; font-family: var(--font-geist-mono), monospace; font-size: 10px; text-transform: uppercase; letter-spacing: .1em; padding: 4px 10px; border-radius: 999px; background: var(--violet-soft); border: 1px solid var(--violet-line); color: var(--indigo); font-weight: 500; }

        /* ── CTA ── */
        .hp-cta { background: var(--grad); position: relative; overflow: hidden; padding: 140px 0; color: var(--paper); }
        .hp-cta::before { content: ""; position: absolute; inset: 0; background: radial-gradient(ellipse 60% 70% at 50% 100%, rgba(123,107,255,.55), transparent 60%), radial-gradient(ellipse 90% 60% at 80% 0%, rgba(155,139,255,.18), transparent 60%); }
        .hp-cta::after { content: ""; position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px); background-size: 64px 64px; mask-image: radial-gradient(ellipse 70% 80% at 50% 40%, #000, transparent 90%); -webkit-mask-image: radial-gradient(ellipse 70% 80% at 50% 40%, #000, transparent 90%); pointer-events: none; }
        .hp-cta-inner { position: relative; z-index: 1; text-align: center; max-width: 920px; margin: 0 auto; }
        .hp-cta-h { font-size: clamp(40px,6vw,84px); line-height: 1; letter-spacing: -.04em; font-weight: 500; margin-bottom: 24px; color: var(--paper); }
        .hp-cta-h em { font-family: var(--font-instrument), serif; font-style: italic; font-weight: 400; background: linear-gradient(110deg,#fff,#9B8BFF); -webkit-background-clip: text; background-clip: text; color: transparent; }
        .hp-cta-p { font-size: 18px; color: rgba(255,255,255,.78); max-width: 50ch; margin: 0 auto 40px; line-height: 1.55; }
        .hp-cta-actions { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
        .hp-cta-btn-primary { background: #fff; color: var(--ink); font-weight: 600; padding: 14px 24px; border-radius: 999px; font-size: 15px; display: inline-flex; align-items: center; gap: 10px; transition: all .25s ease; box-shadow: 0 1px 0 rgba(255,255,255,.4) inset, 0 14px 36px -10px rgba(0,0,0,.45); }
        .hp-cta-btn-primary:hover { background: #F1F4FA; }
        .hp-cta-btn-ghost { background: transparent; color: #fff; font-weight: 500; padding: 14px 24px; border-radius: 999px; font-size: 15px; border: 1px solid rgba(255,255,255,.25); display: inline-flex; align-items: center; gap: 10px; transition: all .25s ease; }
        .hp-cta-btn-ghost:hover { background: rgba(255,255,255,.08); border-color: rgba(255,255,255,.4); }
        .hp-big-wordmark { display: flex; justify-content: center; align-items: center; margin-top: 80px; user-select: none; opacity: .18; }
        .hp-big-tagline { font-family: var(--font-instrument), serif; font-style: italic; font-size: clamp(22px,2.4vw,36px); color: rgba(255,255,255,.55); text-align: center; margin-top: -20px; letter-spacing: -.01em; }
      `}</style>
    </>
  );
}
