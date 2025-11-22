import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Target from './components/Target'
import Value from './components/Value'
import HowItWorks from './components/HowItWorks'
import Integrations from './components/Integrations'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(180deg,#0f1115 0%, #1f223c 100%)' }}>
      <Navbar />
      <Hero />
      <Target />
      <Value />
      <HowItWorks />
      <Integrations />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
