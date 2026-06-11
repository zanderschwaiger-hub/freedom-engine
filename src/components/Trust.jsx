import React from 'react'
import { useScrollFade } from '../lib/useScrollFade'

export default function Trust() {
  const ref = useScrollFade()

  return (
    <section ref={ref} style={{
      background: 'var(--navy-mid)',
      borderTop: '1px solid rgba(200,169,110,0.07)',
      padding: 'clamp(60px, 10vw, 120px) clamp(24px, 8vw, 100px)'
    }}>
      <div style={{ maxWidth: '820px' }}>
        <span className="section-tag fade-up">Why Freedom Engine</span>

        <blockquote className="fade-up" style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(24px, 3.5vw, 44px)',
          fontWeight: 400, fontStyle: 'italic',
          lineHeight: 1.3, color: 'var(--white)',
          borderLeft: '3px solid var(--accent)',
          paddingLeft: '32px', marginBottom: '48px'
        }}>
          "You don't study accounting to trust a CFO.<br />
          You don't study aviation to trust a pilot.<br />
          <span style={{ color: 'var(--accent)' }}>
            You just need to know the work is being done correctly."
          </span>
        </blockquote>

        <div className="fade-up" style={{
          fontSize: 'clamp(15px, 1.8vw, 17px)', fontWeight: 300,
          color: 'var(--dim)', lineHeight: 1.8
        }}>
          <p style={{ marginBottom: '16px' }}>
            Freedom Engine gives you visibility into your digital life and a clear path
            to clean it up. Not because you became an expert. Because you finally have
            the structure — and you know exactly what to do when something goes wrong.
          </p>
          <p>
            The crash course gives you control in one sitting.
            The Digital Guardian app keeps you in control week by week.
            And when something breaks — the playbooks tell you exactly what to do, step by step.
          </p>
        </div>

        <div className="fade-up" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '16px', marginTop: '52px'
        }}>
          {[
            { label: 'Visibility', desc: 'Know what exists in your name and what is at risk.' },
            { label: 'Control', desc: 'Know what you have and who has access to it.' },
            { label: 'Action', desc: 'Know exactly what to fix and how to fix it.' },
            { label: 'Recovery', desc: 'Know what to do the moment something goes wrong.' }
          ].map(p => (
            <div key={p.label} style={{
              padding: '20px',
              border: '1px solid rgba(200,169,110,0.12)',
              borderRadius: '2px',
              background: 'rgba(255,255,255,0.02)'
            }}>
              <div style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '22px', fontWeight: 600,
                color: 'var(--white)', marginBottom: '8px'
              }}>{p.label}</div>
              <div style={{
                fontSize: '13px', fontWeight: 300,
                color: 'var(--dim)', lineHeight: 1.5
              }}>{p.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
