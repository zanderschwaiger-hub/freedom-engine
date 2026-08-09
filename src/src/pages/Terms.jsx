import React from 'react'

const style = {
  page: { minHeight: '100vh', background: 'var(--navy)', color: 'var(--white)', padding: 'clamp(60px, 10vw, 120px) clamp(24px, 8vw, 100px)' },
  inner: { maxWidth: '680px', margin: '0 auto' },
  tag: { fontFamily: "'DM Mono', monospace", fontSize: '10px', letterSpacing: '3px', color: 'var(--accent)', textTransform: 'uppercase', display: 'block', marginBottom: '16px' },
  h1: { fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 600, lineHeight: 1.05, marginBottom: '8px' },
  meta: { fontSize: '13px', color: 'rgba(15,23,42,0.35)', marginBottom: '52px', fontFamily: "'DM Mono', monospace" },
  h2: { fontFamily: "'Cormorant Garamond', serif", fontSize: '22px', fontWeight: 600, color: 'var(--white)', marginBottom: '10px', marginTop: '40px' },
  p: { fontSize: '15px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.8, marginBottom: '12px' },
  ul: { fontSize: '15px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.8, paddingLeft: '20px', marginBottom: '12px' },
  back: { fontFamily: "'DM Mono', monospace", fontSize: '11px', letterSpacing: '2px', color: 'var(--accent)', textTransform: 'uppercase', textDecoration: 'none', display: 'inline-block', marginBottom: '40px' }
}

export default function Terms() {
  return (
    <div style={style.page}>
      <div style={style.inner}>
        <a href="/" style={style.back}>← Freedom Engine</a>
        <span style={style.tag}>Legal</span>
        <h1 style={style.h1}>Terms of Service</h1>
        <p style={style.meta}>Last updated: June 2025 · Digital Guardian / Freedom Engine</p>
        <h2 style={style.h2}>Agreement</h2>
        <p style={style.p}>By using Digital Guardian and Freedom Engine you agree to these terms. If you do not agree, do not use the service.</p>
        <h2 style={style.h2}>What the service is</h2>
        <p style={style.p}>Digital Guardian is a personal digital safety platform. It provides guidance, task tracking, health scoring, and educational resources to help you manage your digital life. It is not a cybersecurity firm, a managed security service, or a legal or financial advisor. We guide. You act.</p>
        <h2 style={style.h2}>What the service is not</h2>
        <ul style={style.ul}>
          <li>We do not guarantee that following our guidance will prevent all security incidents</li>
          <li>We do not access, modify, or manage your accounts on your behalf</li>
          <li>We do not provide legal, financial, or professional security advice</li>
          <li>We are not responsible for decisions you make based on information provided in the app</li>
        </ul>
        <h2 style={style.h2}>Subscription and billing</h2>
        <p style={style.p}>Digital Guardian is a monthly subscription at CA$13.99/month. A 7-day free trial is available for new subscribers — your card is required upfront but will not be charged until the trial ends. You can cancel at any time before the trial ends to avoid being charged. Cancellations take effect at the end of the current billing period. No refunds are provided for partial months.</p>
        <h2 style={style.h2}>Your account</h2>
        <p style={style.p}>You are responsible for maintaining the security of your account. You must use the same email address to sign in to Freedom Engine as you used to subscribe. Magic link authentication means there is no password — keep access to your email secure.</p>
        <h2 style={style.h2}>Acceptable use</h2>
        <p style={style.p}>You may use Freedom Engine for your personal digital safety and for the digital safety of a business you operate. You may not use it to monitor or access accounts belonging to other people without their explicit consent.</p>
        <h2 style={style.h2}>Limitation of liability</h2>
        <p style={style.p}>Freedom Engine is provided as-is. To the maximum extent permitted by law, we are not liable for any damages arising from your use of the service, including but not limited to data loss, account compromise, or financial loss.</p>
        <h2 style={style.h2}>Changes to these terms</h2>
        <p style={style.p}>We may update these terms from time to time. We will notify you of significant changes via the email address on your account. Continued use of the service after changes constitutes acceptance.</p>
        <h2 style={style.h2}>Contact</h2>
        <p style={style.p}>Questions about these terms? Contact us through the Freedom Engine website.</p>
      </div>
    </div>
  )
}
