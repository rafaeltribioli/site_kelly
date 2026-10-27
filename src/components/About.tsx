import Image from 'next/image'
import { siteConfig } from '@/config/site'
import { AlertCircle } from 'lucide-react'

export default function About() {
  const { professional } = siteConfig

  return (
    <section
      id="sobre"
      aria-labelledby="about-heading"
      className="section-padding"
      style={{ backgroundColor: 'var(--color-surface)' }}
    >
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Photo */}
          <div className="flex justify-center md:justify-start order-2 md:order-1">
            <div
              className="relative w-full max-w-xs rounded-2xl overflow-hidden shadow-lg"
              style={{ aspectRatio: '3 / 4' }}
            >
              <Image
                src={professional.photoSrc}
                alt={`${professional.name} — especialista em estética facial`}
                fill
                sizes="(max-width: 768px) 80vw, 320px"
                className="object-cover object-top"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6 order-1 md:order-2">
            <p
              className="text-sm font-medium uppercase tracking-widest"
              style={{ color: 'var(--color-accent)' }}
            >
              Sobre a profissional
            </p>

            <h2
              id="about-heading"
              className="font-serif"
              style={{ color: 'var(--color-text)' }}
            >
              {professional.name}
            </h2>

            {/* Bio */}
            {professional.bio.startsWith('[') ? (
              <div
                className="p-4 rounded-xl"
                style={{ backgroundColor: 'var(--color-accent-soft)' }}
              >
                <p className="text-sm" style={{ color: 'var(--color-muted)' }}>
                  <strong style={{ color: 'var(--color-text)' }}>
                    Biografia:
                  </strong>{' '}
                  {professional.bio}
                </p>
              </div>
            ) : (
              <p style={{ color: 'var(--color-muted)' }}>{professional.bio}</p>
            )}

            {/* Formation */}
            <div
              className="p-5 rounded-xl flex flex-col gap-2"
              style={{
                backgroundColor: 'var(--color-background)',
                border: '1px solid var(--color-border)',
              }}
            >
              <p
                className="text-xs font-medium uppercase tracking-wider"
                style={{ color: 'var(--color-accent)' }}
              >
                Formação
              </p>
              <p style={{ color: 'var(--color-text)' }}>
                {professional.formation}
              </p>
            </div>

            {/* Registration */}
            <div
              className="p-5 rounded-xl flex flex-col gap-2"
              style={{
                backgroundColor: 'var(--color-background)',
                border: '1px solid var(--color-border)',
              }}
            >
              <p
                className="text-xs font-medium uppercase tracking-wider"
                style={{ color: 'var(--color-accent)' }}
              >
                {professional.registrationLabel}
              </p>
              <p style={{ color: 'var(--color-text)' }}>
                {professional.registrationNumber}
              </p>
            </div>

            {/* Validation notice */}
            <div
              className="flex items-start gap-3 p-4 rounded-xl"
              style={{ backgroundColor: 'var(--color-accent-soft)' }}
              role="note"
              aria-label="Aviso de dados pendentes"
            >
              <AlertCircle
                size={16}
                className="flex-shrink-0 mt-0.5"
                style={{ color: 'var(--color-accent)' }}
                aria-hidden="true"
              />
              <p className="text-xs leading-relaxed" style={{ color: 'var(--color-muted)' }}>
                <strong style={{ color: 'var(--color-text)' }}>
                  Dados sujeitos à validação documental.
                </strong>{' '}
                As informações de formação, registro profissional e biografia
                serão exibidas após confirmação e aprovação dos documentos
                correspondentes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
