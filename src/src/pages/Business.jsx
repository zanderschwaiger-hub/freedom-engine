import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SUPABASE_URL = 'https://gyyktrqkkqcasiykxuvt.supabase.co'
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable__U5B2zB3HrkvAEIVdKA8Lw_zEa67dI-'

export default function Business() {
  const [form, setForm] = useState({
    company_name: '', contact_name: '', email: '', company_size: '', message: ''
  })
  const [status, setStatus] = useState('idle') // idle | sending | done | error

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const submit = async () => {
    if (!form.email.trim()) { setStatus('error'); return }
    setStatus('sending')
    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/b2b_leads`, {
        method: 'POST',
        headers: {
          apikey: SUPABASE_PUBLISHABLE_KEY,
          Authorization: `Bearer ${SUPABASE_PUBLISHABLE_KEY}`,
          'Content-Type': 'application/json',
          Prefer: 'return=minimal'
        },
        body: JSON.stringify({ ...form, source: 'website_b2b' })
      })
      if (!res.ok) throw new Error('request failed')
      setStatus('done')
    } catch (err) {
      setStatus('error')
    }
  }

  const pad = 'clamp(24px, 8vw, 100px)'
  const label = {
    fontFamily: "'DM Mono', monospace", fontSize: '11px', letterSpacing: '1px',
    textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '8px', display: 'block'
  }
  const field = {
    width: '100%', padding: '14px 16px', marginBottom: '20px',
    background: 'rgba(15,23,42,0.03)', border: '1px solid rgba(15,23,42,0.18)',
    borderRadius: '2px', color: 'var(--white)', fontSize: '15px', fontFamily: 'inherit'
  }

  return (
    <div style={{ background: 'var(--navy)', color: 'var(--white)', minHeight: '100vh' }}>
      {/* Header */}
      <header style={{
        padding: `24px ${pad}`, display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', borderBottom: '1px solid rgba(15,23,42,0.07)'
      }}>
        <Link to="/" style={{
          fontFamily: "'Cormorant Garamond', serif", fontSize: '22px', fontWeight: 600,
          color: 'var(--white)', textDecoration: 'none'
        }}>Freedom Engine</Link>
        <Link to="/" style={{
          fontFamily: "'DM Mono', monospace", fontSize: '12px', letterSpacing: '1px',
          color: 'var(--dim)', textDecoration: 'none'
        }}>← Back</Link>
      </header>

      {/* Hero */}
      <section style={{ padding: `clamp(60px, 10vw, 120px) ${pad} clamp(32px, 5vw, 56px)`, maxWidth: '760px', margin: '0 auto' }}>
        <span style={label}>Business Protection Certification</span>
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(38px, 6vw, 68px)',
          fontWeight: 600, lineHeight: 1.03, marginBottom: '20px'
        }}>Prove your team is protected.</h1>
        <p style={{ fontSize: '17px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.7 }}>
          AI-ready digital hygiene training for your staff — aligned with the Canadian Centre for
          Cyber Security's baseline controls for small and medium organizations. Train, assess,
          and walk away with proof.
        </p>
      </section>

      {/* Problem + What you get */}
      <section style={{ padding: `0 ${pad} clamp(40px, 6vw, 72px)`, maxWidth: '760px', margin: '0 auto' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px'
        }}>
          <div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '24px', fontWeight: 600, marginBottom: '10px' }}>
              The gap most businesses miss
            </div>
            <p style={{ fontSize: '15px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.7 }}>
              Your cyber insurance likely requires documented proof your staff were trained. Without
              it, a claim can be denied. Most teams have the training gap — and no paper trail.
            </p>
          </div>
          <div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '24px', fontWeight: 600, marginBottom: '10px' }}>
              What you walk away with
            </div>
            <p style={{ fontSize: '15px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.7 }}>
              A dated completion certificate for every employee, plus a company roster summary sheet
              you can hand to your broker, insurer, or a client's procurement team.
            </p>
          </div>
        </div>
      </section>

      {/* Lead form */}
      <section style={{ padding: `0 ${pad} clamp(80px, 12vw, 140px)`, maxWidth: '560px', margin: '0 auto' }}>
        <div style={{
          padding: 'clamp(28px, 5vw, 48px)', background: 'var(--navy-mid)',
          border: '1px solid rgba(15,23,42,0.14)', borderRadius: '2px'
        }}>
          {status === 'done' ? (
            <div style={{ textAlign: 'center', padding: '20px 0' }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '30px', fontWeight: 600, marginBottom: '10px' }}>
                Thanks — we'll be in touch.
              </div>
              <p style={{ fontSize: '15px', fontWeight: 300, color: 'var(--dim)' }}>
                We'll reach out about getting your team certified.
              </p>
            </div>
          ) : (
            <>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '26px', fontWeight: 600, marginBottom: '6px' }}>
                Request business certification
              </div>
              <p style={{ fontSize: '14px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.6, marginBottom: '28px' }}>
                Tell us about your team and we'll get you the details.
              </p>

              <label style={label}>Company name</label>
              <input style={field} value={form.company_name} onChange={update('company_name')} placeholder="Acme Inc." />

              <label style={label}>Your name</label>
              <input style={field} value={form.contact_name} onChange={update('contact_name')} placeholder="Jane Doe" />

              <label style={label}>Email *</label>
              <input style={field} type="email" value={form.email} onChange={update('email')} placeholder="jane@acme.com" />

              <label style={label}>Company size</label>
              <input style={field} value={form.company_size} onChange={update('company_size')} placeholder="e.g. 8 employees" />

              <label style={label}>Anything we should know?</label>
              <textarea style={{ ...field, minHeight: '90px', resize: 'vertical' }} value={form.message} onChange={update('message')} placeholder="Optional" />

              {status === 'error' && (
                <p style={{ color: 'var(--red)', fontSize: '13px', marginBottom: '16px' }}>
                  Please add a valid email and try again.
                </p>
              )}

              <button
                className="btn-primary"
                onClick={submit}
                disabled={status === 'sending'}
                style={{ fontSize: '15px', padding: '16px 32px', width: '100%', opacity: status === 'sending' ? 0.6 : 1 }}
              >
                {status === 'sending' ? 'Sending…' : 'Request business certification info'}
              </button>
            </>
          )}
        </div>

        {/* Fine print */}
        <p style={{
          fontSize: '11px', fontWeight: 300, color: 'rgba(15,23,42,0.45)',
          lineHeight: 1.6, marginTop: '28px', textAlign: 'center'
        }}>
          Freedom Engine is an independent program. This certification confirms individual training
          completion. It is aligned with — not accredited by or equivalent to — CyberSecure Canada,
          ISO/IEC 27001, or any government-backed designation.
        </p>
      </section>
    </div>
  )
}
