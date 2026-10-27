'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Para quem é indicado?',
    answer:
      'A toxina botulínica é indicada para adultos que apresentam linhas de expressão dinâmicas — aquelas causadas pela contração muscular repetida. A indicação é sempre individual: somente após avaliação clínica é possível confirmar se o procedimento é adequado para cada pessoa, considerando saúde geral, histórico médico e expectativas.',
  },
  {
    question: 'O procedimento dói?',
    answer:
      'O desconforto costuma ser mínimo. São utilizadas agulhas muito finas e a aplicação é rápida. A sensação varia de pessoa para pessoa; a maioria dos pacientes descreve como uma picada leve. Em casos de maior sensibilidade, é possível usar creme anestésico tópico previamente.',
  },
  {
    question: 'Quanto tempo dura o efeito?',
    answer:
      'O efeito é temporário e varia conforme o metabolismo individual, a região tratada e a dose aplicada. Em geral, a duração é de 3 a 6 meses. Com o tratamento regular, alguns pacientes observam durações maiores ao longo do tempo. Esta é uma informação educativa — a estimativa personalizada será fornecida na avaliação.',
  },
  {
    question: 'Há contraindicações?',
    answer:
      'Sim. Existem contraindicações absolutas e relativas que serão avaliadas na consulta. Entre elas: gravidez, amamentação, doenças neuromusculares, uso de determinados medicamentos e hipersensibilidade a qualquer componente da fórmula. Nunca omita informações de saúde durante a avaliação.',
  },
  {
    question: 'Quando aparecem os resultados?',
    answer:
      'Os efeitos surgem gradualmente. Nos primeiros 2 a 3 dias é possível notar início de ação. O resultado completo costuma aparecer entre 7 e 14 dias após a aplicação. É importante não realizar atividades intensas, massagens na área tratada ou ficar em posição horizontal nas primeiras horas após o procedimento.',
  },
  {
    question: 'Como agendar?',
    answer:
      'O agendamento é feito pelo WhatsApp. Entre em contato com nossa equipe para verificar disponibilidade de horários e agendar sua avaliação. A primeira consulta é dedicada exclusivamente à avaliação clínica — sem pressão para realizar o procedimento no mesmo dia.',
  },
]

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
  id,
}: {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
  id: string
}) {
  const panelId = `${id}-panel`
  const buttonId = `${id}-button`

  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{ border: '1px solid var(--color-border)' }}
    >
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-150"
          style={{
            backgroundColor: isOpen
              ? 'var(--color-accent-soft)'
              : 'var(--color-surface)',
            color: 'var(--color-text)',
          }}
        >
          <span className="font-medium text-base">{question}</span>
          <ChevronDown
            size={18}
            aria-hidden="true"
            className="flex-shrink-0 transition-transform duration-300"
            style={{
              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              color: 'var(--color-accent)',
            }}
          />
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        hidden={!isOpen}
      >
        <div
          className="px-6 py-5"
          style={{
            backgroundColor: 'var(--color-surface)',
            borderTop: '1px solid var(--color-border)',
          }}
        >
          <p
            className="text-sm leading-relaxed"
            style={{ color: 'var(--color-muted)' }}
          >
            {answer}
          </p>
          <p
            className="text-xs mt-3 pt-3"
            style={{
              color: 'var(--color-muted)',
              borderTop: '1px solid var(--color-border)',
            }}
          >
            <em>
              Esta resposta tem caráter educativo e não substitui orientação
              médica individualizada.
            </em>
          </p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section
      id="duvidas"
      aria-labelledby="faq-heading"
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
            Perguntas frequentes
          </p>
          <h2
            id="faq-heading"
            className="font-serif"
            style={{ color: 'var(--color-text)' }}
          >
            Tire suas dúvidas
          </h2>
          <p
            className="mt-4 max-w-xl mx-auto"
            style={{ color: 'var(--color-muted)' }}
          >
            Reunimos as perguntas mais comuns sobre o tratamento. Dúvidas
            específicas são respondidas na avaliação individual.
          </p>
        </div>

        {/* FAQ list */}
        <div
          className="flex flex-col gap-3 max-w-3xl mx-auto"
          role="list"
          aria-label="Lista de perguntas frequentes"
        >
          {faqs.map((faq, idx) => (
            <div key={idx} role="listitem">
              <FAQItem
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === idx}
                onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
                id={`faq-${idx}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
