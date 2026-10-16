import { useState } from 'react'
import { ArrowUpRight, Globe, Menu, Phone, X } from 'lucide-react'
import WhatsAppLink from './WhatsAppLink.jsx'
import { business } from '../data/content.js'

export default function Navbar({ t, language, onLanguageChange }) {
  const [open, setOpen] = useState(false)
  const links = [
    ['#classes', t.nav.classes],
    ['#tailoring', t.nav.tailoring],
    ['#activities', t.nav.activities],
    ['#reviews', t.nav.reviews],
    ['#gallery', t.nav.gallery],
    ['#faq', t.nav.faq],
    ['#contact', t.nav.contact],
  ]
  const closeMenu = () => setOpen(false)

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label={language === 'en' ? 'Main navigation' : 'முக்கிய வழிசெலுத்தல்'}>
        <a className="wordmark" href="#home" onClick={closeMenu} aria-label="UNIVERSE Tuition and Tailoring Center home">
          <div className="wordmark-text">
            <span>UNIVERSE<span className="wordmark-dot">.</span></span>
            <small>Tuition &amp; Tailoring Center</small>
          </div>
        </a>

        <div className={`nav-links ${open ? 'nav-links-open' : ''}`} id="primary-navigation" onKeyDown={event => { if (event.key === 'Escape') closeMenu() }}>
          {links.map(([href, label]) => (
            <a key={href} href={href} onClick={closeMenu} className="nav-link-item">{label}</a>
          ))}
          <div className="mobile-nav-actions">
            <button
              className="language-button"
              type="button"
              onClick={() => { onLanguageChange(language === 'en' ? 'ta' : 'en'); closeMenu() }}
              aria-label={t.switchLabel}
            >
              <Globe size={15} />
              <span>{t.languageName}</span>
            </button>
            <a className="button button-outline mobile-call-btn" href={`tel:${business.phoneLink}`}>
              <Phone size={15} />
              <span>{business.phoneDisplay}</span>
            </a>
            <WhatsAppLink className="button button-green nav-mobile-cta" message={t.messages.general} icon={true}>
              {t.nav.enquire}
            </WhatsAppLink>
          </div>
        </div>

        <div className="nav-actions">
          <button
            className="language-button"
            type="button"
            onClick={() => onLanguageChange(language === 'en' ? 'ta' : 'en')}
            aria-label={t.switchLabel}
          >
            <Globe size={14} />
            <span>{t.languageName}</span>
          </button>
          <WhatsAppLink className="button button-green nav-cta" message={t.messages.general} icon={true}>
            {t.nav.enquire}
          </WhatsAppLink>
          <button
            className="menu-button"
            type="button"
            aria-controls="primary-navigation"
            aria-expanded={open}
            aria-label={open ? t.nav.close : t.nav.menu}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>
    </header>
  )
}
