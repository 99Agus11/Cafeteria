import { Instagram, Facebook, Twitter } from 'lucide-react'
import { MENU_CATEGORIES } from '../data'

export default function Footer() {
  return (
    <footer id="contacto" className="bg-espresso border-t border-muted/10">
      <div className="max-w-[1200px] mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="font-serif text-[1.6rem] text-cream mb-3.5">
              Alma<span className="text-gold">.</span>
            </div>
            <p className="text-[0.85rem] text-muted leading-relaxed">
              Cafetería de especialidad donde cada taza es preparada con intención y servida con cariño. Únete a nuestra comunidad de amantes del buen café.
            </p>
            <div className="flex gap-4 mt-6">
              {[
                { Icon: Instagram, label: 'Instagram' },
                { Icon: Facebook, label: 'Facebook' },
                { Icon: Twitter, label: 'Twitter' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-[34px] h-[34px] rounded-full border border-muted/20 flex items-center justify-center text-muted no-underline transition-all duration-200 hover:border-gold hover:text-gold"
                >
                  <Icon size={14} strokeWidth={1.8} />
                </a>
              ))}
            </div>
          </div>

          {/* Menu */}
          <div>
            <div className="text-[0.72rem] tracking-[0.18em] uppercase text-gold mb-4.5">Menú</div>
            <ul className="list-none space-y-2.5">
              {MENU_CATEGORIES.map(c => (
                <li key={c}>
                  <a href="#menu" className="text-[0.85rem] text-muted no-underline transition-colors duration-200 hover:text-cream">
                    {c}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-[0.72rem] tracking-[0.18em] uppercase text-gold mb-4.5">Visítanos</div>
            <ul className="list-none space-y-2.5">
              {['Av. Los Leones 1420', 'Providencia, Santiago', '+56 9 1234 5678', 'hola@almacafe.cl'].map(item => (
                <li key={item}>
                  <a href="#" className="text-[0.85rem] text-muted no-underline transition-colors duration-200 hover:text-cream">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <div className="text-[0.72rem] tracking-[0.18em] uppercase text-gold mb-4.5">Horarios</div>
            <ul className="list-none space-y-2.5">
              {['Lun–Vie: 7:30 – 20:00', 'Sáb: 8:00 – 21:00', 'Dom: 8:00 – 20:00'].map(h => (
                <li key={h}>
                  <a href="#" className="text-[0.85rem] text-muted no-underline transition-colors duration-200 hover:text-cream">
                    {h}
                  </a>
                </li>
              ))}
              <li className="mt-3">
                <a href="#" className="text-[0.85rem] text-gold no-underline hover:opacity-80 transition-opacity duration-200">
                  Reservar mesa →
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-muted/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-center">
          <span className="text-[0.78rem] text-muted/50">© 2026 Alma Café. Todos los derechos reservados.</span>
          <span className="text-[0.78rem] text-muted/50">Hecho con ♥ y mucho café</span>
        </div>
      </div>
    </footer>
  )
}
