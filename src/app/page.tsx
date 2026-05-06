import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TrustedBy from '@/components/TrustedBy'
import About from '@/components/About'
import Solutions from '@/components/Solutions'
import Differentials from '@/components/Differentials'
import Locations from '@/components/Locations'
import FAQ from '@/components/FAQ'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <About />
        <Solutions />
        <Differentials />
        <Locations />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
