import About from '@/section/About'
import Contact from '@/section/Contact'
import Hero from '@/section/Hero'
import Projects from '@/section/Projects'
import Skills from '@/section/Skills'
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