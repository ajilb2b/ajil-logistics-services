"use client";
import { useEffect } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const routeCaps = [
  { n: "1", title: "Stacking Logic", desc: "We bundle multiple deliveries onto a single route to drive down cost per drop without breaking SLA." },
  { n: "2", title: "Live Re-Routing", desc: "Routes adjust continuously as traffic, breakdowns and new orders enter the network." },
  { n: "3", title: "Local Intelligence", desc: "Routes built around prayer times, gated compounds, school zones and Ramadan timings." },
  { n: "4", title: "Demand Planning", desc: "We anticipate volume by daypart and location, pre-positioning vehicles before peak windows." },
];

export default function DispatchPage() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Nav />

      <header className="dp-hero">
        <div className="hp-container">
          <span className="hp-section-tag">Dispatch &amp; Route Optimization</span>
          <h1 className="dp-h1">Smarter Routing. <em>Lower Cost</em><span style={{color:'#2D2BE0'}}>.</span><br />Higher Efficiency.</h1>
          <p className="dp-lead">Our dispatch teams plan, monitor and intervene across thousands of routes every day, driven by route optimization and stacking logic built specifically for the GCC.</p>
          <div className="dp-pills">
            {["24/7 Control Room", "Route Optimization", "Order Stacking Logic", "Live Re-Routing"].map((p) => (
              <span className="hp-route-pill" key={p}><span className="hp-pdot" />{p}</span>
            ))}
          </div>
        </div>
      </header>

      <section className="hp-routing" style={{ paddingTop: 100 }}>
        <div className="hp-container">
          <div className="hp-route-hero reveal">
            <div className="hp-route-text">
              <p className="hp-route-p">
                Every plan balances cost per drop, on-time delivery, vehicle utilization and driver workload. The way a senior dispatcher would, only at network scale.
              </p>
            </div>
            <div className="hp-route-canvas">
              <div className="hp-route-canvas-bg" />
              <div className="hp-ai-badge"><span className="hp-ai-dot" />Live Plan · v3.41 · Stacked</div>
              <div className="hp-route-legend">
                <div className="hp-legend-item"><span className="hp-legend-line hp-leg-old" />Unstacked</div>
                <div className="hp-legend-item"><span className="hp-legend-line hp-leg-new" />Optimized</div>
                <div className="hp-legend-item"><span className="hp-legend-dot hp-leg-hub" />Hub</div>
              </div>
              <svg className="hp-route-svg" viewBox="0 0 600 500" preserveAspectRatio="xMidYMid meet">
                <path className="hp-route-old" d="M120 380 L 420 110 L 180 200 L 480 320 L 230 290 L 380 420" />
                <path className="hp-route-new" d="M120 380 C 140 320, 180 280, 230 290 S 320 270, 380 230 S 460 160, 420 110 M 420 110 C 380 140, 320 180, 380 230 S 460 280, 480 320 C 460 380, 420 410, 380 420" />
                <circle className="hp-route-hub" cx="120" cy="380" r="9" />
                <text x="138" y="385" fontFamily="monospace" fontSize="11" fill="rgba(15,26,61,0.7)">HUB · DOHA</text>
                <circle className="hp-route-pt" cx="420" cy="110" r="6" />
                <circle className="hp-route-pt2" cx="180" cy="200" r="6" />
                <circle className="hp-route-pt" cx="480" cy="320" r="6" />
                <circle className="hp-route-pt2" cx="230" cy="290" r="6" />
                <circle className="hp-route-pt" cx="380" cy="420" r="6" />
                <circle className="hp-route-pt2" cx="380" cy="230" r="5" />
                <g fontFamily="monospace" fontSize="9" fill="rgba(15,26,61,0.4)">
                  <text x="432" y="106">stop 04</text>
                  <text x="192" y="196">stop 02</text>
                  <text x="492" y="316">stop 05</text>
                  <text x="242" y="286">stop 01</text>
                  <text x="392" y="416">stop 06</text>
                  <text x="392" y="226">stop 03</text>
                </g>
              </svg>
              <div className="hp-decision-panel">
                {[
                  { lbl: "Cost / Drop", val: "−34%", up: true },
                  { lbl: "Time Saved", val: "−28%", up: true },
                  { lbl: "Stops Stacked", val: "6 / 6", up: false },
                  { lbl: "SLA Risk", val: "Low", up: true },
                  { lbl: "Plan Built In", val: "142 ms", up: false },
                ].map((row) => (
                  <div className="hp-decision-row" key={row.lbl}>
                    <span className="hp-dlbl">{row.lbl}</span>
                    <span className={row.up ? "hp-dval hp-dup" : "hp-dval"}>{row.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="hp-route-caps reveal">
            {routeCaps.map((cap) => (
              <div className="hp-route-cap" key={cap.n}>
                <h4 className="hp-cap-h">{cap.title}</h4>
                <p className="hp-cap-p">{cap.desc}</p>
              </div>
            ))}
          </div>

          <div className="dp-cta-row reveal">
            <a href="/contact" className="dp-btn-primary">
              Talk to a logistics architect
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
            </a>
            <a href="/products" className="dp-btn-ghost">See Dispatch Platform →</a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <div className="hp-container">
          <span className="hp-section-tag">FAQ</span>
          <h2 className="faq-h2">Common questions about <em>dispatch &amp; routing</em><span style={{color:'#2D2BE0'}}>.</span></h2>
          <div className="faq-list">
            {[
              {
                q: "What is Ajil's dispatch service?",
                a: "Ajil's dispatch service is a 24/7 command centre that plans, monitors and optimises delivery routes across your fleet using stacking logic, live re-routing and local intelligence. The operation runs from Doha with senior dispatchers managing every active route across Qatar and UAE.",
              },
              {
                q: "How does route optimization reduce cost per drop?",
                a: "Stacking logic bundles multiple deliveries onto a single route based on time windows, vehicle capacity and SLA priority. In live deployments, Ajil's optimization engine has reduced cost per drop by up to 34% and cut route time by up to 28% versus unoptimised dispatch plans.",
              },
              {
                q: "What is order stacking logic in logistics?",
                a: "Order stacking is the process of combining multiple customer deliveries into a single optimised route. The Ajil engine considers time windows, vehicle capacity, geographic clustering and SLA risk to determine the optimal stack, typically reducing empty kilometres by over 30% versus separate single-delivery routes.",
              },
              {
                q: "Does Ajil's dispatch cover Ramadan and public holiday scheduling?",
                a: "Yes. Local intelligence is built into the routing engine for Qatar and UAE: prayer time windows, Ramadan schedule shifts, school zones, public holiday road patterns and gated compound access rules.",
              },
              {
                q: "Can I use Ajil's dispatch service with my own riders?",
                a: "Yes. Ajil dispatch integrates with your existing fleet via API. The dispatch platform can plan and monitor third-party and in-house fleets alongside Ajil riders, with a unified live dashboard showing all active routes and SLA status.",
              },
            ].map((item) => (
              <div key={item.q} className="faq-item">
                <h3 className="faq-q">{item.q}</h3>
                <p className="faq-a">{item.a}</p>
              </div>
            ))}
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

        .dp-hero { padding: 160px 0 96px; background: #fff; border-bottom: 1px solid var(--line); }
        .dp-h1 { font-size: clamp(38px, 5vw, 72px); line-height: 1; letter-spacing: -.04em; font-weight: 600; color: var(--ink); margin: 0 0 28px; }
        .dp-h1 em { font-family: var(--font-instrument), serif; font-style: italic; font-weight: 400; color: #2D2BE0; }
        .dp-lead { font-size: clamp(15px, 1.2vw, 18px); color: var(--muted); max-width: 56ch; line-height: 1.7; margin-bottom: 36px; }
        .dp-pills { display: flex; flex-wrap: wrap; gap: 8px; }
        .hp-route-pill { display: inline-flex; align-items: center; gap: 8px; padding: 7px 14px; border-radius: 6px; background: var(--paper); border: 1px solid var(--line-strong); font-family: var(--font-jetbrains), monospace; font-size: 11px; color: rgba(27,26,104,.62); letter-spacing: .06em; text-transform: uppercase; }
        .hp-pdot { display: none; }

        .hp-routing { background: var(--paper-2); border-top: 1px solid var(--line); padding: 100px 0 140px; }
        .hp-route-hero { display: grid; grid-template-columns: 1fr 1.3fr; gap: 80px; align-items: center; margin-bottom: 0; }
        @media (max-width: 980px) { .hp-route-hero { grid-template-columns: 1fr; gap: 48px; } }
        .hp-route-p { font-size: 18px; color: var(--muted); line-height: 1.65; max-width: 48ch; }
        .hp-route-canvas { position: relative; border: 1px solid var(--line-strong); border-radius: 12px; background: #fff; padding: 32px; overflow: hidden; aspect-ratio: 1.2/1; }
        .hp-route-canvas-bg { position: absolute; inset: 0; background-image: linear-gradient(rgba(15,26,61,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(15,26,61,.04) 1px, transparent 1px); background-size: 40px 40px; }
        .hp-route-svg { position: absolute; inset: 0; width: 100%; height: 100%; }
        .hp-route-old { stroke: rgba(194,52,42,.55); stroke-width: 1.4; fill: none; stroke-dasharray: 3 4; }
        .hp-route-new { stroke: var(--violet); stroke-width: 2.2; fill: none; stroke-dasharray: 8 4; animation: hp-dashflow 3s linear infinite; }
        @keyframes hp-dashflow { to { stroke-dashoffset: -50; } }
        .hp-route-pt { fill: var(--violet); animation: hp-ptpulse 2.4s infinite; }
        .hp-route-pt2 { fill: var(--indigo); animation: hp-ptpulse 2.4s .8s infinite; }
        .hp-route-hub { fill: #0E9D6E; }
        @keyframes hp-ptpulse { 0%,100% { r: 5px; } 50% { r: 7px; } }
        .hp-ai-badge { position: absolute; top: 24px; left: 24px; padding: 7px 12px; border-radius: 6px; background: #fff; border: 1px solid var(--line-strong); font-family: var(--font-jetbrains), monospace; font-size: 10px; color: rgba(27,26,104,.55); display: flex; align-items: center; gap: 8px; letter-spacing: .08em; text-transform: uppercase; }
        .hp-ai-dot { width: 6px; height: 6px; border-radius: 50%; background: #0E9D6E; display: inline-block; flex-shrink: 0; }
        .hp-route-legend { position: absolute; top: 24px; right: 24px; padding: 10px 12px; border-radius: 6px; background: #fff; border: 1px solid var(--line-strong); display: flex; flex-direction: column; gap: 8px; font-family: var(--font-jetbrains), monospace; font-size: 10px; }
        .hp-legend-item { display: flex; align-items: center; gap: 8px; color: var(--muted); }
        .hp-legend-line { width: 18px; height: 2px; border-radius: 2px; display: inline-block; }
        .hp-leg-old { background: rgba(194,52,42,.6); }
        .hp-leg-new { background: var(--violet); }
        .hp-legend-dot { width: 8px; height: 8px; border-radius: 50%; display: inline-block; }
        .hp-leg-hub { background: #0E9D6E; }
        .hp-decision-panel { position: absolute; bottom: 24px; right: 24px; width: 220px; padding: 16px; border-radius: 8px; background: #fff; border: 1px solid var(--line-strong); }
        .hp-decision-row { display: flex; justify-content: space-between; font-family: var(--font-geist-mono), monospace; font-size: 11px; padding: 6px 0; border-bottom: 1px solid rgba(15,26,61,.06); }
        .hp-decision-row:last-child { border-bottom: none; }
        .hp-dlbl { color: var(--muted-2); text-transform: uppercase; letter-spacing: .06em; }
        .hp-dval { color: var(--ink); font-weight: 500; }
        .hp-dup { color: #0E9D6E; }
        .hp-route-caps { display: grid; grid-template-columns: repeat(4,1fr); gap: 1px; margin-top: 100px; background: var(--line); border: 1px solid var(--line); border-radius: 10px; overflow: hidden; }
        @media (max-width: 1000px) { .hp-route-caps { grid-template-columns: repeat(2,1fr); } }
        @media (max-width: 560px) { .hp-route-caps { grid-template-columns: 1fr; } }
        .hp-route-cap { background: var(--paper); padding: 32px 28px; transition: background .3s ease; }
        .hp-route-cap:hover { background: var(--paper-3); }
        .hp-cap-num { font-family: var(--font-instrument), serif; font-style: italic; font-weight: 400; font-size: 15px; color: var(--indigo); }
        .hp-cap-h { font-size: 18px; font-weight: 500; letter-spacing: -.02em; margin: 14px 0 8px; color: var(--ink); }
        .hp-cap-p { font-size: 13px; color: var(--muted); line-height: 1.6; }
        .dp-cta-row { display: flex; align-items: center; gap: 16px; flex-wrap: wrap; margin-top: 80px; padding-top: 64px; border-top: 1px solid var(--line); }
        .dp-btn-primary { background: #1B1A68; color: #fff; font-weight: 600; padding: 13px 24px; border-radius: 8px; font-size: 15px; display: inline-flex; align-items: center; gap: 10px; transition: background .2s ease; }
        .dp-btn-primary:hover { background: #14136B; }
        .dp-btn-ghost { color: var(--indigo); font-weight: 500; font-size: 15px; }
        .dp-btn-ghost:hover { text-decoration: underline; }
        .faq-section { padding: 100px 0 120px; background: var(--paper-2); border-top: 1px solid var(--line); }
        .faq-h2 { font-size: clamp(28px, 3.6vw, 48px); line-height: 1.05; letter-spacing: -.035em; font-weight: 600; color: var(--ink); margin-top: 20px; max-width: 24ch; }
        .faq-h2 em { font-family: var(--font-instrument), serif; font-style: italic; font-weight: 400; color: #2D2BE0; }
        .faq-list { display: flex; flex-direction: column; border-top: 1px solid var(--line); max-width: 820px; margin-top: 48px; }
        .faq-item { padding: 28px 0; border-bottom: 1px solid var(--line); }
        .faq-q { font-size: 17px; font-weight: 500; letter-spacing: -.02em; color: var(--ink); margin-bottom: 10px; line-height: 1.35; }
        .faq-a { font-size: 14px; color: var(--muted); line-height: 1.7; max-width: 72ch; }
      `}</style>
    </>
  );
}
