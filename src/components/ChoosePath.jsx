import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useScrollFade } from '../lib/useScrollFade'

export default function ChoosePath({ onGetCourse }) {
  const ref = useScrollFade()
  const navigate = useNavigate()

  const cards = [
    {
      tag: 'For individuals',
      title: 'Individual Hygiene',
      body: 'The Digital Clean-Up crash course. Five fixes, one sitting — lock down the accounts your life runs on.',
      cta: 'Start the crash course',
      action: () => onGetCourse?.(),
    },
    {
      tag: 'For business',
      title: 'Business Protection',
      body: 'Train your team and prove it. A completion certificate and roster you can hand your insurer — aligned with Canadian cyber baseline controls.',
      cta: 'See business certification',
      action: () => navigate('/business'),
    },
  ]

  return (
    <section ref={ref} id="choose" style={{
      background: 'var(--navy)',
      borderTop: '1px solid rgba(200,169,110,0.07)',
      padding: 'clamp(60px, 10vw, 120px) clamp(24px, 8vw, 100px)'
    }}>
      <div style={{ maxWidth: '920px', margin: '0 auto' }}>
        <span className="section-tag fade-up" style={{ display: 'block', textAlign: 'center' }}>
          Choose your path
        </span>
        <h2 className="fade-up" style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(32px, 4.5vw, 52px)',
          fontWeight: 600, lineHeight: 1.05,
          textAlign: 'center', marginBottom: '48px'
        }}>
          One for you. One for your team.
        </h2>

        <div className="fade-up" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px'
        }}>
          {cards.map(c => (
            <div key={c.title} style={{
              display: 'flex', flexDirection: 'column',
              padding: 'clamp(28px, 4vw, 44px)',
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(200,169,110,0.14)',
              borderRadius: '2px'
            }}>
              <span style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '11px', letterSpacing: '2px',
                textTransform: 'uppercase',
                color: 'var(--accent)', marginBottom: '18px'
              }}>{c.tag}</span>
              <div style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(26px, 3vw, 34px)', fontWeight: 600,
                color: 'var(--white)', marginBottom: '14px'
              }}>{c.title}</div>
              <p style={{
                fontSize: '15px', fontWeight: 300,
                color: 'var(--dim)', lineHeight: 1.7,
                marginBottom: '32px', flexGrow: 1
              }}>{c.body}</p>
              <button
                className="btn-primary"
                onClick={c.action}
                style={{ fontSize: '15px', padding: '16px 32px', width: '100%' }}
              >
                {c.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
