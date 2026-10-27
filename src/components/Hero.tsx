import Image from 'next/image'
import { getWhatsAppUrl, siteConfig } from '@/config/site'

export default function Hero() {
  const whatsappUrl = getWhatsAppUrl()

  return (
    <section
      id="inicio"
      aria-labelledby="hero-heading"
      className="relative min-h-screen flex items-center pt-20"
      style={{ backgroundColor: 'var(--color-background)' }}
    >
      <div className="container-narrow w-full py-16 md:py-24">
        <div className="grid md:grid-cols-[55fr_45fr] gap-12 lg:gap-16 items-center">
          {/* Text column */}
          <div className="flex flex-col gap-6">
            {/* Eyebrow */}
            <p
              className="text-sm font-medium uppercase tracking-widest"
              style={{ color: 'var(--color-accent)' }}
            >
              Estética Facial · Cambuí, Campinas
            </p>

            <h1
              id="hero-heading"
              className="font-serif"
              style={{ color: 'var(--color-text)' }}
            >
              Realce sua beleza com{' '}
              <em className="not-italic" style={{ color: 'var(--color-accent)' }}>
                cuidado
              </em>{' '}
              e naturalidade.
            </h1>

            <p
              className="text-lg max-w-lg"
              style={{ color: 'var(--color-muted)' }}
            >
              Avaliação individualizada e procedimentos estéticos faciais
              realizados com critério técnico e atenção às suas necessidades
              reais. Atendimento personalizado na{' '}
              <strong style={{ color: 'var(--color-text)' }}>
                {siteConfig.location.neighborhood},{' '}
                {siteConfig.location.city}/{siteConfig.location.state}
              </strong>
              .
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              {whatsappUrl ? (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center px-7 py-4 rounded-full text-base font-medium text-white transition-colors duration-200 min-h-[44px]"
                >
                  Agendar minha avaliação
                </a>
              ) : (
                <span
                  className="inline-flex items-center justify-center px-7 py-4 rounded-full text-base font-medium text-white opacity-60 cursor-not-allowed min-h-[44px]"
                  style={{ backgroundColor: 'var(--color-primary)' }}
                  title="Agendamento em breve"
                >
                  Agendar minha avaliação
                </span>
              )}

              <a
                href="#tratamento"
                className="btn-outline inline-flex items-center justify-center px-7 py-4 rounded-full text-base font-medium transition-colors duration-200 min-h-[44px]"
              >
                Conhecer o tratamento
              </a>
            </div>

            {/* Disclaimer */}
            <p
              className="text-xs leading-relaxed max-w-md pt-2"
              style={{ color: 'var(--color-muted)' }}
            >
              * Os procedimentos realizados dependem de avaliação clínica
              individual. Resultados podem variar de acordo com cada paciente.
            </p>
          </div>

          {/* Image column */}
          <div className="flex justify-center order-first md:order-last">
            <div
              className="relative w-full max-w-sm md:max-w-none rounded-2xl overflow-hidden shadow-lg"
              style={{ aspectRatio: '4 / 5' }}
            >
              <Image
                src={siteConfig.professional.photoSrc}
                alt="Dra. Queren Tribioli — especialista em estética facial no Cambuí, Campinas"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
