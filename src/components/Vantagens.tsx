const ITEMS = [
  {
    title: 'Versatilidade',
    description: 'Os containers permitem a criação de espaços funcionais e adaptáveis para qualquer tipo de operação.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="3" width="9" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.7"/>
        <rect x="16" y="3" width="9" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.7"/>
        <rect x="3" y="16" width="9" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.7"/>
        <rect x="16" y="16" width="9" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.7"/>
      </svg>
    ),
  },
  {
    title: 'Mobilidade',
    description: 'Precisa se mudar? Sem problemas. Com containers você realiza a mudança com facilidade e rapidez.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 18h16M4 18l3-8h10l3 8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="9" cy="21" r="2" stroke="currentColor" strokeWidth="1.7"/>
        <circle cx="19" cy="21" r="2" stroke="currentColor" strokeWidth="1.7"/>
        <path d="M17 10V7H11v3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Durabilidade',
    description: 'Fabricados em aço Corten, os containers possuem vida útil prolongada e resistência superior às intempéries.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3l9 4v7c0 5-3.5 9-9 11-5.5-2-9-6-9-11V7l9-4z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 14l2.5 2.5 5.5-5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Rapidez',
    description: 'Economize tempo e dinheiro. A instalação é muito mais rápida do que a construção tradicional.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.7"/>
        <path d="M14 8v6l4 2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

export default function Vantagens() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#F5B800] mb-4">
            Por que containers?
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4">
            Vantagens de utilizar containers
          </h2>
          <p className="text-gray-500 leading-relaxed">
            Mais do que estrutura, os containers entregam flexibilidade real para o seu negócio.
          </p>
        </div>

        {/* Cards 2×2 */}
        <div className="grid sm:grid-cols-2 gap-6">
          {ITEMS.map(({ title, description, icon }) => (
            <div
              key={title}
              className="group flex gap-6 p-7 rounded-2xl border border-gray-100 bg-gray-50 hover:border-amber-200 hover:bg-amber-50/30 transition-all duration-300"
            >
              <div className="shrink-0 w-14 h-14 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-[#F5B800] group-hover:bg-[#F5B800] group-hover:text-white group-hover:border-[#F5B800] transition-all duration-300 shadow-sm">
                {icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
