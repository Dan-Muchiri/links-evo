import React from 'react'
import useReveal from '../hooks/useReveal'
import styles from './Approach.module.css'

const HIGHLIGHTS = [
  {
    num: '01',
    title: 'Integrated Design',
    sub: 'M, E & Solar designed together — no clashes, correct sizing for your actual loads.',
  },
  {
    num: '02',
    title: 'Single Contract',
    sub: 'One BOQ, one point of accountability. You call one number. We coordinate all the trades.',
  },
  {
    num: '03',
    title: 'Code-Compliant Delivery',
    sub: 'EPRA-licensed electrical works, EBK-registered engineers, NCA-compliant procedures and full as-built documentation.',
  },
  {
    num: '04',
    title: 'Long-Term Partnership',
    sub: 'After handover we become your outsourced engineering team — maintenance contracts, energy audits, upgrades and emergency response.',
  },
  {
    num: '05',
    title: 'Documented Savings',
    sub: 'Every efficiency project comes with before/after metering data. You see your kWh reduction and KES savings in writing.',
  },
]

export default function Approach() {
  const [leftRef, leftVisible] = useReveal()
  const [rightRef, rightVisible] = useReveal(0.1, 150)

  return (
    <section id="approach" className={styles.approach}>
      <div className="section-inner">
        <div
          ref={leftRef}
          className={`reveal ${leftVisible ? 'visible' : ''}`}
        >
          <div className="label-row">
            <div className="label-line" />
            <span className="label-text">Our Approach</span>
          </div>
          <h2 className="section-h">
            One Partner.<br /><em>No Gaps.</em>
          </h2>
        </div>

        <div className={styles.grid}>
          <div
            ref={rightRef}
            className={`${styles.left} reveal ${leftVisible ? 'visible' : ''}`}
          >
            <p>
              Most building owners deal with three, four, sometimes five separate contractors
              who don't talk to each other. Coordination failures cause delays, cost overruns,
              and systems that don't work properly together.
            </p>
            <p>
              Links-Evo was built to solve that. We integrate mechanical, electrical, solar,
              IT/OT and water under one scope — one design, one BOQ, one site supervisor,
              one warranty.
            </p>
            <a href="#quote" className="btn-fill" style={{ marginTop: '24px' }}>
              Start a Conversation
            </a>
          </div>

          <div className={`${styles.right} reveal ${rightVisible ? 'visible' : ''}`}>
            <div className={styles.highlights}>
              {HIGHLIGHTS.map((h) => (
                <div key={h.num} className={styles.highlightRow}>
                  <div className={styles.highlightNum}>{h.num}</div>
                  <div className={styles.highlightContent}>
                    <div className={styles.highlightTitle}>{h.title}</div>
                    <div className={styles.highlightSub}>{h.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
