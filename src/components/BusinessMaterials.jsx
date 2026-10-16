import { Award, BookOpen, CheckCircle2, FileText, Scissors } from 'lucide-react'

const materials = [
  { icon: BookOpen, key: 'tuition', tag: 'Academic Coaching' },
  { icon: FileText, key: 'poster', tag: 'High School & Higher Sec' },
  { icon: Scissors, key: 'tailoring', tag: 'Practical Craft' },
]

export default function BusinessMaterials({ t }) {
  return (
    <section className="materials-section section-pad" id="credentials" aria-labelledby="materials-title">
      <div className="page-width">
        <div className="section-title text-center mx-auto">
          <span className="eyebrow">{t.details.eyebrow}</span>
          <h2 id="materials-title">{t.details.title}</h2>
          <p>{t.details.intro}</p>
        </div>

        <div className="materials-grid">
          {materials.map(({ icon: Icon, key, tag }) => (
            <article className="material-card" key={key}>
              <div className="material-card-header">
                <div className="material-icon-wrap">
                  <Icon size={20} aria-hidden="true" />
                </div>
                <span className="material-tag">{tag}</span>
              </div>
              <div className="material-copy">
                <h3>{t.details[`${key}Title`]}</h3>
                <p>{t.details[`${key}Body`]}</p>
                {key === 'tuition' && (
                  <div className="material-extras-box">
                    <h4>{t.details.extrasTitle}</h4>
                    <p>{t.details.extras}</p>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="materials-contact-banner">
          <Award size={18} />
          <span>{t.details.contactPerson} · Verified Centre Avaniyapuram, Madurai</span>
        </div>
      </div>
    </section>
  )
}

