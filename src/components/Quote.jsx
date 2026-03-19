import React, { useState } from 'react'
import useReveal from '../hooks/useReveal'
import styles from './Quote.module.css'

const CONTACT = [
  { icon: '📞', label: 'Phone', value: '+254 700 000 000' },
  { icon: '💬', label: 'WhatsApp', value: '+254 700 000 000' },
  { icon: '📧', label: 'Email', value: 'info@links-evo.co.ke' },
  { icon: '📍', label: 'Location', value: 'Nairobi, Kenya' },
]

const CLIENT_TYPES = [
  'Residential / Home',
  'Commercial Building',
  'School / Hospital / Church',
  'Industrial / Factory',
  'Hotel / Hospitality',
  'Developer / FM Company',
  'Public Sector / NGO',
  'Other / Not Sure',
]

const SERVICES = [
  'Mechanical / HVAC',
  'LV Electrical',
  'Solar PV & Backup',
  'IT/OT & Security',
  'Energy Efficiency',
  'Water Systems',
  'Full MEP Bundle',
  'Other / Not Sure',
]

export default function Quote() {
  const [status, setStatus] = useState('idle') // idle | sending | sent
  const [leftRef, leftVisible] = useReveal()
  const [rightRef, rightVisible] = useReveal(0.05, 150)

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    // Replace with your real form submission logic (e.g. EmailJS / Formspree / API)
    setTimeout(() => {
      setStatus('sent')
      setTimeout(() => {
        setStatus('idle')
        e.target.reset()
      }, 3000)
    }, 1200)
  }

  const btnLabel = {
    idle: 'Send Request →',
    sending: 'Sending…',
    sent: '✓ Request Received',
  }[status]

  return (
    <section id="quote" className={styles.quote}>
      <div className="section-inner">
        <div className={styles.layout}>
          {/* Left */}
          <div
            ref={leftRef}
            className={`reveal ${leftVisible ? 'visible' : ''}`}
          >
            <div className="label-row">
              <div className="label-line" />
              <span className="label-text">Get a Quote</span>
            </div>
            <h2 className={styles.heading}>
              Tell Us About<br /><em>Your Site</em>
            </h2>
            <p className={styles.sub}>
              We'll respond with a clear scope and KES price within 24 hours.
              No obligation, no fluff — just a straightforward engineering conversation.
            </p>

            <div className={styles.contactList}>
              {CONTACT.map((c) => (
                <div key={c.label} className={styles.contactItem}>
                  <div className={styles.contactIcon}>{c.icon}</div>
                  <div className={styles.contactText}>
                    <div className={styles.contactLabel}>{c.label}</div>
                    <span>{c.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div
            ref={rightRef}
            className={`reveal ${rightVisible ? 'visible' : ''}`}
            style={{ transitionDelay: '0.15s' }}
          >
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label className={styles.label}>Full Name *</label>
                  <input type="text" placeholder="John Kamau" required />
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Phone / WhatsApp *</label>
                  <input type="tel" placeholder="+254 7XX XXX XXX" required />
                </div>
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Email Address</label>
                <input type="email" placeholder="john@company.co.ke" />
              </div>

              <div className={styles.row}>
                <div className={styles.field}>
                  <label className={styles.label}>Client Type *</label>
                  <select required defaultValue="">
                    <option value="" disabled>Select…</option>
                    {CLIENT_TYPES.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Primary Service *</label>
                  <select required defaultValue="">
                    <option value="" disabled>Select…</option>
                    {SERVICES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Location / Town</label>
                <input type="text" placeholder="e.g. Westlands, Nairobi" />
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Project Description</label>
                <textarea
                  rows={4}
                  placeholder="Brief description of your site, existing systems, and what you need done…"
                />
              </div>

              <div className={styles.formFooter}>
                <p className={styles.note}>
                  We respond within 24 hours. All enquiries are confidential and carry no obligation.
                </p>
                <button
                  type="submit"
                  className={`${styles.submit} ${status === 'sent' ? styles.submitSent : ''}`}
                  disabled={status !== 'idle'}
                >
                  {btnLabel}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
