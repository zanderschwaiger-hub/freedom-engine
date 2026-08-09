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

export default function Privacy() {
  return (
    <div style={style.page}>
      <div style={style.inner}>
        <a href="/" style={style.back}>← Freedom Engine</a>
        <span style={style.tag}>Legal</span>
        <h1 style={style.h1}>Privacy Policy</h1>
        <p style={style.meta}>Last updated: June 2025 · Digital Guardian / Freedom Engine</p>

        <h2 style={style.h2}>Who we are</h2>
        <p style={style.p}>Digital Guardian is a digital safety platform powered by Freedom Engine. We help individuals and online earners clean up their digital life, reduce exposure, and build sustainable safety practices.</p>

        <h2 style={style.h2}>What we collect</h2>
        <p style={style.p}>We collect only what is necessary to provide the service:</p>
        <ul style={style.ul}>
          <li>Your email address — used for authentication and subscription management</li>
          <li>Account type preference — personal, creator, or business — selected during onboarding</li>
          <li>Account and inventory information you choose to add</li>
          <li>Task completion and progress data to track your action plan and health score</li>
          <li>Subscription status managed via Stripe</li>
        </ul>

        <h2 style={style.h2}>What we do not collect</h2>
        <ul style={style.ul}>
          <li>We do not collect your passwords</li>
          <li>We do not access your accounts on your behalf</li>
          <li>We do not sell your personal information to third parties</li>
          <li>We do not run background monitoring without your knowledge</li>
          <li>We do not use your data for advertising</li>
        </ul>

        <h2 style={style.h2}>How we use your data</h2>
        <p style={style.p}>Your data is used exclusively to provide the Freedom Engine service — to build your action plan, calculate your health score, track your progress, and deliver breach alerts you have opted into.</p>

        <h2 style={style.h2}>Data storage and security</h2>
        <p style={style.p}>Your data is stored securely using Supabase, a SOC 2 compliant cloud database provider. All data is encrypted in transit and at rest. Authentication is handled via magic link — we never store or see your password because there is no password.</p>

        <h2 style={style.h2}>Payments</h2>
        <p style={style.p}>Payments are processed by Stripe. We do not store your card details. Stripe's privacy policy governs how your payment information is handled.</p>

        <h2 style={style.h2}>Your rights</h2>
        <p style={style.p}>You can request deletion of your account and all associated data at any time. You can cancel your subscription at any time from your account settings.</p>

        <h2 style={style.h2}>Contact</h2>
        <p style={style.p}>Questions about this policy? Contact us through the Freedom Engine website.</p>
      </div>
    </div>
  )
}
