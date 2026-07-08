import React from 'react'
import { useScrollFade } from '../lib/useScrollFade'

export default function Problem() {
  const ref = useScrollFade()

  return (
    <section ref={ref} style={{
      background: 'var(--navy-mid)',
      borderTop: '1px solid rgba(200,169,110,0.07)',
      borderBottom: '1px solid rgba(200,169,110,0.07)',
      padding: 'clamp(60px, 10vw, 120px) clamp(24px, 8vw, 100px)'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <span className="section-tag fade-up" style={{ textAlign: 'center', display: 'block' }}>
          The reality
        </span>
        <h2 className="fade-up" style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(36px, 5vw, 64px)',
          fontWeight: 600, lineHeight: 1.05,
          marginBottom: '16px'
        }}>
          Most people have no idea<br />what is out there in their name.
        </h2>
        <p className="fade-up" style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(18px, 2.5vw, 26px)',
          fontStyle: 'italic', color: 'var(--accent)',
          marginBottom: '36px'
        }}>
          And even fewer know what to do when something goes wrong.
        </p>
        <div className="fade-up" style={{
          fontSize: 'clamp(15px, 1.8vw, 17px)', fontWeight: 300,
          color: 'var(--dim)', lineHeight: 1.8
        }}>
          <p style={{ marginBottom: '16px' }}>
            As a creator or business owner, your exposure is higher than most.
            Accounts you forgot exist. Passwords reused across platforms.
            Recovery chains pointing to old numbers. Brand accounts, payment tools,
            client data — all connected to an email that has never been properly secured.
          </p>
          <p>
            Data brokers selling your name and address right now.
            A breach you never heard about. Everything you have built
            sitting on a foundation that has never been checked.
            This is not a technical problem. It is a visibility problem.
            And it is completely fixable.
          </p>
        </div>

        <div className="fade-up" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px', marginTop: '56px'
        }}>
          {[
            { num: '01', title: 'You don\'t know what exists', body: 'Hundreds of accounts. Old emails. Forgotten services. Each one is a door you left open.' },
            { num: '02', title: 'You don\'t know what\'s exposed', body: 'Your credentials have likely appeared in breaches you never heard about. Your data is being sold right now.' },
            { num: '03', title: 'You don\'t know what to do', body: 'When something goes wrong — a compromised account, a breach, a hacked email — most people freeze. They shouldn\'t have to.' }
          ].map(v => (
            <div key={v.num} style={{
              background: 'rgba(255,255,255,0.025)',
              border: '1px solid rgba(200,169,110,0.12)',
              borderTop: '2px solid var(--accent)',
              borderRadius: '2px', padding: '28px 22px',
              textAlign: 'left'
            }}>
              <div style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '32px', fontWeight: 300,
                color: 'rgba(200,169,110,0.22)', lineHeight: 1,
                marginBottom: '12px'
              }}>{v.num}</div>
              <div style={{
                fontSize: '14px', fontWeight: 600,
                color: 'var(--white)', marginBottom: '8px'
              }}>{v.title}</div>
              <div style={{
                fontSize: '13px', fontWeight: 300,
                color: 'var(--dim)', lineHeight: 1.6
              }}>{v.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
