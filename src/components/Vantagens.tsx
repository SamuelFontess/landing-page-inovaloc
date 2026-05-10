import { LayoutGrid, Truck, ShieldCheck, Zap } from 'lucide-react'

const ITEMS = [
  {
    title: 'Versatilidade',
    description: 'Os containers permitem a criação de espaços funcionais e adaptáveis para qualquer tipo de operação.',
    icon: <LayoutGrid size={28} />,
  },
  {
    title: 'Mobilidade',
    description: 'Precisa se mudar? Sem problemas. Com containers você realiza a mudança com facilidade e rapidez.',
    icon: <Truck size={28} />,
  },
  {
    title: 'Durabilidade',
    description: 'Fabricados em aço Corten, os containers possuem vida útil prolongada e resistência superior às intempéries.',
    icon: <ShieldCheck size={28} />,
  },
  {
    title: 'Rapidez',
    description: 'Economize tempo e dinheiro. A instalação é muito mais rápida do que a construção tradicional.',
    icon: <Zap size={28} />,
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
