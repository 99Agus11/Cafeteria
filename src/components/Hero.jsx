import { useState, useEffect } from 'react'
import { HERO_SLIDES } from '../data'

export default function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const t = setTimeout(
      () => setCurrent(c => (c + 1) % HERO_SLIDES.length),
      5000,
    )
    return () => clearTimeout(t)
  }, [current])

  const slide = HERO_SLIDES[current]

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center overflow-hidden"
      style={{ height: '100svh', minHeight: '600px' }}
    >
      {/* Slides */}
      {HERO_SLIDES.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-[1200ms] ease-in-out"
          style={{
            backgroundImage: `url(${s.img})`,
            opacity: i === current ? 1 : 0,
            zIndex: i === current ? 1 : 0,
          }}
        />
      ))}

      {/* Overlay */}
      <div
        className="absolute inset-0 z-[2]"
        style={{
          background:
            'linear-gradient(to bottom, rgba(18,11,7,0.55) 0%, rgba(18,11,7,0.3) 40%, rgba(18,11,7,0.8) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-[3] text-center px-6 max-w-[800px]">
        <span className="block text-[0.75rem] tracking-[0.25em] uppercase text-gold mb-5">
          Cafetería de Especialidad · Desde 2018
        </span>
        <h1
          className="font-serif text-cream leading-[1.05] mb-5"
          style={{
            fontSize: 'clamp(3rem, 8vw, 6.5rem)',
            textShadow: '0 4px 40px rgba(0,0,0,0.5)',
          }}
        >
          {slide.title}{' '}
          <em className="italic text-gold-light">{slide.italic}</em>
        </h1>
        <p
          className="font-light text-cream/80 mb-10 leading-relaxed"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}
        >
          {slide.sub}
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#menu"
            className="bg-gold text-espresso px-9 py-4 font-sans text-[0.85rem] font-medium tracking-[0.12em] uppercase rounded-sm no-underline transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
          >
            Ver Menú
          </a>
          <a
            href="#about"
            className="bg-transparent text-cream px-9 py-4 font-sans text-[0.85rem] font-normal tracking-[0.12em] uppercase rounded-sm border border-cream/50 no-underline transition-all duration-200 hover:border-cream"
          >
            Nuestra Historia
          </a>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-9 left-1/2 -translate-x-1/2 z-[4] flex gap-2.5">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            aria-label={`Slide ${i + 1}`}
            onClick={() => setCurrent(i)}
            className={`h-1.5 border-0 cursor-pointer transition-all duration-300 ${
              i === current
                ? 'w-[22px] rounded-[3px] bg-gold'
                : 'w-1.5 rounded-full bg-cream/30'
            }`}
          />
        ))}
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-9 right-10 z-[4] text-cream/40 text-[0.7rem] tracking-[0.15em] uppercase hidden md:flex items-center gap-2.5"
        style={{ writingMode: 'vertical-rl' }}
      >
        Scroll
        <span className="block w-px h-10 bg-cream/20" />
      </div>
    </section>
  )
}
