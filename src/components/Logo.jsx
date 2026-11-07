import { Link } from 'react-router-dom'
import logo from '../assets/images/bmmc-logo.png'

export default function Logo({ light = false }) {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label="Browns Memorial Medical Center — home">
      <span className={`shrink-0 ${light ? 'rounded-2xl bg-white p-1.5 shadow-md' : ''}`}>
        <img src={logo} alt="BMMC logo — We care for your Health" className={light ? "h-14 w-14 object-contain" : "h-16 w-16 object-contain"} />
      </span>
      <span className="leading-tight">
        <span className={`block font-display text-lg font-extrabold tracking-tight ${light ? 'text-white' : 'text-brand-800'}`}>
          Browns Memorial
        </span>
        <span className={`block text-[11px] font-semibold uppercase tracking-[0.18em] ${light ? 'text-brand-100' : 'text-accent-600'}`}>
          Medical Center
        </span>
      </span>
    </Link>
  )
}
