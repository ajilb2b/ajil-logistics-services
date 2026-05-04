"use client";
import { useEffect } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const whyCards = [
  { n: "i.", title: "Built For The GCC", desc: "Our dispatch operation was built on this region's roads, traffic patterns, prayer times and gated compounds. Not retrofitted from a European model." },
  { n: "ii.", title: "One Model Or All Four", desc: "License software, use the network, build dedicated capacity, or outsource the function entirely, without changing partners as you grow." },
  { n: "iii.", title: "Operator DNA", desc: "We run logistics ourselves before we sell it. Every capability is shaped by a live operations team, not a roadmap committee." },
];

const testimonials = [
  { industry: "Grocery", q: `We replaced three logistics vendors with a single Ajil contract: software, network and a dedicated dark-store layer. Cost per drop fell 27% and our COO finally has <em>one number to look at</em>.`, initials: "FA", name: "Fatima Al Sayed", role: "VP Operations · Regional Grocery Group" },
  { industry: "Quick Commerce", q: `Ajil's stacking logic took our cost-per-drop down by 31% in the first quarter. The dispatch team flagged exceptions before our own ops noticed them. <em>It just runs</em>.`, initials: "RM", name: "Rashid Mansoori", role: "Head Of Logistics · Quick Commerce Platform" },
  { industry: "QSR", q: `Branded riders, our packaging, our SLA. The customer never knows it's outsourced. They just know <em>their food is on time</em>.`, initials: "SK", name: "Sara Khoury", role: "COO · Multi-Brand Restaurant Group" },
];

export default function WhyPage() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Nav />

      <header className="wy-hero">
        <div className="hp-container">
          <span className="hp-section-tag">Why Ajil</span>
          <h1 className="wy-h1">Why Operators <em>Switch</em><span style={{color:'#2D2BE0'}}>.</span></h1>
          <p className="wy-lead">Three reasons our customers consolidate three vendors into one Ajil contract, usually within their first year.</p>
        </div>
      </header>

      <section className="wy-section">
        <div className="hp-container">
          <div className="hp-why-grid reveal">
            {whyCards.map((card) => (
              <div className="hp-why-card" key={card.n}>
                <div className="hp-why-num">{card.n}</div>
                <h4 className="hp-why-h4">{card.title}</h4>
                <p className="hp-why-p">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="wy-testimonials">
        <div className="hp-container">
          <div className="wy-t-head reveal">
            <span className="hp-section-tag">What our customers say</span>
            <h2 className="wy-h2">Operators across the GCC<br /><em>running on Ajil</em>.</h2>
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

          <div className="wy-cta-row reveal">
            <a href="/contact" className="wy-btn-primary">
              Talk to a logistics architect
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
            </a>
            <a href="/services" className="wy-btn-ghost">See service models →</a>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        .hp-container { max-width: 1440px; margin: 0 auto; padding: 0 clamp(24px, 6vw, 88px); }
        @media (max-width: 760px) { .hp-container { padding: 0 20px; } }
        .hp-section-tag { font-family: var(--font-instrument), serif; font-style: italic; font-weight: 400; font-size: 14px; color: rgba(27,26,104,.42); letter-spacing: .01em; display: flex; align-items: center; gap: 10px; margin-bottom: 24px; }
        .reveal { opacity: 0; transform: translateY(20px); transition: opacity .7s ease, transform .7s ease; }
        .reveal.in { opacity: 1; transform: none; }

        .wy-hero { padding: 160px 0 96px; background: #fff; border-bottom: 1px solid var(--line); }
        .wy-h1 { font-size: clamp(38px, 5vw, 72px); line-height: 1; letter-spacing: -.04em; font-weight: 500; color: var(--ink); margin: 0 0 28px; }
        .wy-h1 em { font-family: var(--font-instrument), serif; font-style: italic; font-weight: 400; color: var(--indigo); }
        .wy-h2 { font-size: clamp(32px, 3.5vw, 54px); line-height: 1.05; letter-spacing: -.04em; font-weight: 500; color: var(--ink); margin: 0 0 56px; }
        .wy-h2 em { font-family: var(--font-instrument), serif; font-style: italic; font-weight: 400; color: var(--indigo); }
        .wy-lead { font-size: clamp(15px, 1.2vw, 18px); color: var(--muted); max-width: 52ch; line-height: 1.7; }

        .wy-section { background: var(--paper); border-top: 1px solid var(--line); padding: 100px 0; }
        .hp-why-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 24px; }
        @media (max-width: 900px) { .hp-why-grid { grid-template-columns: 1fr; } }
        .hp-why-card { border: 1px solid var(--line); border-radius: 20px; padding: 36px 32px; background: var(--paper); transition: all .35s ease; }
        .hp-why-card:hover { border-color: rgba(90,75,255,.22); transform: translateY(-4px); box-shadow: 0 18px 40px -18px rgba(45,43,224,.2); }
        .hp-why-num { font-family: var(--font-instrument), serif; font-style: italic; font-size: 80px; line-height: 1; background: linear-gradient(135deg,#0F1A3D,#5A4BFF); -webkit-background-clip: text; background-clip: text; color: transparent; margin-bottom: 16px; }
        .hp-why-h4 { font-size: 21px; font-weight: 500; letter-spacing: -.02em; margin-bottom: 10px; color: var(--ink); }
        .hp-why-p { font-size: 14px; color: var(--muted); line-height: 1.6; }

        .wy-testimonials { background: var(--paper-2); border-top: 1px solid var(--line); padding: 100px 0 140px; }
        .wy-t-head { margin-bottom: 56px; }
        .hp-quotes-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; }
        @media (max-width: 1000px) { .hp-quotes-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 640px) { .hp-quotes-grid { grid-template-columns: 1fr; } }
        .hp-quote-card { background: var(--paper); border: 1px solid var(--line-strong); border-radius: 20px; padding: 32px; display: flex; flex-direction: column; gap: 16px; transition: all .3s ease; }
        .hp-quote-card:hover { border-color: rgba(90,75,255,.22); box-shadow: 0 14px 40px -16px rgba(45,43,224,.14); }
        .hp-industry-tag { font-family: var(--font-geist-mono), monospace; font-size: 10px; font-weight: 600; letter-spacing: .12em; text-transform: uppercase; color: var(--indigo); background: rgba(45,43,224,.06); border: 1px solid rgba(45,43,224,.12); padding: 3px 10px; border-radius: 999px; display: inline-block; width: fit-content; }
        .hp-qmark { font-family: var(--font-instrument), serif; font-size: 60px; line-height: .8; color: var(--line-strong); margin-bottom: -8px; }
        .hp-quote-card p { font-size: 15px; color: var(--muted); line-height: 1.65; flex: 1; }
        .hp-quote-card p em { font-style: italic; color: var(--ink); font-family: var(--font-instrument), serif; }
        .hp-author { display: flex; align-items: center; gap: 12px; padding-top: 16px; border-top: 1px solid var(--line); }
        .hp-avatar { width: 38px; height: 38px; border-radius: 50%; background: linear-gradient(135deg, #1B1A68, #5A4BFF); display: flex; align-items: center; justify-content: center; color: #fff; font-family: var(--font-geist-mono), monospace; font-size: 12px; font-weight: 600; flex-shrink: 0; }
        .hp-qname { font-size: 13px; font-weight: 600; color: var(--ink); }
        .hp-qrole { font-size: 12px; color: var(--muted-2); line-height: 1.4; }

        .wy-cta-row { display: flex; align-items: center; gap: 16px; flex-wrap: wrap; margin-top: 80px; padding-top: 64px; border-top: 1px solid var(--line); }
        .wy-btn-primary { background: #1B1A68; color: #fff; font-weight: 600; padding: 14px 26px; border-radius: 999px; font-size: 15px; display: inline-flex; align-items: center; gap: 10px; transition: all .25s ease; box-shadow: 0 10px 28px -10px rgba(27,26,104,.5); }
        .wy-btn-primary:hover { background: var(--indigo); transform: translateY(-1px); }
        .wy-btn-ghost { color: var(--indigo); font-weight: 500; font-size: 15px; }
        .wy-btn-ghost:hover { text-decoration: underline; }
      `}</style>
    </>
  );
}
