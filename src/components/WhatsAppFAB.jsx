import { WA_URL } from '../data'
import WhatsAppIcon from './WhatsAppIcon'

export default function WhatsAppFAB() {
  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Pedir por WhatsApp"
      className="fixed bottom-8 right-8 z-[200] w-[58px] h-[58px] rounded-full bg-[#25D366] flex items-center justify-center no-underline wa-pulse hover:scale-110 hover:shadow-[0_8px_32px_rgba(37,211,102,0.6)] transition-transform duration-200 group"
      style={{ animationName: 'wa-pulse' }}
    >
      <span className="absolute right-[70px] top-1/2 -translate-y-1/2 bg-mid-roast text-cream px-3.5 py-2 text-[0.78rem] whitespace-nowrap rounded border border-muted/15 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        ¡Pide ahora!
      </span>
      <WhatsAppIcon size={26} color="white" />
    </a>
  )
}
