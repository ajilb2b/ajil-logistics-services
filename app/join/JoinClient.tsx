"use client";
import { useEffect } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const WaSvg = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function JoinPage() {
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

      <header className="jn-hero">
        <div className="hp-container">
          <span className="hp-section-tag">Join Us</span>
          <h1 className="jn-h1">Two Paths, <span className="jn-accent">One Network</span>.</h1>
          <p className="jn-lead">Whether you move goods or have goods to move, Ajil is hiring, partnering and onboarding every week across Qatar &amp; UAE.</p>
        </div>
      </header>

      <section className="jn-section">
        <div className="hp-container">
          <div className="hp-join-grid reveal">
            {/* Driver card */}
            <div className="hp-join-card">
              <div className="hp-join-bg hp-join-bg-driver" />
              <div className="hp-join-inner">
                <div className="hp-join-icon hp-join-icon-driver">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="6" cy="17" r="3"/><circle cx="18" cy="17" r="3"/><path d="M6 17l4-9 4 4h4M14 6l4 11"/></svg>
                </div>
                <span className="hp-join-eyebrow">For Riders &amp; Drivers</span>
                <h3 className="hp-join-title">Drive With Ajil.<br /><span className="jn-accent">Earn Every Day.</span></h3>
                <p className="hp-join-desc">Bikes, cars and vans, owned or rented. Daily routes, weekly payouts, performance bonuses, and a network big enough to keep you moving every shift.</p>
                <ul className="hp-join-perks">
                  {["Weekly Payouts In QAR / AED", "Daily Stacked Routes, Earn More Per Hour", "Bike, Vehicle & Fuel Support", "Health Insurance & Visa Support", "Performance Bonuses Every Month"].map((perk) => (
                    <li key={perk}><span className="hp-perk-dot" />{perk}</li>
                  ))}
                </ul>
                <div className="hp-join-actions">
                  <a href="https://wa.me/97441404004?text=Hi%20Ajil%20-%20I%20want%20to%20join%20as%20a%20driver" className="hp-join-btn hp-btn-wa">
                    <WaSvg />
                    <span><small>WhatsApp Us</small><strong>Start Your Application</strong></span>
                  </a>
                  <a href="/driver-application" className="hp-join-btn hp-btn-form">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                    Driver Application Form
                  </a>
                </div>
                <p className="hp-join-foot">Now Hiring · Doha · Dubai</p>
              </div>
            </div>

            {/* Client card */}
            <div className="hp-join-card">
              <div className="hp-join-bg hp-join-bg-client" />
              <div className="hp-join-inner">
                <div className="hp-join-icon hp-join-icon-client">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 21V8l9-5 9 5v13"/><path d="M9 21V12h6v9"/></svg>
                </div>
                <span className="hp-join-eyebrow">For Businesses</span>
                <h3 className="hp-join-title">Move Your Goods.<br /><span className="jn-accent">Move Faster.</span></h3>
                <p className="hp-join-desc">Whether you ship 100 or 100,000 deliveries a month, book a working session with our logistics team. We&apos;ll show you which service model fits and what it would cost against your real numbers.</p>
                <ul className="hp-join-perks">
                  {["Same-Day & Scheduled Coverage · Qatar & UAE", "Pricing Built Around Your Volume", "Rapid Onboarding & Dedicated Setup Support", "Live Visibility & Branded Tracking Pages", "Named Account Manager From Day One"].map((perk) => (
                    <li key={perk}><span className="hp-perk-dot hp-perk-dot-client" />{perk}</li>
                  ))}
                </ul>
                <div className="hp-join-actions">
                  <a href="https://wa.me/97441404004?text=Hi%20Ajil%20-%20I'd%20like%20to%20discuss%20logistics%20for%20my%20business" className="hp-join-btn hp-btn-wa">
                    <WaSvg />
                    <span><small>WhatsApp Sales</small><strong>Get A Quote Today</strong></span>
                  </a>
                  <a href="/contact" className="hp-join-btn hp-btn-form-alt">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
                    Request Working Session
                  </a>
                </div>
                <p className="hp-join-foot">Trusted By 60+ Brands Across Qatar &amp; UAE</p>
              </div>
            </div>
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

        .jn-hero { padding: 160px 0 96px; background: #fff; border-bottom: 1px solid var(--line); }
        .jn-h1 { font-size: clamp(38px, 5vw, 72px); line-height: 1; letter-spacing: -.04em; font-weight: 600; color: var(--ink); margin: 0 0 28px; }
        .jn-accent { color: #2D2BE0; font-family: var(--font-instrument), serif; font-style: italic; font-weight: 400; }
        .jn-lead { font-size: clamp(15px, 1.2vw, 18px); color: var(--muted); max-width: 54ch; line-height: 1.7; }

        .jn-section { background: var(--paper-2); border-top: 1px solid var(--line); padding: 100px 0 140px; }
        .hp-join-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        @media (max-width: 900px) { .hp-join-grid { grid-template-columns: 1fr; } }
        .hp-join-card { position: relative; border-radius: 10px; overflow: hidden; border: 1px solid var(--line-strong); min-height: 600px; background: #fff; transition: border-color .2s ease; }
        .hp-join-card:hover { border-color: rgba(27,26,104,.22); }
        .hp-join-bg { display: none; }
        .hp-join-inner { position: relative; padding: 44px 40px; display: flex; flex-direction: column; height: 100%; min-height: 600px; color: var(--ink); }
        @media (max-width: 680px) { .hp-join-inner { padding: 32px 24px; min-height: auto; } }
        .hp-join-icon { width: 44px; height: 44px; border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-bottom: 24px; background: var(--paper-3); border: 1px solid var(--line-strong); color: var(--ink); }
        .hp-join-icon-driver { color: var(--ink); }
        .hp-join-icon-client { color: var(--ink); }
        .hp-join-eyebrow { font-family: var(--font-instrument), serif; font-style: italic; font-weight: 400; font-size: 14px; letter-spacing: .01em; margin-bottom: 12px; color: rgba(27,26,104,.42); }
        .hp-join-title { font-size: clamp(26px, 3.5vw, 40px); font-weight: 600; line-height: 1.1; letter-spacing: -.03em; margin-bottom: 16px; color: var(--ink); }
        .hp-join-desc { font-size: 15px; color: var(--muted); line-height: 1.65; margin-bottom: 24px; max-width: 44ch; }
        .hp-join-perks { list-style: none; padding: 0; display: flex; flex-direction: column; gap: 10px; margin-bottom: 32px; border-top: 1px solid var(--line); padding-top: 20px; }
        .hp-join-perks li { display: flex; align-items: center; gap: 10px; font-size: 14px; color: var(--ink); }
        .hp-perk-dot { flex-shrink: 0; width: 5px; height: 5px; border-radius: 50%; background: var(--ink); opacity: .35; display: inline-block; }
        .hp-perk-dot-client { background: var(--ink); }
        .hp-join-actions { display: flex; flex-direction: column; gap: 10px; margin-top: auto; }
        .hp-join-btn { display: flex; align-items: center; gap: 12px; padding: 13px 18px; border-radius: 8px; font-size: 14px; font-weight: 500; transition: background .2s ease; text-decoration: none; }
        .hp-btn-wa { background: var(--ink); color: #fff; }
        .hp-btn-wa:hover { background: #14136B; }
        .hp-btn-wa span { display: flex; flex-direction: column; }
        .hp-btn-wa small { font-size: 10px; font-family: var(--font-jetbrains), monospace; letter-spacing: .08em; opacity: .6; text-transform: uppercase; }
        .hp-btn-wa strong { font-size: 14px; font-weight: 600; }
        .hp-btn-form { background: var(--paper-3); color: var(--ink); border: 1px solid var(--line-strong); }
        .hp-btn-form:hover { background: var(--paper-4); }
        .hp-btn-form-alt { background: var(--paper-3); color: var(--ink); border: 1px solid var(--line-strong); }
        .hp-btn-form-alt:hover { background: var(--paper-4); }
        .hp-join-foot { font-family: var(--font-jetbrains), monospace; font-size: 10px; color: var(--muted-2); letter-spacing: .08em; text-transform: uppercase; margin-top: 20px; }
      `}</style>
    </>
  );
}
