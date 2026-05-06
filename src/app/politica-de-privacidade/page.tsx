import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Política de Privacidade — InovaLoc',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Topbar */}
      <header className="border-b border-gray-100 h-[72px] flex items-center px-4 sm:px-8">
        <div className="max-w-3xl mx-auto w-full flex items-center justify-between">
          <Link href="/">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo2.png" alt="InovaLoc" className="h-9 w-auto" />
          </Link>
          <Link href="/" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Voltar ao site
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-4 sm:px-8 py-16">

        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#F5B800] mb-3">
            Legal
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-3">
            Política de Privacidade
          </h1>
          <p className="text-sm text-gray-400">Última atualização: 24 de julho de 2025</p>
        </div>

        <div className="prose prose-sm prose-gray max-w-none space-y-8 text-gray-600 leading-relaxed">

          <p>
            A sua privacidade é importante para nós. É política da InovaLoc respeitar a sua
            privacidade em relação a qualquer informação sua que possamos coletar no nosso site.
          </p>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">1. Coleta de Dados</h2>
            <p>
              Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe
              fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e
              consentimento. Também informamos por que estamos coletando e como será usado.
            </p>
            <p className="mt-3">
              Através do nosso formulário de contato, coletamos os seguintes dados:
            </p>
            <ul className="mt-3 space-y-2 ml-5 list-disc text-gray-500">
              <li><strong className="text-gray-700">Nome:</strong> para nos dirigirmos a você corretamente.</li>
              <li><strong className="text-gray-700">E-mail:</strong> para respondermos à sua solicitação.</li>
              <li><strong className="text-gray-700">Telefone:</strong> para entrarmos em contato, caso seja necessário para o atendimento.</li>
              <li><strong className="text-gray-700">Mensagem:</strong> para entendermos sua dúvida ou solicitação de orçamento.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">2. Uso dos Dados</h2>
            <p>
              Utilizamos os dados coletados exclusivamente para a finalidade para a qual foram
              fornecidos: responder às suas mensagens, fornecer orçamentos e informações sobre
              nossos produtos e serviços. Não compartilhamos suas informações de identificação
              pessoal publicamente ou com terceiros, exceto quando exigido por lei.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">3. Armazenamento dos Dados</h2>
            <p>
              Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço
              solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente
              aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou
              modificação não autorizados.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">4. Seus Direitos</h2>
            <p>
              Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que
              talvez não possamos fornecer alguns dos serviços desejados. Você tem o direito de
              solicitar a exclusão dos seus dados a qualquer momento, entrando em contato conosco.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">5. Links para Sites de Terceiros</h2>
            <p>
              O nosso site pode ter links para sites externos que não são operados por nós (como
              Google Maps e redes sociais). Esteja ciente de que não temos controle sobre o conteúdo
              e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas
              políticas de privacidade.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">6. Compromisso do Usuário</h2>
            <p>O usuário se compromete a fazer uso adequado dos conteúdos e da informação que a InovaLoc oferece no site. Com caráter enunciativo, mas não limitativo, compromete-se a:</p>
            <ul className="mt-3 space-y-2 ml-5 list-[lower-alpha] text-gray-500">
              <li>Não se envolver em atividades ilegais ou contrárias à boa-fé e à ordem pública;</li>
              <li>Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, pornográfica ou de apologia ao terrorismo;</li>
              <li>Não causar danos aos sistemas da InovaLoc, de seus fornecedores ou terceiros.</li>
            </ul>
          </section>

          <p className="text-sm text-gray-400 pt-4 border-t border-gray-100">
            Esta política é efetiva a partir de julho de 2025.
          </p>

        </div>
      </main>
    </div>
  )
}
