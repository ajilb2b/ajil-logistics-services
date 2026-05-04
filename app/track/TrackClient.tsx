"use client";
import { useState, useEffect, useRef } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const STEPS = [
  { key: "pending",          label: "Order Received",   sub: "Your order has been logged in the system" },
  { key: "picked_up",        label: "Picked Up",        sub: "Collected from sender" },
  { key: "in_transit",       label: "In Transit",       sub: "Moving through the network" },
  { key: "out_for_delivery", label: "Out for Delivery", sub: "Your rider is on the way" },
  { key: "delivered",        label: "Delivered",        sub: "Order successfully delivered" },
];
const STATUS_ORDER = ["pending", "picked_up", "in_transit", "out_for_delivery", "delivered"];

type DeliveryEvent = { label: string; timestamp: string; note?: string };
type Delivery = {
  tracking_number: string;
  status: string;
  recipient_area?: string;
  estimated_delivery?: string;
  brand_name?: string;
  events?: DeliveryEvent[];
  created_at: string;
};

function fmt(ts: string) {
  return new Date(ts).toLocaleString("en-GB", { weekday: "short", day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" });
}
function fmtTime(ts: string) {
  return new Date(ts).toLocaleString("en-GB", { hour: "2-digit", minute: "2-digit" });
}
function fmtDate(ts: string) {
  return new Date(ts).toLocaleString("en-GB", { weekday: "long", day: "numeric", month: "long" });
}

export default function TrackClient({ initialId }: { initialId?: string }) {
  const [query, setQuery] = useState(initialId ?? "");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ found: boolean; delivery?: Delivery } | null>(null);
  const [searched, setSearched] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => { if (initialId) doSearch(initialId); }, []);

  async function doSearch(id?: string) {
    const q = (id ?? query).trim().toUpperCase();
    if (!q) { inputRef.current?.focus(); return; }
    setLoading(true);
    setSearched(true);
    try {
      const res = await fetch(`/api/track?id=${encodeURIComponent(q)}`);
      setResult(await res.json());
    } catch {
      setResult({ found: false });
    } finally {
      setLoading(false);
    }
  }

  const d = result?.delivery;
  const stepIndex = d ? STATUS_ORDER.indexOf(d.status) : -1;
  const isFailed = d?.status === "failed";
  const isDelivered = d?.status === "delivered";
  const isActive = d && !isFailed && !isDelivered;

  return (
    <>
      <Nav />

      {/* ── Hero / Search ── */}
      <header className="tr-hero">
        <div className="tr-hero-bg" />
        <div className="hp-container">
          <div className="tr-hero-content">
            <span className="hp-section-tag">Live Tracking</span>
            <h1 className="tr-h1">Track Your <em>Delivery</em><span style={{ color: "#2D2BE0" }}>.</span></h1>
            <p className="tr-lead">Enter your Ajil tracking number to get real-time status updates.</p>
            <form className="tr-search-wrap" onSubmit={(e) => { e.preventDefault(); doSearch(); }}>
              <div className="tr-search-box">
                <svg className="tr-search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
                <input
                  ref={inputRef}
                  className="tr-input"
                  type="text"
                  placeholder="e.g. AJL-20481"
                  value={query}
                  onChange={(e) => setQuery(e.target.value.toUpperCase())}
                  spellCheck={false}
                  autoComplete="off"
                  autoFocus
                />
                {query && (
                  <button type="button" className="tr-clear" onClick={() => { setQuery(""); setResult(null); setSearched(false); inputRef.current?.focus(); }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                  </button>
                )}
              </div>
              <button type="submit" className="tr-search-btn" disabled={loading}>
                {loading
                  ? <svg className="tr-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
                  : "Track"
                }
              </button>
            </form>
          </div>
        </div>
      </header>

      {/* ── Results ── */}
      <section className="tr-body">
        <div className="hp-container">

          {/* Idle */}
          {!searched && (
            <div className="tr-idle">
              <div className="tr-idle-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"/></svg>
              </div>
              <p className="tr-idle-title">Enter a tracking number above</p>
              <p className="tr-idle-sub">Your tracking number was included in the confirmation message or email sent by the retailer.</p>
            </div>
          )}

          {/* Not found */}
          {searched && !loading && result && !result.found && (
            <div className="tr-notfound">
              <div className="tr-nf-ring">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/><line x1="11" y1="8" x2="11" y2="12"/><line x1="11" y1="15" x2="11.01" y2="15"/></svg>
              </div>
              <h2 className="tr-nf-title">No shipment found</h2>
              <p className="tr-nf-desc">
                We couldn&apos;t find any delivery matching <span className="tr-nf-code">{query}</span>.<br />
                This could mean the tracking number hasn&apos;t been activated yet, or it may have a typo.
              </p>
              <div className="tr-nf-tips">
                <div className="tr-nf-tip"><span className="tr-nf-dot" />Check for extra spaces or incorrect characters</div>
                <div className="tr-nf-tip"><span className="tr-nf-dot" />Tracking numbers are usually in the format AJL-XXXXX</div>
                <div className="tr-nf-tip"><span className="tr-nf-dot" />New shipments may take up to 2 hours to appear</div>
              </div>
              <a href="mailto:support@ajilb2b.com" className="tr-nf-cta">Contact support</a>
            </div>
          )}

          {/* Found */}
          {searched && !loading && result?.found && d && (
            <div className="tr-found">

              {/* Status banner */}
              <div className={`tr-banner tr-banner-${isFailed ? "failed" : isDelivered ? "delivered" : "active"}`}>
                <div className="tr-banner-left">
                  <div className="tr-banner-status">
                    {isActive && <span className="tr-live-dot" />}
                    {isFailed ? "Delivery Failed" : STEPS.find(s => s.key === d.status)?.label}
                  </div>
                  <div className="tr-banner-sub">
                    {isFailed
                      ? "We were unable to complete this delivery. Contact the sender to rearrange."
                      : STEPS.find(s => s.key === d.status)?.sub}
                  </div>
                </div>
                <div className="tr-banner-right">
                  {d.estimated_delivery && !isDelivered && !isFailed && (
                    <div className="tr-eta-block">
                      <div className="tr-eta-lbl">Estimated arrival</div>
                      <div className="tr-eta-date">{fmtDate(d.estimated_delivery)}</div>
                      <div className="tr-eta-time">by {fmtTime(d.estimated_delivery)}</div>
                    </div>
                  )}
                  {isDelivered && d.events && d.events.length > 0 && (
                    <div className="tr-eta-block">
                      <div className="tr-eta-lbl">Delivered on</div>
                      <div className="tr-eta-date">{fmtDate(d.events[0].timestamp)}</div>
                      <div className="tr-eta-time">at {fmtTime(d.events[0].timestamp)}</div>
                    </div>
                  )}
                </div>
              </div>

              <div className="tr-grid">
                {/* Left column */}
                <div className="tr-main">

                  {/* Tracking number row */}
                  <div className="tr-card tr-card-id">
                    <div>
                      <div className="tr-card-lbl">Tracking number</div>
                      <div className="tr-tn">{d.tracking_number}</div>
                      {d.brand_name && <div className="tr-brand">Shipped via {d.brand_name}</div>}
                    </div>
                    <div className={`tr-status-pill tr-pill-${isFailed ? "failed" : d.status}`}>
                      {isFailed ? "Failed" : STEPS.find(s => s.key === d.status)?.label}
                    </div>
                  </div>

                  {/* Progress stepper */}
                  {!isFailed && (
                    <div className="tr-card tr-card-steps">
                      <div className="tr-card-lbl" style={{ marginBottom: 28 }}>Shipment progress</div>
                      <div className="tr-stepper">
                        {STEPS.map((step, i) => {
                          const done = i < stepIndex;
                          const active = i === stepIndex;
                          return (
                            <div key={step.key} className={`tr-st ${done ? "tr-st-done" : ""} ${active ? "tr-st-active" : ""}`}>
                              <div className="tr-st-left">
                                <div className="tr-st-circle">
                                  {done
                                    ? <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                                    : active
                                    ? <span className="tr-st-inner-dot" />
                                    : <span className="tr-st-empty-dot" />
                                  }
                                </div>
                                {i < STEPS.length - 1 && <div className={`tr-st-line ${done ? "tr-st-line-done" : ""}`} />}
                              </div>
                              <div className="tr-st-right">
                                <div className="tr-st-label">{step.label}</div>
                                {active && <div className="tr-st-sub">{step.sub}</div>}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Details */}
                  <div className="tr-card tr-card-meta">
                    {d.recipient_area && (
                      <div className="tr-meta-row">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><circle cx="12" cy="11" r="3"/></svg>
                        <div>
                          <div className="tr-meta-lbl">Destination</div>
                          <div className="tr-meta-val">{d.recipient_area}</div>
                        </div>
                      </div>
                    )}
                    <div className="tr-meta-row">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                      <div>
                        <div className="tr-meta-lbl">Order placed</div>
                        <div className="tr-meta-val">{fmt(d.created_at)}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right column — timeline */}
                {d.events && d.events.length > 0 && (
                  <div className="tr-card tr-card-timeline">
                    <div className="tr-card-lbl" style={{ marginBottom: 20 }}>Delivery updates</div>
                    <div className="tr-tl">
                      {d.events.map((ev, i) => (
                        <div key={i} className={`tr-tl-row ${i === 0 ? "tr-tl-latest" : ""}`}>
                          <div className="tr-tl-indicator">
                            <div className={`tr-tl-dot ${i === 0 ? "tr-tl-dot-active" : ""}`} />
                            {i < d.events!.length - 1 && <div className="tr-tl-vline" />}
                          </div>
                          <div className="tr-tl-body">
                            <div className="tr-tl-label">{ev.label}</div>
                            {ev.note && <div className="tr-tl-note">{ev.note}</div>}
                            <div className="tr-tl-time">{fmt(ev.timestamp)}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

            </div>
          )}
        </div>
      </section>

      <Footer />

      <style>{`
        .hp-container { max-width: 1440px; margin: 0 auto; padding: 0 clamp(24px, 6vw, 88px); }
        @media (max-width: 760px) { .hp-container { padding: 0 20px; } }
        .hp-section-tag { font-family: var(--font-instrument), serif; font-style: italic; font-weight: 400; font-size: 14px; color: rgba(27,26,104,.42); letter-spacing: .01em; display: flex; align-items: center; gap: 10px; margin-bottom: 24px; }

        /* Hero */
        .tr-hero { padding: 140px 0 72px; background: #fff; border-bottom: 1px solid var(--line); position: relative; overflow: hidden; }
        .tr-hero-bg { position: absolute; inset: 0; background-image: radial-gradient(circle at 70% 50%, rgba(45,43,224,.04) 0%, transparent 60%); pointer-events: none; }
        .tr-hero-content { position: relative; max-width: 680px; }
        .tr-h1 { font-size: clamp(36px, 4.5vw, 64px); line-height: 1; letter-spacing: -.04em; font-weight: 600; color: var(--ink); margin: 0 0 16px; }
        .tr-h1 em { font-family: var(--font-instrument), serif; font-style: italic; font-weight: 400; color: #2D2BE0; }
        .tr-lead { font-size: 16px; color: var(--muted); max-width: 48ch; line-height: 1.65; margin-bottom: 36px; }
        .tr-search-wrap { display: flex; gap: 10px; max-width: 560px; }
        .tr-search-box { flex: 1; display: flex; align-items: center; gap: 10px; border: 1.5px solid var(--line-strong); border-radius: 10px; padding: 0 14px; background: #fff; transition: border-color .2s, box-shadow .2s; }
        .tr-search-box:focus-within { border-color: #2D2BE0; box-shadow: 0 0 0 3px rgba(45,43,224,.08); }
        .tr-search-icon { color: var(--muted-2); flex-shrink: 0; }
        .tr-input { flex: 1; padding: 14px 0; font-size: 15px; font-family: var(--font-jetbrains), monospace; letter-spacing: .08em; color: var(--ink); background: transparent; border: none; outline: none; min-width: 0; }
        .tr-input::placeholder { color: var(--muted-2); letter-spacing: .04em; font-size: 14px; }
        .tr-clear { width: 26px; height: 26px; border-radius: 50%; border: none; background: var(--paper-3); color: var(--muted); cursor: pointer; display: flex; align-items: center; justify-content: center; flex-shrink: 0; transition: background .15s; }
        .tr-clear:hover { background: var(--paper-4); }
        .tr-search-btn { flex-shrink: 0; background: #1B1A68; color: #fff; border: none; padding: 14px 28px; border-radius: 10px; font-size: 14px; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 8px; transition: background .2s; white-space: nowrap; }
        .tr-search-btn:hover:not(:disabled) { background: #14136B; }
        .tr-search-btn:disabled { opacity: .7; cursor: not-allowed; }
        .tr-spin { animation: tr-rot 1s linear infinite; }
        @keyframes tr-rot { to { transform: rotate(360deg); } }
        @media (max-width: 500px) { .tr-search-wrap { flex-direction: column; } .tr-search-btn { justify-content: center; } }

        /* Body */
        .tr-body { min-height: 400px; background: var(--paper-2); padding: 64px 0 120px; }

        /* Idle */
        .tr-idle { display: flex; flex-direction: column; align-items: center; text-align: center; padding: 80px 0; gap: 14px; }
        .tr-idle-icon { width: 72px; height: 72px; border-radius: 16px; background: #fff; border: 1px solid var(--line-strong); display: flex; align-items: center; justify-content: center; color: var(--muted); margin-bottom: 4px; }
        .tr-idle-title { font-size: 18px; font-weight: 600; color: var(--ink); letter-spacing: -.02em; }
        .tr-idle-sub { font-size: 14px; color: var(--muted); max-width: 38ch; line-height: 1.65; }

        /* Not found */
        .tr-notfound { display: flex; flex-direction: column; align-items: center; text-align: center; padding: 80px 0; gap: 12px; }
        .tr-nf-ring { width: 68px; height: 68px; border-radius: 50%; background: rgba(194,52,42,.06); border: 1.5px solid rgba(194,52,42,.18); display: flex; align-items: center; justify-content: center; color: #c2342a; margin-bottom: 8px; }
        .tr-nf-title { font-size: 22px; font-weight: 600; color: var(--ink); letter-spacing: -.02em; }
        .tr-nf-desc { font-size: 15px; color: var(--muted); max-width: 44ch; line-height: 1.7; }
        .tr-nf-code { font-family: var(--font-jetbrains), monospace; font-size: 13px; background: var(--paper-3); border: 1px solid var(--line-strong); padding: 2px 8px; border-radius: 4px; color: var(--ink); letter-spacing: .06em; }
        .tr-nf-tips { display: flex; flex-direction: column; gap: 8px; margin: 8px 0; text-align: left; background: #fff; border: 1px solid var(--line-strong); border-radius: 10px; padding: 18px 22px; max-width: 420px; width: 100%; }
        .tr-nf-tip { display: flex; align-items: center; gap: 10px; font-size: 13px; color: var(--muted); }
        .tr-nf-dot { width: 5px; height: 5px; border-radius: 50%; background: rgba(27,26,104,.3); flex-shrink: 0; }
        .tr-nf-cta { font-size: 14px; color: #2D2BE0; font-weight: 500; border: 1px solid rgba(45,43,224,.25); padding: 9px 20px; border-radius: 8px; transition: background .2s; }
        .tr-nf-cta:hover { background: rgba(45,43,224,.05); }

        /* Found */
        .tr-found { display: flex; flex-direction: column; gap: 20px; max-width: 960px; }

        /* Banner */
        .tr-banner { border-radius: 12px; padding: 28px 32px; display: flex; align-items: center; justify-content: space-between; gap: 20px; flex-wrap: wrap; }
        .tr-banner-active { background: linear-gradient(135deg, #1B1A68, #2D2BE0); color: #fff; }
        .tr-banner-delivered { background: linear-gradient(135deg, #065f46, #0e9d6e); color: #fff; }
        .tr-banner-failed { background: linear-gradient(135deg, #7f1d1d, #c2342a); color: #fff; }
        .tr-banner-status { font-size: 20px; font-weight: 700; letter-spacing: -.02em; display: flex; align-items: center; gap: 10px; margin-bottom: 6px; }
        .tr-banner-sub { font-size: 14px; opacity: .8; max-width: 44ch; line-height: 1.5; }
        .tr-live-dot { width: 9px; height: 9px; border-radius: 50%; background: #fff; display: inline-block; animation: tr-live 1.5s ease-in-out infinite; }
        @keyframes tr-live { 0%,100% { opacity: 1; } 50% { opacity: .35; } }
        .tr-eta-block { text-align: right; }
        .tr-eta-lbl { font-size: 11px; opacity: .65; text-transform: uppercase; letter-spacing: .1em; margin-bottom: 4px; font-family: var(--font-jetbrains), monospace; }
        .tr-eta-date { font-size: 16px; font-weight: 700; letter-spacing: -.01em; }
        .tr-eta-time { font-size: 13px; opacity: .75; }
        @media (max-width: 560px) { .tr-eta-block { text-align: left; } }

        /* Grid */
        .tr-grid { display: grid; grid-template-columns: 1.1fr .9fr; gap: 16px; align-items: start; }
        @media (max-width: 840px) { .tr-grid { grid-template-columns: 1fr; } }

        /* Cards */
        .tr-card { background: #fff; border: 1px solid var(--line-strong); border-radius: 12px; padding: 28px; }
        .tr-card-lbl { font-family: var(--font-jetbrains), monospace; font-size: 10px; text-transform: uppercase; letter-spacing: .12em; color: var(--muted-2); }
        .tr-main { display: flex; flex-direction: column; gap: 14px; }
        .tr-card-id { display: flex; align-items: flex-start; justify-content: space-between; gap: 16px; flex-wrap: wrap; }
        .tr-tn { font-family: var(--font-jetbrains), monospace; font-size: 20px; font-weight: 700; color: var(--ink); letter-spacing: .08em; margin: 6px 0 4px; }
        .tr-brand { font-size: 13px; color: var(--muted); }
        .tr-status-pill { font-family: var(--font-jetbrains), monospace; font-size: 11px; font-weight: 600; padding: 5px 13px; border-radius: 999px; text-transform: uppercase; letter-spacing: .08em; white-space: nowrap; align-self: flex-start; }
        .tr-pill-pending { background: rgba(27,26,104,.07); color: #1B1A68; }
        .tr-pill-picked_up,.tr-pill-in_transit { background: rgba(45,43,224,.08); color: #2D2BE0; }
        .tr-pill-out_for_delivery { background: rgba(251,146,60,.12); color: #c2620a; }
        .tr-pill-delivered { background: rgba(14,157,110,.1); color: #0e7a57; }
        .tr-pill-failed { background: rgba(194,52,42,.1); color: #c2342a; }

        /* Stepper */
        .tr-stepper { display: flex; flex-direction: column; gap: 0; }
        .tr-st { display: flex; gap: 16px; }
        .tr-st-left { display: flex; flex-direction: column; align-items: center; flex-shrink: 0; }
        .tr-st-circle { width: 34px; height: 34px; border-radius: 50%; border: 2px solid var(--line-strong); background: var(--paper); display: flex; align-items: center; justify-content: center; color: var(--muted-2); flex-shrink: 0; transition: all .25s; }
        .tr-st-done .tr-st-circle { background: #0e9d6e; border-color: #0e9d6e; color: #fff; }
        .tr-st-active .tr-st-circle { background: #2D2BE0; border-color: #2D2BE0; color: #fff; box-shadow: 0 0 0 5px rgba(45,43,224,.13); }
        .tr-st-inner-dot { width: 8px; height: 8px; border-radius: 50%; background: #fff; }
        .tr-st-empty-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--line-strong); }
        .tr-st-line { flex: 1; width: 2px; background: var(--line-strong); min-height: 22px; margin: 3px 0; }
        .tr-st-line-done { background: #0e9d6e; }
        .tr-st-right { padding: 6px 0 20px; }
        .tr-st-label { font-size: 14px; font-weight: 500; color: var(--muted-2); letter-spacing: -.01em; }
        .tr-st-done .tr-st-label { color: var(--ink); }
        .tr-st-active .tr-st-label { color: var(--ink); font-weight: 600; }
        .tr-st-sub { font-size: 12px; color: var(--muted); margin-top: 3px; }

        /* Meta */
        .tr-card-meta { display: flex; flex-direction: column; gap: 18px; }
        .tr-meta-row { display: flex; gap: 12px; align-items: flex-start; color: var(--muted); }
        .tr-meta-row svg { flex-shrink: 0; margin-top: 2px; }
        .tr-meta-lbl { font-size: 11px; font-family: var(--font-jetbrains), monospace; text-transform: uppercase; letter-spacing: .1em; color: var(--muted-2); margin-bottom: 3px; }
        .tr-meta-val { font-size: 14px; font-weight: 500; color: var(--ink); }

        /* Timeline */
        .tr-card-timeline { height: fit-content; }
        .tr-tl { display: flex; flex-direction: column; }
        .tr-tl-row { display: flex; gap: 16px; }
        .tr-tl-indicator { display: flex; flex-direction: column; align-items: center; flex-shrink: 0; }
        .tr-tl-dot { width: 12px; height: 12px; border-radius: 50%; background: var(--line-strong); flex-shrink: 0; border: 2px solid #fff; box-shadow: 0 0 0 2px var(--line-strong); margin-top: 2px; }
        .tr-tl-dot-active { background: #2D2BE0; box-shadow: 0 0 0 2px #2D2BE0, 0 0 0 5px rgba(45,43,224,.15); }
        .tr-tl-vline { flex: 1; width: 1px; background: var(--line); min-height: 16px; margin: 4px 0; }
        .tr-tl-body { padding-bottom: 22px; flex: 1; }
        .tr-tl-latest .tr-tl-label { color: var(--ink); font-weight: 600; }
        .tr-tl-label { font-size: 14px; color: var(--muted); margin-bottom: 2px; }
        .tr-tl-note { font-size: 12px; color: var(--muted-2); margin-bottom: 4px; line-height: 1.5; }
        .tr-tl-time { font-family: var(--font-jetbrains), monospace; font-size: 11px; color: var(--muted-2); letter-spacing: .04em; }
      `}</style>
    </>
  );
}
