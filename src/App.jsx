import React, { useRef } from 'react'
import Sidenav from './components/Sidenav'
import Hero from './components/Hero'

import News from './components/News'
import About from './components/About'
import Contact from './components/Contact'


function App() {
  const homeRef = useRef(null)

  const aboutRef = useRef(null)
  const newsRef = useRef(null)
  const contactRef = useRef(null)

  return (
    <div>
      <Sidenav
        homeRef={homeRef}
      
        aboutRef={aboutRef}
        newsRef={newsRef}
        contactRef={contactRef}
      />
      <div ref={homeRef}><Hero /></div>
    
      <div ref={aboutRef}><About /></div>
      <div ref={newsRef}><News /></div>
      <div ref={contactRef}><Contact /></div>
      
    </div>
  )
}

export default App
