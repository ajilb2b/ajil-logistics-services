import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

interface Zone { city: string; name: string; }
interface ServiceCard { num: string; name: string; desc: string; href: string; }
interface Stat { num: string; lbl: string; }

export interface MarketPageProps {
  country: string;
  heroMain: string;
  heroItalic: string;
  lede: string;
  stats: Stat[];
  coverageIntro: string;
  zones: Zone[];
  services: ServiceCard[];
  ctaLine: string;
  ctaBody: string;
  ctaButton: string;
}

export default function MarketPage(p: MarketPageProps) {
  return (
    <>
      <Nav />

      {/* Breadcrumb */}
      <div style={{ padding: "24px 0", borderBottom: "1px solid var(--ink-line)", fontFamily: "var(--font-jetbrains),monospace", fontSize: 11, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.12em" }}>
        <div className="mkt-container">
          <Link href="/" style={{ color: "var(--text-muted)" }} className="mkt-bc-link">Home</Link>
          <span style={{ margin: "0 10px", color: "var(--text-faint)" }}>/</span>
          <span style={{ color: "var(--text)" }}>{p.country}</span>
        </div>
      </div>

      {/* Hero */}
      <header style={{ padding: "80px 0", borderBottom: "1px solid var(--ink-line)" }}>
        <div className="mkt-container">
          <span className="mkt-eyebrow">GCC Markets · {p.country}</span>
          <h1 className="mkt-h1">
            {p.heroMain}<br />
            <span className="mkt-it">{p.heroItalic}</span>
          </h1>
          <p className="mkt-lede">{p.lede}</p>
          <div className="mkt-stats">
            {p.stats.map((s) => (
              <div key={s.lbl}>
                <div className="mkt-stat-num">{s.num}</div>
                <div className="mkt-stat-lbl">{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Coverage */}
      <section style={{ padding: "80px 0", borderBottom: "1px solid var(--ink-line)" }}>
        <div className="mkt-container">
          <span className="mkt-section-tag">Coverage</span>
          <h2 className="mkt-h2">
            {p.country} coverage zones &amp; <span className="mkt-it">delivery corridors</span>.
          </h2>
          <p style={{ fontSize: 15, color: "var(--text-soft)", lineHeight: 1.7, maxWidth: "68ch", marginBottom: 40 }}>
            {p.coverageIntro}
          </p>
          <div className="mkt-zones">
            {p.zones.map((z) => (
              <div key={z.name} className="mkt-zone">
                <div className="mkt-zone-city">{z.city}</div>
                <div className="mkt-zone-name">{z.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: "80px 0", borderBottom: "1px solid var(--ink-line)", background: "var(--paper-2)" }}>
        <div className="mkt-container">
          <span className="mkt-section-tag">Services in {p.country}</span>
          <h2 className="mkt-h2">
            All four service models <span className="mkt-it">available in {p.country}</span>.
          </h2>
          <div className="mkt-services">
            {p.services.map((s) => (
              <Link key={s.num} href={s.href} className="mkt-svc-card">
                <div className="mkt-svc-num">{s.num}</div>
                <div className="mkt-svc-name">{s.name}</div>
                <p className="mkt-svc-desc">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "100px 0", textAlign: "center" }}>
        <div style={{ maxWidth: 640, margin: "0 auto", padding: "0 40px" }}>
          <h2 className="mkt-h2" style={{ marginBottom: 16 }}>
            {p.ctaLine.split(" in ")[0]} in <span className="mkt-it">{p.ctaLine.split(" in ")[1]}</span>
          </h2>
          <p style={{ fontSize: 15, color: "var(--text-soft)", lineHeight: 1.7, marginBottom: 36 }}>
            {p.ctaBody}
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="mkt-btn-primary">
              {p.ctaButton}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
            </Link>
            <Link href="/services" className="mkt-btn-ghost">See service models</Link>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        .mkt-container { max-width: 1380px; margin: 0 auto; padding: 0 40px; }
        .mkt-eyebrow { font-family: var(--font-jetbrains),monospace; font-size: 11px; color: var(--violet); text-transform: uppercase; letter-spacing: 0.16em; margin-bottom: 20px; display: block; }
        .mkt-it { font-family: var(--font-fraunces),Georgia,serif; font-style: italic; font-weight: 300; }
        .mkt-h1 { font-size: clamp(38px,6.5vw,88px); line-height: 1.02; letter-spacing: -0.04em; font-weight: 500; color: var(--ink); margin-bottom: 24px; }
        .mkt-lede { font-size: clamp(15px,1.3vw,18px); color: var(--text-soft); max-width: 62ch; line-height: 1.7; margin-bottom: 40px; }
        .mkt-stats { display: flex; gap: 40px; flex-wrap: wrap; padding-top: 32px; border-top: 1px solid var(--ink-line); }
        .mkt-stat-num { font-family: var(--font-fraunces),Georgia,serif; font-size: 28px; font-weight: 300; color: var(--ink); letter-spacing: -0.02em; line-height: 1; }
        .mkt-stat-lbl { font-family: var(--font-jetbrains),monospace; font-size: 10px; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.1em; margin-top: 5px; }
        .mkt-section-tag { font-family: var(--font-jetbrains),monospace; font-size: 11px; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.14em; margin-bottom: 12px; display: block; }
        .mkt-h2 { font-size: clamp(24px,3.2vw,40px); line-height: 1.1; letter-spacing: -0.03em; font-weight: 500; color: var(--ink); margin-bottom: 24px; }
        .mkt-zones { display: grid; grid-template-columns: repeat(4,1fr); gap: 1px; background: var(--ink-line); border: 1px solid var(--ink-line); border-radius: 14px; overflow: hidden; }
        .mkt-zone { background: var(--paper); padding: 20px 22px; }
        .mkt-zone-city { font-family: var(--font-jetbrains),monospace; font-size: 9px; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.12em; margin-bottom: 5px; }
        .mkt-zone-name { font-size: 15px; font-weight: 500; color: var(--text); }
        .mkt-services { display: grid; grid-template-columns: repeat(2,1fr); gap: 20px; }
        .mkt-svc-card { padding: 28px 32px; border: 1px solid var(--ink-line); border-radius: 14px; background: var(--paper); transition: all .25s ease; display: block; }
        .mkt-svc-card:hover { border-color: rgba(90,75,255,.22); transform: translateY(-2px); box-shadow: 0 12px 30px -12px rgba(10,14,31,.14); }
        .mkt-svc-num { font-family: var(--font-jetbrains),monospace; font-size: 10px; color: var(--indigo); letter-spacing: 0.1em; margin-bottom: 10px; }
        .mkt-svc-name { font-size: 17px; font-weight: 500; color: var(--text); margin-bottom: 8px; letter-spacing: -0.02em; }
        .mkt-svc-desc { font-size: 13.5px; color: var(--text-soft); line-height: 1.65; }
        .mkt-bc-link:hover { color: var(--text) !important; }
        .mkt-btn-primary { display: inline-flex; align-items: center; gap: 8px; padding: 14px 24px; border-radius: 999px; font-size: 14.5px; font-weight: 600; background: var(--ink); color: var(--paper); box-shadow: 0 8px 24px -8px rgba(10,14,31,.4); transition: all .25s ease; }
        .mkt-btn-primary:hover { background: #0A1838; transform: translateY(-1px); }
        .mkt-btn-ghost { display: inline-flex; align-items: center; gap: 8px; padding: 14px 24px; border-radius: 999px; font-size: 14.5px; font-weight: 500; border: 1px solid var(--ink-line-strong); color: var(--text); transition: all .25s ease; }
        .mkt-btn-ghost:hover { background: rgba(10,14,31,.04); }
        @media (max-width: 900px) {
          .mkt-zones { grid-template-columns: repeat(2,1fr) !important; }
          .mkt-services { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          .mkt-container { padding: 0 22px !important; }
        }
      `}</style>
    </>
  );
}
