"use client";
import { useEffect } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

/* ─── data ─── */
const clients = [
  { name: "KeeTa",            logo: "/logos/keeta.webp" },
  { name: "Careem",           logo: "/logos/careem.png" },
  { name: "noon",             logo: "/logos/noon.jpg" },
  { name: "W Pharmacy",       logo: "/logos/w-pharmacy.jpg" },
  { name: "Amazon",           logo: "/logos/amazon.webp" },
  { name: "Papa Johns",       logo: "/logos/papa-johns.jpg" },
  { name: "Temu",             logo: "/logos/temu.png" },
  { name: "iMile",            logo: "/logos/imile.png" },
  { name: "Diet Delights",    logo: "/logos/diet-delights.png" },
  { name: "Rare Group",       logo: "/logos/rare-group.webp" },
  { name: "LuLu Hypermarket", logo: "/logos/lulu-hypermarket.png" },
  { name: "Carrefour",        logo: "/logos/carrefour.webp" },
  { name: "Pizza Hut",        logo: "/logos/pizza-hut.png" },
  { name: "McDonald's",       logo: "/logos/mcdonald-s.png" },
  { name: "Ninja",            logo: "/logos/ninja.png" },
];

const signals = [
  { num: "600", unit: "+",      label: "Riders in Qatar" },
  { num: "98",  unit: ".4%",   label: "SLA Adherence" },
  { num: "9",   unit: " hubs", label: "Across Qatar & UAE" },
  { num: "2",   unit: " mkts", label: "QA · UAE" },
];

const routeCaps = [
  { n: "1", title: "Stacking Logic",     desc: "We bundle multiple deliveries onto a single route to drive down cost per drop without breaking SLA." },
  { n: "2", title: "Live Re-Routing",    desc: "Routes adjust continuously as traffic, breakdowns and new orders enter the network." },
  { n: "3", title: "Local Intelligence", desc: "Routes built around prayer times, gated compounds, school zones and Ramadan timings." },
  { n: "4", title: "Demand Planning",    desc: "We anticipate volume by daypart and location, pre-positioning vehicles before peak windows." },
];

const layers = [
  {
    grad: "linear-gradient(180deg,#0F1A3D,#1F1E9C)",
    num: "01", tag: "SOFTWARE",
    title: "Logistics Delivery Management Software",
    desc: "License the Ajil platform: TMS, WMS, dispatch, driver and rider apps, customer tracking and a unified control tower. Run with your own fleet, your own warehouses, your own people. Multi-tenant, white-label and API-first.",
    chips: ["TMS", "WMS", "Dispatch", "Driver App", "Control Tower"],
    cta: "License The Platform →", href: "/services",
  },
  {
    grad: "linear-gradient(180deg,#1F1E9C,#2D2BE0)",
    num: "02", tag: "ON-DEMAND",
    title: "On-Demand Logistics",
    desc: "Tap into Ajil's existing rider, vehicle and warehouse network on a pay-per-delivery basis. Flex up during peaks, scale down on quiet days. A ready-made network across the GCC, available the day you onboard.",
    chips: ["Pay Per Delivery", "Same-Day", "Scheduled", "Surge Capacity", "Software Included"],
    cta: "Use On-Demand →", href: "/services",
  },
  {
    grad: "linear-gradient(180deg,#2D2BE0,#5A4BFF)",
    num: "03", tag: "DEDICATED",
    title: "Dedicated Logistics",
    desc: "Capacity that operates exclusively for your business: branded riders, ringfenced fleet, dedicated warehouse footprint, dark store hubs in your target catchments. The same operating platform, but the operation wears your colours.",
    chips: ["Branded Fleet", "Dedicated Warehouse", "Dark Stores", "SLA-Bound", "Custom KPIs"],
    cta: "Build Dedicated →", href: "/services/dedicated",
  },
  {
    grad: "linear-gradient(180deg,#5A4BFF,#8775FF)",
    num: "04", tag: "MANAGED",
    title: "Fully Managed Operations",
    desc: "We take ownership of your entire logistics function. Network design, hiring, warehouse leasing, dark store operations, fleet management, and a single accountable leadership team reporting against the KPIs you set.",
    chips: ["End-To-End", "Outsourced", "Single Contract", "Custom SLAs", "Quarterly Reviews"],
    cta: "Outsource To Ajil →", href: "/services",
  },
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
  { industry: "Grocery",          q: `We replaced three logistics vendors with a single Ajil contract: software, network and a dedicated dark-store layer. Cost per drop fell 27% and our COO finally has <em>one number to look at</em>.`,          initials: "FA", name: "Fatima Al Sayed",  role: "VP Operations · Regional Grocery Group",      metric: "27%", metricLabel: "cost reduction" },
  { industry: "Quick Commerce",   q: `Ajil's stacking logic took our cost-per-drop down by 31% in the first quarter. The dispatch team flagged exceptions before our own ops noticed them. <em>It just runs</em>.`,                            initials: "RM", name: "Rashid Mansoori", role: "Head Of Logistics · Quick Commerce Platform",  metric: "31%", metricLabel: "fewer failed deliveries" },
  { industry: "QSR",              q: `Branded riders, our packaging, our SLA. The customer never knows it's outsourced. They just know <em>their food is on time</em>. Ajil handled the full operational setup from day one.`,       initials: "SK", name: "Sara Khoury",      role: "COO · Multi-Brand Restaurant Group",          metric: "47", metricLabel: "outlets covered" },
  { industry: "Retail",           q: `We needed scheduled, branded last-mile across three GCC markets. Ajil delivered the software, the riders and the warehouse footprint. <em>One partner, one contract, one team to call</em>.`,           initials: "YH", name: "Yousef Habib",    role: "Head Of E-Commerce · Fashion Retailer",       metric: "3", metricLabel: "markets, one contract" },
  { industry: "B2B Distribution", q: `Route optimization that actually understands GCC roads: prayer windows, gated compounds, the lot. Our drivers complete 23% more drops per shift and they're <em>happier doing it</em>.`,               initials: "AB", name: "Abdullah Bilal",   role: "Logistics Manager · F&B Distributor",         metric: "23%", metricLabel: "more drops per shift" },
];

const whyCards = [
  { n: "i.",   title: "Built For The GCC",    desc: "Our dispatch operation was built on this region's roads, traffic patterns, prayer times and gated compounds. Not retrofitted from a European model." },
  { n: "ii.",  title: "One Partner, All Four", desc: "License software, use the network, build dedicated capacity, or outsource the function entirely. Without changing partners as you grow." },
  { n: "iii.", title: "Operator DNA",          desc: "We run logistics ourselves before we sell it. Every capability is shaped by a live operations team, not a roadmap committee." },
];

const gccMarkets = [
  { code: "QA", name: "Qatar", hubs: 4, cities: "Doha · Lusail · Al Wakra",     note: "Headquarters & primary operations hub" },
  { code: "UAE", name: "UAE",  hubs: 5, cities: "Dubai · Abu Dhabi · Sharjah",  note: "Largest fleet network in the group" },
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
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Nav />

      {/* ══════════════════════════════════════════
          SECTION 1 · HERO
      ══════════════════════════════════════════ */}
      <header className="hp-hero">

        {/* Center content */}
        <div className="hp-hero-inner">
          <div className="hp-hero-eyebrow">
            Last-mile &amp; distribution infrastructure &mdash; Qatar &amp; UAE
          </div>
          <h1 className="hp-hero-h">
            <span style={{ whiteSpace: 'nowrap' }}>Logistics operations,</span><br />
            <span className="hp-hero-accent">built for the GCC.</span>
          </h1>
          <p className="hp-hero-sub">
            Ajil delivers the dispatch intelligence, operating software, and physical
            infrastructure that moves modern commerce across Qatar and UAE.
          </p>
          <div className="hp-hero-actions">
            <a href="#cta" className="hp-btn-hero">
              Talk to a logistics architect
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </a>
            <a href="/dispatch" className="hp-btn-hero2">
              See how dispatch works
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>

        {/* Stats bar */}
        <div className="hp-hero-stats">
          {signals.map((s) => (
            <div className="hp-stat-item" key={s.label}>
              <div className="hp-stat-num">{s.num}<span className="hp-stat-unit">{s.unit}</span></div>
              <div className="hp-stat-lbl">{s.label}</div>
            </div>
          ))}
        </div>

      </header>

      {/* ══════════════════════════════════════════
          SECTION 2 · TRUST BAR
      ══════════════════════════════════════════ */}
      <section className="hp-clients">
        <div className="hp-container">
          <p className="hp-clients-label">60+ brands trust Ajil to run their last-mile operations</p>
        </div>
        <div className="hp-marquee">
          <div className="hp-marquee-track">
            {[...clients, ...clients].map((client, i) => (
              <div className="hp-logo-card" key={i}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={client.logo} alt={`${client.name} — Ajil Logistics Services client`} className="hp-logo-img" loading="lazy" decoding="async" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 3 · WHAT WE DO
      ══════════════════════════════════════════ */}
      <section className="hp-what" id="what-we-do">
        <div className="hp-container">
          <div className="hp-section-head reveal">
            <div>
              <span className="hp-section-tag">What We Do</span>
              <h2 className="hp-section-title">Three Ways Ajil<br /><em>Runs Your Logistics</em><span style={{color:'#2D2BE0'}}>.</span></h2>
            </div>
            <p className="hp-section-desc">
              Whether you need software to run your own operation, a network to plug into, or a
              partner to take over entirely. Ajil covers all three. One company, every model.
            </p>
          </div>
          <div className="hp-what-grid reveal">
            {[
              {
                tag: "The Platform",
                title: "License Our Software",
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>,
                desc: "TMS, WMS, dispatch, driver and rider apps, customer tracking and a unified control tower. Run with your own fleet, warehouses and people.",
                points: ["Multi-tenant & white-label", "API-first, connects to any stack", "Full visibility across every order"],
                cta: "Learn about software →",
                href: "/services",
              },
              {
                tag: "The Network",
                title: "Tap Our Existing Infrastructure",
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/></svg>,
                desc: "Tap our existing riders, vehicles and warehouses across Qatar and UAE on a pay-per-delivery basis. Software included. No upfront investment.",
                points: ["Pay-per-delivery, no minimum", "Flex up during peak, scale down after", "Operational from day one"],
                cta: "Access the network →",
                href: "/services",
              },
              {
                tag: "The Operations",
                title: "Hand Us the Whole Function",
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 21V8l9-5 9 5v13"/><path d="M9 21V12h6v9"/></svg>,
                desc: "We design the network, hire the team, lease the warehouses and operate your logistics end-to-end. One contract, one accountability, one number to call.",
                points: ["Network design & hub placement", "Named GM, 24/7 control room", "Single SLA, quarterly reviews"],
                cta: "Explore managed ops →",
                href: "/services",
              },
            ].map((card) => (
              <div className="hp-what-card" key={card.tag}>
                <div className="hp-what-icon">{card.icon}</div>
                <span className="hp-what-tag">{card.tag}</span>
                <h3 className="hp-what-h">{card.title}</h3>
                <p className="hp-what-desc">{card.desc}</p>
                <ul className="hp-what-points">
                  {card.points.map((pt) => (
                    <li key={pt}>
                      <span className="hp-what-dot" />
                      {pt}
                    </li>
                  ))}
                </ul>
                <a href={card.href} className="hp-what-cta">{card.cta}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 4 · HOW IT WORKS
      ══════════════════════════════════════════ */}
      <section className="hp-hiw" id="how-it-works">
        <div className="hp-container">
          <div className="hp-section-head reveal" style={{ gridTemplateColumns: "1fr", textAlign: "center" }}>
            <div style={{ margin: "0 auto" }}>
              <span className="hp-section-tag" style={{ justifyContent: "center", display: "inline-flex" }}>Process</span>
              <h2 className="hp-section-title" style={{ margin: "18px auto 0", textAlign: "center", maxWidth: "22ch" }}>How We Get Your <em>Operation Running</em><span style={{color:'#2D2BE0'}}>.</span></h2>
            </div>
          </div>
          <div className="hp-hiw-steps reveal">
            {[
              { n: "01", title: "Consult",  desc: "An initial session with a logistics architect. We assess your volumes, geographies, and SLA requirements." },
              { n: "02", title: "Design",   desc: "We model your operation: network layout, hub placement, fleet mix, SLA targets and unit economics." },
              { n: "03", title: "Deploy",   desc: "Drivers hired and trained. Software configured. Warehouses operational. We manage the full launch." },
              { n: "04", title: "Operate",  desc: "24/7 control room. Live re-routing. Monthly performance reviews. One team accountable end-to-end." },
            ].map((step, i) => (
              <div className="hp-hiw-step" key={step.n}>
                <h4 className="hp-hiw-title">{step.title}</h4>
                <p className="hp-hiw-desc">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="hp-hiw-cta reveal">
            <a href="/contact" className="hp-btn-primary">
              Talk to our team
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 5 · SERVICE MODELS
      ══════════════════════════════════════════ */}
      <section className="hp-models" id="services">
        <div className="hp-container">
          <div className="hp-section-head reveal">
            <div>
              <span className="hp-section-tag">Service Models</span>
              <h2 className="hp-section-title">Four Ways To <em>Partner With Us</em><span style={{color:'#2D2BE0'}}>.</span></h2>
            </div>
            <p className="hp-section-desc">
              Every business runs logistics differently. Pick the model that fits where you are
              today, and scale the partnership as your operation matures. One contract spans all four.
            </p>
          </div>
          <div className="hp-models-grid reveal">
            {layers.map((layer) => (
              <a href={layer.href} key={layer.num} className="hp-model-card" style={{ "--hp-gradient": layer.grad } as React.CSSProperties}>
                <div className="hp-model-header">
                  <span className="hp-model-tag">{layer.tag}</span>
                </div>
                <h3 className="hp-model-title">{layer.title}</h3>
                <p className="hp-model-desc">{layer.desc}</p>
                <div className="hp-model-chips">
                  {layer.chips.map((c) => <span key={c}>{c}</span>)}
                </div>
                <span className="hp-model-cta">{layer.cta}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 6 · DISPATCH & OPERATIONS
      ══════════════════════════════════════════ */}
      <section className="hp-routing" id="dispatch">
        <div className="hp-container">
          <div className="hp-route-hero reveal">
            {/* Text */}
            <div className="hp-route-text">
              <span className="hp-section-tag">How Our Operations Work</span>
              <h3 className="hp-route-h">
                Fewer Drops Per Route.<br /><em>Lower Cost Per Delivery</em><span style={{color:'#2D2BE0'}}>.</span>
              </h3>
              <p className="hp-route-p">
                Our dispatch teams plan, monitor and intervene across thousands of routes every day,
                driven by route optimization and stacking logic built specifically for the GCC.
                Every plan balances cost per drop, on-time delivery, vehicle utilization and driver
                workload, at network scale.
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
                <circle className="hp-route-pt"  cx="420" cy="110" r="6" />
                <circle className="hp-route-pt2" cx="180" cy="200" r="6" />
                <circle className="hp-route-pt"  cx="480" cy="320" r="6" />
                <circle className="hp-route-pt2" cx="230" cy="290" r="6" />
                <circle className="hp-route-pt"  cx="380" cy="420" r="6" />
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
                  { lbl: "Cost / Drop",   val: "−34%",   up: true },
                  { lbl: "Time Saved",    val: "−28%",   up: true },
                  { lbl: "Stops Stacked", val: "6 / 6",  up: false },
                  { lbl: "SLA Risk",      val: "Low",    up: true },
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

          {/* Capability cards */}
          <div className="hp-route-caps reveal">
            {routeCaps.map((cap) => (
              <div className="hp-route-cap" key={cap.n}>
                <h4 className="hp-cap-h">{cap.title}</h4>
                <p className="hp-cap-p">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 7 · GCC COVERAGE
      ══════════════════════════════════════════ */}
      <section className="hp-coverage" id="coverage">
        <div className="hp-container">
          <div className="hp-section-head reveal">
            <div>
              <span className="hp-section-tag">Our Coverage</span>
              <h2 className="hp-section-title">Operating Across<br /><em>The GCC</em><span style={{color:'#2D2BE0'}}>.</span></h2>
            </div>
            <p className="hp-section-desc">
              Established infrastructure across Qatar and UAE with local operations teams, owned hubs
              and active fleet. Not a partner network. Our own people, on the ground.
            </p>
          </div>
          <div className="hp-coverage-grid reveal">
            {gccMarkets.map((m) => (
              <div className="hp-coverage-card" key={m.code}>
                <div className="hp-coverage-top">
                  <span className="hp-coverage-code">{m.code}</span>
                  <span className="hp-coverage-hubs">{m.hubs} {m.hubs === 1 ? "hub" : "hubs"}</span>
                </div>
                <h4 className="hp-coverage-name">{m.name}</h4>
                <p className="hp-coverage-cities">{m.cities}</p>
                <p className="hp-coverage-note">{m.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 8 · SOCIAL PROOF
      ══════════════════════════════════════════ */}
      <section className="hp-proof" id="testimonials">
        <div className="hp-container">
          <div className="hp-section-head reveal">
            <div>
              <span className="hp-section-tag">Results</span>
              <h2 className="hp-section-title">What Our <em>Customers Say</em><span style={{color:'#2D2BE0'}}>.</span></h2>
            </div>
            <p className="hp-section-desc">
              From quick commerce to QSR to enterprise retail. Operators across the GCC are running
              their logistics on Ajil and finding measurable results fast.
            </p>
          </div>

          {/* Featured metrics bar */}
          <div className="hp-proof-metrics reveal">
            {[
              { val: "27%",    label: "Average cost reduction" },
              { val: "31%",    label: "Fewer failed deliveries" },
              { val: "4",       label: "Markets active" },
              { val: "23%",    label: "More drops per shift" },
            ].map((m) => (
              <div className="hp-proof-metric" key={m.label}>
                <div className="hp-proof-mval">{m.val}</div>
                <div className="hp-proof-mlbl">{m.label}</div>
              </div>
            ))}
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

      {/* ══════════════════════════════════════════
          SECTION 9 · WHY AJIL + INDUSTRIES
      ══════════════════════════════════════════ */}
      <section className="hp-why-industries" id="why">
        <div className="hp-container">
          <div className="hp-wi-grid reveal">

            {/* Left: Why Ajil */}
            <div className="hp-wi-left">
              <span className="hp-section-tag">Why Operators Switch</span>
              <h2 className="hp-wi-h">Three reasons operators<br />consolidate to <em>Ajil</em><span style={{color:'#2D2BE0'}}>.</span></h2>
              <div className="hp-why-cards">
                {whyCards.map((card) => (
                  <div className="hp-why-card" key={card.n}>
                    <h4 className="hp-why-h4">{card.title}</h4>
                    <p className="hp-why-p">{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Industries */}
            <div className="hp-wi-right">
              <span className="hp-section-tag">Industries We Serve</span>
              <h2 className="hp-wi-h">Tuned for every<br />category that <em>moves</em><span style={{color:'#2D2BE0'}}>.</span></h2>
              <div className="hp-ind-strip">
                {industries.map((ind) => (
                  <div className="hp-ind-chip" key={ind.label}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">{ind.svgPath}</svg>
                    {ind.label}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 10 · DUAL CTA
      ══════════════════════════════════════════ */}

      {/* Block A — B2B (primary) */}
      <section className="hp-cta" id="cta">
        <div className="hp-container hp-cta-inner reveal">
          <h2 className="hp-cta-h">Ready to redesign<br /><em>your logistics?</em></h2>
          <p className="hp-cta-p">
            Speak with a logistics architect. Bring your real numbers and we&apos;ll show you
            which service model fits, where the savings come from, and how the operation would look
            in practice.
          </p>
          <div className="hp-cta-proof">
            {["No lock-in", "Rapid deployment", "Live 24/7 support", "GCC-native operation", "SLA-backed"].map((pt) => (
              <span key={pt} className="hp-cta-proof-pt">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                {pt}
              </span>
            ))}
          </div>
          <div className="hp-cta-actions">
            <a href="/contact" className="hp-cta-btn-primary">
              Get in touch
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
            </a>
            <a href="/contact" className="hp-cta-btn-ghost">Talk to our team →</a>
          </div>
          <div className="hp-big-wordmark">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/ajil-logo-transparent2.png" alt="Ajil" className="hp-cta-logo" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/ajil-logo-transparent3.png" alt="Efficiency in Motion" className="hp-cta-tagline-img" />
          </div>
        </div>
      </section>

      {/* Block B — Driver Recruiting (secondary) */}
      <section className="hp-drivers" id="join">
        <div className="hp-container">
          <div className="hp-drivers-inner reveal">
            <div className="hp-drivers-text">
              <span className="hp-section-tag">Join the Ajil Fleet</span>
              <h3 className="hp-drivers-h">Drive with Ajil. <em>Earn every day</em><span style={{color:'#2D2BE0'}}>.</span></h3>
              <p className="hp-drivers-desc">We&apos;re growing our rider and driver network across the GCC. Daily routes, weekly payouts, performance bonuses.</p>
            </div>
            <div className="hp-drivers-actions">
              <a href="https://wa.me/97441404004" className="hp-drivers-btn hp-btn-wa">
                <WaSvg />
                <span><small>WhatsApp Us</small><strong>Start Your Application</strong></span>
              </a>
              <a href="/driver-application" className="hp-drivers-link">Driver application form →</a>
            </div>
            <p className="hp-drivers-foot">Now Hiring · Doha · Dubai</p>
          </div>
        </div>
      </section>

      <Footer />

      {/* ════════════════════════════════════════════════════
          STYLES
      ════════════════════════════════════════════════════ */}
      <style>{`
        /* ── Container ── */
        .hp-container { max-width: 1440px; margin: 0 auto; padding: 0 clamp(24px, 6vw, 88px); }
        @media (max-width: 760px) { .hp-container { padding: 0 20px; } }

        /* ── Section framework ── */
        .hp-section-head { display: grid; grid-template-columns: auto 1fr; gap: 48px; margin-bottom: 72px; align-items: end; }
        @media (max-width: 780px) { .hp-section-head { grid-template-columns: 1fr; gap: 24px; margin-bottom: 48px; } }
        .hp-section-tag { font-size: 14px; font-family: var(--font-instrument), serif; font-style: italic; font-weight: 400; color: rgba(27,26,104,.5); letter-spacing: .01em; text-transform: none; }
        .hp-section-title { font-size: clamp(32px, 4.5vw, 60px); line-height: 1.06; letter-spacing: -.03em; font-weight: 700; margin-top: 16px; max-width: 20ch; color: #1B1A68; }
        .hp-section-title em { font-family: var(--font-instrument), serif; font-style: italic; font-weight: 400; color: #2D2BE0; }
        .hp-section-desc { font-size: 16px; color: rgba(27,26,104,.55); max-width: 48ch; line-height: 1.65; }

        /* ── Reveal ── */
        .reveal { opacity: 0; transform: translateY(20px); transition: opacity .55s ease, transform .55s ease; }
        .reveal.in { opacity: 1; transform: none; }

        /* ── Shared buttons ── */
        .hp-btn-primary { background: #1B1A68; color: #fff; font-weight: 600; padding: 12px 22px; border-radius: 8px; font-size: 14px; display: inline-flex; align-items: center; gap: 8px; transition: background .15s ease; white-space: nowrap; }
        .hp-btn-primary:hover { background: #2D2BE0; }
        .hp-btn-ghost { background: transparent; color: #1B1A68; font-weight: 500; padding: 12px 22px; border-radius: 8px; font-size: 14px; border: 1px solid rgba(27,26,104,.2); display: inline-flex; align-items: center; gap: 8px; transition: background .15s ease, border-color .15s ease; white-space: nowrap; }
        .hp-btn-ghost:hover { background: rgba(27,26,104,.04); border-color: rgba(27,26,104,.35); }

        /* ── HERO ── */
        .hp-hero { background: radial-gradient(ellipse 80% 60% at 50% -10%, rgba(45,43,224,.055) 0%, transparent 70%), linear-gradient(180deg, #fafbff 0%, #fff 100%); display: flex; flex-direction: column; border-bottom: 1px solid rgba(27,26,104,.1); }
        .hp-hero-inner { flex: 1; display: flex; flex-direction: column; align-items: center; text-align: center; padding: 140px clamp(24px, 6vw, 120px) 80px; max-width: 900px; margin: 0 auto; width: 100%; }
        .hp-hero-eyebrow { display: inline-flex; align-items: center; font-family: var(--font-jetbrains), monospace; font-size: 11px; font-weight: 500; letter-spacing: .14em; color: rgba(27,26,104,.42); margin-bottom: 28px; text-transform: uppercase; animation: fadeUp .5s both; }
        .hp-hero-h { font-size: clamp(42px, 5.5vw, 80px); line-height: 1.08; letter-spacing: -.03em; font-weight: 700; color: #1B1A68; margin: 0 0 28px; animation: fadeUp .6s .08s both; }
        .hp-hero-accent { color: #2D2BE0; font-family: var(--font-instrument), serif; font-style: italic; font-weight: 400; }
        .hp-hero-sub { font-size: clamp(15px, 1.3vw, 18px); color: rgba(27,26,104,.55); max-width: 52ch; line-height: 1.7; font-weight: 400; margin-bottom: 44px; animation: fadeUp .6s .16s both; }
        .hp-hero-actions { display: flex; gap: 14px; flex-wrap: wrap; justify-content: center; animation: fadeUp .6s .24s both; }
        .hp-btn-hero { background: #1B1A68; color: #fff; font-weight: 600; padding: 13px 26px; border-radius: 8px; font-size: 15px; display: inline-flex; align-items: center; gap: 8px; transition: background .15s ease; white-space: nowrap; }
        .hp-btn-hero:hover { background: #2D2BE0; }
        .hp-btn-hero2 { background: transparent; color: #1B1A68; font-weight: 500; padding: 13px 26px; border-radius: 8px; font-size: 15px; border: 1px solid rgba(27,26,104,.2); display: inline-flex; align-items: center; gap: 8px; transition: background .15s ease, border-color .15s ease; white-space: nowrap; }
        .hp-btn-hero2:hover { background: rgba(27,26,104,.04); border-color: rgba(27,26,104,.35); }
        .hp-hero-stats { display: grid; grid-template-columns: repeat(4, 1fr); border-top: 1px solid rgba(27,26,104,.1); }
        .hp-stat-item { display: flex; flex-direction: column; justify-content: center; padding: 32px 40px; border-right: 1px solid rgba(27,26,104,.1); animation: fadeUp .6s .32s both; }
        .hp-stat-item:last-child { border-right: none; }
        .hp-stat-num { font-size: clamp(30px, 3.2vw, 44px); font-weight: 700; color: #1B1A68; line-height: 1; letter-spacing: -.025em; }
        .hp-stat-unit { font-size: .5em; font-weight: 500; opacity: .5; }
        .hp-stat-lbl { font-size: 11px; color: rgba(27,26,104,.4); margin-top: 8px; letter-spacing: .08em; font-weight: 500; text-transform: uppercase; }
        @media (max-width: 860px) {
          .hp-hero-inner { padding-top: 110px; padding-bottom: 60px; }
          .hp-hero-stats { grid-template-columns: repeat(2, 1fr); }
          .hp-stat-item:nth-child(2) { border-right: none; }
          .hp-stat-item:nth-child(3) { border-top: 1px solid rgba(27,26,104,.1); }
          .hp-stat-item:nth-child(4) { border-top: 1px solid rgba(27,26,104,.1); border-right: none; }
        }
        @media (max-width: 520px) { .hp-hero-inner { padding-top: 90px; padding-bottom: 48px; } .hp-stat-item { padding: 24px 20px; } }

        /* ── TRUST BAR ── */
        .hp-clients { padding: 60px 0 72px; background: #fff; border-top: 1px solid rgba(27,26,104,.08); border-bottom: 1px solid rgba(27,26,104,.08); }
        .hp-clients-label { text-align: center; font-size: 11px; color: rgba(27,26,104,.38); text-transform: uppercase; letter-spacing: .16em; margin-bottom: 40px; font-weight: 500; }
        .hp-marquee { position: relative; width: 100%; overflow: hidden; -webkit-mask-image: linear-gradient(90deg, transparent 0, #000 8%, #000 92%, transparent 100%); mask-image: linear-gradient(90deg, transparent 0, #000 8%, #000 92%, transparent 100%); }
        .hp-marquee-track { display: flex; gap: 20px; width: max-content; animation: marquee 60s linear infinite; will-change: transform; }
        .hp-marquee:hover .hp-marquee-track { animation-play-state: paused; }
        .hp-logo-card { flex-shrink: 0; width: 180px; height: 96px; border-radius: 10px; background: #fff; border: 1px solid rgba(27,26,104,.1); display: flex; align-items: center; justify-content: center; padding: 20px 24px; transition: border-color .2s ease; }
        .hp-logo-card:hover { border-color: rgba(27,26,104,.22); }
        .hp-logo-img { max-height: 40px; max-width: 130px; width: auto; object-fit: contain; opacity: .75; transition: opacity .2s ease; }
        .hp-logo-card:hover .hp-logo-img { opacity: 1; }

        /* ── WHAT WE DO ── */
        .hp-what { background: #FAFBFD; border-top: 1px solid rgba(27,26,104,.08); padding: 100px 0; }
        .hp-what-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: rgba(27,26,104,.08); border: 1px solid rgba(27,26,104,.08); border-radius: 12px; overflow: hidden; }
        @media (max-width: 900px) { .hp-what-grid { grid-template-columns: 1fr; } }
        .hp-what-card { background: #fff; padding: 36px 32px; display: flex; flex-direction: column; transition: background .2s ease; }
        .hp-what-card:hover { background: #FAFBFD; }
        .hp-what-icon { color: #1B1A68; margin-bottom: 20px; opacity: .7; }
        .hp-what-tag { font-size: 14px; font-family: var(--font-instrument), serif; font-style: italic; font-weight: 400; color: rgba(27,26,104,.45); text-transform: none; letter-spacing: .01em; margin-bottom: 10px; }
        .hp-what-h { font-size: clamp(18px, 1.6vw, 22px); font-weight: 600; letter-spacing: -.02em; color: #1B1A68; margin-bottom: 12px; line-height: 1.25; }
        .hp-what-desc { font-size: 14px; color: rgba(27,26,104,.55); line-height: 1.65; margin-bottom: 20px; }
        .hp-what-points { list-style: none; padding: 0; margin: 0 0 28px; display: flex; flex-direction: column; gap: 8px; flex: 1; }
        .hp-what-points li { display: flex; align-items: flex-start; gap: 10px; font-size: 13px; color: rgba(27,26,104,.55); line-height: 1.5; }
        .hp-what-dot { width: 4px; height: 4px; border-radius: 50%; background: #2D2BE0; flex-shrink: 0; margin-top: 7px; }
        .hp-what-cta { font-size: 16px; color: #2D2BE0; font-weight: 400; font-family: var(--font-instrument), serif; font-style: italic; margin-top: auto; transition: color .15s ease; }
        .hp-what-card:hover .hp-what-cta { color: #1B1A68; }

        /* ── HOW IT WORKS ── */
        .hp-hiw { background: #fff; border-top: 1px solid rgba(27,26,104,.08); padding: 100px 0; }
        .hp-hiw-steps { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; margin-bottom: 48px; border: 1px solid rgba(27,26,104,.08); border-radius: 12px; overflow: hidden; }
        @media (max-width: 860px) { .hp-hiw-steps { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 500px) { .hp-hiw-steps { grid-template-columns: 1fr; } }
        .hp-hiw-step { padding: 32px 28px; position: relative; border-right: 1px solid rgba(27,26,104,.08); }
        .hp-hiw-step:last-child { border-right: none; }
        @media (max-width: 860px) { .hp-hiw-step:nth-child(2) { border-right: none; } .hp-hiw-step:nth-child(3) { border-top: 1px solid rgba(27,26,104,.08); } .hp-hiw-step:nth-child(4) { border-top: 1px solid rgba(27,26,104,.08); border-right: none; } }
        .hp-hiw-num { font-size: 11px; font-weight: 600; color: rgba(27,26,104,.3); letter-spacing: .1em; margin-bottom: 20px; }
        .hp-hiw-line { display: none; }
        .hp-hiw-title { font-size: 16px; font-weight: 600; color: #1B1A68; letter-spacing: -.01em; margin-bottom: 10px; }
        .hp-hiw-desc { font-size: 14px; color: rgba(27,26,104,.55); line-height: 1.65; }
        .hp-hiw-cta { text-align: center; }

        /* ── SERVICE MODELS ── */
        .hp-models { background: #FAFBFD; border-top: 1px solid rgba(27,26,104,.08); padding: 100px 0; }
        .hp-models-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        @media (max-width: 860px) { .hp-models-grid { grid-template-columns: 1fr; } }
        .hp-model-card { position: relative; padding: 32px; border: 1px solid rgba(27,26,104,.1); border-radius: 10px; background: #fff; transition: border-color .2s ease; display: flex; flex-direction: column; text-decoration: none; color: inherit; }
        .hp-model-card:hover { border-color: rgba(45,43,224,.28); }
        .hp-model-header { display: flex; align-items: center; gap: 12px; margin-bottom: 18px; }
        .hp-model-num { font-size: 16px; font-family: var(--font-instrument), serif; font-style: italic; font-weight: 400; color: rgba(27,26,104,.35); letter-spacing: .02em; }
        .hp-model-tag { font-size: 14px; font-family: var(--font-instrument), serif; font-style: italic; font-weight: 400; color: rgba(27,26,104,.45); letter-spacing: .01em; text-transform: none; }
        .hp-model-title { font-size: clamp(17px, 1.5vw, 20px); font-weight: 600; letter-spacing: -.02em; color: #1B1A68; margin-bottom: 10px; }
        .hp-model-desc { font-size: 14px; color: rgba(27,26,104,.55); line-height: 1.65; margin-bottom: 18px; flex: 1; }
        .hp-model-chips { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 20px; }
        .hp-model-chips span { font-size: 11px; padding: 3px 10px; border-radius: 4px; background: rgba(27,26,104,.05); border: 1px solid rgba(27,26,104,.1); color: rgba(27,26,104,.5); letter-spacing: .04em; }
        .hp-model-cta { font-size: 16px; color: #2D2BE0; font-weight: 400; font-family: var(--font-instrument), serif; font-style: italic; margin-top: auto; transition: color .15s ease; }
        .hp-model-card:hover .hp-model-cta { color: #1B1A68; }

        /* ── DISPATCH & OPERATIONS ── */
        .hp-routing { background: #fff; border-top: 1px solid rgba(27,26,104,.08); padding: 100px 0; }
        .hp-route-hero { display: grid; grid-template-columns: 1fr 1.3fr; gap: 72px; align-items: center; }
        @media (max-width: 980px) { .hp-route-hero { grid-template-columns: 1fr; gap: 40px; } }
        .hp-route-h { font-size: clamp(28px, 3.5vw, 52px); line-height: 1.08; letter-spacing: -.03em; font-weight: 700; margin: 16px 0 20px; color: #1B1A68; }
        .hp-route-h em { font-family: var(--font-instrument), serif; font-style: italic; font-weight: 400; color: #2D2BE0; }
        .hp-route-p { font-size: 16px; color: rgba(27,26,104,.55); line-height: 1.65; margin-bottom: 28px; max-width: 46ch; }
        .hp-route-pills { display: flex; flex-wrap: wrap; gap: 8px; }
        .hp-route-pill { display: inline-flex; align-items: center; gap: 6px; padding: 6px 12px; border-radius: 4px; background: #FAFBFD; border: 1px solid rgba(27,26,104,.12); font-size: 12px; color: rgba(27,26,104,.65); }
        .hp-pdot { width: 5px; height: 5px; border-radius: 50%; background: #2D2BE0; display: inline-block; flex-shrink: 0; }
        .hp-route-canvas { position: relative; border: 1px solid rgba(27,26,104,.1); border-radius: 12px; background: #FAFBFD; padding: 28px; overflow: hidden; aspect-ratio: 1.2/1; }
        .hp-route-canvas-bg { display: none; }
        .hp-route-svg { position: absolute; inset: 0; width: 100%; height: 100%; }
        .hp-route-old { stroke: rgba(194,52,42,.4); stroke-width: 1.4; fill: none; stroke-dasharray: 3 4; }
        .hp-route-new { stroke: #2D2BE0; stroke-width: 2; fill: none; stroke-dasharray: 8 4; animation: hp-dashflow 3s linear infinite; }
        @keyframes hp-dashflow { to { stroke-dashoffset: -50; } }
        .hp-route-pt  { fill: #2D2BE0; }
        .hp-route-pt2 { fill: #1B1A68; }
        .hp-route-hub { fill: #0E9D6E; }
        .hp-ai-badge { position: absolute; top: 16px; left: 16px; padding: 7px 12px; border-radius: 6px; background: #fff; border: 1px solid rgba(27,26,104,.12); font-size: 11px; color: rgba(27,26,104,.7); display: flex; align-items: center; gap: 8px; letter-spacing: .04em; text-transform: uppercase; }
        .hp-ai-dot { width: 6px; height: 6px; border-radius: 50%; background: #0E9D6E; display: inline-block; flex-shrink: 0; }
        .hp-route-legend { position: absolute; top: 16px; right: 16px; padding: 10px 12px; border-radius: 6px; background: #fff; border: 1px solid rgba(27,26,104,.12); display: flex; flex-direction: column; gap: 6px; font-size: 10px; }
        .hp-legend-item { display: flex; align-items: center; gap: 6px; color: rgba(27,26,104,.5); }
        .hp-legend-line { width: 16px; height: 2px; border-radius: 1px; display: inline-block; }
        .hp-leg-old { background: rgba(194,52,42,.5); }
        .hp-leg-new { background: #2D2BE0; }
        .hp-legend-dot { width: 7px; height: 7px; border-radius: 50%; display: inline-block; }
        .hp-leg-hub { background: #0E9D6E; }
        .hp-decision-panel { position: absolute; bottom: 16px; right: 16px; width: 220px; padding: 14px; border-radius: 8px; background: #fff; border: 1px solid rgba(27,26,104,.12); }
        .hp-decision-row { display: flex; justify-content: space-between; font-size: 11px; padding: 5px 0; border-bottom: 1px solid rgba(27,26,104,.06); }
        .hp-decision-row:last-child { border-bottom: none; }
        .hp-dlbl { color: rgba(27,26,104,.45); text-transform: uppercase; letter-spacing: .05em; }
        .hp-dval { color: #1B1A68; font-weight: 600; }
        .hp-dup { color: #0E9D6E; }
        .hp-route-caps { display: grid; grid-template-columns: repeat(4,1fr); gap: 1px; margin-top: 64px; background: rgba(27,26,104,.08); border: 1px solid rgba(27,26,104,.08); border-radius: 10px; overflow: hidden; }
        @media (max-width: 1000px) { .hp-route-caps { grid-template-columns: repeat(2,1fr); } }
        @media (max-width: 560px)  { .hp-route-caps { grid-template-columns: 1fr; } }
        .hp-route-cap { background: #fff; padding: 28px 24px; transition: background .2s ease; }
        .hp-route-cap:hover { background: #FAFBFD; }
        .hp-cap-num { font-size: 15px; font-family: var(--font-instrument), serif; font-style: italic; font-weight: 400; color: rgba(27,26,104,.4); letter-spacing: .01em; }
        .hp-cap-h { font-size: 17px; font-weight: 600; letter-spacing: -.02em; margin: 12px 0 8px; color: #1B1A68; }
        .hp-cap-p { font-size: 13px; color: rgba(27,26,104,.55); line-height: 1.6; }

        /* ── GCC COVERAGE ── */
        .hp-coverage { background: #FAFBFD; border-top: 1px solid rgba(27,26,104,.08); padding: 100px 0; }
        .hp-coverage-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
        @media (max-width: 900px) { .hp-coverage-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 540px) { .hp-coverage-grid { grid-template-columns: 1fr; } }
        .hp-coverage-card { background: #fff; border: 1px solid rgba(27,26,104,.1); border-radius: 10px; padding: 24px; transition: border-color .2s ease; }
        .hp-coverage-card:hover { border-color: rgba(45,43,224,.22); }
        .hp-coverage-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; }
        .hp-coverage-code { font-size: 15px; font-family: var(--font-instrument), serif; font-style: italic; font-weight: 400; color: #2D2BE0; }
        .hp-coverage-hubs { font-size: 15px; font-family: var(--font-instrument), serif; font-style: italic; font-weight: 400; color: rgba(27,26,104,.4); }
        .hp-coverage-name { font-size: 18px; font-weight: 600; letter-spacing: -.02em; color: #1B1A68; margin-bottom: 5px; }
        .hp-coverage-cities { font-size: 11px; color: rgba(27,26,104,.45); letter-spacing: .04em; margin-bottom: 10px; }
        .hp-coverage-note { font-size: 13px; color: rgba(27,26,104,.5); line-height: 1.5; }

        /* ── SOCIAL PROOF ── */
        .hp-proof { background: #fff; border-top: 1px solid rgba(27,26,104,.08); padding: 100px 0; }
        .hp-proof-metrics { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; background: rgba(27,26,104,.08); border: 1px solid rgba(27,26,104,.08); border-radius: 10px; overflow: hidden; margin-bottom: 64px; }
        @media (max-width: 800px) { .hp-proof-metrics { grid-template-columns: repeat(2, 1fr); } }
        .hp-proof-metric { background: #fff; padding: 28px 24px; text-align: center; }
        .hp-proof-mval { font-size: clamp(28px, 3vw, 42px); font-weight: 700; color: #1B1A68; line-height: 1; margin-bottom: 8px; letter-spacing: -.025em; }
        .hp-proof-mlbl { font-size: 11px; color: rgba(27,26,104,.4); text-transform: uppercase; letter-spacing: .1em; }
        .hp-quotes-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
        @media (max-width: 1100px) { .hp-quotes-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 640px)  { .hp-quotes-grid { grid-template-columns: 1fr; } }
        .hp-quote-card { background: #fff; border: 1px solid rgba(27,26,104,.1); border-radius: 10px; padding: 28px; display: flex; flex-direction: column; transition: border-color .2s ease; }
        .hp-quote-card:hover { border-color: rgba(45,43,224,.2); }
        .hp-industry-tag { font-size: 14px; font-family: var(--font-instrument), serif; font-style: italic; font-weight: 400; color: rgba(27,26,104,.45); text-transform: none; letter-spacing: .01em; margin-bottom: 16px; }
        .hp-qmark { display: none; }
        .hp-quote-card p { font-size: 14px; color: rgba(27,26,104,.65); line-height: 1.7; flex: 1; margin-bottom: 20px; }
        .hp-quote-card em { color: #1B1A68; font-style: normal; font-weight: 500; }
        .hp-author { display: flex; align-items: center; gap: 10px; margin-top: auto; padding-top: 16px; border-top: 1px solid rgba(27,26,104,.08); }
        .hp-avatar { width: 34px; height: 34px; border-radius: 50%; background: #1B1A68; display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 600; color: #fff; flex-shrink: 0; }
        .hp-qname { font-size: 13px; font-weight: 600; color: #1B1A68; }
        .hp-qrole { font-size: 11px; color: rgba(27,26,104,.45); margin-top: 1px; }

        /* ── WHY AJIL + INDUSTRIES ── */
        .hp-why-industries { background: #FAFBFD; border-top: 1px solid rgba(27,26,104,.08); padding: 100px 0; }
        .hp-wi-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: start; }
        @media (max-width: 900px) { .hp-wi-grid { grid-template-columns: 1fr; gap: 56px; } }
        .hp-wi-h { font-size: clamp(26px, 3vw, 44px); line-height: 1.1; letter-spacing: -.03em; font-weight: 700; color: #1B1A68; margin: 14px 0 32px; }
        .hp-wi-h em { font-family: var(--font-instrument), serif; font-style: italic; font-weight: 400; color: #2D2BE0; }
        .hp-why-cards { display: flex; flex-direction: column; gap: 1px; background: rgba(27,26,104,.08); border: 1px solid rgba(27,26,104,.08); border-radius: 10px; overflow: hidden; }
        .hp-why-card { background: #fff; padding: 24px 28px; display: block; transition: background .15s ease; }
        .hp-why-card:hover { background: #FAFBFD; }
        .hp-why-num { font-size: 16px; font-family: var(--font-instrument), serif; font-style: italic; font-weight: 400; color: rgba(27,26,104,.35); flex-shrink: 0; padding-top: 2px; min-width: 24px; }
        .hp-why-h4 { font-size: 15px; font-weight: 600; letter-spacing: -.01em; color: #1B1A68; margin-bottom: 4px; }
        .hp-why-p { font-size: 13px; color: rgba(27,26,104,.55); line-height: 1.6; }
        .hp-ind-strip { display: flex; flex-wrap: wrap; gap: 8px; }
        .hp-ind-chip { display: inline-flex; align-items: center; gap: 7px; padding: 8px 13px; border-radius: 6px; background: #fff; border: 1px solid rgba(27,26,104,.12); font-size: 13px; color: rgba(27,26,104,.65); font-weight: 400; transition: border-color .15s ease; cursor: default; }
        .hp-ind-chip:hover { border-color: rgba(45,43,224,.28); color: #1B1A68; }

        /* ── CTA ── */
        .hp-cta { background: radial-gradient(ellipse 90% 70% at 50% 0%, #1B1A68 0%, #0B0F2E 55%, #060818 100%); padding: 120px 0; position: relative; overflow: hidden; }
        .hp-cta::before { content: ""; position: absolute; inset: 0; background: radial-gradient(ellipse 60% 50% at 80% 80%, rgba(90,75,255,.12) 0%, transparent 60%), radial-gradient(ellipse 40% 40% at 20% 20%, rgba(45,43,224,.1) 0%, transparent 60%); pointer-events: none; }
        .hp-cta .hp-container { position: relative; z-index: 1; }
        .hp-cta-inner { text-align: center; }
        .hp-cta-h { font-size: clamp(36px, 5.5vw, 76px); line-height: 1.06; letter-spacing: -.04em; font-weight: 700; color: #fff; margin-bottom: 20px; }
        .hp-cta-h em { font-family: var(--font-instrument), serif; font-style: italic; font-weight: 400; color: #7B78FF; }
        .hp-cta-p { font-size: 17px; color: rgba(255,255,255,.55); max-width: 50ch; margin: 0 auto 32px; line-height: 1.65; }
        .hp-cta-proof { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px 22px; margin-bottom: 44px; }
        .hp-cta-proof-pt { display: inline-flex; align-items: center; gap: 7px; font-size: 12px; color: rgba(255,255,255,.45); letter-spacing: .04em; }
        .hp-cta-proof-pt svg { color: #7B78FF; flex-shrink: 0; }
        .hp-cta-actions { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; margin-bottom: 72px; }
        .hp-cta-btn-primary { background: #fff; color: #0B0F2E; font-weight: 700; padding: 14px 28px; border-radius: 8px; font-size: 15px; display: inline-flex; align-items: center; gap: 8px; transition: background .15s ease; }
        .hp-cta-btn-primary:hover { background: #e8e8f8; }
        .hp-cta-btn-ghost { background: transparent; color: rgba(255,255,255,.65); font-weight: 500; padding: 14px 28px; border-radius: 8px; font-size: 15px; border: 1px solid rgba(255,255,255,.2); display: inline-flex; align-items: center; transition: border-color .15s ease, color .15s ease; }
        .hp-cta-btn-ghost:hover { border-color: rgba(255,255,255,.4); color: #fff; }
        .hp-big-wordmark { display: flex; flex-direction: column; align-items: center; gap: 6px; margin-bottom: 12px; }
        .hp-cta-logo { height: 56px; width: auto; opacity: .7; filter: brightness(0) invert(1); }
        .hp-cta-tagline-img { height: 22px; width: auto; opacity: .5; filter: brightness(0) invert(1); }

        /* ── DRIVER RECRUITING ── */
        .hp-drivers { background: #fff; border-top: 1px solid rgba(27,26,104,.08); padding: 56px 0; }
        .hp-drivers-inner { display: grid; grid-template-columns: 1fr auto auto; gap: 48px; align-items: center; }
        @media (max-width: 900px) { .hp-drivers-inner { grid-template-columns: 1fr; gap: 24px; } }
        .hp-drivers-h { font-size: clamp(20px, 2.2vw, 28px); font-weight: 700; letter-spacing: -.02em; color: #1B1A68; margin: 6px 0 8px; line-height: 1.2; }
        .hp-drivers-h em { font-family: var(--font-instrument), serif; font-style: italic; font-weight: 400; color: #2D2BE0; }
        .hp-drivers-desc { font-size: 14px; color: rgba(27,26,104,.55); line-height: 1.6; max-width: 44ch; }
        .hp-drivers-actions { display: flex; flex-direction: column; gap: 10px; }
        .hp-drivers-btn { display: inline-flex; align-items: center; gap: 10px; padding: 11px 18px; border-radius: 8px; font-weight: 500; font-size: 14px; transition: background .15s ease; white-space: nowrap; text-decoration: none; }
        .hp-btn-wa { background: #25D366; color: #fff; }
        .hp-btn-wa:hover { background: #20ba5a; }
        .hp-drivers-btn span { display: flex; flex-direction: column; }
        .hp-drivers-btn small { font-size: 10px; opacity: .75; font-weight: 400; }
        .hp-drivers-btn strong { font-size: 14px; font-weight: 600; }
        .hp-drivers-link { font-size: 12px; color: rgba(27,26,104,.5); font-weight: 500; transition: color .15s ease; }
        .hp-drivers-link:hover { color: #1B1A68; }
        .hp-drivers-foot { font-size: 11px; color: rgba(27,26,104,.35); text-transform: uppercase; letter-spacing: .1em; }

      `}</style>
    </>
  );
}
