import React, { useEffect, useRef } from 'react'

export default function Hero({ onGetCourse }) {
  const ref = useRef(null)

  useEffect(() => {
    const els = ref.current?.querySelectorAll('.fade-up')
    els?.forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), 100 + i * 120)
    })
  }, [])

  return (
    <section ref={ref} style={{
      minHeight: '100vh',
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      padding: 'clamp(100px, 14vw, 140px) clamp(24px, 8vw, 100px) 80px',
      position: 'relative', overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: `
          radial-gradient(ellipse at 72% 18%, rgba(42,74,107,0.55) 0%, transparent 52%),
          radial-gradient(ellipse at 12% 82%, rgba(200,169,110,0.07) 0%, transparent 46%)
        `
      }} />
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `
          linear-gradient(rgba(200,169,110,0.022) 1px, transparent 1px),
          linear-gradient(90deg, rgba(200,169,110,0.022) 1px, transparent 1px)
        `,
        backgroundSize: '64px 64px'
      }} />

      <div style={{
        position: 'absolute', bottom: '80px', right: '80px',
        width: '240px', height: '240px',
        border: '1px solid rgba(200,169,110,0.09)',
        borderRadius: '50%', pointerEvents: 'none'
      }}>
        <div style={{
          position: 'absolute', inset: '24px',
          border: '1px solid rgba(200,169,110,0.06)',
          borderRadius: '50%'
        }} />
      </div>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '900px' }}>
        <span className="section-tag fade-up">Freedom Engine</span>

        <h1 className="fade-up" style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(50px, 7vw, 96px)',
          fontWeight: 600, lineHeight: 1.0,
          marginBottom: '16px', letterSpacing: '-0.5px'
        }}>
          Know what you have.<br />
          <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Know what to do when something goes wrong.</em>
        </h1>

        <p className="fade-up" style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(22px, 3vw, 36px)',
          fontWeight: 400, fontStyle: 'italic',
          color: 'var(--dim)', marginBottom: '36px', lineHeight: 1.4
        }}>
          Freedom Engine puts you in control of your digital life.
        </p>

        <div className="fade-up" style={{
          width: '100%', height: '1px', marginBottom: '36px',
          background: 'linear-gradient(90deg, var(--accent) 0%, rgba(200,169,110,0.08) 50%, transparent 100%)'
        }} />

        <p className="fade-up" style={{
          fontSize: 'clamp(15px, 2vw, 18px)', fontWeight: 300,
          color: 'var(--dim)', maxWidth: '520px',
          lineHeight: 1.75, marginBottom: '48px'
        }}>
          Most people have no idea what accounts exist in their name,
          what has been breached, or what to do when something goes wrong.
          Freedom Engine fixes that — with structure, not complexity.
        </p>

        <div className="fade-up" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <button className="btn-primary" onClick={onGetCourse}
            style={{ fontSize: '16px', padding: '18px 40px' }}>
            Start with The Digital Clean-Up — $30
          </button>
          <a href="#app" className="btn-ghost"
            style={{ fontSize: '16px', padding: '18px 40px' }}>
            See Digital Guardian
          </a>
        </div>

        <p className="fade-up" style={{
          marginTop: '40px',
          fontFamily: "'DM Mono', monospace",
          fontSize: '10px', letterSpacing: '3px',
          color: 'rgba(200,169,110,0.45)', textTransform: 'uppercase'
        }}>
          Digital safety through technical discipline.
        </p>
      </div>
    </section>
  )
}
