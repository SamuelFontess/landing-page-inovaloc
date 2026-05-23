'use client'

import Marquee from 'react-fast-marquee'
import Image from 'next/image'

type Logo = {
  src:        string
  alt:        string
  w:          number
  h:          number
  imgClass?:  string
  coverPos?:  string
}

const LOGOS: Logo[] = [
  { src: '/logos/alianca-logo.png',           alt: 'Aliança Energia',    w: 637,  h: 163 },
  { src: '/logos/bravaenergia-logo.png',      alt: 'Brava Energia',      w: 1101, h: 373 },
  { src: '/logos/petroreconcavo-logo.png',    alt: 'PetroRecôncavo',     w: 600,  h: 338 },
  { src: '/logos/voltalia-logo.png',          alt: 'Voltalia',           w: 285,  h: 177 },
  { src: '/logos/prf-logo.png',               alt: 'PRF',                w: 600,  h: 367 },
  {
    src: '/logos/uninassau-logo.png',
    alt: 'Uninassau',
    w: 600, h: 600,
    imgClass: 'h-16 sm:h-20 w-auto object-contain',
  },
  {
    src: '/logos/prefeituramossoro-logo.png',
    alt: 'Prefeitura Mossoró',
    w: 900, h: 900,
    imgClass: 'h-16 sm:h-20 w-auto object-contain',
  },
  { src: '/logos/atacadao-logo.png', alt: 'Atacadão', w: 400, h: 400 },
  { src: '/logos/banco-do-nordeste-logo.png', alt: 'Banco do Nordeste', w: 300, h: 108 },
  {
    src: '/logos/ambipar-logo.png',
    alt: 'Ambipar',
    w: 178, h: 212,
    imgClass: 'h-16 sm:h-20 w-auto object-contain',
  },
]

export default function TrustedBy() {
  return (
    <section className="bg-white border-y border-gray-100 py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <p className="text-center text-xs font-medium text-gray-400 uppercase tracking-widest">
          Empresas que confiam na InovaLoc
        </p>
      </div>

      <Marquee gradient gradientColor="white" gradientWidth={80} speed={40} pauseOnHover>
        {LOGOS.map((logo) => (
          <div key={logo.alt} className="flex items-center px-8 sm:px-12">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.w}
              height={logo.h}
              sizes="(max-width: 640px) 200px, 320px"
              className={logo.imgClass ?? 'h-11 sm:h-14 w-auto object-contain'}
              style={logo.coverPos ? { objectPosition: logo.coverPos } : undefined}
            />
          </div>
        ))}
      </Marquee>
    </section>
  )
}
