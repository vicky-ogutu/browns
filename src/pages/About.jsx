import CtaBanner from '../components/CtaBanner'
import Icon from '../components/Icon'
import PageHeader from '../components/PageHeader'
import SectionHeading from '../components/SectionHeading'
import { images, site, stats, values } from '../data/site'

export default function About() {
  return (
    <>
      <PageHeader
        title="About Browns Memorial Medical Center"
        subtitle="A community-focused, SHA-accredited facility dedicated to quality, compassionate healthcare."
        image={images.gate}
        split
        crumbs={[{ label: 'About Us' }]}
      />

      <section className="py-24">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <div className="relative">
            <img src={images.admin} alt="BMMC main building, SHA accredited" className="w-full rounded-3xl object-cover shadow-xl" />
            <img src={images.building} alt="BMMC building entrance and veranda" className="absolute -bottom-8 -right-4 hidden w-56 rounded-2xl border-4 border-white object-cover shadow-xl sm:block" />
          </div>
          <div>
            <SectionHeading eyebrow="Who We Are" title="Caring for our community, one family at a time" />
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-600">
              <p>
                {site.name} ({site.short}) is a healthcare facility committed to making quality medical services
                accessible, affordable and dignified. Our team of clinicians, midwives, nurses, dental and laboratory
                staff serve patients of all ages.
              </p>
              <p>
                Our facility includes an outpatient department, a maternal and child health (MCH) clinic, a dental
                clinic, an in-house laboratory with a dedicated phlebotomy area, a minor theatre and a maternity theatre
                — so most of your healthcare needs can be met in one place.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-50/60 py-24">
        <div className="container-x grid gap-6 md:grid-cols-2">
          <div className="card p-10">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-700 text-white"><Icon name="heart" className="h-7 w-7" /></span>
            <h3 className="mt-6 text-2xl font-bold">Our Mission</h3>
            <p className="mt-3 leading-relaxed text-slate-600">
              To provide safe, compassionate and quality healthcare that is accessible to every member of our
              community, with special attention to the health of mothers and children.
            </p>
          </div>
          <div className="card p-10">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-accent-500 text-white"><Icon name="sparkle" className="h-7 w-7" /></span>
            <h3 className="mt-6 text-2xl font-bold">Our Vision</h3>
            <p className="mt-3 leading-relaxed text-slate-600">
              To be the most trusted healthcare provider in our region — known for excellence, integrity and care
              that puts people first.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-x">
          <SectionHeading center eyebrow="Our Values" title="What guides everything we do" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-slate-200 p-8 transition hover:border-brand-200 hover:shadow-lg">
                <Icon name={v.icon} className="h-9 w-9 text-brand-700" />
                <h3 className="mt-5 text-lg font-bold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-800 py-16">
        <div className="container-x grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-4xl font-extrabold text-accent-400">{s.value}</p>
              <p className="mt-2 text-sm text-brand-100">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
