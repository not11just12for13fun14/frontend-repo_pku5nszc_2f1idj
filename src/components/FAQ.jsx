import React, { useState } from 'react'

function Item({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5">
      <button onClick={() => setOpen(!open)} className="w-full text-left p-5 flex items-center justify-between">
        <span className="text-white" style={{ fontFamily: 'General Sans, sans-serif' }}>{q}</span>
        <span className="text-[#bebfff]">{open ? '–' : '+'}</span>
      </button>
      {open && (
        <div className="px-5 pb-5 text-[#d0d4f6]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          {a}
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  const faqs = [
    {
      q: 'Serve cambiare il gestionale che usiamo in studio?',
      a: 'No. Nimira lavora sopra gli strumenti che utilizzi già, come Google Calendar, Gmail e Google Sheets. Non sostituisce il tuo gestionale medico, ma lo affianca.'
    },
    {
      q: 'I pazienti parleranno con un robot?',
      a: 'Sì, ma con un flusso progettato apposta per il tuo studio. Il chatbot fa solo le domande necessarie, in modo chiaro e rispettoso, e passa la mano alle persone quando serve.'
    },
    {
      q: 'Quanto tempo richiede l’implementazione?',
      a: 'La configurazione base richiede in genere meno di una settimana, con una sessione guidata iniziale di circa 60 minuti.'
    },
    {
      q: 'Come gestite la privacy dei dati?',
      a: 'I dati restano nei tuoi account (Google Sheet, Calendar, Gmail). Nimira non crea un nuovo database proprietario, ma orchestra i servizi che già controlli.'
    },
    {
      q: 'Possiamo provare Nimira su uno studio pilota?',
      a: 'Sì, è possibile partire con un singolo studio o reparto e poi estendere la configurazione ad altre sedi.'
    },
  ]
  return (
    <section id="faq" className="py-24" style={{ background: 'linear-gradient(180deg,#0f1115 0%, #141725 100%)' }}>
      <div className="mx-auto max-w-4xl px-6 space-y-4">
        <h2 className="text-3xl md:text-4xl text-white mb-6" style={{ fontFamily: 'General Sans, sans-serif' }}>
          Domande frequenti.
        </h2>
        {faqs.map((f) => <Item key={f.q} q={f.q} a={f.a} />)}
      </div>
    </section>
  )
}
