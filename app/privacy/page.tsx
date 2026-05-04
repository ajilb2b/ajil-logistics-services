import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Ajil Logistics Services collects, uses, stores, and protects personal data across our logistics platforms and delivery operations in Qatar and UAE.",
  alternates: { canonical: "https://ajilb2b.com/privacy" },
};

const EFFECTIVE = "1 May 2026";
const COMPANY = "Ajil Logistics Services W.L.L.";
const ADDRESS = "Almuntazah Trading Center, Doha, Qatar";
const EMAIL = "hello@ajilb2b.com";
const SECURITY_EMAIL = "security@ajilb2b.com";

export default function PrivacyPage() {
  return (
    <>
      <Nav />

      {/* Breadcrumb */}
      <div className="leg-breadcrumb">
        <div className="leg-container">
          <Link href="/" className="leg-bc-link">Home</Link>
          <span className="leg-bc-sep">/</span>
          <span>Privacy Policy</span>
        </div>
      </div>

      {/* Header */}
      <header className="leg-header">
        <div className="leg-container">
          <span className="leg-eyebrow">Legal</span>
          <h1 className="leg-h1">Privacy Policy</h1>
          <p className="leg-meta">Effective date: {EFFECTIVE} · {COMPANY}</p>
          <p className="leg-intro">
            {COMPANY} (&ldquo;Ajil&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is
            committed to protecting the privacy of everyone whose data we handle: clients, delivery
            recipients, drivers, and website visitors. This Privacy Policy explains what personal data we
            collect, why we collect it, how we use and protect it, and your rights in relation to it.
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
                "Who We Are",
                "Data We Collect",
                "How We Use Your Data",
                "Legal Basis for Processing",
                "Who We Share Data With",
                "International Transfers",
                "Data Retention",
                "Security",
                "Your Rights",
                "Cookies & Tracking",
                "Children's Privacy",
                "Changes to This Policy",
                "Contact & Complaints",
              ].map((s, i) => (
                <li key={s}><a href={`#p${i + 1}`} className="leg-toc-link">{i + 1}. {s}</a></li>
              ))}
            </ol>
          </aside>

          {/* Sections */}
          <article className="leg-article">

            <section id="p1">
              <h2 className="leg-h2">1. Who We Are</h2>
              <p>{COMPANY} is a logistics services company headquartered in Doha, Qatar. We operate delivery networks, logistics software platforms, and fleet operations across Qatar and the UAE.</p>
              <p>For the purposes of applicable data protection law, Ajil is the data controller of personal data collected through our platforms, websites, and service operations.</p>
              <div className="leg-contact-block">
                <p><strong>Data Controller</strong></p>
                <p>{COMPANY}</p>
                <p>{ADDRESS}</p>
                <p>Email: <a href={`mailto:${SECURITY_EMAIL}`} className="leg-inline-link">{SECURITY_EMAIL}</a></p>
              </div>
            </section>

            <section id="p2">
              <h2 className="leg-h2">2. Data We Collect</h2>
              <p>We collect personal data from several categories of people in connection with our operations:</p>

              <h3 className="leg-h3">Clients &amp; Business Contacts</h3>
              <ul>
                <li>Name, job title, and business contact details (email, phone number)</li>
                <li>Company registration details and billing address</li>
                <li>Platform login credentials and account activity</li>
                <li>Communications with Ajil including emails, support tickets, and call records</li>
              </ul>

              <h3 className="leg-h3">Delivery Recipients</h3>
              <ul>
                <li>Full name and delivery address (provided by the Client placing the Order)</li>
                <li>Phone number (used to coordinate delivery attempts)</li>
                <li>Delivery notes and access instructions</li>
                <li>Proof of delivery records (signature, photo, timestamp, GPS coordinates)</li>
              </ul>

              <h3 className="leg-h3">Drivers &amp; Riders</h3>
              <ul>
                <li>Full name, nationality, date of birth, and ID/passport details</li>
                <li>Contact details, emergency contact information</li>
                <li>Vehicle registration, driving licence, and insurance documents</li>
                <li>Bank account or payment wallet details for payroll</li>
                <li>Real-time and historical GPS location data during active shifts</li>
                <li>Performance data including delivery completion rates, timing, and incident records</li>
              </ul>

              <h3 className="leg-h3">Website Visitors</h3>
              <ul>
                <li>IP address, browser type, and device information</li>
                <li>Pages visited, time on site, and referring URL</li>
                <li>Form submissions (contact enquiries, job applications)</li>
              </ul>
            </section>

            <section id="p3">
              <h2 className="leg-h2">3. How We Use Your Data</h2>
              <p>We use personal data only for the purposes for which it was collected or for compatible purposes. Specifically:</p>
              <ul>
                <li><strong>Service delivery:</strong> routing and dispatching Orders, coordinating deliveries, managing driver assignments, and providing proof of delivery.</li>
                <li><strong>Platform operation:</strong> maintaining user accounts, providing access to the Ajil Dispatch platform, TMS, and WMS; sending system notifications and alerts.</li>
                <li><strong>Client account management:</strong> billing and invoicing, account communications, service performance reporting, and customer support.</li>
                <li><strong>Driver management:</strong> payroll processing, shift scheduling, performance monitoring, compliance with Qatar and UAE labour regulations, and safety management.</li>
                <li><strong>Legal compliance:</strong> fulfilling obligations under applicable law, responding to lawful requests from regulatory authorities, and enforcing our <Link href="/terms" className="leg-inline-link">Terms &amp; Conditions</Link>.</li>
                <li><strong>Security &amp; fraud prevention:</strong> monitoring platform access, detecting misuse, and protecting our systems and the people who use them.</li>
                <li><strong>Service improvement:</strong> aggregated, anonymised analysis of delivery patterns, route efficiency, and platform usage to improve our products and operations.</li>
                <li><strong>Marketing communications:</strong> with your consent, or where we have a legitimate interest, to send information about relevant Ajil services. You may opt out at any time.</li>
              </ul>
            </section>

            <section id="p4">
              <h2 className="leg-h2">4. Legal Basis for Processing</h2>
              <p>We process personal data under the following legal bases, consistent with Qatar&rsquo;s Personal Data Privacy Protection Law (Law No. 13 of 2016) and UAE Federal Decree-Law No. 45 of 2021 on Personal Data Protection:</p>
              <ul>
                <li><strong>Contract performance:</strong> processing necessary to provide the services agreed with Clients or to fulfil obligations to drivers under their engagement terms.</li>
                <li><strong>Legal obligation:</strong> processing required to comply with applicable laws, including labour law, tax regulations, and regulatory reporting requirements in Qatar and the UAE.</li>
                <li><strong>Legitimate interests:</strong> processing for fraud prevention, network security, operational analytics, and business communications, where our interests do not override your fundamental rights.</li>
                <li><strong>Consent:</strong> for marketing communications and for any processing not covered by the above bases. Consent may be withdrawn at any time without affecting the lawfulness of prior processing.</li>
              </ul>
            </section>

            <section id="p5">
              <h2 className="leg-h2">5. Who We Share Data With</h2>
              <p>We do not sell personal data. We share it only in the following circumstances:</p>
              <ul>
                <li><strong>Clients:</strong> delivery data (including proof of delivery and status updates) is shared with the Client who placed the Order in the normal course of service delivery.</li>
                <li><strong>Service providers:</strong> we engage third-party providers for cloud hosting, payment processing, SMS/communication services, and mapping/routing technology. These providers are contractually bound to process data only on our instructions and to maintain appropriate security standards.</li>
                <li><strong>Regulatory authorities:</strong> we disclose data to government bodies, courts, or law enforcement where required to do so by applicable law or legal process.</li>
                <li><strong>Business transfers:</strong> in the event of a merger, acquisition, or sale of business assets, personal data may be transferred as part of that transaction. We will notify affected individuals in advance where required by law.</li>
              </ul>
            </section>

            <section id="p6">
              <h2 className="leg-h2">6. International Transfers</h2>
              <p>Ajil primarily stores and processes data within Qatar and the UAE. Where personal data is transferred to a third-party service provider located outside these countries (for example, cloud infrastructure), we ensure appropriate safeguards are in place, such as contractual data protection clauses, to provide an equivalent level of protection.</p>
            </section>

            <section id="p7">
              <h2 className="leg-h2">7. Data Retention</h2>
              <p>We retain personal data only for as long as necessary for the purpose for which it was collected, and to meet our legal obligations. Our standard retention periods are:</p>
              <ul>
                <li><strong>Client account and transaction data:</strong> 7 years from the end of the commercial relationship, in line with financial record-keeping requirements.</li>
                <li><strong>Delivery records and proof of delivery:</strong> 2 years from the date of delivery.</li>
                <li><strong>Driver employment and engagement records:</strong> duration of engagement plus 5 years, or as required by Qatar and UAE labour law.</li>
                <li><strong>GPS and location data:</strong> 90 days from collection, after which it is aggregated and anonymised.</li>
                <li><strong>Website enquiry and contact form data:</strong> 12 months from submission, unless a commercial relationship results.</li>
                <li><strong>Marketing consent records:</strong> retained until consent is withdrawn, plus a reasonable period thereafter for evidence of compliance.</li>
              </ul>
              <p>When data is no longer required, it is securely deleted or anonymised.</p>
            </section>

            <section id="p8">
              <h2 className="leg-h2">8. Security</h2>
              <p>We apply appropriate technical and organisational measures to protect personal data against unauthorised access, loss, alteration, or destruction. These include:</p>
              <ul>
                <li>Encryption of data in transit using TLS 1.3 and at rest using AES-256.</li>
                <li>Role-based access controls ensuring staff access only the data they need for their role.</li>
                <li>Two-factor authentication on all platform accounts.</li>
                <li>Continuous monitoring and intrusion detection on our infrastructure.</li>
                <li>Regular security reviews and penetration testing.</li>
              </ul>
              <p>In the event of a personal data breach that is likely to result in a risk to individuals, we will notify the relevant regulatory authority and affected individuals in accordance with applicable law.</p>
              <p>If you discover a security vulnerability, please report it to <a href={`mailto:${SECURITY_EMAIL}`} className="leg-inline-link">{SECURITY_EMAIL}</a>. We respond to all security reports within 48 hours.</p>
            </section>

            <section id="p9">
              <h2 className="leg-h2">9. Your Rights</h2>
              <p>Subject to applicable law, you have the following rights in relation to your personal data:</p>
              <ul>
                <li><strong>Access:</strong> you may request a copy of the personal data we hold about you.</li>
                <li><strong>Correction:</strong> you may request correction of inaccurate or incomplete data.</li>
                <li><strong>Deletion:</strong> you may request deletion of your personal data where it is no longer necessary for the purpose for which it was collected, subject to our legal retention obligations.</li>
                <li><strong>Objection:</strong> you may object to processing based on legitimate interests, including direct marketing.</li>
                <li><strong>Restriction:</strong> you may request that we restrict processing of your data in certain circumstances.</li>
                <li><strong>Data portability:</strong> where processing is based on consent or contract, you may request a copy of your data in a structured, machine-readable format.</li>
                <li><strong>Withdraw consent:</strong> where processing is based on consent, you may withdraw it at any time without affecting the lawfulness of prior processing.</li>
              </ul>
              <p>To exercise any of these rights, please contact us at <a href={`mailto:${SECURITY_EMAIL}`} className="leg-inline-link">{SECURITY_EMAIL}</a>. We will respond within 30 days. We may need to verify your identity before processing your request.</p>
            </section>

            <section id="p10">
              <h2 className="leg-h2">10. Cookies &amp; Tracking</h2>
              <p>Our website uses cookies and similar technologies to ensure the site functions correctly, to understand how visitors use the site, and to improve performance. We use:</p>
              <ul>
                <li><strong>Essential cookies:</strong> required for the website to operate and cannot be disabled.</li>
                <li><strong>Analytics cookies:</strong> used to understand traffic patterns and site usage in aggregate. These do not identify you personally.</li>
              </ul>
              <p>You can control cookies through your browser settings. Disabling non-essential cookies will not affect your ability to use the site.</p>
            </section>

            <section id="p11">
              <h2 className="leg-h2">11. Children&rsquo;s Privacy</h2>
              <p>Our services are not directed at individuals under the age of 18. We do not knowingly collect personal data from minors. If we become aware that we have collected personal data from a minor without verified parental consent, we will delete it promptly. If you believe we may have collected data from a minor, please contact us immediately at <a href={`mailto:${EMAIL}`} className="leg-inline-link">{EMAIL}</a>.</p>
            </section>

            <section id="p12">
              <h2 className="leg-h2">12. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. When we make material changes, we will update the effective date at the top of this page and, where appropriate, notify affected individuals by email or in-platform notification.</p>
              <p>We encourage you to review this policy periodically.</p>
            </section>

            <section id="p13">
              <h2 className="leg-h2">13. Contact &amp; Complaints</h2>
              <p>For any privacy-related questions, requests, or concerns, please contact our data protection team:</p>
              <div className="leg-contact-block">
                <p><strong>{COMPANY}</strong></p>
                <p>{ADDRESS}</p>
                <p>Privacy &amp; Data: <a href={`mailto:${SECURITY_EMAIL}`} className="leg-inline-link">{SECURITY_EMAIL}</a></p>
                <p>General: <a href={`mailto:${EMAIL}`} className="leg-inline-link">{EMAIL}</a></p>
                <p>Phone: <a href="tel:+97441404004" className="leg-inline-link">+974 4140 4004</a></p>
              </div>
              <p style={{ marginTop: 20 }}>If you are not satisfied with our response, you have the right to lodge a complaint with the competent data protection authority in Qatar or the UAE, depending on your location and the nature of your complaint.</p>
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
        .leg-h3 { font-size: 14px; font-weight: 600; color: var(--ink); letter-spacing: -.01em; margin: 20px 0 10px; text-transform: uppercase; font-family: var(--font-jetbrains), monospace; letter-spacing: .08em; }
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
