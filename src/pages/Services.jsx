import { Link } from 'react-router-dom'
import CtaBanner from '../components/CtaBanner'
import Icon from '../components/Icon'
import PageHeader from '../components/PageHeader'
import { images, services } from '../data/site'

export default function Services() {
  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="Preventive, diagnostic and treatment services for mothers, children and the whole family."
        image={images.maternity}
        split
        imagePosition="object-[center_70%]"
        crumbs={[{ label: 'Services' }]}
      />
      <section className="py-24">
        <div className="container-x space-y-20">
          {services.map((s, i) => (
            <article key={s.slug} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <img
                src={s.image}
                alt={s.title}
                className={`aspect-[16/10] w-full rounded-3xl object-cover shadow-lg ${i % 2 ? 'lg:order-2' : ''}`}
              />
              <div>
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-50 text-brand-700">
                  <Icon name={s.icon} className="h-7 w-7" />
                </span>
                <h2 className="mt-5 text-3xl font-extrabold">{s.title}</h2>
                <p className="mt-4 text-lg leading-relaxed text-slate-600">{s.summary}</p>
                <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                  {s.features.slice(0, 4).map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
                      <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-accent-600" /> {f}
                    </li>
                  ))}
                </ul>
                <Link to={`/services/${s.slug}`} className="btn-ghost mt-8">
                  Learn more <Icon name="arrow" className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CtaBanner image={images.admin} />
    </>
  )
}
