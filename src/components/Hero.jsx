import { useState, useEffect, useRef } from 'react'

function AnimatedCounter({ target, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const startTime = performance.now()
          const numericTarget = parseInt(target, 10)

          const animate = (currentTime) => {
            const elapsed = currentTime - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * numericTarget))
            if (progress < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
          observer.unobserve(node)
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [target, duration])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

export default function Hero() {
  return (
    <section id="domov" className="relative min-h-screen flex items-center justify-center bg-gray-950 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Profesionálne elektrikárske
          </span>
          <br />
          <span className="text-white">služby pre Váš domov aj firmu</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-8">
          Spoľahlivé elektroinštalácie, opravy, revízie a montáže od certifikovaných odborníkov s dlhoročnými skúsenosťami v Bratislave a okolí.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#kontakt"
            className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950"
          >
            Požiadať o cenovú ponuku
          </a>
          <a
            href="#sluzby"
            className="border border-gray-600 hover:border-blue-400 text-gray-300 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950"
          >
            Zistiť viac o službách
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-white">
              <AnimatedCounter target="500" suffix="+" />
            </div>
            <div className="text-sm text-gray-400 mt-1">dokončených projektov</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">
              <AnimatedCounter target="12" />
            </div>
            <div className="text-sm text-gray-400 mt-1">rokov skúseností</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">
              <AnimatedCounter target="4" suffix=".9★" />
            </div>
            <div className="text-sm text-gray-400 mt-1">hodnotenie zákazníkov</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">
              <AnimatedCounter target="24" suffix="h" />
            </div>
            <div className="text-sm text-gray-400 mt-1">pohotovostná služba</div>
          </div>
        </div>
      </div>
    </section>
  )
}
