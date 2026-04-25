import { useEffect, useRef } from 'react'
import { Instagram } from 'lucide-react'
import { GALLERY_IMGS } from '../data'

export default function Gallery() {
  const ref = useRef(null)
  useEffect(() => {
    if (!ref.current) return
    const targets = ref.current.querySelectorAll('.fade-up')
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) }
      }),
      { threshold: 0.1 },
    )
    targets.forEach(t => observer.observe(t))
    return () => observer.disconnect()
  })

  const stagger = ['stagger-1', 'stagger-2', 'stagger-3', 'stagger-4']

  return (
    <section id="galeria" className="max-w-[1200px] mx-auto px-6 pt-[100px] md:pt-[100px]" ref={ref}>
      <div className="text-center mb-12">
        <span className="fade-up block text-[0.72rem] tracking-[0.25em] uppercase text-gold mb-3.5">
          Síguenos
        </span>
        <h2 className="fade-up font-serif text-cream leading-[1.15]" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
          @alma.cafe
        </h2>
        <p className="fade-up text-muted leading-relaxed mt-3 font-light max-w-[520px] mx-auto">
          Momentos que valen más que mil palabras. Y un buen café.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {GALLERY_IMGS.map((src, i) => (
          <div
            key={i}
            className={`fade-up ${stagger[i % 4]} relative cursor-pointer overflow-hidden`}
            style={{ aspectRatio: '1' }}
          >
            <img
              src={src}
              alt={`Galería ${i + 1}`}
              loading="lazy"
              className="w-full h-full object-cover block transition-transform duration-500 hover:scale-[1.05]"
            />
            <div className="absolute inset-0 bg-espresso/55 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
              <Instagram color="white" size={28} strokeWidth={1.5} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
