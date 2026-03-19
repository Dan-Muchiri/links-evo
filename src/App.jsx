import React, { useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Approach from './components/Approach'
import Services from './components/Services'
import Clients from './components/Clients'
import Process from './components/Process'
import Quote from './components/Quote'
import Footer from './components/Footer'

export default function App() {
  // Lifted state: which accordion item is open ('01' … '06')
  const [openService, setOpenService] = useState(null)

  return (
    <>
      <Nav />
      <main>
        <Hero onServiceClick={setOpenService} />
        <Approach />
        <Services openService={openService} setOpenService={setOpenService} />
        <Clients />
        <Process />
        <Quote />
      </main>
      <Footer />
    </>
  )
}
