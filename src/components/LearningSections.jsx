import {
  ArrowRight,
  BookOpen,
  Check,
  CheckCircle2,
  GraduationCap,
  Heart,
  Languages,
  Music,
  Phone,
  Rocket,
  Scissors,
  Sparkles,
  Star,
  Trophy,
  UsersRound,
  Zap,
} from 'lucide-react'
import WhatsAppLink from './WhatsAppLink.jsx'
import { BharatanatyamIcon, SilambamIcon } from './ActivityIcons.jsx'
import { business } from '../data/content.js'

const mascotIcons = {
  star: Star,
  rocket: Rocket,
  trophy: Trophy,
  grad: GraduationCap,
}

const copy = {
  en: {
    classes: {
      eyebrow: 'ACADEMIC EXCELLENCE',
      title: 'Tuition for Classes 2 to 12',
      intro: 'Structured academic coaching with personal attention, conceptual clarity, and rigorous exam preparation across State Board and CBSE curricula.',
      groups: [
        {
          range: 'Classes 2–5',
          label: 'Primary Foundation',
          stage: 'Junior Stars',
          tag: 'Concept & Habits',
          theme: 'grade-theme-amber',
          mascot: 'star',
          highlights: ['Neat Handwriting & Reading', 'Fun Mental Maths Tricks', 'Joyful Learning Habits'],
          description: 'Strengthen everyday learning habits, handwriting, mental maths, reading fluency, and core foundational basics in an encouraging, fun environment.',
          enquiryMsg: 'Hello Universe Tuition, I would like to enquire about Classes 2–5 primary tuition admissions and batch timings.',
        },
        {
          range: 'Classes 6–8',
          label: 'Middle School',
          stage: 'Young Explorers',
          tag: 'Conceptual Clarity',
          theme: 'grade-theme-sky',
          mascot: 'rocket',
          highlights: ['Maths & Science Logic', 'Step-by-Step Problem Solving', 'Zero Doubt Friendly Class'],
          description: 'Bridge textbook theories with practical problem-solving. Strong focus on Mathematics, Science, and Language mastery with patient mentoring.',
          enquiryMsg: 'Hello Universe Tuition, I would like to enquire about Classes 6–8 middle school tuition admissions and batch timings.',
        },
        {
          range: 'Classes 9–10',
          label: 'Secondary & Boards',
          stage: 'Board Champions',
          tag: 'Board Exam Focus',
          theme: 'grade-theme-emerald',
          mascot: 'trophy',
          highlights: ['Past 10-Yr Question Papers', 'State Board & CBSE Focus', 'Score Booster Strategies'],
          description: 'Thorough syllabus coverage, regular chapter-wise tests, past paper problem solving, and confidence building for high school board exams.',
          enquiryMsg: 'Hello Universe Tuition, I would like to enquire about Classes 9–10 Board exam coaching batches and timings.',
        },
        {
          range: 'Classes 11–12',
          label: 'Higher Secondary',
          stage: 'Future Achievers',
          tag: 'Career Foundations',
          theme: 'grade-theme-purple',
          mascot: 'grad',
          highlights: ['Commerce & Science Streams', 'Subject Expert Coaching', 'College & Career Mentorship'],
          description: 'In-depth coaching for Maths, Physics, Chemistry, Biology, Commerce, Accountancy, and Business Maths with individual doubt clearance.',
          enquiryMsg: 'Hello Universe Tuition, I would like to enquire about Classes 11–12 Higher Secondary tuition batches and timings.',
        },
      ],
      boardsTitle: 'Curricula Supported',
      boardsList: ['State Board (TN)', 'CBSE', 'ICSE (11–12)', 'IGCSE / ISE (10–12 Maths & Science)'],
      subjectsTitle: 'Subjects Covered',
      subjectsList: [
        'Mathematics',
        'Physics',
        'Chemistry',
        'Biology',
        'Accountancy',
        'Commerce',
        'Business Maths',
      ],
      note: 'Batch timings and subject slots are arranged based on class requirements. Enquire to confirm availability for your grade.',
      cta: 'Enquire for Your Class',
    },
    tailoring: {
      eyebrow: 'CREATIVE VOCATIONAL SKILLS',
      title: 'Practical Tailoring & Stitching Academy',
      intro: 'Hands-on practical training designed for beginners and aspiring fashion designers. Learn from scratch with supportive personal mentoring.',
      steps: [
        {
          num: '01',
          title: 'Machine & Stitch Basics',
          desc: 'Master sewing machine operation, pedal control, threading, needle types, tension adjustment, and core hand stitches.',
        },
        {
          num: '02',
          title: 'Measurements & Drafting',
          desc: 'Learn precise tape measurements, paper pattern drafting, seam allowances, and cloth cutting without fabric wastage.',
        },
        {
          num: '03',
          title: 'Garment Construction',
          desc: 'Sew standard blouses, designer necklines, lining attachments, princess cut blouses, and churidhar stitching.',
        },
        {
          num: '04',
          title: 'Aari & Bridal Finishing',
          desc: 'Master Aari embroidery, zardosi, beadwork, neat piping, hook/eye attachment, and professional boutique finishing.',
        },
      ],
      cta: 'Enquire About Tailoring Coaching',
    },
    activities: {
      eyebrow: 'HOLISTIC DEVELOPMENT',
      title: 'Extra-Curricular Classes & Activities',
      intro: 'Enriching arts, physical culture, and communication classes conducted at affordable fees in Avaniyapuram.',
      items: [
        { name: 'Bharatanatyam', desc: 'Classical South Indian dance form building rhythm, poise, and cultural expression.', icon: BharatanatyamIcon },
        { name: 'Silambam', desc: 'Traditional martial art fostering agility, self-defense, focus, and physical fitness.', icon: SilambamIcon },
        { name: 'Keyboard / Music', desc: 'Learn keyboard notation, ear training, rhythm, and popular melodic compositions.', icon: Music },
        { name: 'Yoga & Aerobics', desc: 'Breathwork, flexibility, stamina, and mental calm for children and adults.', icon: Heart },
        { name: 'Spoken Hindi', desc: 'Conversational fluency, daily vocabulary, grammar essentials, and speaking confidence.', icon: Languages },
        { name: 'Spoken English', desc: 'Public speaking, daily communication, pronunciation, and vocabulary enrichment.', icon: Languages },
      ],
      cta: 'Ask About Activity Schedules',
    },
    teacher: {
      eyebrow: 'DEDICATED MENTORSHIP',
      title: 'Meet Your Centre Contact',
      intro: 'Friendly, patient, and experienced guidance for every learner. We believe students thrive when learning in an encouraging, doubt-friendly environment.',
      contact: 'S. Uma Maheswari',
      role: 'Centre Director & Head Instructor · Avaniyapuram, Madurai',
      highlights: [
        'Over 10 years of consistent teaching experience',
        'Individual doubt-clearing and patient mentoring',
        'Hands-on practical guidance for tailoring and academic mastery',
      ],
      cta: 'Talk to Uma Maheswari on WhatsApp',
    },
    join: {
      eyebrow: 'HOW TO GET STARTED',
      title: 'Enroll in 3 Simple Steps',
      intro: 'Start your journey with a quick WhatsApp chat or visit to the centre.',
      steps: [
        {
          num: '01',
          title: 'Send a Quick Message',
          desc: 'Tell us your student’s class, board, or the specific tailoring skill you want to learn.',
        },
        {
          num: '02',
          title: 'Confirm Batch & Timings',
          desc: 'We will share current batch timings, curriculum coverage, and affordable fee details.',
        },
        {
          num: '03',
          title: 'Visit & Begin Learning',
          desc: 'Drop by our centre at Avaniyapuram, Madurai to meet the teacher and begin classes.',
        },
      ],
      cta: 'Start WhatsApp Enquiry Now',
    },
  },
  ta: {
    classes: {
      eyebrow: 'சிறந்த கல்விப் பயிற்சி',
      title: '2 முதல் 12 ஆம் வகுப்பு வரை பயிற்சி வகுப்புகள்',
      intro: 'மாநிலப் பாடத்திட்டம் மற்றும் CBSE மாணவர்களுக்கு தனிப்பட்ட கவனிப்புடன் கூடிய தரமான கல்வி.',
      groups: [
        {
          range: '2–5 ஆம் வகுப்புகள்',
          label: 'தொடக்கநிலை அடித்தளம்',
          stage: 'தொடக்கநிலை நட்சத்திரங்கள்',
          tag: 'அடிப்படை பழக்கங்கள்',
          theme: 'grade-theme-amber',
          mascot: 'star',
          highlights: ['அழகிய கையெழுத்துப் பயிற்சி', 'எளிய மனக்கணக்கு நுணுக்கங்கள்', 'ஆர்வமூட்டும் வாசிப்புப் பழக்கம்'],
          description: 'அடிப்படை கற்றல் பழக்கங்கள், அழகிய கையெழுத்து, மனக்கணக்கு மற்றும் வாசிப்புத் திறனை அன்பான வழிகாட்டலில் மகிழ்ச்சியாக வலுப்படுத்துங்கள்.',
          enquiryMsg: 'வணக்கம் Universe Tuition, 2 முதல் 5 ஆம் வகுப்பு வரை சேர்க்கை மற்றும் நேரம் பற்றி அறிய விரும்புகிறேன்.',
        },
        {
          range: '6–8 ஆம் வகுப்புகள்',
          label: 'நடுநிலைப் பள்ளி',
          stage: 'இளம் ஆராய்ச்சியாளர்கள்',
          tag: 'பாடப் புரிதல்',
          theme: 'grade-theme-sky',
          mascot: 'rocket',
          highlights: ['கணிதம் & அறிவியல் அடித்தளம்', 'படிமுறைத் தீர்வு காணும் திறன்', 'சந்தேகமில்லா எளிய பயிற்சி'],
          description: 'கணிதம் மற்றும் அறிவியல் பாடங்களில் வலுவான கருத்தியல் தெளிவு மற்றும் படிமுறைத் தீர்வு காணும் திறன் வளர்க்கும் சிறந்த பயிற்சி.',
          enquiryMsg: 'வணக்கம் Universe Tuition, 6 முதல் 8 ஆம் வகுப்பு வரை பயிற்சி வகுப்புகள் பற்றி அறிய விரும்புகிறேன்.',
        },
        {
          range: '9–10 ஆம் வகுப்புகள்',
          label: 'உயர்நிலை & பொதுத்தேர்வு',
          stage: 'தேர்வு சாதனையாளர்கள்',
          tag: 'தேர்வு தயாரிப்பு',
          theme: 'grade-theme-emerald',
          mascot: 'trophy',
          highlights: ['முந்தைய 10 ஆண்டு வினாத்தாள்கள்', 'மாநில & CBSE பாடப்பயிற்சி', 'அதிக மதிப்பெண் உத்திகள்'],
          description: 'முழுமையான பாடத்திட்டப் பயிற்சி, அத்தியாயத் தேர்வுகள், முந்தைய ஆண்டு வினாத்தாள் பயிற்சி மற்றும் பொதுத்தேர்வு தன்னம்பிக்கை.',
          enquiryMsg: 'வணக்கம் Universe Tuition, 9 & 10 ஆம் வகுப்பு பொதுத்தேர்வு பயிற்சி வகுப்புகள் பற்றி அறிய விரும்புகிறேன்.',
        },
        {
          range: '11–12 ஆம் வகுப்புகள்',
          label: 'மேல்நிலை கல்வி',
          stage: 'எதிர்கால வெற்றியாளர்கள்',
          tag: 'எதிர்கால அடித்தளம்',
          theme: 'grade-theme-purple',
          mascot: 'grad',
          highlights: ['கணிதம், அறிவியல் & வணிகவியல்', 'சிறப்புப் பாட வல்லுநர் பயிற்சி', 'கல்லூரி & வேலைவாய்ப்பு வழிகாட்டல்'],
          description: 'கணிதம், இயற்பியல், வேதியியல், உயிரியல், கணக்கியல், வணிகவியல் மற்றும் வணிகக் கணிதப் பயிற்சி தனிப்பட்ட கவனத்துடன்.',
          enquiryMsg: 'வணக்கம் Universe Tuition, 11 & 12 ஆம் வகுப்பு மேல்நிலைக் கல்வி பயிற்சி பற்றி அறிய விரும்புகிறேன்.',
        },
      ],
      boardsTitle: 'பாடத்திட்டங்கள்',
      boardsList: ['மாநிலப் பாடத்திட்டம் (State Board)', 'CBSE', 'ICSE (11–12)', 'IGCSE / ISE (10–12 கணிதம் & அறிவியல்)'],
      subjectsTitle: 'கற்பிக்கப்படும் பாடங்கள்',
      subjectsList: [
        'கணிதம்',
        'இயற்பியல்',
        'வேதியியல்',
        'உயிரியல்',
        'கணக்கியல்',
        'வணிகவியல்',
        'வணிகக் கணிதம்',
      ],
      note: 'வகுப்பைப் பொறுத்து பாடங்களும் நேரமும் ஒதுக்கப்படுகின்றன. உங்கள் வகுப்புக்கான இடங்களை உறுதிப்படுத்த விசாரிக்கவும்.',
      cta: 'உங்கள் வகுப்பு பற்றி விசாரிக்கவும்',
    },
    tailoring: {
      eyebrow: 'நடைமுறைத் தொழில் நுணுக்கங்கள்',
      title: 'தையல் & ஆடை வடிவமைப்புப் பயிற்சி',
      intro: 'ஆரம்பநிலை கற்போருக்கும் ஏற்ற எளிய, நடைமுறைப் பயிற்சி. அனுபவம் வாய்ந்த ஆசிரியரின் நேரடி வழிகாட்டலில் தைக்கக் கற்றுக்கொள்ளுங்கள்.',
      steps: [
        {
          num: '01',
          title: 'இயந்திரம் & தையல் அடிப்படைகள்',
          desc: 'தையல் இயந்திர இயக்கம், பெடல் கட்டுப்பாடு, நூல் கோர்த்தல் மற்றும் கைத்தையல் அடிப்படைகளை அறிந்துகொள்ளுங்கள்.',
        },
        {
          num: '02',
          title: 'அளவெடுத்தல் & பேட்டர்ன்',
          desc: 'சரியான உடல் அளவுகள் எடுத்தல், பேப்பர் கட்டிங் மற்றும் துணி வீணாகாமல் வெட்டும் முறைகள்.',
        },
        {
          num: '03',
          title: 'ஆடை உருவாக்கம் & தைத்தல்',
          desc: 'பிளவுஸ், சுடிதார், சல்வார், பிரின்சஸ் கட் பிளவுஸ் மற்றும் டிசைனர் கழுத்து அமைப்புகள் தைக்கும் பயிற்சி.',
        },
        {
          num: '04',
          title: 'ஆரி வேலைப்பாடு & பினிஷிங்',
          desc: 'ஆரி எம்பிராய்டரி, மணிகள் வேலை, பைப்பிங் மற்றும் நேர்த்தியான பொட்டிக் பினிஷிங் முறைகள்.',
        },
      ],
      cta: 'தையல் பயிற்சி பற்றி விசாரிக்கவும்',
    },
    activities: {
      eyebrow: 'முழுமையான திறன் வளர்ச்சி',
      title: 'கூடுதல் கலை & உடற்பயிற்சி வகுப்புகள்',
      intro: 'அவனியாபுரத்தில் மலிவான கட்டணத்தில் நடத்தப்படும் பல்துறை திறன் பயிற்சி வகுப்புகள்.',
      items: [
        { name: 'பரதநாட்டியம்', desc: 'பாரம்பரிய நடனக் கலை, தாளம் மற்றும் உடல் நெகிழ்வுத்தன்மை பயிற்சி.', icon: BharatanatyamIcon },
        { name: 'Silambam (சிலம்பம்)', desc: 'பாரம்பரிய தற்காப்புக் கலை, சுறுசுறுப்பு மற்றும் தன்னம்பிக்கை.', icon: SilambamIcon },
        { name: 'கீபோர்டு / இசை', desc: 'இசை ஸ்வரங்கள், மெலோடி வாசித்தல் மற்றும் இசையறிவு வளர்ச்சி.', icon: Music },
        { name: 'யோகா & ஏரோபிக்ஸ்', desc: 'உடல் நலம், மன அமைதி, சுவாசப் பயிற்சி மற்றும் உடற்பயிற்சி.', icon: Heart },
        { name: 'இந்தி பேச்சுப் பயிற்சி', desc: 'அன்றாட உரையாடல், எளிய இலக்கணம் மற்றும் சரளமாகப் பேசும் பயிற்சி.', icon: Languages },
        { name: 'ஆங்கிலப் பேச்சுப் பயிற்சி', desc: 'தன்னம்பிக்கையுடன் பேசும் திறன், உச்சரிப்பு மற்றும் சொற்களஞ்சியம்.', icon: Languages },
      ],
      cta: 'வகுப்பு நேரம் குறித்து கேளுங்கள்',
    },
    teacher: {
      eyebrow: 'அன்பான வழிகாட்டுதல்',
      title: 'மையத்தின் நேரடித் தொடர்பு',
      intro: 'ஒவ்வொரு மாணவருக்கும் பொறுமையாகவும் உற்சாகத்துடனும் கற்பிக்கும் அன்பான சூழல்.',
      contact: 'S. Uma Maheswari',
      role: 'மைய இயக்குநர் & தலைமைப் பயிற்றுநர் · அவனியாபுரம், மதுரை',
      highlights: [
        '10 ஆண்டுகளுக்கும் மேலான தொடர்ச்சியான கற்பித்தல் அனுபவம்',
        'தனிப்பட்ட சந்தேக நிவர்த்தி மற்றும் அக்கறையான அணுகுமுறை',
        'தையல் மற்றும் பள்ளிப் பாடங்களில் நேரடி நடைமுறைப் பயிற்சி',
      ],
      cta: 'வாட்ஸ்அப்பில் ஆசிரியரிடம் பேசவும்',
    },
    join: {
      eyebrow: 'சேர்வது எப்படி',
      title: '3 எளிய படிகளில் வகுப்பில் இணையுங்கள்',
      intro: 'ஒரு சிறிய வாட்ஸ்அப் செய்தி அல்லது தொலைபேசி அழைப்பு மூலம் உங்கள் கற்றலைத் தொடங்குங்கள்.',
      steps: [
        {
          num: '01',
          title: 'தொடர்புகொள்ளுங்கள்',
          desc: 'மாணவரின் வகுப்பு, பாடத்திட்டம் அல்லது நீங்கள் கற்க விரும்பும் தையல் பிரிவைத் தெரிவியுங்கள்.',
        },
        {
          num: '02',
          title: 'நேரத்தையும் கட்டணத்தையும் அறியுங்கள்',
          desc: 'தற்போதைய வகுப்பு நேரம் மற்றும் குறைவான கட்டண விவரங்களைப் பெறுங்கள்.',
        },
        {
          num: '03',
          title: 'மையத்திற்கு வந்து தொடங்குங்கள்',
          desc: 'அவனியாபுரத்தில் உள்ள எங்கள் மையத்திற்கு நேரில் வந்து ஆசிரியரைச் சந்தித்து வகுப்பைத் தொடங்குங்கள்.',
        },
      ],
      cta: 'இப்போதே விசாரிக்கத் தொடங்குங்கள்',
    },
  },
}

export default function LearningSections({ language, message }) {
  const c = copy[language] || copy.en

  return (
    <>
      {/* Classes Breakdown Section */}
      <section className="grade-section section-pad" id="classes" aria-labelledby="grade-title">
        <div className="page-width">
          <div className="section-title text-center mx-auto">
            <div className="eyebrow-badge">
              <span className="eyebrow-dot" />
              <span>{c.classes.eyebrow}</span>
            </div>
            <h2 id="grade-title">{c.classes.title}</h2>
            <p className="section-intro">{c.classes.intro}</p>
          </div>

          <div className="grade-grid">
            {c.classes.groups.map((item, index) => {
              const Mascot = mascotIcons[item.mascot] || Star
              return (
                <article className={`grade-card ${item.theme}`} key={item.range}>
                  <div className="grade-card-top">
                    <div className="grade-mascot-avatar" aria-hidden="true">
                      <Mascot size={22} />
                    </div>
                    <div className="grade-top-meta">
                      <span className="grade-card-badge">{item.tag}</span>
                      <span className="grade-stage-pill">{language === 'en' ? `Stage 0${index + 1}` : `படி 0${index + 1}`}</span>
                    </div>
                  </div>

                  <div className="grade-card-body">
                    <h3 className="grade-card-range">{item.range}</h3>
                    <div className="grade-stage-title">
                      <span className="grade-stage-name">{item.stage}</span>
                      <span className="grade-stage-dot">·</span>
                      <span className="grade-card-label">{item.label}</span>
                    </div>

                    <p className="grade-description">{item.description}</p>

                    <div className="grade-chips-list">
                      {item.highlights.map((h) => (
                        <span key={h} className="grade-chip-item">
                          <CheckCircle2 size={13} aria-hidden="true" />
                          <span>{h}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  <WhatsAppLink
                    className="grade-card-btn"
                    message={item.enquiryMsg}
                    icon={true}
                    label={`${language === 'en' ? 'Enquire' : 'விசாரிக்க'} ${item.range}`}
                  >
                    <span>{language === 'en' ? `Enquire ${item.range}` : `${item.range} விசாரிக்க`}</span>
                    <ArrowRight size={14} aria-hidden="true" />
                  </WhatsAppLink>
                </article>
              )
            })}
          </div>

          <div className="grade-details-box">
            <div className="grade-detail-col">
              <h4>
                <GraduationCap size={18} />
                <span>{c.classes.boardsTitle}</span>
              </h4>
              <div className="curriculum-pills">
                {c.classes.boardsList.map((board) => (
                  <span key={board} className="curriculum-pill">
                    <CheckCircle2 size={14} />
                    {board}
                  </span>
                ))}
              </div>
            </div>

            <div className="grade-detail-col">
              <h4>
                <BookOpen size={18} />
                <span>{c.classes.subjectsTitle}</span>
              </h4>
              <div className="subject-pills">
                {c.classes.subjectsList.map((sub) => (
                  <span key={sub} className="subject-pill">
                    {sub}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grade-footer-cta">
            <p className="grade-note">{c.classes.note}</p>
            <WhatsAppLink className="button button-green button-large" message={message} icon={true}>
              {c.classes.cta}
              <ArrowRight size={17} />
            </WhatsAppLink>
          </div>
        </div>
      </section>

      {/* Tailoring Practical Roadmap Section */}
      <section className="path-section section-pad" id="tailoring" aria-labelledby="path-title">
        <div className="page-width">
          <div className="path-container-box">
            <div className="section-title text-center mx-auto">
              <div className="eyebrow-badge eyebrow-badge-rose">
                <span className="eyebrow-dot" />
                <span>{c.tailoring.eyebrow}</span>
              </div>
              <h2 id="path-title">{c.tailoring.title}</h2>
              <p className="section-intro">{c.tailoring.intro}</p>
            </div>

            <div className="path-grid">
              {c.tailoring.steps.map((step) => (
                <article className="path-card" key={step.num}>
                  <div className="path-card-header">
                    <span className="path-step-num">{step.num}</span>
                    <div className="path-icon-wrap">
                      <Scissors size={20} />
                    </div>
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </article>
              ))}
            </div>

            <div className="path-cta-wrap text-center">
              <WhatsAppLink className="button button-green button-large" message={message} icon={true}>
                {c.tailoring.cta}
                <ArrowRight size={17} />
              </WhatsAppLink>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="activities-section section-pad" id="activities" aria-labelledby="activities-title">
        <div className="page-width">
          <div className="activities-layout">
            <div className="activities-intro">
              <span className="eyebrow">{c.activities.eyebrow}</span>
              <h2 id="activities-title">{c.activities.title}</h2>
              <p>{c.activities.intro}</p>
              <WhatsAppLink className="button button-green" message={message} icon={true}>
                {c.activities.cta}
                <ArrowRight size={16} />
              </WhatsAppLink>
            </div>

            <div className="activities-grid">
              {c.activities.items.map((act) => {
                const IconComponent = act.icon
                return (
                  <div className="activity-card" key={act.name}>
                    <div className="activity-icon-badge">
                      <IconComponent size={22} />
                    </div>
                    <div>
                      <h3 className="activity-name">{act.name}</h3>
                      <p className="activity-desc">{act.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Teacher / Mentor Profile Section */}
      <section className="teacher-section section-pad" id="teacher" aria-labelledby="teacher-title">
        <div className="page-width">
          <div className="teacher-card">
            <div className="teacher-avatar-col">
              <div className="teacher-mark" aria-hidden="true">
                <UsersRound size={36} />
              </div>
              <div className="teacher-badge-tag">Lead Instructor</div>
            </div>

            <div className="teacher-copy">
              <span className="eyebrow">{c.teacher.eyebrow}</span>
              <h2 id="teacher-title">{c.teacher.contact}</h2>
              <p className="teacher-role">{c.teacher.role}</p>
              <p className="teacher-bio">{c.teacher.intro}</p>

              <ul className="teacher-highlights">
                {c.teacher.highlights.map((hl) => (
                  <li key={hl}>
                    <CheckCircle2 size={16} />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>

              <div className="teacher-actions">
                <WhatsAppLink className="button button-green" message={message} icon={true}>
                  {c.teacher.cta}
                  <ArrowRight size={16} />
                </WhatsAppLink>
                <a className="button button-outline" href={`tel:${business.phoneLink}`}>
                  <Phone size={16} />
                  <span>{business.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Join / 3 Steps */}
      <section className="steps-section section-pad" id="how-to-join" aria-labelledby="join-title">
        <div className="page-width">
          <div className="section-title text-center mx-auto">
            <span className="eyebrow">{c.join.eyebrow}</span>
            <h2 id="join-title">{c.join.title}</h2>
            <p>{c.join.intro}</p>
          </div>

          <div className="join-grid">
            {c.join.steps.map((st) => (
              <article className="join-card" key={st.num}>
                <span className="join-step-badge">Step {st.num}</span>
                <div className="join-check-icon">
                  <Check size={20} />
                </div>
                <h3>{st.title}</h3>
                <p>{st.desc}</p>
              </article>
            ))}
          </div>

          <div className="join-cta-wrap text-center">
            <WhatsAppLink className="button button-green button-large" message={message} icon={true}>
              {c.join.cta}
              <ArrowRight size={17} />
            </WhatsAppLink>
          </div>
        </div>
      </section>
    </>
  )
}
