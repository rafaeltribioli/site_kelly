import { getWhatsAppUrl } from '@/config/site'
import { MessageCircle } from 'lucide-react'

export default function ContactCTA() {
  const whatsappUrl = getWhatsAppUrl()

  return (
    <section
      aria-labelledby="cta-heading"
      className="section-padding"
      style={{ backgroundColor: 'var(--color-accent-soft)' }}
    >
      <div className="container-narrow">
        <div className="flex flex-col items-center text-center gap-6 max-w-2xl mx-auto">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center"
            style={{ backgroundColor: 'var(--color-accent)' }}
            aria-hidden="true"
          >
            <MessageCircle
              size={28}
              className="text-white"
              aria-hidden="true"
            />
          </div>

          <h2
            id="cta-heading"
            className="font-serif"
            style={{ color: 'var(--color-text)' }}
          >
            Converse com nossa equipe e agende sua avaliação
          </h2>

          <p
            className="max-w-md"
            style={{ color: 'var(--color-muted)' }}
          >
            Tire dúvidas, verifique disponibilidade de horários e dê o primeiro
            passo para um cuidado que respeita sua individualidade.
          </p>

          {whatsappUrl ? (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-medium text-white transition-colors duration-200 min-h-[44px]"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.533 5.857L.057 23.617a.75.75 0 0 0 .916.926l5.92-1.528A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.96 0-3.8-.53-5.376-1.453l-.384-.23-3.987 1.029 1.008-3.9-.245-.394A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
              Falar no WhatsApp
            </a>
          ) : (
            <div
              className="flex flex-col items-center gap-2"
              role="note"
            >
              <span
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-medium text-white opacity-60 cursor-not-allowed"
                style={{ backgroundColor: 'var(--color-primary)' }}
              >
                Agendamento em breve
              </span>
              <p className="text-xs" style={{ color: 'var(--color-muted)' }}>
                Número de WhatsApp pendente de configuração
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
