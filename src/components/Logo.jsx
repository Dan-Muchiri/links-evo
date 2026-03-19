import React from 'react'

/**
 * Links-Evo Logo — Variant B
 * Props:
 *   variant: 'light' (default) | 'dark'
 *   width:   number (default 200)
 *   showTag: boolean — show "ENGINEERING" sub-label (default true)
 */
export default function Logo({ variant = 'light', width = 200, showTag = true }) {
  const isDark = variant === 'dark'

  const colors = {
    grid:     isDark ? '#e8f0e9' : '#1a4a1e',
    gridOpacity: isDark ? 0.6 : 1,
    nodeDim:  isDark ? '#e8f0e9' : '#1a4a1e',
    nodeGold: '#b89a4a',
    textMain: isDark ? '#fafaf7' : '#0f1a10',
    textEvo:  isDark ? '#b89a4a' : '#2d6b33',
    divider:  isDark ? '#b89a4a' : '#2d6b33',
    tag:      isDark ? '#8a9e8b' : '#1a4a1e',
  }

  const height = 48
  const scale = width / 200

  return (
    <svg
      width={width}
      height={height * scale}
      viewBox="0 0 200 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Links-Evo Engineering"
      role="img"
    >
      {/* ── Grid mark ── */}
      {/* Horizontal lines */}
      <line x1="8" y1="8"  x2="40" y2="8"  stroke={colors.grid} strokeWidth="1.5" strokeLinecap="round" opacity={colors.gridOpacity}/>
      <line x1="8" y1="24" x2="40" y2="24" stroke={colors.grid} strokeWidth="1.5" strokeLinecap="round" opacity={colors.gridOpacity}/>
      <line x1="8" y1="40" x2="40" y2="40" stroke={colors.grid} strokeWidth="1.5" strokeLinecap="round" opacity={colors.gridOpacity}/>
      {/* Vertical lines */}
      <line x1="8"  y1="8" x2="8"  y2="40" stroke={colors.grid} strokeWidth="1.5" strokeLinecap="round" opacity={colors.gridOpacity}/>
      <line x1="24" y1="8" x2="24" y2="40" stroke={colors.grid} strokeWidth="1.5" strokeLinecap="round" opacity={colors.gridOpacity}/>
      <line x1="40" y1="8" x2="40" y2="40" stroke={colors.grid} strokeWidth="1.5" strokeLinecap="round" opacity={colors.gridOpacity}/>
      {/* Dim nodes */}
      <circle cx="8"  cy="8"  r="3" fill={colors.nodeDim} opacity={isDark ? 0.6 : 1}/>
      <circle cx="24" cy="8"  r="3" fill={colors.nodeDim} opacity={isDark ? 0.6 : 1}/>
      <circle cx="40" cy="8"  r="3" fill={colors.nodeDim} opacity={isDark ? 0.6 : 1}/>
      <circle cx="8"  cy="24" r="3" fill={colors.nodeDim} opacity={isDark ? 0.6 : 1}/>
      {/* Gold centre node */}
      <circle cx="24" cy="24" r="4.5" fill={colors.nodeGold}/>
      <circle cx="40" cy="24" r="3" fill={colors.nodeDim} opacity={isDark ? 0.6 : 1}/>
      <circle cx="8"  cy="40" r="3" fill={colors.nodeDim} opacity={isDark ? 0.6 : 1}/>
      <circle cx="24" cy="40" r="3" fill={colors.nodeDim} opacity={isDark ? 0.6 : 1}/>
      <circle cx="40" cy="40" r="3" fill={colors.nodeDim} opacity={isDark ? 0.6 : 1}/>

      {/* ── Wordmark ── */}
      <text
        x="56" y="19"
        fontFamily="'Playfair Display', Georgia, serif"
        fontSize="17"
        fontWeight="700"
        fill={colors.textMain}
        letterSpacing="-0.3"
      >
        Links
      </text>

      {/* Divider line under "Links" */}
      <rect x="56" y="24" width="38" height="1.5" rx="0.75" fill={colors.divider} opacity={isDark ? 0.5 : 0.4}/>

      <text
        x="56" y="40"
        fontFamily="'Playfair Display', Georgia, serif"
        fontSize="17"
        fontWeight="700"
        fontStyle="italic"
        fill={colors.textEvo}
        letterSpacing="-0.3"
      >
        Evo
      </text>

      {/* ── Sub-label ── */}
      {showTag && (
        <text
          x="100" y="40"
          fontFamily="'DM Mono', 'Courier New', monospace"
          fontSize="10"
          fill={colors.tag}
          letterSpacing="1.5"
        >
          ENGINEERING
        </text>
      )}
    </svg>
  )
}
