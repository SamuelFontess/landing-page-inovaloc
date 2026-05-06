'use client'

import { useState } from 'react'

const QUESTIONS = [
  {
    q: 'Qual o prazo de entrega dos containers?',
    a: 'O prazo padrão é de 48 horas após a assinatura do contrato e confirmação de pagamento. Para projetos especiais ou locais de difícil acesso, o prazo pode ser estendido e será informado previamente pela equipe comercial.',
  },
  {
    q: 'Existe locação mensal? Qual o contrato mínimo?',
    a: 'Sim. Trabalhamos com contratos a partir de 30 dias. Também oferecemos planos trimestrais, semestrais e anuais com condições diferenciadas. Quanto maior o prazo, melhores os valores por mês.',
  },
  {
    q: 'Atendem outras cidades além de Natal e Mossoró?',
    a: 'Sim. Atendemos todo o Rio Grande do Norte e, mediante consulta, estados vizinhos como Ceará, Paraíba e Pernambuco. O frete é calculado conforme a distância e o volume do projeto.',
  },
  {
    q: 'Os containers possuem manutenção durante o contrato?',
    a: 'Sim. Problemas de origem estrutural ou de instalações entregues pela InovaLoc são de nossa responsabilidade. Nossa equipe técnica atende em até 24h para reparos urgentes.',
  },
  {
    q: 'É possível personalizar o container com a identidade visual da empresa?',
    a: 'Sim. Oferecemos serviço de adesivagem, pintura, adaptações de layout e instalações específicas (ar-condicionado extra, divisórias, tomadas adicionais, etc.). Solicite a personalização no momento do orçamento.',
  },
  {
    q: 'Quais documentos são necessários para locação?',
    a: 'Para pessoa jurídica: contrato social, CNPJ, RG/CPF do representante legal e comprovante de endereço. Para pessoa física: RG, CPF e comprovante de renda. A análise de crédito é feita em até 2 horas.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="bg-white py-24 sm:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#F5B800] mb-4">
            Perguntas frequentes
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4">
            Tire suas dúvidas
          </h2>
          <p className="text-gray-500">
            Perguntas mais comuns de nossos clientes.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {QUESTIONS.map(({ q, a }, i) => {
            const isOpen = open === i
            return (
              <div
                key={i}
                className={`border rounded-xl overflow-hidden transition-all duration-200 ${
                  isOpen ? 'border-amber-200 bg-amber-50/40' : 'border-gray-200 bg-white'
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`font-semibold text-sm sm:text-base transition-colors ${
                      isOpen ? 'text-gray-900' : 'text-gray-700'
                    }`}
                  >
                    {q}
                  </span>

                  <span
                    className={`shrink-0 w-7 h-7 flex items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen ? 'bg-[#F5B800] rotate-45' : 'bg-gray-100'
                    }`}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M6 2v8M2 6h8"
                        stroke={isOpen ? '#111827' : '#6B7280'}
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </button>

                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: isOpen ? '300px' : '0' }}
                >
                  <div className="px-6 pb-5">
                    <p className="text-gray-500 text-sm leading-relaxed">{a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-400 text-sm">
            Ainda tem dúvidas?{' '}
            <a href="#contato" className="text-[#F5B800] hover:underline font-medium">
              Fale com nossa equipe
            </a>
          </p>
        </div>

      </div>
    </section>
  )
}
