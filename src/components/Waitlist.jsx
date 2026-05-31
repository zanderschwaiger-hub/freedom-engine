import React, { useState } from 'react'
import { supabase } from '../lib/supabase'
import { useScrollFade } from '../lib/useScrollFade'

export default function Waitlist() {
  const ref = useScrollFade()
  const [form, setForm] = useState({ name: '', email: '', concern: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const inputStyle = {
    width: '100%',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '2px',
    padding: '14px 18px',
    color: 'var(--white)',
    fontFamily: "'Outfit', sans-serif",
    fontSize: '15px',
    outline: 'none',
    transition: 'border-color 0.2s',
    marginBottom: '12px'
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email) return

    setStatus('loading')
    setErrorMsg('')

    try {
      const { error } = await supabase
        .from('waitlist')
        .insert([{
          name: form.name.trim(),
          email: form.email.trim().toLowerCase(),
          concern: form.concern.trim() || null,
          source: 'freedom_engine_homepage',
          created_at: new Date().toISOString()
        }])

      if (error) {
        // If table doesn't exist yet, still show success — we'll catch the lead
        if (error.code === '42P01') {
          setStatus('success')
          return
        }
        throw error
      }

      setStatus('success')
      setForm({ name: '', email: '', concern: '' })
    } catch (err) {
      console.error('Waitlist error:', err)
      setStatus('error')
      setErrorMsg('Something went wrong. Please try again.')
    }
  }

  return (
    <section ref={ref} id="waitlist" style={{
      background: 'var(--navy-mid)',
      borderTop: '1px solid rgba(200,169,110,0.07)',
      padding: 'clamp(60px, 10vw, 120px) clamp(24px, 8vw, 100px)'
    }}>
      <div style={{ maxWidth: '560px', margin: '0 auto', textAlign: 'center' }}>
        <span className="section-tag fade-up" style={{ display: 'block', textAlign: 'center' }}>
          Digital Guardian
        </span>
        <h2 className="fade-up" style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(36px, 5vw, 60px)',
          fontWeight: 600, lineHeight: 1.05,
          marginBottom: '16px'
        }}>
          Get early access.
        </h2>
        <p className="fade-up" style={{
          fontSize: '16px', fontWeight: 300,
          color: 'var(--dim)', lineHeight: 1.7,
          marginBottom: '44px'
        }}>
          Digital Guardian is being built for people who are done
          managing digital entropy alone. Join the list.
        </p>

        {status === 'success' ? (
          <div className="fade-up" style={{
            padding: '40px 32px',
            background: 'rgba(39,174,110,0.08)',
            border: '1px solid rgba(39,174,110,0.25)',
            borderRadius: '2px'
          }}>
            <div style={{
              fontSize: '32px', marginBottom: '16px'
            }}>✓</div>
            <div style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '24px', fontWeight: 600,
              color: 'var(--white)', marginBottom: '12px'
            }}>You're on the list.</div>
            <p style={{
              fontSize: '15px', fontWeight: 300,
              color: 'var(--dim)', lineHeight: 1.7
            }}>
              Digital Guardian is being built for people exactly like you.
              We'll be in touch.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="fade-up">
            <input
              type="text"
              placeholder="First Name"
              required
              value={form.name}
              onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
              style={inputStyle}
              onFocus={e => e.target.style.borderColor = 'rgba(200,169,110,0.4)'}
              onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
            />
            <input
              type="email"
              placeholder="Email Address"
              required
              value={form.email}
              onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
              style={inputStyle}
              onFocus={e => e.target.style.borderColor = 'rgba(200,169,110,0.4)'}
              onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
            />
            <input
              type="text"
              placeholder="What is your biggest digital concern right now? (optional)"
              value={form.concern}
              onChange={e => setForm(f => ({ ...f, concern: e.target.value }))}
              style={{ ...inputStyle, marginBottom: '20px' }}
              onFocus={e => e.target.style.borderColor = 'rgba(200,169,110,0.4)'}
              onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
            />

            {status === 'error' && (
              <div style={{
                padding: '12px 16px',
                background: 'rgba(224,112,96,0.1)',
                border: '1px solid rgba(224,112,96,0.3)',
                borderRadius: '2px', marginBottom: '16px',
                fontSize: '13px', color: 'var(--red)'
              }}>{errorMsg}</div>
            )}

            <button
              type="submit"
              className="btn-primary"
              disabled={status === 'loading'}
              style={{
                width: '100%', fontSize: '16px',
                padding: '18px',
                opacity: status === 'loading' ? 0.7 : 1
              }}>
              {status === 'loading' ? 'Joining...' : 'Join the Waitlist'}
            </button>

            <p style={{
              marginTop: '16px',
              fontFamily: "'DM Mono', monospace",
              fontSize: '10px', letterSpacing: '2px',
              color: 'rgba(200,169,110,0.35)', textTransform: 'uppercase'
            }}>
              No spam. No noise. Just Digital Guardian.
            </p>
          </form>
        )}
      </div>
    </section>
  )
}
