import React, { useState, useEffect } from 'react'

export default function Nav({ onGetCourse }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 60px', height: '68px',
      background: scrolled ? 'rgba(13,27,42,0.97)' : 'rgba(13,27,42,0.85)',
      backdropFilter: 'blur(16px)',
      borderBottom: scrolled ? '1px solid rgba(200,169,110,0.15)' : '1px solid transparent',
      transition: 'all 0.3s ease'
    }}>
      {/* Logo */}
      <a href="/" style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: '22px', fontWeight: 600,
        color: 'var(--white)', textDecoration: 'none',
        letterSpacing: '0.5px', display: 'flex', alignItems: 'center', gap: '8px'
      }}>
        Freedom<span style={{ color: 'var(--accent)' }}>Engine</span>
      </a>

      {/* Desktop links */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}
           className="nav-desktop">
        <a href="#course" style={{
          fontSize: '13px', fontWeight: 400, color: 'var(--dim)',
          textDecoration: 'none', letterSpacing: '0.4px', transition: 'color 0.2s'
        }}
        onMouseEnter={e => e.target.style.color = 'var(--white)'}
        onMouseLeave={e => e.target.style.color = 'var(--dim)'}>
          The Course
        </a>
        <a href="#app" style={{
          fontSize: '13px', fontWeight: 400, color: 'var(--dim)',
          textDecoration: 'none', letterSpacing: '0.4px', transition: 'color 0.2s'
        }}
        onMouseEnter={e => e.target.style.color = 'var(--white)'}
        onMouseLeave={e => e.target.style.color = 'var(--dim)'}>
          Digital Guardian
        </a>
        <a href="https://app.freedomengine.ca" target="_blank" rel="noreferrer" style={{
          fontSize: '13px', fontWeight: 400, color: 'var(--dim)',
          textDecoration: 'none', letterSpacing: '0.4px', transition: 'color 0.2s'
        }}
        onMouseEnter={e => e.target.style.color = 'var(--white)'}
        onMouseLeave={e => e.target.style.color = 'var(--dim)'}>
          Sign In
        </a>
        <button className="btn-primary" onClick={onGetCourse}
          style={{ padding: '9px 22px', fontSize: '13px' }}>
          Get Started — $30
        </button>
      </div>

    </nav>
  )
}
