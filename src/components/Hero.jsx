import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[92vh] overflow-hidden" style={{ background: 'linear-gradient(135deg,#0f1115 0%, #1f223c 100%)' }}>
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full opacity-30 blur-3xl" style={{
          background: 'radial-gradient(circle, rgba(139,125,255,0.25) 0%, rgba(190,191,255,0.18) 35%, rgba(31,34,60,0) 60%)'
        }} />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-28 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="flex items-center gap-3 mb-8">
            <img src="https://ibb.co/MxL7kz09" alt="NIMIRA" className="h-10 w-10 rounded-full ring-1 ring-white/10 object-cover" />
            <span className="text-white text-xl font-semibold tracking-wide" style={{ fontFamily: 'General Sans, sans-serif' }}>NIMIRA</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6" style={{ fontFamily: 'General Sans, sans-serif' }}>
            L’assistente silenzioso per la tua segreteria.
          </h1>
          <p className="text-[#d0d4f6] text-lg leading-relaxed max-w-xl mb-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Automazioni AI per cliniche e studi privati: risponde ai pazienti, apre ticket, organizza calendari e ti mostra i trend in un’unica vista.
          </p>

          <div className="flex items-center gap-4 mb-4">
            <a href="#contatti" className="px-6 py-3 rounded-full bg-[#8b7dff] text-white font-medium hover:bg-[#bebfff] hover:text-[#0f1115] transition-colors shadow-[0_0_35px_rgba(139,125,255,0.35)]">
              Prenota una demo
            </a>
            <a href="#come-funziona" className="px-6 py-3 rounded-full border border-[#8b7dff] text-white hover:border-[#bebfff] transition-all">
              Guarda come funziona
            </a>
          </div>
          <p className="text-sm text-[#d0d4f6]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Nessuna carta di credito. Configurazione guidata in 30 minuti.
          </p>
        </div>

        <div className="relative h-[520px]">
          <div className="absolute inset-0 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md p-4">
            <div className="grid grid-cols-5 gap-4 h-full">
              <div className="col-span-3 flex flex-col gap-4">
                <div className="flex-1 rounded-2xl bg-gradient-to-br from-[#8b7dff]/20 to-[#bebfff]/10 border border-white/10 p-4">
                  <div className="text-white/80 text-sm mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>Chat paziente</div>
                  <div className="space-y-3">
                    <div className="max-w-[85%] rounded-2xl bg-white/10 text-white px-3 py-2 text-sm">Buongiorno, sono il bot dello studio. Come posso aiutarti?</div>
                    <div className="max-w-[85%] rounded-2xl bg-[#8b7dff]/20 text-white/90 px-3 py-2 text-sm ml-auto">Vorrei prenotare una prima visita di fisioterapia</div>
                    <div className="max-w-[85%] rounded-2xl bg-white/10 text-white px-3 py-2 text-sm">Perfetto. Mi lasci nome, cognome e un numero?</div>
                    <div className="max-w-[85%] rounded-2xl bg-[#8b7dff]/20 text-white/90 px-3 py-2 text-sm ml-auto">Giulia Bianchi, 333 9876543</div>
                  </div>
                </div>
                <div className="h-28 rounded-2xl bg-gradient-to-br from-[#8b7dff]/20 to-[#bebfff]/10 border border-white/10 p-4">
                  <div className="text-white/80 text-sm mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>Trend richieste</div>
                  <div className="flex items-end gap-2 h-12">
                    {[20, 35, 25, 45, 30, 55, 40].map((h, i) => (
                      <div key={i} className="w-6 bg-[#8b7dff] rounded-t-md" style={{ height: `${h}%`, opacity: 0.85 }} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-span-2 flex flex-col gap-4">
                <div className="flex-1 rounded-2xl bg-gradient-to-br from-[#8b7dff]/10 to-[#bebfff]/5 border border-white/10 p-4">
                  <div className="text-white/80 text-sm mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>Ticket attivo</div>
                  <div className="space-y-2 text-[#d0d4f6] text-sm" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    <div className="flex justify-between"><span>Nome</span><span className="text-white">Giulia</span></div>
                    <div className="flex justify-between"><span>Cognome</span><span className="text-white">Bianchi</span></div>
                    <div className="flex justify-between"><span>Telefono</span><span className="text-white">333 9876543</span></div>
                    <div className="flex justify-between"><span>Motivo</span><span className="text-white">Prima visita fisioterapia</span></div>
                    <div className="flex justify-between"><span>Stato</span><span className="text-white">In attesa conferma</span></div>
                  </div>
                </div>
                <div className="h-40 rounded-2xl bg-gradient-to-br from-[#8b7dff]/10 to-[#bebfff]/5 border border-white/10 p-4">
                  <div className="text-white/80 text-sm mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>Agenda</div>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    {['09:30', '10:00', '10:30', '11:00', '11:30', '12:00'].map((t) => (
                      <div key={t} className="rounded-lg px-2 py-2 text-center bg-white/10 text-white hover:bg-[#8b7dff]/30 transition-colors">{t}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -z-0 right-[-8%] top-1/2 -translate-y-1/2 w-[420px] h-[420px]">
            <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  )
}
