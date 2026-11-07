import { Link, useParams } from 'react-router-dom'
import CtaBanner from '../components/CtaBanner'
import Icon from '../components/Icon'
import PageHeader from '../components/PageHeader'
import NotFound from './NotFound'
import { images, labTests, services, site } from '../data/site'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find((s) => s.slug === slug)
  if (!service) return <NotFound />

  return (
    <>
      <PageHeader
        title={service.title}
        subtitle={service.summary}
        image={service.banner ?? service.image}
        split
        imagePosition={service.bannerPosition}
        crumbs={[{ label: 'Services', to: '/services' }, { label: service.title }]}
      />

      <section className="py-24">
        <div className="container-x grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <img src={service.image} alt={service.title} className="aspect-[16/9] w-full rounded-3xl object-cover shadow-lg" />
            <h2 className="mt-10 text-3xl font-extrabold">About this service</h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">{service.description}</p>

            <h3 className="mt-10 text-2xl font-bold">What we offer</h3>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {service.features.map((f) => (
                <li key={f} className="flex items-start gap-3 rounded-xl border border-slate-200 p-4">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-700"><Icon name="check" className="h-4 w-4" /></span>
                  <span className="text-slate-700">{f}</span>
                </li>
              ))}
            </ul>

            {service.slug === 'laboratory' && (
              <>
                <h3 className="mt-12 text-2xl font-bold">Tests available</h3>
                <p className="mt-2 text-slate-600">Most routine results are ready within minutes to an hour. Ask our lab team for exact turnaround times.</p>
                <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-brand-700 text-white">
                      <tr><th className="w-16 px-5 py-3 font-semibold">No.</th><th className="px-5 py-3 font-semibold">Test</th></tr>
                    </thead>
                    <tbody>
                      {labTests.map((t, i) => (
                        <tr key={t} className="border-t border-slate-100 even:bg-slate-50">
                          <td className="px-5 py-3 text-slate-500">{i + 1}</td>
                          <td className="px-5 py-3 font-medium text-slate-800">{t}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            )}
          </div>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="card p-6">
              <h3 className="text-lg font-bold">All Services</h3>
              <ul className="mt-4 space-y-1">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link
                      to={`/services/${s.slug}`}
                      className={`flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium transition ${
                        s.slug === slug ? 'bg-brand-700 text-white' : 'text-slate-700 hover:bg-brand-50'
                      }`}
                    >
                      {s.title} <Icon name="arrow" className="h-4 w-4" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-brand-800 p-6 text-white">
              <h3 className="text-lg font-bold text-white">Need help?</h3>
              <p className="mt-2 text-sm text-brand-100">Talk to our team or book a visit online.</p>
              <a href={site.phoneHref} className="mt-5 flex items-center gap-3 text-lg font-bold">
                <Icon name="phone" className="h-5 w-5 text-accent-400" /> {site.phone}
              </a>
              <Link to={`/appointment?service=${service.slug}`} className="btn-accent mt-5 w-full">Book Appointment</Link>
            </div>
          </aside>
        </div>
      </section>
      {/* Avoid repeating the maternity photo when it's already the page banner */}
      <CtaBanner image={service.slug === 'maternity' ? images.admin : undefined} />
    </>
  )
}
