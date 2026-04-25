import { useState, useEffect, useRef } from 'react'
import { MENU_CATEGORIES, MENU_ITEMS } from '../data'

function useFadeUp(dep) {
  const ref = useRef(null)
  useEffect(() => {
    if (!ref.current) return
    const targets = ref.current.querySelectorAll('.fade-up')
    targets.forEach(t => t.classList.remove('visible'))
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) }
      }),
      { threshold: 0.1 },
    )
    targets.forEach(t => observer.observe(t))
    return () => observer.disconnect()
  }, [dep])
  return ref
}

export default function Menu() {
  const [activeTab, setActiveTab] = useState('Cafés')
  const headerRef = useFadeUp([])
  const gridRef = useFadeUp(activeTab)

  const stagger = ['stagger-1', 'stagger-2', 'stagger-3', 'stagger-4']

  return (
    <div id="menu" className="bg-dark-roast">
      <div className="max-w-[1200px] mx-auto px-6 py-[100px] md:py-[100px]" ref={headerRef}>
        <span className="fade-up block text-[0.72rem] tracking-[0.25em] uppercase text-gold mb-3.5">
          Lo que Servimos
        </span>
        <div className="flex justify-between items-end flex-wrap gap-4">
          <h2 className="fade-up font-serif text-cream leading-[1.15]" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
            Nuestro <em className="italic text-gold-light">Menú</em>
          </h2>
          <p className="fade-up text-[0.82rem] text-muted tracking-[0.05em]">
            Precios en pesos argentinos · incluye IVA
          </p>
        </div>
        <div className="fade-up w-10 h-px bg-gold my-6" />

        {/* Tabs */}
        <div className="fade-up flex border-b border-muted/15 mb-12">
          {MENU_CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-3 text-[0.78rem] tracking-[0.1em] uppercase cursor-pointer border-0 bg-transparent font-sans transition-all duration-200 -mb-px border-b-2 ${
                activeTab === cat
                  ? 'text-cream border-gold'
                  : 'text-muted border-transparent hover:text-cream'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div
          ref={gridRef}
          className="grid gap-6"
          style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))' }}
        >
          {MENU_ITEMS[activeTab].map((item, i) => (
            <div
              key={item.id}
              className={`fade-up ${stagger[i % 4]} bg-mid-roast rounded border border-muted/[0.08] cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]`}
            >
              <div className="overflow-hidden h-[200px]">
                <img
                  src={item.img}
                  alt={item.name}
                  loading="lazy"
                  className="w-full h-full object-cover block transition-transform duration-500 hover:scale-[1.07]"
                />
              </div>
              <div className="p-5">
                <span className="text-[0.65rem] tracking-[0.15em] uppercase text-gold">{item.tag}</span>
                <h3 className="font-serif text-[1.2rem] text-cream mt-1.5 mb-2">{item.name}</h3>
                <p className="text-[0.82rem] text-muted leading-relaxed">{item.desc}</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="font-serif text-[1.3rem] text-gold">{item.price}</span>
                  <button className="bg-transparent border border-muted/30 text-muted px-3.5 py-1.5 text-[0.72rem] tracking-[0.08em] uppercase cursor-pointer rounded-sm font-sans transition-all duration-200 hover:border-gold hover:text-gold">
                    Pedir
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
