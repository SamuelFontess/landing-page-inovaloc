import Image from 'next/image'

export default function Hero() {
  return (
    <section id="inicio" className="min-h-screen flex items-center bg-white pt-[72px] overflow-hidden relative">


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* ── Left: text ─────────────────────────────── */}
          <div>
            <h1 className="animate-fadeUp text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight leading-[1.05] mb-6">
              Soluções inteligentes em locação de{' '}
              <span className="text-[#F5B800]">containers</span>
            </h1>

            <p className="animate-fadeUp delay-100 text-lg text-gray-500 leading-relaxed mb-10 max-w-lg">
              Locação rápida e segura para escritório, almoxarifado e
              banheiros modulares — para empresas de todos os portes no RN.
            </p>

            <div className="animate-fadeUp delay-200 flex flex-col sm:flex-row gap-3">
              <a
                href="#contato"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#F5B800] text-gray-900 font-semibold rounded-lg hover:bg-[#e0a800] transition-colors shadow-sm"
              >
                Solicitar proposta
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a
                href="#solucoes"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-gray-200 text-gray-700 font-semibold rounded-lg hover:border-gray-300 hover:bg-gray-50 transition-all"
              >
                Ver catálogo
              </a>
            </div>
          </div>

          {/* ── Mobile: container below text ───────────────── */}
          <div className="lg:hidden animate-fadeUp delay-200">
            <div className="relative w-full aspect-[16/9]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3/4 h-3/4 rounded-full bg-amber-100 blur-3xl opacity-70" />
              </div>
              <Image
                src="/products/container.png"
                alt="Container InovaLoc"
                fill
                priority
                className="object-contain object-center"
                style={{
                  filter: 'drop-shadow(0 16px 32px rgba(0,0,0,0.14)) drop-shadow(0 4px 10px rgba(245,184,0,0.22))',
                }}
              />
            </div>
          </div>

          {/* ── Right: container (desktop only) ───────────── */}
          <div className="hidden lg:flex animate-fadeUp delay-300 items-center justify-center">
            <div className="animate-float relative w-full max-w-[520px]">
              <Image
                src="/products/container.png"
                alt="Container InovaLoc"
                width={700}
                height={330}
                priority
                className="w-full h-auto"
                style={{
                  filter: 'drop-shadow(0 24px 40px rgba(0,0,0,0.14)) drop-shadow(0 6px 14px rgba(245,184,0,0.22))',
                }}
              />
              {/* ground shadow */}
              <div
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-3/4 h-4 rounded-full"
                style={{ background: 'radial-gradient(ellipse, rgba(0,0,0,0.12) 0%, transparent 70%)', filter: 'blur(6px)' }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>

  )
}
