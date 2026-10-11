import { createWhatsAppLink } from '../utils/whatsapp.js'
import WhatsAppIcon from './WhatsAppIcon.jsx'

export default function WhatsAppLink({ message, children, className = '', icon = true, label }) {
  return (
    <a className={className} href={createWhatsAppLink(message)} target="_blank" rel="noopener noreferrer" aria-label={label}>
      {icon && <WhatsAppIcon size={18} />}
      <span className="whatsapp-link-label">{children}</span>
    </a>
  )
}
