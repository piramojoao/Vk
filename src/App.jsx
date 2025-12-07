import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButtons from './components/WhatsAppButtons'
import './App.css'

function App() { 
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Contact />
      <Footer />
      <WhatsAppButtons />
    </div>
  )
}

export default App

