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
      aria-label="大道之行也"
    >
      {/* 1. Thick vertical bar — presence */}
      <rect x="3" y="5" width="4.5" height="22" fill={color} />

      {/* 2. Primary horizontal — the way, extending outward from the midpoint */}
      <rect x="11" y="15.4" width="18" height="1.4" fill={color} />

      {/* 3. Secondary hairline below — shorter, quieter, an echo */}
      <rect x="11" y="20" width="11" height="0.8" fill={color} opacity="0.35" />
    </svg>
  )
}
