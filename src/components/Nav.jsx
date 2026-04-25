import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const closeMobile = () => setMobileOpen(false)

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between transition-all duration-400 ${
          scrolled
            ? 'bg-espresso/92 backdrop-blur-md border-b border-muted/15 px-5 md:px-10 py-3.5'
            : 'px-5 md:px-10 py-5'
        }`}
      >
        <a href="#hero" className="font-serif text-2xl tracking-wide text-cream no-underline">
          Alma<span className="text-gold">.</span>
        </a>

        <ul className="hidden md:flex gap-8 list-none">
          {[['#about', 'Nosotros'], ['#menu', 'Menú'], ['#galeria', 'Galería'], ['#contacto', 'Contacto']].map(([href, label]) => (
            <li key={href}>
              <a
                href={href}
                className="text-muted text-[0.85rem] no-underline tracking-[0.08em] uppercase transition-colors duration-200 hover:text-cream"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="hidden md:block bg-gold text-espresso border-0 cursor-pointer px-[22px] py-[10px] font-sans text-[0.82rem] font-medium tracking-[0.1em] uppercase rounded-sm transition-all duration-200 hover:opacity-90 hover:-translate-y-px"
          onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Ver Menú
        </button>

        <button
          className="md:hidden flex flex-col gap-[5px] bg-transparent border-0 cursor-pointer p-1"
          onClick={() => setMobileOpen(true)}
          aria-label="Abrir menú"
        >
          <Menu color="#f5ede0" size={22} />
        </button>
      </nav>

      {/* Mobile nav overlay */}
      <div
        className={`fixed inset-0 z-[99] bg-espresso flex flex-col items-center justify-center gap-9 transition-transform duration-400 ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ transitionTimingFunction: 'cubic-bezier(0.4,0,0.2,1)' }}
      >
        <button
          className="absolute top-6 right-6 bg-transparent border-0 cursor-pointer"
          onClick={closeMobile}
          aria-label="Cerrar"
        >
          <X color="#f5ede0" size={24} strokeWidth={1.5} />
        </button>
        {[['#about', 'Nosotros'], ['#menu', 'Menú'], ['#galeria', 'Galería'], ['#contacto', 'Contacto']].map(([href, label]) => (
          <a
            key={href}
            href={href}
            onClick={closeMobile}
            className="font-serif text-[2rem] text-cream no-underline transition-colors duration-200 hover:text-gold"
          >
            {label}
          </a>
        ))}
      </div>
    </>
  )
}
