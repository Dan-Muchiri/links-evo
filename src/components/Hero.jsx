import React, { useEffect, useRef } from 'react'
import Logo from './Logo'
import styles from './Hero.module.css'

const SERVICES = [
  { num: '01', icon: '⚙️', name: 'Mechanical & HVAC Systems' },
  { num: '02', icon: '⚡', name: 'LV Electrical & Distribution' },
  { num: '03', icon: '☀️', name: 'Solar PV & Backup Power' },
  { num: '04', icon: '🔒', name: 'IT/OT & Security Systems' },
  { num: '05', icon: '📊', name: 'Energy Efficiency & Management' },
  { num: '06', icon: '💧', name: 'Water Management Systems' },
]

const STATS = [
  { num: '6+', label: 'Engineering Disciplines' },
  { num: '1×', label: 'Contractor for All Systems' },
  { num: '7+', label: 'Client Sectors Served' },
  { num: '24/7', label: 'Emergency Response' },
]

export default function Hero({ onServiceClick }) {
  const underlineRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (underlineRef.current) {
        underlineRef.current.style.transform = 'scaleX(1)'
      }
    }, 1200)
    return () => clearTimeout(timer)
  }, [])

  const handleServiceClick = (num) => {
    onServiceClick(num)
    setTimeout(() => {
      const target = document.getElementById('services')
      if (target) {
        const top = target.getBoundingClientRect().top + window.scrollY - 72
        window.scrollTo({ top, behavior: 'smooth' })
      }
    }, 50)
  }

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.heroMain}>

        {/* Left column */}
        <div className={styles.heroLeft}>

          {/* Logo — sits above the eyebrow, fades in first */}
          <div className={styles.heroLogo}>
            <Logo variant="light" width={160} showTag={true} />
          </div>

          {/* Divider between logo and eyebrow */}
          <div className={styles.logoDivider} />

          <div className={styles.eyebrow}>
            <div className={styles.eyebrowLine} />
            <span className={styles.eyebrowText}>Nairobi, Kenya · Integrated Engineering</span>
          </div>

          <h1 className={styles.h1}>
            Engineering<br />
            <em>Every</em><br />
            <span className={styles.underlineWord} ref={underlineRef}>System.</span>
          </h1>

          <p className={styles.sub}>
            Mechanical, electrical, solar, IT/OT and water systems — delivered under one
            contract, by one team, with full accountability from design to handover.
          </p>

          <div className={styles.ctas}>
            <a href="#quote" className="btn-fill">Request a Quote</a>
            <a href="#services" className={styles.btnGhost}>View Services →</a>
          </div>
        </div>

        {/* Right column — services list */}
        <div className={styles.heroRight}>
          <div className={styles.rightLabel}>Our Six Disciplines</div>
          <ul className={styles.svcList}>
            {SERVICES.map((s) => (
              <li
                key={s.num}
                className={styles.svcRow}
                onClick={() => handleServiceClick(s.num)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && handleServiceClick(s.num)}
                aria-label={`View ${s.name} details`}
              >
                <span className={styles.svcNum}>{s.num}</span>
                <span className={styles.svcIcon}>{s.icon}</span>
                <span className={styles.svcName}>{s.name}</span>
                <span className={styles.svcArrow}>→</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Stats bar */}
      <div className={styles.statsBar}>
        {STATS.map((s) => (
          <div key={s.label} className={styles.stat}>
            <div className={styles.statNum}>{s.num}</div>
            <div className={styles.statLabel}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
