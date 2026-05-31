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
          Drift creates exposure.
        </h2>
        <p className="fade-up" style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(18px, 2.5vw, 26px)',
          fontStyle: 'italic', color: 'var(--accent)',
          marginBottom: '36px'
        }}>
          Your digital life has been accumulating for years with zero maintenance.
        </p>
        <div className="fade-up" style={{
          fontSize: 'clamp(15px, 1.8vw, 17px)', fontWeight: 300,
          color: 'var(--dim)', lineHeight: 1.8
        }}>
          <p style={{ marginBottom: '16px' }}>
            Accounts you forgot exist. Passwords reused across a dozen services.
            Recovery chains nobody has ever tested. Permissions granted to apps
            you stopped using years ago.
          </p>
          <p>
            Data brokers selling your name, address, and phone number right now.
            This is not a technical failure. It is a governance failure.
            And it is completely fixable.
          </p>
        </div>

        {/* Three vectors */}
        <div className="fade-up" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px', marginTop: '56px'
        }}>
          {[
            { num: '01', title: 'Credential Reuse', body: 'One leaked password tried across every account you own. It works because it\'s the same password.' },
            { num: '02', title: 'Data Broker Exposure', body: 'Your name, address, relatives, and phone number are being sold right now to anyone who pays.' },
            { num: '03', title: 'Recovery Chain Hijack', body: 'Someone gets into your email. Everything else falls — because everything recovers through it.' }
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
