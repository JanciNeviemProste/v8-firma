import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Contact() {
  const ref = useScrollAnimation()
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="kontakt" className="bg-gray-950 py-16 lg:py-24">
      <div ref={ref} className="fade-in max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Kontaktujte nás
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Máte otázku alebo potrebujete cenovú ponuku? Napíšte nám alebo zavolajte. Odpovieme do 24 hodín.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-8">
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-xl font-semibold text-white mb-2">Správa bola odoslaná</h3>
                <p className="text-gray-400">Ďakujeme za Vašu správu. Ozveme sa Vám čo najskôr.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Meno a priezvisko *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-gray-800 border border-gray-700 text-gray-100 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                    placeholder="Ján Novák"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-gray-800 border border-gray-700 text-gray-100 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                    placeholder="jan.novak@email.sk"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Telefón
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full bg-gray-800 border border-gray-700 text-gray-100 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                    placeholder="+421 9XX XXX XXX"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Správa *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full bg-gray-800 border border-gray-700 text-gray-100 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 resize-y"
                    placeholder="Opíšte, čo potrebujete..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-400 text-white px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  Odoslať správu
                </button>
              </form>
            )}
          </div>

          <div className="space-y-8">
            <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-white mb-6">Kontaktné údaje</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-blue-400 text-xl mt-0.5">📍</span>
                  <div>
                    <div className="text-gray-300 font-medium">Adresa</div>
                    <div className="text-gray-400">Elektrárenská 12, 831 04 Bratislava</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-400 text-xl mt-0.5">📞</span>
                  <div>
                    <div className="text-gray-300 font-medium">Telefón</div>
                    <div className="text-gray-400">+421 902 345 678</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-400 text-xl mt-0.5">📧</span>
                  <div>
                    <div className="text-gray-300 font-medium">E-mail</div>
                    <div className="text-gray-400">info@elektroservis.sk</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-white mb-6">Otváracie hodiny</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-gray-400">
                  <span>Pondelok – Piatok</span>
                  <span className="text-gray-300 font-medium">7:00 – 17:00</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Sobota</span>
                  <span className="text-gray-300 font-medium">8:00 – 12:00</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Nedeľa</span>
                  <span className="text-red-400 font-medium">Zatvorené</span>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-700/50">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-green-400 text-sm font-medium">Havarijnú službu poskytujeme 24/7</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
