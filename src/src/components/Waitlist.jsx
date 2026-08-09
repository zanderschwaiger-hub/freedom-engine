import React from 'react'
import { useScrollFade } from '../lib/useScrollFade'

const DG_PAYMENT_LINK = 'https://app.freedomengine.ca'

export default function Waitlist() {
  const ref = useScrollFade()

  return (
    <section ref={ref} id="waitlist" style={{
      background: 'var(--navy-mid)',
      borderTop: '1px solid rgba(15,23,42,0.07)',
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
          Now available.
        </h2>
        <p className="fade-up" style={{
          fontSize: '16px', fontWeight: 300,
          color: 'var(--dim)', lineHeight: 1.7,
          marginBottom: '16px'
        }}>
          The ongoing governance engine for your digital life. Two tasks per week.
          One score. No overwhelm.
        </p>
        <p className="fade-up" style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: '13px', letterSpacing: '1px',
          color: 'var(--accent)',
          marginBottom: '44px'
        }}>
          7 days free — then $13.99 CAD / month. Cancel anytime.
        </p>

        <div className="fade-up" style={{
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', gap: '16px'
        }}>
          <button
            className="btn-primary"
            onClick={() => window.open(DG_PAYMENT_LINK, '_blank')}
            style={{ fontSize: '16px', padding: '18px 40px', width: '100%', maxWidth: '360px' }}
          >
            Start your free trial
          </button>

          <p style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '10px', letterSpacing: '2px',
            color: 'rgba(15,23,42,0.35)', textTransform: 'uppercase'
          }}>
            Use the same email you'll sign in with.
          </p>
        </div>

        <div className="fade-up" style={{
          marginTop: '52px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px', textAlign: 'left'
        }}>
          {[
            { title: 'Onboarding audit', body: 'Breach check, exposure score, baseline established from day one.' },
            { title: 'Weekly task engine', body: 'Two tasks per week from the governance framework. Just the next right move.' },
            { title: 'Governance score', body: 'A single number that moves as you complete tasks. Visible progress.' },
            { title: 'Live breach alerts', body: 'Notified the moment a breach hits your email — with exactly what to do.' },
            { title: 'Containment playbooks', body: 'When something goes wrong, step-by-step response guides are ready.' },
          ].map(f => (
            <div key={f.title} style={{
              padding: '20px',
              background: 'rgba(15,23,42,0.02)',
              border: '1px solid rgba(15,23,42,0.1)',
              borderRadius: '2px'
            }}>
              <div style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '17px', fontWeight: 600,
                color: 'var(--white)', marginBottom: '8px'
              }}>{f.title}</div>
              <div style={{
                fontSize: '13px', fontWeight: 300,
                color: 'var(--dim)', lineHeight: 1.65
              }}>{f.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
