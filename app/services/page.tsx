import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

const serviceRows = [
  {
    no: "01 / Software",
    href: "/services",
    title: "Logistics Delivery",
    titleItalic: " Management Software",
    desc: "License the full Ajil platform — TMS, WMS, dispatch console, driver and rider apps, branded customer tracking. Multi-tenant, white-label, API-first. Run with your own teams.",
    pills: ["TMS / WMS", "Driver App", "Branded Tracking", "API-First", "Multi-Tenant"],
    details: [
      "Full transport and warehouse management suite",
      "Dispatch console with real-time routing",
      "White-label customer tracking pages",
      "Multi-tenant architecture for enterprise deployments",
      "REST API with full webhook support",
    ],
  },
  {
    no: "02 / On-Demand",
    href: "/services",
    title: "On-Demand",
    titleItalic: " Logistics Network",
    desc: "Tap into our existing rider, vehicle and warehouse network on a pay-per-delivery basis. A ready-made GCC capacity layer, available the day you onboard. Software included.",
    pills: ["Same-Day", "Pay Per Drop", "Surge Capacity", "GCC Coverage"],
    details: [
      "Access to 2,800+ active riders across the GCC",
      "Pay-per-delivery pricing — no minimum contract",
      "Same-day and scheduled window delivery",
      "Built-in surge capacity for peak periods",
      "All software tools included at no extra cost",
    ],
  },
  {
    no: "03 / Dedicated",
    href: "/services/dedicated",
    title: "",
    titleItalic: "Dedicated",
    titleAfter: " Logistics",
    desc: "Capacity that operates exclusively for your business — branded fleet, ringfenced warehouse footprint, dark-store hubs in your catchments. The platform wears your colours.",
    pills: ["Branded Fleet", "Dark Stores", "Custom KPIs", "Ringfenced"],
    details: [
      "Fleet branded in your colours, operating only for you",
      "Dark-store hubs positioned in your delivery catchments",
      "Custom SLAs and performance KPI dashboards",
      "Dedicated dispatch and exception management team",
      "Ringfenced warehouse footprint with ambient/chilled/frozen zones",
    ],
  },
  {
    no: "04 / Managed",
    href: "/services",
    title: "Fully Managed",
    titleItalic: " Operations",
    desc: "We take ownership of your entire logistics function. Network design, hiring, warehouses, dark stores, fleet, dispatch — and a single accountable leadership team reporting to your KPIs.",
    pills: ["End-to-End", "Single Contract", "Named GM", "Full Accountability"],
    details: [
      "End-to-end logistics outsourcing under a single contract",
      "Named General Manager accountable to your board",
      "Ajil designs, hires, and operates the entire function",
      "Monthly operating reports against agreed KPIs",
      "Transparent cost pass-through on all third-party spend",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Nav />

      {/* Breadcrumb */}
      <div style={{ padding: "24px 0", borderBottom: "1px solid var(--ink-line)", fontFamily: "var(--font-jetbrains),monospace", fontSize: 11, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.12em" }}>
        <div className="ajil-container">
          <Link href="/" style={{ color: "var(--text-muted)", transition: "color .2s" }} className="bc-link">Home</Link>
          <span style={{ margin: "0 10px", color: "var(--text-faint)" }}>/</span>
          <span style={{ color: "var(--text)" }}>Services</span>
        </div>
      </div>

      {/* Page Header */}
      <header style={{ padding: "80px 0", borderBottom: "1px solid var(--ink-line)" }}>
        <div className="ajil-container">
          <div className="page-header-grid">
            <div>
              <div className="page-eyebrow">Services · Four Models</div>
              <h1 className="display-xl" style={{ fontSize: "clamp(40px,6.5vw,96px)" }}>
                How we<br /><span className="it">work together</span>.
              </h1>
            </div>
            <div>
              <p className="lede">
                Four engagement models — from software licence to fully outsourced operations. Each one is a complete solution. All four share the same platform, the same network, and the same team.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Service Rows */}
      <section style={{ padding: "120px 0" }}>
        <div className="ajil-container">
          {serviceRows.map((row, i) => (
            <div key={row.no}>
              <Link href={row.href} className="service-row-link">
                <div className="service-row-inner">
                  <div className="service-row-left">
                    <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 11, color: "var(--violet)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 20 }}>
                      {row.no}
                    </div>
                    <h2 style={{ fontFamily: "var(--font-fraunces),Georgia,serif", fontWeight: 400, fontVariationSettings: '"opsz" 72,"SOFT" 40', fontSize: "clamp(28px,3.4vw,44px)", lineHeight: 1.05, letterSpacing: "-0.025em", color: "var(--text)", marginBottom: 20 }}>
                      {row.titleItalic && (
                        <span style={{ fontStyle: "italic", fontVariationSettings: '"opsz" 96,"SOFT" 80', color: "var(--indigo-2)" }}>
                          {row.titleItalic}
                        </span>
                      )}
                      {row.title}
                      {row.titleAfter}
                    </h2>
                    <p style={{ fontSize: 16, lineHeight: 1.65, color: "var(--text-soft)", marginBottom: 24 }}>{row.desc}</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                      {row.pills.map((pill) => (
                        <span key={pill} style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 10, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.12em", padding: "6px 12px", borderRadius: 999, border: "1px solid var(--ink-line-strong)", background: "var(--paper-2)" }}>
                          {pill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="service-row-right">
                    <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                      {row.details.map((d) => (
                        <li key={d} style={{ display: "flex", alignItems: "flex-start", gap: 12, fontSize: 15, color: "var(--text-soft)", lineHeight: 1.5 }}>
                          <span style={{ color: "var(--violet)", flexShrink: 0, marginTop: 2 }}>→</span>
                          {d}
                        </li>
                      ))}
                    </ul>
                    <div style={{ marginTop: 32, display: "inline-flex", alignItems: "center", gap: 6, fontFamily: "var(--font-jetbrains),monospace", fontSize: 11, color: "var(--violet)", textTransform: "uppercase", letterSpacing: "0.12em" }}>
                      Learn more ↗
                    </div>
                  </div>
                </div>
              </Link>
              {i < serviceRows.length - 1 && <div className="rule" style={{ margin: 0 }} />}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "140px 0", textAlign: "center", borderTop: "1px solid var(--ink-line)", borderBottom: "1px solid var(--ink-line)" }}>
        <div style={{ maxWidth: 780, margin: "0 auto", padding: "0 40px" }}>
          <div className="meta-rule" style={{ justifyContent: "center" }}>Working session</div>
          <h2 className="display-l" style={{ marginTop: 18 }}>
            Not sure which model <span className="it">fits</span>?
          </h2>
          <p className="lede" style={{ margin: "24px auto 36px", textAlign: "center" }}>
            In a 30-minute working session, we will look at your real numbers and recommend the
            model that fits today — and the path to scale into the next one.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="ajil-btn-primary-lg">
              Book a working session
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        .ajil-container { max-width: 1380px; margin: 0 auto; padding: 0 40px; }
        .page-header-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: end; }
        .service-row-link { display: block; padding: 64px 0; transition: background .2s; }
        .service-row-link:hover { background: transparent; }
        .service-row-inner { display: grid; grid-template-columns: .9fr 1.1fr; gap: 80px; align-items: start; }
        .service-row-right { padding-top: 8px; }
        .bc-link:hover { color: var(--text) !important; }
        .ajil-btn-primary-lg {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 14px 22px; border-radius: 999px; font-size: 14.5px; font-weight: 600;
          background: var(--ink); color: var(--paper);
          box-shadow: 0 1px 0 rgba(255,255,255,.05) inset, 0 8px 24px -8px rgba(10,14,31,.4);
          transition: all .25s ease;
        }
        .ajil-btn-primary-lg:hover { transform: translateY(-1px); background: #0A1838; }
        @media (max-width: 880px) {
          .page-header-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .service-row-inner { grid-template-columns: 1fr !important; gap: 36px !important; }
        }
        @media (max-width: 760px) {
          .ajil-container { padding: 0 22px !important; }
          .service-row-link { padding: 48px 0 !important; }
        }
      `}</style>
    </>
  );
}
