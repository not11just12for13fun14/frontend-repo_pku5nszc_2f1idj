import React from 'react'

const navItems = [
  { label: 'Per chi è', href: '#per-chi' },
  { label: 'Funzioni', href: '#cosa-fa' },
  { label: 'Prezzi', href: '#prezzi' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md/50">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <img
            src="https://ibb.co/MxL7kz09"
            alt="NIMIRA"
            className="h-8 w-8 rounded-full ring-1 ring-white/10 object-cover"
          />
          <span className="text-white text-lg tracking-wide font-semibold" style={{ fontFamily: 'General Sans, sans-serif' }}>NIMIRA</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-[#d0d4f6] hover:text-white transition-colors">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a href="#contatti" className="px-4 py-2 rounded-full border border-[#8b7dff] text-white text-sm hover:shadow-[0_0_30px_rgba(139,125,255,0.35)] hover:border-[#bebfff] transition-all">
            Prenota una demo
          </a>
        </div>
      </div>
    </header>
  )
}
