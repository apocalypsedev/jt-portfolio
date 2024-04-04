import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Footer/>
    </>
  )
}

export default App