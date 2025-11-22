import React from 'react'

export default function Target() {
  return (
    <section id="per-chi" className="py-24" style={{ background: 'linear-gradient(180deg,#10121A 0%, #151834 100%)' }}>
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl md:text-4xl text-white mb-4" style={{ fontFamily: 'General Sans, sans-serif' }}>
          Pensato per chi lavora con i pazienti, non con le email.
        </h2>
        <p className="text-[#d0d4f6] mb-12 max-w-3xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Cliniche, studi medici privati, centri di fisioterapia: Nimira nasce per chi riceve ogni giorno decine di richieste ripetitive e ha bisogno di ordine, continuità e tempo.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[{
            title: 'Cliniche e poliambulatori',
            text: 'Gestisci più specialisti, sale e agende senza inseguire telefonate e messaggi. Il chatbot smista le richieste, il sistema tiene traccia di tutto.'
          }, {
            title: 'Studi medici privati',
            text: 'Riduci il lavoro di segreteria, automatizza le risposte a domande frequenti e lascia che Nimira raccolga i dati essenziali di ogni nuovo paziente.'
          }, {
            title: 'Studi di fisioterapia',
            text: 'Organizza richieste di prime visite, piani di sedute e follow-up post trattamento, collegando chatbot, agenda e report.'
          }].map((c) => (
            <div key={c.title} className="rounded-3xl bg-white/5 border border-white/10 p-6 shadow-[0_0_30px_rgba(139,125,255,0.08)]">
              <h3 className="text-white text-xl mb-2" style={{ fontFamily: 'General Sans, sans-serif' }}>{c.title}</h3>
              <p className="text-[#d0d4f6]" style={{ fontFamily: 'Montserrat, sans-serif' }}>{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
