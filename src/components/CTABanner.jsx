import { WA_URL } from '../data'
import WhatsAppIcon from './WhatsAppIcon'

export default function CTABanner() {
  return (
    <div
      className="relative py-[120px] px-6 text-center overflow-hidden bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1498804103079-a6351b050096?w=1600&auto=format&fit=crop&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-espresso/[0.78]" />
      <div className="relative z-10 max-w-[600px] mx-auto">
        <span className="block text-[0.72rem] tracking-[0.25em] uppercase text-gold mb-4">
          ¿Listo para el próximo sorbo?
        </span>
        <h2
          className="font-serif text-cream leading-[1.2] mb-4"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
        >
          Haz tu pedido o{' '}
          <em className="italic text-gold-light">visítanos hoy</em>
        </h2>
        <p className="text-muted mb-10 leading-relaxed font-light">
          Escríbenos por WhatsApp y te atendemos en minutos. También puedes reservar una mesa para el fin de semana.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href={WA_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 bg-gold text-espresso px-9 py-4 font-sans text-[0.85rem] font-medium tracking-[0.12em] uppercase rounded-sm no-underline transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
          >
            <WhatsAppIcon size={16} />
            Pedido por WhatsApp
          </a>
          <a
            href="#contacto"
            className="bg-transparent text-cream px-9 py-4 font-sans text-[0.85rem] font-normal tracking-[0.12em] uppercase rounded-sm border border-cream/50 no-underline transition-all duration-200 hover:border-cream"
          >
            Reservar Mesa
          </a>
        </div>
      </div>
    </div>
  )
}
