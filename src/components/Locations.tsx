const MAPS_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY ?? ''

function embedUrl(query: string) {
  if (MAPS_KEY) {
    return `https://www.google.com/maps/embed/v1/place?key=${MAPS_KEY}&q=${encodeURIComponent(query)}&zoom=15`
  }
  return `https://maps.google.com/maps?q=${encodeURIComponent(query)}&t=&z=15&ie=UTF8&iwloc=&output=embed`
}

const BRANCHES = [
  {
    city: 'Natal',
    state: 'RN',
    label: 'Filial — Natal / Parnamirim',
    address: 'Estrada para Pium, 2011\nParnamirim, Rio Grande do Norte · CEP 59156-400',
    mapQuery: 'Estrada para Pium 2011, Parnamirim, RN',
    phones: [
      { display: '(84) 3064-5999', href: 'tel:+558430645999' },
    ],
    whatsapp: { display: '(84) 3064-5999', href: 'https://wa.me/558430645999' },
    hours: 'Seg–Sex 07h–18h · Sáb 08h–13h',
    instagram: 'https://www.instagram.com/inovalocnatal/',
  },
  {
    city: 'Mossoró',
    state: 'RN',
    label: 'Sede — Mossoró',
    address: 'Rua Cícero Rodrigues Gabriel, SN, BR 304\nMossoró/RN · CEP 59.607-400',
    mapQuery: 'Rua Cícero Rodrigues Gabriel, Mossoró, RN',
    phones: [
      { display: '(84) 99898-0445', href: 'tel:+5584998980445' },
      { display: '(84) 3064-5999', href: 'tel:+558430645999' },
    ],
    whatsapp: { display: '(84) 99898-0445', href: 'https://wa.me/5584998980445' },
    hours: 'Seg–Sex 07h–18h · Sáb 08h–12h',
    instagram: 'https://www.instagram.com/inovarlocacoes_mossoro/',
  },
]

export default function Locations() {
  return (
    <section id="localizacoes" className="bg-gray-900 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#F5B800] mb-4">
            Onde estamos
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Nossas Unidades
          </h2>
          <p className="text-gray-400 max-w-xl leading-relaxed">
            Bases operacionais estrategicamente localizadas para atender sua demanda com eficiência
            em todo o Rio Grande do Norte.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-6">
          {BRANCHES.map(({ city, state, label, address, mapQuery, phones, whatsapp, hours, instagram }) => (
            <div
              key={city}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-colors"
            >
              {/* Map */}
              <div className="relative h-64 overflow-hidden bg-gray-800">
                <iframe
                  src={embedUrl(mapQuery)}
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 0, filter: 'grayscale(20%) contrast(1.05)' }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Mapa da filial ${city}`}
                  allowFullScreen
                />
                <div className="absolute inset-0 bg-linear-to-t from-gray-900/40 to-transparent pointer-events-none" />
                <div className="absolute top-4 left-4 bg-[#F5B800] px-3 py-1.5 rounded-md pointer-events-none">
                  <span className="text-xs font-bold text-gray-900 uppercase tracking-wide">
                    {city}, {state}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#F5B800] mb-4">{label}</p>

                <div className="space-y-3 mb-6">
                  <div className="flex gap-3">
                    <svg className="mt-0.5 shrink-0 text-[#F5B800]" width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M7 13S2 8.5 2 5.5a5 5 0 0110 0C12 8.5 7 13 7 13z" stroke="currentColor" strokeWidth="1.3"/>
                      <circle cx="7" cy="5.5" r="1.5" stroke="currentColor" strokeWidth="1.3"/>
                    </svg>
                    <p className="text-sm text-gray-400 leading-relaxed whitespace-pre-line">{address}</p>
                  </div>

                  <div className="flex gap-3 items-center">
                    <svg className="shrink-0 text-[#F5B800]" width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M3 2h2.5l1 3L5 6.5c1 2 2.5 3.5 4.5 4.5L11 9.5l3 1V13c0 .5-.5 1-1 1C5 14 0 8 0 1c0-.5.5-1 1-1h2z" stroke="currentColor" strokeWidth="1.2"/>
                    </svg>
                    <span className="text-sm text-gray-400">
                      {phones.map(({ display, href }, i) => (
                        <span key={href}>
                          {i > 0 && <span className="mx-1">·</span>}
                          <a href={href} className="hover:text-white transition-colors">{display}</a>
                        </span>
                      ))}
                    </span>
                  </div>

                  <div className="flex gap-3 items-center">
                    <svg className="shrink-0 text-green-500" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    <a
                      href={whatsapp.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-400 hover:text-green-400 transition-colors"
                    >
                      WhatsApp: {whatsapp.display}
                    </a>
                  </div>

                  <div className="flex gap-3 items-center">
                    <svg className="shrink-0 text-[#F5B800]" width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.3"/>
                      <path d="M7 4v3.5l2 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                    </svg>
                    <span className="text-sm text-gray-400">{hours}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#F5B800] border border-[#F5B800]/30 px-5 py-2.5 rounded-lg hover:bg-[#F5B800]/10 transition-all"
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M7 13S2 8.5 2 5.5a5 5 0 0110 0C12 8.5 7 13 7 13z" stroke="currentColor" strokeWidth="1.3"/>
                      <circle cx="7" cy="5.5" r="1.5" stroke="currentColor" strokeWidth="1.3"/>
                    </svg>
                    Ver no mapa
                  </a>
                  <a
                    href={instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-gray-400 border border-white/10 px-5 py-2.5 rounded-lg hover:text-pink-400 hover:border-pink-400/30 hover:bg-pink-400/5 transition-all"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
