import Hero from './components/Hero'
import ValueProp from './components/ValueProp'
import Stats from './components/Stats'
import CTA from './components/CTA'
import Team from './components/Team'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Hero />
      <ValueProp />
      <Stats />
      <CTA />
      <Team />
      <Footer />
    </div>
  )
}

export default App
