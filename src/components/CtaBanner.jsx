import { Link } from 'react-router-dom'
import Icon from './Icon'
import { images, site } from '../data/site'

export default function CtaBanner({ image = images.maternity }) {
  return (
    <section className="py-20">
      <div className="container-x">
        <div className="relative isolate overflow-hidden rounded-3xl bg-brand-900 px-6 py-14 text-center sm:px-16 md:text-left">
          <img
            src={image}
            alt=""
            className="absolute inset-y-0 right-0 -z-10 h-full w-full object-cover md:w-1/2 md:[mask-image:linear-gradient(to_right,transparent,black_35%)]"
          />
          <div
            className="absolute inset-0 -z-10 bg-brand-900/80 md:bg-transparent md:bg-gradient-to-r md:from-brand-900/90 md:from-10% md:via-brand-900/70 md:via-45% md:to-brand-900/10"
            aria-hidden="true"
          />
          <div className="max-w-xl [text-shadow:0_1px_12px_rgb(8_47_82/0.6)] max-md:mx-auto">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Your health is our priority</h2>
            <p className="mt-4 text-lg text-brand-100">
              Book a visit with our team today, or call us any time for maternity and emergency care.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
              <Link to="/appointment" className="btn-accent"><Icon name="calendar" className="h-5 w-5" /> Book an Appointment</Link>
              <a href={site.phoneHref} className="btn-outline"><Icon name="phone" className="h-5 w-5" /> Call {site.phone}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
