import React from 'react'
import { useScrollFade } from '../lib/useScrollFade'

export default function Footer({ onGetCourse }) {
  const ref = useScrollFade()

  return (
    <>
      {/* Final CTA */}
      <section ref={ref} style={{
        background: 'var(--navy-mid)',
        padding: 'clamp(80px, 12vw, 140px) clamp(24px, 8vw, 100px)',
        textAlign: 'center', position: 'relative', overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse at 50% 50%, rgba(200,169,110,0.07) 0%, transparent 65%)'
        }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2 className="fade-up" style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(40px, 6vw, 80px)',
            fontWeight: 600, lineHeight: 1.02,
            marginBottom: '20px'
          }}>
            Start today.<br />
            <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>
              One day. Five fixes.
            </em>
          </h2>
          <p className="fade-up" style={{
            fontSize: '17px', fontWeight: 300,
            color: 'var(--dim)', marginBottom: '48px'
          }}>
            Digital safety through technical discipline.
          </p>
          <div className="fade-up" style={{
            display: 'flex', gap: '16px',
            justifyContent: 'center', flexWrap: 'wrap'
          }}>
            <button className="btn-primary" onClick={onGetCourse}
              style={{ fontSize: '16px', padding: '18px 44px' }}>
              Get The Digital Clean-Up — $30
            </button>
            
       <a       href="https://app.freedomengine.ca"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
              style={{ fontSize: '16px', padding: '18px 44px' }}>
              Start Digital Guardian Free
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: 'var(--navy)',
        borderTop: '1px solid rgba(255,255,255,0.055)',
        padding: 'clamp(28px, 4vw, 48px) clamp(24px, 8vw, 100px)',
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px'
      }}>
        <div style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: '20px', fontWeight: 600, color: 'var(--white)'
        }}>
          Freedom<span style={{ color: 'var(--accent)' }}>Engine</span>
        </div>
        <div style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: '10px', letterSpacing: '3px',
          color: 'rgba(240,238,234,0.28)', textTransform: 'uppercase'
        }}>
          Digital safety through technical discipline.
        </div>
        <div style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: '10px', color: 'rgba(240,238,234,0.2)',
          display: 'flex', gap: '16px', alignItems: 'center'
        }}>
          <span>© {new Date().getFullYear()} Freedom Engine</span>
          <a href="/privacy" style={{ color: 'rgba(240,238,234,0.3)', textDecoration: 'none' }}>Privacy</a>
          <a href="/terms" style={{ color: 'rgba(240,238,234,0.3)', textDecoration: 'none' }}>Terms</a>
        </div>
      </footer>
    </>
  )
}
