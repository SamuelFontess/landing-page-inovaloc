const HIGHLIGHTS = [
  'Contratos flexíveis',
  'Atendimento consultivo',
  'Suporte técnico pós-locação',
]

export default function About() {
  return (
    <section id="sobre" className="bg-gray-50 py-24 sm:py-32 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">

          <p className="text-xs font-semibold uppercase tracking-widest text-[#F5B800] mb-4">
            Sobre a InovaLoc
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-8">
            Mais de uma década de excelência em locação modular
          </h2>

          <div className="space-y-4 text-gray-500 leading-relaxed mb-10">
            <p>
              A InovaLoc nasceu da necessidade real do mercado nordestino: uma parceira de locação
              de containers que une agilidade, qualidade e atendimento consultivo. Com estrutura
              própria e gestão especializada, somos referência em soluções modulares no Rio Grande
              do Norte.
            </p>
            <p>
              Nossas unidades em Natal e Mossoró permitem cobertura regional ampla, com logística
              eficiente e suporte técnico contínuo. Cada container passa por revisão completa antes
              da entrega, garantindo integridade estrutural e conformidade com as normas da ABNT.
            </p>
            <p>
              Atendemos construtoras, mineradoras, empresas de eventos, órgãos públicos e privados
              com contratos mensais, trimestrais ou anuais — sempre com flexibilidade e propostas
              sob medida para cada operação.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-3 mb-10">
            {HIGHLIGHTS.map(item => (
              <div key={item} className="flex items-center gap-3 text-sm text-gray-600">
                <div className="w-5 h-5 bg-amber-50 rounded-md flex items-center justify-center shrink-0">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M1.5 5.5L3.5 7.5L8.5 2.5" stroke="#F5B800" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                {item}
              </div>
            ))}
          </div>

          <a
            href="#contato"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#F5B800] hover:text-amber-600 transition-colors"
          >
            Fale com um especialista
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

        </div>
      </div>
    </section>
  )
}
