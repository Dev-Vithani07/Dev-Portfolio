import Hero from '@/section/Hero'
import About from '@/section/About'
import Skills from '@/section/Skills'
import Projects from '@/section/Projects'
import Contact from '@/section/Contact'

import React from 'react'

const page = () => {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}

export default page