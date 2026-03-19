import React from 'react'
import Logo from './Logo'
import styles from './Nav.module.css'

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <a href="#" className={styles.logoLink} aria-label="Links-Evo Engineering home">
        <Logo variant="light" width={180} showTag={true} />
      </a>

      <ul className={styles.navLinks}>
        <li><a href="#approach">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#clients">Clients</a></li>
        <li><a href="#process">Process</a></li>
        <li><a href="#quote">Contact</a></li>
      </ul>

      <a href="#quote" className={styles.navCta}>Request a Quote</a>
    </nav>
  )
}
