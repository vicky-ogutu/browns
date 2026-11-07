import { useEffect, useState } from 'react'
import Icon from '../components/Icon'
import PageHeader from '../components/PageHeader'
import { images } from '../data/site'

const photos = [
  { src: images.building, title: 'Patient Veranda', text: 'A covered, sheltered waiting area at the entrance.', span: 'sm:col-span-2 sm:row-span-2' },
  { src: images.maternity, title: 'Maternity Theatre', text: 'Dedicated theatre for caesarean sections and obstetric care.' },
  { src: images.lab, title: 'Laboratory & Phlebotomy', text: 'In-house lab with a dedicated sample collection area.' },
  { src: images.minorTheatre, title: 'Minor Theatre', text: 'Sterile procedure room for day-case procedures.', span: 'lg:row-span-2' },
  { src: images.dentalMch, title: 'Dental & MCH Clinics', text: 'Dental care and maternal & child health services.', span: 'lg:col-span-2' },
  { src: images.admin, title: 'Main Building & Entrance', text: 'Our SHA-accredited administration and outpatient block.', span: 'sm:col-span-2' },
]

export default function Gallery() {
  const [active, setActive] = useState(null)

  useEffect(() => {
    if (active === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') setActive(null)
      if (e.key === 'ArrowRight') setActive((i) => (i + 1) % photos.length)
      if (e.key === 'ArrowLeft') setActive((i) => (i - 1 + photos.length) % photos.length)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [active])

  return (
    <>
      <PageHeader
        title="Facility Tour"
        subtitle="Take a look inside Browns Memorial Medical Center."
        image={images.gate}
        split
        crumbs={[{ label: 'Facility Tour' }]}
      />
      <section className="py-24">
        <div className="container-x grid auto-rows-[260px] gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((p, i) => (
            <button
              key={p.title}
              type="button"
              onClick={() => setActive(i)}
              className={`group relative overflow-hidden rounded-2xl text-left shadow-md focus-visible:outline-4 focus-visible:outline-brand-500 ${p.span ?? ''}`}
            >
              <img src={p.src} alt={p.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/90 via-brand-900/20 to-transparent" />
              <div className="absolute bottom-0 p-6">
                <h3 className="text-lg font-bold text-white">{p.title}</h3>
                <p className="mt-1 text-sm text-brand-100">{p.text}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={photos[active].title}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setActive(null)}
        >
          <button className="absolute right-4 top-4 rounded-full p-2 text-white hover:bg-white/10" aria-label="Close">
            <Icon name="close" className="h-8 w-8" />
          </button>
          <figure className="max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <img src={photos[active].src} alt={photos[active].title} className="max-h-[80vh] w-auto rounded-xl" />
            <figcaption className="mt-4 text-center text-white">
              <span className="font-semibold">{photos[active].title}</span>
              <span className="text-white/70"> — {photos[active].text}</span>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  )
}
