import { createWhatsAppLink } from '../utils/whatsapp.js'
import WhatsAppIcon from './WhatsAppIcon.jsx'

export default function WhatsAppLink({ message, children, className = '', icon = false, label, onClick, ...props }) {
  return (
    <a
      className={className}
      href={createWhatsAppLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label || (typeof children === 'string' ? children : undefined)}
      onClick={onClick}
      {...props}
    >
      {icon && <WhatsAppIcon size={18} />}
      {children}
    </a>
  )
}
