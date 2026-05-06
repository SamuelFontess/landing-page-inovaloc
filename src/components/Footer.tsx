import Link from 'next/link'

const SOLUTIONS_LINKS = [
  { label: 'Container Express Almoxarifado', href: '#solucoes' },
  { label: 'Container HC Almoxarifado',      href: '#solucoes' },
  { label: 'Escritório 20 Pés HC',           href: '#solucoes' },
  { label: 'Escritório HC com Banheiro',     href: '#solucoes' },
  { label: 'Containers HC para Venda',       href: '#solucoes' },
]

const COMPANY_LINKS = [
  { label: 'Sobre Nós',    href: '#sobre' },
  { label: 'Localizações', href: '#localizacoes' },
  { label: 'FAQ',          href: '#faq' },
]

const SOCIAL_ICONS = [
  {
    label: 'WhatsApp',
    href: 'https://wa.me/558430645999',
    hoverClass: 'hover:text-green-500 hover:border-green-500/30',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/inovalocnatal/',
    hoverClass: 'hover:text-pink-500 hover:border-pink-500/30',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
  },
  {
    label: 'E-mail',
    href: 'mailto:contato@inovaloc.com.br',
    hoverClass: 'hover:text-red-500 hover:border-red-500/30',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
  {
    label: 'Telefone',
    href: 'tel:+558430645999',
    hoverClass: 'hover:text-blue-500 hover:border-blue-500/30',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.89 9.11 19.79 19.79 0 01.82 4.48 2 2 0 012.82 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 9.91a16 16 0 006 6l.98-.98a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-10 lg:gap-16 pb-12 mb-8 border-b border-zinc-800">

          {/* Brand */}
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo2.png" alt="InovaLoc" className="h-9 w-auto brightness-0 invert mb-6" />
            <p className="text-zinc-400 text-sm leading-relaxed mb-6 max-w-xs">
              Locação de containers com agilidade e qualidade no Rio Grande do Norte.
              Escritório, almoxarifado, refrigerados e banheiros modulares.
            </p>
            <div className="flex gap-2.5">
              {SOCIAL_ICONS.map(({ label, href, hoverClass, icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className={`p-2.5 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-400 transition-all duration-200 ${hoverClass}`}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Soluções */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-[#F5B800]">Soluções</h4>
            <ul className="space-y-3 text-sm text-zinc-400">
              {SOLUTIONS_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="hover:text-white transition-colors">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-[#F5B800]">Empresa</h4>
            <ul className="space-y-3 text-sm text-zinc-400">
              {COMPANY_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="hover:text-white transition-colors">{label}</a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-zinc-500 text-[11px] uppercase font-semibold tracking-widest">
            © {new Date().getFullYear()} InovaLoc. Todos os direitos reservados.
          </p>
          <Link
            href="/politica-de-privacidade"
            className="text-zinc-500 text-[11px] uppercase font-semibold tracking-widest hover:text-zinc-300 transition-colors"
          >
            Política de Privacidade
          </Link>
        </div>

      </div>
    </footer>
  )
}
