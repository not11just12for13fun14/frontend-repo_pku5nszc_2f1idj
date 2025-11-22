import React from 'react'

export default function HowItWorks() {
  const steps = [
    {
      title: 'Il paziente scrive al chatbot',
      text: 'Dal sito, da una pagina dedicata o da un link inviato via email/WhatsApp. Il bot fa poche domande chiare: chi sei, di cosa hai bisogno, quando preferisci.'
    },
    {
      title: 'Nimira apre un ticket e salva i dati',
      text: 'Nome, cognome, numero di telefono, email, richiesta e note vengono salvati in tempo reale su un Google Sheet strutturato.'
    },
    {
      title: 'Agenda e risposte automatiche',
      text: 'In base alle tue regole, Nimira propone fasce orarie, aggiorna Google Calendar e invia email automatiche di conferma o richiesta di integrazione tramite Gmail.'
    },
    {
      title: 'Report e monitoraggio',
      text: 'Ogni ticket alimenta una dashboard che ti mostra picchi di richieste, motivi più frequenti e tempi di risposta. Senza toccare una riga di codice.'
    },
  ]

  return (
    <section id="come-funziona" className="py-24" style={{ background: 'linear-gradient(180deg,#1f223c 0%, #1a1d31 100%)' }}>
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl md:text-4xl text-white mb-3" style={{ fontFamily: 'General Sans, sans-serif' }}>
          Dal messaggio del paziente al promemoria sul calendario.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">
          {steps.map((s, i) => (
            <div key={s.title} className="relative rounded-3xl bg-white/5 border border-white/10 p-6">
              <div className="w-10 h-10 rounded-full bg-[#8b7dff] text-white flex items-center justify-center mb-4">{i+1}</div>
              <h3 className="text-white text-lg mb-2" style={{ fontFamily: 'General Sans, sans-serif' }}>{s.title}</h3>
              <p className="text-[#d0d4f6] text-sm" style={{ fontFamily: 'Montserrat, sans-serif' }}>{s.text}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-white/20" />
              )}
            </div>
          ))}
        </div>
        <p className="text-[#d0d4f6] mt-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          L’implementazione viene configurata una volta sola, poi Nimira lavora in autonomia.
        </p>
      </div>
    </section>
  )
}
