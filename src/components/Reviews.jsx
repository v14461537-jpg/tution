import { useState } from 'react'
import { ChevronDown, Star } from 'lucide-react'
import { googleReviewExcerpts } from '../data/reviews.js'
import { business } from '../data/content.js'

export default function Reviews({ t }) {
  const [openIndex, setOpenIndex] = useState(null)
  return (
    <section className="reviews-section section-pad" id="reviews" aria-labelledby="reviews-title">
      <div className="page-width">
        <div className="reviews-heading">
          <div className="section-title">
            <p className="eyebrow">{t.reviews.eyebrow}</p>
            <h2 id="reviews-title">{t.reviews.title}</h2>
            <p>{t.reviews.intro}</p>
          </div>
          <a className="button button-outline" href={business.mapsUrl} target="_blank" rel="noopener noreferrer">{t.reviews.googleCta}</a>
        </div>
        <p className="review-scroll-hint">{t.reviews.scrollHint}</p>
        <div className="review-track" role="list" aria-label={t.reviews.title}>
          {googleReviewExcerpts.map((review, index) => {
            const isOpen = openIndex === index
            const panelId = `google-review-${index + 1}`
            return (
              <article className={`review-card ${isOpen ? 'review-card-open' : ''}`} key={review.name} role="listitem">
                <button className="review-toggle" type="button" aria-expanded={isOpen} aria-controls={panelId} aria-label={`${review.name}: ${isOpen ? t.reviews.collapse : t.reviews.expand}`} onClick={() => setOpenIndex(isOpen ? null : index)}>
                  <span className="review-stars" aria-label={t.reviews.fiveStars}>{Array.from({ length: 5 }, (_, star) => <Star key={star} size={15} fill="currentColor" aria-hidden="true" />)}</span>
                  <span className="review-reviewer">{review.name}</span>
                  <span className="review-open-label">{isOpen ? t.reviews.collapse : t.reviews.expand}<ChevronDown size={16} aria-hidden="true" /></span>
                </button>
                <div className="review-quote" id={panelId} lang="en" hidden={!isOpen}>
                  <p>“{review.text}”</p>
                  <span>— {review.name}, Google review</span>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
