import { useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronDown, ChevronUp, Quote, Star } from 'lucide-react'
import { googleReviewExcerpts } from '../data/reviews.js'
import { business } from '../data/content.js'

export default function Reviews({ t }) {
  const [expandedIndex, setExpandedIndex] = useState(null)
  const trackRef = useRef(null)

  const scroll = (direction) => {
    if (trackRef.current) {
      const offset = direction === 'left' ? -340 : 340
      trackRef.current.scrollBy({ left: offset, behavior: 'smooth' })
    }
  }

  const toggleExpand = (idx) => {
    setExpandedIndex(expandedIndex === idx ? null : idx)
  }

  return (
    <section className="reviews-section section-pad" id="reviews" aria-labelledby="reviews-title">
      <div className="page-width">
        <div className="reviews-header-wrap">
          <div className="section-title">
            <span className="eyebrow">{t.reviews.eyebrow}</span>
            <h2 id="reviews-title">{t.reviews.title}</h2>
            <p>{t.reviews.intro}</p>
          </div>

          <div className="reviews-actions-top">
            <div className="google-badge-pill">
              <span className="google-g-icon">G</span>
              <div>
                <strong>5.0 ★★★★★</strong>
                <small>Google Verified Reviews</small>
              </div>
            </div>
            <div className="review-carousel-nav">
              <button
                type="button"
                className="carousel-arrow"
                onClick={() => scroll('left')}
                aria-label="Previous reviews"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                type="button"
                className="carousel-arrow"
                onClick={() => scroll('right')}
                aria-label="Next reviews"
              >
                <ArrowRight size={18} />
              </button>
              <a
                className="button button-outline review-maps-btn"
                href={business.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.reviews.googleCta}
              </a>
            </div>
          </div>
        </div>

        <div className="review-track" ref={trackRef} role="list" aria-label={t.reviews.title}>
          {googleReviewExcerpts.map((review, index) => {
            const isLong = review.text.length > 140
            const isExpanded = expandedIndex === index
            const displayText = isLong && !isExpanded ? `${review.text.slice(0, 140)}...` : review.text
            const initials = review.name
              .split(' ')
              .map(n => n[0])
              .slice(0, 2)
              .join('')
              .toUpperCase()

            return (
              <article className="review-card" key={review.name} role="listitem">
                <div className="review-card-top">
                  <div className="review-avatar">{initials}</div>
                  <div className="review-meta">
                    <h3 className="review-name">{review.name}</h3>
                    <div className="review-verified">
                      <CheckCircle2 size={13} />
                      <span>Google Verified Review</span>
                    </div>
                  </div>
                  <Quote size={20} className="review-quote-icon" aria-hidden="true" />
                </div>

                <div className="review-stars-row" aria-label={t.reviews.fiveStars}>
                  {Array.from({ length: 5 }, (_, star) => (
                    <Star key={star} size={15} fill="#f59e0b" color="#f59e0b" aria-hidden="true" />
                  ))}
                </div>

                <p className="review-text">“{displayText}”</p>

                {isLong && (
                  <button
                    type="button"
                    className="review-read-more"
                    onClick={() => toggleExpand(index)}
                    aria-expanded={isExpanded}
                  >
                    {isExpanded ? (
                      <>Show less <ChevronUp size={14} /></>
                    ) : (
                      <>Read full review <ChevronDown size={14} /></>
                    )}
                  </button>
                )}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
