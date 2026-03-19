import { useEffect, useRef, useState } from 'react'

/**
 * useReveal — triggers a "visible" state when the element scrolls into view.
 * @param {number} threshold  - IntersectionObserver threshold (0–1)
 * @param {number} delay      - Optional CSS transition-delay in ms (applied via inline style)
 * @returns {[ref, boolean]}  - [ref to attach to element, isVisible]
 */
export default function useReveal(threshold = 0.1, delay = 0) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay) {
            setTimeout(() => setVisible(true), delay)
          } else {
            setVisible(true)
          }
          observer.unobserve(el)
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, delay])

  return [ref, visible]
}
