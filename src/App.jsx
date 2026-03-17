import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WaveDivider from './components/WaveDivider'
import Features from './components/Features'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <div className="bg-gray-950 min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <WaveDivider fromColor="text-gray-950" toColor="text-gray-900" />
        <Features />
        <WaveDivider fromColor="text-gray-900" toColor="text-gray-950" />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
