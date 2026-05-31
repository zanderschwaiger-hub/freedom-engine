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

        {/* Big quote */}
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
            Freedom Engine reduces your digital fragility through structured governance.
            The 12-pillar framework operates invisibly underneath a single outcome:
            you regain control of your digital life.
          </p>
          <p>
            Not because you learned more. Because someone competent
            built the structure — and now it runs with you.
          </p>
        </div>

        {/* Philosophy pillars */}
        <div className="fade-up" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '16px', marginTop: '52px'
        }}>
          {[
            { label: 'Control', desc: 'Who owns your digital life right now.' },
            { label: 'Coverage', desc: 'What exists and what is connected.' },
            { label: 'Defense', desc: 'Reduce probability. Reduce blast radius.' },
            { label: 'Maintenance', desc: 'Governance that never decays.' }
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
