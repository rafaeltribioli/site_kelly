import { siteConfig } from '@/config/site'
import { Instagram, Facebook, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { professional, contact, location, social } = siteConfig

  const instagramPending = social.instagram.startsWith('[')
  const facebookPending = social.facebook.startsWith('[')
  const emailPending = contact.email.startsWith('[')

  return (
    <footer
      aria-label="Rodapé do site"
      className="py-12 md:py-16"
      style={{
        backgroundColor: 'var(--color-primary)',
        color: 'rgba(255,255,255,0.85)',
      }}
    >
      <div className="container-narrow">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 pb-10 mb-10"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.15)' }}
        >
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <p className="font-serif text-2xl font-medium text-white">
              {siteConfig.name}
            </p>
            <p className="text-sm leading-relaxed">
              Estética facial com cuidado e responsabilidade.{' '}
              {location.neighborhood}, {location.city}/{location.state}.
            </p>

            {/* Social */}
            <div className="flex items-center gap-3 mt-2">
              {!instagramPending ? (
                <a
                  href={social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram da Dra. Queren Tribioli"
                  className="w-11 h-11 rounded-lg flex items-center justify-center transition-colors duration-200"
                  style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                >
                  <Instagram size={16} aria-hidden="true" />
                </a>
              ) : (
                <span
                  className="w-11 h-11 rounded-lg flex items-center justify-center opacity-30 cursor-not-allowed"
                  style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                  title={social.instagram}
                  aria-label="Instagram pendente"
                >
                  <Instagram size={16} aria-hidden="true" />
                </span>
              )}

              {!facebookPending ? (
                <a
                  href={social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook da Dra. Queren Tribioli"
                  className="w-11 h-11 rounded-lg flex items-center justify-center transition-colors duration-200"
                  style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                >
                  <Facebook size={16} aria-hidden="true" />
                </a>
              ) : (
                <span
                  className="w-11 h-11 rounded-lg flex items-center justify-center opacity-30 cursor-not-allowed"
                  style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                  title={social.facebook}
                  aria-label="Facebook pendente"
                >
                  <Facebook size={16} aria-hidden="true" />
                </span>
              )}
            </div>
          </div>

          {/* Navigation */}
          <nav aria-label="Links do rodapé">
            <p className="text-xs font-medium uppercase tracking-widest text-white mb-4">
              Navegação
            </p>
            <ul className="flex flex-col gap-2" role="list">
              {[
                { label: 'Início', href: '#inicio' },
                { label: 'Tratamento', href: '#tratamento' },
                { label: 'Sobre', href: '#sobre' },
                { label: 'Como funciona', href: '#como-funciona' },
                { label: 'Dúvidas', href: '#duvidas' },
                { label: 'Localização', href: '#localizacao' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm opacity-75 hover:opacity-100 transition-opacity duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-white mb-4">
              Contato
            </p>
            <div className="flex flex-col gap-3">
              <div>
                <p className="text-xs opacity-60 mb-0.5">Endereço</p>
                <address className="not-italic text-sm opacity-75">
                  {location.address}
                  <br />
                  {location.neighborhood}, {location.city}/{location.state}
                </address>
              </div>
              <div>
                <p className="text-xs opacity-60 mb-0.5">Horário</p>
                <p className="text-sm opacity-75">{location.hours}</p>
              </div>
              {!emailPending && (
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-2 text-sm opacity-75 hover:opacity-100 transition-opacity"
                >
                  <Mail size={14} aria-hidden="true" />
                  {contact.email}
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs opacity-60">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <p>
              &copy; {currentYear} {professional.name}. Todos os direitos
              reservados.
            </p>
            <span className="hidden sm:inline" aria-hidden="true">·</span>
            <p>
              {professional.registrationLabel}:{' '}
              {professional.registrationNumber}
            </p>
          </div>
          <a
            href="/politica-de-privacidade"
            className="hover:opacity-100 transition-opacity underline underline-offset-2"
          >
            Política de privacidade
          </a>
        </div>
      </div>
    </footer>
  )
}
