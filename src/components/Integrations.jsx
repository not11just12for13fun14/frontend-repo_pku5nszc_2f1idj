import React from 'react'

export default function Integrations() {
  const items = [
    { title: 'Google Sheets', text: 'Archivio centrale dei ticket, pronto per filtri, esportazioni e condivisioni.' },
    { title: 'Google Calendar', text: 'Gestione di agende, sale e slot disponibili senza doppie prenotazioni.' },
    { title: 'Gmail', text: 'Invio automatico di conferme, promemoria, follow-up e richieste di documenti.' },
  ]
  return (
    <section id="integrazioni" className="py-24 bg-gradient-to-b from-[#1a1d31] to-[#141725]">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl md:text-4xl text-white mb-3" style={{ fontFamily: 'General Sans, sans-serif' }}>
          Si collega agli strumenti che usi già.
        </h2>
        <p className="text-[#d0d4f6] mb-12 max-w-3xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Niente software da cambiare. Nimira si appoggia a servizi che il tuo studio conosce già.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="rounded-3xl bg-white/5 border border-white/10 p-6">
              <h3 className="text-white text-xl mb-2" style={{ fontFamily: 'General Sans, sans-serif' }}>{it.title}</h3>
              <p className="text-[#d0d4f6]" style={{ fontFamily: 'Montserrat, sans-serif' }}>{it.text}</p>
            </div>
          ))}
        </div>

        <p className="text-[#d0d4f6] mt-10" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Altri servizi possono essere aggiunti tramite n8n, in base alle esigenze del tuo studio.
        </p>
      </div>
    </section>
  )
}
