import React from 'react'
import Logo from './Logo'
import styles from './Footer.module.css'

const SERVICES = [
  'Mechanical & HVAC',
  'LV Electrical',
  'Solar PV & Backup',
  'IT/OT & Security',
  'Energy Management',
  'Water Systems',
]

const SECTORS = [
  'Commercial',
  'Industrial',
  'Institutional',
  'Hospitality',
  'Residential',
  'Developers & FM',
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <Logo variant="dark" width={160} showTag={true} />
          <p>
            Integrated engineering for buildings, estates, factories and institutions
            across Kenya. One contractor for every system.
          </p>
        </div>

        <div className={styles.col}>
          <h5>Services</h5>
          <ul>
            {SERVICES.map((s) => (
              <li key={s}><a href="#services">{s}</a></li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <h5>Sectors</h5>
          <ul>
            {SECTORS.map((s) => (
              <li key={s}><a href="#clients">{s}</a></li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <h5>Contact</h5>
          <ul>
            <li><a href="#quote">Request a Quote</a></li>
            <li><a href="tel:+254706318757">+254 706 318 757</a></li>
            <li><a href="mailto:info@links-evo.co.ke">info@links-evo.co.ke</a></li>
            <li><a href="#quote">Emergency Call-Out</a></li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© 2025 Links-Evo Engineering Ltd · Nairobi, Kenya</p>
        <p>Licensed <span>EPRA · EBK/IEK · NCA</span></p>
      </div>
    </footer>
  )
}
