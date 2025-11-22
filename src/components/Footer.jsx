import React from 'react'

export default function Footer() {
  return (
    <footer className="py-10 border-t border-white/10" style={{ background: 'linear-gradient(180deg,#0f1115 0%, #0f1115 100%)' }}>
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src="https://ibb.co/MxL7kz09" alt="NIMIRA" className="h-8 w-8 rounded-full ring-1 ring-white/10 object-cover" />
          <span className="text-white text-lg font-semibold" style={{ fontFamily: 'General Sans, sans-serif' }}>NIMIRA</span>
        </div>
        <nav className="flex items-center gap-6 text-sm">
          <a href="#" className="text-[#d0d4f6] hover:text-white">Privacy</a>
          <a href="#" className="text-[#d0d4f6] hover:text-white">Termini</a>
          <a href="#contatti" className="text-[#d0d4f6] hover:text-white">Contatti</a>
        </nav>
      </div>
      <div className="mx-auto max-w-7xl px-6 mt-6">
        <p className="text-[#d0d4f6] text-sm" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Nimira automatizza il lavoro ripetitivo, non il rapporto con i tuoi pazienti.
        </p>
      </div>
    </footer>
  )
}
