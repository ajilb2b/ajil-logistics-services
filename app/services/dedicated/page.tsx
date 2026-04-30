import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

const included = [
  { title: "Branded Fleet", desc: "Riders and vehicles in your livery, operating exclusively on your routes. No shared pool, no brand dilution." },
  { title: "Ringfenced Warehouses", desc: "Dedicated ambient, chilled and frozen zones in our hubs — or custom dark-store builds in your catchments." },
  { title: "Dark-Store Hubs", desc: "Micro-fulfilment positioned inside your delivery catchments. Sub-30-minute coverage without central warehouse compromises." },
  { title: "Named GM", desc: "A dedicated General Manager from the Ajil team — accountable to your leadership, present in your QBRs." },
  { title: "Custom Dispatch Platform", desc: "The full Ajil platform, white-labelled with your brand. Custom KPI dashboards, SLA thresholds and escalation workflows." },
  { title: "24/7 Operations Cover", desc: "Our command centre runs your dedicated operation around the clock — dispatchers, supervisors, exception handlers." },
];

const phases = [
  { phase: "Phase 1", title: "Brief & Blueprint", duration: "Weeks 1–2", desc: "We review your brief, delivery data and customer catchments. Output: a sized network blueprint and pricing model." },
  { phase: "Phase 2", title: "Fleet & Facility Setup", duration: "Weeks 3–6", desc: "Fleet sourced, branded and inspected. Warehouse or dark-store zones configured and stocked." },
  { phase: "Phase 3", title: "Platform Configuration", duration: "Weeks 5–8", desc: "Dispatch platform configured, white-labelled. Training for your in-house team. Integration with your order management system." },
  { phase: "Phase 4", title: "Go Live & Ramp", duration: "Weeks 8–12", desc: "Controlled go-live in one catchment. Ramp to full volume with daily operations reviews for the first 30 days." },
];

const fitProfiles = [
  { label: "Grocery & FMCG", desc: "500+ daily deliveries, cold-chain requirements, high brand sensitivity. Dedicated is the only model that protects the customer experience at scale." },
  { label: "QSR & Cloud Kitchens", desc: "Speed-to-door is part of the product. Shared networks introduce queue risk. Ringfenced capacity means no surge surprises." },
  { label: "E-Commerce Enterprise", desc: "Your 3PL relationship is a growth risk. A single Ajil dedicated contract — software, fleet, warehouse — removes the dependency." },
  { label: "Pharmacy & Healthcare", desc: "Controlled delivery windows, cold-chain, proof-of-delivery documentation. Dedicated gives you auditability that shared networks cannot." },
];

export default function DedicatedServicePage() {
  return (
    <>
      <Nav />

      {/* Breadcrumb */}
      <div style={{ padding: "24px 0", borderBottom: "1px solid var(--ink-line)", fontFamily: "var(--font-jetbrains),monospace", fontSize: 11, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.12em" }}>
        <div className="ajil-container">
          <Link href="/" style={{ color: "var(--text-muted)" }} className="bc-link">Home</Link>
          <span style={{ margin: "0 10px", color: "var(--text-faint)" }}>/</span>
          <Link href="/services" style={{ color: "var(--text-muted)" }} className="bc-link">Services</Link>
          <span style={{ margin: "0 10px", color: "var(--text-faint)" }}>/</span>
          <span style={{ color: "var(--text)" }}>Dedicated Logistics</span>
        </div>
      </div>

      {/* Page Header */}
      <header style={{ padding: "80px 0", borderBottom: "1px solid var(--ink-line)" }}>
        <div className="ajil-container">
          <div className="page-header-grid">
            <div>
              <div className="page-eyebrow">03 · Dedicated Logistics</div>
              <h1 className="display-xl" style={{ fontSize: "clamp(40px,6.5vw,96px)" }}>
                Your operation.<br /><span className="it">Our people.</span>
              </h1>
            </div>
            <div>
              <p className="lede">
                Capacity that operates exclusively for your business. Branded riders, ringfenced
                warehouses, dark-store hubs positioned in your customer catchments.{" "}
                <strong>The platform wears your colours — but the operations team is ours.</strong>
              </p>
              <div style={{ marginTop: 32, display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Link href="/contact" className="ajil-btn-primary-lg">
                  Discuss a dedicated brief
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Overview */}
      <section style={{ padding: "120px 0", borderBottom: "1px solid var(--ink-line)" }}>
        <div className="ajil-container">
          <div className="overview-grid">
            <div>
              <div className="meta-rule">In short</div>
              <div style={{ fontFamily: "var(--font-fraunces),Georgia,serif", fontWeight: 300, fontVariationSettings: '"opsz" 96,"SOFT" 40', fontSize: "clamp(32px,4vw,52px)", lineHeight: 1.05, letterSpacing: "-0.02em", marginTop: 24, marginBottom: 24, color: "var(--text)" }}>
                Engineered<br />for you alone.
              </div>
              <p className="lede">
                A ringfenced operation built around your delivery promise. Branded fleet.
                Cold-chain warehousing. A named GM. Quarterly business reviews. The full apparatus
                of a logistics function — without you having to build it from scratch.
              </p>
            </div>
            <div>
              <div className="meta-rule" style={{ marginBottom: 32 }}>When dedicated fits</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                {[
                  "Daily delivery volume above 300 orders",
                  "Brand experience is a product differentiator",
                  "You have cold-chain or controlled delivery requirements",
                  "You're replacing or consolidating existing 3PL contracts",
                  "You need audit-grade delivery documentation",
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, paddingBottom: 18, borderBottom: i < 4 ? "1px solid var(--ink-line)" : "none" }}>
                    <span style={{ color: "var(--violet)", flexShrink: 0 }}>→</span>
                    <span style={{ fontSize: 15, color: "var(--text-soft)", lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section style={{ padding: "120px 0", borderBottom: "1px solid var(--ink-line)" }}>
        <div className="ajil-container">
          <div className="section-head-grid" style={{ marginBottom: 48 }}>
            <div>
              <div className="meta-rule">What&apos;s Included</div>
              <h2 className="display-l" style={{ marginTop: 18 }}>
                A full <span className="it">operation</span>,<br />not a service.
              </h2>
            </div>
            <p className="lede">
              Dedicated logistics is a complete apparatus — people, fleet, warehouses, software and
              operations leadership. You bring the brief and the brand. We bring everything else.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 1, background: "var(--ink-line)", border: "1px solid var(--ink-line)", borderRadius: 18, overflow: "hidden" }} className="included-grid">
            {included.map((item) => (
              <div key={item.title} style={{ background: "var(--paper)", padding: "36px 32px", display: "flex", flexDirection: "column", gap: 14, minHeight: 200, transition: "background .3s ease" }} className="inc-cell">
                <h3 style={{ fontFamily: "var(--font-fraunces),Georgia,serif", fontWeight: 400, fontVariationSettings: '"opsz" 72,"SOFT" 40', fontSize: 20, letterSpacing: "-0.015em", color: "var(--text)" }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.65, color: "var(--text-soft)" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Onboarding Phases */}
      <section style={{ padding: "120px 0", borderBottom: "1px solid var(--ink-line)", background: "var(--paper-2)" }}>
        <div className="ajil-container">
          <div className="section-head-grid" style={{ marginBottom: 64 }}>
            <div>
              <div className="meta-rule">Onboarding</div>
              <h2 className="display-l" style={{ marginTop: 18 }}>
                Live in <span className="it">eight to twelve weeks</span>.
              </h2>
            </div>
            <p className="lede">
              From signed brief to live operation — the typical Ajil dedicated rollout runs in four
              phases. Detailed in your statement of work, governed by a joint steering committee.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 24 }} className="phases-grid">
            {phases.map((p) => (
              <div key={p.phase} style={{ background: "var(--paper)", border: "1px solid var(--ink-line)", borderRadius: 14, padding: 36 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                  <span style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 10, color: "var(--violet)", textTransform: "uppercase", letterSpacing: "0.14em" }}>{p.phase}</span>
                  <span style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 10, color: "var(--text-faint)", textTransform: "uppercase", letterSpacing: "0.1em" }}>{p.duration}</span>
                </div>
                <h3 style={{ fontFamily: "var(--font-fraunces),Georgia,serif", fontWeight: 400, fontVariationSettings: '"opsz" 72,"SOFT" 40', fontSize: 22, letterSpacing: "-0.015em", color: "var(--text)", marginBottom: 12 }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.65, color: "var(--text-soft)" }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Fit */}
      <section style={{ padding: "120px 0", borderBottom: "1px solid var(--ink-line)" }}>
        <div className="ajil-container">
          <div className="section-head-grid" style={{ marginBottom: 64 }}>
            <div>
              <div className="meta-rule">Best Fit</div>
              <h2 className="display-l" style={{ marginTop: 18 }}>
                Built for operators who<br /><span className="it">care about the details</span>.
              </h2>
            </div>
            <p className="lede">
              Dedicated logistics is the right fit when control, brand experience and scale converge.
              A few of the operator profiles we work with.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 24 }} className="fit-grid">
            {fitProfiles.map((f) => (
              <div key={f.label} style={{ padding: "36px 32px", border: "1px solid var(--ink-line)", borderRadius: 14 }}>
                <h3 style={{ fontFamily: "var(--font-fraunces),Georgia,serif", fontWeight: 400, fontVariationSettings: '"opsz" 72,"SOFT" 40', fontSize: 22, color: "var(--text)", marginBottom: 12, letterSpacing: "-0.015em" }}>
                  {f.label}
                </h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.65, color: "var(--text-soft)" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "140px 0", textAlign: "center", borderBottom: "1px solid var(--ink-line)" }}>
        <div style={{ maxWidth: 780, margin: "0 auto", padding: "0 40px" }}>
          <div className="meta-rule" style={{ justifyContent: "center" }}>Ready to move</div>
          <h2 className="display-l" style={{ marginTop: 18 }}>
            Ready to discuss a <span className="it">dedicated brief?</span>
          </h2>
          <p className="lede" style={{ margin: "24px auto 36px", textAlign: "center" }}>
            Tell us about your volume, your catchments, your customer promise. We&apos;ll come back
            with a sized blueprint and a working pricing model within five days.
          </p>
          <Link href="/contact" className="ajil-btn-primary-lg">
            Discuss a dedicated brief
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </section>

      <Footer />

      <style>{`
        .ajil-container { max-width: 1380px; margin: 0 auto; padding: 0 40px; }
        .page-header-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: end; }
        .section-head-grid { display: grid; grid-template-columns: .45fr .55fr; gap: 80px; align-items: end; }
        .overview-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start; }
        .included-grid { }
        .inc-cell:hover { background: var(--paper-2) !important; }
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
          .section-head-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
          .overview-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .included-grid { grid-template-columns: 1fr !important; }
          .phases-grid { grid-template-columns: 1fr !important; }
          .fit-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 760px) {
          .ajil-container { padding: 0 22px !important; }
        }
      `}</style>
    </>
  );
}
