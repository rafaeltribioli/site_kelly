export const siteConfig = {
  name: 'Dra. Queren Tribioli',
  title: 'Dra. Queren Tribioli | Estética Facial no Cambuí, Campinas',
  description:
    'Atendimento estético facial individualizado no Cambuí, Campinas/SP. Agende sua avaliação com a Dra. Queren Tribioli.',
  url: 'https://drnestorfreire.com.br',

  contact: {
    whatsapp: '5519992083660',
    whatsappMessage:
      'Olá! Gostaria de agendar uma avaliação com a Dra. Queren Tribioli.',
    email: '[EMAIL-PENDENTE]',
  },

  location: {
    neighborhood: 'Cambuí',
    city: 'Campinas',
    state: 'SP',
    address: 'Rua Coronel Quirino, 453',
    hours: '[HORÁRIOS-PENDENTE]',
    mapsEmbed: 'https://www.google.com/maps?q=-22.903666,-47.0504445&z=17&output=embed',
  },

  professional: {
    name: 'Dra. Queren Tribioli',
    bio: '[BIOGRAFIA-PENDENTE-APROVAÇÃO]',
    formation: '[FORMAÇÃO-PENDENTE-VALIDAÇÃO-DOCUMENTAL]',
    registrationLabel: '[CONSELHO-PENDENTE-VALIDAÇÃO]',
    registrationNumber: '[NÚMERO-REGISTRO-PENDENTE]',
    photoSrc: '/images/retrato_clinica.png',
  },

  social: {
    instagram: '[INSTAGRAM-PENDENTE]',
    facebook: '[FACEBOOK-PENDENTE]',
  },

  offer: {
    enabled: false, // set to true only after validating all fields below
    price: '[PREÇO-PENDENTE]',
    originalPrice: '[PREÇO-BASE-PENDENTE]',
    discountPercent: 15,
    regions: '[REGIÕES-INCLUÍDAS-PENDENTE]',
    startAt: '[DATA-INÍCIO-PENDENTE]',
    endAt: '[DATA-FIM-PENDENTE]',
    terms: '[CONDIÇÕES-COMPLETAS-PENDENTE]',
  },
}

/**
 * Returns the WhatsApp URL or null if the number is still a placeholder.
 */
export function getWhatsAppUrl(message?: string): string | null {
  const { whatsapp, whatsappMessage } = siteConfig.contact
  if (whatsapp.startsWith('[')) return null
  const text = encodeURIComponent(message ?? whatsappMessage)
  return `https://wa.me/${whatsapp}?text=${text}`
}

/**
 * Returns true when the whatsapp number has been configured (not a placeholder).
 */
export function isWhatsAppConfigured(): boolean {
  return !siteConfig.contact.whatsapp.startsWith('[')
}
