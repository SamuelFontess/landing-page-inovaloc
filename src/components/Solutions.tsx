'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

type Spec  = { label: string; value: string }
type Panel = {
  id:          string
  badge:       string
  title:       string
  description: string
  specs:       Spec[]
  images:      string[]
}

const PANELS: Panel[] = [
  {
    id:          'express-almoxarifado',
    badge:       'Armazenagem · Express',
    title:       'Container Express Almoxarifado',
    description: 'Solução compacta e ágil para armazenagem em campo. Ideal para canteiros de obra, indústrias e operações que exigem praticidade na instalação.',
    specs: [
      { label: 'Comprimento', value: '3,00 m' },
      { label: 'Largura',     value: '1,60 m' },
      { label: 'Altura',      value: '2,10 m' },
    ],
    images: ['/express.png', '/express2.png'],
  },
  {
    id:          'hc-almoxarifado',
    badge:       'Almoxarifado · HC',
    title:       'Container HC Almoxarifado',
    description: 'Estrutura de alto cubo para armazenagem de grande volume. Pé-direito e comprimento ampliados para operações de médio e grande porte.',
    specs: [
      { label: 'Comprimento', value: '6,00 m' },
      { label: 'Largura',     value: '2,50 m' },
      { label: 'Altura',      value: '2,90 m' },
    ],
    images: ['/hc-almoxarifado-1.png', '/hc-almoxarifado-2.png', '/hc-almoxarifado-3.jpg'],
  },
  {
    id:          'escritorio-hc',
    badge:       'Escritório · HC',
    title:       'Escritório 20 Pés HC',
    description: 'Container de alto cubo com isolamento térmico, piso emborrachado, instalação elétrica completa e ar-condicionado 12.000 BTUs. Conforto e produtividade em campo.',
    specs: [
      { label: 'Comprimento', value: '6,00 m' },
      { label: 'Largura',     value: '2,50 m' },
      { label: 'Altura',      value: '2,90 m' },
      { label: 'Ar-cond.',    value: '12.000 BTUs' },
    ],
    images: ['/escritorio-hc-1.png', '/escritorio-hc-2.png', '/escritorio-hc-3.jpeg', '/escritorio-hc-4.jpeg'],
  },
  {
    id:          'escritorio-wc-hc',
    badge:       'Escritório c/ WC · HC',
    title:       'Escritório HC com Banheiro',
    description: 'Container de alto cubo com escritório e banheiro integrado. Isolamento térmico, piso emborrachado, elétrica completa e ar-condicionado 12.000 BTUs.',
    specs: [
      { label: 'Comprimento', value: '6,00 m' },
      { label: 'Largura',     value: '2,50 m' },
      { label: 'Altura',      value: '2,90 m' },
      { label: 'Ar-cond.',    value: '12.000 BTUs' },
    ],
    images: ['/escritorio-wc-hc-1.png', '/escritorio-wc-hc-2.png', '/escritorio-wc-hc-3.jpeg', '/escritorio-wc-hc-4.jpeg'],
  },
  {
    id:          'venda-hc',
    badge:       'Venda · HC 20 e 40 Pés',
    title:       'Containers HC para Venda',
    description: 'Containers de alto cubo disponíveis para venda nos modelos de 20 e 40 pés. Estrutura robusta, pronta entrega e condições especiais para aquisição.',
    specs: [
      { label: '20 Pés', value: '6,00 m' },
      { label: '40 Pés', value: '12,00 m' },
    ],
    images: ['/venda-hc-1.png', '/venda-hc-2.jpeg'],
  },
]

export default function Solutions() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [imgIdx, setImgIdx] = useState<Record<string, number>>({})

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => setActive(p => (p + 1) % PANELS.length), 3800)
    return () => clearInterval(id)
  }, [paused])

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>, panelIdx: number) {
    const images = PANELS[panelIdx].images
    if (images.length < 2) return
    const rect  = e.currentTarget.getBoundingClientRect()
    const ratio = (e.clientX - rect.left) / rect.width
    const next  = Math.min(Math.max(0, Math.floor(ratio * images.length)), images.length - 1)
    setImgIdx(prev => ({ ...prev, [PANELS[panelIdx].id]: next }))
  }

  return (
    <section id="solucoes" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#F5B800] mb-4">Catálogo</p>
          <h2 className="text-3xl font-bold text-zinc-900 mb-3">Nossas Soluções</h2>
          <p className="text-zinc-500 max-w-xl text-sm leading-relaxed">
            <span className="hidden md:inline">Passe o mouse em cada modelo para expandir. Mova o cursor para os lados para alternar as fotos.</span>
            <span className="md:hidden">Toque no card para navegar entre as fotos. Use os pontos abaixo para trocar de produto.</span>
          </p>
        </div>

        {/* Mobile: card único do painel ativo */}
        <div className="md:hidden mb-6">
          {(() => {
            const panel      = PANELS[active]
            const currentImg = imgIdx[panel.id] ?? 0
            function handleTap(e: React.MouseEvent<HTMLDivElement>) {
              if (panel.images.length < 2) return
              const rect    = e.currentTarget.getBoundingClientRect()
              const isRight = e.clientX - rect.left > rect.width / 2
              setImgIdx(prev => {
                const curr = prev[panel.id] ?? 0
                return { ...prev, [panel.id]: isRight ? Math.min(curr + 1, panel.images.length - 1) : Math.max(curr - 1, 0) }
              })
            }
            return (
              <div onClick={handleTap} className="relative overflow-hidden rounded-2xl bg-zinc-900 cursor-pointer" style={{ height: 440 }}>
                {panel.images.map((src, i) => (
                  <div
                    key={src}
                    className={`absolute inset-6 transition-opacity duration-500 ${i === currentImg ? 'opacity-100' : 'opacity-0'}`}
                  >
                    <Image src={src} alt={panel.title} fill style={{ objectFit: 'contain' }} sizes="100vw" />
                  </div>
                ))}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  {panel.images.length > 1 && (
                    <div className="flex gap-1.5 mb-4">
                      {panel.images.map((_, i) => (
                        <div key={i} className={`h-[3px] rounded-full transition-all duration-300 ${i === currentImg ? 'bg-[#F5B800] w-6' : 'bg-white/25 w-3'}`} />
                      ))}
                    </div>
                  )}
                  <span className="inline-block text-[9px] font-bold uppercase tracking-widest text-[#F5B800] border border-[#F5B800]/30 px-3 py-1 rounded mb-3">
                    {panel.badge}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2 leading-snug">{panel.title}</h3>
                  <p className="text-zinc-300 text-sm leading-relaxed mb-4">{panel.description}</p>
                  {panel.specs.length > 0 && (
                    <div className="flex flex-wrap gap-4 mb-5">
                      {panel.specs.map(s => (
                        <span key={s.label} className="text-xs">
                          <span className="font-bold text-white">{s.value}</span>
                          <span className="text-zinc-400 ml-1">{s.label}</span>
                        </span>
                      ))}
                    </div>
                  )}
                  <a href="#contato" onClick={e => e.stopPropagation()} className="inline-flex items-center gap-2 text-sm font-semibold text-[#F5B800] hover:text-white transition-colors">
                    Solicitar orçamento <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
                {panel.images.length > 1 && (
                  <p className="absolute top-4 right-4 text-[9px] text-white/25 uppercase tracking-widest select-none pointer-events-none">← toque →</p>
                )}
              </div>
            )
          })()}
        </div>

        {/* Desktop: acordeão horizontal */}
        <div className="hidden md:flex gap-3" style={{ height: 480 }}>
          {PANELS.map((panel, idx) => {
            const isActive   = active === idx
            const currentImg = imgIdx[panel.id] ?? 0

            return (
              <div
                key={panel.id}
                onMouseEnter={() => { setActive(idx); setPaused(true) }}
                onMouseLeave={() => setPaused(false)}
                onMouseMove={e => handleMouseMove(e, idx)}
                style={{ flex: isActive ? '5 1 0%' : '1 1 0%' }}
                className="relative overflow-hidden rounded-2xl bg-zinc-900 cursor-pointer transition-all duration-700 ease-in-out"
              >
                {/* ── Images ── */}
                {panel.images.map((src, i) => (
                  <div
                    key={src}
                    className={`absolute transition-all duration-500
                      ${isActive ? 'opacity-100 scale-100 inset-8' : 'opacity-40 scale-105 inset-4'}
                      ${i === currentImg ? '' : '!opacity-0'}`}
                  >
                    <Image
                      src={src}
                      alt={panel.title}
                      fill
                      style={{ objectFit: 'contain' }}
                      sizes="(max-width: 1280px) 50vw, 640px"
                    />
                  </div>
                ))}

                {/* ── Gradient overlay ── */}
                <div className={`absolute inset-0 pointer-events-none transition-all duration-700 bg-gradient-to-t ${isActive ? 'from-zinc-950/90 via-zinc-950/20 to-transparent' : 'from-zinc-950/80 via-zinc-950/40 to-zinc-950/20'}`} />

                {/* ── Inactive label ── */}
                <div className={`absolute inset-0 flex flex-col justify-end p-5 transition-all duration-500 ${isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-[#F5B800] mb-1.5 block truncate">
                    {panel.badge}
                  </span>
                  <h3
                    className="text-sm font-bold text-white leading-snug"
                    style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', maxHeight: 200 }}
                  >
                    {panel.title}
                  </h3>
                </div>

                {/* ── Active content ── */}
                <div className={`absolute bottom-0 left-0 right-0 p-7 transition-all duration-500 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 pointer-events-none'}`}>

                  {panel.images.length > 1 && (
                    <div className="flex gap-1.5 mb-4">
                      {panel.images.map((_, i) => (
                        <div key={i} className={`h-[3px] rounded-full transition-all duration-300 ${i === currentImg ? 'bg-[#F5B800] w-6' : 'bg-white/25 w-3'}`} />
                      ))}
                    </div>
                  )}

                  <span className="inline-block text-[9px] font-bold uppercase tracking-widest text-[#F5B800] border border-[#F5B800]/30 px-3 py-1 rounded mb-3">
                    {panel.badge}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2 leading-snug">{panel.title}</h3>
                  <p className="text-zinc-300 text-sm leading-relaxed mb-4 max-w-sm">{panel.description}</p>

                  {panel.specs.length > 0 && (
                    <div className="flex flex-wrap gap-5 mb-5">
                      {panel.specs.map(s => (
                        <span key={s.label} className="text-xs">
                          <span className="font-bold text-white">{s.value}</span>
                          <span className="text-zinc-400 ml-1">{s.label}</span>
                        </span>
                      ))}
                    </div>
                  )}

                  <a href="#contato" className="inline-flex items-center gap-2 text-sm font-semibold text-[#F5B800] hover:text-white transition-colors">
                    Solicitar orçamento <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

                {panel.images.length > 1 && isActive && (
                  <p className="absolute top-4 right-4 text-[9px] text-white/25 uppercase tracking-widest select-none">
                    ← mova o mouse →
                  </p>
                )}
              </div>
            )
          })}
        </div>

        {/* External progress pills */}
        <div className="flex items-center gap-2 mt-6">
          {PANELS.map((panel, idx) => (
            <button
              key={panel.id}
              onClick={() => { setActive(idx); setPaused(true) }}
              aria-label={panel.title}
              className={`h-1.5 rounded-full transition-all duration-500 ${active === idx ? 'bg-[#F5B800] w-10' : 'bg-zinc-200 w-5 hover:bg-zinc-300'}`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
