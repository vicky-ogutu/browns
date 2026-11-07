import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="py-32">
      <div className="container-x text-center">
        <p className="font-display text-7xl font-extrabold text-brand-700">404</p>
        <h1 className="mt-4 text-3xl font-bold">Page not found</h1>
        <p className="mt-3 text-slate-600">Sorry, we couldn't find the page you were looking for.</p>
        <Link to="/" className="btn-primary mt-8">Back to Home</Link>
      </div>
    </section>
  )
}
