import { ChevronDown } from 'lucide-react'

const questions = {
  en: [
    ['Which classes and subjects do you teach in tuition?', 'We teach students from Classes 2 to 12. For Classes 10, 11, and 12, we specialize in Mathematics, Physics, Chemistry, and Accountancy. For Classes 2–10, we cover foundational Maths, Science, Social, and Languages with personal attention.'],
    ['Which boards are covered (ICSE, IGCSE, CBSE, State Board)?', 'Yes! We offer dedicated coaching for ICSE, IGCSE, CBSE, ISE, and Tamil Nadu State Board curricula. Teaching is concept-focused with regular chapter tests, revision, and board exam preparation.'],
    ['What courses are offered in tailoring and Aari work?', 'We provide 100% practical, hands-on training for Salwar Kameez (Straight, Anarkali, Patiala, Palazzo), designer Aari blouse stitching, Zardosi, stone work, pattern cutting, and garment finishing with placement support.'],
    ['Do you offer Hindi exams and Bharatanatyam classes?', 'Yes! We conduct Central Hindi Directorate courses (Certificate, Diploma, Advanced Diploma), Dakshina Bharat Hindi Prachar Sabha exams (all 8 levels from Prathmic to Praveen), Spoken English, and authentic Bharatanatyam dance classes from age 4 to adults.'],
    ['Where is the centre located in Avaniyapuram, Madurai?', 'We are conveniently located at 381/2, Aruppukottai Main Road, C.A.S. Nagar, Avaniyapuram, Madurai, Tamil Nadu 625012. You can click "Get Directions" on this page to navigate directly via Google Maps.'],
    ['How do I enquire about batch timings and fees?', 'You can tap any WhatsApp button on this site or call Mrs. S. Umamaheswari directly at +91 98431 53372. We will happily share current batch timings, curriculum coverage, and affordable fee structures.'],
  ],
  ta: [
    ['எந்த வகுப்புகளுக்கு மற்றும் பாடங்களுக்கு பயிற்சி அளிக்கப்படுகிறது?', '2 முதல் 12 ஆம் வகுப்பு வரை உள்ள மாணவர்களுக்கு பயிற்சி அளிக்கிறோம். 10, 11 மற்றும் 12 ஆம் வகுப்புகளுக்கு கணிதம், இயற்பியல், வேதியியல் மற்றும் கணக்கியல் பாடங்களில் சிறப்புப் பயிற்சி வழங்கப்படுகிறது. 2–10 ஆம் வகுப்புகளுக்கு அடிப்படை கணிதம் மற்றும் அறிவியல் பாடங்கள் கற்பிக்கப்படுகின்றன.'],
    ['எந்தெந்தப் பாடத்திட்டங்கள் (ICSE, IGCSE, CBSE, State Board) கற்பிக்கப்படுகின்றன?', 'ஆம்! ICSE, IGCSE, CBSE, ISE மற்றும் தமிழ்நாடு மாநிலப் பாடத்திட்டங்கள் அனைத்திற்கும் தனிப்பயிற்சி வழங்கப்படுகிறது. கருத்து சார்ந்த கற்பித்தல், மாதிரித் தேர்வுகள் மற்றும் பொதுத்தேர்வு வழிகாட்டல் உண்டு.'],
    ['தையல் மற்றும் ஆரி எம்பிராய்டரி வகுப்புகளில் என்னென்ன கற்றுத்தரப்படுகிறது?', 'சுடிதார் (அனார்கலி, பாட்டியாலா, பலாஸோ), டிசைனர் பிளவுஸ் தைத்தல், ஆரி & ஜர்தோசி வேலைப்பாடு, பேட்டர்ன் கட்டிங் மற்றும் பிளவுஸ் பினிஷிங் உள்ளிட்டவை 100% நேரடிப் பயிற்சியாகக் கற்பிக்கப்படுகின்றன.'],
    ['இந்தி சபா தேர்வுகள் மற்றும் பரதநாட்டிய வகுப்புகள் உண்டா?', 'ஆம்! மத்திய இந்தி இயக்ககம் (சான்றிதழ், பட்டயம்), தக்ஷிண பாரத இந்தி பிரச்சார சபா (பிராத்மிக் முதல் பிரவீண் வரை 8 நிலைகள்), ஸ்போக்கன் இங்கிலீஷ் மற்றும் 4 வயது முதல் பெரியவர்கள் வரை பரதநாட்டிய வகுப்புகள் நடைபெறுகின்றன.'],
    ['மையம் அவனியாபுரத்தில் எங்கு அமைந்துள்ளது?', 'எங்கள் மையம் 381/2, அருப்புக்கோட்டை மெயின் ரோடு, C.A.S. நகர், அவனியாபுரம், மதுரை - 625012 என்ற முகவரியில் அமைந்துள்ளது. கூகுள் மேப்ஸ் வழிகாட்டுதல் மூலம் எளிதாக வரலாம்.'],
    ['வகுப்பு நேரம் மற்றும் கட்டண விவரங்களை எப்படி அறிவது?', 'இந்தப் பக்கத்தில் உள்ள வாட்ஸ்அப் பட்டனை கிளிக் செய்யவும் அல்லது திருமதி எஸ். உமாமகேஸ்வரி அவர்களை +91 98431 53372 என்ற எண்ணில் நேரடியாக அழைக்கவும்.'],
  ],
}

export default function Faq({ language }) {
  const tamil = language === 'ta'
  const items = questions[language] || questions.en

  return (
    <section className="faq-section section-pad" id="faq" aria-labelledby="faq-title">
      <div className="page-width faq-layout">
        <div className="faq-intro">
          <p className="eyebrow">{tamil ? 'அடிக்கடி கேட்கப்படும் கேள்விகள்' : 'A FEW HELPFUL ANSWERS'}</p>
          <h2 id="faq-title">{tamil ? 'உங்கள் கேள்விகளுக்கான பதில்கள்' : 'Good to know before you begin'}</h2>
          <p>{tamil ? 'வகுப்புகள், தையல் பயிற்சி, நேரம் மற்றும் கட்டணம் குறித்து மேலும் அறியுங்கள்.' : 'Find quick details about classes, tailoring, timings, and fees.'}</p>
        </div>
        <div className="faq-list">
          {items.map(([question, answer], index) => (
            <details className="faq-item" key={question}>
              <summary><span className="faq-number">0{index + 1}</span><span className="faq-question">{question}</span><ChevronDown size={19} aria-hidden="true" /></summary>
              <div className="faq-answer"><p>{answer}</p></div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
