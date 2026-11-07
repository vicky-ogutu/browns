import { Link } from 'react-router-dom'
import Icon from './Icon'
import Logo from './Logo'
import { navLinks, services, site } from '../data/site'

const YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-brand-100">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-5">
          <Logo light />
          <p className="font-display text-base font-semibold italic text-accent-400">&ldquo;{site.tagline}&rdquo;</p>
          <p className="text-sm leading-relaxed text-brand-200">
            {site.name} is a SHA-accredited facility providing compassionate, quality healthcare for mothers, children and families.
          </p>
          <span className="inline-flex items-center gap-2 rounded-full border border-accent-400/50 px-3 py-1 text-xs font-semibold text-accent-400">
            <Icon name="shield" className="h-4 w-4" /> SHA Accredited Facility
          </span>
        </div>

        <div>
          <h3 className="mb-5 text-base font-bold text-white">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            {[...navLinks, { to: '/appointment', label: 'Book Appointment' }].map((l) => (
              <li key={l.to}><Link to={l.to} className="hover:text-white">{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-base font-bold text-white">Our Services</h3>
          <ul className="space-y-3 text-sm">
            {services.map((s) => (
              <li key={s.slug}><Link to={`/services/${s.slug}`} className="hover:text-white">{s.title}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-base font-bold text-white">Contact Us</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3"><Icon name="pin" className="h-5 w-5 shrink-0 text-accent-400" /><span>Located in {site.location}</span></li>
            <li className="flex gap-3">
              <Icon name="phone" className="h-5 w-5 shrink-0 text-accent-400" />
              <span className="flex flex-col gap-1">
                {site.phones.map((p) => (
                  <a key={p.href} href={p.href} className="hover:text-white">{p.display}</a>
                ))}
              </span>
            </li>
            <li className="flex gap-3"><Icon name="mail" className="h-5 w-5 shrink-0 text-accent-400" /><a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a></li>
            <li className="flex gap-3"><Icon name="clock" className="h-5 w-5 shrink-0 text-accent-400" /><span>Maternity &amp; emergencies: 24/7</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-6 text-xs text-brand-200 sm:flex-row">
          <p>&copy; {YEAR} {site.name} ({site.short}). All rights reserved.</p>
          <p>In an emergency, call <a href={site.emergencyHref} className="font-semibold text-white">{site.emergencyPhone}</a></p>
        </div>
      </div>
    </footer>
  )
}
