import { useEffect, useRef } from 'react'

function useFadeUp() {
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
  return ref
}

export default function About() {
  const ref = useFadeUp()

  return (
    <section id="about" className="max-w-[1200px] mx-auto px-6 py-[100px] md:py-[100px] py-[72px]" ref={ref}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* Image */}
        <div className="relative fade-up">
          <img
            src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&auto=format&fit=crop&q=80"
            alt="Barista preparando café"
            loading="lazy"
            className="w-full object-cover rounded-sm"
            style={{ aspectRatio: '3/4' }}
          />
          <div className="absolute -bottom-6 right-0 md:-right-6 w-[100px] h-[100px] rounded-full bg-gold text-espresso flex flex-col items-center justify-center font-serif leading-tight">
            <span className="text-[1.6rem] font-bold">7+</span>
            <span className="text-[0.55rem] tracking-[0.12em] uppercase text-center">años de pasión</span>
          </div>
        </div>

        {/* Text */}
        <div>
          <span className="fade-up block text-[0.72rem] tracking-[0.25em] uppercase text-gold mb-3.5">
            Nuestra Historia
          </span>
          <h2 className="fade-up font-serif text-cream leading-[1.15]" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
            Café con <em className="italic text-gold-light">propósito</em>,<br />servido con alma.
          </h2>
          <div className="fade-up w-10 h-px bg-gold my-6" />
          <p className="fade-up text-muted leading-relaxed max-w-[520px] mt-3.5 font-light">
            Nacimos en 2018 con una sola certeza: el café de especialidad merecía un espacio donde la calidad y la calidez coexistan sin compromiso.
          </p>
          <p className="fade-up text-muted leading-relaxed max-w-[520px] mt-3.5 font-light">
            Trabajamos directamente con productores de origen en Colombia, Etiopía y Guatemala. Cada grano tiene nombre, historia y un terroir único que expresamos en cada preparación.
          </p>
          <div className="fade-up flex flex-wrap gap-8 mt-10">
            {[['12', 'Orígenes activos'], ['4.9', 'Rating promedio'], ['300+', 'Clientes/día']].map(([num, label]) => (
              <div key={label}>
                <span className="font-serif text-[2.5rem] text-gold block">{num}</span>
                <span className="text-[0.78rem] text-muted tracking-[0.05em]">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
