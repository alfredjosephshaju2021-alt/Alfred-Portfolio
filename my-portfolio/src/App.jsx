import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import ProjectView from './pages/ProjectView.jsx'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined
    }

    if (!('IntersectionObserver' in window)) {
      return undefined
    }

    const elements = document.querySelectorAll(
      '.portfolio .hero-content, .portfolio .section-block, .portfolio .footer',
    )
    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            currentObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0, rootMargin: '0px 0px 100px 0px' },
    )

    document.documentElement.classList.add('motion-ready')
    elements.forEach((element) => observer.observe(element))

    return () => {
      observer.disconnect()
      document.documentElement.classList.remove('motion-ready')
    }
  }, [])

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className={`portfolio${isDarkMode ? ' dark-mode' : ''}`}>
            <Navbar
              isDarkMode={isDarkMode}
              onToggleTheme={() => setIsDarkMode((currentMode) => !currentMode)}
            />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
          </div>
        }
      />
      <Route path="/projects/:projectId" element={<ProjectView />} />
      <Route path="*" element={<ProjectView />} />
    </Routes>
  )
}

export default App
