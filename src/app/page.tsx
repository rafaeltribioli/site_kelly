import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Benefits from '@/components/Benefits'
import Treatment from '@/components/Treatment'
import About from '@/components/About'
import HowItWorks from '@/components/HowItWorks'
import FAQ from '@/components/FAQ'
import Location from '@/components/Location'
import ContactCTA from '@/components/ContactCTA'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Benefits />
        <Treatment />
        <About />
        <HowItWorks />
        <FAQ />
        <Location />
        <ContactCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
