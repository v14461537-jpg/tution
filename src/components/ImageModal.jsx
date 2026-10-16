import { useEffect, useCallback, useState, useRef } from 'react'
import {
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ZoomIn,
  ZoomOut,
  FileText,
  Image as ImageIcon,
} from 'lucide-react'
import WhatsAppIcon from './WhatsAppIcon.jsx'
import WhatsAppLink from './WhatsAppLink.jsx'

export default function ImageModal({
  isOpen,
  onClose,
  poster,
  language = 'en',
  currentIndex = 0,
  totalCount = 1,
  onPrev,
  onNext,
}) {
  const [isZoomed, setIsZoomed] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [mobileTab, setMobileTab] = useState('image') // 'image' or 'details'

  // Pinch-zoom detection & deliberate swipe navigation for mobile
  const touchStartX = useRef(null)
  const touchStartY = useRef(null)
  const touchEndX = useRef(null)
  const touchEndY = useRef(null)
  const isPinching = useRef(false)
  const touchStartTime = useRef(0)
  const minSwipeDistance = 70 // Intentional threshold to avoid accidental trigger

  // Reset states when poster changes
  useEffect(() => {
    setIsZoomed(false)
    setImageLoaded(false)
  }, [poster?.id])

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e) => {
      if (!isOpen) return
      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
      } else if (e.key === 'ArrowLeft' && onPrev) {
        e.preventDefault()
        onPrev()
      } else if (e.key === 'ArrowRight' && onNext) {
        e.preventDefault()
        onNext()
      }
    },
    [isOpen, onClose, onPrev, onNext]
  )

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, handleKeyDown])

  // Mobile touch handlers with strict pinch-to-zoom protection
  const handleTouchStart = (e) => {
    // If more than 1 finger is down, user is pinch-zooming -> immediately suppress any swipe
    if (e.touches && e.touches.length > 1) {
      isPinching.current = true
      touchStartX.current = null
      touchStartY.current = null
      return
    }

    isPinching.current = false
    touchStartTime.current = Date.now()
    touchEndX.current = null
    touchEndY.current = null

    if (e.touches && e.touches[0]) {
      touchStartX.current = e.touches[0].clientX
      touchStartY.current = e.touches[0].clientY
    }
  }

  const handleTouchMove = (e) => {
    // If a second finger touches the screen at any point, user began pinch-zooming
    if (e.touches && e.touches.length > 1) {
      isPinching.current = true
      touchStartX.current = null
      touchStartY.current = null
      return
    }

    if (isPinching.current || touchStartX.current === null) return

    if (e.touches && e.touches[0]) {
      touchEndX.current = e.touches[0].clientX
      touchEndY.current = e.touches[0].clientY
    }
  }

  const handleTouchEnd = (e) => {
    // If user was pinch-zooming or fingers remain on screen, discard gesture
    if (isPinching.current || (e.touches && e.touches.length > 0)) {
      if (!e.touches || e.touches.length === 0) {
        isPinching.current = false
      }
      touchStartX.current = null
      touchStartY.current = null
      touchEndX.current = null
      touchEndY.current = null
      return
    }

    if (touchStartX.current === null || touchEndX.current === null) return

    const deltaX = touchStartX.current - touchEndX.current
    const deltaY = (touchStartY.current ?? 0) - (touchEndY.current ?? 0)
    const absDeltaX = Math.abs(deltaX)
    const absDeltaY = Math.abs(deltaY)
    const duration = Date.now() - touchStartTime.current

    // Only swipe if:
    // 1. Horizontal movement exceeds threshold (70px)
    // 2. Movement is predominantly horizontal (not a vertical scroll or diagonal movement)
    // 3. Gesture was a swift swipe, not a slow drag / panning movement (< 700ms)
    const isIntentionalSwipe = absDeltaX > minSwipeDistance && absDeltaX > absDeltaY * 1.6 && duration < 700

    if (isIntentionalSwipe) {
      if (deltaX > 0 && onNext) {
        onNext() // Swiped left -> Next poster
      } else if (deltaX < 0 && onPrev) {
        onPrev() // Swiped right -> Previous poster
      }
    }

    touchStartX.current = null
    touchStartY.current = null
    touchEndX.current = null
    touchEndY.current = null
    isPinching.current = false
  }

  const handleTouchCancel = () => {
    touchStartX.current = null
    touchStartY.current = null
    touchEndX.current = null
    touchEndY.current = null
    isPinching.current = false
  }

  if (!isOpen || !poster) return null

  const info = poster[language] || poster.en
  const enLabel = language === 'en'

  return (
    <div
      className="poster-modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-poster-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="poster-modal-backdrop" aria-hidden="true" onClick={onClose} />

      <div className="poster-modal-window">
        {/* Top Header Bar */}
        <header className="poster-modal-header">
          <div className="poster-modal-meta">
            <span className="poster-counter">
              {currentIndex + 1} / {totalCount}
            </span>
            {info.badge && <span className="poster-badge">{info.badge}</span>}
            <span className="poster-tag-sub desktop-only">{info.tag}</span>
          </div>

          {/* Mobile Tab Switcher */}
          <div className="mobile-view-tabs" role="tablist" aria-label="View mode">
            <button
              type="button"
              className={`mobile-view-tab ${mobileTab === 'image' ? 'is-active' : ''}`}
              onClick={() => setMobileTab('image')}
              role="tab"
              aria-selected={mobileTab === 'image'}
            >
              <ImageIcon size={14} />
              <span>{enLabel ? 'Poster' : 'படம்'}</span>
            </button>
            <button
              type="button"
              className={`mobile-view-tab ${mobileTab === 'details' ? 'is-active' : ''}`}
              onClick={() => setMobileTab('details')}
              role="tab"
              aria-selected={mobileTab === 'details'}
            >
              <FileText size={14} />
              <span>{enLabel ? 'Details' : 'விவரம்'}</span>
            </button>
          </div>

          {/* Action Tools & Close Button */}
          <div className="poster-modal-actions">
            <button
              type="button"
              className="modal-tool-btn desktop-only"
              onClick={() => setIsZoomed((prev) => !prev)}
              title={isZoomed ? (enLabel ? 'Fit to Screen' : 'இயல்பு நிலை') : (enLabel ? 'Zoom' : 'பெரிதாக்கு')}
              aria-label={isZoomed ? 'Fit to Screen' : 'Zoom Image'}
            >
              {isZoomed ? <ZoomOut size={18} /> : <ZoomIn size={18} />}
            </button>

            <button
              type="button"
              className="modal-close-btn"
              onClick={onClose}
              title={enLabel ? 'Close (Esc)' : 'மூடு (Esc)'}
              aria-label={enLabel ? 'Close modal' : 'மூடு'}
            >
              <X size={20} />
              <span className="modal-esc-hint desktop-only">ESC</span>
            </button>
          </div>
        </header>

        {/* Main Content Area */}
        <div
          className={`poster-modal-body mobile-tab-${mobileTab}`}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={handleTouchCancel}
        >
          {/* Desktop Left Navigation Button */}
          {totalCount > 1 && onPrev && (
            <button
              type="button"
              className="modal-nav-btn modal-prev-btn desktop-only"
              onClick={onPrev}
              aria-label={enLabel ? 'Previous poster' : 'முந்தைய படம்'}
              title={enLabel ? 'Previous (←)' : 'முந்தைய படம்'}
            >
              <ChevronLeft size={28} />
            </button>
          )}

          {/* Poster Image Viewport */}
          <div
            className={`poster-image-viewport ${isZoomed ? 'is-zoomed' : ''} ${mobileTab === 'details' ? 'mobile-hidden' : ''}`}
            onClick={() => {
              if (window.innerWidth >= 860) {
                setIsZoomed((prev) => !prev)
              }
            }}
          >
            {!imageLoaded && (
              <div className="poster-image-skeleton" aria-hidden="true">
                <div className="skeleton-pulse" />
              </div>
            )}

            <img
              src={poster.src}
              alt={info.title}
              className={`poster-display-img ${imageLoaded ? 'is-loaded' : ''}`}
              onLoad={() => setImageLoaded(true)}
              loading="eager"
            />

            {/* Mobile swipe hint overlay */}
            <div className="mobile-swipe-hint mobile-only">
              <span>{enLabel ? 'Swipe ← → to browse posters' : 'போஸ்டர்களைப் பார்க்க ← → ஸ்வைப் செய்யவும்'}</span>
            </div>
          </div>

          {/* Desktop Right Navigation Button */}
          {totalCount > 1 && onNext && (
            <button
              type="button"
              className="modal-nav-btn modal-next-btn desktop-only"
              onClick={onNext}
              aria-label={enLabel ? 'Next poster' : 'அடுத்த படம்'}
              title={enLabel ? 'Next (→)' : 'அடுத்த படம்'}
            >
              <ChevronRight size={28} />
            </button>
          )}

          {/* Details Sidebar / Bottom Panel */}
          <aside className={`poster-modal-sidebar ${mobileTab === 'image' ? 'mobile-hidden' : ''}`}>
            <div className="modal-sidebar-inner">
              <div className="modal-title-wrap">
                <span className="poster-tag mobile-only">{info.tag}</span>
                <h3 id="modal-poster-title" className="modal-poster-title">
                  {info.title}
                </h3>
                <p className="modal-poster-subtitle">{info.subtitle}</p>
              </div>

              <p className="modal-poster-summary">{info.summary}</p>

              {info.features && (
                <div className="modal-features-wrap">
                  <h4 className="modal-features-title">
                    {enLabel ? 'Program Highlights:' : 'சிறப்பம்சங்கள்:'}
                  </h4>
                  <ul className="modal-features-list">
                    {info.features.map((feat, i) => (
                      <li key={i}>
                        <Sparkles size={14} className="feature-icon" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="modal-contact-row">
                <span className="contact-label">{enLabel ? 'Faculty & Enquiries:' : 'பயிற்சி & தொடர்புக்கு:'}</span>
                <strong className="contact-faculty">{info.faculty}</strong>
              </div>

              {/* Desktop WhatsApp CTA Button */}
              <div className="modal-cta-row desktop-only">
                <WhatsAppLink
                  className="button button-green modal-whatsapp-btn"
                  message={info.whatsapp}
                >
                  <WhatsAppIcon size={18} />
                  <span>{enLabel ? 'Enquire for this Course' : 'இந்த வகுப்பு பற்றி விசாரிக்கவும்'}</span>
                </WhatsAppLink>
              </div>
            </div>
          </aside>
        </div>

        {/* Mobile Sticky Bottom Navigation & Action Bar */}
        <footer className="mobile-modal-bottom-bar mobile-only">
          <button
            type="button"
            className="mobile-bottom-nav-btn"
            onClick={onPrev}
            aria-label={enLabel ? 'Previous poster' : 'முந்தையது'}
            disabled={totalCount <= 1}
          >
            <ChevronLeft size={20} />
          </button>

          <WhatsAppLink
            className="button button-green mobile-bottom-whatsapp-btn"
            message={info.whatsapp}
          >
            <WhatsAppIcon size={17} />
            <span>{enLabel ? 'Enquire on WhatsApp' : 'வாட்ஸ்அப் விசாரணை'}</span>
          </WhatsAppLink>

          <button
            type="button"
            className="mobile-bottom-nav-btn"
            onClick={onNext}
            aria-label={enLabel ? 'Next poster' : 'அடுத்தது'}
            disabled={totalCount <= 1}
          >
            <ChevronRight size={20} />
          </button>
        </footer>
      </div>
    </div>
  )
}
