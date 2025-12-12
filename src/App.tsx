import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {
  Hero,
  Context,
  Challenge,
  Insight,
  Tension,
  BigIdea,
  Moodboard,
  KeyVisual,
  Social,
  AIRole,
  Results,
  Closing,
} from './components/sections'

function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Context />
        <Challenge />
        <Insight />
        <Tension />
        <BigIdea />
        <Moodboard />
        <KeyVisual />
        <Social />
        <AIRole />
        <Results />
        <Closing />
      </main>
      <Footer />
    </>
  )
}

export default App
