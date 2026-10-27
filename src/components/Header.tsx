'use client'

import { useState, useEffect, useCallback } from 'react'
import { Menu, X } from 'lucide-react'
import { siteConfig, getWhatsAppUrl } from '@/config/site'

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Tratamento', href: '#tratamento' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Dúvidas', href: '#duvidas' },
  { label: 'Contato', href: '#localizacao' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  // Close menu on Escape key
  useEffect(() => {
    if (!menuOpen) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu()
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [menuOpen, closeMenu])

  const whatsappUrl = getWhatsAppUrl()

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? 'bg-white shadow-sm'
          : 'bg-transparent backdrop-blur-sm'
      }`}
      role="banner"
    >
      <div className="container-narrow flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a
          href="#inicio"
          className="font-serif text-xl md:text-2xl font-medium tracking-wide"
          style={{ color: 'var(--color-primary)' }}
          aria-label={`${siteConfig.name} — página inicial`}
        >
          {siteConfig.name}
        </a>

        {/* Desktop nav */}
        <nav
          aria-label="Navegação principal"
          className="hidden md:flex items-center gap-6"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors duration-200 hover:opacity-70"
              style={{ color: 'var(--color-text)' }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          {whatsappUrl ? (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium text-white transition-colors duration-200"
              style={{ backgroundColor: 'var(--color-primary)' }}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor =
                  'var(--color-primary-hover)')
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor =
                  'var(--color-primary)')
              }
            >
              Agendar avaliação
            </a>
          ) : (
            <span
              className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium text-white opacity-60 cursor-not-allowed"
              style={{ backgroundColor: 'var(--color-primary)' }}
              title="Agendamento em breve"
            >
              Agendar avaliação
            </span>
          )}
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden flex items-center justify-center w-11 h-11 rounded-lg"
          style={{ color: 'var(--color-primary)' }}
        >
          {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
        hidden={!menuOpen}
        className={`md:hidden bg-white border-t transition-all duration-300 ${
          menuOpen ? 'block' : 'hidden'
        }`}
        style={{ borderColor: 'var(--color-border)' }}
      >
        <nav
          aria-label="Navegação mobile"
          className="container-narrow py-4 flex flex-col gap-1"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="py-3 px-2 text-base font-medium rounded-lg transition-colors duration-150"
              style={{ color: 'var(--color-text)' }}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 mt-2" style={{ borderTop: '1px solid var(--color-border)' }}>
            {whatsappUrl ? (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="flex items-center justify-center w-full py-3 rounded-full text-sm font-medium text-white"
                style={{ backgroundColor: 'var(--color-primary)' }}
              >
                Agendar avaliação
              </a>
            ) : (
              <span
                className="flex items-center justify-center w-full py-3 rounded-full text-sm font-medium text-white opacity-60"
                style={{ backgroundColor: 'var(--color-primary)' }}
              >
                Agendamento em breve
              </span>
            )}
          </div>
        </nav>
      </div>
    </header>
  )
}
