import React from 'react'

export default function Value() {
  const items = [
    {
      title: 'Risposte immediate ai pazienti',
      text: 'Un chatbot dedicato al tuo studio risponde a domande frequenti, raccoglie i dati minimi e capisce di cosa ha bisogno il paziente, 24/7.'
    },
    {
      title: 'Ticket chiari per ogni richiesta',
      text: 'Ogni conversazione diventa un ticket con nome, cognome, contatto, motivo della richiesta, medico o servizio richiesto e stato di lavorazione.'
    },
    {
      title: 'Dati ordinati in un unico Sheet',
      text: 'Tutte le richieste finiscono in un Google Sheet organizzato: nessun dato perso, nessun copia-incolla. Filtri, ricerche e note in un secondo.'
    },
    {
      title: 'Report per capire davvero i trend',
      text: 'Nimira calcola per te volumi, fasce orarie, motivi principali delle richieste e canalità. Così puoi decidere orari, risorse e comunicazione basandoti sui dati.'
    }
  ]
  return (
    <section id="cosa-fa" className="py-24 bg-gradient-to-b from-[#151834] to-[#1f223c]">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl md:text-4xl text-white mb-3" style={{ fontFamily: 'General Sans, sans-serif' }}>
          Una sola interfaccia, quattro problemi in meno.
        </h2>
        <p className="text-[#d0d4f6] mb-12 max-w-3xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Nimira sostituisce le email sparse, i post-it e i file Excel con un flusso unico, tracciabile e misurabile.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((it) => (
            <div key={it.title} className="rounded-3xl bg-white/5 border border-white/10 p-6">
              <h3 className="text-white text-xl mb-2" style={{ fontFamily: 'General Sans, sans-serif' }}>{it.title}</h3>
              <p className="text-[#d0d4f6]" style={{ fontFamily: 'Montserrat, sans-serif' }}>{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
