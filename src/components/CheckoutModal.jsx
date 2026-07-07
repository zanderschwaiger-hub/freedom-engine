import React, { useState } from 'react'

// Once you create a Stripe Payment Link, paste it here
// Stripe Dashboard → Payment Links → + New → Add "The Digital Clean-Up" $30 → Copy link
const PAYMENT_LINK = 'https://buy.stripe.com/cNibJ363x1Zm243aefb7y02'

export default function CheckoutModal({ isOpen, onClose }) {
  if (!isOpen) return null

  const handleCheckout = () => {
    window.open(PAYMENT_LINK, '_blank')
    onClose()
  }

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 1000,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '24px'
    }}>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'absolute', inset: 0,
          background: 'rgba(13,27,42,0.92)',
          backdropFilter: 'blur(8px)'
        }}
      />

      {/* Modal */}
      <div style={{
        position: 'relative', zIndex: 1,
        background: 'var(--navy-mid)',
        border: '1px solid rgba(200,169,110,0.2)',
        borderRadius: '2px',
        padding: 'clamp(32px, 5vw, 56px)',
        maxWidth: '480px', width: '100%',
        animation: 'fadeUp 0.35s ease both'
      }}>
        {/* Close */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute', top: '20px', right: '20px',
            background: 'none', border: 'none',
            color: 'var(--dim)', fontSize: '20px',
            cursor: 'pointer', lineHeight: 1,
            transition: 'color 0.2s'
          }}
          onMouseEnter={e => e.target.style.color = 'var(--white)'}
          onMouseLeave={e => e.target.style.color = 'var(--dim)'}>
          ×
        </button>

        <span style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: '10px', letterSpacing: '3px',
          color: 'var(--accent)', textTransform: 'uppercase',
          display: 'block', marginBottom: '16px'
        }}>The Digital Clean-Up</span>

        <h3 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(28px, 4vw, 40px)',
          fontWeight: 600, lineHeight: 1.1,
          marginBottom: '20px'
        }}>
          One day.<br />
          <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Five fixes.</em>
        </h3>

        {/* What you get */}
        <div style={{ marginBottom: '28px' }}>
          {[
            'Five step-by-step modules',
            'Completable in 90 minutes',
            'Specific tools for every fix',
            'Downloadable course workbook',
            'Yours forever — one-time access'
          ].map((item, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: '10px',
              marginBottom: '10px'
            }}>
              <div style={{
                width: '16px', height: '16px', borderRadius: '50%',
                background: 'rgba(39,174,110,0.12)',
                border: '1px solid rgba(39,174,110,0.25)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0
              }}>
                <span style={{ fontSize: '9px', color: 'var(--green)' }}>✓</span>
              </div>
              <span style={{
                fontSize: '14px', fontWeight: 300, color: 'var(--dim)'
              }}>{item}</span>
            </div>
          ))}
        </div>

        {/* Price */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '16px',
          padding: '16px 20px',
          background: 'rgba(200,169,110,0.07)',
          border: '1px solid rgba(200,169,110,0.18)',
          borderRadius: '2px', marginBottom: '24px'
        }}>
          <span style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '48px', fontWeight: 600,
            color: 'var(--accent)', lineHeight: 1
          }}>$30</span>
          <span style={{
            fontSize: '14px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.5
          }}>One-time payment.<br />Immediate access.</span>
        </div>

        <button className="btn-primary" onClick={handleCheckout}
          style={{ width: '100%', fontSize: '16px', padding: '18px', justifyContent: 'center' }}>
          Continue to Checkout →
        </button>

        <p style={{
          textAlign: 'center', marginTop: '16px',
          fontFamily: "'DM Mono', monospace",
          fontSize: '10px', letterSpacing: '2px',
          color: 'rgba(200,169,110,0.3)', textTransform: 'uppercase'
        }}>
          Secured by Stripe
        </p>
      </div>

    </div>
  )
}
