/**
 * Custom SVG icons tailored specifically for classical arts and traditional Tamil martial arts
 */

export function BharatanatyamIcon({ size = 22, color = 'currentColor', className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`activity-custom-icon icon-bharatanatyam ${className}`}
      aria-hidden="true"
      {...props}
    >
      {/* Kondai (Hair bun ornament) */}
      <path d="M10.8 2.2a1.4 1.4 0 0 1 2.4 0" />
      {/* Head */}
      <circle cx="12" cy="4.2" r="1.8" />
      {/* Neck & Spine */}
      <path d="M12 6.2v5.8" />
      {/* Classical Natyarambham mudra arms with Pataka hand curves */}
      <path d="M12 8L7 6L4.5 8" />
      <path d="M12 8L17 6L19.5 8" />
      {/* Aramandi bent knees (demi-plié posture) */}
      <path d="M9.8 12L5.8 16L9 21.5" />
      <path d="M14.2 12L18.2 16L15 21.5" />
      {/* Mandala feet turned outward */}
      <path d="M6.5 21.5h3" />
      <path d="M14.5 21.5h3" />
      {/* Center fan pleat / salangai accent */}
      <path d="M10.2 13.5L12 17.5L13.8 13.5" />
    </svg>
  )
}

export function SilambamIcon({ size = 22, color = 'currentColor', className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`activity-custom-icon icon-silambam ${className}`}
      aria-hidden="true"
      {...props}
    >
      {/* Crossed traditional bamboo staves (Silambu Kazhi) */}
      <line x1="3" y1="21" x2="21" y2="3" />
      <line x1="21" y1="21" x2="3" y2="3" />

      {/* Bamboo staff notches and grip rings */}
      <path d="M5.5 17l1.5 1.5" />
      <path d="M17 5.5l1.5 1.5" />
      <path d="M18.5 17l-1.5 1.5" />
      <path d="M7 5.5l-1.5 1.5" />

      {/* Center martial grip */}
      <circle cx="12" cy="12" r="2.5" />

      {/* Dynamic spinning rotation arcs representing Chuzharchi technique */}
      <path d="M5.5 9.5a7.5 7.5 0 0 1 11-4" />
      <path d="M18.5 14.5a7.5 7.5 0 0 1-11 4" />
    </svg>
  )
}
