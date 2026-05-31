import React, { useEffect } from 'react'

export default function ThankYou() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div style={{
      minHeight: '100vh', background: 'var(--navy)',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      padding: '60px 24px', textAlign: 'center',
      position: 'relative', overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse at 50% 40%, rgba(200,169,110,0.08) 0%, transparent 60%)'
      }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '560px' }}>
        {/* Check */}
        <div style={{
          width: '72px', height: '72px', borderRadius: '50%',
          background: 'rgba(39,174,110,0.12)',
          border: '1px solid rgba(39,174,110,0.3)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 32px',
          fontSize: '28px'
        }}>✓</div>

        <span style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: '10px', letterSpacing: '4px',
          color: 'var(--accent)', textTransform: 'uppercase',
          display: 'block', marginBottom: '20px'
        }}>You're in.</span>

        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(40px, 6vw, 72px)',
          fontWeight: 600, lineHeight: 1.02,
          marginBottom: '20px'
        }}>
          The Digital Clean-Up<br />
          <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>
            is yours.
          </em>
        </h1>

        <p style={{
          fontSize: '17px', fontWeight: 300,
          color: 'var(--dim)', lineHeight: 1.75,
          marginBottom: '16px'
        }}>
          Check your email for access. You'll receive the course
          workbook and module links immediately.
        </p>

        <p style={{
          fontSize: '15px', fontWeight: 300,
          color: 'var(--dim)', lineHeight: 1.75,
          marginBottom: '48px'
        }}>
          Complete all five modules today. The foundation takes 90 minutes.
          The protection lasts permanently.
        </p>

        {/* What's next */}
        <div style={{
          background: 'rgba(255,255,255,0.025)',
          border: '1px solid rgba(200,169,110,0.15)',
          borderRadius: '2px', padding: '28px 24px',
          marginBottom: '40px', textAlign: 'left'
        }}>
          <div style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '9px', letterSpacing: '3px',
            color: 'var(--accent)', textTransform: 'uppercase',
            marginBottom: '16px'
          }}>Start here</div>
          {[
            { num: '01', text: 'Check your email for course access' },
            { num: '02', text: 'Open Module 1 — Freeze Your Credit (20 min)' },
            { num: '03', text: 'Work through all five modules today' },
            { num: '04', text: 'Come back for Digital Guardian when it launches' }
          ].map(s => (
            <div key={s.num} style={{
              display: 'flex', gap: '16px',
              alignItems: 'flex-start', marginBottom: '12px'
            }}>
              <span style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '10px', color: 'var(--accent)',
                letterSpacing: '1px', paddingTop: '2px', flexShrink: 0
              }}>{s.num}</span>
              <span style={{
                fontSize: '14px', fontWeight: 300, color: 'var(--dim)'
              }}>{s.text}</span>
            </div>
          ))}
        </div>

        <a href="/" style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: '11px', letterSpacing: '2px',
          color: 'rgba(200,169,110,0.5)', textDecoration: 'none',
          textTransform: 'uppercase', transition: 'color 0.2s'
        }}
        onMouseEnter={e => e.target.style.color = 'var(--accent)'}
        onMouseLeave={e => e.target.style.color = 'rgba(200,169,110,0.5)'}>
          ← Back to Freedom Engine
        </a>
      </div>
    </div>
  )
}
