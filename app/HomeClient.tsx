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

const routeCaps = [
  { n: "/ 01", title: "Stacking Logic",     desc: "We bundle multiple deliveries onto a single route to drive down cost per drop without breaking SLA." },
  { n: "/ 02", title: "Live Re-Routing",    desc: "Routes adjust continuously as traffic, breakdowns and new orders enter the network." },
  { n: "/ 03", title: "Local Intelligence", desc: "Routes built around prayer times, gated compounds, school zones and Ramadan timings." },
  { n: "/ 04", title: "Demand Planning",    desc: "We anticipate volume by daypart and location, pre-positioning vehicles before peak windows." },
];

const layers = [
  {
    grad: "linear-gradient(180deg,#0F1A3D,#1F1E9C)",
    num: "01", tag: "SOFTWARE",
    title: "Logistics Delivery Management Software",
    desc: "License the Ajil platform — TMS, WMS, dispatch, driver and rider apps, customer tracking and a unified control tower. Run with your own fleet, your own warehouses, your own people. Multi-tenant, white-label and API-first.",
    chips: ["TMS", "WMS", "Dispatch", "Driver App", "Control Tower"],
    cta: "License The Platform →", href: "/services",
  },
  {
    grad: "linear-gradient(180deg,#1F1E9C,#2D2BE0)",
    num: "02", tag: "ON-DEMAND",
    title: "On-Demand Logistics",
    desc: "Tap into Ajil's existing rider, vehicle and warehouse network on a pay-per-delivery basis — flex up during peaks, scale down on quiet days. A ready-made network across the GCC, available the day you onboard.",
    chips: ["Pay Per Delivery", "Same-Day", "Scheduled", "Surge Capacity", "Software Included"],
    cta: "Use On-Demand →", href: "/services",
  },
  {
    grad: "linear-gradient(180deg,#2D2BE0,#5A4BFF)",
    num: "03", tag: "DEDICATED",
    title: "Dedicated Logistics",
    desc: "Capacity that operates exclusively for your business — branded riders, ringfenced fleet, dedicated warehouse footprint, dark store hubs in your target catchments. The same operating platform, but the operation wears your colours.",
    chips: ["Branded Fleet", "Dedicated Warehouse", "Dark Stores", "SLA-Bound", "Custom KPIs"],
    cta: "Build Dedicated →", href: "/services/dedicated",
  },
  {
    grad: "linear-gradient(180deg,#5A4BFF,#8775FF)",
    num: "04", tag: "MANAGED",
    title: "Fully Managed Operations",
    desc: "We take ownership of your entire logistics function. Network design, hiring, warehouse leasing, dark store operations, fleet management — and a single accountable leadership team reporting against the KPIs you set.",
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
  { industry: "Grocery",          q: `We replaced three logistics vendors with a single Ajil contract — software, network and a dedicated dark-store layer. Cost per drop fell 27% and our COO finally has <em>one number to look at</em>.`,          initials: "FA", name: "Fatima Al Sayed",  role: "VP Operations · Regional Grocery Group",      metric: "27%", metricLabel: "cost reduction" },
  { industry: "Quick Commerce",   q: `Ajil's stacking logic took our cost-per-drop down by 31% in the first quarter. The dispatch team flagged exceptions before our own ops noticed them. <em>It just runs</em>.`,                            initials: "RM", name: "Rashid Mansoori", role: "Head Of Logistics · Quick Commerce Platform",  metric: "31%", metricLabel: "fewer failed deliveries" },
  { industry: "QSR",              q: `We onboarded across 47 outlets in 14 days. Branded riders, our packaging, our SLA. The customer never knows it's outsourced — they just know <em>their food is on time</em>.`,                          initials: "SK", name: "Sara Khoury",      role: "COO · Multi-Brand Restaurant Group",          metric: "14 days", metricLabel: "full onboarding" },
  { industry: "Retail",           q: `We needed scheduled, branded last-mile across three GCC markets. Ajil delivered the software, the riders and the warehouse footprint. <em>One partner, one contract, one team to call</em>.`,           initials: "YH", name: "Yousef Habib",    role: "Head Of E-Commerce · Fashion Retailer",       metric: "3", metricLabel: "markets, one contract" },
  { industry: "B2B Distribution", q: `Route optimization that actually understands GCC roads — prayer windows, gated compounds, the lot. Our drivers complete 23% more drops per shift and they're <em>happier doing it</em>.`,               initials: "AB", name: "Abdullah Bilal",   role: "Logistics Manager · F&B Distributor",         metric: "23%", metricLabel: "more drops per shift" },
];

const whyCards = [
  { n: "i.",   title: "Built For The GCC",    desc: "Our dispatch operation was built on this region's roads, traffic patterns, prayer times and gated compounds — not retrofitted from a European model." },
  { n: "ii.",  title: "One Partner, All Four", desc: "License software, use the network, build dedicated capacity, or outsource the function entirely — without changing partners as you grow." },
  { n: "iii.", title: "Operator DNA",          desc: "We run logistics ourselves before we sell it. Every capability is shaped by a live operations team, not a roadmap committee." },
];

const gccMarkets = [
  { code: "QA", name: "Qatar",   hubs: 4, cities: "Doha · Lusail · Al Wakra",         note: "Headquarters & primary operations hub" },
  { code: "UAE", name: "UAE",    hubs: 5, cities: "Dubai · Abu Dhabi · Sharjah",       note: "Largest fleet network in the group" },
  { code: "KSA", name: "Saudi Arabia", hubs: 3, cities: "Riyadh · Jeddah · Dammam",   note: "Rapid expansion across major metro areas" },
  { code: "KW",  name: "Kuwait", hubs: 1, cities: "Kuwait City · Salmiya",             note: "On-demand and dedicated capacity" },
  { code: "BH",  name: "Bahrain", hubs: 1, cities: "Manama · Riffa",                  note: "Scheduled and same-day coverage" },
  { code: "OM",  name: "Oman",   hubs: 1, cities: "Muscat · Seeb",                    note: "Growing network with local teams" },
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
        <div className="hp-hero-inner">

          {/* LEFT: text */}
          <div className="hp-hero-text">
            <span className="hp-hero-eyebrow">
              <span className="hp-live-dot" />
              Live Across 6 GCC Markets
            </span>
            <h1 className="hp-hero-h">
              End-to-End Logistics<br />
              Infrastructure for<br />
              <em>Modern Commerce</em>.
            </h1>
            <p className="hp-hero-sub">
              Ajil Logistics Services builds the dispatch operation, the operating software, and the
              physical infrastructure that powers modern commerce — across Qatar, UAE, Saudi Arabia,
              Kuwait, Bahrain and Oman.
            </p>

            {/* Stats row — above CTAs */}
            <div className="hp-hero-stats">
              {[
                { val: "6",     label: "GCC Markets" },
                { val: "14+",   label: "Active Hubs" },
                { val: "98.4%", label: "SLA Adherence" },
                { val: "60+",   label: "Brands Served" },
              ].map((s) => (
                <div className="hp-stat-item" key={s.label}>
                  <div className="hp-stat-val">{s.val}</div>
                  <div className="hp-stat-lbl">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="hp-hero-actions">
              <a href="/contact" className="hp-btn-primary">
                Talk To Our Team
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
              </a>
              <a href="#services" className="hp-btn-ghost">See Our Services</a>
            </div>
          </div>

          {/* RIGHT: GCC network visual */}
          <div className="hp-hero-visual">
            <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="hp-map-svg">
              <circle cx="268" cy="120" r="80" fill="rgba(45,43,224,.05)"/>
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
              <span className="hp-section-tag">01 · What We Do</span>
              <h2 className="hp-section-title">Three Ways Ajil<br /><em>Runs Your Logistics</em>.</h2>
            </div>
            <p className="hp-section-desc">
              Whether you need software to run your own operation, a network to plug into, or a
              partner to take over entirely — Ajil covers all three. One company, every model.
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
                desc: "Tap our existing riders, vehicles and warehouses across 6 GCC markets on a pay-per-delivery basis. Software included. No upfront investment.",
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
              <span className="hp-section-tag" style={{ justifyContent: "center", display: "inline-flex" }}>02 · Process</span>
              <h2 className="hp-section-title" style={{ margin: "18px auto 0", textAlign: "center", maxWidth: "22ch" }}>From First Call to <em>Live Operation</em> in 14 Days.</h2>
            </div>
          </div>
          <div className="hp-hiw-steps reveal">
            {[
              { n: "01", title: "Consult",  desc: "A 30-minute session with a logistics architect. Bring your real numbers — volumes, geographies, SLA requirements." },
              { n: "02", title: "Design",   desc: "We model your operation: network layout, hub placement, fleet mix, SLA targets and unit economics." },
              { n: "03", title: "Deploy",   desc: "Onboarded in 14 days or less. Drivers hired and trained. Software live. Warehouses operational." },
              { n: "04", title: "Operate",  desc: "24/7 control room. Live re-routing. Monthly performance reviews. One team accountable end-to-end." },
            ].map((step, i) => (
              <div className="hp-hiw-step" key={step.n}>
                <div className="hp-hiw-num">{step.n}</div>
                {i < 3 && <div className="hp-hiw-line" />}
                <h4 className="hp-hiw-title">{step.title}</h4>
                <p className="hp-hiw-desc">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="hp-hiw-cta reveal">
            <a href="/contact" className="hp-btn-primary">
              Book a 30-minute session
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
              <span className="hp-section-tag">03 · Service Models</span>
              <h2 className="hp-section-title">Four Ways To <em>Partner With Us</em>.</h2>
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
                  <span className="hp-model-num">{layer.num}</span>
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
              <span className="hp-section-tag">04 · How Our Operations Work</span>
              <h3 className="hp-route-h">
                Fewer Drops Per Route.<br /><em>Lower Cost Per Delivery.</em>
              </h3>
              <p className="hp-route-p">
                Our dispatch teams plan, monitor and intervene across thousands of routes every day —
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
                <span className="hp-cap-num">{cap.n}</span>
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
              <span className="hp-section-tag">05 · Our Coverage</span>
              <h2 className="hp-section-title">Operating Across<br /><em>The GCC</em>.</h2>
            </div>
            <p className="hp-section-desc">
              Established infrastructure in six markets with local operations teams, owned hubs
              and active fleet. Not a partner network — our own people, on the ground.
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
              <span className="hp-section-tag">06 · Results</span>
              <h2 className="hp-section-title">What Our <em>Customers Say</em>.</h2>
            </div>
            <p className="hp-section-desc">
              From quick commerce to QSR to enterprise retail — operators across the GCC are running
              their logistics on Ajil and finding measurable results fast.
            </p>
          </div>

          {/* Featured metrics bar */}
          <div className="hp-proof-metrics reveal">
            {[
              { val: "27%",    label: "Average cost reduction" },
              { val: "31%",    label: "Fewer failed deliveries" },
              { val: "14 days", label: "Average onboarding time" },
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
              <span className="hp-section-tag">07 · Why Operators Switch</span>
              <h2 className="hp-wi-h">Three reasons operators<br />consolidate to <em>Ajil</em>.</h2>
              <div className="hp-why-cards">
                {whyCards.map((card) => (
                  <div className="hp-why-card" key={card.n}>
                    <div className="hp-why-num">{card.n}</div>
                    <div>
                      <h4 className="hp-why-h4">{card.title}</h4>
                      <p className="hp-why-p">{card.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Industries */}
            <div className="hp-wi-right">
              <span className="hp-section-tag">Industries We Serve</span>
              <h2 className="hp-wi-h">Tuned for every<br />category that <em>moves</em>.</h2>
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
            Book 30 minutes with a logistics architect. Bring your real numbers — we&apos;ll show you
            which service model fits, where the savings come from, and how the operation would look
            in practice.
          </p>
          <div className="hp-cta-proof">
            {["No lock-in", "14-day deployment", "Live 24/7 support", "GCC-native operation", "SLA-backed"].map((pt) => (
              <span key={pt} className="hp-cta-proof-pt">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                {pt}
              </span>
            ))}
          </div>
          <div className="hp-cta-actions">
            <a href="/contact" className="hp-cta-btn-primary">
              Book a working session
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
            </a>
            <a href="/contact" className="hp-cta-btn-ghost">Download capability deck</a>
          </div>
          <div className="hp-big-wordmark">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/ajil-logo-transparent.png" alt="Ajil" className="hp-cta-logo" />
          </div>
          <div className="hp-big-tagline">— Efficiency in Motion —</div>
        </div>
      </section>

      {/* Block B — Driver Recruiting (secondary) */}
      <section className="hp-drivers" id="join">
        <div className="hp-container">
          <div className="hp-drivers-inner reveal">
            <div className="hp-drivers-text">
              <span className="hp-section-tag">Join the Ajil Fleet</span>
              <h3 className="hp-drivers-h">Drive with Ajil. <em>Earn every day.</em></h3>
              <p className="hp-drivers-desc">We&apos;re growing our rider and driver network across the GCC. Daily routes, weekly payouts, performance bonuses.</p>
            </div>
            <div className="hp-drivers-actions">
              <a href="https://wa.me/97400000000?text=Hi%20Ajil%20-%20I%20want%20to%20join%20as%20a%20driver" className="hp-drivers-btn hp-btn-wa">
                <WaSvg />
                <span><small>WhatsApp Us</small><strong>Apply In 60 Seconds</strong></span>
              </a>
              <a href="#" className="hp-drivers-link">Driver application form →</a>
            </div>
            <p className="hp-drivers-foot">Now Hiring · Doha · Dubai · Riyadh · Kuwait</p>
          </div>
        </div>
      </section>

      <Footer />

      {/* ════════════════════════════════════════════════════
          STYLES
      ════════════════════════════════════════════════════ */}
      <style>{`
        /* ── Design tokens ── */
        /* --ink, --indigo, --violet, --paper*, --line*, --muted* come from globals.css */

        /* ── Container ── */
        .hp-container { max-width: 1440px; margin: 0 auto; padding: 0 clamp(24px, 6vw, 88px); }
        @media (max-width: 760px) { .hp-container { padding: 0 20px; } }

        /* ── Section framework ── */
        .hp-section-head { display: grid; grid-template-columns: auto 1fr; gap: 48px; margin-bottom: 72px; align-items: end; }
        @media (max-width: 780px) { .hp-section-head { grid-template-columns: 1fr; gap: 24px; margin-bottom: 48px; } }
        .hp-section-tag { font-family: var(--font-geist-mono), monospace; font-size: 11px; color: var(--indigo); text-transform: uppercase; letter-spacing: .18em; display: flex; align-items: center; gap: 10px; font-weight: 500; }
        .hp-section-tag::before { content: ""; width: 24px; height: 1px; background: var(--indigo); }
        .hp-section-title { font-size: clamp(36px, 5vw, 68px); line-height: 1.02; letter-spacing: -.04em; font-weight: 500; margin-top: 18px; max-width: 20ch; color: var(--ink); }
        .hp-section-title em { font-family: var(--font-instrument), serif; font-style: italic; font-weight: 400; color: var(--indigo); }
        .hp-section-desc { font-size: 17px; color: var(--muted); max-width: 50ch; line-height: 1.65; }

        /* ── Reveal animation ── */
        .reveal { opacity: 0; transform: translateY(28px); transition: opacity .65s cubic-bezier(.2,.7,.2,1), transform .65s cubic-bezier(.2,.7,.2,1); }
        .reveal.in { opacity: 1; transform: none; }

        /* ── Shared button styles ── */
        .hp-btn-primary { background: #1B1A68; color: #fff; font-weight: 600; padding: 14px 26px; border-radius: 999px; font-size: 15px; display: inline-flex; align-items: center; gap: 10px; transition: all .25s cubic-bezier(.2,.7,.2,1); box-shadow: 0 1px 0 rgba(255,255,255,.1) inset, 0 12px 32px -10px rgba(27,26,104,.5); white-space: nowrap; }
        .hp-btn-primary:hover { transform: translateY(-2px); background: var(--indigo); box-shadow: 0 1px 0 rgba(255,255,255,.12) inset, 0 20px 44px -10px rgba(45,43,224,.55); }
        .hp-btn-ghost { background: transparent; color: var(--ink); font-weight: 500; padding: 14px 24px; border-radius: 999px; font-size: 15px; border: 1px solid var(--line-strong); display: inline-flex; align-items: center; gap: 10px; transition: all .25s ease; white-space: nowrap; }
        .hp-btn-ghost:hover { background: var(--paper-3); border-color: var(--line-dark); }

        /* ════════════════════
           SECTION 1 · HERO
        ════════════════════ */
        .hp-hero { position: relative; background: #fff; overflow: hidden; border-bottom: 1px solid var(--line); }
        .hp-hero-inner { display: grid; grid-template-columns: 1fr 1fr; align-items: center; min-height: 100svh; width: 100%; }
        .hp-hero-text { padding: 160px 40px 100px clamp(28px, 8vw, 140px); }

        .hp-hero-eyebrow { display: inline-flex; align-items: center; gap: 10px; font-family: var(--font-geist-mono), monospace; font-size: 11px; font-weight: 500; letter-spacing: .14em; text-transform: uppercase; color: var(--muted); margin-bottom: 32px; animation: fadeUp .6s both; }
        .hp-live-dot { width: 7px; height: 7px; border-radius: 50%; background: #0E9D6E; box-shadow: 0 0 12px rgba(14,157,110,.75); animation: pulse 2.5s infinite; flex-shrink: 0; }

        .hp-hero-h { font-size: clamp(40px, 4.6vw, 76px); line-height: .97; letter-spacing: -.045em; font-weight: 600; color: var(--ink); margin: 0 0 28px; animation: fadeUp .8s .1s both; }
        .hp-hero-h em { font-family: var(--font-instrument), serif; font-style: italic; font-weight: 400; background: linear-gradient(115deg,#1B1A68 0%,#2D2BE0 48%,#5A4BFF 100%); -webkit-background-clip: text; background-clip: text; color: transparent; letter-spacing: -.025em; }

        .hp-hero-sub { font-size: clamp(15px, 1.2vw, 17px); color: var(--muted); max-width: 48ch; line-height: 1.7; font-weight: 400; margin-bottom: 40px; animation: fadeUp .8s .2s both; }

        /* Stats row — ABOVE the CTAs */
        .hp-hero-stats { display: flex; gap: 0; flex-wrap: wrap; margin-bottom: 40px; animation: fadeUp .8s .28s both; border: 1px solid var(--line); border-radius: 16px; overflow: hidden; }
        .hp-stat-item { flex: 1; min-width: 100px; padding: 20px 24px; border-right: 1px solid var(--line); }
        .hp-stat-item:last-child { border-right: none; }
        .hp-stat-val { font-family: var(--font-instrument), serif; font-style: italic; font-size: 32px; line-height: 1; background: linear-gradient(115deg, var(--ink), #2D2BE0); -webkit-background-clip: text; background-clip: text; color: transparent; letter-spacing: -.02em; }
        .hp-stat-lbl { font-family: var(--font-geist-mono), monospace; font-size: 10px; color: var(--muted-2); text-transform: uppercase; letter-spacing: .12em; margin-top: 6px; }
        @media (max-width: 600px) { .hp-hero-stats { flex-direction: column; } .hp-stat-item { border-right: none; border-bottom: 1px solid var(--line); } .hp-stat-item:last-child { border-bottom: none; } }

        .hp-hero-actions { display: flex; gap: 14px; flex-wrap: wrap; animation: fadeUp .8s .36s both; }

        /* Right visual */
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

        @media (max-width: 1100px) { .hp-hero-inner { grid-template-columns: 1fr; } .hp-hero-visual { min-height: 380px; padding: 20px 24px 60px; } }
        @media (max-width: 640px) { .hp-hero-text { padding: 120px 20px 60px 20px; } }

        /* ════════════════════════
           SECTION 2 · TRUST BAR
        ════════════════════════ */
        .hp-clients { padding: 72px 0 80px; background: var(--paper-2); border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); position: relative; overflow: hidden; }
        .hp-clients::before { content: ""; position: absolute; top: 0; left: 30%; right: 30%; height: 1px; background: linear-gradient(90deg, transparent, var(--violet-line), transparent); }
        .hp-clients-label { text-align: center; font-family: var(--font-geist-mono), monospace; font-size: 11px; color: var(--muted-2); text-transform: uppercase; letter-spacing: .18em; margin-bottom: 44px; font-weight: 500; }
        .hp-marquee { position: relative; width: 100%; overflow: hidden; -webkit-mask-image: linear-gradient(90deg, transparent 0, #000 8%, #000 92%, transparent 100%); mask-image: linear-gradient(90deg, transparent 0, #000 8%, #000 92%, transparent 100%); }
        .hp-marquee-track { display: flex; gap: 24px; width: max-content; animation: marquee 60s linear infinite; will-change: transform; }
        .hp-marquee:hover .hp-marquee-track { animation-play-state: paused; }
        .hp-logo-card { flex-shrink: 0; width: 200px; height: 110px; border-radius: 18px; background: var(--paper); border: 1px solid var(--line-strong); display: flex; align-items: center; justify-content: center; padding: 22px 26px; box-shadow: 0 1px 0 rgba(255,255,255,.6) inset, 0 1px 2px rgba(15,26,61,.04), 0 12px 28px -16px rgba(45,43,224,.18); transition: transform .35s cubic-bezier(.2,.7,.2,1), box-shadow .35s ease, border-color .35s ease; }
        .hp-logo-card:hover { transform: translateY(-4px) scale(1.02); border-color: var(--violet-line); box-shadow: 0 1px 0 rgba(255,255,255,.6) inset, 0 22px 44px -16px rgba(90,75,255,.32); }
        .hp-logo-img { max-height: 44px; max-width: 140px; width: auto; object-fit: contain; transition: opacity .3s ease; }
        .hp-logo-card:hover .hp-logo-img { opacity: .75; }

        /* ════════════════════════
           SECTION 3 · WHAT WE DO
        ════════════════════════ */
        .hp-what { background: var(--paper); border-top: 1px solid var(--line); padding: 120px 0; }
        .hp-what-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; background: var(--line); border: 1px solid var(--line); border-radius: 20px; overflow: hidden; }
        @media (max-width: 900px) { .hp-what-grid { grid-template-columns: 1fr; } }
        .hp-what-card { background: var(--paper); padding: 40px 36px 36px; display: flex; flex-direction: column; gap: 0; transition: background .3s ease; }
        .hp-what-card:hover { background: linear-gradient(160deg, rgba(238,240,255,.6), var(--paper)); }
        .hp-what-card::before { content: ""; display: block; height: 3px; width: 48px; background: linear-gradient(90deg, var(--indigo), var(--violet)); border-radius: 3px; margin-bottom: 28px; }
        .hp-what-icon { color: var(--indigo); margin-bottom: 12px; }
        .hp-what-tag { font-family: var(--font-geist-mono), monospace; font-size: 10px; color: var(--indigo); text-transform: uppercase; letter-spacing: .18em; font-weight: 500; margin-bottom: 14px; }
        .hp-what-h { font-size: clamp(20px, 1.8vw, 26px); font-weight: 500; letter-spacing: -.025em; color: var(--ink); margin-bottom: 14px; line-height: 1.2; }
        .hp-what-desc { font-size: 15px; color: var(--muted); line-height: 1.65; margin-bottom: 24px; }
        .hp-what-points { list-style: none; padding: 0; margin: 0 0 28px; display: flex; flex-direction: column; gap: 10px; flex: 1; }
        .hp-what-points li { display: flex; align-items: flex-start; gap: 10px; font-size: 14px; color: var(--muted); line-height: 1.5; }
        .hp-what-dot { width: 5px; height: 5px; border-radius: 50%; background: var(--violet); flex-shrink: 0; margin-top: 6px; }
        .hp-what-cta { font-family: var(--font-geist-mono), monospace; font-size: 11px; color: var(--indigo); text-transform: uppercase; letter-spacing: .1em; font-weight: 500; transition: letter-spacing .2s ease; margin-top: auto; }
        .hp-what-card:hover .hp-what-cta { letter-spacing: .16em; }

        /* ════════════════════════
           SECTION 4 · HOW IT WORKS
        ════════════════════════ */
        .hp-hiw { background: linear-gradient(180deg, var(--paper-2), var(--paper)); border-top: 1px solid var(--line); padding: 120px 0; }
        .hp-hiw-steps { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; margin-bottom: 56px; position: relative; }
        @media (max-width: 860px) { .hp-hiw-steps { grid-template-columns: 1fr 1fr; gap: 40px 24px; } }
        @media (max-width: 500px) { .hp-hiw-steps { grid-template-columns: 1fr; gap: 32px; } }
        .hp-hiw-step { padding: 36px 32px 32px; position: relative; }
        .hp-hiw-num { font-family: var(--font-geist-mono), monospace; font-size: clamp(48px, 5vw, 72px); font-weight: 700; color: rgba(27,26,104,.08); line-height: 1; margin-bottom: 16px; letter-spacing: -.04em; }
        .hp-hiw-line { position: absolute; top: 56px; right: -1px; width: 1px; height: 56px; background: linear-gradient(180deg, var(--line), transparent); }
        @media (max-width: 860px) { .hp-hiw-line { display: none; } }
        .hp-hiw-title { font-family: var(--font-geist-mono), monospace; font-size: 13px; font-weight: 500; color: var(--indigo); text-transform: uppercase; letter-spacing: .14em; margin-bottom: 12px; }
        .hp-hiw-desc { font-size: 15px; color: var(--muted); line-height: 1.65; }
        .hp-hiw-cta { text-align: center; }

        /* ════════════════════════
           SECTION 5 · SERVICE MODELS
        ════════════════════════ */
        .hp-models { background: var(--paper); border-top: 1px solid var(--line); padding: 120px 0; }
        .hp-models-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        @media (max-width: 860px) { .hp-models-grid { grid-template-columns: 1fr; } }
        .hp-model-card { position: relative; padding: 36px; border: 1px solid var(--line); border-radius: 20px; background: var(--paper); transition: all .35s ease; overflow: hidden; display: flex; flex-direction: column; gap: 0; text-decoration: none; color: inherit; box-shadow: 0 1px 2px rgba(15,26,61,.03); }
        .hp-model-card::before { content: ""; position: absolute; top: 0; bottom: 0; left: 0; width: 4px; background: var(--hp-gradient, linear-gradient(180deg,#1A2654,#2D2BE0)); }
        .hp-model-card:hover { border-color: rgba(45,43,224,.2); background: linear-gradient(135deg, rgba(238,240,255,.5), var(--paper)); transform: translateY(-3px); box-shadow: 0 16px 40px -16px rgba(45,43,224,.18); }
        .hp-model-header { display: flex; align-items: center; gap: 14px; margin-bottom: 20px; }
        .hp-model-num { font-family: var(--font-instrument), serif; font-style: italic; font-size: 52px; line-height: 1; background: var(--hp-gradient, linear-gradient(180deg,#1A2654,#2D2BE0)); -webkit-background-clip: text; background-clip: text; color: transparent; }
        .hp-model-tag { font-family: var(--font-geist-mono), monospace; font-size: 11px; color: var(--muted-2); letter-spacing: .14em; text-transform: uppercase; font-weight: 500; }
        .hp-model-title { font-size: clamp(18px, 1.6vw, 22px); font-weight: 500; letter-spacing: -.02em; color: var(--ink); margin-bottom: 12px; }
        .hp-model-desc { font-size: 14px; color: var(--muted); line-height: 1.65; margin-bottom: 20px; flex: 1; }
        .hp-model-chips { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 24px; }
        .hp-model-chips span { font-family: var(--font-geist-mono), monospace; font-size: 10px; padding: 4px 10px; border-radius: 999px; background: var(--paper-3); border: 1px solid var(--line); color: var(--muted); text-transform: uppercase; letter-spacing: .06em; }
        .hp-model-cta { font-family: var(--font-geist-mono), monospace; font-size: 11px; color: var(--indigo); text-transform: uppercase; letter-spacing: .1em; font-weight: 500; transition: letter-spacing .2s ease; margin-top: auto; }
        .hp-model-card:hover .hp-model-cta { letter-spacing: .18em; }

        /* ════════════════════════════════
           SECTION 6 · DISPATCH & OPERATIONS
        ════════════════════════════════ */
        .hp-routing { position: relative; background: linear-gradient(180deg, var(--paper) 0%, var(--paper-2) 100%); overflow: hidden; border-top: 1px solid var(--line); padding: 120px 0; }
        .hp-routing::before { content: ""; position: absolute; top: 0; left: 0; right: 0; height: 1px; background: linear-gradient(90deg, transparent, var(--violet-line), transparent); }
        .hp-route-hero { display: grid; grid-template-columns: 1fr 1.3fr; gap: 80px; align-items: center; }
        @media (max-width: 980px) { .hp-route-hero { grid-template-columns: 1fr; gap: 48px; } }
        .hp-route-h { font-size: clamp(32px, 4vw, 60px); line-height: 1.05; letter-spacing: -.04em; font-weight: 500; margin: 24px 0 24px; color: var(--ink); }
        .hp-route-h em { font-family: var(--font-instrument), serif; font-style: italic; font-weight: 400; color: var(--indigo); }
        .hp-route-p { font-size: 17px; color: var(--muted); line-height: 1.65; margin-bottom: 32px; max-width: 48ch; }
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
        .hp-route-pt  { fill: var(--violet); animation: hp-ptpulse 2.4s infinite; }
        .hp-route-pt2 { fill: var(--indigo); animation: hp-ptpulse 2.4s .8s infinite; }
        .hp-route-hub { fill: #0E9D6E; filter: drop-shadow(0 0 8px rgba(14,157,110,.5)); }
        @keyframes hp-ptpulse { 0%,100% { r: 5px; } 50% { r: 7px; } }
        .hp-ai-badge { position: absolute; top: 24px; left: 24px; padding: 10px 14px; border-radius: 12px; background: rgba(255,255,255,.92); border: 1px solid var(--violet-line); backdrop-filter: blur(8px); font-family: var(--font-geist-mono), monospace; font-size: 11px; color: var(--ink); display: flex; align-items: center; gap: 10px; letter-spacing: .04em; text-transform: uppercase; box-shadow: 0 4px 14px -6px rgba(45,43,224,.2); }
        .hp-ai-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--violet); animation: pulse 1.6s infinite; box-shadow: 0 0 10px rgba(90,75,255,.7); display: inline-block; flex-shrink: 0; }
        .hp-route-legend { position: absolute; top: 24px; right: 24px; padding: 12px 14px; border-radius: 12px; background: rgba(255,255,255,.9); border: 1px solid var(--line); backdrop-filter: blur(8px); display: flex; flex-direction: column; gap: 8px; font-family: var(--font-geist-mono), monospace; font-size: 10px; box-shadow: 0 4px 14px -6px rgba(15,26,61,.12); }
        .hp-legend-item { display: flex; align-items: center; gap: 8px; color: var(--muted); }
        .hp-legend-line { width: 18px; height: 2px; border-radius: 2px; display: inline-block; }
        .hp-leg-old { background: rgba(194,52,42,.6); }
        .hp-leg-new { background: var(--violet); }
        .hp-legend-dot { width: 8px; height: 8px; border-radius: 50%; display: inline-block; }
        .hp-leg-hub { background: #0E9D6E; box-shadow: 0 0 6px rgba(14,157,110,.5); }
        .hp-decision-panel { position: absolute; bottom: 24px; right: 24px; width: 240px; padding: 18px; border-radius: 14px; background: rgba(255,255,255,.95); border: 1px solid var(--line-strong); backdrop-filter: blur(10px); box-shadow: 0 14px 40px -16px rgba(15,26,61,.18), 0 2px 6px rgba(15,26,61,.04); }
        .hp-decision-row { display: flex; justify-content: space-between; font-family: var(--font-geist-mono), monospace; font-size: 11px; padding: 6px 0; border-bottom: 1px solid rgba(15,26,61,.06); }
        .hp-decision-row:last-child { border-bottom: none; }
        .hp-dlbl { color: var(--muted-2); text-transform: uppercase; letter-spacing: .06em; }
        .hp-dval { color: var(--ink); font-weight: 500; }
        .hp-dup { color: #0E9D6E; }
        .hp-route-caps { display: grid; grid-template-columns: repeat(4,1fr); gap: 1px; margin-top: 80px; background: var(--line); border: 1px solid var(--line); border-radius: 20px; overflow: hidden; }
        @media (max-width: 1000px) { .hp-route-caps { grid-template-columns: repeat(2,1fr); } }
        @media (max-width: 560px)  { .hp-route-caps { grid-template-columns: 1fr; } }
        .hp-route-cap { background: var(--paper); padding: 32px 28px; transition: background .3s ease; }
        .hp-route-cap:hover { background: var(--paper-3); }
        .hp-cap-num { font-family: var(--font-geist-mono), monospace; font-size: 11px; color: var(--indigo); letter-spacing: .1em; font-weight: 500; }
        .hp-cap-h { font-size: 18px; font-weight: 500; letter-spacing: -.02em; margin: 14px 0 8px; color: var(--ink); }
        .hp-cap-p { font-size: 13px; color: var(--muted); line-height: 1.6; }

        /* ════════════════════════
           SECTION 7 · GCC COVERAGE
        ════════════════════════ */
        .hp-coverage { background: var(--paper-2); border-top: 1px solid var(--line); padding: 120px 0; }
        .hp-coverage-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        @media (max-width: 900px) { .hp-coverage-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 540px) { .hp-coverage-grid { grid-template-columns: 1fr; } }
        .hp-coverage-card { background: var(--paper); border: 1px solid var(--line); border-radius: 18px; padding: 28px; transition: all .3s ease; }
        .hp-coverage-card:hover { border-color: rgba(45,43,224,.2); transform: translateY(-2px); box-shadow: 0 12px 32px -12px rgba(45,43,224,.14); }
        .hp-coverage-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
        .hp-coverage-code { font-family: var(--font-geist-mono), monospace; font-size: 12px; font-weight: 700; color: var(--indigo); letter-spacing: .14em; text-transform: uppercase; padding: 4px 10px; background: rgba(45,43,224,.06); border-radius: 6px; }
        .hp-coverage-hubs { font-family: var(--font-geist-mono), monospace; font-size: 11px; color: var(--muted-2); text-transform: uppercase; letter-spacing: .1em; }
        .hp-coverage-name { font-size: 20px; font-weight: 500; letter-spacing: -.02em; color: var(--ink); margin-bottom: 6px; }
        .hp-coverage-cities { font-family: var(--font-geist-mono), monospace; font-size: 11px; color: var(--indigo); letter-spacing: .06em; margin-bottom: 10px; }
        .hp-coverage-note { font-size: 13px; color: var(--muted); line-height: 1.5; }

        /* ════════════════════════
           SECTION 8 · SOCIAL PROOF
        ════════════════════════ */
        .hp-proof { background: var(--paper); border-top: 1px solid var(--line); padding: 120px 0; }
        .hp-proof-metrics { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; background: var(--line); border: 1px solid var(--line); border-radius: 18px; overflow: hidden; margin-bottom: 80px; }
        @media (max-width: 800px) { .hp-proof-metrics { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 500px) { .hp-proof-metrics { grid-template-columns: 1fr 1fr; } }
        .hp-proof-metric { background: var(--paper); padding: 28px 24px; text-align: center; }
        .hp-proof-mval { font-family: var(--font-instrument), serif; font-style: italic; font-size: clamp(28px, 3.5vw, 44px); line-height: 1; background: linear-gradient(115deg, var(--ink), var(--indigo)); -webkit-background-clip: text; background-clip: text; color: transparent; margin-bottom: 8px; }
        .hp-proof-mlbl { font-family: var(--font-geist-mono), monospace; font-size: 11px; color: var(--muted-2); text-transform: uppercase; letter-spacing: .12em; }
        .hp-quotes-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        @media (max-width: 1100px) { .hp-quotes-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 640px)  { .hp-quotes-grid { grid-template-columns: 1fr; } }
        .hp-quote-card { background: var(--paper); border: 1px solid var(--line); border-radius: 18px; padding: 32px; display: flex; flex-direction: column; gap: 0; transition: all .3s ease; }
        .hp-quote-card:hover { border-color: rgba(45,43,224,.15); box-shadow: 0 12px 32px -12px rgba(45,43,224,.1); }
        .hp-industry-tag { font-family: var(--font-geist-mono), monospace; font-size: 10px; color: var(--indigo); text-transform: uppercase; letter-spacing: .14em; font-weight: 500; margin-bottom: 16px; }
        .hp-qmark { font-family: var(--font-instrument), serif; font-size: 48px; line-height: .8; color: rgba(45,43,224,.15); margin-bottom: 8px; }
        .hp-quote-card p { font-size: 15px; color: var(--muted); line-height: 1.7; flex: 1; margin-bottom: 24px; }
        .hp-quote-card em { color: var(--ink); font-style: italic; font-family: var(--font-instrument), serif; }
        .hp-author { display: flex; align-items: center; gap: 12px; margin-top: auto; }
        .hp-avatar { width: 38px; height: 38px; border-radius: 50%; background: linear-gradient(135deg, var(--indigo), var(--violet)); display: flex; align-items: center; justify-content: center; font-family: var(--font-geist-mono), monospace; font-size: 12px; font-weight: 700; color: #fff; flex-shrink: 0; }
        .hp-qname { font-size: 14px; font-weight: 500; color: var(--ink); }
        .hp-qrole { font-family: var(--font-geist-mono), monospace; font-size: 10px; color: var(--muted-2); letter-spacing: .06em; margin-top: 2px; }

        /* ═══════════════════════════════════════
           SECTION 9 · WHY AJIL + INDUSTRIES
        ═══════════════════════════════════════ */
        .hp-why-industries { background: linear-gradient(180deg, var(--paper-2), var(--paper)); border-top: 1px solid var(--line); padding: 120px 0; }
        .hp-wi-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start; }
        @media (max-width: 900px) { .hp-wi-grid { grid-template-columns: 1fr; gap: 64px; } }
        .hp-wi-h { font-size: clamp(28px, 3.5vw, 48px); line-height: 1.1; letter-spacing: -.04em; font-weight: 500; color: var(--ink); margin: 18px 0 36px; }
        .hp-wi-h em { font-family: var(--font-instrument), serif; font-style: italic; font-weight: 400; color: var(--indigo); }
        .hp-why-cards { display: flex; flex-direction: column; gap: 1px; background: var(--line); border: 1px solid var(--line); border-radius: 16px; overflow: hidden; }
        .hp-why-card { background: var(--paper); padding: 24px; display: flex; gap: 18px; align-items: flex-start; transition: background .25s ease; }
        .hp-why-card:hover { background: var(--paper-3); }
        .hp-why-num { font-family: var(--font-geist-mono), monospace; font-size: 13px; color: var(--indigo); font-weight: 700; flex-shrink: 0; padding-top: 2px; min-width: 24px; }
        .hp-why-h4 { font-size: 17px; font-weight: 500; letter-spacing: -.02em; color: var(--ink); margin-bottom: 6px; }
        .hp-why-p { font-size: 14px; color: var(--muted); line-height: 1.6; }
        .hp-ind-strip { display: flex; flex-wrap: wrap; gap: 10px; }
        .hp-ind-chip { display: inline-flex; align-items: center; gap: 8px; padding: 9px 14px; border-radius: 999px; background: var(--paper); border: 1px solid var(--line-strong); font-size: 13px; color: var(--ink); font-weight: 400; transition: all .25s ease; cursor: default; }
        .hp-ind-chip:hover { border-color: rgba(45,43,224,.25); background: rgba(238,240,255,.5); color: var(--indigo); }

        /* ═══════════════════════════════════════
           SECTION 10A · B2B CTA
        ═══════════════════════════════════════ */
        .hp-cta { background: linear-gradient(160deg, #0C103A 0%, #1B1A68 60%, #2D2BE0 100%); padding: 120px 0; position: relative; overflow: hidden; }
        .hp-cta::before { content: ""; position: absolute; inset: 0; background: radial-gradient(ellipse 70% 60% at 70% 50%, rgba(90,75,255,.3), transparent 70%); }
        .hp-cta-inner { position: relative; text-align: center; }
        .hp-cta-h { font-size: clamp(40px, 6vw, 88px); line-height: .97; letter-spacing: -.05em; font-weight: 600; color: #fff; margin-bottom: 24px; }
        .hp-cta-h em { font-family: var(--font-instrument), serif; font-style: italic; font-weight: 400; background: linear-gradient(115deg, #9B94FF, #C4BFFF); -webkit-background-clip: text; background-clip: text; color: transparent; }
        .hp-cta-p { font-size: 18px; color: rgba(255,255,255,.65); max-width: 52ch; margin: 0 auto 36px; line-height: 1.65; }
        .hp-cta-proof { display: flex; flex-wrap: wrap; justify-content: center; gap: 12px 24px; margin-bottom: 48px; }
        .hp-cta-proof-pt { display: inline-flex; align-items: center; gap: 8px; font-family: var(--font-geist-mono), monospace; font-size: 12px; color: rgba(255,255,255,.55); letter-spacing: .06em; }
        .hp-cta-proof-pt svg { color: rgba(90,75,255,.8); flex-shrink: 0; }
        .hp-cta-actions { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; margin-bottom: 80px; }
        .hp-cta-btn-primary { background: #fff; color: #1B1A68; font-weight: 700; padding: 16px 32px; border-radius: 999px; font-size: 15px; display: inline-flex; align-items: center; gap: 10px; transition: all .25s ease; box-shadow: 0 8px 32px -8px rgba(0,0,0,.35); }
        .hp-cta-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 16px 44px -8px rgba(0,0,0,.4); }
        .hp-cta-btn-ghost { background: transparent; color: rgba(255,255,255,.7); font-weight: 500; padding: 16px 28px; border-radius: 999px; font-size: 15px; border: 1px solid rgba(255,255,255,.2); display: inline-flex; align-items: center; transition: all .25s ease; }
        .hp-cta-btn-ghost:hover { background: rgba(255,255,255,.08); border-color: rgba(255,255,255,.35); color: #fff; }
        .hp-big-wordmark { display: flex; justify-content: center; margin-bottom: 16px; }
        .hp-cta-logo { height: 36px; width: auto; opacity: .25; }
        .hp-big-tagline { text-align: center; font-family: var(--font-geist-mono), monospace; font-size: 11px; color: rgba(255,255,255,.25); letter-spacing: .24em; text-transform: uppercase; }

        /* ═══════════════════════════════════════
           SECTION 10B · DRIVER RECRUITING
        ═══════════════════════════════════════ */
        .hp-drivers { background: var(--paper-2); border-top: 1px solid var(--line); padding: 56px 0; }
        .hp-drivers-inner { display: grid; grid-template-columns: 1fr auto auto; gap: 48px; align-items: center; }
        @media (max-width: 900px) { .hp-drivers-inner { grid-template-columns: 1fr; gap: 24px; } }
        .hp-drivers-h { font-size: clamp(22px, 2.5vw, 32px); font-weight: 500; letter-spacing: -.025em; color: var(--ink); margin: 8px 0 8px; line-height: 1.2; }
        .hp-drivers-h em { font-family: var(--font-instrument), serif; font-style: italic; font-weight: 400; color: var(--indigo); }
        .hp-drivers-desc { font-size: 15px; color: var(--muted); line-height: 1.6; max-width: 46ch; }
        .hp-drivers-actions { display: flex; flex-direction: column; gap: 12px; }
        .hp-drivers-btn { display: inline-flex; align-items: center; gap: 12px; padding: 13px 20px; border-radius: 12px; font-weight: 500; font-size: 14px; transition: all .25s ease; white-space: nowrap; text-decoration: none; }
        .hp-btn-wa { background: #25D366; color: #fff; box-shadow: 0 4px 16px -4px rgba(37,211,102,.4); }
        .hp-btn-wa:hover { transform: translateY(-2px); box-shadow: 0 8px 24px -4px rgba(37,211,102,.5); }
        .hp-drivers-btn span { display: flex; flex-direction: column; }
        .hp-drivers-btn small { font-size: 10px; opacity: .75; font-weight: 400; letter-spacing: .04em; }
        .hp-drivers-btn strong { font-size: 14px; font-weight: 600; }
        .hp-drivers-link { font-family: var(--font-geist-mono), monospace; font-size: 11px; color: var(--indigo); text-transform: uppercase; letter-spacing: .1em; font-weight: 500; transition: letter-spacing .2s ease; }
        .hp-drivers-link:hover { letter-spacing: .16em; }
        .hp-drivers-foot { font-family: var(--font-geist-mono), monospace; font-size: 10px; color: var(--muted-2); text-transform: uppercase; letter-spacing: .12em; }

      `}</style>
    </>
  );
}
