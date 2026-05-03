"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="ajil-nav">
        <div className="ajil-nav-inner">
          {/* Logo */}
          <Link href="/" className="ajil-logo">
            <Image src="/ajil-logo-transparent.png" alt="Ajil Logistics Services" height={50} width={150} style={{ objectFit: 'contain' }} priority />
          </Link>

          {/* Center nav links */}
          <div className="ajil-nav-links">
            <Link href="/">Home</Link>
            <Link href="/dispatch">Dispatch</Link>
            <Link href="/products">Products</Link>
            <Link href="/services">Service Models</Link>
            <Link href="/dedicated">Dedicated Logistics</Link>
            <Link href="/join">Join Us</Link>
          </div>

          {/* CTA */}
          <div className="ajil-nav-cta">
            <Link href="/contact" className="ajil-btn-primary">
              Talk to us
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
            </Link>
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

      {/* WhatsApp FAB */}
      <a
        href="https://wa.me/97477058594"
        target="_blank"
        rel="noopener noreferrer"
        className="ajil-wa-fab"
        aria-label="Chat on WhatsApp"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

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
                { href: '/', label: 'Home' },
                { href: '/dispatch', label: 'Dispatch' },
                { href: '/products', label: 'Products' },
                { href: '/services', label: 'Service Models' },
                { href: '/dedicated', label: 'Dedicated Logistics' },
                { href: '/join', label: 'Join Us' },
              ].map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="ajil-mobile-link">
                  {item.label}
                </Link>
              ))}
            </div>
            <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 10 }}>
<Link href="/contact" onClick={() => setMobileOpen(false)} style={{ display: 'block', padding: '13px 20px', borderRadius: 999, background: 'var(--ink)', fontSize: 14, fontWeight: 600, textAlign: 'center', color: 'var(--paper)' }}>Talk to us</Link>
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
        .ajil-wa-fab {
          position: fixed; bottom: 28px; right: 28px; z-index: 150;
          width: 52px; height: 52px; border-radius: 50%;
          background: #1B1A68;
          color: #fff;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 4px 20px -4px rgba(27,26,104,.55), 0 1px 0 rgba(255,255,255,.12) inset;
          transition: transform .25s cubic-bezier(.2,.7,.2,1), box-shadow .25s ease, background .2s ease;
        }
        .ajil-wa-fab:hover {
          transform: translateY(-3px) scale(1.06);
          background: #2D2BE0;
          box-shadow: 0 12px 32px -6px rgba(27,26,104,.6), 0 1px 0 rgba(255,255,255,.12) inset;
        }
        @media (max-width: 640px) {
          .ajil-wa-fab { bottom: 20px; right: 20px; width: 46px; height: 46px; }
        }
      `}</style>
    </>
  );
}
