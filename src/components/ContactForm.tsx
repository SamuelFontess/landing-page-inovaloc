'use client'

import { useState, type FormEvent } from 'react'

type FormData = {
  name: string
  phone: string
  email: string
  subject: string
  message: string
}

type FormErrors = Partial<Record<keyof FormData, string>>

const SUBJECT_OPTIONS = [
  'Solicitar orçamento',
  'Tirar dúvidas',
  'Agendar visita',
  'Outro',
]

const whatsappIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

const phoneIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.89 9.11 19.79 19.79 0 01.82 4.48 2 2 0 012.82 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 9.91a16 16 0 006 6l.98-.98a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
  </svg>
)

export const CONTACTS = [
  {
    label: 'WhatsApp — Natal',
    value: '(84) 3064-5999',
    href: 'https://wa.me/558430645999',
    bg: '#dcfce7',
    iconColor: '#16a34a',
    icon: whatsappIcon,
  },
  {
    label: 'WhatsApp — Mossoró',
    value: '(84) 99898-0445',
    href: 'https://wa.me/5584998980445',
    bg: '#dcfce7',
    iconColor: '#16a34a',
    icon: whatsappIcon,
  },
  {
    label: 'Telefone — Natal',
    value: '(84) 3064-5999',
    href: 'tel:+558430645999',
    bg: '#dbeafe',
    iconColor: '#2563eb',
    icon: phoneIcon,
  },
  {
    label: 'Telefone — Mossoró',
    value: '(84) 99898-0445',
    href: 'tel:+5584998980445',
    bg: '#dbeafe',
    iconColor: '#2563eb',
    icon: phoneIcon,
  },
  {
    label: 'Instagram',
    value: '@inovalocnatal',
    href: 'https://www.instagram.com/inovalocnatal/',
    bg: '#fce7f3',
    iconColor: '#db2777',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
  },
  {
    label: 'E-mail',
    value: 'contato@inovaloc.com.br',
    href: 'mailto:contato@inovaloc.com.br',
    bg: '#fee2e2',
    iconColor: '#dc2626',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
]

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {}
  if (!data.name.trim())    errors.name    = 'Nome é obrigatório'
  if (!data.phone.trim())   errors.phone   = 'Telefone é obrigatório'
  if (!data.email.trim())   errors.email   = 'E-mail é obrigatório'
  if (!data.subject)        errors.subject = 'Selecione um assunto'
  return errors
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: '', phone: '', email: '', subject: '', message: '',
  })
  const [errors, setErrors]       = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading]     = useState(false)

  function handleChange(field: keyof FormData, value: string) {
    setForm(prev => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }))
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const errs = validate(form)
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setLoading(true)
    setTimeout(() => { setLoading(false); setSubmitted(true) }, 1200)
  }

  if (submitted) {
    return (
      <section id="contato" className="bg-gray-50 py-24 sm:py-32 border-t border-gray-200">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <div className="w-16 h-16 mx-auto bg-amber-50 rounded-full flex items-center justify-center mb-6 text-[#F5B800]">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M5 14l6 6 12-12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Mensagem enviada!</h3>
          <p className="text-gray-500 text-base leading-relaxed mb-8">
            Recebemos sua mensagem. Nossa equipe entrará em contato em breve.
          </p>
          <a
            href="https://wa.me/558430645999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#F5B800] border border-amber-200 rounded-lg px-6 py-3 hover:bg-amber-50 transition-colors"
          >
            Falar pelo WhatsApp
          </a>
        </div>
      </section>
    )
  }

  return (
    <section id="contato" className="bg-gray-50 py-24 sm:py-32 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">

          {/* ── Left: info ─────────────────────────────── */}
          <div className="flex flex-col">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#F5B800] mb-4">
              Entre em contato
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4">
              Fale com a gente
            </h2>
            <p className="text-gray-500 leading-relaxed mb-10">
              Solicite um orçamento, tire dúvidas ou venha nos visitar.
              Respondemos rapidinho.
            </p>

            <div className="space-y-3">
              {CONTACTS.map(({ label, value, href, bg, iconColor, icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-xl hover:shadow-sm hover:-translate-y-0.5 transition-all"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: bg, color: iconColor }}
                  >
                    {icon}
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-medium">{label}</div>
                    <div className="text-sm font-semibold text-gray-700">{value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* ── Right: form ────────────────────────────── */}
          <form
            onSubmit={handleSubmit}
            noValidate
            className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8 flex flex-col gap-5"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1.5">
                  Nome <span className="text-[#F5B800]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="João Silva"
                  value={form.name}
                  onChange={e => handleChange('name', e.target.value)}
                  className={`form-input ${errors.name ? 'error' : ''}`}
                />
                {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1.5">
                  Telefone <span className="text-[#F5B800]">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="(84) 3064-5999"
                  value={form.phone}
                  onChange={e => handleChange('phone', e.target.value)}
                  className={`form-input ${errors.phone ? 'error' : ''}`}
                />
                {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1.5">
                E-mail <span className="text-[#F5B800]">*</span>
              </label>
              <input
                type="email"
                placeholder="joao@empresa.com"
                value={form.email}
                onChange={e => handleChange('email', e.target.value)}
                className={`form-input ${errors.email ? 'error' : ''}`}
              />
              {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1.5">
                Assunto <span className="text-[#F5B800]">*</span>
              </label>
              <select
                value={form.subject}
                onChange={e => handleChange('subject', e.target.value)}
                className={`form-input ${errors.subject ? 'error' : ''}`}
              >
                <option value="">Selecionar...</option>
                {SUBJECT_OPTIONS.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
              {errors.subject && <p className="mt-1 text-xs text-red-500">{errors.subject}</p>}
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1.5">
                Mensagem
              </label>
              <textarea
                rows={5}
                placeholder="Descreva como podemos ajudar..."
                value={form.message}
                onChange={e => handleChange('message', e.target.value)}
                className="form-input resize-none min-h-[8rem]"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-3 py-4 bg-[#F5B800] text-gray-900 font-semibold rounded-xl text-base hover:bg-[#e0a800] disabled:opacity-60 disabled:cursor-not-allowed transition-all active:scale-[0.99]"
              >
                {loading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-gray-900/30 border-t-gray-900 rounded-full animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar mensagem
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </>
                )}
              </button>
              <p className="mt-3 text-center text-xs text-gray-400">
                Ao enviar, você concorda com nossa política de privacidade.
              </p>
            </div>
          </form>

        </div>
      </div>
    </section>
  )
}
