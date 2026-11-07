import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Icon from './Icon'
import Logo from './Logo'
import { navLinks, site } from '../data/site'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkClass = ({ isActive }) =>
    `rounded-full px-4 py-2 text-sm font-medium transition ${
      isActive ? 'bg-brand-50 text-brand-700' : 'text-slate-600 hover:text-brand-700'
    }`

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar */}
      <div className="hidden bg-brand-900 text-brand-100 md:block">
        <div className="container-x flex h-10 items-center justify-between text-xs">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2"><Icon name="pin" className="h-4 w-4" />{site.location}</span>
            <span className="flex items-center gap-2"><Icon name="clock" className="h-4 w-4" />Maternity &amp; emergencies open 24/7</span>
          </div>
          <div className="flex items-center gap-6">
            <a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-white"><Icon name="mail" className="h-4 w-4" />{site.email}</a>
            <span className="rounded-full bg-accent-500 px-3 py-0.5 font-semibold text-white">SHA Accredited</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className={`border-b bg-white/95 backdrop-blur transition-shadow ${scrolled ? 'border-slate-200 shadow-md' : 'border-transparent'}`}>
        <div className="container-x flex h-20 items-center justify-between gap-4">
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {navLinks.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.to === '/'} className={linkClass}>
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a href={site.emergencyHref} className="flex items-center gap-2 text-sm font-semibold text-care-500">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-red-50"><Icon name="phone" className="h-4 w-4" /></span>
              <span className="leading-tight">
                <span className="block text-[10px] font-medium uppercase tracking-wider text-slate-500">Emergency</span>
                {site.emergencyPhone}
              </span>
            </a>
            <Link to="/appointment" className="btn-accent">Book Appointment</Link>
          </div>

          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-lg text-brand-800 hover:bg-brand-50 lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <Icon name={open ? 'close' : 'menu'} className="h-7 w-7" />
          </button>
        </div>

        {open && (
          <div id="mobile-menu" className="border-t border-slate-200 bg-white lg:hidden">
            <nav className="container-x flex flex-col gap-1 py-4" aria-label="Mobile" onClick={(e) => e.target.closest('a') && setOpen(false)}>
              {navLinks.map((l) => (
                <NavLink key={l.to} to={l.to} end={l.to === '/'} className={linkClass}>
                  {l.label}
                </NavLink>
              ))}
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <a href={site.emergencyHref} className="btn border border-red-200 text-care-500">
                  <Icon name="phone" className="h-4 w-4" /> Emergency: {site.emergencyPhone}
                </a>
                <Link to="/appointment" className="btn-accent">Book Appointment</Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
