'use client'

import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { href: '#solucoes',     label: 'Soluções' },
  { href: '#sobre',        label: 'Sobre' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#localizacoes', label: 'Localizações' },
  { href: '#faq',          label: 'FAQ' },
  { href: '#contato',      label: 'Contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 h-[72px] flex items-center transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
          : 'bg-white border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <a href="#inicio" className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo2.png" alt="InovaLoc" className="h-10 w-auto" />
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contato"
              className="hidden lg:inline-flex items-center px-5 py-2.5 bg-[#F5B800] text-gray-900 text-sm font-semibold rounded-lg hover:bg-[#e0a800] transition-colors duration-200"
            >
              Solicitar orçamento
            </a>

            <button
              onClick={() => setMobileOpen(o => !o)}
              className="lg:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Abrir menu"
            >
              {mobileOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`absolute top-[72px] inset-x-0 bg-white border-b border-gray-100 shadow-lg overflow-hidden transition-all duration-300 lg:hidden ${
          mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              className="py-3 text-base font-medium text-gray-600 hover:text-gray-900 border-b border-gray-100 last:border-0 transition-colors"
            >
              {label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setMobileOpen(false)}
            className="mt-3 py-3.5 bg-[#F5B800] text-gray-900 text-sm font-semibold rounded-lg text-center hover:bg-[#e0a800] transition-colors"
          >
            Solicitar orçamento
          </a>
        </div>
      </div>
    </header>
  )
}
