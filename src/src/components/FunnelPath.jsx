import React from 'react'
import { useScrollFade } from '../lib/useScrollFade'

const STEPS = [
  {
    num: '01',
    title: 'The Digital Clean-Up',
    price: '$30',
    body: 'One day. Five fixes. Walk away knowing exactly what exists in your name, what\'s been cleaned up, and what to do if something ever goes wrong.',
    cta: 'Start today'
  },
  {
    num: '02',
    title: 'Digital Guardian App',
    price: '$13.99 / month',
    body: 'Two tasks per week. Ongoing governance. Your score improves every week. You stop managing digital entropy alone.',
    cta: 'Start free trial'
  },
  {
    num: '03',
    title: 'The Mastermind',
    price: 'By trust',
    body: 'For those who want to go deeper or bring Freedom Engine to their team. Built on trust that already exists.',
    cta: null
  }
]

export default function FunnelPath({ onGetCourse }) {
  const ref = useScrollFade()

  return (
    <section ref={ref} style={{
      background: 'var(--navy)',
      borderTop: '1px solid rgba(15,23,42,0.07)',
      padding: 'clamp(60px, 10vw, 120px) clamp(24px, 8vw, 100px)'
    }}>
      <span className="section-tag fade-up">The path forward</span>
      <h2 className="fade-up" style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: 'clamp(36px, 5vw, 60px)',
        fontWeight: 600, lineHeight: 1.05,
        marginBottom: '12px'
      }}>
        Start today.<br />
        <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Build from there.</em>
      </h2>
      <p className="fade-up" style={{
        fontSize: '16px', fontWeight: 300,
        color: 'var(--dim)', maxWidth: '480px',
        lineHeight: 1.7, marginBottom: '52px'
      }}>
        Three stages. Each one built on the trust the last one earned.
      </p>

      <div className="fade-up" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '20px'
      }}>
        {STEPS.map((s, i) => (
          <div key={s.num} style={{
            background: i === 0 ? 'rgba(15,23,42,0.06)' : 'rgba(15,23,42,0.02)',
            border: `1px solid ${i === 0 ? 'rgba(15,23,42,0.25)' : 'rgba(15,23,42,0.12)'}`,
            borderTop: '2px solid var(--accent)',
            borderRadius: '2px', padding: '28px 24px',
            display: 'flex', flexDirection: 'column', gap: '12px'
          }}>
            <div style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '28px', fontWeight: 300,
              color: 'rgba(15,23,42,0.22)', lineHeight: 1
            }}>{s.num}</div>
            <div>
              <div style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '22px', fontWeight: 600,
                color: 'var(--white)', marginBottom: '4px'
              }}>{s.title}</div>
              <div style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '10px', letterSpacing: '2px',
                color: 'var(--accent)', textTransform: 'uppercase'
              }}>{s.price}</div>
            </div>
            <div style={{
              fontSize: '13px', fontWeight: 300,
              color: 'var(--dim)', lineHeight: 1.65, flex: 1
            }}>{s.body}</div>
            {s.cta && (
              <button
                className="btn-ghost"
                onClick={
                  s.num === '01'
                    ? onGetCourse
                    : s.num === '02'
                    ? () => window.open('https://app.freedomengine.ca', '_blank')
                    : undefined
                }
                style={{ fontSize: '13px', padding: '10px 20px', marginTop: '8px' }}>
                {s.cta} →
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
