"use client";
import { useRef, useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

const CITY_OPTIONS = ["Doha, Qatar", "Dubai, UAE"];
const VEHICLE_OPTIONS = ["Bike / Motorcycle", "Car", "Van", "I don't have a vehicle"];
const EXPERIENCE_OPTIONS = ["Less than 1 year", "1 – 3 years", "3 – 5 years", "5+ years"];
const AVAILABILITY_OPTIONS = ["Full-time", "Part-time", "Flexible"];
const START_OPTIONS = ["Immediately", "Within 2 weeks", "Within a month", "More than a month"];

type Field = {
  fullName: string; email: string; phone: string; nationality: string;
  city: string; vehicle: string; experience: string;
  availability: string; startDate: string; notes: string;
};

const EMPTY: Field = {
  fullName: "", email: "", phone: "", nationality: "",
  city: "", vehicle: "", experience: "",
  availability: "", startDate: "", notes: "",
};

export default function DriverApplicationClient() {
  const [form, setForm] = useState<Field>(EMPTY);
  const [cv, setCv] = useState<File | null>(null);
  const [cvError, setCvError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  function set(key: keyof Field, val: string) {
    setForm((f) => ({ ...f, [key]: val }));
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCvError(null);
    const file = e.target.files?.[0] ?? null;
    if (!file) { setCv(null); return; }
    const allowed = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
    if (!allowed.includes(file.type)) { setCvError("Please upload a PDF or Word document."); return; }
    if (file.size > 5 * 1024 * 1024) { setCvError("File must be under 5 MB."); return; }
    setCv(file);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitError(null);

    const required: (keyof Field)[] = ["fullName", "email", "phone", "city", "vehicle", "experience", "availability"];
    for (const k of required) {
      if (!form[k].trim()) {
        setSubmitError("Please fill in all required fields.");
        return;
      }
    }

    setSubmitting(true);
    try {
      const fd = new FormData();
      Object.entries(form).forEach(([k, v]) => fd.append(k, v));
      if (cv) fd.append("cv", cv);

      const res = await fetch("/api/driver-application", { method: "POST", body: fd });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error ?? "Something went wrong");
      }
      setSubmitted(true);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <Nav />

      {/* Breadcrumb */}
      <div className="da-breadcrumb">
        <div className="da-container">
          <Link href="/" className="da-bc-link">Home</Link>
          <span className="da-bc-sep">/</span>
          <Link href="/join" className="da-bc-link">Join Us</Link>
          <span className="da-bc-sep">/</span>
          <span>Driver Application</span>
        </div>
      </div>

      {/* Hero */}
      <header className="da-hero">
        <div className="da-container">
          <span className="da-eyebrow">Drivers &amp; Riders · Apply Now</span>
          <h1 className="da-h1">Drive With Ajil.<br /><span className="da-accent">Earn Every Day.</span></h1>
          <p className="da-lead">
            Join Qatar and UAE&apos;s fastest-growing logistics network. Weekly payouts, daily stacked routes,
            performance bonuses, and full support from our fleet operations team.
          </p>
          <div className="da-perks">
            {["Weekly Payouts · QAR & AED", "Daily Stacked Routes", "Health Insurance & Visa Support", "Performance Bonuses"].map((p) => (
              <div key={p} className="da-perk">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                {p}
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Form */}
      <section className="da-section">
        <div className="da-container da-layout">

          {/* Side info */}
          <aside className="da-aside">
            <div className="da-aside-block">
              <p className="da-aside-head">What happens next</p>
              <div className="da-steps">
                {[
                  { n: "01", t: "Application reviewed", d: "Our fleet team reviews every application within 48 hours." },
                  { n: "02", t: "Onboarding call", d: "A short call to verify your details and confirm your city and vehicle." },
                  { n: "03", t: "Start earning", d: "Complete orientation and you're live on the network — usually within one week." },
                ].map((s) => (
                  <div key={s.n} className="da-step">
                    <div className="da-step-num">{s.n}</div>
                    <div>
                      <div className="da-step-title">{s.t}</div>
                      <div className="da-step-desc">{s.d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="da-aside-block">
              <p className="da-aside-head">Questions?</p>
              <a href="https://wa.me/97477058594?text=Hi%20Ajil%20-%20I%20have%20a%20question%20about%20driving" className="da-wa-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp us instead
              </a>
              <p className="da-wa-note">Fastest response — usually within 2 hours.</p>
            </div>
          </aside>

          {/* Form card */}
          <div className="da-form-card">
            <div className="da-form-head">
              <h2 className="da-form-title">Driver Application</h2>
              <p className="da-form-sub">Takes about 3 minutes. We respond within 48 hours.</p>
            </div>

            {submitted ? (
              <div className="da-success">
                <div className="da-success-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <h3 className="da-success-h">Application received.</h3>
                <p className="da-success-p">Our fleet team will review your application and reach out within 48 hours via email or WhatsApp.</p>
                <Link href="/join" className="da-btn-ghost" style={{ alignSelf: "flex-start" }}>Back to Join Us</Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="da-form" noValidate>

                {/* Section: Personal */}
                <fieldset className="da-fieldset">
                  <legend className="da-legend">Personal details</legend>
                  <div className="da-row-2">
                    <Label text="Full name" required>
                      <input className="da-input" required value={form.fullName} onChange={(e) => set("fullName", e.target.value)} placeholder="As on your ID" />
                    </Label>
                    <Label text="Nationality">
                      <input className="da-input" value={form.nationality} onChange={(e) => set("nationality", e.target.value)} placeholder="e.g. Pakistani" />
                    </Label>
                  </div>
                  <div className="da-row-2">
                    <Label text="Email address" required>
                      <input className="da-input" type="email" required value={form.email} onChange={(e) => set("email", e.target.value)} placeholder="you@email.com" />
                    </Label>
                    <Label text="WhatsApp / Phone" required>
                      <input className="da-input" type="tel" required value={form.phone} onChange={(e) => set("phone", e.target.value)} placeholder="+974 or +971" />
                    </Label>
                  </div>
                </fieldset>

                {/* Section: Location & Availability */}
                <fieldset className="da-fieldset">
                  <legend className="da-legend">Location &amp; availability</legend>
                  <div className="da-row-2">
                    <Label text="Preferred city" required>
                      <select className="da-select" required value={form.city} onChange={(e) => set("city", e.target.value)}>
                        <option value="">Select city</option>
                        {CITY_OPTIONS.map((c) => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </Label>
                    <Label text="Availability" required>
                      <select className="da-select" required value={form.availability} onChange={(e) => set("availability", e.target.value)}>
                        <option value="">Select availability</option>
                        {AVAILABILITY_OPTIONS.map((a) => <option key={a} value={a}>{a}</option>)}
                      </select>
                    </Label>
                  </div>
                  <div className="da-row-2">
                    <Label text="Earliest start date">
                      <select className="da-select" value={form.startDate} onChange={(e) => set("startDate", e.target.value)}>
                        <option value="">Select start</option>
                        {START_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </Label>
                  </div>
                </fieldset>

                {/* Section: Vehicle & Experience */}
                <fieldset className="da-fieldset">
                  <legend className="da-legend">Vehicle &amp; experience</legend>
                  <div className="da-row-2">
                    <Label text="Vehicle type" required>
                      <select className="da-select" required value={form.vehicle} onChange={(e) => set("vehicle", e.target.value)}>
                        <option value="">Select vehicle</option>
                        {VEHICLE_OPTIONS.map((v) => <option key={v} value={v}>{v}</option>)}
                      </select>
                    </Label>
                    <Label text="Delivery experience" required>
                      <select className="da-select" required value={form.experience} onChange={(e) => set("experience", e.target.value)}>
                        <option value="">Select experience</option>
                        {EXPERIENCE_OPTIONS.map((x) => <option key={x} value={x}>{x}</option>)}
                      </select>
                    </Label>
                  </div>
                  <Label text="Tell us a bit about yourself (optional)">
                    <textarea
                      className="da-textarea"
                      rows={3}
                      value={form.notes}
                      onChange={(e) => set("notes", e.target.value)}
                      placeholder="Previous employers, routes you know well, anything useful..."
                    />
                  </Label>
                </fieldset>

                {/* Section: CV Upload */}
                <fieldset className="da-fieldset">
                  <legend className="da-legend">CV / Resume</legend>
                  <p className="da-upload-hint">Optional but recommended. PDF or Word document, max 5 MB.</p>
                  <div
                    className={`da-upload-zone ${cv ? "da-upload-zone--filled" : ""}`}
                    onClick={() => fileRef.current?.click()}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => {
                      e.preventDefault();
                      const file = e.dataTransfer.files[0];
                      if (file) {
                        const synth = { target: { files: [file] } } as unknown as React.ChangeEvent<HTMLInputElement>;
                        handleFileChange(synth);
                      }
                    }}
                  >
                    {cv ? (
                      <>
                        <div className="da-upload-file-icon">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                        </div>
                        <div>
                          <p className="da-upload-file-name">{cv.name}</p>
                          <p className="da-upload-file-size">{(cv.size / 1024).toFixed(0)} KB · <span className="da-upload-change">Change file</span></p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="da-upload-icon">
                          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                        </div>
                        <div>
                          <p className="da-upload-cta">Click to upload or drag and drop</p>
                          <p className="da-upload-types">PDF, DOC, DOCX · Max 5 MB</p>
                        </div>
                      </>
                    )}
                    <input ref={fileRef} type="file" accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" onChange={handleFileChange} style={{ display: "none" }} />
                  </div>
                  {cvError && <p className="da-field-error">{cvError}</p>}
                </fieldset>

                {/* Submit */}
                <div className="da-submit-row">
                  {submitError && <p className="da-submit-error">{submitError}</p>}
                  <div className="da-submit-inner">
                    <p className="da-privacy-note">
                      By submitting you agree to our{" "}
                      <Link href="/privacy" className="da-privacy-link">Privacy Policy</Link>.
                      Your data is used only to process your application.
                    </p>
                    <button type="submit" disabled={submitting} className="da-btn-primary">
                      {submitting ? "Submitting…" : "Submit application"}
                      {!submitting && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>}
                    </button>
                  </div>
                </div>

              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        .da-container { max-width: 1280px; margin: 0 auto; padding: 0 40px; }
        @media (max-width: 760px) { .da-container { padding: 0 22px; } }

        .da-breadcrumb { padding: 20px 0; border-bottom: 1px solid var(--line); font-family: var(--font-jetbrains), monospace; font-size: 11px; color: var(--muted); text-transform: uppercase; letter-spacing: .12em; display: flex; align-items: center; }
        .da-bc-link { color: var(--muted); transition: color .2s ease; }
        .da-bc-link:hover { color: var(--ink); }
        .da-bc-sep { margin: 0 10px; }

        .da-hero { padding: 80px 0 72px; background: #fff; border-bottom: 1px solid var(--line); }
        .da-eyebrow { font-family: var(--font-jetbrains), monospace; font-size: 11px; color: rgba(27,26,104,.42); text-transform: uppercase; letter-spacing: .14em; display: block; margin-bottom: 20px; }
        .da-h1 { font-size: clamp(36px, 5vw, 68px); font-weight: 700; letter-spacing: -.04em; line-height: 1; color: var(--ink); margin: 0 0 20px; }
        .da-accent { color: #2D2BE0; }
        .da-lead { font-size: clamp(15px, 1.2vw, 17px); color: var(--muted); max-width: 58ch; line-height: 1.7; margin-bottom: 28px; }
        .da-perks { display: flex; flex-wrap: wrap; gap: 10px 24px; }
        .da-perk { display: flex; align-items: center; gap: 8px; font-size: 13px; color: var(--ink); font-weight: 500; }
        .da-perk svg { color: #2D2BE0; flex-shrink: 0; }

        .da-section { padding: 72px 0 120px; background: var(--paper-2); }
        .da-layout { display: grid; grid-template-columns: 300px 1fr; gap: 48px; align-items: start; }
        @media (max-width: 960px) { .da-layout { grid-template-columns: 1fr; } }

        /* Aside */
        .da-aside { display: flex; flex-direction: column; gap: 24px; }
        .da-aside-block { background: #fff; border: 1px solid var(--line-strong); border-radius: 10px; padding: 28px; }
        .da-aside-head { font-family: var(--font-jetbrains), monospace; font-size: 10px; text-transform: uppercase; letter-spacing: .12em; color: var(--muted); margin-bottom: 20px; }
        .da-steps { display: flex; flex-direction: column; gap: 20px; }
        .da-step { display: flex; gap: 14px; align-items: flex-start; }
        .da-step-num { font-family: var(--font-jetbrains), monospace; font-size: 10px; font-weight: 600; color: rgba(27,26,104,.42); letter-spacing: .08em; flex-shrink: 0; padding-top: 2px; }
        .da-step-title { font-size: 13px; font-weight: 600; color: var(--ink); margin-bottom: 3px; }
        .da-step-desc { font-size: 12px; color: var(--muted); line-height: 1.55; }
        .da-wa-btn { display: flex; align-items: center; gap: 10px; padding: 11px 16px; border-radius: 8px; background: var(--ink); color: #fff; font-size: 13px; font-weight: 600; margin-bottom: 10px; transition: background .2s ease; }
        .da-wa-btn:hover { background: #14136B; }
        .da-wa-note { font-size: 11px; color: var(--muted); font-family: var(--font-jetbrains), monospace; letter-spacing: .04em; }

        /* Form card */
        .da-form-card { background: #fff; border: 1px solid var(--line-strong); border-radius: 10px; overflow: hidden; }
        .da-form-head { padding: 32px 40px; border-bottom: 1px solid var(--line); background: var(--paper-2); }
        .da-form-title { font-size: 20px; font-weight: 700; color: var(--ink); letter-spacing: -.02em; margin-bottom: 4px; }
        .da-form-sub { font-size: 14px; color: var(--muted); }
        .da-form { padding: 36px 40px; display: flex; flex-direction: column; gap: 0; }
        @media (max-width: 640px) { .da-form-head { padding: 24px; } .da-form { padding: 24px; } }

        /* Fieldsets */
        .da-fieldset { border: none; padding: 0; margin: 0 0 32px; }
        .da-fieldset:last-of-type { margin-bottom: 0; }
        .da-legend { font-family: var(--font-jetbrains), monospace; font-size: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: .12em; color: rgba(27,26,104,.42); margin-bottom: 18px; display: block; padding-bottom: 12px; border-bottom: 1px solid var(--line); width: 100%; }
        .da-row-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px; }
        .da-row-2:last-child { margin-bottom: 0; }
        @media (max-width: 560px) { .da-row-2 { grid-template-columns: 1fr; } }

        /* Inputs */
        .da-label { display: flex; flex-direction: column; gap: 6px; }
        .da-label-text { font-family: var(--font-jetbrains), monospace; font-size: 10px; color: var(--muted); text-transform: uppercase; letter-spacing: .1em; }
        .da-required { color: #2D2BE0; }
        .da-input, .da-select, .da-textarea {
          background: var(--paper-2); border: 1px solid var(--line-strong); border-radius: 6px;
          padding: 11px 14px; font-family: inherit; font-size: 14px; color: var(--ink);
          outline: none; transition: border-color .15s ease, box-shadow .15s ease; width: 100%;
        }
        .da-select { cursor: pointer; appearance: none; background-image: url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23999' stroke-width='2.5' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 14px center; padding-right: 36px; }
        .da-textarea { resize: vertical; min-height: 88px; line-height: 1.6; }
        .da-input:focus, .da-select:focus, .da-textarea:focus { border-color: rgba(27,26,104,.4); box-shadow: 0 0 0 3px rgba(27,26,104,.06); background: #fff; }
        .da-input::placeholder, .da-textarea::placeholder { color: var(--muted); opacity: .6; }
        .da-field-error { font-size: 12px; color: #C0392B; margin-top: 6px; }

        /* Upload */
        .da-upload-hint { font-size: 13px; color: var(--muted); margin-bottom: 12px; }
        .da-upload-zone {
          border: 1.5px dashed var(--line-strong); border-radius: 8px; padding: 32px 24px;
          display: flex; align-items: center; gap: 16px; cursor: pointer;
          transition: border-color .2s ease, background .2s ease; background: var(--paper-2);
        }
        .da-upload-zone:hover { border-color: rgba(27,26,104,.3); background: var(--paper-3); }
        .da-upload-zone--filled { border-style: solid; border-color: rgba(27,26,104,.25); background: #fff; }
        .da-upload-icon { width: 44px; height: 44px; border-radius: 8px; background: var(--paper-3); border: 1px solid var(--line-strong); display: flex; align-items: center; justify-content: center; color: var(--muted); flex-shrink: 0; }
        .da-upload-cta { font-size: 14px; font-weight: 600; color: var(--ink); margin-bottom: 3px; }
        .da-upload-types { font-size: 12px; color: var(--muted); font-family: var(--font-jetbrains), monospace; letter-spacing: .04em; }
        .da-upload-file-icon { width: 44px; height: 44px; border-radius: 8px; background: rgba(45,43,224,.06); border: 1px solid rgba(45,43,224,.15); display: flex; align-items: center; justify-content: center; color: #2D2BE0; flex-shrink: 0; }
        .da-upload-file-name { font-size: 14px; font-weight: 600; color: var(--ink); margin-bottom: 3px; word-break: break-all; }
        .da-upload-file-size { font-size: 12px; color: var(--muted); font-family: var(--font-jetbrains), monospace; }
        .da-upload-change { color: #2D2BE0; cursor: pointer; }

        /* Submit */
        .da-submit-row { padding-top: 28px; margin-top: 32px; border-top: 1px solid var(--line); }
        .da-submit-error { font-size: 13px; color: #C0392B; padding: 10px 14px; background: rgba(192,57,43,.05); border: 1px solid rgba(192,57,43,.15); border-radius: 6px; margin-bottom: 16px; }
        .da-submit-inner { display: flex; justify-content: space-between; align-items: center; gap: 24px; flex-wrap: wrap; }
        .da-privacy-note { font-size: 12px; color: var(--muted); max-width: 40ch; line-height: 1.55; }
        .da-privacy-link { color: #2D2BE0; text-decoration: underline; text-underline-offset: 2px; }
        .da-btn-primary { display: inline-flex; align-items: center; gap: 8px; padding: 13px 24px; border-radius: 8px; font-size: 14px; font-weight: 600; background: #1B1A68; color: #fff; border: none; cursor: pointer; transition: background .2s ease; white-space: nowrap; }
        .da-btn-primary:disabled { opacity: .6; cursor: not-allowed; }
        .da-btn-primary:not(:disabled):hover { background: #14136B; }
        .da-btn-ghost { display: inline-flex; align-items: center; gap: 8px; padding: 12px 20px; border-radius: 8px; font-size: 14px; font-weight: 500; border: 1px solid var(--line-strong); color: var(--ink); transition: background .2s ease; }
        .da-btn-ghost:hover { background: var(--paper-2); }

        /* Success */
        .da-success { padding: 48px 40px; display: flex; flex-direction: column; gap: 16px; }
        .da-success-icon { width: 52px; height: 52px; border-radius: 10px; background: rgba(14,157,110,.07); border: 1px solid rgba(14,157,110,.2); display: flex; align-items: center; justify-content: center; color: #0E9D6E; }
        .da-success-h { font-size: 24px; font-weight: 700; color: var(--ink); letter-spacing: -.03em; }
        .da-success-p { font-size: 15px; color: var(--muted); line-height: 1.65; max-width: 48ch; }
      `}</style>
    </>
  );
}

function Label({ text, required, children }: { text: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="da-label">
      <span className="da-label-text">
        {text}{required && <span className="da-required"> *</span>}
      </span>
      {children}
    </label>
  );
}
