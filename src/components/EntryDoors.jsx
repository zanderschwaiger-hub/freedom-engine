import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function EntryDoors() {
  const navigate = useNavigate()

  const Panel = ({ tag, title, purpose, benefits, cta, href, onClick, tint }) => (
    <div className="entry-panel" style={{
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      padding: 'clamp(40px, 6vw, 96px) clamp(28px, 5vw, 80px)',
      paddingTop: 'max(clamp(40px,6vw,96px), 108px)',
      background: tint, borderRight: '1px solid rgba(15,23,42,0.06)'
    }}>
      <div style={{ maxWidth: '460px', margin: '0 auto', width: '100%' }}>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '20px', display: 'block' }}>{tag}</span>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(34px, 4.5vw, 58px)', fontWeight: 600, lineHeight: 1.04, color: 'var(--white)', marginBottom: '20px' }}>{title}</h2>
        <p style={{ fontSize: '16px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.7, marginBottom: '28px' }}>{purpose}</p>
        <ul style={{ listStyle: 'none', margin: '0 0 40px', padding: 0 }}>
          {benefits.map(b => (
            <li key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '15px', color: 'var(--white)', marginBottom: '12px', lineHeight: 1.5 }}>
              <span style={{ color: 'var(--accent)', fontWeight: 700 }}>—</span><span>{b}</span>
            </li>
          ))}
        </ul>
        {href
          ? <a href={href} className="btn-primary" style={{ fontSize: '15px', padding: '16px 34px' }}>{cta} →</a>
          : <button className="btn-primary" onClick={onClick} style={{ fontSize: '15px', padding: '16px 34px' }}>{cta} →</button>}
      </div>
    </div>
  )

  return (
    <section className="entry-doors">
      <Panel
        tag="For individuals"
        title="Take back control of your digital life"
        purpose="The Digital Clean-Up crash course walks you through the handful of fixes that actually protect your accounts, your money, and your identity — in one sitting."
        benefits={['Five essential fixes, done with you', 'No jargon, no fear — just clear steps', 'Peace of mind that lasts']}
        cta="See the crash course"
        href="#course"
        tint="var(--navy-mid)"
      />
      <Panel
        tag="For business"
        title="Prove your team is ready"
        purpose="A business-resilience and human-continuity program that trains your people, assesses what they know, and gives you documented proof — see who it's for and what's required."
        benefits={['Train and assess your whole team', 'Certificate + evidence report you can file', 'Built on recognized resilience principles']}
        cta="Explore the business program"
        onClick={() => navigate('/business')}
        tint="var(--navy)"
      />
    </section>
  )
}
