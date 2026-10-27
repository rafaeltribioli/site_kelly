import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'
import { siteConfig } from '@/config/site'

/* ─── Fonts ──────────────────────────────────────────────────────────────── */
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

/* ─── Metadata ───────────────────────────────────────────────────────────── */
function safeUrl(url: string, fallback = 'http://localhost:3000'): URL {
  try {
    return new URL(url)
  } catch {
    return new URL(fallback)
  }
}

export const metadata: Metadata = {
  metadataBase: safeUrl(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url.startsWith('[') ? '/' : siteConfig.url,
    siteName: siteConfig.name,
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteConfig.url.startsWith('[') ? '/' : siteConfig.url,
  },
}

/* ─── JSON-LD LocalBusiness schema ───────────────────────────────────────── */
const siteUrl = siteConfig.url.startsWith('[') ? undefined : siteConfig.url

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteUrl,
  address: {
    '@type': 'PostalAddress',
    addressLocality: siteConfig.location.city,
    addressRegion: siteConfig.location.state,
    addressCountry: 'BR',
    streetAddress: siteConfig.location.address.startsWith('[')
      ? undefined
      : siteConfig.location.address,
  },
  openingHours: siteConfig.location.hours.startsWith('[')
    ? undefined
    : siteConfig.location.hours,
  employee: {
    '@type': 'Person',
    name: siteConfig.professional.name,
    jobTitle: 'Médica Especialista em Medicina Estética',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
