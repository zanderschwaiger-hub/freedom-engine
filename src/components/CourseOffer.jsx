import React from 'react'
import { useScrollFade } from '../lib/useScrollFade'

const MODULES = [
  { num: '01', title: 'Freeze Your Credit', body: 'Stops identity theft at the root. All three bureaus. Free. 20 minutes.' },
  { num: '02', title: 'Check Your Breach Exposure', body: 'See exactly where your passwords have leaked. Live tools, instant results.' },
  { num: '03', title: 'Lock Your Recovery Chain', body: 'Secure the master keys to your entire digital life against takeover.' },
  { num: '04', title: 'Kill Dead Accounts', body: 'Every account that exists is a liability. We start eliminating them today.' },
  { num: '05', title: 'Set Up Email Aliasing', body: 'Protect every future signup permanently. Your real address never leaks again.' }
]

export default function CourseOffer({ onGetCourse }) {
  const ref = useScrollFade()

  return (
    <section ref={ref} id="course" style={{
      background: 'var(--navy)',
      padding: 'clamp(60px, 10vw, 120px) clamp(24px, 8vw, 100px)'
    }}>
      <span className="section-tag fade-up">The entry point</span>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '60px', alignItems: 'start', marginTop: '8px'
      }}>
        {/* Left col */}
        <div>
          <h2 className="fade-up" style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(40px, 5vw, 68px)',
            fontWeight: 600, lineHeight: 1.02,
            marginBottom: '28px'
          }}>
            The Digital<br />
            <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Clean-Up.</em>
          </h2>

          {/* Price badge */}
          <div className="fade-up" style={{
            display: 'inline-flex', alignItems: 'center', gap: '16px',
            background: 'rgba(200,169,110,0.07)',
            border: '1px solid rgba(200,169,110,0.22)',
            borderRadius: '2px', padding: '16px 24px',
            marginBottom: '28px'
          }}>
            <div style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '56px', fontWeight: 600,
              color: 'var(--accent)', lineHeight: 1
            }}>$30</div>
            <div>
              <div style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '10px', letterSpacing: '2px',
                color: 'var(--dim)', textTransform: 'uppercase',
                marginBottom: '4px'
              }}>One-time access</div>
              <div style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '10px', letterSpacing: '2px',
                color: 'var(--dim)', textTransform: 'uppercase'
              }}>Complete in 90 min</div>
            </div>
          </div>

          <p className="fade-up" style={{
            fontSize: '16px', fontWeight: 300,
            color: 'var(--dim)', lineHeight: 1.75,
            marginBottom: '36px', maxWidth: '420px'
          }}>
            One day. Five fixes. Walk away with the foundation done
            and the majority of your exposure permanently closed.
          </p>

          <button className="btn-primary fade-up" onClick={onGetCourse}
            style={{ fontSize: '16px', padding: '18px 40px', width: '100%', maxWidth: '340px' }}>
            Get The Digital Clean-Up — $30
          </button>

          {/* Included */}
          <div className="fade-up" style={{ marginTop: '28px' }}>
            {[
              'Step-by-step modules completable in 90 minutes',
              'Specific tools named for every fix',
              'Downloadable course workbook included',
              'One-time payment — yours forever'
            ].map((item, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: '10px',
                marginBottom: '10px'
              }}>
                <div style={{
                  width: '16px', height: '16px', borderRadius: '50%',
                  background: 'rgba(39,174,110,0.15)',
                  border: '1px solid rgba(39,174,110,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <span style={{ fontSize: '9px', color: 'var(--green)' }}>✓</span>
                </div>
                <span style={{ fontSize: '13px', fontWeight: 300, color: 'var(--dim)' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right col — modules */}
        <div className="fade-up">
          <div style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '9px', letterSpacing: '3px',
            color: 'rgba(200,169,110,0.5)', textTransform: 'uppercase',
            marginBottom: '16px'
          }}>
            What's inside
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {MODULES.map(m => (
              <div key={m.num} style={{
                display: 'flex', gap: '16px',
                padding: '18px 20px',
                background: 'rgba(255,255,255,0.022)',
                border: '1px solid rgba(255,255,255,0.055)',
                borderLeft: '3px solid var(--accent)',
                borderRadius: '2px',
                transition: 'background 0.2s'
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(200,169,110,0.055)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.022)'}>
                <span style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: '10px', color: 'var(--accent)',
                  letterSpacing: '2px', paddingTop: '2px', flexShrink: 0
                }}>{m.num}</span>
                <div>
                  <strong style={{
                    display: 'block', fontSize: '14px',
                    fontWeight: 600, color: 'var(--white)', marginBottom: '4px'
                  }}>{m.title}</strong>
                  <span style={{
                    fontSize: '13px', color: 'var(--dim)',
                    fontWeight: 300, lineHeight: 1.5
                  }}>{m.body}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
