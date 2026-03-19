import React, { useEffect, useRef } from 'react'
import useReveal from '../hooks/useReveal'
import styles from './Services.module.css'

const SERVICES = [
  {
    num: '01',
    title: 'Mechanical & HVAC Systems',
    badge: 'Core Service',
    desc: 'Air conditioning, ventilation and refrigeration for all building types — from a single split unit in a small office to a full VRF/VRV system across a Grade A tower. We also handle cold rooms, pump systems, and full plant room design and commissioning.',
    tags: ['Split & Multi-Split AC', 'VRF / VRV Systems', 'Ducted HVAC', 'Cold Rooms', 'Refrigeration', 'Ventilation', 'Pumps & Motors', 'BMS Controls', 'Plant Rooms'],
  },
  {
    num: '02',
    title: 'LV Electrical Systems',
    badge: 'Core Service',
    desc: 'Full low-voltage design and installation compliant with Kenyan wiring regulations and EPRA requirements. We handle distribution boards, MCCs, earthing and protection, generator and UPS integration, and power quality improvements for commercial and industrial clients.',
    tags: ['DB & MCC Design', 'Earthing Systems', 'Protection Relays', 'Generator Integration', 'UPS Systems', 'Power Quality', 'Cable Management', 'EPRA Compliance'],
  },
  {
    num: '03',
    title: 'Solar PV & Backup Power',
    badge: 'High Demand',
    desc: 'Grid-tied, off-grid and hybrid solar PV from 2 kWp domestic installations to 100 kWp+ commercial and industrial systems. We include battery storage, solar water heating, solar water pumping, and remote monitoring dashboards with documented bill savings.',
    tags: ['Grid-Tied PV', 'Hybrid Inverters', 'Battery Storage', 'Solar Thermal', 'Solar Pumping', 'Remote Monitoring', 'Load Analysis', 'KPLC Net-Metering'],
  },
  {
    num: '04',
    title: 'IT/OT & Security Systems',
    badge: 'Integrated Add-on',
    desc: 'Structured cabling, LAN/Wi-Fi design and installation, firewalls, IP-CCTV, access control, time-attendance, and OT network design for factories and utilities. We also harden building and plant systems against cybersecurity threats.',
    tags: ['Structured Cabling', 'LAN / Wi-Fi', 'Firewalls', 'IP-CCTV', 'Access Control', 'OT Networks', 'Cybersecurity', 'PLC/SCADA'],
  },
  {
    num: '05',
    title: 'Energy Efficiency & Management',
    badge: 'Savings-Focused',
    desc: 'EPRA-compliant energy audits, tariff analysis, BEMS deployment, LED and motor retrofits, VSD installations and real-time monitoring dashboards. Every engagement includes a documented savings projection in KES and post-implementation metering to verify results.',
    tags: ['Energy Audits', 'BEMS Deployment', 'LED Retrofits', 'Motor VSDs', 'Sub-metering', 'IoT Sensors', 'Dashboard Reports', 'Tariff Analysis'],
  },
  {
    num: '06',
    title: 'Water Management Systems',
    badge: 'Integrated Service',
    desc: 'Borehole and booster pump design, installation and servicing, storage tanks and towers, water treatment and filtration, smart metering, level monitoring and leak detection. We also support NRW reduction programs for estates, institutions and small utilities.',
    tags: ['Boreholes', 'Booster Pumps', 'Storage Tanks', 'Water Treatment', 'Smart Meters', 'Leak Detection', 'Level Monitoring', 'NRW Reduction'],
  },
]

export default function Services({ openService, setOpenService }) {
  const [headerRef, headerVisible] = useReveal()
  const [accRef, accVisible] = useReveal(0.05, 150)
  const itemRefs = useRef({})

  // When openService changes (triggered from Hero), scroll that item into view
  useEffect(() => {
    if (!openService) return
    const timer = setTimeout(() => {
      const el = itemRefs.current[openService]
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 88
        window.scrollTo({ top, behavior: 'smooth' })
      }
    }, 500)
    return () => clearTimeout(timer)
  }, [openService])

  const toggle = (num) => setOpenService(openService === num ? null : num)

  return (
    <section id="services" className={styles.services}>
      <div className="section-inner">
        <div className={`reveal ${headerVisible ? 'visible' : ''}`} ref={headerRef}>
          <div className={styles.header}>
            <div>
              <div className="label-row">
                <div className="label-line" />
                <span className="label-text">Services</span>
              </div>
              <h2 className="section-h">
                What We <em>Deliver</em>
              </h2>
            </div>
            <p>
              We cover the full building engineering stack — from the generator room to the
              server rack, from the rooftop solar array to the borehole pump. Click any
              service to see details.
            </p>
          </div>
        </div>

        <div
          ref={accRef}
          className={`${styles.accordion} reveal ${accVisible ? 'visible' : ''}`}
        >
          {SERVICES.map((s) => {
            const isOpen = openService === s.num
            return (
              <div
                key={s.num}
                className={`${styles.accItem} ${isOpen ? styles.accItemHighlight : ''}`}
                ref={(el) => { itemRefs.current[s.num] = el }}
              >
                <div
                  className={`${styles.accHeader} ${isOpen ? styles.accHeaderOpen : ''}`}
                  onClick={() => toggle(s.num)}
                >
                  <div className={styles.accNum}>{s.num}</div>
                  <div className={styles.accTitle}>{s.title}</div>
                  <div className={styles.accBadge}>{s.badge}</div>
                  <div className={`${styles.accArrow} ${isOpen ? styles.accArrowOpen : ''}`}>▾</div>
                </div>

                <div className={`${styles.accBody} ${isOpen ? styles.accBodyOpen : ''}`}>
                  <div className={styles.accBodyInner}>
                    <p className={styles.accDesc}>{s.desc}</p>
                    <div className={styles.accTags}>
                      {s.tags.map((t) => (
                        <span key={t} className={styles.tag}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
