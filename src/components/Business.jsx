import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'

const SUPABASE_URL = 'https://gyyktrqkkqcasiykxuvt.supabase.co'
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable__U5B2zB3HrkvAEIVdKA8Lw_zEa67dI-'

export default function Business() {
  const [form, setForm] = useState({ company_name: '', contact_name: '', email: '', company_size: '', message: '' })
  const [status, setStatus] = useState('idle')
  const [showForm, setShowForm] = useState(false)
  const formRef = useRef(null)
  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const openForm = () => {
    setShowForm(true)
    setTimeout(() => formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 60)
  }

  const submit = async () => {
    if (!form.email.trim()) { setStatus('error'); return }
    setStatus('sending')
    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/b2b_leads`, {
        method: 'POST',
        headers: { apikey: SUPABASE_PUBLISHABLE_KEY, Authorization: `Bearer ${SUPABASE_PUBLISHABLE_KEY}`, 'Content-Type': 'application/json', Prefer: 'return=minimal' },
        body: JSON.stringify({ ...form, source: 'website_b2b' })
      })
      if (!res.ok) throw new Error('request failed')
      setStatus('done')
    } catch (err) { setStatus('error') }
  }

  const pad = 'clamp(24px, 8vw, 100px)'
  const label = { fontFamily: "'DM Mono', monospace", fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '8px', display: 'block' }
  const field = { width: '100%', padding: '14px 16px', marginBottom: '20px', background: 'rgba(15,23,42,0.03)', border: '1px solid rgba(15,23,42,0.14)', borderRadius: '6px', color: 'var(--white)', fontSize: '15px', fontFamily: 'inherit' }
  const card = { padding: 'clamp(24px, 4vw, 40px)', background: 'var(--navy-mid)', border: '1px solid rgba(15,23,42,0.1)', borderRadius: '10px' }
  const h2 = { fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(26px, 3.2vw, 38px)', fontWeight: 600, lineHeight: 1.1, marginBottom: '20px' }
  const li = { display: 'flex', gap: '12px', alignItems: 'flex-start', fontSize: '15px', color: 'var(--white)', lineHeight: 1.6, marginBottom: '14px' }
  const dash = { color: 'var(--accent)', fontWeight: 700 }

  return (
    <div style={{ background: 'var(--navy)', color: 'var(--white)', minHeight: '100vh' }}>
      <header style={{ padding: `24px ${pad}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(15,23,42,0.07)' }}>
        <Link to="/" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '22px', fontWeight: 600, color: 'var(--white)', textDecoration: 'none' }}>Freedom Engine</Link>
        <Link to="/" style={{ fontFamily: "'DM Mono', monospace", fontSize: '12px', letterSpacing: '1px', color: 'var(--dim)', textDecoration: 'none' }}>Back</Link>
      </header>

      <section style={{ padding: `clamp(56px, 9vw, 110px) ${pad} clamp(28px, 4vw, 48px)`, maxWidth: '820px', margin: '0 auto' }}>
        <span style={label}>Business Resilience &amp; Human Continuity</span>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(38px, 6vw, 66px)', fontWeight: 600, lineHeight: 1.03, marginBottom: '20px' }}>Prove your team is ready.</h1>
        <p style={{ fontSize: '17px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.7 }}>A workforce-readiness program that trains your people, assesses what they know, and produces documented proof of preparedness, aligned with recognized business-continuity and organizational-resilience principles.</p>
      </section>

      <section style={{ padding: `0 ${pad} clamp(32px, 5vw, 56px)`, maxWidth: '820px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          <div style={card}>
            <h2 style={h2}>Who it's for</h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={li}><span style={dash}>-</span><span>Small and mid-sized teams without an internal training department</span></li>
              <li style={li}><span style={dash}>-</span><span>Finance, HR, operations, and client-facing staff</span></li>
              <li style={li}><span style={dash}>-</span><span>Businesses that need to show clients, brokers, or insurers their people are trained</span></li>
              <li style={li}><span style={dash}>-</span><span>Privacy-sensitive or regulated organizations documenting workforce readiness</span></li>
            </ul>
          </div>
          <div style={card}>
            <h2 style={h2}>What certification requires</h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={li}><span style={dash}>-</span><span>Each employee completes all training modules</span></li>
              <li style={li}><span style={dash}>-</span><span>Passes the assessment (open-book, unlimited retries)</span></li>
              <li style={li}><span style={dash}>-</span><span>A named representative confirms participation</span></li>
              <li style={li}><span style={dash}>-</span><span>You receive a per-employee certificate and a company evidence report</span></li>
              <li style={li}><span style={dash}>-</span><span>Valid 12 months, with annual reassessment</span></li>
            </ul>
          </div>
        </div>

        {!showForm && (
          <div style={{ textAlign: 'center', marginTop: 'clamp(36px, 5vw, 56px)' }}>
            <button className="btn-primary" onClick={openForm} style={{ fontSize: '16px', padding: '18px 40px' }}>Request the program</button>
            <p style={{ fontSize: '13px', color: 'var(--dim)', marginTop: '14px' }}>Tell us your team size and we'll get you the details.</p>
          </div>
        )}
      </section>

      {showForm && (
        <section ref={formRef} style={{ padding: `clamp(12px, 3vw, 32px) ${pad} clamp(80px, 12vw, 140px)`, maxWidth: '560px', margin: '0 auto' }}>
          <div style={{ ...card, boxShadow: '0 8px 40px rgba(15,23,42,0.05)' }}>
            {status === 'done' ? (
              <div style={{ textAlign: 'center', padding: '20px 0' }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '30px', fontWeight: 600, marginBottom: '10px' }}>Thanks, we'll be in touch.</div>
                <p style={{ fontSize: '15px', fontWeight: 300, color: 'var(--dim)' }}>We'll reach out about getting your team certified.</p>
              </div>
            ) : (
              <>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '26px', fontWeight: 600, marginBottom: '6px' }}>Request the business program</div>
                <p style={{ fontSize: '14px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.6, marginBottom: '28px' }}>The team-size field helps us scope and price it for you.</p>
                <label style={label}>Group / team size *</label>
                <select style={field} value={form.company_size} onChange={update('company_size')}>
                  <option value="">Select team size...</option>
                  <option value="1-10">1-10 people</option>
                  <option value="11-50">11-50 people</option>
                  <option value="51-200">51-200 people</option>
                  <option value="200+">200+ people</option>
                </select>
                <label style={label}>Company name</label>
                <input style={field} value={form.company_name} onChange={update('company_name')} placeholder="Acme Inc." />
                <label style={label}>Your name</label>
                <input style={field} value={form.contact_name} onChange={update('contact_name')} placeholder="Jane Doe" />
                <label style={label}>Email *</label>
                <input style={field} type="email" value={form.email} onChange={update('email')} placeholder="jane@acme.com" />
                <label style={label}>Anything we should know?</label>
                <textarea style={{ ...field, minHeight: '90px', resize: 'vertical' }} value={form.message} onChange={update('message')} placeholder="Optional" />
                {status === 'error' && (<p style={{ color: 'var(--red)', fontSize: '13px', marginBottom: '16px' }}>Please add a valid email and try again.</p>)}
                <button className="btn-primary" onClick={submit} disabled={status === 'sending'} style={{ fontSize: '15px', padding: '16px 32px', width: '100%', opacity: status === 'sending' ? 0.6 : 1 }}>{status === 'sending' ? 'Sending...' : 'Request business program info'}</button>
              </>
            )}
          </div>
          <p style={{ fontSize: '11px', fontWeight: 300, color: 'rgba(15,23,42,0.45)', lineHeight: 1.6, marginTop: '28px', textAlign: 'center' }}>Freedom Engine is a private, independently reviewable program. This credential confirms completion of the Freedom Engine assessment. It is not ISO certification, insurer approval, legal-compliance certification, or a guarantee of insurance coverage. Insurance eligibility and coverage are determined solely by the applicable insurer.</p>
        </section>
      )}
    </div>
  )
}
