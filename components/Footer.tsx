import Image from 'next/image';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--paper-2)', padding: '80px 0 40px', borderTop: '1px solid var(--line)', color: 'var(--ink)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>

        {/* Grid */}
        <div className="foot-grid">

          {/* Brand column */}
          <div>
            <div style={{ marginBottom: 18 }}>
              <Image src="/ajil-logo-transparent.png" alt="Ajil Logistics Services" width={140} height={46} style={{ objectFit: 'contain', objectPosition: 'left' }} />
            </div>
            <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.6, marginBottom: 18, maxWidth: '34ch' }}>
              Ajil Logistics Services is the end-to-end logistics partner for modern commerce. Built in Doha. Deployed across Qatar and UAE.
            </p>
            <div style={{ display: 'flex', gap: 8, marginTop: 20 }}>
              <input
                type="email"
                placeholder="your@work.com"
                aria-label="Email"
                style={{
                  flex: 1,
                  background: 'var(--paper)',
                  border: '1px solid var(--line-strong)',
                  borderRadius: 999,
                  padding: '10px 16px',
                  color: 'var(--ink)',
                  fontFamily: 'inherit',
                  fontSize: 13,
                  outline: 'none',
                  transition: 'border-color .2s ease',
                }}
              />
              <button
                style={{
                  background: 'var(--ink)',
                  color: 'var(--paper)',
                  borderRadius: 999,
                  padding: '10px 18px',
                  fontWeight: 600,
                  fontSize: 13,
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background .2s ease',
                  whiteSpace: 'nowrap',
                }}
              >
                Subscribe
              </button>
            </div>
          </div>

          {/* Service Models */}
          <div>
            <h5 className="foot-col-head">Service Models</h5>
            <ul className="foot-col-list">
              {[
                { label: 'Logistics Delivery Management Software', href: '/services' },
                { label: 'On-Demand Logistics', href: '/services' },
                { label: 'Dedicated Logistics', href: '/dedicated' },
                { label: 'Fully Managed Operations', href: '/services' },
                { label: 'Products', href: '/products' },
                { label: 'Dispatch', href: '/dispatch' },
                { label: 'Route Optimization', href: '/dispatch' },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="foot-link">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Join Us */}
          <div>
            <h5 className="foot-col-head">Join Us</h5>
            <ul className="foot-col-list">
              {[
                { label: 'Drive With Ajil', href: '/join' },
                { label: 'Become A Client', href: '/join' },
                { label: 'Careers', href: '/careers' },
                { label: 'Partner Programme', href: '/partner-programme' },
                { label: 'Contact', href: '/contact' },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="foot-link">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 className="foot-col-head">Company</h5>
            <ul className="foot-col-list">
              {[
                { label: 'About', href: '/about' },
                { label: 'Why Ajil', href: '/why' },
                { label: 'Careers', href: '/careers' },
                { label: 'Trust & Security', href: '/trust-security' },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="foot-link">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Markets */}
          <div>
            <h5 className="foot-col-head">Markets</h5>
            <ul className="foot-col-list">
              {[
                { label: 'Qatar', href: '/qatar' },
                { label: 'UAE', href: '/uae' },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="foot-link">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20, paddingTop: 32, borderTop: '1px solid var(--line)' }}>
          <p style={{ fontFamily: 'var(--font-geist-mono), monospace', fontSize: 11, color: 'var(--muted-2)', textTransform: 'uppercase', letterSpacing: '.08em' }}>
            © 2026 Ajil Logistics Services · Doha, Qatar · Efficiency in Motion
          </p>
          <div className="foot-social">
            {/* LinkedIn */}
            <a href="#" aria-label="LinkedIn" className="foot-social-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/></svg>
            </a>
            {/* X / Twitter */}
            <a href="#" aria-label="Twitter" className="foot-social-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            {/* Instagram */}
            <a href="#" aria-label="Instagram" className="foot-social-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor"/></svg>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .foot-grid {
          display: grid;
          grid-template-columns: 1.4fr repeat(4, 1fr);
          gap: 48px;
          margin-bottom: 60px;
        }
        .foot-col-head {
          font-family: var(--font-geist-mono), monospace;
          font-size: 11px; text-transform: uppercase;
          letter-spacing: .12em; color: var(--muted-2); margin-bottom: 18px;
          font-weight: 500;
        }
        .foot-col-list {
          list-style: none; padding: 0;
          display: flex; flex-direction: column; gap: 12px;
        }
        .foot-link {
          font-size: 14px; color: var(--muted); transition: color .2s ease;
        }
        .foot-link:hover { color: var(--ink); }
        .foot-social { display: flex; gap: 14px; }
        .foot-social-link {
          width: 36px; height: 36px; border-radius: 50%;
          border: 1px solid var(--line-strong); background: var(--paper);
          display: flex; align-items: center; justify-content: center;
          color: var(--muted); transition: all .2s ease;
        }
        .foot-social-link:hover { border-color: var(--indigo); color: var(--indigo); background: var(--violet-soft); }
        @media (max-width: 900px) {
          .foot-grid { grid-template-columns: 1fr 1fr !important; gap: 36px !important; }
        }
        @media (max-width: 560px) {
          .foot-grid { grid-template-columns: 1fr !important; }
          footer > div { padding: 0 20px !important; }
        }
      `}</style>
    </footer>
  );
}
