import Header from './Components/Header'
import Hero from './Components/Hero'
import About from './Components/About'
import Services from './Components/Services'
import Project from './Components/Project'
import Skills from './page/Skills'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

function App() {
  return (
    <>
      <Header />

      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="service">
        <Services />
      </section>

      <section id="projects">
        <Project />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </>
  )
}

export default App
