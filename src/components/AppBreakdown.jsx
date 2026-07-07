import React from 'react'
import { useScrollFade } from '../lib/useScrollFade'

const FEATURES = [
  {
    title: 'Find your exposure instantly',
    body: 'Add your emails and phone number. We check what has been breached, what is out there, and what needs attention.'
  },
  {
    title: 'A weekly action plan that moves',
    body: '2-3 tasks per week. Each one specific, actionable, and linked directly to where you need to go. No hunting required.'
  },
  {
    title: 'A health score that means something',
    body: 'A single number that reflects your actual digital safety posture. It moves when you fix things. It drops when new risks appear.'
  },
  {
    title: 'Breach alerts before you find out the hard way',
    body: 'The moment your email appears in a known breach, you are notified — with exactly what to do about it.'
  },
  {
    title: 'When things go wrong — a guide, not a guess',
    body: 'Compromised email. Hacked account. Identity theft. Step-by-step response guides for the moment something breaks.'
  }
]

export default function AppBreakdown() {
  const ref = useScrollFade()

  return (
    <section ref={ref} id="app" style={{
      background: 'var(--navy)',
      padding: 'clamp(60px, 10vw, 120px) clamp(24px, 8vw, 100px)',
      position: 'relative', overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse at 80% 50%, rgba(42,74,107,0.3) 0%, transparent 60%)'
      }} />

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '60px', alignItems: 'start',
        position: 'relative', zIndex: 1
      }}>
        <div>
          <span className="section-tag fade-up">Digital Guardian</span>

          <div className="fade-up" style={{
            display: 'inline-flex', alignItems: 'center', gap: '10px',
            background: 'rgba(200,169,110,0.06)',
            border: '1px solid rgba(200,169,110,0.18)',
            borderRadius: '2px', padding: '10px 18px',
            marginBottom: '24px'
          }}>
            <div style={{
              width: '8px', height: '8px', borderRadius: '50%',
              background: 'var(--accent)',
              animation: 'pulse 2s infinite'
            }} />
            <span style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '10px', letterSpacing: '2px',
              color: 'var(--accent)', textTransform: 'uppercase'
            }}>Now available · $13.99 / month</span>
          </div>

          <h2 className="fade-up" style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(40px, 5vw, 64px)',
            fontWeight: 600, lineHeight: 1.02,
            marginBottom: '20px'
          }}>
            Stay in control.<br />
            <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Know what to do.</em>
          </h2>

          <p className="fade-up" style={{
            fontSize: '16px', fontWeight: 300,
            color: 'var(--dim)', lineHeight: 1.75,
            marginBottom: '16px', maxWidth: '400px'
          }}>
            The ongoing tool for your digital life. Weekly tasks,
            breach alerts, a health score that moves, and step-by-step
            guides for when things go wrong.
          </p>
          <p className="fade-up" style={{
            fontSize: '15px', fontWeight: 300,
            color: 'var(--dim)', lineHeight: 1.75,
            marginBottom: '36px', maxWidth: '400px'
          }}>
            7 days free. Then $13.99 / month. Cancel anytime.
          </p>

          
            href="https://buy.stripe.com/6oU3cx0JdeM8aAz0DFb7y03"
            target="_blank"
            rel="noreferrer"
            className="btn-primary fade-up"
            style={{ fontSize: '15px', padding: '16px 36px' }}>
            Start free trial
          </a>
        </div>

        <div className="fade-up">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {FEATURES.map((f, i) => (
              <div key={i} style={{
                padding: '20px 22px',
                background: 'rgba(255,255,255,0.022)',
                border: '1px solid rgba(255,255,255,0.05)',
                borderRadius: '2px',
                transition: 'all 0.25s', cursor: 'default'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(200,169,110,0.05)'
                e.currentTarget.style.borderColor = 'rgba(200,169,110,0.18)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.022)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'
              }}>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '10px',
                  marginBottom: '6px'
                }}>
                  <div style={{
                    width: '6px', height: '6px', borderRadius: '50%',
                    background: 'var(--accent)', flexShrink: 0
                  }} />
                  <span style={{
                    fontSize: '14px', fontWeight: 600, color: 'var(--white)'
                  }}>{f.title}</span>
                </div>
                <div style={{
                  fontSize: '13px', fontWeight: 300,
                  color: 'var(--dim)', lineHeight: 1.6,
                  paddingLeft: '16px'
                }}>{f.body}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}
