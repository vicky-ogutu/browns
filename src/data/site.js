import adminImg from '../assets/images/Browns_Admin.jpeg'
import dentalMchImg from '../assets/images/Dental_MCH.jpeg'
import labImg from '../assets/images/lab.jpeg'
import labPhlebotomyImg from '../assets/images/lab-phlebotomy.jpeg'
import dentalDoorImg from '../assets/images/dental-door.jpeg'
import mchDoorImg from '../assets/images/mch-door.jpeg'
import maternityImg from '../assets/images/maternity.jpeg'
import minorTheatreImg from '../assets/images/minor_theatre.jpeg'
import gateImg from '../assets/images/gate.jpeg'
import buildingImg from '../assets/images/building.jpeg'
import communityImg from '../assets/images/community-portrait.jpg'

export const images = {
  admin: adminImg,
  dentalMch: dentalMchImg,
  lab: labImg,
  maternity: maternityImg,
  minorTheatre: minorTheatreImg,
  gate: gateImg,
  building: buildingImg,
  community: communityImg,
}

// TODO: Add a Google Maps embed URL (mapEmbed) to show a live map on the Contact page.
export const site = {
  name: 'Browns Memorial Medical Center',
  short: 'BMMC',
  tagline: 'We care for your Health',
  // All BMMC phone lines. The first is used wherever only one number fits (header, buttons, WhatsApp).
  phones: [
    { display: '+254 758 255 315', href: 'tel:+254758255315' },
    { display: '+254 768 782 938', href: 'tel:+254768782938' },
    { display: '+254 726 891 506', href: 'tel:+254726891506' },
  ],
  phone: '+254 758 255 315',
  phoneHref: 'tel:+254758255315',
  emergencyPhone: '+254 758 255 315',
  emergencyHref: 'tel:+254758255315',
  whatsappHref: 'https://wa.me/254758255315',
  email: 'brownsmmc@gmail.com',
  location: 'Kiminini Market, Trans Nzoia County',
  mapEmbed: '', // paste a Google Maps embed URL here to show the map on the Contact page
  hours: [
    { day: 'Outpatient (Mon – Sat)', time: '8:00 AM – 6:00 PM' },
    { day: 'Sunday & Public Holidays', time: '9:00 AM – 2:00 PM' },
    { day: 'Maternity & Emergencies', time: 'Open 24 hours' },
  ],
}

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Facility Tour' },
  { to: '/contact', label: 'Contact' },
]

export const services = [
  {
    slug: 'maternity',
    title: 'Maternity & Delivery',
    icon: 'baby',
    image: maternityImg,
    summary:
      'Safe, dignified childbirth supported by skilled midwives and a dedicated maternity theatre for caesarean sections.',
    description:
      'Our maternity unit walks with mothers from the first antenatal visit through labour, delivery and postnatal recovery. Normal deliveries are handled by experienced midwives, and our dedicated maternity theatre is ready for caesarean sections and obstetric emergencies around the clock.',
    features: [
      'Normal and assisted deliveries',
      'Dedicated maternity theatre for caesarean sections',
      'Labour monitoring and postnatal care',
      'Newborn assessment and care',
      'Breastfeeding support and counselling',
      '24-hour maternity cover',
    ],
  },
  {
    slug: 'mch',
    title: 'Maternal & Child Health (MCH)',
    icon: 'heart',
    image: dentalMchImg,
    banner: mchDoorImg, // MCH door crop for the page banner
    card: mchDoorImg,
    cardPosition: 'object-[center_20%]',
    bannerPosition: 'object-[center_25%]',
    summary:
      'Antenatal clinics, immunisation, growth monitoring and family planning — healthy mother, healthy baby.',
    description:
      'The MCH clinic is the heart of our preventive care. We support women through pregnancy with focused antenatal care, and follow children through their early years with immunisation, growth monitoring and nutrition advice. Family planning services and counselling are offered in a private, respectful setting.',
    features: [
      'Antenatal care (ANC) and ANC profile testing',
      'Childhood immunisation (KEPI schedule)',
      'Growth monitoring and nutrition counselling',
      'Family planning services',
      'Postnatal checks for mother and baby',
      'Health education for families',
    ],
  },
  {
    slug: 'laboratory',
    title: 'Laboratory Services',
    icon: 'flask',
    image: labImg,
    banner: labPhlebotomyImg, // phlebotomy doorway crop, shown on the right of the page banner
    bannerPosition: 'object-top',
    summary:
      'An on-site laboratory and phlebotomy area delivering accurate results quickly — most tests are ready the same day.',
    description:
      'Our in-house laboratory supports fast, confident diagnosis. Samples are collected in a dedicated phlebotomy area and many routine tests are ready within minutes, so you can see your clinician and start treatment in the same visit.',
    features: [
      'Dedicated phlebotomy (sample collection) area',
      'Rapid malaria, typhoid and brucella testing',
      'Full haemogram, blood sugar and haemoglobin',
      'Pregnancy, ANC profile and HIV testing',
      'Urinalysis and stool microscopy',
      'Blood grouping and cross-matching',
    ],
  },
  {
    slug: 'dental',
    title: 'Dental Care',
    icon: 'tooth',
    image: dentalMchImg,
    banner: dentalDoorImg, // Dental door crop for the page banner
    card: dentalDoorImg,
    cardPosition: 'object-[center_20%]',
    bannerPosition: 'object-[center_25%]',
    summary:
      'Check-ups, cleaning, fillings and extractions for the whole family in a calm, clean dental clinic.',
    description:
      'Good oral health is part of good overall health. Our dental clinic offers preventive and restorative care for children and adults, with an emphasis on gentle treatment and clear explanations.',
    features: [
      'Dental check-ups and consultations',
      'Scaling and polishing',
      'Fillings',
      'Tooth extractions',
      'Treatment of dental pain and infections',
      'Oral hygiene education',
    ],
  },
  {
    slug: 'minor-theatre',
    title: 'Minor Theatre & Procedures',
    icon: 'scalpel',
    image: minorTheatreImg,
    bannerPosition: 'object-[center_15%]', // keep the MINOR THEATRE sign in view
    cardPosition: 'object-[center_12%]',
    summary:
      'A sterile minor theatre for day procedures — wound care, incision and drainage, suturing and more.',
    description:
      'Many procedures do not require a hospital admission. Our minor theatre provides a clean, well-equipped space for day-case procedures performed by trained clinicians, so you can be treated and go home the same day.',
    features: [
      'Wound dressing and suturing',
      'Incision and drainage of abscesses',
      'Removal of foreign bodies and lumps',
      'Circumcision',
      'Minor trauma management',
      'Sterile, well-lit procedure room',
    ],
  },
  {
    slug: 'outpatient',
    title: 'Outpatient & General Medicine',
    icon: 'stethoscope',
    image: adminImg,
    banner: buildingImg, // veranda photo for the page banner
    summary:
      'Walk-in consultations for adults and children, chronic disease follow-up and referrals when you need them.',
    description:
      'Our outpatient department is the first stop for most patients. Our clinicians assess, diagnose and treat common illnesses, manage chronic conditions such as hypertension and diabetes, and coordinate referrals to specialist care when needed.',
    features: [
      'General consultations for all ages',
      'Hypertension and diabetes follow-up',
      'Treatment of infections and common illnesses',
      'Health check-ups and medical examinations',
      'Referrals to specialist facilities',
      'SHA-covered services',
    ],
  },
]

export const labTests = [
  'B/S for Malaria Parasites (MPs)',
  'Brucella Antigen Test',
  'Salmonella Antigen Test (SAT)',
  'E.S.R.',
  'Urinalysis (U/A)',
  'Rheumatoid Factor (R/F)',
  'Pregnancy Diagnostic Test (PDT)',
  'Haemoglobin Estimation (Hb)',
  'Blood Sugar (FBS / RBS)',
  'Helicobacter pylori (H. pylori)',
  'Stool for Microscopy',
  'A.S.O.T.',
  'Blood Grouping',
  'V.D.R.L.',
  'Full Haemogram (FBC / CBC)',
  'Sickling Test',
  'ANC Profile',
  'HIV Testing',
  'Group & Cross-match (GXM)',
]

export const stats = [
  { value: '24/7', label: 'Maternity & emergency cover' },
  { value: '6+', label: 'Core clinical services' },
  { value: '19+', label: 'In-house lab tests' },
  { value: 'SHA', label: 'Accredited facility' },
]

export const values = [
  { title: 'Compassion', text: 'We treat every patient with kindness, dignity and respect.', icon: 'heart' },
  { title: 'Excellence', text: 'We follow sound clinical standards and keep improving.', icon: 'award' },
  { title: 'Integrity', text: 'We are honest, transparent and accountable in all we do.', icon: 'shield' },
  { title: 'Community', text: 'We are rooted in, and committed to, the people we serve.', icon: 'users' },
]

export const highlights = [
  { title: 'SHA Accredited', text: 'Use your Social Health Authority cover for eligible services.', icon: 'shield' },
  { title: 'Results in Minutes', text: 'On-site laboratory means faster diagnosis and treatment.', icon: 'clock' },
  { title: '24-Hour Maternity', text: 'Midwives and a maternity theatre ready day and night.', icon: 'baby' },
  { title: 'Clean & Safe', text: 'Well-kept, sterile facilities with strict infection control.', icon: 'sparkle' },
]

export const faqs = [
  {
    q: 'Is Browns Memorial Medical Center SHA accredited?',
    a: 'Yes. BMMC is accredited by the Social Health Authority (SHA). Please bring your ID so we can verify your SHA membership at registration.',
  },
  {
    q: 'Do I need an appointment?',
    a: 'Walk-ins are welcome at our outpatient department. Booking ahead for dental, MCH and procedure visits helps us reduce your waiting time.',
  },
  {
    q: 'Is the maternity unit open at night?',
    a: 'Yes. Our maternity unit and maternity theatre provide 24-hour cover. Come straight in or call our emergency line on the way.',
  },
  {
    q: 'How long do lab results take?',
    a: 'Most routine tests, such as malaria, blood sugar and pregnancy tests, are ready within minutes to an hour. More detailed tests may take longer — our lab team will advise you.',
  },
  {
    q: 'What payment options do you accept?',
    a: 'We accept SHA, M-Pesa and cash. Contact us to confirm whether your private insurance is accepted.',
  },
]
