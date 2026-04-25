import { useEffect, useRef } from 'react'
import { TESTIMONIALS } from '../data'

export default function Testimonials() {
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

  const stagger = ['stagger-1', 'stagger-2', 'stagger-3']

  return (
    <div className="bg-dark-roast">
      <div className="max-w-[1200px] mx-auto px-6 py-[100px] md:py-[100px]" ref={ref}>
        <div className="text-center mb-12">
          <span className="fade-up block text-[0.72rem] tracking-[0.25em] uppercase text-gold mb-3.5">
            Lo que Dicen
          </span>
          <h2 className="fade-up font-serif text-cream leading-[1.15]" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
            Voces que nos <em className="italic text-gold-light">inspiran</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              className={`fade-up ${stagger[i]} p-8 bg-mid-roast rounded border border-muted/[0.08]`}
            >
              <div className="flex gap-1 mb-4 text-gold text-[0.9rem]">{'★'.repeat(t.stars)}</div>
              <p className="font-serif italic text-cream leading-[1.7] mb-5">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  loading="lazy"
                  className="w-[38px] h-[38px] rounded-full object-cover"
                />
                <div>
                  <div className="text-[0.85rem] text-cream font-medium">{t.name}</div>
                  <div className="text-[0.72rem] text-muted">{t.loc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
