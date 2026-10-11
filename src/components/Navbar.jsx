import { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import WhatsAppLink from './WhatsAppLink.jsx'

export default function Navbar({ t, language, onLanguageChange }) {
  const [open, setOpen] = useState(false)
  const links = [
    ['#home', t.nav.home], ['#maths', t.nav.maths], ['#tailoring', t.nav.tailoring], ['#gallery', t.nav.gallery], ['#faq', t.nav.faq], ['#contact', t.nav.contact],
  ]
  const closeMenu = () => setOpen(false)
  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label={language === 'en' ? 'Main navigation' : 'முக்கிய வழிசெலுத்தல்'}>
        <a className="wordmark" href="#home" onClick={closeMenu} aria-label="UNIVERSE Tuition and Tailoring Center home">
          <span>UNIVERSE<span className="wordmark-dot">.</span></span>
          <small>Tuition &amp; Tailoring Center</small>
        </a>
        <div className={`nav-links ${open ? 'nav-links-open' : ''}`} id="primary-navigation" onKeyDown={event => { if (event.key === 'Escape') closeMenu() }}>
          {links.map(([href, label]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}
          <div className="mobile-nav-actions">
            <button className="language-button" type="button" onClick={() => { onLanguageChange(language === 'en' ? 'ta' : 'en'); closeMenu() }} aria-label={t.switchLabel}>{t.languageName}<ArrowUpRight size={15} aria-hidden="true" /></button>
            <WhatsAppLink className="button button-green nav-mobile-cta" message={t.messages.general}>{t.nav.enquire}</WhatsAppLink>
          </div>
        </div>
        <div className="nav-actions">
          <button className="language-button" type="button" onClick={() => onLanguageChange(language === 'en' ? 'ta' : 'en')} aria-label={t.switchLabel}>{t.languageName}<ArrowUpRight size={15} aria-hidden="true" /></button>
          <WhatsAppLink className="button button-green nav-cta" message={t.messages.general}>{t.nav.enquire}</WhatsAppLink>
          <button className="menu-button" type="button" aria-controls="primary-navigation" aria-expanded={open} aria-label={open ? t.nav.close : t.nav.menu} onClick={() => setOpen(!open)}>
            {open ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </nav>
    </header>
  )
}
