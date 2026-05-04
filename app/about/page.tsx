import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description:
    "Founded in Doha in 2019. 600+ riders, 9 hubs across Qatar & UAE. Ajil Logistics Services started as an in-house logistics operation and became the operating platform for modern commerce.",
  alternates: { canonical: "https://ajilb2b.com/about" },
  openGraph: {
    title: "About Ajil Logistics Services",
    description:
      "Founded in Doha in 2019. 600+ riders, 14 hubs, 6 GCC markets. We run logistics before we sell it.",
    url: "https://ajilb2b.com/about",
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About Ajil Logistics Services",
  "url": "https://ajilb2b.com/about",
  "description":
    "Ajil Logistics Services was founded in Doha in 2019 as the in-house logistics arm of a holding group. Now serving 6 GCC markets with 600+ riders, 14 hubs and a 24/7 dispatch operation.",
  "about": { "@id": "https://ajilb2b.com/#organization" },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ajilb2b.com" },
      { "@type": "ListItem", "position": 2, "name": "About", "item": "https://ajilb2b.com/about" },
    ],
  },
};

const leadershipSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Ajil Logistics Services Leadership Team",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Person",
        "name": "Umair Naseem Khan",
        "jobTitle": "Chief Executive Officer",
        "worksFor": { "@id": "https://ajilb2b.com/#organization" },
        "description": "Chief Executive Officer of Ajil Logistics Services, leading the company's operations across Qatar and UAE.",
      },
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Person",
        "name": "Kalam Rabbani",
        "jobTitle": "Operations Incharge",
        "worksFor": { "@id": "https://ajilb2b.com/#organization" },
        "description": "Operations Incharge overseeing fleet, warehouse and dispatch operations for Ajil Logistics Services across Qatar and UAE.",
      },
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "Person",
        "name": "Abdullah Rao",
        "jobTitle": "Operations Specialist",
        "worksFor": { "@id": "https://ajilb2b.com/#organization" },
        "description": "Operations Specialist at Ajil Logistics Services.",
      },
    },
  ],
};

const pillars = [
  {
    num: "600+",
    title: "Our people, not contractors.",
    desc: "600+ Ajil riders are on our payroll — trained, insured, and managed by a dedicated fleet ops team. No gig-worker risk, no quality variance.",
  },
  {
    num: "9",
    title: "Real warehouses. Real teams.",
    desc: "9 logistics hubs and dark stores under direct Ajil management across Qatar and UAE. Ambient, chilled, frozen and bonded zones. Full pick-pack-ship operations staffed and supervised by our teams.",
  },
  {
    num: "24/7",
    title: "A 24/7 command centre.",
    desc: "Doha-based dispatch operation running every Ajil route 24 hours a day. Senior dispatchers, supervisors and exception handlers — escalation paths that real customers can call.",
  },
];

const timeline = [
  { year: "2024", event: "Ajil Logistics Services founded in Doha, Qatar." },
  { year: "2025", event: "Launched Ajil Dispatch — the platform powering our own operations. First external clients onboarded." },
  { year: "2026", event: "Expanding across Qatar & UAE. Building the network, growing the team." },
];

const leadership = [
  { initials: "UN", name: "Umair Naseem Khan", role: "Chief Executive Officer", bg: "" },
  { initials: "KR", name: "Kalam Rabbani", role: "Operations Incharge", bg: "" },
  { initials: "AR", name: "Abdullah Rao", role: "Operations Specialist", bg: "" },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(leadershipSchema) }}
      />
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
              <div className="ab-eyebrow">About · Inside Ajil</div>
              <h1 className="ab-h1">
                Logistics built<br />from the <span className="ab-accent">inside out</span>.
              </h1>
            </div>
            <div>
              <p className="lede">
                Ajil Logistics Services started as the in-house logistics function of a holding group operating cloud
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
              <div className="ab-section-tag">Inside Ajil</div>
              <h2 className="ab-h2" style={{ marginTop: 18 }}>
                We run logistics<br /><span className="ab-accent">before we sell it</span>.
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
              <div key={p.num} style={{ padding: 36, background: "#fff", border: "1px solid var(--ink-line)", borderRadius: 10 }}>
                <div style={{
                  fontSize: 48, lineHeight: 1, fontWeight: 700,
                  letterSpacing: "-0.03em", color: "var(--ink)",
                  marginBottom: 20,
                }}>
                  {p.num}
                </div>
                <h3 style={{
                  fontSize: 18, fontWeight: 600, letterSpacing: "-0.015em",
                  color: "var(--ink)", marginBottom: 10,
                }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: "var(--muted)" }}>{p.desc}</p>
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
              <div className="ab-section-tag">Story</div>
              <h2 className="ab-h2" style={{ marginTop: 18 }}>
                From in-house function<br />to <span className="ab-accent">regional platform</span>.
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
              <div className="ab-section-tag">Leadership</div>
              <h2 className="ab-h2" style={{ marginTop: 18 }}>
                The people<br /><span className="ab-accent">accountable</span>.
              </h2>
            </div>
            <p className="lede">
              A senior team with operating experience across logistics, retail, technology and capital
              markets in the GCC. Named, accountable, and reachable.
            </p>
          </div>
          {/* CEO — featured card */}
          <Link href="/team/umair-naseem-khan" className="ab-ceo-card">
            <div className="ab-ceo-photo-wrap">
              <Image src="/ceo.png" alt="Umair Naseem Khan" fill style={{ objectFit: "cover", objectPosition: "center top" }} />
            </div>
            <div className="ab-ceo-body">
              <div className="ab-ceo-tag">Founder &amp; Chief Executive Officer</div>
              <h3 className="ab-ceo-name">Umair Naseem Khan</h3>
              <p className="ab-ceo-bio">8+ years building and scaling logistics operations across GCC — from talabat country head to founding Ajil.</p>
              <div className="ab-ceo-track">
                {["talabat · 5+ yrs", "Baladi Express · COO", "Fetchr · Ops Leader", "PepsiCo · Supply Chain"].map((t) => (
                  <span key={t} className="ab-ceo-chip">{t}</span>
                ))}
              </div>
              <div className="ab-ceo-link">
                View full profile
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
              </div>
            </div>
          </Link>

          {/* Rest of leadership */}
          <div className="leadership-grid" style={{ marginTop: 16 }}>
            {leadership.filter((l) => l.name !== "Umair Naseem Khan").map((l) => (
              <div key={l.name} style={{ display: "flex", alignItems: "center", gap: 16, padding: 24, border: "1px solid var(--ink-line)", borderRadius: 8 }}>
                <div style={{ width: 44, height: 44, borderRadius: 8, background: "var(--ink)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: 13, flexShrink: 0, fontFamily: "var(--font-jetbrains),monospace", letterSpacing: "0.05em" }}>
                  {l.initials}
                </div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 600, color: "var(--ink)", marginBottom: 4 }}>{l.name}</div>
                  <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 10, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.1em" }}>{l.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "140px 0", textAlign: "center", borderBottom: "1px solid var(--ink-line)" }}>
        <div style={{ maxWidth: 780, margin: "0 auto", padding: "0 40px" }}>
          <div className="ab-section-tag" style={{ justifyContent: "center" }}>Get in touch</div>
          <h2 className="ab-h2" style={{ marginTop: 18 }}>
            Want to <span className="ab-accent">learn more</span>?
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
        .ab-ceo-card { display: flex; gap: 0; border: 1px solid var(--ink-line); border-radius: 10px; overflow: hidden; background: #fff; transition: border-color .2s ease; text-decoration: none; color: inherit; }
        .ab-ceo-card:hover { border-color: rgba(27,26,104,.3); }
        .ab-ceo-photo-wrap { position: relative; width: 220px; flex-shrink: 0; min-height: 280px; background: var(--paper-2); }
        .ab-ceo-body { padding: 36px 40px; display: flex; flex-direction: column; justify-content: center; gap: 0; }
        .ab-ceo-tag { font-family: var(--font-jetbrains),monospace; font-size: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: .12em; color: rgba(27,26,104,.42); margin-bottom: 10px; }
        .ab-ceo-name { font-size: clamp(22px, 2.5vw, 32px); font-weight: 700; letter-spacing: -.03em; color: var(--ink); margin-bottom: 12px; line-height: 1.1; }
        .ab-ceo-bio { font-size: 15px; color: var(--muted); line-height: 1.65; max-width: 48ch; margin-bottom: 20px; }
        .ab-ceo-track { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 28px; }
        .ab-ceo-chip { font-family: var(--font-jetbrains),monospace; font-size: 10px; padding: 3px 10px; border-radius: 4px; border: 1px solid var(--ink-line); color: var(--muted); text-transform: uppercase; letter-spacing: .06em; }
        .ab-ceo-link { display: inline-flex; align-items: center; gap: 6px; font-size: 13px; font-weight: 600; color: #2D2BE0; }
        @media (max-width: 640px) { .ab-ceo-card { flex-direction: column; } .ab-ceo-photo-wrap { width: 100%; min-height: 240px; } .ab-ceo-body { padding: 28px 24px; } }
        .leadership-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 16px; }
        .bc-link:hover { color: var(--text) !important; }
        .ab-eyebrow { font-family: var(--font-jetbrains),monospace; font-size: 11px; color: rgba(27,26,104,.42); text-transform: uppercase; letter-spacing: .14em; font-weight: 500; margin-bottom: 20px; }
        .ab-h1 { font-size: clamp(40px,6.5vw,88px); font-weight: 700; line-height: .95; letter-spacing: -.04em; color: var(--ink); margin: 0 0 28px; }
        .ab-h2 { font-size: clamp(32px,4.5vw,60px); font-weight: 700; line-height: 1; letter-spacing: -.035em; color: var(--ink); margin: 0 0 24px; }
        .ab-accent { color: #2D2BE0; }
        .ab-section-tag { font-family: var(--font-jetbrains),monospace; font-size: 11px; color: rgba(27,26,104,.42); text-transform: uppercase; letter-spacing: .14em; font-weight: 500; display: flex; align-items: center; gap: 10px; }
        .ajil-btn-primary-lg {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 13px 22px; border-radius: 8px; font-size: 14.5px; font-weight: 600;
          background: var(--ink); color: var(--paper);
          transition: background .2s ease;
        }
        .ajil-btn-primary-lg:hover { background: #14136B; }
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
