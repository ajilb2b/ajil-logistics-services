import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ajil Dispatch — Delivery Management Software for the GCC",
  description:
    "Command centre for your entire delivery operation. Auto-routing with stacking logic, live operations map, shift management, client portals and brand integrations. Built for GCC roads.",
  alternates: { canonical: "https://ajilb2b.com/products/dispatch" },
  openGraph: {
    title: "Ajil Dispatch — Delivery Management Software | Ajil Logistics Services",
    description:
      "Command centre for your entire delivery operation. Auto-routing, live map, shift management and brand integrations.",
    url: "https://ajilb2b.com/products/dispatch",
  },
};

const features = [
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></svg>,
    title: "Auto-Routing With Stacking Logic",
    desc: "Bundle multiple deliveries onto a single route based on time windows, vehicle capacity, and SLA priority. Tuned for GCC roads, prayer windows, and gated compounds.",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>,
    title: "Live Re-Routing",
    desc: "Routes adjust continuously as traffic, breakdowns and new orders enter the network. The plan you see at 09:00 is not the plan running at 14:00 — and that's the point.",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="12" cy="12" r="9" /><path d="M12 8v4M12 16h.01" /></svg>,
    title: "Exception Management",
    desc: "Failed deliveries, delays, customer call-backs, returns — all flow through the same exception console. SLA-risk scoring tells you which exceptions need a human eye now.",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="2" y="7" width="20" height="13" rx="1" /><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" /></svg>,
    title: "Multi-Vehicle Planning",
    desc: "Bikes, cars, vans and refrigerated vehicles in a single plan. Vehicle constraints (volume, weight, temperature, route restrictions) honoured automatically.",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M3 21V8l9-5 9 5v13" /><path d="M9 21V12h6v9" /></svg>,
    title: "Multi-Hub Coordination",
    desc: "Orders dispatched from the right hub based on customer geography, current load, and vehicle availability. Cross-hub balancing during surge.",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><line x1="12" y1="20" x2="12" y2="10" /><line x1="18" y1="20" x2="18" y2="4" /><line x1="6" y1="20" x2="6" y2="16" /></svg>,
    title: "Live Operational Dashboard",
    desc: "SLA risk by cohort, on-time percentage, exception queues, rider utilization, cost-per-drop trends — all in one screen, refreshed every 30 seconds.",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>,
    title: "Open API & Webhooks",
    desc: "REST API and webhook subscriptions for every state change. Pre-built connectors for major ERPs, OMS platforms, and POS systems.",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5M2 12l10 5 10-5" /></svg>,
    title: "Multi-Tenant & White-Label",
    desc: "Run one tenant per business unit, brand or region. Full white-label theming for 3PLs and aggregators reselling dispatch capacity.",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="12" cy="12" r="9" /><path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20" /></svg>,
    title: "Local Intelligence",
    desc: "Routes built around prayer times, gated compounds, school zones, Ramadan timing, and the realities of GCC commerce calendar.",
  },
];

const tiers = [
  {
    name: "Starter",
    price: "1,200",
    unit: "QAR / mo",
    desc: "Up to 5,000 dispatches per month. Single tenant, single hub. Perfect for growing operations.",
    features: [
      "Up to 5,000 dispatches / month",
      "Single hub, single tenant",
      "Up to 25 active riders",
      "Email support, business hours",
      "Standard SLA dashboards",
      "API access included",
    ],
    cta: "Start 14-day trial",
    ctaHref: "/contact",
    featured: false,
  },
  {
    name: "Growth",
    price: "3,800",
    unit: "QAR / mo",
    desc: "Up to 25,000 dispatches per month. Multi-hub, multi-tenant. Most popular tier.",
    features: [
      "Up to 25,000 dispatches / month",
      "Multi-hub, up to 5 tenants",
      "Up to 150 active riders",
      "Priority support 24/7",
      "Advanced cohort analytics",
      "White-label tracking included",
      "Named customer success manager",
    ],
    cta: "Start 14-day trial",
    ctaHref: "/contact",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    unit: "",
    desc: "Volume above 25,000 dispatches per month, white-label deployment, custom SLAs.",
    features: [
      "Unlimited dispatches",
      "Unlimited hubs & tenants",
      "Full white-label theming",
      "Dedicated infrastructure available",
      "Custom SLA & integrations",
      "Quarterly business reviews",
      "SOC 2 reporting & audit support",
    ],
    cta: "Talk to sales",
    ctaHref: "/contact",
    featured: false,
  },
];

const faqs = [
  {
    q: "Can Ajil Dispatch work with my existing rider app?",
    a: "Yes. Ajil Dispatch is API-first. Most operators run it alongside their own rider app via our open API and webhook system. We provide reference integrations for the most common workflows (job assignment, status updates, proof of delivery), and our solutions engineering team supports go-live.",
  },
  {
    q: "Is the data stored locally in the GCC?",
    a: "Yes. Production data is stored in regional cloud infrastructure (UAE and Bahrain regions) with active-passive failover. Enterprise customers can opt for dedicated infrastructure with country-specific data residency. SOC 2 Type II report available under NDA.",
  },
  {
    q: "How does the 14-day trial work?",
    a: "A full Growth-tier sandbox provisioned within 24 hours, with sample data and white-label theming applied to your brand. We provide a 30-minute kickoff session and a dedicated solutions engineer for the trial period. No credit card required.",
  },
  {
    q: "Can I white-label Ajil Dispatch for resale?",
    a: "Yes — that's what the Enterprise tier is built for. 3PLs and aggregators in the region resell Ajil Dispatch under their own brand to their carrier partners. Revenue share or fixed-fee licensing models available.",
  },
  {
    q: "What happens if I exceed my tier's dispatch volume?",
    a: "Overage is billed at QAR 0.30 per additional dispatch on Starter and Growth tiers. We notify you when usage trends exceed 85% of your tier and recommend an upgrade — no service interruption.",
  },
];

export default function DispatchPage() {
  return (
    <>
      <Nav />

      {/* Breadcrumb */}
      <div style={{ padding: "24px 0", borderBottom: "1px solid var(--ink-line)", fontFamily: "var(--font-jetbrains),monospace", fontSize: 11, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.12em" }}>
        <div className="ajil-container">
          <Link href="/" style={{ color: "var(--text-muted)" }} className="bc-link">Home</Link>
          <span style={{ margin: "0 10px", color: "var(--text-faint)" }}>/</span>
          <Link href="/products" style={{ color: "var(--text-muted)" }} className="bc-link">Products</Link>
          <span style={{ margin: "0 10px", color: "var(--text-faint)" }}>/</span>
          <span style={{ color: "var(--text)" }}>Ajil Dispatch</span>
        </div>
      </div>

      {/* Hero */}
      <header style={{ padding: "80px 0 100px", borderBottom: "1px solid var(--ink-line)" }}>
        <div className="ajil-container">
          <div className="pd-hero-grid">
            <div>
              <div style={{
                width: 64, height: 64, borderRadius: 14,
                background: "rgba(36,100,232,0.06)", border: "1px solid rgba(36,100,232,0.18)",
                color: "var(--indigo-2)", display: "flex", alignItems: "center",
                justifyContent: "center", marginBottom: 32,
              }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" />
                  <rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
                </svg>
              </div>
              <div className="page-eyebrow">Product · 01 of 06</div>
              <h1 className="display-xl" style={{ fontSize: "clamp(40px,6.5vw,96px)" }}>
                Ajil <span className="it">Dispatch</span>.
              </h1>
              <p className="lede" style={{ marginTop: 24 }}>
                The full dispatch console — route planning, stacking logic, exception management,
                live re-routing. Built and tested in our own daily operations across the GCC.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 20, alignItems: "center", marginTop: 24, paddingTop: 24, borderTop: "1px solid var(--ink-line)" }}>
                <span style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 13, color: "var(--indigo-2)", fontWeight: 500 }}>→ dispatch.ajilb2b.com</span>
                <span style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 10, color: "#0E7E55", border: "1px solid rgba(14,126,85,0.25)", background: "rgba(14,126,85,0.06)", padding: "4px 10px", borderRadius: 999, textTransform: "uppercase" as const, letterSpacing: "0.12em" }}>● Live</span>
                <span style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 11, color: "var(--text-muted)", textTransform: "uppercase" as const, letterSpacing: "0.12em" }}>v3.4 · Updated April 2026</span>
              </div>
            </div>

            {/* Pricing card */}
            <div style={{ background: "var(--paper-2)", border: "1px solid var(--ink-line)", borderRadius: 18, padding: 32 }}>
              <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 11, color: "var(--text-muted)", textTransform: "uppercase" as const, letterSpacing: "0.14em", marginBottom: 12 }}>Starting From</div>
              <div style={{ fontFamily: "var(--font-fraunces),Georgia,serif", fontWeight: 300, fontVariationSettings: '"opsz" 144,"SOFT" 40', fontSize: 64, lineHeight: 1, letterSpacing: "-0.02em", color: "var(--text)", display: "flex", alignItems: "baseline", gap: 8 }}>
                QAR 1,200
                <span style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 13, color: "var(--text-muted)", fontWeight: 400 }}>/ mo</span>
              </div>
              <p style={{ fontSize: 13, lineHeight: 1.6, color: "var(--text-soft)", marginTop: 14 }}>
                Billed monthly or annually with 14-day free trial. Volume discounts and enterprise terms available — contact sales for tailored pricing on multi-tenant or white-label deployments.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 24 }}>
                <Link href="#tiers" className="ajil-btn-primary-lg">
                  Start 14-day trial
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
                </Link>
                <Link href="/contact" className="ajil-btn-line-lg">Talk to sales</Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Features */}
      <section style={{ padding: "100px 0", borderBottom: "1px solid var(--ink-line)" }}>
        <div className="ajil-container">
          <div className="section-head-grid" style={{ marginBottom: 64 }}>
            <div>
              <div className="meta-rule">Capabilities</div>
              <h2 className="display-l" style={{ marginTop: 18 }}>
                Built by dispatchers,<br /><span className="it">for dispatchers</span>.
              </h2>
            </div>
            <p className="lede">
              Every feature in Ajil Dispatch was shaped by an Ajil dispatcher running real routes.
              We don&apos;t ship abstractions — we ship what we use, every day, to move 12 million orders a year.
            </p>
          </div>

          <div className="feat-grid">
            {features.map((f) => (
              <div key={f.title} style={{ padding: "28px 24px", border: "1px solid var(--ink-line)", borderRadius: 12, background: "var(--paper)" }}>
                <div style={{ width: 36, height: 36, borderRadius: 8, background: "var(--paper-2)", border: "1px solid var(--ink-line)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--ink-soft)", marginBottom: 16 }}>
                  {f.icon}
                </div>
                <h4 style={{ fontFamily: "var(--font-fraunces),Georgia,serif", fontWeight: 400, fontVariationSettings: '"opsz" 72,"SOFT" 40', fontSize: 17, letterSpacing: "-0.01em", color: "var(--text)", marginBottom: 10 }}>
                  {f.title}
                </h4>
                <p style={{ fontSize: 13.5, lineHeight: 1.65, color: "var(--text-soft)" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section id="tiers" style={{ padding: "100px 0", borderBottom: "1px solid var(--ink-line)", background: "var(--paper-2)" }}>
        <div className="ajil-container">
          <div className="section-head-grid" style={{ marginBottom: 48 }}>
            <div>
              <div className="meta-rule">Pricing</div>
              <h2 className="display-l" style={{ marginTop: 18 }}>
                Three tiers.<br /><span className="it">Transparent pricing</span>.
              </h2>
            </div>
            <p className="lede">
              Simple monthly pricing tied to dispatch volume. Annual billing saves 20%. Enterprise
              terms available for white-label, multi-tenant or volume above 100,000 dispatches per month.
            </p>
          </div>

          <div className="tier-grid">
            {tiers.map((t) => (
              <div key={t.name} className={`tier-card${t.featured ? " tier-featured" : ""}`}>
                {t.featured && (
                  <div style={{ position: "absolute", top: -1, left: "50%", transform: "translateX(-50%)", fontFamily: "var(--font-jetbrains),monospace", fontSize: 9, color: "var(--paper)", background: "var(--indigo-2)", padding: "4px 14px", borderRadius: "0 0 8px 8px", textTransform: "uppercase" as const, letterSpacing: "0.14em" }}>Most Popular</div>
                )}
                <div>
                  <div style={{ fontFamily: "var(--font-fraunces),Georgia,serif", fontVariationSettings: '"opsz" 72,"SOFT" 40', fontSize: 24, color: "var(--text)" }}>{t.name}</div>
                  <div style={{ marginTop: 14 }}>
                    <span style={{ fontFamily: "var(--font-fraunces),Georgia,serif", fontWeight: 300, fontVariationSettings: '"opsz" 144,"SOFT" 40', fontSize: 40, lineHeight: 1, letterSpacing: "-0.02em", color: "var(--text)" }}>{t.price}</span>
                    {t.unit && <span style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 11, color: "var(--text-muted)", textTransform: "uppercase" as const, letterSpacing: "0.08em", marginLeft: 8 }}>{t.unit}</span>}
                  </div>
                  <p style={{ fontSize: 13.5, color: "var(--text-soft)", lineHeight: 1.55, marginTop: 10 }}>{t.desc}</p>
                </div>
                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 9, borderTop: "1px solid var(--ink-line)", paddingTop: 20, marginTop: 20, flex: 1 }}>
                  {t.features.map((feat) => (
                    <li key={feat} style={{ fontSize: 13, color: "var(--text-soft)", display: "flex", gap: 10, alignItems: "flex-start", lineHeight: 1.5 }}>
                      <span style={{ color: "var(--violet)", flexShrink: 0, marginTop: 1 }}>→</span>
                      {feat}
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: 24 }}>
                  <Link href={t.ctaHref} className={t.featured ? "ajil-btn-primary-lg tier-cta-btn" : "ajil-btn-line-lg tier-cta-btn"}>
                    {t.cta}
                    {t.featured && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7" /></svg>}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "100px 0", borderBottom: "1px solid var(--ink-line)" }}>
        <div className="ajil-container-tight">
          <div style={{ marginBottom: 48 }}>
            <div className="meta-rule">Frequently Asked</div>
            <h2 className="display-l" style={{ marginTop: 18 }}>
              Common <span className="it">questions</span>.
            </h2>
          </div>

          <div style={{ borderTop: "1px solid var(--ink-line)" }}>
            {faqs.map((faq) => (
              <div key={faq.q} style={{ borderBottom: "1px solid var(--ink-line)", padding: "28px 0" }}>
                <div style={{ fontFamily: "var(--font-fraunces),Georgia,serif", fontWeight: 400, fontVariationSettings: '"opsz" 72,"SOFT" 40', fontSize: 20, letterSpacing: "-0.015em", color: "var(--text)", marginBottom: 12 }}>
                  {faq.q}
                </div>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: "var(--text-soft)", maxWidth: "72ch" }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "140px 0", textAlign: "center", borderBottom: "1px solid var(--ink-line)" }}>
        <div style={{ maxWidth: 780, margin: "0 auto", padding: "0 40px" }}>
          <h2 className="display-l">
            Try Ajil Dispatch <span className="it">free for 14 days</span>.
          </h2>
          <p className="lede" style={{ margin: "24px auto 36px", textAlign: "center" }}>
            Full Growth tier sandbox, sample data, white-label theming applied to your brand.
            Live within 24 hours. No credit card required.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="ajil-btn-primary-lg">
              Start free trial
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
            </Link>
            <Link href="/products" className="ajil-btn-line-lg">Browse other products</Link>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        .ajil-container { max-width: 1380px; margin: 0 auto; padding: 0 40px; }
        .ajil-container-tight { max-width: 1140px; margin: 0 auto; padding: 0 40px; }
        .section-head-grid { display: grid; grid-template-columns: .45fr .55fr; gap: 80px; align-items: end; }
        .pd-hero-grid { display: grid; grid-template-columns: 1.1fr .9fr; gap: 80px; align-items: start; }
        .feat-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .tier-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 24px; }
        .tier-card {
          background: var(--paper); border: 1px solid var(--ink-line);
          border-radius: 16px; padding: 32px;
          display: flex; flex-direction: column;
          position: relative;
          transition: all .35s cubic-bezier(.2,.7,.2,1);
        }
        .tier-card:hover { transform: translateY(-3px); border-color: var(--ink-line-bold); box-shadow: 0 24px 50px -24px rgba(10,14,31,.18); }
        .tier-featured { border-color: var(--indigo-2) !important; }
        .tier-cta-btn { display: flex; justify-content: center; }
        .bc-link:hover { color: var(--text) !important; }
        .ajil-btn-primary-lg {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 14px 22px; border-radius: 999px; font-size: 14.5px; font-weight: 600;
          background: var(--ink); color: var(--paper);
          box-shadow: 0 1px 0 rgba(255,255,255,.05) inset, 0 8px 24px -8px rgba(10,14,31,.4);
          transition: all .25s ease;
        }
        .ajil-btn-primary-lg:hover { transform: translateY(-1px); background: #0A1838; }
        .ajil-btn-line-lg {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 14px 22px; border-radius: 999px; font-size: 14.5px; font-weight: 500;
          border: 1px solid var(--ink-line-strong); color: var(--text);
          transition: all .25s ease;
        }
        .ajil-btn-line-lg:hover { background: rgba(10,14,31,.04); border-color: var(--ink-line-bold); }
        @media (max-width: 980px) {
          .pd-hero-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .feat-grid { grid-template-columns: repeat(2,1fr) !important; }
          .tier-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 880px) {
          .section-head-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
        }
        @media (max-width: 640px) {
          .feat-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 760px) {
          .ajil-container, .ajil-container-tight { padding: 0 22px !important; }
        }
      `}</style>
    </>
  );
}
