"use client";
import Image from "next/image";
import { useState } from "react";

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="ajil-nav">
        <div className="ajil-nav-inner">
          {/* Logo */}
          <a href="/" className="ajil-logo">
            <Image src="/ajil-logo-transparent.png" alt="Ajil" height={50} width={150} style={{ objectFit: 'contain' }} priority />
          </a>

          {/* Center nav links */}
          <div className="ajil-nav-links">
            <a href="/#dispatch">Dispatch</a>
            <a href="/#services">Service Models</a>
            <a href="/#dedicated">Dedicated Logistics</a>
            <a href="/#join">Join Us</a>
            <a href="/#why">Why Ajil</a>
          </div>

          {/* CTA */}
          <div className="ajil-nav-cta">
<a href="/#cta" className="ajil-btn-primary">
              Talk to us
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
            </a>
            <button className="ajil-menu-btn" onClick={() => setMobileOpen(true)} aria-label="Menu">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="ajil-mobile-overlay" onClick={() => setMobileOpen(false)}>
          <div className="ajil-mobile-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="ajil-mobile-head">
              <span style={{ fontFamily: 'var(--font-geist-mono), monospace', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--muted-2)' }}>Menu</span>
              <button onClick={() => setMobileOpen(false)} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--muted)', display: 'flex', alignItems: 'center' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
            </div>
            <div className="ajil-mobile-links">
              {[
                { href: '/#dispatch', label: 'Dispatch' },
                { href: '/#services', label: 'Service Models' },
                { href: '/#dedicated', label: 'Dedicated Logistics' },
                { href: '/#join', label: 'Join Us' },
                { href: '/#why', label: 'Why Ajil' },
              ].map((item) => (
                <a key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="ajil-mobile-link">
                  {item.label}
                </a>
              ))}
            </div>
            <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 10 }}>
<a href="/#cta" onClick={() => setMobileOpen(false)} style={{ display: 'block', padding: '13px 20px', borderRadius: 999, background: 'var(--ink)', fontSize: 14, fontWeight: 600, textAlign: 'center', color: 'var(--paper)' }}>Talk to us</a>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .ajil-nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          padding: clamp(8px, 1.4vh, 18px) clamp(32px, 5vw, 80px);
        }
        .ajil-nav-inner {
          display: flex; align-items: center; justify-content: space-between;
          padding: clamp(1px, 0.2vh, 4px) clamp(14px, 1.5vw, 20px) clamp(1px, 0.2vh, 4px) clamp(10px, 1.2vw, 16px);
          max-width: 1440px; margin: 0 auto;
          gap: clamp(14px, 2vw, 24px);
          background: rgba(255,255,255,.95);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          border-radius: 999px;
          border: 1px solid rgba(27,26,104,.08);
          box-shadow: 0 4px 24px -6px rgba(27,26,104,.12), 0 1px 0 rgba(255,255,255,.8) inset;
          transition: box-shadow .3s ease;
        }
        .ajil-nav-inner:hover {
          box-shadow: 0 8px 32px -6px rgba(27,26,104,.18), 0 1px 0 rgba(255,255,255,.8) inset;
        }
        .ajil-logo {
          display: inline-flex; align-items: center;
          flex-shrink: 0;
        }
        .ajil-nav-links {
          display: flex; gap: clamp(18px, 2.4vw, 32px); align-items: center;
          font-size: clamp(13px, 1vw, 14px); font-weight: 500; color: var(--ink);
        }
        .ajil-nav-links a { transition: opacity .2s ease; opacity: .65; }
        .ajil-nav-links a:hover { opacity: 1; }
        .ajil-nav-cta { display: flex; gap: clamp(7px, 0.8vw, 10px); align-items: center; flex-shrink: 0; }
        .ajil-btn-primary {
          display: inline-flex; align-items: center; gap: 7px;
          padding: clamp(7px, 0.9vh, 10px) clamp(14px, 1.5vw, 20px);
          border-radius: 999px; font-size: clamp(13px, 1vw, 14px); font-weight: 600;
          background: #1B1A68; color: #fff;
          box-shadow: 0 1px 0 rgba(255,255,255,.1) inset, 0 6px 20px -8px rgba(27,26,104,.55);
          transition: all .25s cubic-bezier(.2,.7,.2,1); white-space: nowrap;
        }
        .ajil-btn-primary:hover {
          transform: translateY(-1px);
          box-shadow: 0 1px 0 rgba(255,255,255,.1) inset, 0 12px 28px -8px rgba(27,26,104,.7);
          background: #14136B;
        }
        .ajil-btn-primary svg { transition: transform .25s ease; }
        .ajil-btn-primary:hover svg { transform: translateX(3px); }
        .ajil-menu-btn {
          display: none;
          width: clamp(30px, 3vw, 36px); height: clamp(30px, 3vw, 36px);
          border-radius: 999px; border: 1px solid var(--line-strong);
          background: transparent; cursor: pointer; color: var(--ink);
          align-items: center; justify-content: center;
        }
        .ajil-mobile-overlay {
          position: fixed; inset: 0; z-index: 200;
          background: rgba(27,26,104,.35); backdrop-filter: blur(4px);
        }
        .ajil-mobile-drawer {
          position: absolute; top: 0; right: 0; bottom: 0;
          width: min(360px, 100vw); background: var(--paper);
          padding: 24px 24px 40px; overflow: auto;
        }
        .ajil-mobile-head {
          display: flex; justify-content: space-between; align-items: center;
          margin-bottom: 32px;
        }
        .ajil-mobile-links { display: flex; flex-direction: column; }
        .ajil-mobile-link {
          display: flex; align-items: center;
          padding: 16px 0; border-bottom: 1px solid var(--line);
          font-size: 16px; font-weight: 500; color: var(--ink);
        }
        .ajil-mobile-link:last-child { border-bottom: none; }
        @media (max-width: 980px) {
          .ajil-nav-links { display: none !important; }
          .ajil-menu-btn { display: inline-flex !important; }
        }
      `}</style>
    </>
  );
}
