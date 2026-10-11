import { BookOpen, Scissors } from 'lucide-react'

const materials = [
  { icon: BookOpen, key: 'tuition' },
  { icon: BookOpen, key: 'poster' },
  { icon: Scissors, key: 'tailoring' },
]

export default function BusinessMaterials({ t }) {
  return (
    <section className="materials-section section-pad" id="programs" aria-labelledby="materials-title">
      <div className="page-width">
        <div className="section-title">
          <p className="eyebrow">{t.details.eyebrow}</p>
          <h2 id="materials-title">{t.details.title}</h2>
          <p>{t.details.intro}</p>
        </div>
        <div className="materials-grid">
          {materials.map(({ icon: Icon, key }) => (
            <article className="material-card" key={key}>
              <div className="material-copy">
                <h3><Icon size={19} aria-hidden="true" />{t.details[`${key}Title`]}</h3>
                <p>{t.details[`${key}Body`]}</p>
                {key === 'tuition' && <><h4>{t.details.extrasTitle}</h4><p>{t.details.extras}</p></>}
              </div>
            </article>
          ))}
        </div>
        <p className="materials-contact">{t.details.contactPerson}</p>
      </div>
    </section>
  )
}
