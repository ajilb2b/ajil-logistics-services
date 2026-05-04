import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions governing the use of Ajil Logistics Services platforms, delivery services, and logistics software across Qatar and UAE.",
  alternates: { canonical: "https://ajilb2b.com/terms" },
};

const EFFECTIVE = "1 May 2026";
const COMPANY = "Ajil Logistics Services W.L.L.";
const ADDRESS = "Almuntazah Trading Center, Doha, Qatar";
const EMAIL = "hello@ajilb2b.com";

export default function TermsPage() {
  return (
    <>
      <Nav />

      {/* Breadcrumb */}
      <div className="leg-breadcrumb">
        <div className="leg-container">
          <Link href="/" className="leg-bc-link">Home</Link>
          <span className="leg-bc-sep">/</span>
          <span>Terms &amp; Conditions</span>
        </div>
      </div>

      {/* Header */}
      <header className="leg-header">
        <div className="leg-container">
          <span className="leg-eyebrow">Legal</span>
          <h1 className="leg-h1">Terms &amp; Conditions</h1>
          <p className="leg-meta">Effective date: {EFFECTIVE} · {COMPANY}</p>
          <p className="leg-intro">
            These Terms and Conditions govern your access to and use of the services, platforms, and
            software provided by {COMPANY} (&ldquo;Ajil&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;,
            or &ldquo;our&rdquo;). By engaging Ajil&rsquo;s services or accessing any Ajil platform,
            you agree to be bound by these terms. If you do not agree, do not use our services.
          </p>
        </div>
      </header>

      {/* Body */}
      <div className="leg-body">
        <div className="leg-container leg-layout">

          {/* Table of Contents */}
          <aside className="leg-toc">
            <p className="leg-toc-head">Contents</p>
            <ol className="leg-toc-list">
              {[
                "Definitions",
                "Scope of Services",
                "Client Obligations",
                "Pricing & Payment",
                "Intellectual Property",
                "Data & Confidentiality",
                "Liability & Indemnity",
                "Service Levels & Availability",
                "Termination",
                "Governing Law & Disputes",
                "Amendments",
                "Contact",
              ].map((s, i) => (
                <li key={s}><a href={`#s${i + 1}`} className="leg-toc-link">{i + 1}. {s}</a></li>
              ))}
            </ol>
          </aside>

          {/* Sections */}
          <article className="leg-article">

            <section id="s1">
              <h2 className="leg-h2">1. Definitions</h2>
              <p><strong>&ldquo;Client&rdquo;</strong> means any business entity or individual that engages Ajil for logistics services or licenses Ajil software.</p>
              <p><strong>&ldquo;Driver / Rider&rdquo;</strong> means any individual engaged through Ajil&rsquo;s network to carry out deliveries or logistics tasks.</p>
              <p><strong>&ldquo;Platform&rdquo;</strong> means Ajil Dispatch, the Ajil TMS, WMS, driver application, client portal, and any associated software or API provided by Ajil.</p>
              <p><strong>&ldquo;Services&rdquo;</strong> means all logistics, delivery, warehousing, fleet management, software licensing, and related services provided by Ajil.</p>
              <p><strong>&ldquo;Order&rdquo;</strong> means a delivery task or job created through the Platform or communicated to Ajil by a Client.</p>
            </section>

            <section id="s2">
              <h2 className="leg-h2">2. Scope of Services</h2>
              <p>Ajil provides four primary service models across Qatar and UAE:</p>
              <ul>
                <li><strong>Logistics Software Licensing:</strong> access to the Ajil Dispatch TMS, WMS, driver apps, and live control tower under a software licence agreement.</li>
                <li><strong>On-Demand Logistics Network:</strong> pay-per-delivery access to Ajil&rsquo;s rider and vehicle network on a variable-volume basis.</li>
                <li><strong>Dedicated Logistics:</strong> a ring-fenced fleet and warehouse operation branded to the Client, operating under agreed service level agreements (&ldquo;SLAs&rdquo;).</li>
                <li><strong>Fully Managed Operations:</strong> Ajil assumes full operational responsibility for the Client&rsquo;s logistics function, including network design, fleet, staff, and a named account manager.</li>
              </ul>
              <p>The specific scope, pricing, and SLAs applicable to a Client are set out in the executed Service Agreement or Statement of Work (&ldquo;SOW&rdquo;) between the parties. In the event of conflict between these Terms and a SOW, the SOW prevails.</p>
            </section>

            <section id="s3">
              <h2 className="leg-h2">3. Client Obligations</h2>
              <p>Clients agree to:</p>
              <ul>
                <li>Provide accurate, complete, and timely information required to fulfil Orders, including recipient details, addresses, and any special handling requirements.</li>
                <li>Ensure that goods tendered for delivery comply with all applicable laws and regulations in Qatar and the UAE, and are not prohibited, restricted, or hazardous unless separately agreed in writing.</li>
                <li>Not use the Platform or Services to facilitate illegal activity, including but not limited to the carriage of counterfeit goods, controlled substances, or items subject to trade sanctions.</li>
                <li>Maintain the confidentiality of Platform credentials and notify Ajil immediately of any unauthorised access.</li>
                <li>Pay all invoices in accordance with the payment terms agreed in the relevant SOW or Service Agreement.</li>
              </ul>
            </section>

            <section id="s4">
              <h2 className="leg-h2">4. Pricing &amp; Payment</h2>
              <p>All pricing is set out in the applicable SOW or rate card agreed between the parties. Prices are quoted in Qatari Riyal (QAR) or UAE Dirham (AED) unless otherwise stated.</p>
              <p>Invoices are due within the number of days stated on the invoice (default: 30 days net). Ajil reserves the right to charge interest on overdue amounts at a rate of 2% per month, compounded monthly, from the due date until full payment is received.</p>
              <p>Ajil may adjust pricing by providing 30 days&rsquo; written notice for ongoing service engagements. Adjustments do not apply to fixed-term SOWs within their contracted period.</p>
              <p>Clients are responsible for all applicable taxes, customs duties, and regulatory fees arising from the goods they ship. Ajil will charge VAT where required under Qatar or UAE law.</p>
            </section>

            <section id="s5">
              <h2 className="leg-h2">5. Intellectual Property</h2>
              <p>All software, algorithms, brand assets, documentation, and platform technology developed or owned by Ajil (&ldquo;Ajil IP&rdquo;) remain the exclusive property of {COMPANY}. These Terms do not transfer any ownership of Ajil IP to the Client.</p>
              <p>Clients are granted a limited, non-exclusive, non-transferable licence to access and use the Platform solely for their internal business operations during the term of their agreement with Ajil. Clients may not sublicense, reverse engineer, copy, or modify any part of the Platform.</p>
              <p>Any integration, API usage, or data export by the Client must comply with Ajil&rsquo;s API documentation and must not be used to replicate, compete with, or derive a competing product from the Platform.</p>
            </section>

            <section id="s6">
              <h2 className="leg-h2">6. Data &amp; Confidentiality</h2>
              <p>Each party agrees to keep confidential all non-public information disclosed by the other party in connection with the Services. Confidential information may not be disclosed to third parties without prior written consent, except as required by applicable law or regulation.</p>
              <p>Ajil processes personal data in connection with the Services in accordance with its <Link href="/privacy" className="leg-inline-link">Privacy Policy</Link> and applicable data protection laws, including Qatar&rsquo;s Personal Data Privacy Protection Law (Law No. 13 of 2016) and UAE Federal Decree-Law No. 45 of 2021 on Personal Data Protection.</p>
              <p>Clients who share personal data with Ajil (such as recipient names, phone numbers, and addresses) confirm they have a lawful basis for doing so and that data subjects have been informed of how their data will be used.</p>
              <p>Ajil may use aggregated, anonymised operational data derived from the Services for internal analytics, platform improvement, and benchmarking, provided no individual or Client is identifiable from such data.</p>
            </section>

            <section id="s7">
              <h2 className="leg-h2">7. Liability &amp; Indemnity</h2>
              <p><strong>Liability for loss or damage in transit.</strong> Ajil&rsquo;s liability for physical loss of or damage to goods in transit is limited to the declared value of the goods or the amount specified in the applicable SOW, whichever is lower. Claims must be submitted in writing within 7 days of the delivery date.</p>
              <p><strong>Excluded losses.</strong> To the maximum extent permitted by law, Ajil is not liable for: (a) loss of profits, revenue, or goodwill; (b) indirect or consequential losses; (c) losses arising from Client-provided inaccurate address or goods information; (d) delays caused by force majeure events including but not limited to extreme weather, government action, civil unrest, or infrastructure failure.</p>
              <p><strong>Cap on liability.</strong> Ajil&rsquo;s total aggregate liability to a Client under or in connection with any Service Agreement shall not exceed the total fees paid by the Client to Ajil in the three months immediately preceding the event giving rise to the claim.</p>
              <p><strong>Client indemnity.</strong> Clients agree to indemnify and hold harmless Ajil, its officers, employees, and subcontractors from and against any claims, losses, damages, and expenses (including legal fees) arising from: (a) breach of these Terms; (b) negligence or wilful misconduct by the Client; (c) carriage of prohibited or unlawful goods.</p>
            </section>

            <section id="s8">
              <h2 className="leg-h2">8. Service Levels &amp; Availability</h2>
              <p>Ajil targets 99.9% platform uptime for the Ajil Dispatch system, measured monthly. Planned maintenance windows will be communicated at least 48 hours in advance wherever possible.</p>
              <p>Delivery SLAs (time windows, attempt counts, proof of delivery requirements) are specified in the applicable SOW. SLA credits, where applicable, are the Client&rsquo;s sole remedy for service level failures and do not constitute an admission of liability.</p>
              <p>SLAs are suspended during force majeure events, national holidays affecting operations, or circumstances outside Ajil&rsquo;s reasonable control.</p>
            </section>

            <section id="s9">
              <h2 className="leg-h2">9. Termination</h2>
              <p>Either party may terminate a Service Agreement by providing written notice in accordance with the notice period stated in the applicable SOW (default: 30 days).</p>
              <p>Ajil may suspend or terminate access to the Platform and Services immediately and without notice if: (a) the Client is in material breach of these Terms and has not remedied the breach within 14 days of written notice; (b) the Client becomes insolvent, enters administration, or ceases to carry on business; (c) Ajil reasonably suspects the Platform is being used for unlawful purposes.</p>
              <p>On termination, all outstanding invoices become immediately due and payable. Ajil will provide reasonable data export assistance for 30 days following termination of a software licence.</p>
            </section>

            <section id="s10">
              <h2 className="leg-h2">10. Governing Law &amp; Disputes</h2>
              <p>These Terms and any disputes arising from them are governed by the laws of the State of Qatar. The parties agree to submit to the exclusive jurisdiction of the courts of Qatar.</p>
              <p>Before commencing legal proceedings, the parties agree to attempt to resolve any dispute through good-faith negotiation for a period of 30 days following written notice of the dispute.</p>
              <p>For Clients based in the UAE, disputes that cannot be resolved through negotiation may, by mutual written agreement, be referred to arbitration under the DIAC Arbitration Rules in Dubai.</p>
            </section>

            <section id="s11">
              <h2 className="leg-h2">11. Amendments</h2>
              <p>Ajil reserves the right to update these Terms at any time. Material changes will be communicated to active Clients via email or in-platform notification at least 14 days before taking effect. Continued use of the Services after that date constitutes acceptance of the updated Terms.</p>
              <p>For fixed-term Service Agreements, changes to these Terms do not affect the terms of that agreement unless both parties sign an amendment.</p>
            </section>

            <section id="s12">
              <h2 className="leg-h2">12. Contact</h2>
              <p>For questions about these Terms, or to request a Data Processing Agreement, please contact:</p>
              <div className="leg-contact-block">
                <p><strong>{COMPANY}</strong></p>
                <p>{ADDRESS}</p>
                <p>Email: <a href={`mailto:${EMAIL}`} className="leg-inline-link">{EMAIL}</a></p>
                <p>Phone: <a href="tel:+97441404004" className="leg-inline-link">+974 4140 4004</a></p>
              </div>
            </section>

          </article>
        </div>
      </div>

      <Footer />

      <style>{`
        .leg-container { max-width: 1280px; margin: 0 auto; padding: 0 40px; }
        @media (max-width: 760px) { .leg-container { padding: 0 22px; } }

        .leg-breadcrumb { padding: 20px 0; border-bottom: 1px solid var(--line); font-family: var(--font-jetbrains), monospace; font-size: 11px; color: var(--muted); text-transform: uppercase; letter-spacing: .12em; }
        .leg-bc-link { color: var(--muted); transition: color .2s ease; }
        .leg-bc-link:hover { color: var(--ink); }
        .leg-bc-sep { margin: 0 10px; color: var(--line-strong); }

        .leg-header { padding: 80px 0 64px; border-bottom: 1px solid var(--line); background: #fff; }
        .leg-eyebrow { font-family: var(--font-jetbrains), monospace; font-size: 11px; color: rgba(27,26,104,.42); text-transform: uppercase; letter-spacing: .14em; display: block; margin-bottom: 20px; }
        .leg-h1 { font-size: clamp(32px, 5vw, 60px); font-weight: 700; letter-spacing: -.04em; color: var(--ink); margin: 0 0 16px; line-height: 1; }
        .leg-meta { font-family: var(--font-jetbrains), monospace; font-size: 11px; color: var(--muted); text-transform: uppercase; letter-spacing: .1em; margin-bottom: 28px; }
        .leg-intro { font-size: 16px; color: var(--muted); line-height: 1.7; max-width: 72ch; }

        .leg-body { padding: 80px 0 140px; background: var(--paper-2); }
        .leg-layout { display: grid; grid-template-columns: 220px 1fr; gap: 80px; align-items: start; }
        @media (max-width: 900px) { .leg-layout { grid-template-columns: 1fr; gap: 40px; } }

        .leg-toc { position: sticky; top: 32px; }
        .leg-toc-head { font-family: var(--font-jetbrains), monospace; font-size: 10px; text-transform: uppercase; letter-spacing: .12em; color: var(--muted); margin-bottom: 14px; }
        .leg-toc-list { list-style: none; padding: 0; display: flex; flex-direction: column; gap: 8px; }
        .leg-toc-link { font-size: 13px; color: var(--muted); transition: color .2s ease; }
        .leg-toc-link:hover { color: var(--ink); }
        @media (max-width: 900px) { .leg-toc { position: static; } }

        .leg-article { background: #fff; border: 1px solid var(--line-strong); border-radius: 10px; padding: 56px 60px; }
        @media (max-width: 760px) { .leg-article { padding: 36px 28px; } }
        .leg-article section { padding-bottom: 40px; margin-bottom: 40px; border-bottom: 1px solid var(--line); }
        .leg-article section:last-child { border-bottom: none; padding-bottom: 0; margin-bottom: 0; }
        .leg-h2 { font-size: 18px; font-weight: 700; color: var(--ink); letter-spacing: -.02em; margin: 0 0 18px; }
        .leg-article p { font-size: 15px; color: var(--muted); line-height: 1.75; margin-bottom: 14px; }
        .leg-article p:last-child { margin-bottom: 0; }
        .leg-article ul { padding-left: 20px; display: flex; flex-direction: column; gap: 10px; margin-bottom: 14px; }
        .leg-article li { font-size: 15px; color: var(--muted); line-height: 1.7; }
        .leg-article strong { color: var(--ink); font-weight: 600; }
        .leg-inline-link { color: #2D2BE0; text-decoration: underline; text-underline-offset: 3px; font-family: var(--font-instrument), serif; font-style: italic; }
        .leg-contact-block { background: var(--paper-2); border: 1px solid var(--line-strong); border-radius: 8px; padding: 24px 28px; margin-top: 18px; }
        .leg-contact-block p { margin-bottom: 6px; font-size: 14px; }
        .leg-contact-block p:last-child { margin-bottom: 0; }
      `}</style>
    </>
  );
}
