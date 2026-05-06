const LOGOS = [
  'Construtora Nordeste',
  'LogTech Brasil',
  'Grupo Atlas',
  'Minera Engenharia',
  'Fortline',
  'Nordvias',
  'Delta Construções',
  'Apex Industrial',
]

export default function TrustedBy() {
  const doubled = [...LOGOS, ...LOGOS]

  return (
    <section className="bg-white border-y border-gray-100 py-14 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <p className="text-center text-xs font-medium text-gray-400 uppercase tracking-widest">
          Empresas que confiam na InovaLoc
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee">
          {doubled.map((name, i) => (
            <div key={`${name}-${i}`} className="flex-shrink-0 mx-3">
              <div className="px-7 py-3.5 border border-gray-200 rounded-lg bg-white hover:border-gray-300 transition-colors cursor-default">
                <span className="text-sm font-semibold text-gray-400 select-none whitespace-nowrap">
                  {name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
