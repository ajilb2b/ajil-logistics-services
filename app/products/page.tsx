import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

const products = [
  {
    href: "/products/dispatch",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
    tag: "live" as const,
    name: "Ajil Dispatch",
    url: "dispatch.ajilb2b.com",
    desc: "The full dispatch console — route planning, stacking logic, exception management, live re-routing, driver assignment. Used by our own operations team daily across thousands of routes.",
    features: ["Auto-routing with stacking logic", "Real-time fleet visibility", "Exception management workflows", "Multi-vehicle, multi-hub planning"],
    price: "QAR 1,200",
    priceUnit: "/ mo",
  },
  {
    href: "/products",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="6" cy="17" r="3" /><circle cx="18" cy="17" r="3" />
        <path d="M6 17l4-9 4 4h4M14 6l4 11" />
      </svg>
    ),
    tag: "live" as const,
    name: "Ajil Rider",
    url: "rider.ajilb2b.com",
    desc: "The mobile app every Ajil rider runs their day on. iOS + Android, offline-first, built-in earnings dashboard. White-label it, integrate with your dispatch, or use it standalone.",
    features: ["iOS + Android, offline-first", "Photo & signature proof of delivery", "Built-in earnings dashboard", "Multilingual: EN / AR / UR / FR"],
    price: "QAR 18",
    priceUnit: "/ rider / mo",
  },
  {
    href: "/products",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" />
      </svg>
    ),
    tag: "live" as const,
    name: "Ajil Track",
    url: "track.ajilb2b.com",
    desc: "White-label customer tracking pages, branded SMS notifications, ETA accuracy to ±2 minutes. Replace 17 vendor pages with one branded experience.",
    features: ["Customizable branded tracking pages", "SMS / WhatsApp / email channels", "Live driver location and ETA", "Customer feedback capture"],
    price: "QAR 0.40",
    priceUnit: "/ order",
  },
  {
    href: "/products",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M3 21V8l9-5 9 5v13" /><path d="M9 21V12h6v9" />
      </svg>
    ),
    tag: "beta" as const,
    name: "Ajil Warehouse",
    url: "wh.ajilb2b.com",
    desc: "Full-stack warehouse management — receiving, putaway, pick-pack-ship, returns. Designed for the GCC's ambient, chilled and frozen requirements.",
    features: ["Ambient / chilled / frozen support", "Barcode and RFID scanning", "Pick-pack-ship workflows", "Returns management"],
    price: "QAR 2,800",
    priceUnit: "/ mo",
  },
  {
    href: "/products",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
      </svg>
    ),
    tag: "live" as const,
    name: "Ajil Pickup",
    url: "pickup.ajilb2b.com",
    desc: "B2C self-pickup with smart lockers. Customer chooses a pickup point, receives a PIN, opens the locker. No missed deliveries, no re-delivery cost.",
    features: ["Smart locker network", "QR and PIN unlock", "Customer self-service portal", "Real-time locker monitoring"],
    price: "QAR 0.80",
    priceUnit: "/ pickup",
  },
  {
    href: "/products",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    tag: "soon" as const,
    name: "Ajil Insights",
    url: "insights.ajilb2b.com",
    desc: "Operations analytics platform — SLA dashboards, cost-per-drop analysis, route efficiency benchmarks, customer NPS correlation. Understand your logistics, not just track it.",
    features: ["SLA performance dashboards", "Cost-per-drop analysis", "Route efficiency benchmarks", "Customer satisfaction correlation"],
    price: "Coming soon",
    priceUnit: "",
  },
];

function Tag({ type }: { type: "live" | "beta" | "soon" }) {
  if (type === "live") return <span style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 9, color: "#10A570", border: "1px solid rgba(16,165,112,.25)", background: "rgba(16,165,112,.06)", padding: "3px 8px", borderRadius: 999, textTransform: "uppercase", letterSpacing: "0.1em" }}>Live</span>;
  if (type === "beta") return <span style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 9, color: "#B5841A", border: "1px solid rgba(181,132,26,.25)", background: "rgba(181,132,26,.06)", padding: "3px 8px", borderRadius: 999, textTransform: "uppercase", letterSpacing: "0.1em" }}>Beta</span>;
  return <span style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 9, color: "var(--text-faint)", border: "1px solid var(--ink-line)", padding: "3px 8px", borderRadius: 999, textTransform: "uppercase", letterSpacing: "0.1em" }}>Soon</span>;
}

export default function ProductsPage() {
  return (
    <>
      <Nav />

      {/* Breadcrumb */}
      <div style={{ padding: "24px 0", borderBottom: "1px solid var(--ink-line)", fontFamily: "var(--font-jetbrains),monospace", fontSize: 11, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.12em" }}>
        <div className="ajil-container">
          <Link href="/" style={{ color: "var(--text-muted)" }} className="bc-link">Home</Link>
          <span style={{ margin: "0 10px", color: "var(--text-faint)" }}>/</span>
          <span style={{ color: "var(--text)" }}>Products</span>
        </div>
      </div>

      {/* Page Header */}
      <header style={{ padding: "80px 0", borderBottom: "1px solid var(--ink-line)" }}>
        <div className="ajil-container">
          <div className="page-header-grid">
            <div>
              <div className="page-eyebrow">The Ajil Catalogue · Six Products</div>
              <h1 className="display-xl" style={{ fontSize: "clamp(40px,6.5vw,96px)" }}>
                Sold separately.<br /><span className="it">Designed together.</span>
              </h1>
            </div>
            <div>
              <p className="lede">
                Each Ajil product is a standalone module on its own subdomain — self-serve,
                API-first, designed to integrate with what you already run.{" "}
                <strong>Buy what you need, scale into the rest when ready.</strong>
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Products Grid */}
      <section style={{ padding: "120px 0" }}>
        <div className="ajil-container">
          <div className="products-grid">
            {products.map((p) => (
              <Link key={p.name} href={p.href} className="product-card">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 32 }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: 12,
                    background: "var(--paper-2)", border: "1px solid var(--ink-line)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "var(--ink-soft)",
                  }}>
                    {p.icon}
                  </div>
                  <Tag type={p.tag} />
                </div>
                <div style={{ marginBottom: 12 }}>
                  <h3 style={{ fontFamily: "var(--font-fraunces),Georgia,serif", fontWeight: 400, fontVariationSettings: '"opsz" 72,"SOFT" 40', fontSize: 24, letterSpacing: "-0.015em", color: "var(--text)", marginBottom: 4 }}>
                    {p.name}
                  </h3>
                  <span style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 10, color: "var(--violet)", letterSpacing: "0.1em" }}>
                    {p.url}
                  </span>
                </div>
                <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "var(--text-soft)", flex: 1 }}>{p.desc}</p>
                <ul style={{ listStyle: "none", padding: 0, margin: "20px 0", display: "flex", flexDirection: "column", gap: 8 }}>
                  {p.features.map((f) => (
                    <li key={f} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "var(--text-muted)" }}>
                      <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--violet)", flexShrink: 0 }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 20, borderTop: "1px solid var(--ink-line)", marginTop: "auto" }}>
                  <div>
                    {p.priceUnit && <span style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 10, color: "var(--text-faint)", marginRight: 4 }}>From</span>}
                    <span style={{ fontFamily: "var(--font-fraunces),Georgia,serif", fontWeight: 400, fontSize: 18, color: "var(--text)", fontVariationSettings: '"opsz" 72,"SOFT" 40' }}>{p.price}</span>
                    {p.priceUnit && <span style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 12, color: "var(--text-faint)", marginLeft: 2 }}>{p.priceUnit}</span>}
                  </div>
                  <span style={{ fontSize: 13, color: "var(--text-muted)", transition: "color .2s" }} className="product-learn-more">Learn More →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        .ajil-container { max-width: 1380px; margin: 0 auto; padding: 0 40px; }
        .page-header-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: end; }
        .products-grid {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;
        }
        .product-card {
          background: var(--paper); border: 1px solid var(--ink-line);
          border-radius: 14px; padding: 32px;
          display: flex; flex-direction: column;
          transition: all .35s cubic-bezier(.2,.7,.2,1);
          position: relative;
        }
        .product-card:hover {
          border-color: var(--ink-line-bold);
          transform: translateY(-3px);
          box-shadow: 0 24px 50px -24px rgba(10,14,31,.18);
        }
        .product-card:hover .product-learn-more { color: var(--violet) !important; }
        .bc-link:hover { color: var(--text) !important; }
        @media (max-width: 980px) {
          .products-grid { grid-template-columns: repeat(2,1fr) !important; }
          .page-header-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
        @media (max-width: 760px) {
          .ajil-container { padding: 0 22px !important; }
        }
        @media (max-width: 540px) {
          .products-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
