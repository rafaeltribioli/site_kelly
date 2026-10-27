# SPEC — Landing Page Dra. Queren Tribioli
**Versão:** 1.0 | **Data:** 27/10/2026 | **Destino:** Claude Code / Cloud Code

## 1. Objetivo e escopo
Construir um site oficial, responsivo, elegante e rápido para apresentar os serviços estéticos da **Dra. Queren Tribioli**, com foco inicial em **Botox em três regiões**, esclarecimento de dúvidas e conversão em agendamentos por WhatsApp. Local de atuação informado: **Cambuí, Campinas/SP**. Preservar o nome profissional aprovado: **Dra. Queren Tribioli**.

**Referência de conteúdo existente:** página divulgada anteriormente como `https://kelly-estetica-cambui.azuregoby14.chatgpt.site/`. A referência não foi auditada visualmente nesta especificação: cores, tipografia e componentes abaixo são uma proposta de design profissional, não uma reprodução fiel de elementos não inspecionados.

**Oferta a confirmar antes da publicação:** 15% de desconto, preço promocional informado de **R$ 849,92** para Botox em três regiões. Validar preço-base, prazo, condições, regiões incluídas, elegibilidade e conformidade da publicidade profissional antes de exibir. Não presumir que o desconto ou o preço estejam vigentes indefinidamente.

## 2. Público e posicionamento
Adultos interessados em avaliação estética facial na região de Campinas, especialmente Cambuí. Tom acolhedor, sofisticado e confiável; evitar linguagem sensacionalista, promessas de rejuvenescimento garantido ou pressão comercial. Priorizar a credibilidade da profissional, informação clara e contato facilitado.

## 3. Identidade visual / design system
### Paleta (tokens)
- `--color-background: #FAF8F5` (marfim suave)
- `--color-surface: #FFFFFF` (cards)
- `--color-primary: #5C514D` (taupe escuro)
- `--color-primary-hover: #463D39`
- `--color-accent: #B58E79` (rosé terroso)
- `--color-accent-soft: #F1E5DF`
- `--color-text: #2D2927`
- `--color-muted: #716B67`
- `--color-border: #E8E1DC`
- `--color-success: #236D4B` (status, quando necessário)
- `--color-focus: #244E83` (foco acessível)

Manter contraste WCAG AA: texto comum >= 4.5:1, texto grande >= 3:1. Evitar texto pequeno em rosé claro.

### Tipografia
- Títulos: **Cormorant Garamond** (fallback Georgia, serif).
- Corpo e interface: **Inter** (fallback system-ui, sans-serif).
- H1: clamp(2.5rem, 6vw, 4.5rem), line-height 1.05.
- H2: clamp(2rem, 4vw, 3rem), line-height 1.15.
- Corpo: 16–18px, line-height 1.6; labels >= 14px.
- Pesos: títulos 500–600, corpo 400, botões 600.

### Espaçamento e componentes
- Grid de 8px; escala: 4, 8, 12, 16, 24, 32, 48, 64, 96.
- Container máximo: 1200px, padding horizontal 20px mobile / 40px desktop.
- Breakpoints: 640, 768, 1024, 1280px.
- Bordas: cards 20px, inputs 12px, botões pill 999px.
- Sombra: `0 12px 40px rgba(45,41,39,.08)`.
- Botões: altura mínima 48px; hover, focus-visible, loading e disabled.
- Animações discretas 150–250ms; respeitar `prefers-reduced-motion`.
- Ícones: Lucide; espessura uniforme; nunca depender apenas de ícone para significado.

## 4. Arquitetura da página
1. **Header fixo leve:** logotipo tipográfico 'Dra. Queren Tribioli', links Início, Tratamento, Sobre, Dúvidas, Contato; botão Agendar avaliação. Menu mobile acessível.
2. **Hero:** fotografia profissional autorizada, título 'Cuidado estético com naturalidade e atenção a você', subtítulo sobre avaliação individualizada, CTA 'Agendar avaliação' e CTA secundário 'Conhecer o tratamento'. Não usar antes/depois fictícios.
3. **Benefícios informativos:** três cards: avaliação individual, atendimento acolhedor, orientações de segurança. Evitar garantir resultados.
4. **Tratamento em destaque:** 'Toxina botulínica — três regiões'; explicação breve do procedimento, indicação dependente de avaliação, duração e efeitos variáveis; condições da oferta somente após confirmação.
5. **Sobre a profissional:** foto real, mini-biografia, formação e número de conselho/registro **somente após validação documental**. Não inventar especialização, título ou credenciais.
6. **Como funciona:** avaliação → plano individualizado → procedimento quando indicado → orientações e acompanhamento.
7. **FAQ:** para quem é indicado? dói? quanto dura? há contraindicações? quando aparecem os efeitos? como agendar? Respostas educativas, não diagnósticas; revisão pela profissional.
8. **Localização:** Cambuí, Campinas/SP; endereço completo, mapa e horário só após confirmação.
9. **CTA final:** 'Converse com nossa equipe e agende sua avaliação'.
10. **Footer:** contato, redes oficiais confirmadas, política de privacidade, identificação profissional obrigatória conforme regras aplicáveis.

## 5. Responsividade
- Mobile-first; hero em coluna única no celular, imagem abaixo do texto; desktop em duas colunas (55/45).
- Cards: 1 coluna mobile, 2 tablet, 3 desktop.
- Header vira menu expansível; links com alvos >= 44x44px.
- CTA de WhatsApp flutuante no mobile, sem cobrir conteúdo, banners ou campos; ocultar/recolher ao abrir menus e modais.
- Imagens em `aspect-ratio` definido para evitar layout shift; servir WebP/AVIF com tamanhos responsivos.

## 6. Funcionalidades
### WhatsApp
- Botões em hero, tratamento, rodapé e flutuante.
- URL `https://wa.me/<NUMERO_VALIDADO>?text=<MENSAGEM_URL_ENCODED>`.
- Mensagem sugerida: 'Olá! Gostaria de agendar uma avaliação com a Dra. Queren Tribioli.'
- Número deve vir de variável de ambiente/configuração, **não reutilizar automaticamente números de outros projetos**.
- Registrar evento `whatsapp_click` com origem do botão, sem enviar dados sensíveis.

### Oferta
- Bloco opcional de preço com configuração CMS/arquivo: `enabled`, `price`, `originalPrice`, `discountPercent`, `startAt`, `endAt`, `terms`.
- Validar matematicamente percentual e valores. Se informações incompletas ou prazo vencido, ocultar preço promocional e exibir 'Consulte condições na avaliação'.
- Não implementar contadores falsos, escassez artificial ou avaliações fabricadas.

### Conteúdo e mídia
- Galeria de fotos reais autorizadas; `alt` descritivo, lazy loading abaixo da dobra.
- Depoimentos somente com consentimento documentado e quando permitidos pelas regras profissionais.
- Formulário de contato **opcional** na V2: nome, contato e mensagem; consentimento e política LGPD; não solicitar histórico clínico em formulário público.

### SEO
- `title`: 'Dra. Queren Tribioli | Estética Facial no Cambuí, Campinas'.
- `meta description` com atendimento e avaliação; canonical em domínio definitivo.
- Open Graph/Twitter card, favicon, sitemap.xml, robots.txt, URLs semânticas.
- Schema.org `LocalBusiness` ou subtipo adequado apenas com dados verificados; sem inventar avaliações.

## 7. Tecnologia e estrutura sugeridas
- **Next.js (App Router) + TypeScript + Tailwind CSS**.
- Componentes acessíveis (Radix/shadcn-ui quando necessário), ícones Lucide.
- Fontes otimizadas com `next/font`; imagens `next/image`.
- Deploy em Vercel ou hospedagem compatível, domínio próprio e HTTPS.
- Estrutura: `src/app/page.tsx`, `layout.tsx`, `globals.css`; `src/components/{Header,Hero,Treatment,About,FAQ,ContactCTA,Footer,WhatsAppButton}.tsx`; `src/config/site.ts`; `public/images/`.
- Centralizar textos, contatos e regras da oferta em `src/config/site.ts`; não espalhar constantes pelos componentes.
- Não implementar painel administrativo, login ou financeiro nesta primeira versão: escopo é **página pública da profissional**.

## 8. Acessibilidade, desempenho, segurança e LGPD
- HTML semântico, navegação por teclado, foco visível, labels, headings em ordem, `aria-expanded` no menu, FAQ em disclosure acessível.
- Lighthouse alvos: Performance >= 90, Accessibility >= 95, Best Practices >= 95, SEO >= 95 (mobile em ambiente de produção, sujeitos a teste).
- Core Web Vitals: LCP <= 2.5s, INP <= 200ms, CLS <= .1 no percentil 75.
- Não carregar scripts de rastreamento antes do consentimento quando exigido; consentimento granular para analytics/marketing.
- Política de privacidade com controlador, finalidade, base legal, retenção e canal de direitos. Dados de saúde são sensíveis; não capturá-los em analytics.
- Nunca expor chaves privadas no frontend; sanitizar entradas caso formulário seja adicionado.
- Respeitar normas de publicidade aplicáveis à habilitação e conselho da profissional; revisar título 'Dra.', registro, procedimentos e ofertas antes do lançamento.

## 9. Conteúdo de exemplo (sujeito à aprovação)
**Hero H1:** 'Realce sua beleza com cuidado e naturalidade.'

**Subtítulo:** 'Atendimento estético facial individualizado no Cambuí, em Campinas. Agende uma avaliação e conheça as possibilidades para você.'

**Tratamento:** 'A toxina botulínica pode ser indicada para determinadas linhas de expressão. A avaliação profissional considera suas características, objetivos e possíveis contraindicações.'

**CTA:** 'Agendar minha avaliação'.

**Aviso:** 'A indicação, os resultados e a duração do efeito variam de pessoa para pessoa. Procedimentos sujeitos à avaliação profissional.'

## 10. Critérios de aceite
- [ ] Nome correto em todas as telas e metadados: Dra. Queren Tribioli.
- [ ] Layout sem rolagem horizontal em 320, 375, 768, 1024 e 1440px.
- [ ] Todos os CTAs de WhatsApp abrem o número validado com mensagem correta.
- [ ] Promoção é exibida apenas se preço, condições e prazo estiverem aprovados.
- [ ] Menu mobile, FAQ e navegação por teclado funcionam.
- [ ] Fotos têm autorização, textos alternativos e formatos otimizados.
- [ ] Sem credenciais ou endereço inventados; placeholders bloqueiam publicação final.
- [ ] SEO e Open Graph configurados no domínio oficial.
- [ ] Testes de acessibilidade e Lighthouse executados e resultados documentados.
- [ ] Política LGPD e publicidade revisadas antes do go-live.

## 11. Plano de execução para Claude Code / Cloud Code
**Etapa 1 — Scaffold:** criar projeto Next.js + TypeScript + Tailwind, tokens e componentes básicos.

**Etapa 2 — Interface:** montar todas as seções com conteúdo centralizado e imagens placeholder claramente identificadas.

**Etapa 3 — Interação:** implementar menu mobile, FAQ, CTAs WhatsApp e bloco de oferta condicionado à validação.

**Etapa 4 — Qualidade:** testes responsivos, teclado, Lighthouse, metadados, links, estados e LGPD.

**Etapa 5 — Publicação:** confirmar dados profissionais, telefone, fotos, oferta, endereço, domínio e políticas; fazer deploy HTTPS e validar produção.

### Prompt pronto para colar no Claude Code
> Implemente a landing page descrita neste arquivo SPEC como um projeto Next.js App Router com TypeScript e Tailwind. Siga rigorosamente os tokens, layout, componentes, responsividade, acessibilidade, SEO e critérios de aceite. Crie código modular e pronto para produção. Não invente dados profissionais, telefone, fotos, endereço ou condições comerciais: use placeholders explícitos e centralizados em `src/config/site.ts`. Oculte a promoção até que os campos sejam validados. Ao final, execute lint, build e testes disponíveis, corrija erros e forneça instruções de execução e deploy. Não inclua painel financeiro nem recursos odontológicos nesta landing page.

## 12. Dados pendentes para finalizar
Telefone oficial de agendamento; fotos autorizadas; biografia/formação e registro; endereço e horários; redes sociais; domínio definitivo; condições completas da promoção e autorização de publicidade; texto da política de privacidade. Sem esses dados, a entrega é um protótipo funcional, não uma publicação final validada.
