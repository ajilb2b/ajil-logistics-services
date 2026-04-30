"use client";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const products = [
  {
    num: "01",
    name: "Ajil Dispatch",
    tag: "Web Platform",
    status: "live" as const,
    href: "https://dispatch.ajilb2b.com",
    ctaLabel: "Open Platform",
    ctas: [
      { label: "Start Free Trial", href: "#pricing", style: "primary", note: "14 days free · no credit card" },
      { label: "Open Platform", href: "https://dispatch.ajilb2b.com", style: "ghost", note: "Login to your account" },
    ],
    headline: "Command centre for your entire delivery operation.",
    desc: "A single console where your team manages orders, riders, clients and shifts. Connect it to your brand partners — orders flow in automatically. Or keep it standalone — your dispatchers handle everything from one screen.",
    features: [
      "Auto & manual order assignment",
      "Live operations map",
      "Shift & roster management",
      "Client portals with custom SLAs",
      "Brand integrations (POS, Talabat, Noon)",
      "Rider & vehicle management",
    ],
  },
  {
    num: "02",
    name: "Ajil Rider App",
    tag: "iOS & Android",
    status: "live" as const,
    href: null,
    ctaLabel: "App Store & Play Store — coming soon",
    headline: "The app every rider runs their shift on.",
    desc: "iOS and Android, offline-first. Riders receive orders from Dispatch, navigate with one tap, capture proof of delivery and track their earnings in real time — all in one app.",
    features: [
      "Auto-receive orders from Dispatch",
      "Photo & signature proof of delivery",
      "Earnings & performance dashboard",
      "Works offline",
      "Multilingual: EN / AR / UR / FR",
      "In-app chat with dispatch team",
    ],
  },
  {
    num: "03",
    name: "Coming Soon",
    tag: "— ",
    status: "soon" as const,
    href: null,
    ctaLabel: null,
    headline: "More products launching in 2026.",
    desc: "We're building more tools for the logistics stack. Get in touch to learn what's coming next.",
    features: [],
  },
  {
    num: "04",
    name: "Coming Soon",
    tag: "— ",
    status: "soon" as const,
    href: null,
    ctaLabel: null,
    headline: "",
    desc: "",
    features: [],
  },
  {
    num: "05",
    name: "Coming Soon",
    tag: "— ",
    status: "soon" as const,
    href: null,
    ctaLabel: null,
    headline: "",
    desc: "",
    features: [],
  },
];

const plans = [
  {
    name: "Starter",
    price: "QAR 1,200",
    period: "/ month",
    desc: "For operators launching their first delivery operation.",
    limit: "Up to 500 orders / month · Up to 10 riders",
    features: [
      "Dispatch console (web)",
      "Manual & auto assignment",
      "1 client workspace",
      "Basic reporting",
      "Email support",
    ],
    cta: "Get Started",
    href: "https://dispatch.ajilb2b.com",
    highlight: false,
  },
  {
    name: "Growth",
    price: "QAR 3,500",
    period: "/ month",
    desc: "For multi-client operations scaling across zones.",
    limit: "Up to 5,000 orders / month · Unlimited riders",
    features: [
      "Everything in Starter",
      "Up to 10 client workspaces",
      "Shift & roster management",
      "Brand integrations",
      "Live operations map",
      "SLA alerting",
      "Priority support",
    ],
    cta: "Start Free Trial",
    href: "https://dispatch.ajilb2b.com",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "For large-scale operations across multiple markets.",
    limit: "Unlimited orders · Unlimited clients",
    features: [
      "Everything in Growth",
      "Custom integrations",
      "Dedicated account manager",
      "White-label branding",
      "Private cloud / on-premise",
      "SLA-backed uptime",
      "24 / 7 phone support",
    ],
    cta: "Talk to Sales",
    href: "/#cta",
    highlight: false,
  },
];

export default function ProductsPage() {
  const liveProducts = products.filter((p) => p.status === "live");
  const soonProducts = products.filter((p) => p.status === "soon");

  return (
    <>
      <Nav />

      {/* ── HERO ── */}
      <header className="pp-hero">
        <div className="pp-container">
          <p className="pp-eyebrow">Product Suite</p>
          <h1 className="pp-h1">
            Tools built for<br /><em>logistics operations</em>.
          </h1>
          <p className="pp-lead">
            Two products live today. More in 2026. Everything built to work together — from the dispatch console to the rider's pocket.
          </p>
          <div className="pp-hero-stats">
            <div className="pp-stat"><span className="pp-stat-n">2</span><span className="pp-stat-l">Live products</span></div>
            <div className="pp-stat-div" />
            <div className="pp-stat"><span className="pp-stat-n">3</span><span className="pp-stat-l">Coming soon</span></div>
            <div className="pp-stat-div" />
            <div className="pp-stat"><span className="pp-stat-n">1</span><span className="pp-stat-l">Unified platform</span></div>
          </div>
        </div>
      </header>

      {/* ── LIVE PRODUCTS ── */}
      <section className="pp-section">
        <div className="pp-container">
          <div className="pp-section-label">
            <span className="pp-dot pp-dot-live" />
            Live now
          </div>
          <div className="pp-live-grid">
            {liveProducts.map((p) => (
              <div className="pp-product-card" key={p.num}>
                <div className="pp-card-top">
                  <div className="pp-card-meta">
                    <span className="pp-card-num">{p.num}</span>
                    <span className="pp-card-tag">{p.tag}</span>
                    <span className="pp-badge-live">Live</span>
                  </div>
                  <h2 className="pp-card-name">{p.name}</h2>
                  <p className="pp-card-headline">{p.headline}</p>
                  <p className="pp-card-desc">{p.desc}</p>
                </div>
                <ul className="pp-feature-list">
                  {p.features.map((f) => (
                    <li key={f}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="pp-card-footer">
                  {"ctas" in p && p.ctas ? (
                    <div className="pp-card-ctas">
                      {p.ctas.map((c) => (
                        <div className="pp-card-cta-item" key={c.label}>
                          <a
                            href={c.href}
                            target={c.href.startsWith("http") ? "_blank" : undefined}
                            rel="noopener noreferrer"
                            className={c.style === "primary" ? "pp-card-cta" : "pp-card-cta-outline"}
                          >
                            {c.label}
                            {c.style === "primary" && (
                              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
                            )}
                          </a>
                          <span className="pp-cta-note">{c.note}</span>
                        </div>
                      ))}
                    </div>
                  ) : p.href ? (
                    <a href={p.href} target="_blank" rel="noopener noreferrer" className="pp-card-cta">
                      {p.ctaLabel}
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                    </a>
                  ) : (
                    <span className="pp-card-cta-muted">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" /><path d="M12 18h.01" /></svg>
                      {p.ctaLabel}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMING SOON ── */}
      <section className="pp-section pp-section-alt">
        <div className="pp-container">
          <div className="pp-section-label">
            <span className="pp-dot pp-dot-soon" />
            Coming soon
          </div>
          <div className="pp-soon-grid">
            {soonProducts.map((p) => (
              <div className="pp-soon-card" key={p.num}>
                <span className="pp-soon-num">{p.num}</span>
                <div className="pp-soon-lock">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>
                </div>
                <p className="pp-soon-label">
                  {p.num === "03" ? "More products launching in 2026. Get in touch to learn what's next." : "Details coming soon."}
                </p>
              </div>
            ))}
          </div>
          <p className="pp-soon-note">
            Have a product idea or logistics tool you want to see?{" "}
            <a href="/#cta" className="pp-soon-link">Talk to us →</a>
          </p>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="pp-section" id="pricing">
        <div className="pp-container">
          <div className="pp-pricing-head">
            <p className="pp-eyebrow">Pricing · Ajil Dispatch</p>
            <h2 className="pp-h2">Simple, transparent pricing.</h2>
            <p className="pp-lead" style={{ marginBottom: 0 }}>
              All plans include Dispatch and the Rider App. No setup fees. Cancel any time.
            </p>
          </div>

          <div className="pp-plans-grid">
            {plans.map((plan) => (
              <div className={`pp-plan${plan.highlight ? " pp-plan-hi" : ""}`} key={plan.name}>
                {plan.highlight && <div className="pp-plan-badge">Most Popular</div>}
                <div className="pp-plan-name">{plan.name}</div>
                <div className="pp-plan-price">
                  {plan.price}
                  {plan.period && <span className="pp-plan-period">{plan.period}</span>}
                </div>
                <p className="pp-plan-desc">{plan.desc}</p>
                <div className="pp-plan-limit">{plan.limit}</div>
                <ul className="pp-plan-features">
                  {plan.features.map((f) => (
                    <li key={f}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={plan.href}
                  target={plan.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className={plan.highlight ? "pp-plan-cta-solid" : "pp-plan-cta-outline"}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>

          <p className="pp-pricing-note">
            All prices in QAR · Annual billing available at 15% discount ·{" "}
            <a href="/#cta" className="pp-soon-link">Custom quote →</a>
          </p>
        </div>
      </section>

      <Footer />

      <style>{`
        .pp-container { max-width: 1440px; margin: 0 auto; padding: 0 clamp(24px, 6vw, 88px); }

        /* Hero */
        .pp-hero { padding: 160px 0 96px; background: #fff; border-bottom: 1px solid var(--line); }
        .pp-eyebrow { font-family: var(--font-geist-mono), monospace; font-size: 11px; font-weight: 500; letter-spacing: .18em; text-transform: uppercase; color: var(--indigo); display: inline-flex; align-items: center; gap: 10px; margin-bottom: 24px; }
        .pp-eyebrow::before { content: ""; width: 24px; height: 1px; background: var(--indigo); }
        .pp-h1 { font-size: clamp(44px, 5.5vw, 84px); line-height: .95; letter-spacing: -.045em; font-weight: 600; color: var(--ink); margin: 0 0 28px; }
        .pp-h1 em, .pp-h2 em { font-family: var(--font-instrument), serif; font-style: italic; font-weight: 400; background: linear-gradient(115deg, #1B1A68, #5A4BFF); -webkit-background-clip: text; background-clip: text; color: transparent; }
        .pp-h2 { font-size: clamp(32px, 3.5vw, 56px); line-height: 1; letter-spacing: -.04em; font-weight: 600; color: var(--ink); margin: 0 0 20px; }
        .pp-lead { font-size: clamp(15px, 1.2vw, 18px); color: var(--muted); max-width: 54ch; line-height: 1.7; margin-bottom: 48px; }
        .pp-hero-stats { display: flex; align-items: center; gap: 32px; flex-wrap: wrap; }
        .pp-stat { display: flex; align-items: baseline; gap: 8px; }
        .pp-stat-n { font-family: var(--font-instrument), serif; font-style: italic; font-size: 36px; color: var(--ink); letter-spacing: -.03em; line-height: 1; }
        .pp-stat-l { font-size: 13px; color: var(--muted); }
        .pp-stat-div { width: 1px; height: 28px; background: var(--line-strong); flex-shrink: 0; }

        /* Sections */
        .pp-section { padding: 96px 0; background: #fff; border-bottom: 1px solid var(--line); }
        .pp-section-alt { background: var(--paper-2); }
        .pp-section-label { display: inline-flex; align-items: center; gap: 8px; font-family: var(--font-geist-mono), monospace; font-size: 11px; font-weight: 500; letter-spacing: .14em; text-transform: uppercase; color: var(--muted); margin-bottom: 40px; }
        .pp-dot { width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0; }
        .pp-dot-live { background: #0E9D6E; box-shadow: 0 0 8px rgba(14,157,110,.5); }
        .pp-dot-soon { background: var(--muted-2); }

        /* Live products grid — 2 cols */
        .pp-live-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
        .pp-product-card { border: 1px solid var(--line-strong); border-radius: 20px; padding: 40px 40px 36px; background: #fff; display: flex; flex-direction: column; gap: 0; transition: box-shadow .25s ease, border-color .25s ease; }
        .pp-product-card:hover { border-color: rgba(27,26,104,.25); box-shadow: 0 16px 48px -16px rgba(27,26,104,.14); }

        .pp-card-top { margin-bottom: 28px; }
        .pp-card-meta { display: flex; align-items: center; gap: 10px; margin-bottom: 20px; }
        .pp-card-num { font-family: var(--font-geist-mono), monospace; font-size: 11px; font-weight: 600; color: var(--muted-2); letter-spacing: .1em; }
        .pp-card-tag { font-family: var(--font-geist-mono), monospace; font-size: 10px; font-weight: 500; letter-spacing: .12em; text-transform: uppercase; color: var(--muted-2); padding: 3px 10px; border: 1px solid var(--line-strong); border-radius: 999px; }
        .pp-badge-live { font-family: var(--font-geist-mono), monospace; font-size: 9px; font-weight: 600; letter-spacing: .12em; text-transform: uppercase; background: rgba(14,157,110,.1); color: #0E9D6E; border: 1px solid rgba(14,157,110,.25); padding: 3px 9px; border-radius: 999px; }

        .pp-card-name { font-size: clamp(22px, 2.2vw, 32px); font-weight: 600; letter-spacing: -.03em; color: var(--ink); margin-bottom: 10px; }
        .pp-card-headline { font-size: clamp(14px, 1.1vw, 17px); font-weight: 500; color: var(--ink); margin-bottom: 12px; opacity: .75; }
        .pp-card-desc { font-size: 14px; color: var(--muted); line-height: 1.65; }

        .pp-feature-list { list-style: none; padding: 0; margin: 0 0 32px; display: grid; grid-template-columns: 1fr 1fr; gap: 10px 20px; border-top: 1px solid var(--line); padding-top: 24px; flex: 1; }
        .pp-feature-list li { display: flex; align-items: flex-start; gap: 8px; font-size: 13px; color: var(--ink); line-height: 1.4; }
        .pp-feature-list svg { flex-shrink: 0; margin-top: 2px; color: var(--indigo); }

        .pp-card-footer { margin-top: auto; }
        .pp-card-cta { display: inline-flex; align-items: center; gap: 9px; background: var(--ink); color: #fff; font-weight: 600; font-size: 14px; padding: 12px 22px; border-radius: 999px; transition: all .25s cubic-bezier(.2,.7,.2,1); box-shadow: 0 8px 24px -10px rgba(27,26,104,.45); }
        .pp-card-cta:hover { background: var(--indigo); transform: translateY(-1px); }
        .pp-card-cta-muted { display: inline-flex; align-items: center; gap: 9px; font-family: var(--font-geist-mono), monospace; font-size: 11px; color: var(--muted-2); padding: 10px 18px; border: 1px solid var(--line); border-radius: 999px; letter-spacing: .06em; }
        .pp-card-ctas { display: flex; gap: 12px; flex-wrap: wrap; }
        .pp-card-cta-item { display: flex; flex-direction: column; gap: 6px; }
        .pp-card-cta-outline { display: inline-flex; align-items: center; gap: 8px; background: transparent; color: var(--ink); font-weight: 600; font-size: 14px; padding: 12px 22px; border-radius: 999px; border: 1px solid var(--line-strong); transition: all .25s ease; white-space: nowrap; }
        .pp-card-cta-outline:hover { background: var(--paper-3); border-color: rgba(27,26,104,.35); }
        .pp-cta-note { font-family: var(--font-geist-mono), monospace; font-size: 10px; color: var(--muted-2); letter-spacing: .06em; padding-left: 4px; }

        /* Coming soon cards */
        .pp-soon-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 40px; }
        .pp-soon-card { border: 1px dashed var(--line-strong); border-radius: 20px; padding: 36px 32px; display: flex; flex-direction: column; gap: 16px; background: rgba(255,255,255,.5); min-height: 180px; justify-content: space-between; }
        .pp-soon-num { font-family: var(--font-geist-mono), monospace; font-size: 11px; font-weight: 600; color: var(--muted-2); letter-spacing: .1em; }
        .pp-soon-lock { width: 38px; height: 38px; border-radius: 12px; border: 1px solid var(--line-strong); display: flex; align-items: center; justify-content: center; color: var(--muted-2); background: var(--paper); }
        .pp-soon-label { font-size: 13px; color: var(--muted-2); line-height: 1.6; }
        .pp-soon-note { font-size: 14px; color: var(--muted-2); }
        .pp-soon-link { color: var(--indigo); font-weight: 500; }
        .pp-soon-link:hover { text-decoration: underline; }

        /* Pricing */
        .pp-pricing-head { max-width: 640px; margin-bottom: 64px; }
        .pp-plans-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; align-items: start; }
        .pp-plan { background: #fff; border: 1px solid var(--line-strong); border-radius: 20px; padding: 36px 32px; display: flex; flex-direction: column; position: relative; }
        .pp-plan-hi { background: var(--ink); border-color: var(--ink); color: #fff; box-shadow: 0 24px 60px -20px rgba(27,26,104,.5); }
        .pp-plan-badge { position: absolute; top: -12px; left: 50%; transform: translateX(-50%); font-family: var(--font-geist-mono), monospace; font-size: 10px; font-weight: 600; letter-spacing: .12em; text-transform: uppercase; background: var(--indigo); color: #fff; padding: 4px 14px; border-radius: 999px; white-space: nowrap; }
        .pp-plan-name { font-family: var(--font-geist-mono), monospace; font-size: 11px; font-weight: 600; letter-spacing: .14em; text-transform: uppercase; color: var(--muted); margin-bottom: 16px; }
        .pp-plan-hi .pp-plan-name { color: rgba(255,255,255,.5); }
        .pp-plan-price { font-family: var(--font-instrument), serif; font-style: italic; font-size: 46px; line-height: 1; letter-spacing: -.03em; color: var(--ink); margin-bottom: 8px; }
        .pp-plan-hi .pp-plan-price { color: #fff; }
        .pp-plan-period { font-family: var(--font-geist-mono), monospace; font-style: normal; font-size: 13px; color: var(--muted); margin-left: 4px; }
        .pp-plan-hi .pp-plan-period { color: rgba(255,255,255,.45); }
        .pp-plan-desc { font-size: 14px; color: var(--muted); line-height: 1.5; margin-bottom: 10px; }
        .pp-plan-hi .pp-plan-desc { color: rgba(255,255,255,.55); }
        .pp-plan-limit { font-family: var(--font-geist-mono), monospace; font-size: 10px; color: var(--indigo); background: rgba(27,26,104,.06); border: 1px solid rgba(27,26,104,.12); padding: 5px 12px; border-radius: 999px; display: inline-block; margin-bottom: 24px; letter-spacing: .05em; line-height: 1.5; }
        .pp-plan-hi .pp-plan-limit { color: rgba(255,255,255,.7); background: rgba(255,255,255,.1); border-color: rgba(255,255,255,.15); }
        .pp-plan-features { list-style: none; padding: 0; margin: 0 0 28px; display: flex; flex-direction: column; gap: 10px; border-top: 1px solid var(--line); padding-top: 20px; flex: 1; }
        .pp-plan-hi .pp-plan-features { border-color: rgba(255,255,255,.1); }
        .pp-plan-features li { display: flex; align-items: flex-start; gap: 9px; font-size: 14px; color: var(--ink); line-height: 1.4; }
        .pp-plan-hi .pp-plan-features li { color: rgba(255,255,255,.85); }
        .pp-plan-features svg { flex-shrink: 0; margin-top: 2px; color: var(--indigo); }
        .pp-plan-hi .pp-plan-features svg { color: rgba(255,255,255,.55); }
        .pp-plan-cta-solid { display: block; text-align: center; background: #fff; color: var(--ink); font-weight: 600; font-size: 14px; padding: 13px 20px; border-radius: 999px; transition: all .25s ease; }
        .pp-plan-cta-solid:hover { background: rgba(255,255,255,.88); }
        .pp-plan-cta-outline { display: block; text-align: center; background: transparent; color: var(--ink); font-weight: 600; font-size: 14px; padding: 13px 20px; border-radius: 999px; border: 1px solid var(--line-strong); transition: all .25s ease; }
        .pp-plan-cta-outline:hover { background: var(--paper-3); border-color: var(--line-dark); }
        .pp-pricing-note { text-align: center; margin-top: 36px; font-size: 13px; color: var(--muted-2); }

        /* Responsive */
        @media (max-width: 1100px) {
          .pp-plans-grid { grid-template-columns: 1fr; max-width: 480px; }
        }
        @media (max-width: 900px) {
          .pp-live-grid { grid-template-columns: 1fr; }
          .pp-soon-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 640px) {
          .pp-hero { padding: 120px 0 64px; }
          .pp-section { padding: 72px 0; }
          .pp-soon-grid { grid-template-columns: 1fr; }
          .pp-feature-list { grid-template-columns: 1fr; }
          .pp-plans-grid { max-width: 100%; }
          .pp-product-card { padding: 28px 24px; }
        }
      `}</style>
    </>
  );
}
