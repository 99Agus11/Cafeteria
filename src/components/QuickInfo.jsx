import { Clock, MapPin, Heart } from 'lucide-react'

const items = [
  {
    icon: Clock,
    label: 'Horarios',
    value: (
      <>
        Lun–Vie 7:30–20:00
        <br />
        Sáb–Dom 8:00–21:00
      </>
    ),
  },
  {
    icon: MapPin,
    label: 'Ubicación',
    value: (
      <>
        Av. Los Leones 1420
        <br />
        Providencia, Santiago
      </>
    ),
  },
  {
    icon: Heart,
    label: 'Ambiente',
    value: (
      <>
        Pet Friendly 🐾
        <br />
        WiFi · Mesas al exterior
      </>
    ),
  },
]

export default function QuickInfo() {
  return (
    <div className="bg-mid-roast border-t border-muted/15 border-b">
      <div className="max-w-[1100px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3">
        {items.map(({ icon: Icon, label, value }, i) => (
          <div
            key={label}
            className={`px-6 py-7 flex gap-4 items-center ${
              i < items.length - 1 ? 'border-b md:border-b-0 md:border-r border-muted/[0.12]' : ''
            }`}
          >
            <div className="w-[42px] h-[42px] flex-shrink-0 bg-muted/[0.12] rounded-full flex items-center justify-center">
              <Icon size={18} color="#c9953a" strokeWidth={1.8} />
            </div>
            <div>
              <div className="text-[0.7rem] tracking-[0.15em] uppercase text-muted mb-1">{label}</div>
              <div className="font-serif text-base text-cream leading-snug">{value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
