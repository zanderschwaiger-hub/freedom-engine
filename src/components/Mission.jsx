import React from 'react'

export default function Mission() {
  return (
    <section id="mission" style={{ padding: 'clamp(72px,11vw,130px) clamp(24px,8vw,100px)', borderTop: '1px solid rgba(15,23,42,0.06)' }}>
      <div style={{ maxWidth: '760px', margin: '0 auto' }}>
        <span className="section-tag">Our mission</span>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(30px,4.5vw,54px)', fontWeight: 600, lineHeight: 1.1, marginBottom: '20px' }}>Know what you have. Know what to do when something goes wrong.</h2>
        <p style={{ fontSize: '17px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.75 }}>Freedom Engine puts you and your team in control of your digital life. Individuals lock down the accounts their lives run on. Businesses prove their people are ready when something goes wrong.</p>
      </div>
    </section>
  )
}
