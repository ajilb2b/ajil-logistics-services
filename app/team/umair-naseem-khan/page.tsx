import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Umair Naseem Khan",
  description:
    "Umair Naseem Khan is the Founder and CEO of Ajil Logistics Services. 8+ years building and scaling logistics operations across GCC — from talabat Country Head to founding Ajil.",
  alternates: { canonical: "https://ajilb2b.com/team/umair-naseem-khan" },
  openGraph: {
    title: "Umair Naseem Khan — Founder & CEO | Ajil Logistics Services",
    description: "Founder and CEO of Ajil Logistics Services. Former Country Head at talabat, COO at Baladi Express.",
    url: "https://ajilb2b.com/team/umair-naseem-khan",
    images: [{ url: "/ceo.png", alt: "Umair Naseem Khan" }],
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Umair Naseem Khan",
  "jobTitle": "Founder & Chief Executive Officer",
  "worksFor": { "@id": "https://ajilb2b.com/#organization" },
  "url": "https://ajilb2b.com/team/umair-naseem-khan",
  "image": "https://ajilb2b.com/ceo.png",
  "description": "Founder and CEO of Ajil Logistics Services with 8+ years of experience building and scaling logistics operations across the GCC.",
};

const career = [
  {
    org: "Ajil Logistics Services",
    role: "Founder & Chief Executive Officer",
    period: "Jan 2024 — Present",
    location: "Doha, Qatar",
    desc: "Founded and leads Ajil Logistics Services — building the B2B logistics infrastructure for modern commerce across Qatar and UAE. Responsible for company strategy, product direction, and operations.",
  },
  {
    org: "talabat",
    role: "Director of Logistics → Country Head, Logistics",
    period: "Aug 2019 — Jun 2023 · 4 yrs",
    location: "Doha, Qatar",
    desc: "Led country-wide logistics operations across four divisions: Core Logistics, Restaurant Operations, Grocery Operations, and Fleet Management. Responsible for talabat's growth and expansion into new verticals in Qatar.",
  },
  {
    org: "Baladi Express",
    role: "Chief Operating & Strategy Officer",
    period: "Apr 2023 — Feb 2024 · 11 mos",
    location: "Qatar",
    desc: "Led a team of 200+ employees. Spearheaded operational strategy resulting in a 20% increase in efficiency. Implemented cost-saving initiatives reducing operational expenses by 15% without compromising quality.",
  },
  {
    org: "talabat",
    role: "Operations Manager — Logistics, UAE",
    period: "Nov 2017 — Aug 2019 · 2 yrs",
    location: "Dubai, UAE",
    desc: "Managed regional logistics performance across UAE. Led Talabat Go operations — zone configuration, hub expansion, P&L ownership, 3PL contracting, and fleet supply management.",
  },
  {
    org: "Fetchr",
    role: "Operations Leader",
    period: "Dec 2016 — Nov 2017 · 1 yr",
    location: "UAE",
    desc: "Led UAE dispatch and reverse logistics. Managed a team of 50 across warehouse operations, last-mile delivery, and key accounts including Majid Al Futtaim, Sephora, and Namshi. Helped Fetchr win Startup of the Year in MENA for two consecutive years.",
  },
  {
    org: "PepsiCo",
    role: "Supply Chain Lead",
    period: "Aug 2012 — Sep 2016 · 4 yrs",
    location: "Regional",
    desc: "Managed logistics operations and supply chain standards across a $17M portfolio. Served as logistics liaison between key regional accounts, overseeing vendor sourcing, contracting, and fleet management.",
  },
];

const highlights = [
  { num: "8+", label: "Years in GCC logistics" },
  { num: "5", label: "Years at talabat" },
  { num: "200+", label: "Team managed at Baladi Express" },
  { num: "4", label: "Major organisations led" },
];

export default function UmairPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <Nav />

      {/* Breadcrumb */}
      <div className="pr-breadcrumb">
        <div className="pr-container">
          <Link href="/" className="pr-bc-link">Home</Link>
          <span className="pr-bc-sep">/</span>
          <Link href="/about" className="pr-bc-link">About</Link>
          <span className="pr-bc-sep">/</span>
          <span>Umair Naseem Khan</span>
        </div>
      </div>

      {/* Hero */}
      <header className="pr-hero">
        <div className="pr-container">
          <div className="pr-hero-grid">
            <div className="pr-photo-wrap">
              <Image
                src="/ceo.png"
                alt="Umair Naseem Khan — Founder & CEO, Ajil Logistics Services"
                fill
                priority
                style={{ objectFit: "cover", objectPosition: "center top" }}
              />
            </div>
            <div className="pr-hero-body">
              <span className="pr-eyebrow">Leadership · Founder</span>
              <h1 className="pr-h1">Umair Naseem Khan</h1>
              <p className="pr-title">Founder &amp; Chief Executive Officer</p>
              <p className="pr-tagline">
                Building the logistics infrastructure for modern commerce in Qatar and UAE.
                8+ years of on-the-ground experience leading operations at scale across the GCC.
              </p>
              <div className="pr-highlights">
                {highlights.map((h) => (
                  <div key={h.label} className="pr-hl">
                    <div className="pr-hl-num">{h.num}</div>
                    <div className="pr-hl-lbl">{h.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* About */}
      <section className="pr-section pr-section-white">
        <div className="pr-container pr-section-grid">
          <div>
            <span className="pr-section-tag">About</span>
            <h2 className="pr-h2">Operator first.<br /><span className="pr-accent">Founder second.</span></h2>
          </div>
          <div className="pr-prose">
            <p>
              Umair Naseem Khan is the Founder and CEO of Ajil Logistics Services, the end-to-end logistics
              platform for modern commerce across Qatar and UAE. He founded Ajil in 2024, drawing on more
              than eight years of hands-on experience building and scaling logistics operations for some of
              the GCC&apos;s most demanding businesses.
            </p>
            <p>
              Before Ajil, Umair spent nearly six years at talabat — rising from Operations Manager in the
              UAE to Country Head of Logistics in Qatar, where he led four operational divisions simultaneously.
              His track record includes scaling multi-hundred-person teams, reducing operational costs by double
              digits, and launching entirely new logistics verticals across multiple GCC markets.
            </p>
            <p>
              Umair&apos;s approach to logistics is operator-first: understanding the problem on the ground before
              designing the solution. That philosophy sits at the core of how Ajil builds its products and runs
              its operations — software that was built because it was needed, and a rider network managed the
              same way Ajil would expect its own deliveries to be managed.
            </p>
            <p>
              He is a skilled communicator with a track record of building high-performance teams across diverse
              cultural environments in the GCC. His specialities span logistics management, operations process
              design, performance improvement, e-commerce scale-ups, and technology-led automation.
            </p>
          </div>
        </div>
      </section>

      {/* Career */}
      <section className="pr-section pr-section-alt">
        <div className="pr-container">
          <div className="pr-section-head">
            <span className="pr-section-tag">Career</span>
            <h2 className="pr-h2" style={{ marginTop: 18 }}>A track record<br /><span className="pr-accent">built on the ground</span>.</h2>
          </div>
          <div className="pr-timeline">
            {career.map((c, i) => (
              <div key={c.org + c.role} className="pr-tl-row">
                <div className="pr-tl-left">
                  <div className="pr-tl-org">{c.org}</div>
                  <div className="pr-tl-period">{c.period}</div>
                  <div className="pr-tl-loc">{c.location}</div>
                </div>
                <div className="pr-tl-right">
                  <div className="pr-tl-role">{c.role}</div>
                  <p className="pr-tl-desc">{c.desc}</p>
                </div>
                {i < career.length - 1 && <div className="pr-tl-divider" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="pr-section pr-section-white">
        <div className="pr-container pr-section-grid">
          <div>
            <span className="pr-section-tag">Recognition</span>
            <h2 className="pr-h2">Beyond<br /><span className="pr-accent">logistics</span>.</h2>
          </div>
          <div className="pr-recognition-list">
            {[
              { title: "Silver Medalist — Academics", desc: "Recognised for academic excellence." },
              { title: "Youngest Public Speaker on Youth Affairs", desc: "Addressed the Parliament of Pakistan on youth affairs — one of the youngest speakers to do so." },
              { title: "UN Ambassador — Polio Eradication", desc: "Served as a United Nations ambassador on the global polio eradication campaign." },
            ].map((r) => (
              <div key={r.title} className="pr-rec-row">
                <div className="pr-rec-dot" />
                <div>
                  <div className="pr-rec-title">{r.title}</div>
                  <div className="pr-rec-desc">{r.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pr-cta">
        <div className="pr-container">
          <div className="pr-cta-inner">
            <div>
              <span className="pr-section-tag">Get in touch</span>
              <h2 className="pr-h2" style={{ marginTop: 18 }}>Talk to the<br /><span className="pr-accent">Ajil team</span>.</h2>
            </div>
            <div className="pr-cta-right">
              <p className="pr-cta-p">For enterprise enquiries, partnership discussions, or to understand how Ajil can operate your logistics — reach out directly.</p>
              <div className="pr-cta-actions">
                <Link href="/contact" className="pr-btn-primary">
                  Contact us
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                </Link>
                <Link href="/about" className="pr-btn-ghost">Back to About</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        .pr-container { max-width: 1280px; margin: 0 auto; padding: 0 40px; }
        @media (max-width: 760px) { .pr-container { padding: 0 22px; } }

        .pr-breadcrumb { padding: 20px 0; border-bottom: 1px solid var(--line); font-family: var(--font-jetbrains), monospace; font-size: 11px; color: var(--muted); text-transform: uppercase; letter-spacing: .12em; display: flex; align-items: center; }
        .pr-bc-link { color: var(--muted); transition: color .2s ease; }
        .pr-bc-link:hover { color: var(--ink); }
        .pr-bc-sep { margin: 0 10px; color: var(--line-strong); }

        /* Hero */
        .pr-hero { padding: 80px 0 0; background: #fff; border-bottom: 1px solid var(--line); }
        .pr-hero-grid { display: grid; grid-template-columns: 360px 1fr; gap: 80px; align-items: end; }
        .pr-photo-wrap { position: relative; height: 480px; border-radius: 10px 10px 0 0; overflow: hidden; background: var(--paper-2); }
        .pr-hero-body { padding-bottom: 64px; }
        .pr-eyebrow { font-family: var(--font-jetbrains), monospace; font-size: 11px; color: rgba(27,26,104,.42); text-transform: uppercase; letter-spacing: .14em; display: block; margin-bottom: 20px; }
        .pr-h1 { font-size: clamp(36px, 5vw, 64px); font-weight: 700; letter-spacing: -.04em; color: var(--ink); line-height: 1; margin: 0 0 10px; }
        .pr-title { font-family: var(--font-jetbrains), monospace; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: .12em; color: #2D2BE0; margin-bottom: 24px; }
        .pr-tagline { font-size: clamp(15px, 1.3vw, 18px); color: var(--muted); line-height: 1.7; max-width: 52ch; margin-bottom: 40px; }
        .pr-highlights { display: flex; gap: 40px; flex-wrap: wrap; padding-top: 32px; border-top: 1px solid var(--line); }
        .pr-hl-num { font-size: 28px; font-weight: 700; color: var(--ink); letter-spacing: -.03em; line-height: 1; }
        .pr-hl-lbl { font-family: var(--font-jetbrains), monospace; font-size: 10px; color: var(--muted); text-transform: uppercase; letter-spacing: .1em; margin-top: 5px; }
        @media (max-width: 900px) { .pr-hero-grid { grid-template-columns: 1fr; gap: 40px; } .pr-photo-wrap { height: 320px; border-radius: 10px; } .pr-hero-body { padding-bottom: 48px; } }

        /* Sections */
        .pr-section { padding: 100px 0; border-bottom: 1px solid var(--line); }
        .pr-section-white { background: #fff; }
        .pr-section-alt { background: var(--paper-2); }
        .pr-section-grid { display: grid; grid-template-columns: .38fr .62fr; gap: 80px; align-items: start; }
        .pr-section-head { margin-bottom: 56px; }
        .pr-section-tag { font-family: var(--font-jetbrains), monospace; font-size: 11px; color: rgba(27,26,104,.42); text-transform: uppercase; letter-spacing: .14em; display: block; margin-bottom: 0; }
        .pr-h2 { font-size: clamp(28px, 3.5vw, 48px); font-weight: 700; letter-spacing: -.035em; color: var(--ink); line-height: 1.05; margin: 18px 0 0; }
        .pr-accent { color: #2D2BE0; }
        @media (max-width: 860px) { .pr-section-grid { grid-template-columns: 1fr; gap: 32px; } }

        /* Prose */
        .pr-prose { display: flex; flex-direction: column; gap: 16px; }
        .pr-prose p { font-size: 15px; color: var(--muted); line-height: 1.75; }

        /* Timeline */
        .pr-timeline { display: flex; flex-direction: column; }
        .pr-tl-row { display: grid; grid-template-columns: 240px 1fr; gap: 40px; padding: 36px 0; position: relative; }
        .pr-tl-divider { position: absolute; bottom: 0; left: 0; right: 0; height: 1px; background: var(--line); }
        .pr-tl-org { font-size: 15px; font-weight: 600; color: var(--ink); margin-bottom: 6px; }
        .pr-tl-period { font-family: var(--font-jetbrains), monospace; font-size: 10px; color: rgba(27,26,104,.42); text-transform: uppercase; letter-spacing: .08em; margin-bottom: 4px; }
        .pr-tl-loc { font-family: var(--font-jetbrains), monospace; font-size: 10px; color: var(--muted); text-transform: uppercase; letter-spacing: .08em; }
        .pr-tl-role { font-size: 15px; font-weight: 600; color: var(--ink); letter-spacing: -.01em; margin-bottom: 10px; }
        .pr-tl-desc { font-size: 14px; color: var(--muted); line-height: 1.7; }
        @media (max-width: 720px) { .pr-tl-row { grid-template-columns: 1fr; gap: 12px; } }

        /* Recognition */
        .pr-recognition-list { display: flex; flex-direction: column; gap: 0; border: 1px solid var(--line-strong); border-radius: 10px; overflow: hidden; }
        .pr-rec-row { display: flex; align-items: flex-start; gap: 20px; padding: 28px 32px; background: #fff; border-bottom: 1px solid var(--line); }
        .pr-rec-row:last-child { border-bottom: none; }
        .pr-rec-dot { width: 6px; height: 6px; border-radius: 50%; background: #2D2BE0; flex-shrink: 0; margin-top: 7px; }
        .pr-rec-title { font-size: 15px; font-weight: 600; color: var(--ink); margin-bottom: 4px; }
        .pr-rec-desc { font-size: 13px; color: var(--muted); line-height: 1.6; }

        /* CTA */
        .pr-cta { padding: 100px 0 140px; background: #fff; }
        .pr-cta-inner { display: grid; grid-template-columns: .45fr .55fr; gap: 80px; align-items: start; }
        .pr-cta-right { padding-top: 56px; }
        .pr-cta-p { font-size: 15px; color: var(--muted); line-height: 1.7; max-width: 48ch; margin-bottom: 28px; }
        .pr-cta-actions { display: flex; gap: 12px; flex-wrap: wrap; }
        .pr-btn-primary { display: inline-flex; align-items: center; gap: 8px; padding: 12px 22px; border-radius: 8px; font-size: 14px; font-weight: 600; background: #1B1A68; color: #fff; transition: background .2s ease; }
        .pr-btn-primary:hover { background: #14136B; }
        .pr-btn-ghost { display: inline-flex; align-items: center; gap: 8px; padding: 12px 22px; border-radius: 8px; font-size: 14px; font-weight: 500; border: 1px solid var(--line-strong); color: var(--ink); transition: background .2s ease; }
        .pr-btn-ghost:hover { background: var(--paper-2); }
        @media (max-width: 860px) { .pr-cta-inner { grid-template-columns: 1fr; gap: 32px; } .pr-cta-right { padding-top: 0; } }
      `}</style>
    </>
  );
}
