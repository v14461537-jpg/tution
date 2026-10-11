import { ChevronDown } from 'lucide-react'

const questions = {
  en: [
    ['Which classes do you teach?', 'The centre’s materials list tuition for Classes 2–12. Please ask us to confirm availability for your class and subject.'],
    ['Which boards and subjects are available?', 'State Board and CBSE are listed, along with other curricula in the centre’s materials. Subjects include Mathematics, Physics, Chemistry, Biology, Accountancy, Commerce, and Business Maths. Availability varies by class and subject, so contact us to confirm.'],
    ['Do you offer classes beyond school tuition?', 'The centre’s card also lists Bharatanatyam, Silambam, Keyboard, aerobics, Yoga, Spoken Hindi, and Spoken English. Ask us which activities are currently running.'],
    ['What can I learn in tailoring classes?', 'Practical topics can include machine and hand-stitch basics, taking measurements, fabric preparation and cutting, garment assembly, and finishing. Ask us about the current course and available tailoring services.'],
    ['Where is the centre located?', 'We are at 381/2, Aruppukottai Main Road, C.A.S. Nagar, Avaniyapuram, Madurai, Tamil Nadu 625012. Use the Google Maps link on this page for directions.'],
    ['How do I find out about timings and fees?', 'Send us a WhatsApp message or call +91 98431 53372. We can share current timings, fees, and availability for the class or service you are interested in.'],
  ],
  ta: [
    ['எந்த வகுப்புகளுக்கு பயிற்சி அளிக்கப்படுகிறது?', 'மையத்தின் தகவல் அட்டையில் 2 முதல் 12 ஆம் வகுப்பு வரை பயிற்சி குறிப்பிடப்பட்டுள்ளது. உங்கள் வகுப்பு மற்றும் பாடத்திற்கான தற்போதைய கிடைப்பை எங்களிடம் உறுதிப்படுத்துங்கள்.'],
    ['எந்தப் பாடத்திட்டங்கள் மற்றும் பாடங்கள் உள்ளன?', 'மாநிலப் பாடத்திட்டம் மற்றும் CBSE உள்ளிட்ட பிற பாடத்திட்டங்கள் மையத்தின் தகவல்களில் குறிப்பிடப்பட்டுள்ளன. கணிதம், இயற்பியல், வேதியியல், உயிரியல், கணக்கியல், வணிகவியல் மற்றும் வணிகக் கணிதம் ஆகிய பாடங்களும் பட்டியலிடப்பட்டுள்ளன. வகுப்பு மற்றும் பாடத்தைப் பொறுத்து கிடைப்பது மாறலாம்; தொடர்புகொண்டு உறுதிப்படுத்துங்கள்.'],
    ['பள்ளிப் பாடங்களைத் தவிர வேறு வகுப்புகள் உள்ளனவா?', 'பரதநாட்டியம், சிலம்பம், கீபோர்டு, ஏரோபிக்ஸ், யோகா, இந்தி பேச்சுப் பயிற்சி மற்றும் ஆங்கிலப் பேச்சுப் பயிற்சி ஆகியவையும் மையத்தின் அட்டையில் குறிப்பிடப்பட்டுள்ளன. தற்போது நடைபெறும் வகுப்புகள் எவை என்று கேளுங்கள்.'],
    ['தையல் வகுப்புகளில் என்ன கற்றுக்கொள்ளலாம்?', 'தையல் இயந்திரம் மற்றும் கைத் தையல் அடிப்படைகள், அளவெடுத்தல், துணி தயாரித்தல் மற்றும் வெட்டுதல், ஆடை இணைத்தல், இறுதித் தையல் போன்ற நடைமுறைப் பயிற்சிகள் இருக்கலாம். தற்போதைய பயிற்சி மற்றும் தையல் சேவைகள் குறித்து எங்களிடம் கேளுங்கள்.'],
    ['மையம் எங்கு உள்ளது?', '381/2, அருப்புக்கோட்டை மெயின் ரோடு, C.A.S. நகர், அவனியாபுரம், மதுரை, தமிழ்நாடு 625012 என்ற முகவரியில் உள்ளோம். வழியைப் பெற இந்தப் பக்கத்தில் உள்ள Google Maps இணைப்பைப் பயன்படுத்துங்கள்.'],
    ['வகுப்பு நேரம் மற்றும் கட்டண விவரங்களை எப்படிப் பெறுவது?', '+91 98431 53372 என்ற எண்ணுக்கு WhatsApp செய்தி அனுப்பவும் அல்லது அழைக்கவும். தற்போதைய நேரம், கட்டணம் மற்றும் கிடைப்புகளைப் பகிர்வோம்.'],
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
