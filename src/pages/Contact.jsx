import { useState } from 'react'
import Icon from '../components/Icon'
import PageHeader from '../components/PageHeader'
import SectionHeading from '../components/SectionHeading'
import { faqs, images, site } from '../data/site'

function Faq() {
  const [open, setOpen] = useState(0)
  return (
    <div className="space-y-3">
      {faqs.map((f, i) => (
        <div key={f.q} className="card overflow-hidden">
          <button
            type="button"
            onClick={() => setOpen(open === i ? -1 : i)}
            className="flex w-full items-center justify-between gap-4 p-5 text-left font-semibold text-slate-900"
            aria-expanded={open === i}
          >
            {f.q}
            <Icon name="chevron" className={`h-5 w-5 shrink-0 text-brand-700 transition ${open === i ? 'rotate-180' : ''}`} />
          </button>
          {open === i && <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600">{f.a}</p>}
        </div>
      ))}
    </div>
  )
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    const body = `${form.message}\n\n— ${form.name} (${form.email})`
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(form.subject || 'Website enquiry')}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  const cards = [
    { icon: 'phone', title: 'Call Us', links: site.phones },
    { icon: 'mail', title: 'Email Us', lines: [site.email], href: `mailto:${site.email}` },
    { icon: 'pin', title: 'Visit Us', lines: [`Located in ${site.location}`] },
    { icon: 'clock', title: 'Emergencies', lines: ['Maternity & emergencies', 'Open 24 hours'] },
  ]

  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="We're here to help. Reach out with questions, feedback or to plan your visit."
        image={images.gate}
        split
        crumbs={[{ label: 'Contact' }]}
      />

      <section className="py-24">
        <div className="container-x">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((c) => {
              const Tag = c.href ? 'a' : 'div'
              return (
                <Tag key={c.title} href={c.href} className="card p-6 transition hover:shadow-lg">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-700"><Icon name={c.icon} className="h-6 w-6" /></span>
                  <h3 className="mt-4 font-bold">{c.title}</h3>
                  {c.lines?.map((l) => <p key={l} className="text-sm text-slate-600">{l}</p>)}
                  {c.links?.map((l) => (
                    <a key={l.href} href={l.href} className="block text-sm text-slate-600 hover:text-brand-700">{l.display}</a>
                  ))}
                </Tag>
              )
            })}
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-2">
            <div className="card p-6 sm:p-10">
              <h2 className="text-2xl font-bold">Send us a message</h2>
              {sent ? (
                <p className="mt-6 rounded-xl bg-green-50 p-5 text-sm text-green-800">
                  Thank you, {form.name.split(' ')[0]}. Your email app should have opened with your message — press send and we'll reply as soon as possible.
                </p>
              ) : (
                <form onSubmit={submit} className="mt-6 grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="c-name" className="label">Name</label>
                    <input id="c-name" name="name" required value={form.name} onChange={update} className="input" />
                  </div>
                  <div>
                    <label htmlFor="c-email" className="label">Email</label>
                    <input id="c-email" name="email" type="email" required value={form.email} onChange={update} className="input" />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="c-subject" className="label">Subject</label>
                    <input id="c-subject" name="subject" value={form.subject} onChange={update} className="input" />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="c-message" className="label">Message</label>
                    <textarea id="c-message" name="message" rows={5} required value={form.message} onChange={update} className="input" />
                  </div>
                  <div className="sm:col-span-2">
                    <button type="submit" className="btn-primary">Send Message <Icon name="arrow" className="h-4 w-4" /></button>
                  </div>
                </form>
              )}
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
              {site.mapEmbed ? (
                <iframe title="BMMC location map" src={site.mapEmbed} className="h-full min-h-[420px] w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              ) : (
                <div className="relative h-full min-h-[420px]">
                  <img src={images.admin} alt="BMMC main building and gate, SHA accredited" className="absolute inset-0 h-full w-full object-cover object-left" />
                  <div className="absolute inset-0 bg-brand-900/70" />
                  <div className="relative flex h-full flex-col items-center justify-center p-8 text-center text-white [text-shadow:0_1px_12px_rgb(8_47_82/0.9)]">
                    <Icon name="pin" className="h-12 w-12 text-accent-400" />
                    <p className="mt-4 text-xl font-bold">{site.location}</p>
                    <p className="mt-1 text-sm text-brand-100">Look for the black gate marked &ldquo;Browns Memorial Medical Centre&rdquo;.</p>
                    <a
                      href={`https://www.google.com/maps/search/${encodeURIComponent(`${site.name}, ${site.location}`)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-outline mt-6"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="container-x grid gap-12 lg:grid-cols-3">
          <SectionHeading eyebrow="FAQ" title="Frequently asked questions" text="Can't find what you're looking for? Call or message us." />
          <div className="lg:col-span-2"><Faq /></div>
        </div>
      </section>
    </>
  )
}
