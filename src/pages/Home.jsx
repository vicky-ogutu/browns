import { Link } from 'react-router-dom'
import CtaBanner from '../components/CtaBanner'
import Icon from '../components/Icon'
import SectionHeading from '../components/SectionHeading'
import { highlights, images, labTests, services, site, stats } from '../data/site'

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-900">
      <img
        src={images.admin}
        alt="Browns Memorial Medical Center main building, SHA accredited"
        className="absolute inset-y-0 right-0 -z-10 h-full w-full object-cover object-[40%_center] md:w-1/2 md:[mask-image:linear-gradient(to_right,transparent,black_35%)]"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-900/90 from-10% via-brand-900/70 via-45% to-brand-900/10" />
      <div className="container-x py-24 [text-shadow:0_1px_12px_rgb(8_47_82/0.6)] sm:py-32 lg:py-40">
        <div className="max-w-2xl md:max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-400 ring-1 ring-white/20 backdrop-blur">
            <Icon name="shield" className="h-4 w-4" /> SHA Accredited Facility
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Compassionate care for <span className="text-accent-400">every stage</span> of life.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-brand-100">
            At {site.name}, our clinicians, midwives and laboratory team work together to give you
            accurate diagnosis, safe deliveries and caring treatment — all under one roof.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link to="/appointment" className="btn-accent"><Icon name="calendar" className="h-5 w-5" /> Book an Appointment</Link>
            <Link to="/services" className="btn-outline">Explore Our Services <Icon name="arrow" className="h-4 w-4" /></Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function InfoStrip() {
  const items = [
    { icon: 'phone', title: 'Emergency Line', text: site.emergencyPhone, href: site.emergencyHref, tone: 'bg-care-500' },
    { icon: 'clock', title: 'Opening Hours', text: 'OPD Mon–Sat 8am–6pm · Maternity 24/7', tone: 'bg-brand-700' },
    { icon: 'calendar', title: 'Appointments', text: 'Book online in under a minute', to: '/appointment', tone: 'bg-accent-500' },
  ]
  return (
    <section className="relative z-10 -mt-12">
      <div className="container-x grid gap-4 md:grid-cols-3">
        {items.map((it) => {
          const inner = (
            <>
              <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl text-white ${it.tone}`}>
                <Icon name={it.icon} className="h-6 w-6" />
              </span>
              <span>
                <span className="block font-display font-bold text-slate-900">{it.title}</span>
                <span className="block text-sm text-slate-600">{it.text}</span>
              </span>
            </>
          )
          const cls = 'card flex items-center gap-4 p-6 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl'
          if (it.href) return <a key={it.title} href={it.href} className={cls}>{inner}</a>
          if (it.to) return <Link key={it.title} to={it.to} className={cls}>{inner}</Link>
          return <div key={it.title} className={cls}>{inner}</div>
        })}
      </div>
    </section>
  )
}

function AboutPreview() {
  return (
    <section className="py-24">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        <div className="relative">
          <img src={images.maternity} alt="Entrance to the BMMC maternity theatre" className="aspect-[4/3] w-full rounded-3xl object-cover shadow-xl" />
          <img
            src={images.minorTheatre}
            alt="The BMMC minor theatre"
            className="absolute -bottom-8 -right-4 hidden w-40 rounded-2xl border-4 border-white object-cover shadow-xl sm:block lg:w-48"
          />
          <div className="absolute -left-4 top-8 rounded-2xl bg-white px-5 py-4 shadow-xl">
            <p className="font-display text-3xl font-extrabold text-brand-700">24/7</p>
            <p className="text-xs font-medium text-slate-500">Maternity cover</p>
          </div>
        </div>
        <div>
          <SectionHeading
            eyebrow="About BMMC"
            title="A trusted community hospital, built around you"
            text="Browns Memorial Medical Center brings essential healthcare closer to the families we serve. From antenatal visits and safe deliveries to fast laboratory results and minor procedures, we combine skilled people with clean, well-organised facilities."
          />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {['Skilled clinicians & midwives', 'On-site laboratory', 'Maternity & minor theatres', 'SHA-accredited services'].map((t) => (
              <li key={t} className="flex items-center gap-3 text-slate-700">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-brand-50 text-brand-700"><Icon name="check" className="h-4 w-4" /></span>
                {t}
              </li>
            ))}
          </ul>
          <Link to="/about" className="btn-primary mt-10">Learn More About Us <Icon name="arrow" className="h-4 w-4" /></Link>
        </div>
      </div>
    </section>
  )
}

function ServicesGrid() {
  return (
    <section className="bg-brand-50/60 py-24">
      <div className="container-x">
        <SectionHeading
          center
          eyebrow="Our Services"
          title="Comprehensive care under one roof"
          text="Everything you and your family need for everyday and specialised healthcare."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link key={s.slug} to={`/services/${s.slug}`} className="card group overflow-hidden transition hover:-translate-y-1 hover:shadow-xl">
              <div className="relative h-48 overflow-hidden">
                <img src={s.card ?? s.image} alt="" className={`h-full w-full object-cover ${s.cardPosition ?? 'object-center'} transition duration-500 group-hover:scale-105`} />
                <span className="absolute bottom-4 left-4 grid h-12 w-12 place-items-center rounded-xl bg-white text-brand-700 shadow-md">
                  <Icon name={s.icon} className="h-6 w-6" />
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.summary}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-700">
                  Learn more <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function Stats() {
  return (
    <section className="bg-brand-800 py-16">
      <div className="container-x grid grid-cols-2 gap-8 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-display text-4xl font-extrabold text-accent-400 sm:text-5xl">{s.value}</p>
            <p className="mt-2 text-sm text-brand-100">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function WhyUs() {
  return (
    <section className="py-24">
      <div className="container-x grid items-center gap-14 lg:grid-cols-5">
        <div className="relative lg:col-span-2">
          <img
            src={images.community}
            alt="Portrait of a smiling woman from the community we serve"
            className="aspect-[4/5] w-full rounded-3xl object-cover object-top shadow-xl"
          />
          <div className="absolute -bottom-6 left-6 right-6 rounded-2xl bg-white p-5 shadow-xl sm:left-auto sm:w-64">
            <p className="font-display text-lg font-bold italic text-brand-800">&ldquo;{site.tagline}&rdquo;</p>
            <p className="mt-1 text-xs font-medium text-slate-500">Serving every generation of our community</p>
          </div>
        </div>
        <div className="lg:col-span-3">
          <SectionHeading eyebrow="Why Choose BMMC" title="Care you can count on" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {highlights.map((h) => (
              <div key={h.title} className="card p-6">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent-500/10 text-accent-600">
                  <Icon name={h.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-lg font-bold">{h.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">{h.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function LabPreview() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <SectionHeading
            eyebrow="Laboratory"
            title="Fast, reliable test results"
            text="Our in-house laboratory and dedicated phlebotomy area mean most routine results are ready the same visit — so treatment can begin sooner."
          />
          <div className="mt-8 flex flex-wrap gap-2">
            {labTests.slice(0, 10).map((t) => (
              <span key={t} className="rounded-full border border-brand-100 bg-white px-3 py-1.5 text-xs font-medium text-brand-800">{t}</span>
            ))}
            <span className="rounded-full bg-brand-700 px-3 py-1.5 text-xs font-semibold text-white">+{labTests.length - 10} more</span>
          </div>
          <Link to="/services/laboratory" className="btn-primary mt-10">View All Lab Tests <Icon name="arrow" className="h-4 w-4" /></Link>
        </div>
        <img src={images.lab} alt="BMMC laboratory test board and phlebotomy area" className="order-1 aspect-[16/10] w-full rounded-3xl object-cover shadow-xl lg:order-2" />
      </div>
    </section>
  )
}

function TourCard() {
  const previews = [
    { src: images.maternity, label: 'Maternity theatre' },
    { src: images.lab, label: 'Laboratory' },
    { src: images.minorTheatre, label: 'Minor theatre', position: 'object-[center_12%]' },
  ]
  return (
    <section className="pt-24">
      <div className="container-x">
        <Link
          to="/gallery"
          className="card group grid overflow-hidden transition hover:-translate-y-1 hover:shadow-xl md:grid-cols-2"
        >
          <div className="relative h-64 overflow-hidden md:h-auto md:min-h-[360px]">
            <img
              src={images.gate}
              alt="Browns Memorial Medical Centre main gate"
              className="absolute inset-0 h-full w-full object-cover object-[5%_center] transition duration-500 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col justify-center p-8 sm:p-12">
            <p className="eyebrow">Facility Tour</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight">See where you&rsquo;ll be cared for</h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              Take a look around BMMC before your visit, from our maternity and minor theatres to the laboratory and
              patient waiting areas.
            </p>
            <div className="mt-6 flex gap-3">
              {previews.map((p) => (
                <img
                  key={p.label}
                  src={p.src}
                  alt={p.label}
                  className={`h-16 w-20 rounded-lg object-cover ${p.position ?? 'object-center'}`}
                />
              ))}
            </div>
            <span className="mt-8 inline-flex items-center gap-2 font-semibold text-brand-700">
              Take the tour <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
            </span>
          </div>
        </Link>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <InfoStrip />
      <AboutPreview />
      <ServicesGrid />
      <Stats />
      <WhyUs />
      <LabPreview />
      <TourCard />
      <CtaBanner image={images.admin} />
    </>
  )
}
