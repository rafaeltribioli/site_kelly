import { UserCheck, Heart, ShieldCheck } from 'lucide-react'

const benefits = [
  {
    icon: UserCheck,
    title: 'Avaliação Individual',
    description:
      'Cada atendimento começa por uma avaliação clínica detalhada. Nenhum protocolo é aplicado sem antes compreender o seu histórico, expectativas e saúde geral.',
  },
  {
    icon: Heart,
    title: 'Atendimento Acolhedor',
    description:
      'Um ambiente seguro, sem julgamentos, onde você pode expressar suas dúvidas e preocupações com tranquilidade. O cuidado começa pelo acolhimento.',
  },
  {
    icon: ShieldCheck,
    title: 'Orientações de Segurança',
    description:
      'Todas as indicações e contraindicações são apresentadas de forma clara antes de qualquer procedimento. Sua segurança é prioridade absoluta.',
  },
]

export default function Benefits() {
  return (
    <section
      id="beneficios"
      aria-labelledby="benefits-heading"
      className="section-padding"
      style={{ backgroundColor: 'var(--color-surface)' }}
    >
      <div className="container-narrow">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <p
            className="text-sm font-medium uppercase tracking-widest mb-3"
            style={{ color: 'var(--color-accent)' }}
          >
            Por que nos escolher
          </p>
          <h2
            id="benefits-heading"
            className="font-serif"
            style={{ color: 'var(--color-text)' }}
          >
            Cuidado com intenção, técnica com responsabilidade
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit) => {
            const Icon = benefit.icon
            return (
              <article
                key={benefit.title}
                className="flex flex-col gap-4 p-6 md:p-8 rounded-2xl"
                style={{
                  backgroundColor: 'var(--color-background)',
                  border: '1px solid var(--color-border)',
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'var(--color-accent-soft)' }}
                  aria-hidden="true"
                >
                  <Icon
                    size={22}
                    style={{ color: 'var(--color-accent)' }}
                    aria-hidden="true"
                  />
                </div>
                <h3
                  className="font-serif text-xl font-semibold"
                  style={{ color: 'var(--color-text)' }}
                >
                  {benefit.title}
                </h3>
                <p style={{ color: 'var(--color-muted)' }}>
                  {benefit.description}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
