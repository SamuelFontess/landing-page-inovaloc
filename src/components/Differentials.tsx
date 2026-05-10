import { Layers, TrendingDown, Timer, Leaf, Lock, Headphones, ArrowRight } from 'lucide-react'

const ITEMS = [
  {
    title: 'Flexibilidade de uso',
    description: 'Adapte o container para qualquer finalidade: almoxarifado, escritório, banheiro, guarita ou eventos. Mude o propósito conforme a demanda, sem obra ou burocracia.',
    icon: <Layers size={26} />,
  },
  {
    title: 'Redução de custos',
    description: 'Pague apenas pelo período de uso. Sem compra, sem manutenção e sem imobilização de capital — uma escolha muito mais eficiente do que qualquer construção tradicional.',
    icon: <TrendingDown size={26} />,
  },
  {
    title: 'Instalação imediata',
    description: 'O container está operacional quase que imediatamente após a entrega. Sem longos trâmites ou esperas — sua operação começa no menor tempo possível.',
    icon: <Timer size={26} />,
  },
  {
    title: 'Sustentabilidade',
    description: 'Ao alugar, você reutiliza infraestrutura existente, evita construções fixas desnecessárias e reduz resíduos — contribuindo para um futuro mais consciente.',
    icon: <Leaf size={26} />,
  },
  {
    title: 'Segurança',
    description: 'A estrutura em aço resistente do container mantém seus equipamentos e materiais protegidos contra furtos e intempéries.',
    icon: <Lock size={26} />,
  },
  {
    title: 'Suporte Técnico',
    description: 'Nossa equipe técnica atende durante toda a vigência do contrato, com resposta rápida para qualquer necessidade.',
    icon: <Headphones size={26} />,
  },
]

export default function Differentials() {
  return (
    <section id="diferenciais" className="bg-gray-50 py-24 sm:py-32 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#F5B800] mb-4">
            Por que alugar?
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4">
            Vantagens de alugar containers
          </h2>
          <p className="text-gray-500 leading-relaxed">
            Flexibilidade, eficiência e sustentabilidade — sem os custos e a complexidade da construção tradicional.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ITEMS.map(({ title, description, icon }) => (
            <div
              key={title}
              className="group flex gap-5 p-6 rounded-2xl border border-gray-200 bg-white hover:border-amber-200 hover:shadow-md transition-all duration-300"
            >
              <div className="shrink-0 w-12 h-12 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-[#F5B800] group-hover:bg-[#F5B800] group-hover:text-white group-hover:border-[#F5B800] transition-all duration-300">
                {icon}
              </div>
              <div>
                <h3 className="text-base font-bold text-gray-900 mb-1.5">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 bg-gray-900 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xl font-bold text-white mb-1.5">Pronto para começar?</p>
            <p className="text-gray-400 text-sm">
              Solicite um orçamento sem compromisso e receba uma proposta personalizada.
            </p>
          </div>
          <a
            href="#contato"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-[#F5B800] text-gray-900 font-semibold rounded-lg hover:bg-[#e0a800] transition-colors whitespace-nowrap"
          >
            Solicitar agora
            <ArrowRight size={14} />
          </a>
        </div>

      </div>
    </section>
  )
}
