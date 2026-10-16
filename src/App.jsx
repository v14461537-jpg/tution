import { useEffect, useState } from 'react'
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Award,
  BookOpen,
  CalendarCheck,
  Check,
  CheckCircle2,
  GraduationCap,
  HeartHandshake,
  MapPin,
  MessageCircle,
  Phone,
  Scissors,
  Star,
  X,
} from 'lucide-react'
import { business, content } from './data/content.js'
import Navbar from './components/Navbar.jsx'
import WhatsAppLink from './components/WhatsAppLink.jsx'
import BusinessMaterials from './components/BusinessMaterials.jsx'
import Reviews from './components/Reviews.jsx'
import WhatsAppIcon from './components/WhatsAppIcon.jsx'
import Faq from './components/Faq.jsx'
import LearningSections from './components/LearningSections.jsx'
import OfficialPosters from './components/OfficialPosters.jsx'

function Eyebrow({ children }) {
  return (
    <div className="eyebrow-badge">
      <span className="eyebrow-dot" />
      <span>{children}</span>
    </div>
  )
}

function SectionTitle({ eyebrow, title, intro, light = false, center = false }) {
  return (
    <div className={`section-title ${light ? 'section-title-light' : ''} ${center ? 'text-center mx-auto' : ''}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2>{title}</h2>
      {intro && <p className="section-intro">{intro}</p>}
    </div>
  )
}

function ServiceCard({ title, description, cta, href, message, image, tone, language }) {
  const isMaths = tone === 'service-maths'
  const highlights = isMaths
    ? (language === 'en'
        ? ['Classes 2 to 12', 'State Board & CBSE', 'Maths, Science & Commerce', 'Regular Doubt Clearing']
        : ['2 முதல் 12 ஆம் வகுப்பு வரை', 'மாநிலப் பாடத்திட்டம் & CBSE', 'கணிதம், அறிவியல், வணிகவியல்', 'தனிப்பட்ட சந்தேக நிவர்த்தி'])
    : (language === 'en'
        ? ['Aari & Zardosi Work', 'Designer Blouses & Churidhar', 'Pattern Cutting & Drafting', '100% Practical Training']
        : ['ஆரி & ஜர்தோசி வேலைப்பாடு', 'டிசைனர் பிளவுஸ் & சுடிதார்', 'அளவெடுத்தல் & பேட்டர்ன் கட்டிங்', 'முழுமையான நேரடிப் பயிற்சி'])

  return (
    <article className={`service-card ${tone}`}>
      <div className="service-image">
        <img src={image} alt={title} loading="lazy" width="900" height="620" />
      </div>

      <div className="service-copy">
        <h3>{title}</h3>
        <p className="service-desc">{description}</p>

        <ul className="service-highlights">
          {highlights.map((h) => (
            <li key={h}>
              <CheckCircle2 size={15} />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <div className="service-footer-actions">
          <a className="button button-outline service-details-btn" href={href}>
            <span>{cta}</span>
            <ArrowRight size={15} aria-hidden="true" />
          </a>
          <WhatsAppLink
            className="service-chat-btn"
            message={message}
            label={`${cta} ${language === 'en' ? 'on WhatsApp' : 'வாட்ஸ்அப்பில்'}`}
            icon={false}
          >
            <WhatsAppIcon size={16} />
            <span>{language === 'en' ? 'Enquire Now' : 'விசாரிக்கவும்'}</span>
          </WhatsAppLink>
        </div>
      </div>
    </article>
  )
}

function App() {
  const [language, setLanguage] = useState('en')
  const [showTourGuide, setShowTourGuide] = useState(false)
  const t = content[language]

  // Show WhatsApp tour guide after 5 seconds unless previously dismissed in this session
  useEffect(() => {
    let isDismissed = false
    try {
      isDismissed = sessionStorage.getItem('wa_tour_dismissed') === 'true'
    } catch {
      // sessionStorage unavailable
    }

    if (!isDismissed) {
      const timer = setTimeout(() => {
        setShowTourGuide(true)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = t.lang
    document.title =
      language === 'en'
        ? 'UNIVERSE Tuition & Tailoring Center | Avaniyapuram, Madurai | ICSE, IGCSE, CBSE'
        : 'UNIVERSE Tuition & Tailoring Center | அவனியாபுரம், மதுரை | ICSE, IGCSE, CBSE'
    const description = document.querySelector('meta[name="description"]')
    if (description) {
      description.content =
        language === 'en'
          ? 'Tuition for Classes 2–12 across ICSE, IGCSE, CBSE and State Board, alongside professional tailoring and stitching coaching in Avaniyapuram, Madurai. Enquire on WhatsApp.'
          : 'ICSE, IGCSE, CBSE மற்றும் மாநிலப் பாடத்திட்டங்களில் 2–12 ஆம் வகுப்புகளுக்கான பயிற்சி மற்றும் தையல் பயிற்சி மையம், அவனியாபுரம், மதுரை.'
    }
  }, [language, t.lang])

  const whyIcons = [GraduationCap, BookOpen, Scissors, MessageCircle, MapPin]

  return (
    <>
      <Navbar t={t} language={language} onLanguageChange={setLanguage} />

      <main>
        {/* Hero Section */}
        <section className="hero" id="home">
          <div className="hero-inner page-width">
            <div className="hero-copy">
              <Eyebrow>{t.hero.eyebrow}</Eyebrow>
              <h1>{t.hero.title}</h1>
              <p className="hero-description">{t.hero.body}</p>

              {/* Curricula Board Badges */}
              <div className="hero-boards-badge-row" aria-label="Curricula boards offered">
                <span className="boards-intro-label">
                  <GraduationCap size={14} />
                  <span>{language === 'en' ? 'Boards:' : 'பாடத்திட்டம்:'}</span>
                </span>
                <span className="board-badge board-badge-highlight">ICSE</span>
                <span className="board-badge board-badge-highlight">IGCSE</span>
                <span className="board-badge">CBSE</span>
                <span className="board-badge">State Board</span>
                <span className="board-badge">ISE</span>
              </div>

              <div className="hero-actions">
                <WhatsAppLink className="button button-green button-large" message={t.messages.general}>
                  <WhatsAppIcon size={18} />
                  <span>{t.hero.primary}</span>
                </WhatsAppLink>
                <a className="button button-outline button-large" href="#services">
                  <span>{t.hero.secondary}</span>
                  <ArrowDown size={17} aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-image-frame">
                <img
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=88"
                  alt={
                    language === 'en'
                      ? 'Students learning together in a bright classroom'
                      : 'ஒளிமயமான வகுப்பறையில் ஒன்றாகக் கற்கும் மாணவர்கள்'
                  }
                  width="1400"
                  height="1500"
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>

          {/* Quick Stats Strip */}
          <div className="hero-stats-strip">
            <div className="page-width stats-grid">
              <div className="stat-item">
                <strong>10+</strong>
                <span>{language === 'en' ? 'Years of Excellence' : 'ஆண்டுகால கற்பித்தல் அனுபவம்'}</span>
              </div>
              <div className="stat-item">
                <strong>Classes 2–12</strong>
                <span>{language === 'en' ? 'ICSE · IGCSE · CBSE · State' : 'ICSE · IGCSE · CBSE · மாநிலம்'}</span>
              </div>
              <div className="stat-item">
                <strong>100%</strong>
                <span>{language === 'en' ? 'Hands-on Tailoring' : 'நேரடி தையல் பயிற்சி'}</span>
              </div>
              <div className="stat-item">
                <strong>5.0 ★</strong>
                <span>{language === 'en' ? 'Parent & Student Rating' : 'மாணவர்கள் & பெற்றோர் மதிப்பீடு'}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Dual Core Services Section */}
        <section className="services-section section-pad" id="services">
          <div className="page-width">
            <SectionTitle
              eyebrow={t.services.eyebrow}
              title={t.services.title}
              intro={t.services.intro}
              center={true}
            />
            <div className="service-grid">
              <ServiceCard
                language={language}
                tone="service-maths"
                title={t.services.mathsTitle}
                description={t.services.maths}
                cta={t.services.mathsCta}
                href="#classes"
                message={t.messages.maths}
                image="/tuition-service.jpg"
              />
              <ServiceCard
                language={language}
                tone="service-tailoring"
                title={t.services.tailoringTitle}
                description={t.services.tailoring}
                cta={t.services.tailoringCta}
                href="#tailoring"
                message={t.messages.tailoring}
                image="/tailoring-service.jpg"
              />
            </div>
          </div>
        </section>

        {/* Learning Sections: Classes, Tailoring Path, Activities, Teacher, Join */}
        <LearningSections language={language} message={t.messages.general} />

        {/* Why Choose Universe Section */}
        <section className="why-section section-pad" id="why-us">
          <div className="page-width">
            <div className="section-title text-center mx-auto">
              <Eyebrow>{t.why.eyebrow}</Eyebrow>
              <h2>{t.why.title}</h2>
              <p className="why-location-badge">
                <MapPin size={16} aria-hidden="true" />
                <span>{language === 'en' ? 'Located in Avaniyapuram, Madurai' : 'அவனியாபுரம், மதுரையில் அமைந்துள்ளது'}</span>
              </p>
            </div>

            <div className="why-grid">
              {t.why.items.map((item, index) => {
                const Icon = whyIcons[index % whyIcons.length]
                return (
                  <article className="why-card" key={item}>
                    <div className="why-card-top">
                      <div className="why-icon-wrap">
                        <Icon size={20} />
                      </div>
                      <span className="why-card-number">0{index + 1}</span>
                    </div>
                    <h3>{item}</h3>
                    <p className="why-card-sub">
                      {index === 0 && (language === 'en' ? 'Structured coaching designed for academic excellence and conceptual confidence.' : 'மாணவர்களின் கல்வி மற்றும் கருத்தியல் புரிதலை வலுப்படுத்தும் சிறந்த பயிற்சி.')}
                      {index === 1 && (language === 'en' ? 'Covers Maths, Physics, Chemistry, Biology, Commerce & Accountancy.' : 'கணிதம், இயற்பியல், வேதியியல், உயிரியல், வணிகவியல் மற்றும் கணக்கியல்.')}
                      {index === 2 && (language === 'en' ? 'Master sewing machines, pattern drafting, designer blouses, and intricate Aari embroidery.' : 'தையல் இயந்திரம், பேட்டர்ன் கட்டிங், பிளவுஸ் மற்றும் ஆரி எம்பிராய்டரி.')}
                      {index === 3 && (language === 'en' ? 'Instant doubt assistance, timetable confirmation, and flexible class scheduling via WhatsApp.' : 'வாட்ஸ்அப் மூலம் உடனடி சந்தேக நிவர்த்தி மற்றும் வகுப்பு நேர விவரங்கள்.')}
                      {index === 4 && (language === 'en' ? 'Easily accessible centre on Aruppukottai Main Road, C.A.S. Nagar, Avaniyapuram.' : 'அருப்புக்கோட்டை மெயின் ரோடு, C.A.S. நகர், அவனியாபுரத்தில் அமைந்துள்ள எளிதில் அணுகக்கூடிய மையம்.')}
                    </p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        {/* Business Materials & Official Credentials */}
        <BusinessMaterials t={t} />

        {/* Official Course Posters & Programs Showcase */}
        <OfficialPosters language={language} />

        {/* Google Reviews */}
        <Reviews t={t} />

        {/* FAQ Section */}
        <Faq language={language} />

        {/* Google Maps / Centre Location Listing Card */}
        <section className="listing-section" aria-labelledby="listing-title">
          <div className="page-width">
            <div className="listing-card">
              <div className="listing-left">
                <div className="listing-pin-badge">
                  <MapPin size={28} />
                </div>
                <div>
                  <Eyebrow>{t.google.eyebrow}</Eyebrow>
                  <h2 id="listing-title">{t.google.title}</h2>
                  <p className="listing-address">{business.name} · {t.contact.address}</p>
                  <div className="listing-tags">
                    <span className="listing-chip">⭐ 5.0 Star Rating</span>
                    <span className="listing-chip">📍 Avaniyapuram, Madurai</span>
                    <span className="listing-chip">🕒 Flexible Batches</span>
                  </div>
                </div>
              </div>

              <div className="listing-right">
                <a
                  className="button button-green button-large"
                  href={business.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{t.google.cta}</span>
                  <ArrowUpRight size={17} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section section-pad" id="contact">
          <div className="page-width contact-layout">
            <div className="contact-copy">
              <Eyebrow>{t.contact.eyebrow}</Eyebrow>
              <h2>{t.contact.title}</h2>
              <p className="contact-intro">{t.contact.intro}</p>

              <div className="contact-cta-block">
                <WhatsAppLink className="button button-green button-large" message={t.messages.general}>
                  <WhatsAppIcon size={19} />
                  <span>{t.contact.whatsapp}</span>
                </WhatsAppLink>
                <p className="contact-cta-note">
                  {language === 'en' ? '⚡ Typical response time: within a few minutes' : '⚡ சில நிமிடங்களில் உடனடி பதில்'}
                </p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-detail-row">
                <div className="detail-icon">
                  <MapPin size={20} />
                </div>
                <div>
                  <small>{t.contact.addressLabel}</small>
                  <p>
                    <strong>{business.name}</strong>
                    <br />
                    {t.contact.address}
                  </p>
                </div>
              </div>

              <div className="contact-detail-row">
                <div className="detail-icon">
                  <Phone size={20} />
                </div>
                <div>
                  <small>{t.contact.phoneLabel}</small>
                  <p>
                    <a href={`tel:${business.phoneLink}`} className="contact-phone-link">
                      {business.phoneDisplay}
                    </a>
                  </p>
                </div>
              </div>

              <div className="contact-actions-row">
                <a className="button button-outline" href={`tel:${business.phoneLink}`}>
                  <Phone size={15} />
                  <span>{t.contact.call}</span>
                </a>
                <a
                  className="button button-outline"
                  href={business.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin size={15} />
                  <span>{t.contact.directions}</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="page-width">
          <div className="footer-main">
            <div className="footer-brand">
              <a className="wordmark wordmark-light" href="#home">
                <div className="wordmark-text">
                  <span>UNIVERSE<span className="wordmark-dot">.</span></span>
                  <small>Tuition &amp; Tailoring Center</small>
                </div>
              </a>
              <p>{t.footer.blurb}</p>
              <div className="footer-contact-direct">
                <a href={`tel:${business.phoneLink}`}>
                  <Phone size={14} /> {business.phoneDisplay}
                </a>
                <span>·</span>
                <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer">
                  <MapPin size={14} /> Avaniyapuram, Madurai
                </a>
              </div>
            </div>

            <div className="footer-links">
              <h3>{t.footer.explore}</h3>
              <a href="#classes">{t.nav.classes}</a>
              <a href="#tailoring">{t.nav.tailoring}</a>
              <a href="#activities">{t.nav.activities}</a>
              <a href="#why-us">{t.why.eyebrow}</a>
              <a href="#gallery">{t.nav.gallery}</a>
              <a href="#reviews">{t.nav.reviews}</a>
              <a href="#faq">{t.nav.faq}</a>
            </div>

            <div className="footer-links">
              <h3>{t.footer.contact}</h3>
              <a href={`tel:${business.phoneLink}`}>{business.phoneDisplay}</a>
              <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer">
                {t.google.cta}
              </a>
              <WhatsAppLink className="footer-whatsapp-link" message={t.messages.general}>
                <WhatsAppIcon size={16} />
                <span>{t.nav.enquire}</span>
              </WhatsAppLink>
            </div>
          </div>

          <div className="footer-bottom">
            <span>
              © {new Date().getFullYear()} {business.name}. {t.footer.rights}
            </span>
            <a href="#home" className="back-to-top">
              {language === 'en' ? 'Back to top ↑' : 'மேலே செல்ல ↑'}
            </a>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Action with Tour Guide */}
      <div className="floating-whatsapp-container">
        {showTourGuide && (
          <aside
            className="wa-tour-guide"
            role="region"
            aria-label={language === 'en' ? 'WhatsApp chat guide' : 'வாட்ஸ்அப் உதவி வழிகாட்டி'}
          >
            <button
              type="button"
              className="wa-tour-close"
              onClick={(e) => {
                e.stopPropagation()
                setShowTourGuide(false)
                try {
                  sessionStorage.setItem('wa_tour_dismissed', 'true')
                } catch {
                  // ignore
                }
              }}
              aria-label={language === 'en' ? 'Close chat guide' : 'வழிகாட்டியை மூடு'}
              title={language === 'en' ? 'Close' : 'மூடு'}
            >
              <X size={13} strokeWidth={2.5} />
            </button>

            <div className="wa-tour-header">
              <span className="wa-tour-status-dot" aria-hidden="true" />
              <span className="wa-tour-badge">
                {language === 'en' ? 'Instant Support' : 'உடனடி உதவி'}
              </span>
            </div>

            <p className="wa-tour-title">
              {language === 'en' ? 'Need help? Chat with us!' : 'கேள்விகள் உள்ளதா? பேசுங்கள்!'}
            </p>
            <p className="wa-tour-desc">
              {language === 'en'
                ? 'Ask about ICSE, IGCSE, CBSE batches, class timings, or tailoring courses directly on WhatsApp.'
                : 'ICSE, CBSE சேர்க்கை, வகுப்புகள் & தையல் பயிற்சி விவரங்களை வாட்ஸ்அப்பில் உடனடியாகப் பெறுங்கள்.'}
            </p>

            <WhatsAppLink
              className="wa-tour-action"
              message={t.messages.general}
              onClick={() => {
                setShowTourGuide(false)
                try {
                  sessionStorage.setItem('wa_tour_dismissed', 'true')
                } catch {
                  // ignore
                }
              }}
            >
              <WhatsAppIcon size={15} />
              <span>{language === 'en' ? 'Chat on WhatsApp' : 'வாட்ஸ்அப்பில் தொடர்புகொள்ள'}</span>
            </WhatsAppLink>

            <div className="wa-tour-pointer" aria-hidden="true" />
          </aside>
        )}

        <WhatsAppLink
          className={`floating-whatsapp ${showTourGuide ? 'has-tour-pulse' : ''}`}
          message={t.messages.general}
          label={t.floating}
          onClick={() => {
            setShowTourGuide(false)
            try {
              sessionStorage.setItem('wa_tour_dismissed', 'true')
            } catch {
              // ignore
            }
          }}
        >
          <WhatsAppIcon size={28} />
          <span className="floating-tooltip">{t.floating}</span>
        </WhatsAppLink>
      </div>
    </>
  )
}

export default App

