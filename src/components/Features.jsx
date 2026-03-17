import { useScrollAnimation } from '../hooks/useScrollAnimation'

const SERVICES = [
  {
    icon: '🔌',
    title: 'Elektroinštalácie',
    description:
      'Kompletné elektroinštalácie pre novostavby, rekonštrukcie bytov aj komerčné priestory. Navrhujeme a realizujeme rozvody podľa najnovších noriem a bezpečnostných predpisov. Každý projekt riešime individuálne s dôrazom na kvalitu a dlhú životnosť.',
    price: 'od 35 €/h',
  },
  {
    icon: '🔧',
    title: 'Opravy a údržba',
    description:
      'Rýchla diagnostika a oprava elektrických porúch v domácnostiach aj firmách. Riešime výpadky elektriny, nefunkčné zásuvky, ističe a ďalšie problémy. Naši technici sú k dispozícii aj pre havarijnú službu s garantovaným príchodom do 2 hodín.',
    price: 'od 25 €/h',
  },
  {
    icon: '📋',
    title: 'Revízie a kontroly',
    description:
      'Pravidelné revízie elektrických zariadení a rozvodov podľa platnej legislatívy. Vystavíme revíznu správu potrebnú pre poisťovňu, kolaudáciu alebo predaj nehnuteľnosti. Zabezpečíme súlad s technickými normami STN.',
    price: 'od 80 €',
  },
  {
    icon: '🏠',
    title: 'Inteligentná domácnosť',
    description:
      'Inštalácia a konfigurácia inteligentných systémov riadenia osvetlenia, vykurovania a zabezpečenia. Ponúkame riešenia pre ovládanie domácnosti cez smartfón vrátane integrácie s existujúcimi systémami.',
    price: 'od 150 €',
  },
  {
    icon: '💡',
    title: 'LED osvetlenie',
    description:
      'Návrh a montáž moderného LED osvetlenia pre interiéry aj exteriéry. Pomôžeme Vám vybrať správne svietidlá, ktoré znížia spotrebu energie až o 80 % a vytvoria príjemnú atmosféru vo Vašom priestore.',
    price: 'od 45 €',
  },
  {
    icon: '⚡',
    title: 'Rozvádzače a ističe',
    description:
      'Montáž, výmena a modernizácia elektrických rozvádzačov a ističov. Zabezpečíme správne dimenzovanie ochrán, prepäťových ochrán a prúdových chráničov pre maximálnu bezpečnosť Vašej domácnosti.',
    price: 'od 120 €',
  },
]

export default function Features() {
  const ref = useScrollAnimation()

  return (
    <section id="sluzby" className="bg-gray-900 py-16 lg:py-24">
      <div ref={ref} className="fade-in max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Naše služby a cenník
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Poskytujeme široký rozsah elektrikárskych služieb pre domácnosti aj firmy. Všetky práce vykonávame s certifikáciou a zárukou kvality.
          </p>
        </div>

        <div id="cennik" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 hover:scale-[1.02] hover:shadow-xl hover:border-blue-500 transition-all duration-300 cursor-pointer group"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-all duration-300">
                {service.title}
              </h3>
              <p className="text-gray-400 text-base mb-4 leading-relaxed">
                {service.description}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
                <span className="text-blue-400 font-semibold text-lg">{service.price}</span>
                <span className="text-gray-500 text-sm">orientačná cena</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm">
            * Konečná cena závisí od rozsahu a náročnosti prác. Kontaktujte nás pre bezplatnú cenovú ponuku.
          </p>
        </div>
      </div>
    </section>
  )
}
