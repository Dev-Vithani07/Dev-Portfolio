"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const links = [
  { label: "Home",     href: "home"     },
  { label: "About",    href: "about"    },
  { label: "Skills",   href: "skills"   },
  { label: "Projects", href: "projects" },
  { label: "Contact",  href: "contact"  },
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive]     = useState('home')
  const [isOpen, setIsOpen]     = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { threshold: 0.4 }
    )
    links.forEach(({ href }) => {
      const el = document.getElementById(href)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id) => {
    setIsOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
        className={`
          fixed top-0 left-0 right-0 z-50
          h-16 px-6 md:px-12
          flex items-center justify-between
          backdrop-blur-xl border-b
          transition-all duration-300
          ${scrolled
            ? 'border-white/7'
            : 'border-transparent'
          }
        `}
        style={{
          background: scrolled
            ? 'rgba(5, 5, 15, 0.95)'
            : 'rgba(5, 5, 15, 0.50)',
        }}
      >

        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => scrollTo("home")}
          className="font-display font-extrabold text-xl cursor-pointer"
          style={{ color: '#f0eeff' }}
        >
          Dev<span style={{ color: '#7F77DD' }}>.</span>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-9">
          {links.map((link, i) => (
            <motion.button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.07, duration: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#f0eeff'}
              onMouseLeave={(e) => e.currentTarget.style.color = active === link.href ? '#f0eeff' : 'rgba(160,155,210,0.5)'}
              className="font-mono text-xs tracking-widest bg-transparent border-none cursor-pointer transition-colors duration-200 relative"
              style={{
                color: active === link.href
                  ? '#f0eeff'
                  : 'rgba(160, 155, 210, 0.5)',
              }}
            >
              {link.label}

              {/* Active underline */}
              {active === link.href && (
                <motion.div
                  layoutId="activeLink"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  className="absolute -bottom-0.5 left-0 right-0 h-px rounded-full"
                  style={{ background: 'var(--gradient-button)' }}
                />
              )}
            </motion.button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <motion.button
            onClick={() => scrollTo("contact")}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#f0eeff'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#AFA9EC'}
            className="hidden md:block px-5 py-2 rounded-full font-mono text-xs cursor-pointer transition-all duration-200"
            style={{
              border: '1px solid rgba(127,119,221,0.4)',
              background: 'transparent',
              color: '#AFA9EC',
            }}
          >
            Hire Me
          </motion.button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-2xl flex items-center justify-center cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            style={{ color: '#f0eeff' }}
          >
            <i className={isOpen ? "ri-close-line" : "ri-menu-line"}></i>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#05050f]/95 backdrop-blur-xl flex flex-col items-center justify-center pt-16 md:hidden"
          >
            <div className="flex flex-col gap-8 w-full px-6 text-center">
              {links.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="font-display font-bold text-2xl transition-colors duration-200"
                  style={{
                    color: active === link.href ? '#f0eeff' : 'rgba(160, 155, 210, 0.5)',
                  }}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo("contact")}
                className="mt-4 mx-auto px-8 py-3 rounded-full font-mono text-sm"
                style={{
                  background: 'var(--gradient-button)',
                  color: '#fff',
                }}
              >
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar