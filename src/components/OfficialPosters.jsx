import { useState } from 'react'
import {
  BookOpen,
  Eye,
  Maximize2,
  Sparkles,
  Phone,
  Layers,
  Heart,
  Scissors,
  Languages,
} from 'lucide-react'
import { postersData, posterCategories } from '../data/posters.js'
import ImageModal from './ImageModal.jsx'
import WhatsAppIcon from './WhatsAppIcon.jsx'
import WhatsAppLink from './WhatsAppLink.jsx'

export default function OfficialPosters({ language = 'en' }) {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedPosterId, setSelectedPosterId] = useState(null)

  const enLabel = language === 'en'

  const filteredPosters = activeCategory === 'all'
    ? postersData
    : postersData.filter((p) => p.category === activeCategory)

  const selectedIndex = postersData.findIndex((p) => p.id === selectedPosterId)
  const currentPoster = selectedIndex >= 0 ? postersData[selectedIndex] : null

  const handleOpen = (id) => setSelectedPosterId(id)
  const handleClose = () => setSelectedPosterId(null)

  const handlePrev = () => {
    if (selectedIndex > 0) {
      setSelectedPosterId(postersData[selectedIndex - 1].id)
    } else {
      setSelectedPosterId(postersData[postersData.length - 1].id)
    }
  }

  const handleNext = () => {
    if (selectedIndex < postersData.length - 1) {
      setSelectedPosterId(postersData[selectedIndex + 1].id)
    } else {
      setSelectedPosterId(postersData[0].id)
    }
  }

  const getCategoryIcon = (cat) => {
    switch (cat) {
      case 'academics':
        return <BookOpen size={16} />
      case 'languages':
        return <Languages size={16} />
      case 'arts':
        return <Scissors size={16} />
      case 'wellness':
        return <Heart size={16} />
      default:
        return <Layers size={16} />
    }
  }

  return (
    <section className="posters-section section-pad" id="gallery" aria-labelledby="posters-title">
      <div className="page-width">
        {/* Section Header */}
        <div className="section-title text-center mx-auto">
          <div className="eyebrow-badge">
            <span className="eyebrow-dot" />
            <span>
              {enLabel ? 'OFFICIAL COURSE POSTERS & BROCHURES' : 'அதிகாரப்பூர்வ பயிற்சிப் போஸ்டர்கள்'}
            </span>
          </div>

          <h2 id="posters-title">
            {enLabel
              ? 'Our Programs & Special Offerings'
              : 'எங்கள் சிறப்புப் பயிற்சிகள் & பாடப்பிரிவுகள்'}
          </h2>

          <p className="section-intro">
            {enLabel
              ? 'Explore our 7 verified course flyers. Tap any poster to expand full-screen, view complete syllabus highlights, and enquire directly on WhatsApp.'
              : 'எங்கள் 7 அதிகாரப்பூர்வ விளம்பரப் போஸ்டர்களைப் பாருங்கள். முழு விவரங்களையும் பாடத்திட்டத்தையும் காண ஏதேனும் ஒரு போஸ்டரை கிளிக் செய்யவும்.'}
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="poster-tabs-wrap" role="tablist" aria-label="Course categories">
          {posterCategories.map((cat) => {
            const isActive = activeCategory === cat.id
            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`poster-tab-btn ${isActive ? 'is-active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {getCategoryIcon(cat.id)}
                <span>{cat[language]}</span>
              </button>
            )
          })}
        </div>

        {/* Posters Grid */}
        <div className="posters-grid">
          {filteredPosters.map((poster, idx) => {
            const info = poster[language] || poster.en
            return (
              <article
                key={poster.id}
                className="poster-card"
                onClick={() => handleOpen(poster.id)}
              >
                {/* Poster Frame */}
                <div className="poster-card-frame">
                  <img
                    src={poster.src}
                    alt={info.title}
                    loading="lazy"
                    className="poster-card-img"
                  />

                  {/* Top Badge (only if defined) */}
                  {info.badge && (
                    <div className="poster-card-badge">
                      <span>{info.badge}</span>
                    </div>
                  )}

                  {/* Hover Overlay with Pop Action */}
                  <div className="poster-card-overlay">
                    <span className="poster-overlay-pill">
                      <Maximize2 size={16} />
                      <span>{enLabel ? 'View Poster' : 'போஸ்டரைப் பார்க்க'}</span>
                    </span>
                  </div>
                </div>

                {/* Poster Meta */}
                <div className="poster-card-content" onClick={(e) => e.stopPropagation()}>
                  <div className="poster-card-category-row">
                    <span className="poster-tag">{info.tag}</span>
                  </div>

                  <h3
                    className="poster-card-title"
                    onClick={() => handleOpen(poster.id)}
                    title={enLabel ? 'Click to enlarge' : 'பெரிதாக்க கிளிக் செய்யவும்'}
                  >
                    {info.title}
                  </h3>

                  <p className="poster-card-sub">{info.subtitle}</p>

                  {/* Actions */}
                  <div className="poster-card-actions">
                    <button
                      type="button"
                      className="button button-outline poster-view-btn"
                      onClick={() => handleOpen(poster.id)}
                      aria-label={`${enLabel ? 'View' : 'பார்க்க'} ${info.title}`}
                    >
                      <Eye size={15} />
                      <span>{enLabel ? 'View Poster' : 'போஸ்டர்'}</span>
                    </button>

                    <WhatsAppLink
                      className="button button-green poster-enquire-btn"
                      message={info.whatsapp}
                      label={`${info.title} on WhatsApp`}
                    >
                      <WhatsAppIcon size={16} />
                      <span>{enLabel ? 'Enquire' : 'விசாரிக்க'}</span>
                    </WhatsAppLink>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="posters-bottom-bar">
          <Sparkles size={18} className="bottom-bar-icon" />
          <span>
            {enLabel
              ? 'All courses conducted with personal attention and flexible timing under Mrs. S. Umamaheswari · Call / WhatsApp: +91 98431 53372'
              : 'அனைத்துப் பயிற்சிகளும் திருமதி எஸ். உமாமகேஸ்வரி அவர்களின் நேரடி மேற்பார்வையில் சிறப்பு கவனத்துடன் நடத்தப்படுகின்றன · தொடர்பு: +91 98431 53372'}
          </span>
        </div>
      </div>

      {/* Common Template Image Modal */}
      <ImageModal
        isOpen={selectedPosterId !== null}
        onClose={handleClose}
        poster={currentPoster}
        language={language}
        currentIndex={selectedIndex}
        totalCount={postersData.length}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  )
}
