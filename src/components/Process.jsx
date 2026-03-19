import React from 'react'
import useReveal from '../hooks/useReveal'
import styles from './Process.module.css'

const STEPS = [
  {
    num: '01',
    title: 'Site Assessment',
    desc: 'We visit, survey and document your existing systems, loads and constraints. Everything is measured — nothing is assumed.',
  },
  {
    num: '02',
    title: 'Integrated Design & BOQ',
    desc: 'MEP, solar, IT/OT and water designed together. You receive coordinated drawings, a detailed BOQ and a clear KES price.',
  },
  {
    num: '03',
    title: 'Phased Installation',
    desc: 'We execute in phases to minimise your downtime. Night and weekend work for critical changeovers. Formal HSE procedures on every site.',
  },
  {
    num: '04',
    title: 'Commissioning & Handover',
    desc: 'Full testing, commissioning, staff training, as-built drawings and O&M manuals. We don\'t leave until everything works as designed.',
  },
  {
    num: '05',
    title: 'Ongoing O&M Partnership',
    desc: 'Maintenance contracts covering all your systems. One SLA, one team, periodic performance reports and a roadmap for future upgrades.',
  },
]

const ENTRY_OFFERS = [
  '🔍 Combined Site Health Check',
  '⚡ DB Tidy-Up + AC Service Day',
  '☀️ Starter Solar Backup Kit',
  '📡 Wi-Fi + CCTV Quick Package',
  '🚨 24hr Emergency Call-Out',
]

export default function Process() {
  const [titleRef, titleVisible] = useReveal()
  const [timelineRef, timelineVisible] = useReveal(0.05, 100)
  const [cardRef, cardVisible] = useReveal(0.05, 200)

  return (
    <section id="process" className={styles.process}>
      <div className="section-inner">
        <div
          ref={titleRef}
          className={`reveal ${titleVisible ? 'visible' : ''}`}
        >
          <div className="label-row" style={{ '--label-line-bg': 'rgba(255,255,255,0.3)', '--label-text-color': 'rgba(255,255,255,0.5)' }}>
            <div className={styles.labelLine} />
            <span className={styles.labelText}>How We Work</span>
          </div>
          <h2 className={styles.heading}>
            Our <em>Process</em>
          </h2>
        </div>

        <div className={styles.grid}>
          {/* Timeline */}
          <div
            ref={timelineRef}
            className={`${styles.timeline} reveal ${timelineVisible ? 'visible' : ''}`}
          >
            {STEPS.map((step) => (
              <div key={step.num} className={styles.step}>
                <div className={styles.dot}>{step.num}</div>
                <div className={styles.stepContent}>
                  <div className={styles.stepTitle}>{step.title}</div>
                  <p className={styles.stepDesc}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Entry offers card */}
          <div
            ref={cardRef}
            className={`${styles.entryCard} reveal ${cardVisible ? 'visible' : ''}`}
          >
            <div className={styles.entryLabel}>Entry Offers</div>
            <h3 className={styles.entryHeading}>
              Start Small. <em>Grow Fast.</em>
            </h3>
            <p className={styles.entryBody}>
              Not ready for a full project? Our entry offers let you test us with a small,
              fast job before committing to larger works.
            </p>
            <ul className={styles.entryList}>
              {ENTRY_OFFERS.map((offer) => (
                <li key={offer} className={styles.entryItem}>{offer}</li>
              ))}
            </ul>
            <a href="#quote" className={styles.entryBtn}>
              Book an Entry Offer
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
