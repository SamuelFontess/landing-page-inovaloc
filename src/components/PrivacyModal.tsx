'use client'

import { useState } from 'react'

export default function PrivacyModal() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="hover:text-white transition-colors text-left"
      >
        Política de Privacidade
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={e => { if (e.target === e.currentTarget) setOpen(false) }}
        >
          <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[85vh] flex flex-col shadow-2xl">

            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
              <h2 className="text-lg font-bold text-gray-900">Política de Privacidade</h2>
              <button
                onClick={() => setOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
                aria-label="Fechar"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="overflow-y-auto px-6 py-6 text-sm text-gray-600 leading-relaxed space-y-5">
              <p className="text-xs text-gray-400">Última atualização: 24 de julho de 2025</p>

              <p>
                A sua privacidade é importante para nós. É política da InovaLoc respeitar a sua
                privacidade em relação a qualquer informação sua que possamos coletar no nosso site.
              </p>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">1. Coleta de Dados</h3>
                <p>
                  Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe
                  fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e
                  consentimento. Através do nosso formulário de contato, coletamos:
                </p>
                <ul className="mt-2 space-y-1 ml-4 list-disc text-gray-500">
                  <li><strong className="text-gray-700">Nome:</strong> para nos dirigirmos a você corretamente.</li>
                  <li><strong className="text-gray-700">E-mail:</strong> para respondermos à sua solicitação.</li>
                  <li><strong className="text-gray-700">Telefone:</strong> para entrarmos em contato, caso necessário.</li>
                  <li><strong className="text-gray-700">Mensagem:</strong> para entendermos sua dúvida ou solicitação de orçamento.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">2. Uso dos Dados</h3>
                <p>
                  Utilizamos os dados coletados exclusivamente para responder às suas mensagens,
                  fornecer orçamentos e informações sobre nossos serviços. Não compartilhamos suas
                  informações pessoais publicamente ou com terceiros, exceto quando exigido por lei.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">3. Armazenamento dos Dados</h3>
                <p>
                  Retemos as informações coletadas apenas pelo tempo necessário para fornecer o
                  serviço solicitado. Os dados são protegidos por meios comercialmente aceitáveis
                  para evitar acesso, divulgação ou uso não autorizados.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">4. Seus Direitos</h3>
                <p>
                  Você pode recusar o fornecimento de informações pessoais, entendendo que
                  isso pode limitar alguns serviços. Você tem o direito de solicitar a exclusão
                  dos seus dados a qualquer momento entrando em contato conosco.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">5. Links para Sites de Terceiros</h3>
                <p>
                  Nosso site pode conter links para sites externos (como Google Maps e redes
                  sociais). Não temos controle sobre o conteúdo e práticas desses sites e não nos
                  responsabilizamos por suas políticas de privacidade.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">6. Compromisso do Usuário</h3>
                <p>O usuário se compromete a fazer uso adequado do site da InovaLoc, abstendo-se de:</p>
                <ul className="mt-2 space-y-1 ml-4 list-[lower-alpha] text-gray-500">
                  <li>Envolver-se em atividades ilegais ou contrárias à boa-fé;</li>
                  <li>Difundir conteúdo de natureza ilegal, ofensiva ou discriminatória;</li>
                  <li>Causar danos aos sistemas da InovaLoc ou de terceiros.</li>
                </ul>
              </div>

              <p className="text-xs text-gray-400 pt-2">
                Esta política é efetiva a partir de julho de 2025.
              </p>
            </div>

          </div>
        </div>
      )}
    </>
  )
}
