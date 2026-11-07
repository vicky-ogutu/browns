import { Link } from 'react-router-dom'

export default function PageHeader({ title, subtitle, image, imagePosition = 'object-center', split = false, crumbs = [] }) {
  return (
    <section className="relative isolate overflow-hidden bg-brand-900">
      {image && (
        <img
          src={image}
          alt=""
          className={`absolute inset-y-0 right-0 -z-10 h-full object-cover ${imagePosition} ${
            split ? 'w-full md:w-1/2 md:[mask-image:linear-gradient(to_right,transparent,black_35%)]' : 'w-full'
          }`}
        />
      )}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-900/90 from-10% via-brand-900/70 via-45% to-brand-900/10" />
      <div className="container-x py-20 [text-shadow:0_1px_12px_rgb(8_47_82/0.6)] sm:py-24">
        <nav aria-label="Breadcrumb" className="mb-4 text-sm text-brand-200">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            {crumbs.map((c) => (
              <li key={c.label} className="flex items-center gap-2">
                <span aria-hidden="true">/</span>
                {c.to ? <Link to={c.to} className="hover:text-white">{c.label}</Link> : <span className="text-white">{c.label}</span>}
              </li>
            ))}
          </ol>
        </nav>
        <h1 className={`${split ? 'max-w-xl' : 'max-w-3xl'} text-4xl font-extrabold text-white sm:text-5xl`}>{title}</h1>
        {subtitle && <p className={`mt-4 ${split ? 'max-w-xl' : 'max-w-2xl'} text-lg text-brand-100`}>{subtitle}</p>}
      </div>
    </section>
  )
}
