'use client'

import Marquee from 'react-fast-marquee'
import Image from 'next/image'

type Logo = {
  src:            string
  alt:            string
  shape:          'wide' | 'square' | 'cover'
  coverPosition?: string
}

const LOGOS: Logo[] = [
  { src: '/logos/petroreconcavo-logo.png',   alt: 'PetroRecôncavo',      shape: 'wide'   },
  { src: '/logos/alianca-logo.png',           alt: 'Aliança Energia',    shape: 'wide'   },
  { src: '/logos/bravaenergia-logo.png',      alt: 'Brava Energia',      shape: 'wide'   },
  { src: '/logos/voltalia-logo.png',          alt: 'Voltalia',           shape: 'wide'   },
  { src: '/logos/prf-logo.png',               alt: 'PRF',                shape: 'wide'   },
  { src: '/logos/uninassau-logo.png',         alt: 'Uninassau',          shape: 'square' },
  { src: '/logos/prefeituramossoro-logo.png', alt: 'Prefeitura Mossoró', shape: 'square' },
  { src: '/logos/atacadao-logo.png',          alt: 'Atacadão',           shape: 'cover', coverPosition: '50% 55%' },
]

export default function TrustedBy() {
  return (
    <section className="bg-white border-y border-gray-100 py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <p className="text-center text-xs font-medium text-gray-400 uppercase tracking-widest">
          Empresas que confiam na InovaLoc
        </p>
      </div>

      <Marquee
        gradient
        gradientColor="white"
        gradientWidth={80}
        speed={45}
        pauseOnHover
      >
        {LOGOS.map((logo) => (
          <div key={logo.alt} className={`logo-${logo.shape}`}>
            <Image
              src={logo.src}
              alt={logo.alt}
              fill
              sizes="(max-width: 640px) 90px, 140px"
              className={logo.shape === 'cover' ? 'object-cover' : 'object-contain'}
              style={logo.coverPosition ? { objectPosition: logo.coverPosition } : undefined}
            />
          </div>
        ))}
      </Marquee>
    </section>
  )
}
