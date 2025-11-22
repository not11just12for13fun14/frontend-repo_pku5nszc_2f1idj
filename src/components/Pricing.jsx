import React from 'react'

function Card({ title, subtitle, price, bullets, cta }) {
  return (
    <div className="rounded-3xl bg-white/5 border border-white/10 p-6 flex flex-col">
      <div className="mb-4">
        <h3 className="text-white text-xl" style={{ fontFamily: 'General Sans, sans-serif' }}>{title}</h3>
        {subtitle && <p className="text-[#d0d4f6]" style={{ fontFamily: 'Montserrat, sans-serif' }}>{subtitle}</p>}
      </div>
      {price && <div className="text-3xl text-white mb-4" style={{ fontFamily: 'General Sans, sans-serif' }}>{price}</div>}
      <ul className="space-y-2 text-[#d0d4f6] mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
        {bullets.map((b) => (
          <li key={b}>– {b}</li>
        ))}
      </ul>
      <div className="mt-auto">
        <a href="#contatti" className="inline-block w-full text-center px-4 py-2 rounded-full bg-[#8b7dff] text-white hover:bg-[#bebfff] hover:text-[#0f1115] transition-colors">
          {cta}
        </a>
      </div>
    </div>
  )
}

export default function Pricing() {
  return (
    <section id="prezzi" className="py-24 bg-gradient-to-b from-[#141725] to-[#0f1115]">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl md:text-4xl text-white mb-10" style={{ fontFamily: 'General Sans, sans-serif' }}>
          Un prezzo chiaro, pensato per studi reali.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card
            title="Starter"
            subtitle="Per studi singoli"
            price="79 €/mese"
            bullets={[
              '1 chatbot per studio',
              'Integrazione con 1 Google Calendar',
              '1 Google Sheet di raccolta dati',
              'Report mensile base',
            ]}
            cta="Prenota una demo"
          />

          <Card
            title="Clinic"
            subtitle="Per cliniche e poliambulatori"
            price="149 €/mese"
            bullets={[
              'Fino a 3 chatbot (es. per reparto / lingua)',
              'Integrazione con più calendari',
              'Sheet multipli per sedi o team',
              'Report dettagliati e filtri avanzati',
              'Supporto alla configurazione iniziale',
            ]}
            cta="Parla con noi"
          />

          <Card
            title="Enterprise"
            subtitle="Per gruppi e reti di studi"
            bullets={[
              'Piano su misura per strutture complesse.',
              'Chatbot multipli',
              'Integrazioni personalizzate',
              'SLA dedicato',
              'Supporto continuo',
            ]}
            cta="Richiedi un contatto"
          />
        </div>

        <p className="text-[#d0d4f6] mt-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Tutti i piani includono aggiornamenti continui e nessun vincolo annuale.
        </p>
      </div>
    </section>
  )
}
