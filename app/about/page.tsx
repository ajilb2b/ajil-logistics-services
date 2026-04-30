import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

const pillars = [
  {
    num: "2,800",
    title: "Our people, not contractors.",
    desc: "Every Ajil rider is on our payroll — trained, insured, and managed by a dedicated fleet ops team. No gig-worker risk, no quality variance.",
  },
  {
    num: "14",
    title: "Real warehouses. Real teams.",
    desc: "14 logistics hubs and 8 dark stores under direct Ajil management. Ambient, chilled, frozen and bonded zones. Full pick-pack-ship operations staffed and supervised by our teams.",
  },
  {
    num: "24/7",
    title: "A 24/7 command centre.",
    desc: "Doha-based dispatch operation running every Ajil route 24 hours a day. Senior dispatchers, supervisors and exception handlers — escalation paths that real customers can call.",
  },
];

const timeline = [
  { year: "2019", event: "Founded as the in-house logistics arm of a Doha-based holding group." },
  { year: "2020", event: "First external customer onboarded during the regional e-commerce surge." },
  { year: "2021", event: "Launched Ajil Dispatch — the software that runs our own operations — as a standalone product." },
  { year: "2022", event: "Expanded network to UAE, KSA, Kuwait and Bahrain. Crossed 1M deliveries." },
  { year: "2023", event: "Ajil Rider and Ajil Track reach general availability. Dedicated service launched." },
  { year: "2024", event: "Fully Managed Operations live for enterprise customers. Warehouse footprint doubles." },
  { year: "2025", event: "Series A funding. 2,800 riders, 14 hubs, 6 GCC markets." },
  { year: "2026", event: "Ajil Insights in development. Continuing to expand the platform." },
];

const leadership = [
  { initials: "KA", name: "Khalid Al-Ansari", role: "Chief Executive Officer", bg: "linear-gradient(135deg,#0B2258,#1A52D0)" },
  { initials: "LA", name: "Layla Al-Rashidi", role: "Chief Operations Officer", bg: "linear-gradient(135deg,#2464E8,#1A52D0)" },
  { initials: "MH", name: "Mohammed Hassan", role: "Chief Technology Officer", bg: "linear-gradient(135deg,#070D1E,#18284A)" },
  { initials: "SA", name: "Sara Al-Farsi", role: "VP Commercial", bg: "linear-gradient(135deg,#0B2258,#2464E8)" },
];

export default function AboutPage() {
  return (
    <>
      <Nav />

      {/* Breadcrumb */}
      <div style={{ padding: "24px 0", borderBottom: "1px solid var(--ink-line)", fontFamily: "var(--font-jetbrains),monospace", fontSize: 11, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.12em" }}>
        <div className="ajil-container">
          <Link href="/" style={{ color: "var(--text-muted)" }} className="bc-link">Home</Link>
          <span style={{ margin: "0 10px", color: "var(--text-faint)" }}>/</span>
          <span style={{ color: "var(--text)" }}>About</span>
        </div>
      </div>

      {/* Page Header */}
      <header style={{ padding: "80px 0", borderBottom: "1px solid var(--ink-line)" }}>
        <div className="ajil-container">
          <div className="page-header-grid">
            <div>
              <div className="page-eyebrow">About · Inside Ajil</div>
              <h1 className="display-xl" style={{ fontSize: "clamp(40px,6.5vw,96px)" }}>
                Logistics built<br />from the <span className="it">inside out</span>.
              </h1>
            </div>
            <div>
              <p className="lede">
                Ajil started as the in-house logistics function of a holding group operating cloud
                kitchens, restaurants and supermarkets. We built the software because we needed it,
                and the riders because we trusted no-one else with our customers.{" "}
                <strong>Then operators across the region asked if they could buy the same thing.</strong>
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* We run logistics before we sell it */}
      <section style={{ padding: "120px 0", borderBottom: "1px solid var(--ink-line)" }}>
        <div className="ajil-container">
          <div className="section-head-grid" style={{ marginBottom: 64 }}>
            <div>
              <div className="meta-rule">Inside Ajil</div>
              <h2 className="display-l" style={{ marginTop: 18 }}>
                We run logistics<br /><span className="it">before we sell it</span>.
              </h2>
            </div>
            <p className="lede">
              Three things separate Ajil from a SaaS vendor or a 3PL: we own the riders, we operate
              the warehouses, and we run a 24/7 control room. Every customer benefits from operations
              battle-tested in our own business.
            </p>
          </div>

          <div className="pillars-grid">
            {pillars.map((p) => (
              <div key={p.num} style={{ padding: 40, background: "var(--paper-2)", border: "1px solid var(--ink-line)", borderRadius: 14 }}>
                <div style={{
                  fontFamily: "var(--font-fraunces),Georgia,serif",
                  fontStyle: "italic", fontWeight: 300,
                  fontVariationSettings: '"opsz" 96,"SOFT" 80',
                  fontSize: 56, lineHeight: 1, color: "var(--ink)",
                  marginBottom: 20,
                }}>
                  {p.num}
                </div>
                <h3 style={{
                  fontFamily: "var(--font-fraunces),Georgia,serif",
                  fontWeight: 400, fontVariationSettings: '"opsz" 72,"SOFT" 40',
                  fontSize: 22, letterSpacing: "-0.015em", color: "var(--text)",
                  marginBottom: 12,
                }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.65, color: "var(--text-soft)" }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ padding: "120px 0", borderBottom: "1px solid var(--ink-line)" }}>
        <div className="ajil-container">
          <div className="section-head-grid" style={{ marginBottom: 64 }}>
            <div>
              <div className="meta-rule">Story</div>
              <h2 className="display-l" style={{ marginTop: 18 }}>
                From in-house function<br />to <span className="it">regional platform</span>.
              </h2>
            </div>
            <p className="lede">
              Seven years from the first delivery to the operating layer for GCC commerce. A short
              history of how Ajil came to be — and where it&apos;s going.
            </p>
          </div>

          <div style={{ maxWidth: 760 }}>
            {timeline.map((t, i) => (
              <div key={t.year} style={{ display: "flex", gap: 40, paddingBottom: i < timeline.length - 1 ? 40 : 0, position: "relative" }}>
                {i < timeline.length - 1 && (
                  <div style={{ position: "absolute", left: 36, top: 32, bottom: 0, width: 1, background: "var(--ink-line)" }} />
                )}
                <div style={{ flexShrink: 0, width: 72 }}>
                  <span style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 11, color: "var(--violet)", letterSpacing: "0.1em" }}>{t.year}</span>
                </div>
                <div style={{ paddingTop: 2 }}>
                  <p style={{ fontSize: 15, lineHeight: 1.65, color: "var(--text-soft)" }}>{t.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section style={{ padding: "120px 0", borderBottom: "1px solid var(--ink-line)" }}>
        <div className="ajil-container">
          <div className="section-head-grid" style={{ marginBottom: 64 }}>
            <div>
              <div className="meta-rule">Leadership</div>
              <h2 className="display-l" style={{ marginTop: 18 }}>
                The people<br /><span className="it">accountable</span>.
              </h2>
            </div>
            <p className="lede">
              A senior team with operating experience across logistics, retail, technology and capital
              markets in the GCC. Named, accountable, and reachable.
            </p>
          </div>
          <div className="leadership-grid">
            {leadership.map((l) => (
              <div key={l.name} style={{ display: "flex", alignItems: "center", gap: 20, padding: 28, border: "1px solid var(--ink-line)", borderRadius: 12 }}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", background: l.bg, display: "flex", alignItems: "center", justifyContent: "center", color: "var(--paper)", fontWeight: 600, fontSize: 16, flexShrink: 0 }}>
                  {l.initials}
                </div>
                <div>
                  <div style={{ fontSize: 16, fontWeight: 600, color: "var(--text)", marginBottom: 4 }}>{l.name}</div>
                  <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 10, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.1em" }}>{l.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "140px 0", textAlign: "center", borderBottom: "1px solid var(--ink-line)" }}>
        <div style={{ maxWidth: 780, margin: "0 auto", padding: "0 40px" }}>
          <div className="meta-rule" style={{ justifyContent: "center" }}>Get in touch</div>
          <h2 className="display-l" style={{ marginTop: 18 }}>
            Want to <span className="it">learn more</span>?
          </h2>
          <p className="lede" style={{ margin: "24px auto 36px", textAlign: "center" }}>
            Talk to our team — about a brief, a partnership, a press enquiry, or just to understand how we work.
          </p>
          <Link href="/contact" className="ajil-btn-primary-lg">
            Talk to us
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </section>

      <Footer />

      <style>{`
        .ajil-container { max-width: 1380px; margin: 0 auto; padding: 0 40px; }
        .page-header-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: end; }
        .section-head-grid { display: grid; grid-template-columns: .45fr .55fr; gap: 80px; align-items: end; }
        .pillars-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 24px; }
        .leadership-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 16px; }
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
          .pillars-grid { grid-template-columns: 1fr !important; }
          .leadership-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 760px) {
          .ajil-container { padding: 0 22px !important; }
        }
      `}</style>
    </>
  );
}
