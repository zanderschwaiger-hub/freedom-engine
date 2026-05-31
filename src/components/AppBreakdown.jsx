import React from 'react'
import { useScrollFade } from '../lib/useScrollFade'

const FEATURES = [
  {
    title: 'Onboarding Audit',
    body: 'Live breach monitoring, five core exposure areas checked, baseline governance score established from day one. You know exactly where you stand.'
  },
  {
    title: 'Weekly Task Engine',
    body: 'Two tasks per week from the Freedom Engine governance framework. Not overwhelming — just the next right move, delivered every week.'
  },
  {
    title: 'Governance Score',
    body: 'A single number that moves as you complete tasks. Visible progress. Replaces the anxiety of not knowing where you stand.'
  },
  {
    title: 'Live Breach Alerts',
    body: 'Push notification the moment a breach hits your email address — with exactly what to do about it, step by step.'
  },
  {
    title: 'Containment Playbook',
    body: 'When something goes wrong, Digital Guardian becomes your calm, structured, step-by-step response guide. Built for bad days.'
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
      {/* Bg glow */}
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
        {/* Left */}
        <div>
          <span className="section-tag fade-up">Coming next</span>

          {/* Waitlist badge */}
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
            }}>Waitlist Open</span>
          </div>

          <h2 className="fade-up" style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(40px, 5vw, 64px)',
            fontWeight: 600, lineHeight: 1.02,
            marginBottom: '20px'
          }}>
            Digital<br />
            <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Guardian.</em>
          </h2>

          <p className="fade-up" style={{
            fontSize: '16px', fontWeight: 300,
            color: 'var(--dim)', lineHeight: 1.75,
            marginBottom: '16px', maxWidth: '400px'
          }}>
            The ongoing governance engine. Two tasks per week.
            One score. No overwhelm.
          </p>
          <p className="fade-up" style={{
            fontSize: '15px', fontWeight: 300,
            color: 'var(--dim)', lineHeight: 1.75,
            marginBottom: '36px', maxWidth: '400px'
          }}>
            You no longer have to manage digital entropy alone.
          </p>

          <a href="#waitlist" className="btn-primary fade-up"
            style={{ fontSize: '15px', padding: '16px 36px' }}>
            Join the Waitlist
          </a>
        </div>

        {/* Right — features */}
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

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.8); }
        }
      `}</style>
    </section>
  )
}
