import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Icon from '../components/Icon'
import PageHeader from '../components/PageHeader'
import { images, services, site } from '../data/site'

const today = () => new Date().toISOString().split('T')[0]

export default function Appointment() {
  const [params] = useSearchParams()
  const initialService = services.some((s) => s.slug === params.get('service')) ? params.get('service') : ''
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: initialService, date: '', time: '', payment: 'SHA', notes: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Please enter your full name.'
    if (!/^\+?[0-9\s-]{9,15}$/.test(form.phone.trim())) e.phone = 'Please enter a valid phone number.'
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Please enter a valid email address.'
    if (!form.service) e.service = 'Please choose a service.'
    if (!form.date) e.date = 'Please choose a preferred date.'
    return e
  }

  const submit = (e) => {
    e.preventDefault()
    const found = validate()
    setErrors(found)
    if (Object.keys(found).length) return
    const serviceTitle = services.find((s) => s.slug === form.service)?.title
    const message = [
      `Appointment request — ${site.short}`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.email && `Email: ${form.email}`,
      `Service: ${serviceTitle}`,
      `Preferred date: ${form.date}${form.time ? ` (${form.time})` : ''}`,
      `Payment: ${form.payment}`,
      form.notes && `Notes: ${form.notes}`,
    ].filter(Boolean).join('\n')
    window.open(`${site.whatsappHref}?text=${encodeURIComponent(message)}`, '_blank', 'noopener')
    setSent(true)
  }

  const field = (name) => (errors[name] ? 'input border-red-400 focus:border-red-500 focus:ring-red-100' : 'input')
  const err = (name) => errors[name] && <p className="mt-1 text-xs text-red-600">{errors[name]}</p>

  return (
    <>
      <PageHeader
        title="Book an Appointment"
        subtitle="Choose a service and a time that suits you. Our team will confirm your booking."
        image={images.admin}
        split
        crumbs={[{ label: 'Book Appointment' }]}
      />

      <section className="py-24">
        <div className="container-x grid gap-10 lg:grid-cols-3">
          <div className="card p-6 sm:p-10 lg:col-span-2">
            {sent ? (
              <div className="py-12 text-center">
                <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-green-100 text-green-600"><Icon name="check" className="h-8 w-8" /></span>
                <h2 className="mt-6 text-2xl font-bold">Thank you, {form.name.split(' ')[0]}!</h2>
                <p className="mx-auto mt-3 max-w-md text-slate-600">
                  Your request has been prepared in WhatsApp — please press send to share it with us. Our team will
                  call you on <strong>{form.phone}</strong> to confirm. If WhatsApp did not open, call us on{' '}
                  <a href={site.phoneHref} className="font-semibold text-brand-700">{site.phone}</a>.
                </p>
                <button type="button" onClick={() => { setSent(false); setForm((f) => ({ ...f, notes: '' })) }} className="btn-ghost mt-8">
                  Make another booking
                </button>
              </div>
            ) : (
              <form onSubmit={submit} noValidate className="grid gap-6 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <h2 className="text-2xl font-bold">Your details</h2>
                  <p className="mt-1 text-sm text-slate-500">Fields marked * are required.</p>
                </div>
                <div>
                  <label htmlFor="name" className="label">Full name *</label>
                  <input id="name" name="name" value={form.name} onChange={update} className={field('name')} autoComplete="name" />
                  {err('name')}
                </div>
                <div>
                  <label htmlFor="phone" className="label">Phone number *</label>
                  <input id="phone" name="phone" type="tel" value={form.phone} onChange={update} className={field('phone')} placeholder="07XX XXX XXX" autoComplete="tel" />
                  {err('phone')}
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="label">Email (optional)</label>
                  <input id="email" name="email" type="email" value={form.email} onChange={update} className={field('email')} autoComplete="email" />
                  {err('email')}
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="service" className="label">Service *</label>
                  <select id="service" name="service" value={form.service} onChange={update} className={field('service')}>
                    <option value="">Select a service…</option>
                    {services.map((s) => <option key={s.slug} value={s.slug}>{s.title}</option>)}
                  </select>
                  {err('service')}
                </div>
                <div>
                  <label htmlFor="date" className="label">Preferred date *</label>
                  <input id="date" name="date" type="date" min={today()} value={form.date} onChange={update} className={field('date')} />
                  {err('date')}
                </div>
                <div>
                  <label htmlFor="time" className="label">Preferred time</label>
                  <select id="time" name="time" value={form.time} onChange={update} className="input">
                    <option value="">Any time</option>
                    <option>Morning (8am – 12pm)</option>
                    <option>Afternoon (12pm – 4pm)</option>
                    <option>Evening (4pm – 6pm)</option>
                  </select>
                </div>
                <fieldset className="sm:col-span-2">
                  <legend className="label">Payment method</legend>
                  <div className="flex flex-wrap gap-3">
                    {['SHA', 'M-Pesa / Cash', 'Private Insurance'].map((p) => (
                      <label key={p} className={`cursor-pointer rounded-full border px-4 py-2 text-sm font-medium transition ${form.payment === p ? 'border-brand-700 bg-brand-700 text-white' : 'border-slate-300 text-slate-700 hover:border-brand-500'}`}>
                        <input type="radio" name="payment" value={p} checked={form.payment === p} onChange={update} className="sr-only" />
                        {p}
                      </label>
                    ))}
                  </div>
                </fieldset>
                <div className="sm:col-span-2">
                  <label htmlFor="notes" className="label">Reason for visit / notes</label>
                  <textarea id="notes" name="notes" rows={4} value={form.notes} onChange={update} className="input" placeholder="Briefly describe your symptoms or what you need help with." />
                </div>
                <div className="sm:col-span-2">
                  <button type="submit" className="btn-accent w-full sm:w-auto"><Icon name="calendar" className="h-5 w-5" /> Request Appointment</button>
                  <p className="mt-3 text-xs text-slate-500">Submitting opens WhatsApp with your request pre-filled. For emergencies, do not wait — call {site.emergencyPhone}.</p>
                </div>
              </form>
            )}
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl bg-care-500 p-6 text-white">
              <h3 className="text-lg font-bold text-white">Emergency?</h3>
              <p className="mt-2 text-sm text-red-50">Don't book online — call us now or come straight in. Maternity is open 24/7.</p>
              <a href={site.emergencyHref} className="mt-4 flex items-center gap-2 text-xl font-bold"><Icon name="phone" className="h-5 w-5" /> {site.emergencyPhone}</a>
            </div>
            <div className="card p-6">
              <h3 className="text-lg font-bold">Opening hours</h3>
              <ul className="mt-4 space-y-3 text-sm">
                {site.hours.map((h) => (
                  <li key={h.day} className="flex justify-between gap-4 border-b border-slate-100 pb-3 last:border-0">
                    <span className="text-slate-600">{h.day}</span>
                    <span className="text-right font-semibold text-slate-900">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card p-6">
              <h3 className="text-lg font-bold">What to bring</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {['National ID (for SHA verification)', 'Clinic / ANC booklet if you have one', 'Any previous results or prescriptions', 'Child health card for MCH visits'].map((t) => (
                  <li key={t} className="flex gap-2"><Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-accent-600" />{t}</li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
