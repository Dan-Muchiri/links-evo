import React, { useState } from 'react'
import useReveal from '../hooks/useReveal'
import styles from './Clients.module.css'

const SECTORS = [
  {
    id: 'residential',
    label: 'Residential',
    cards: [
      { icon: '🏠', title: 'Individual Homes', text: 'Safe wiring, basic HVAC, solar PV and backup, solar water heating, booster pumps, Wi-Fi, CCTV, smart security and LED upgrades for homeowners.' },
      { icon: '🏘️', title: 'Gated Communities & Estates', text: 'Shared infrastructure: booster pumps, common area lighting, security, CCTV, gate access control, water-level monitoring and estate-wide energy efficiency.' },
      { icon: '🏗️', title: 'Apartment Blocks', text: 'DB upgrades, earthing, solar for common areas and backup, booster pumps, CCTV and building-wide metering and leak detection.' },
      { icon: '🌱', title: 'Borehole & Water Users', text: 'Efficient pumps, storage tanks, simple treatment, leak detection and smart meters to reduce water and energy wastage for residential water schemes.' },
    ],
  },
  {
    id: 'commercial',
    label: 'Commercial Buildings',
    cards: [
      { icon: '🏢', title: 'Grade A/B Offices', text: 'Integrated power, HVAC, solar/backup, structured cabling, CCTV and energy-management systems for professional office environments of any scale.' },
      { icon: '🏬', title: 'Malls & Business Parks', text: 'Mixed-use developments needing coordinated MEP, solar, IT/OT security and estate-wide energy and water efficiency across shared and tenanted spaces.' },
      { icon: '⛪', title: 'Churches & Faith Centres', text: 'Combined MEP + solar, IT/OT networks, streaming-ready connectivity, CCTV, and energy and water-saving retrofits for large faith-based facilities.' },
      { icon: '🏨', title: 'Hotels & Conference Centres', text: 'HVAC, hot water, pool systems and solar to cut diesel and grid costs. Guest Wi-Fi, IPTV, CCTV and building-level energy management for hospitality operations.' },
    ],
  },
  {
    id: 'industrial',
    label: 'Industrial & Agro',
    cards: [
      { icon: '🏭', title: 'Factories & Manufacturers', text: 'Motor, pump, HVAC and refrigeration systems, plus OT networks (PLC/SCADA), CCTV, secure remote access and formal energy management for production facilities.' },
      { icon: '❄️', title: 'Cold Chain & Food Processing', text: 'Packhouses, cold stores, flour mills and beverage producers — integrated electrical, mechanical and solar solutions with OT cybersecurity hardening.' },
      { icon: '💧', title: 'Water Bottling Plants', text: 'Integrated electrical, mechanical and solar, process and quality monitoring, OT cybersecurity and optimised water abstraction, treatment and storage.' },
      { icon: '🌾', title: 'Agro-Processing Facilities', text: 'Energy-intensive processing operations needing reliable power, solar, efficient motor and pump systems, and process reliability across any location.' },
    ],
  },
  {
    id: 'institutional',
    label: 'Institutions',
    cards: [
      { icon: '🏥', title: 'Hospitals & Clinics', text: 'Reliable power, HVAC, hot water, critical-load backup and solar, secure IT networks for HIS/LIS, IP-CCTV and energy and water audits to cut utility costs.' },
      { icon: '🎓', title: 'Schools & Universities', text: 'Safe power, ventilation and solar for bills and outages, campus Wi-Fi and CCTV, access control for hostels and libraries, plus energy-efficiency programs.' },
      { icon: '🔬', title: 'TVETs & Research Labs', text: 'Specialised lab power, ventilation, IT/OT connectivity and energy monitoring tailored to technical, vocational and scientific environments.' },
      { icon: '🌍', title: 'NGOs & Public Facilities', text: 'MEP and solar improving service reliability, secure networks, CCTV and OT monitoring for boreholes and treatment plants, plus structured energy-efficiency programs.' },
    ],
  },
  {
    id: 'developer',
    label: 'Developers & FM',
    cards: [
      { icon: '📐', title: 'Real-Estate Developers', text: 'Single partner during construction delivering coordinated MEP, solar, IT/OT, energy-efficiency features and water-management infrastructure across any project type.' },
      { icon: '🔧', title: 'FM Companies', text: 'Bundled service contracts across MEP, solar, IT/OT security, building energy management and water assets for multi-site property portfolios.' },
      { icon: '📋', title: 'MEP Consultants', text: 'Trusted implementation subcontractor for MEP consultants and main contractors who need a reliable integrated M+E+Solar delivery partner.' },
      { icon: '💼', title: 'Property Funds & REITs', text: 'Asset-level energy and water audits, upgrade roadmaps and O&M contracts for investment-grade property portfolios at any scale.' },
    ],
  },
]

export default function Clients() {
  const [active, setActive] = useState('residential')
  const [stickyRef, stickyVisible] = useReveal()
  const [panelRef, panelVisible] = useReveal(0.05, 150)

  const current = SECTORS.find((s) => s.id === active)

  return (
    <section id="clients" className={styles.clients}>
      <div className="section-inner">
        <div className="label-row">
          <div className="label-line" />
          <span className="label-text">Who We Serve</span>
        </div>
        <h2 className={`section-h ${styles.heading}`}>
          Our <em>Clients</em>
        </h2>

        <div className={styles.split}>
          {/* Sticky left nav */}
          <div
            ref={stickyRef}
            className={`${styles.sticky} reveal ${stickyVisible ? 'visible' : ''}`}
          >
            <p className={styles.intro}>
              We work with homeowners, facility managers, factory engineers, developers
              and institutions — delivering the same disciplined engineering process
              regardless of project size or location.
            </p>
            <nav className={styles.sectorNav}>
              {SECTORS.map((s) => (
                <button
                  key={s.id}
                  className={`${styles.sectorBtn} ${active === s.id ? styles.sectorBtnActive : ''}`}
                  onClick={() => setActive(s.id)}
                >
                  {s.label}
                  <span>→</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Right panel grid */}
          <div
            ref={panelRef}
            className={`${styles.panel} reveal ${panelVisible ? 'visible' : ''}`}
          >
            <div className={styles.cardGrid}>
              {current.cards.map((c) => (
                <div key={c.title} className={styles.card}>
                  <div className={styles.cardIcon}>{c.icon}</div>
                  <div className={styles.cardTitle}>{c.title}</div>
                  <p className={styles.cardText}>{c.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
