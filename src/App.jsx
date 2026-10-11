import { useEffect, useState } from 'react'
import { ArrowDown, ArrowRight, ArrowUpRight, BookOpen, Check, MapPin, Phone, Scissors } from 'lucide-react'
import { business, content, photos } from './data/content.js'
import Navbar from './components/Navbar.jsx'
import WhatsAppLink from './components/WhatsAppLink.jsx'
import BusinessMaterials from './components/BusinessMaterials.jsx'
import Reviews from './components/Reviews.jsx'
import WhatsAppIcon from './components/WhatsAppIcon.jsx'
import Faq from './components/Faq.jsx'

function Eyebrow({ children }) { return <p className="eyebrow">{children}</p> }
function SectionTitle({ eyebrow, title, intro, light = false }) {
  return <div className={`section-title ${light ? 'section-title-light' : ''}`}><Eyebrow>{eyebrow}</Eyebrow><h2>{title}</h2>{intro && <p>{intro}</p>}</div>
}
function ServiceCard({ icon: Icon, title, description, cta, href, message, image, tone, kicker, language }) {
  return <article className={`service-card ${tone}`}>
    <div className="service-image"><img src={image} alt="" loading="lazy" width="900" height="620" /><span className="service-icon"><Icon size={22} aria-hidden="true" /></span></div>
    <div className="service-copy"><p className="service-kicker">{kicker}</p><h3>{title}</h3><p>{description}</p>
      <a className="text-link" href={href}>{cta}<ArrowRight size={17} aria-hidden="true" /></a>
      <WhatsAppLink className="service-chat" message={message} label={`${cta} ${language === 'en' ? 'on WhatsApp' : 'வாட்ஸ்அப்பில்'}`} icon={false}><WhatsAppIcon size={17} /> {language === 'en' ? 'Enquire now' : 'இப்போது விசாரிக்கவும்'}</WhatsAppLink>
    </div>
  </article>
}

function App() {
  const [language, setLanguage] = useState('en')
  const t = content[language]
  useEffect(() => {
    document.documentElement.lang = t.lang
    document.title = language === 'en' ? 'UNIVERSE Tuition & Tailoring Center | Avaniyapuram, Madurai' : 'UNIVERSE Tuition & Tailoring Center | அவனியாபுரம், மதுரை'
    const description = document.querySelector('meta[name="description"]')
    if (description) description.content = language === 'en'
      ? 'Tuition for Classes 2–12 in Avaniyapuram, Madurai. Subjects and boards listed include State Board, CBSE, ICSE, IGCSE and ISE. Enquire on WhatsApp.'
      : 'மதுரை, அவனியாபுரத்தில் 2–12 ஆம் வகுப்புகளுக்கான பயிற்சி. மாநிலப் பாடத்திட்டம், CBSE உள்ளிட்ட விவரங்களுக்கு வாட்ஸ்அப்பில் விசாரிக்கவும்.'
  }, [language, t.lang])

  return <>
    <Navbar t={t} language={language} onLanguageChange={setLanguage} />
    <main>
      <section className="hero" id="home">
        <div className="hero-inner page-width">
          <div className="hero-copy">
            <Eyebrow>{t.hero.eyebrow}</Eyebrow>
            <h1>{t.hero.title}</h1>
            <p className="hero-description">{t.hero.body}</p>
            <div className="hero-actions">
              <WhatsAppLink className="button button-green button-large" message={t.messages.general}>{t.hero.primary}</WhatsAppLink>
              <a className="button button-outline button-large" href="#services">{t.hero.secondary}<ArrowDown size={17} aria-hidden="true" /></a>
            </div>
            <div className="hero-note"><span className="note-mark"><Check size={15} /></span><span>{t.hero.note}</span></div>
          </div>
          <div className="hero-visual">
            <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=88" alt={language === 'en' ? 'Students learning together in a bright classroom' : 'ஒளிமயமான வகுப்பறையில் ஒன்றாகக் கற்கும் மாணவர்கள்'} width="1400" height="1500" fetchPriority="high" />
            <div className="hero-caption"><span className="caption-icon"><BookOpen size={19} /></span><span><strong>{business.name}</strong><small>{language === 'en' ? 'Avaniyapuram · Madurai' : 'அவனியாபுரம் · மதுரை'}</small></span></div>
            <span className="hero-orbit" aria-hidden="true">✳</span>
          </div>
        </div>
        <div className="hero-bottom page-width"><span>{language === 'en' ? <>MATHEMATICS <i>✳</i> STITCHING</> : <>கணிதம் <i>✳</i> தையல்</>}</span><a href="#services">{language === 'en' ? 'Discover what you can learn' : 'நீங்கள் கற்கக்கூடியவற்றைப் பாருங்கள்'} <ArrowDown size={14} /></a></div>
      </section>

      <section className="services-section section-pad" id="services">
        <div className="page-width">
          <SectionTitle eyebrow={t.services.eyebrow} title={t.services.title} intro={t.services.intro} />
          <div className="service-grid">
            <ServiceCard icon={BookOpen} language={language} tone="service-maths" kicker={language === 'en' ? '01 / LEARN' : '01 / கற்றல்'} title={t.services.mathsTitle} description={t.services.maths} cta={t.services.mathsCta} href="#maths" message={t.messages.maths} image="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1000&q=85" />
            <ServiceCard icon={Scissors} language={language} tone="service-tailoring" kicker={language === 'en' ? '02 / CREATE' : '02 / படைப்பு'} title={t.services.tailoringTitle} description={t.services.tailoring} cta={t.services.tailoringCta} href="#tailoring" message={t.messages.tailoring} image="https://images.unsplash.com/photo-1590736969955-71cc94901144?auto=format&fit=crop&w=1000&q=85" />
          </div>
        </div>
      </section>

      <section className="feature-section maths-feature" id="maths">
        <div className="feature-image"><img src="https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1200&q=85" alt={language === 'en' ? 'Notebook with mathematics notes and pencil' : 'கணிதக் குறிப்புகளும் பென்சிலும் உள்ள நோட்டுப்புத்தகம்'} loading="lazy" width="1200" height="1000" /></div>
        <div className="feature-copy"><Eyebrow>{t.maths.eyebrow}</Eyebrow><h2>{t.maths.title}</h2><p>{t.maths.body}</p><ul>{t.maths.points.map(item => <li key={item}><Check size={17} aria-hidden="true" />{item}</li>)}</ul><WhatsAppLink className="button button-green" message={t.messages.maths}>{t.maths.cta}</WhatsAppLink></div>
      </section>

      <section className="feature-section tailoring-feature" id="tailoring">
        <div className="feature-copy"><Eyebrow>{t.tailoring.eyebrow}</Eyebrow><h2>{t.tailoring.title}</h2><p>{t.tailoring.body}</p><ul>{t.tailoring.points.map(item => <li key={item}><Check size={17} aria-hidden="true" />{item}</li>)}</ul><WhatsAppLink className="button button-green" message={t.messages.tailoring}>{t.tailoring.cta}</WhatsAppLink></div>
        <div className="feature-image"><img src="https://images.unsplash.com/photo-1590736969955-71cc94901144?auto=format&fit=crop&w=1200&q=85" alt={language === 'en' ? 'Sewing machine and stitching materials' : 'தையல் இயந்திரமும் தையல் பொருட்களும்'} loading="lazy" width="1200" height="1000" /></div>
      </section>

      <section className="why-section section-pad">
        <div className="page-width why-layout"><div className="why-intro"><SectionTitle eyebrow={t.why.eyebrow} title={t.why.title} /><p className="why-location"><MapPin size={18} aria-hidden="true" /> {language === 'en' ? 'Avaniyapuram, Madurai' : 'அவனியாபுரம், மதுரை'}</p></div><ul className="why-list">{t.why.items.map((item, index) => <li key={item}><span>0{index + 1}</span>{item}<ArrowUpRight size={16} aria-hidden="true" /></li>)}</ul></div>
      </section>

      <BusinessMaterials t={t} />

      <section className="gallery-section section-pad" id="gallery">
        <div className="page-width"><SectionTitle eyebrow={t.gallery.eyebrow} title={t.gallery.title} intro={t.gallery.intro} />
          <div className="gallery-grid">{photos.map((photo, index) => <figure className={`gallery-item gallery-item-${index + 1}`} key={photo.src}><img src={photo.src} alt={t.gallery.images[index]} loading="lazy" width="1000" height="760" /><figcaption><span>0{index + 1}</span>{t.gallery.images[index]}</figcaption></figure>)}</div>
        </div>
      </section>

      <Reviews t={t} />

      <Faq language={language} />

      <section className="listing-section" aria-labelledby="listing-title">
        <div className="page-width listing-inner"><div className="listing-badge"><MapPin size={24} aria-hidden="true" /></div><div><Eyebrow>{t.google.eyebrow}</Eyebrow><h2 id="listing-title">{t.google.title}</h2><p>{t.google.body}</p></div><a className="button button-outline" href={business.mapsUrl} target="_blank" rel="noopener noreferrer">{t.google.cta}<ArrowUpRight size={17} aria-hidden="true" /></a></div>
      </section>

      <section className="contact-section section-pad" id="contact">
        <div className="page-width contact-layout"><div className="contact-copy"><Eyebrow>{t.contact.eyebrow}</Eyebrow><h2>{t.contact.title}</h2><p>{t.contact.intro}</p><WhatsAppLink className="button button-green button-large" message={t.messages.general}>{t.contact.whatsapp}</WhatsAppLink></div>
          <div className="contact-card"><div className="contact-detail"><span className="detail-icon"><MapPin size={19} /></span><div><small>{t.contact.addressLabel}</small><p>{business.name}<br />{t.contact.address}</p></div></div><div className="contact-detail"><span className="detail-icon"><Phone size={19} /></span><div><small>{t.contact.phoneLabel}</small><a href={`tel:${business.phoneLink}`}>{business.phoneDisplay}</a></div></div><div className="contact-actions"><a className="text-link" href={`tel:${business.phoneLink}`}><Phone size={16} />{t.contact.call}<ArrowUpRight size={15} /></a><a className="text-link" href={business.mapsUrl} target="_blank" rel="noopener noreferrer"><MapPin size={16} />{t.contact.directions}<ArrowUpRight size={15} /></a></div></div>
        </div>
      </section>
    </main>
    <footer className="site-footer"><div className="page-width"><div className="footer-main"><div className="footer-brand"><a className="wordmark wordmark-light" href="#home"><span>UNIVERSE<span className="wordmark-dot">.</span></span><small>Tuition &amp; Tailoring Center</small></a><p>{t.footer.blurb}</p></div><div className="footer-links"><h2>{t.footer.explore}</h2><a href="#maths">{t.nav.maths}</a><a href="#programs">{t.nav.classes}</a><a href="#tailoring">{t.nav.tailoring}</a><a href="#gallery">{t.nav.gallery}</a><a href="#reviews">{t.nav.reviews}</a></div><div className="footer-links"><h2>{t.footer.contact}</h2><a href={`tel:${business.phoneLink}`}>{business.phoneDisplay}</a><a href={business.mapsUrl} target="_blank" rel="noopener noreferrer">{t.google.cta}</a><WhatsAppLink className="footer-whatsapp" message={t.messages.general}>{t.nav.enquire}</WhatsAppLink></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} {business.name}. {t.footer.rights}</span><a href="#home">{language === 'en' ? 'Back to top ↑' : 'மேலே செல்ல ↑'}</a></div></div></footer>
    <WhatsAppLink className="floating-whatsapp" message={t.messages.general} label={t.floating}>{t.floating}</WhatsAppLink>
  </>
}

export default App
