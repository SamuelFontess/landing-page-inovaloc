const ITEMS = [
  {
    title: 'Flexibilidade de uso',
    description: 'Adapte o container para qualquer finalidade: almoxarifado, escritório, banheiro, guarita ou eventos. Mude o propósito conforme a demanda, sem obra ou burocracia.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="3" width="9" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.7"/>
        <rect x="16" y="3" width="9" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.7"/>
        <rect x="3" y="16" width="9" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.7"/>
        <rect x="16" y="16" width="9" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.7"/>
      </svg>
    ),
  },
  {
    title: 'Redução de custos',
    description: 'Pague apenas pelo período de uso. Sem compra, sem manutenção e sem imobilização de capital — uma escolha muito mais eficiente do que qualquer construção tradicional.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.7"/>
        <path d="M14 8v1.5M14 18.5V20M10.5 11.5c0-1.38 1.57-2.5 3.5-2.5s3.5 1.12 3.5 2.5c0 2.5-7 2.5-7 5 0 1.38 1.57 2.5 3.5 2.5s3.5-1.12 3.5-2.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Instalação imediata',
    description: 'O container está operacional quase que imediatamente após a entrega. Sem longos trâmites ou esperas — sua operação começa no menor tempo possível.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.7"/>
        <path d="M14 8v6l4 2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Sustentabilidade',
    description: 'Ao alugar, você reutiliza infraestrutura existente, evita construções fixas desnecessárias e reduz resíduos — contribuindo para um futuro mais consciente.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <path d="M14 4C8.48 4 4 8.48 4 14s4.48 10 10 10 10-4.48 10-10S19.52 4 14 4z" stroke="currentColor" strokeWidth="1.7"/>
        <path d="M9 14c1-3 3-5 5-5s4 2 4 5-2 5-4 5-4-2-5-5z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Atendimento Personalizado',
    description: 'Consultores especializados analisam cada projeto e propõem a solução mais adequada para a sua operação.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <path d="M5 22v-1a7 7 0 017-7h4a7 7 0 017 7v1" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
        <circle cx="14" cy="9" r="5" stroke="currentColor" strokeWidth="1.7"/>
      </svg>
    ),
  },
  {
    title: 'Suporte Técnico',
    description: 'Nossa equipe técnica atende durante toda a vigência do contrato, com resposta rápida para qualquer necessidade.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <path d="M14 3v5M14 20v5M5.22 5.22l3.54 3.54M19.24 19.24l3.54 3.54M3 14h5M20 14h5M5.22 22.78l3.54-3.54M19.24 8.76l3.54-3.54" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
        <circle cx="14" cy="14" r="4" stroke="currentColor" strokeWidth="1.7"/>
      </svg>
    ),
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
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

      </div>
    </section>
  )
}
