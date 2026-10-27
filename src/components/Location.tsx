import { siteConfig } from '@/config/site'
import { MapPin, Clock, AlertCircle } from 'lucide-react'

export default function Location() {
  const { location } = siteConfig

  const addressPending = location.address.startsWith('[')
  const hoursPending = location.hours.startsWith('[')
  const mapsPending = location.mapsEmbed.startsWith('[')

  return (
    <section
      id="localizacao"
      aria-labelledby="location-heading"
      className="section-padding"
      style={{ backgroundColor: 'var(--color-surface)' }}
    >
      <div className="container-narrow">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p
            className="text-sm font-medium uppercase tracking-widest mb-3"
            style={{ color: 'var(--color-accent)' }}
          >
            Onde estamos
          </p>
          <h2
            id="location-heading"
            className="font-serif"
            style={{ color: 'var(--color-text)' }}
          >
            {location.neighborhood}, {location.city}/{location.state}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Info cards */}
          <div className="flex flex-col gap-5">
            {/* Address */}
            <div
              className="flex items-start gap-4 p-5 rounded-xl"
              style={{
                backgroundColor: 'var(--color-background)',
                border: '1px solid var(--color-border)',
              }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: 'var(--color-accent-soft)' }}
                aria-hidden="true"
              >
                <MapPin
                  size={18}
                  style={{ color: 'var(--color-accent)' }}
                  aria-hidden="true"
                />
              </div>
              <div>
                <p
                  className="text-xs font-medium uppercase tracking-wider mb-1"
                  style={{ color: 'var(--color-accent)' }}
                >
                  Endereço
                </p>
                <address
                  className="not-italic text-sm leading-relaxed"
                  style={{ color: addressPending ? 'var(--color-muted)' : 'var(--color-text)' }}
                >
                  {location.address}
                  <br />
                  {location.neighborhood} — {location.city}/{location.state}
                </address>
              </div>
            </div>

            {/* Hours */}
            <div
              className="flex items-start gap-4 p-5 rounded-xl"
              style={{
                backgroundColor: 'var(--color-background)',
                border: '1px solid var(--color-border)',
              }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: 'var(--color-accent-soft)' }}
                aria-hidden="true"
              >
                <Clock
                  size={18}
                  style={{ color: 'var(--color-accent)' }}
                  aria-hidden="true"
                />
              </div>
              <div>
                <p
                  className="text-xs font-medium uppercase tracking-wider mb-1"
                  style={{ color: 'var(--color-accent)' }}
                >
                  Horário de atendimento
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: hoursPending ? 'var(--color-muted)' : 'var(--color-text)' }}
                >
                  {location.hours}
                </p>
              </div>
            </div>

            {/* Pending notice */}
            {(addressPending || hoursPending) && (
              <div
                className="flex items-start gap-3 p-4 rounded-xl"
                style={{ backgroundColor: 'var(--color-accent-soft)' }}
                role="note"
              >
                <AlertCircle
                  size={16}
                  className="flex-shrink-0 mt-0.5"
                  style={{ color: 'var(--color-accent)' }}
                  aria-hidden="true"
                />
                <p className="text-xs" style={{ color: 'var(--color-muted)' }}>
                  Endereço e horários serão confirmados em breve. Entre em
                  contato pelo WhatsApp para mais informações.
                </p>
              </div>
            )}
          </div>

          {/* Map embed placeholder */}
          <div
            className="w-full rounded-2xl overflow-hidden"
            style={{
              aspectRatio: '16 / 10',
              backgroundColor: 'var(--color-accent-soft)',
              border: '1px solid var(--color-border)',
            }}
            role="img"
            aria-label={
              mapsPending
                ? 'Mapa — link pendente'
                : `Mapa mostrando localização em ${location.address}`
            }
          >
            {mapsPending ? (
              <div className="w-full h-full flex flex-col items-center justify-center gap-3 p-6 text-center">
                <MapPin
                  size={28}
                  style={{ color: 'var(--color-muted)' }}
                  aria-hidden="true"
                />
                <p className="text-sm" style={{ color: 'var(--color-muted)' }}>
                  {location.mapsEmbed}
                </p>
                <p className="text-xs" style={{ color: 'var(--color-muted)' }}>
                  Mapa do Google Maps será exibido aqui
                </p>
              </div>
            ) : (
              <iframe
                src={location.mapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Mapa — ${location.address}, ${location.city}`}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
