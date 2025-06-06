import { useRef } from 'react'
import { RingProvider } from './context/RingContext'
import Layout from './components/Layout'
import Hero from './components/Hero'
import InsideView from './components/InsideView'
import PrecisionSection from './components/PrecisionSection'
import AccuracySection from './components/AccuracySection'
import BuySection from './components/BuySection'

function App() {
  const buySectionRef = useRef(null)

  return (
    <RingProvider>
      <Layout>
        <Hero buyRef={buySectionRef} />
        <InsideView />
        <PrecisionSection />
        <AccuracySection /> 
        <BuySection ref={buySectionRef} />
      </Layout>
    </RingProvider>
  )
}

export default App