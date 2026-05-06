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
  title: 'InovaLoc — Locação de Containers para Empresas | RN',
  description:
    'Soluções em locação de containers escritório, almoxarifado, refrigerados e banheiros modulares para empresas de todos os portes. Atendemos Natal, Mossoró e todo o RN.',
  keywords: 'locação de containers, container escritório, container almoxarifado, container refrigerado, banheiro modular, Natal RN, Mossoró RN',
  openGraph: {
    title: 'InovaLoc — Locação de Containers | RN',
    description: 'Locação rápida e segura de containers para empresas. Filiais em Natal e Mossoró, Rio Grande do Norte.',
    type: 'website',
    locale: 'pt_BR',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="min-h-screen flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
