import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'Domov', href: '#domov' },
  { label: 'Služby', href: '#sluzby' },
  { label: 'Cenník', href: '#cennik' },
  { label: 'Kontakt', href: '#kontakt' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-gray-900/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#domov" className="flex items-center gap-2 text-white font-bold text-xl transition-all duration-300 hover:opacity-80">
            <span className="text-2xl">⚡</span>
            <span>ElektroServis</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-white transition-all duration-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-2 py-1"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#kontakt"
              className="bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Zavolajte nám
            </a>
          </div>

          <button
            className="md:hidden text-white p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Prepnúť menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className="bg-gray-900/95 backdrop-blur-md px-4 pb-4 space-y-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-gray-300 hover:text-white py-2 px-3 rounded-lg hover:bg-gray-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#kontakt"
            onClick={() => setMenuOpen(false)}
            className="block bg-blue-500 hover:bg-blue-400 text-white text-center py-2 px-3 rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Zavolajte nám
          </a>
        </div>
      </div>
    </nav>
  )
}
