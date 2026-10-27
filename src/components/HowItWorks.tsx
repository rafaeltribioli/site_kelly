const steps = [
  {
    number: '01',
    title: 'Avaliação',
    description:
      'Consulta individual para entender suas queixas, histórico de saúde, expectativas e verificar a indicação do procedimento com segurança.',
  },
  {
    number: '02',
    title: 'Plano Individualizado',
    description:
      'Com base na avaliação, é elaborado um plano de tratamento personalizado, com áreas indicadas, doses adequadas e estimativa de resultados.',
  },
  {
    number: '03',
    title: 'Procedimento quando indicado',
    description:
      'Realizado somente após confirmação da indicação e consentimento informado. Sessão ambulatorial rápida, com técnica precisa e confortável.',
  },
  {
    number: '04',
    title: 'Orientações e Acompanhamento',
    description:
      'Cuidados pós-procedimento e acompanhamento do resultado. Disponibilidade para esclarecer dúvidas durante todo o processo.',
  },
]

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      aria-labelledby="how-heading"
      className="section-padding"
      style={{ backgroundColor: 'var(--color-background)' }}
    >
      <div className="container-narrow">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p
            className="text-sm font-medium uppercase tracking-widest mb-3"
            style={{ color: 'var(--color-accent)' }}
          >
            Passo a passo
          </p>
          <h2
            id="how-heading"
            className="font-serif"
            style={{ color: 'var(--color-text)' }}
          >
            Como funciona o atendimento
          </h2>
        </div>

        {/* Steps */}
        <ol
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          aria-label="Etapas do atendimento"
        >
          {steps.map((step, idx) => (
            <li
              key={step.number}
              className="flex flex-col gap-4 p-6 md:p-7 rounded-2xl relative"
              style={{
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
              }}
            >
              {/* Connector line (desktop only, not on last) */}
              {idx < steps.length - 1 && (
                <span
                  className="hidden lg:block absolute top-10 -right-4 w-8 h-px"
                  style={{ backgroundColor: 'var(--color-border)' }}
                  aria-hidden="true"
                />
              )}

              {/* Step number */}
              <span
                className="text-4xl font-serif font-light select-none"
                style={{ color: 'var(--color-accent)' }}
                aria-hidden="true"
              >
                {step.number}
              </span>

              <h3
                className="font-serif text-xl"
                style={{ color: 'var(--color-text)' }}
              >
                {step.title}
              </h3>

              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
