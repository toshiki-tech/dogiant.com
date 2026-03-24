/**
 * LogoMark — abstract SVG mark for 大道之行也 / dogiant
 *
 * Concept:
 *   Two elements in tension and balance:
 *   1. A thick vertical stroke — presence, the self, standing still.
 *   2. A fine horizontal line at mid-height, extending to the right — the way forward,
 *      the road, movement. It begins a beat after the vertical, suggesting emergence.
 *   Below: a hairline that is slightly shorter — an echo, a shadow, an after-thought.
 *   Three marks total. No more.
 */
export default function LogoMark({ size = 28, color = 'var(--ink)' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="大道之行也 - 泰卦"
    >
      {/* 泰卦 (Tài) - ☷ over ☰ — Harmony and Great Peace */}
      
      {/* Upper Trigram: ☷ (Earth, Receptive) */}
      <rect x="2" y="4" width="12" height="1.5" fill={color} />
      <rect x="18" y="4" width="12" height="1.5" fill={color} />
      
      <rect x="2" y="8" width="12" height="1.5" fill={color} />
      <rect x="18" y="8" width="12" height="1.5" fill={color} />
      
      <rect x="2" y="12" width="12" height="1.5" fill={color} />
      <rect x="18" y="12" width="12" height="1.5" fill={color} />

      {/* Lower Trigram: ☰ (Heaven, Creative) */}
      <rect x="2" y="18" width="28" height="1.5" fill={color} />
      <rect x="2" y="22" width="28" height="1.5" fill={color} />
      <rect x="2" y="26" width="28" height="1.5" fill={color} />
    </svg>
  )
}
