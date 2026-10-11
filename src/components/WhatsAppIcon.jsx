import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

export default function WhatsAppIcon({ size = 18 }) {
  const [width, height, , , path] = faWhatsapp.icon
  return (
    <svg width={size} height={size} viewBox={`0 0 ${width} ${height}`} aria-hidden="true" focusable="false">
      <path fill="currentColor" d={path} />
    </svg>
  )
}
