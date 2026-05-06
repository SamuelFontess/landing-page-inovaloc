import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.inovaloc.com.br'),
  title: 'InovaLoc — Locação de Containers para Empresas | RN',
  description:
    'Soluções em locação de containers escritório, almoxarifado, refrigerados e banheiros modulares para empresas de todos os portes. Atendemos Natal, Mossoró e todo o RN.',
  keywords: 'locação de containers, container escritório, container almoxarifado, container refrigerado, banheiro modular, Natal RN, Mossoró RN',
  openGraph: {
    title: 'InovaLoc — Locação de Containers | RN',
    description: 'Locação rápida e segura de containers para empresas. Filiais em Natal e Mossoró, Rio Grande do Norte.',
    url: 'https://www.inovaloc.com.br',
    siteName: 'InovaLoc',
    type: 'website',
    locale: 'pt_BR',
    images: [{ url: '/logo2.png', width: 800, alt: 'InovaLoc — Locação de Containers' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'InovaLoc — Locação de Containers | RN',
    description: 'Locação rápida e segura de containers para empresas. Filiais em Natal e Mossoró, Rio Grande do Norte.',
    images: ['/logo2.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'InovaLoc',
  description: 'Locação de containers escritório, almoxarifado, refrigerados e banheiros modulares no Rio Grande do Norte.',
  url: 'https://www.inovaloc.com.br',
  telephone: '+55-84-3064-5999',
  email: 'contato@inovaloc.com.br',
  logo: 'https://www.inovaloc.com.br/logo2.png',
  image: 'https://www.inovaloc.com.br/logo2.png',
  priceRange: '$$',
  servesCuisine: undefined,
  areaServed: { '@type': 'State', name: 'Rio Grande do Norte', identifier: 'BR-RN' },
  address: [
    {
      '@type': 'PostalAddress',
      streetAddress: 'Estrada para Pium, 2011',
      addressLocality: 'Parnamirim',
      addressRegion: 'RN',
      postalCode: '59156-400',
      addressCountry: 'BR',
    },
    {
      '@type': 'PostalAddress',
      streetAddress: 'Rua Cícero Rodrigues Gabriel, SN, BR 304',
      addressLocality: 'Mossoró',
      addressRegion: 'RN',
      postalCode: '59607-400',
      addressCountry: 'BR',
    },
  ],
  sameAs: [
    'https://www.instagram.com/inovalocnatal/',
    'https://www.instagram.com/inovarlocacoes_mossoro/',
    'https://wa.me/558430645999',
  ],
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '07:00', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '08:00', closes: '13:00' },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
