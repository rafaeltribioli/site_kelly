import { siteConfig, getWhatsAppUrl } from '@/config/site'
import { Info, CheckCircle2 } from 'lucide-react'

const treatmentDetails = [
  'Avaliação prévia obrigatória para verificar indicação',
  'Resultado proporcional à anatomia facial de cada pessoa',
  'Efeito gradual — resultados visíveis entre 7 e 14 dias',
  'Duração variável conforme metabolismo individual',
  'Aplicação por profissional habilitada com produto registrado',
]

export default function Treatment() {
  const whatsappUrl = getWhatsAppUrl()
  const { offer } = siteConfig

  return (
    <section
      id="tratamento"
      aria-labelledby="treatment-heading"
      className="section-padding"
      style={{ backgroundColor: 'var(--color-background)' }}
    >
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Content */}
          <div className="flex flex-col gap-6">
            <p
              className="text-sm font-medium uppercase tracking-widest"
              style={{ color: 'var(--color-accent)' }}
            >
              O tratamento
            </p>
            <h2
              id="treatment-heading"
              className="font-serif"
              style={{ color: 'var(--color-text)' }}
            >
              Toxina botulínica — três regiões
            </h2>

            <p style={{ color: 'var(--color-muted)' }}>
              A toxina botulínica (tipo A) é utilizada para suavizar linhas de
              expressão faciais por meio do relaxamento temporário de músculos
              específicos. O procedimento é realizado com microinjeções de
              precisão, em sessão ambulatorial, sem necessidade de internação.
            </p>
            <p style={{ color: 'var(--color-muted)' }}>
              A avaliação individual define quais regiões são indicadas para
              cada paciente, bem como a dose adequada. Não existe protocolo
              único: cada plano de tratamento é elaborado de forma
              personalizada.
            </p>

            <ul className="flex flex-col gap-3" role="list">
              {treatmentDetails.map((detail) => (
                <li
                  key={detail}
                  className="flex items-start gap-3 text-sm"
                  style={{ color: 'var(--color-muted)' }}
                >
                  <CheckCircle2
                    size={18}
                    className="flex-shrink-0 mt-0.5"
                    style={{ color: 'var(--color-success)' }}
                    aria-hidden="true"
                  />
                  {detail}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Offer / CTA */}
          <div className="flex flex-col gap-6">
            {/* Offer block — only renders when offer.enabled === true */}
            {offer.enabled ? (
              <div
                className="rounded-2xl p-8 flex flex-col gap-5"
                style={{
                  backgroundColor: 'var(--color-accent-soft)',
                  border: '1px solid var(--color-border)',
                }}
              >
                <p
                  className="text-sm font-medium uppercase tracking-widest"
                  style={{ color: 'var(--color-accent)' }}
                >
                  Condição especial
                </p>
                <div>
                  {!offer.originalPrice.startsWith('[') && (
                    <p
                      className="text-sm line-through"
                      style={{ color: 'var(--color-muted)' }}
                    >
                      De {offer.originalPrice}
                    </p>
                  )}
                  {!offer.price.startsWith('[') && (
                    <p
                      className="text-3xl font-serif font-semibold mt-1"
                      style={{ color: 'var(--color-text)' }}
                    >
                      {offer.price}
                    </p>
                  )}
                  {!offer.regions.startsWith('[') && (
                    <p className="text-sm mt-1" style={{ color: 'var(--color-muted)' }}>
                      {offer.regions}
                    </p>
                  )}
                </div>
                {!offer.terms.startsWith('[') && (
                  <p className="text-xs" style={{ color: 'var(--color-muted)' }}>
                    {offer.terms}
                  </p>
                )}
                {whatsappUrl && (
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center justify-center px-6 py-3.5 rounded-full text-sm font-medium text-white transition-colors duration-200 min-h-[44px]"
                  >
                    Aproveitar condição
                  </a>
                )}
              </div>
            ) : (
              /* Default state: no active offer */
              <div
                className="rounded-2xl p-8 flex flex-col gap-5"
                style={{
                  backgroundColor: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                }}
              >
                <div
                  className="flex items-start gap-3 p-4 rounded-xl"
                  style={{ backgroundColor: 'var(--color-accent-soft)' }}
                  role="note"
                >
                  <Info
                    size={18}
                    className="flex-shrink-0 mt-0.5"
                    style={{ color: 'var(--color-accent)' }}
                    aria-hidden="true"
                  />
                  <p className="text-sm" style={{ color: 'var(--color-muted)' }}>
                    <strong style={{ color: 'var(--color-text)' }}>
                      Avaliação sem compromisso
                    </strong>
                    <br />
                    Valores e condições são apresentados na avaliação clínica,
                    após verificar a indicação individual. Consulte condições na
                    avaliação.
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <p
                    className="text-sm font-medium"
                    style={{ color: 'var(--color-text)' }}
                  >
                    O que está incluído na consulta:
                  </p>
                  {[
                    'Análise facial detalhada',
                    'Plano de tratamento individualizado',
                    'Esclarecimento de dúvidas sem julgamentos',
                    'Apresentação de valores e condições',
                  ].map((item) => (
                    <p
                      key={item}
                      className="flex items-center gap-2 text-sm"
                      style={{ color: 'var(--color-muted)' }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: 'var(--color-accent)' }}
                        aria-hidden="true"
                      />
                      {item}
                    </p>
                  ))}
                </div>

                {whatsappUrl ? (
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center justify-center px-6 py-3.5 rounded-full text-sm font-medium text-white transition-colors duration-200 min-h-[44px] mt-2"
                  >
                    Agendar avaliação
                  </a>
                ) : (
                  <span
                    className="inline-flex items-center justify-center px-6 py-3.5 rounded-full text-sm font-medium text-white opacity-60 cursor-not-allowed min-h-[44px] mt-2"
                    style={{ backgroundColor: 'var(--color-primary)' }}
                  >
                    Agendamento em breve
                  </span>
                )}
              </div>
            )}

            {/* Duration note */}
            <p
              className="text-xs leading-relaxed"
              style={{ color: 'var(--color-muted)' }}
            >
              * Duração e intensidade do efeito variam conforme o metabolismo
              individual e a região tratada. Os resultados não são permanentes.
              A aplicação é realizada somente após confirmação de indicação
              clínica.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
