import React from 'react'

export default function CTA() {
  return (
    <section id="contatti" className="py-24" style={{ background: 'linear-gradient(180deg,#141725 0%, #0f1115 100%)' }}>
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl md:text-4xl text-white mb-4" style={{ fontFamily: 'General Sans, sans-serif' }}>
          Vuoi vedere Nimira al lavoro sul tuo studio?
        </h2>
        <p className="text-[#d0d4f6] mb-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Mostraci come lavori oggi, ti facciamo vedere quali parti possiamo automatizzare senza perdere il contatto umano.
        </p>
        <a href="#" className="inline-block px-6 py-3 rounded-full bg-[#8b7dff] text-white hover:bg-[#bebfff] hover:text-[#0f1115] transition-colors">
          Prenota una demo gratuita
        </a>
        <p className="text-sm text-[#d0d4f6] mt-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          O scrivici a: hello@nimira.ai (placeholder) per domande specifiche.
        </p>
      </div>
    </section>
  )
}
