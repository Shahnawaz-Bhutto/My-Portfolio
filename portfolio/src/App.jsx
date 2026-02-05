import React from 'react'
import Header from './Components/Header'
import About from './Components/About'
import Services from './Components/Services'
import Contact from './Components/Contact'
import Home from './page/Home'
import Project from './Components/Project'
import Skills from './page/Skills'
import Footer from './Components/Footer'

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Services />
      <Project />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
