'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '@/data/ProjectsData'

const filters = ['All', 'AI/ML', 'Web', 'Flutter']

const filterMap = {
  'All':     'all',
  'AI/ML':   'ai',
  'Web':     'web',
  'Flutter': 'flutter',
}

export default function Projects() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? projects
    : projects.filter((p) => p.category === filterMap[active])

  return (
    <>
      <section
        id="projects"
        className="px-6 md:px-12 lg:px-24 py-16 lg:py-24"
        style={{ background: 'var(--bg-base)' }}
      >

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 0.61, 0.36, 1] }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between flex-wrap gap-6 mb-12"
        >
          <div>
            <p
              className="font-mono text-xs tracking-widest uppercase mb-3"
              style={{ color: '#7F77DD' }}
            >
              03 / projects
            </p>
            <h2
              className="font-display font-extrabold leading-none tracking-tight"
              style={{ fontSize: 'clamp(36px, 4vw, 52px)', color: '#f0eeff' }}
            >
              What I Built
            </h2>
          </div>

          {/* Filters */}
          <div className="flex gap-3 flex-wrap">
            {filters.map((f) => (
              <motion.button
                key={f}
                onClick={() => setActive(f)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="px-4 py-2 rounded-full font-mono text-xs cursor-pointer transition-all duration-200"
                style={{
                  background: active === f ? 'rgba(127,119,221,0.15)' : 'transparent',
                  border: active === f
                    ? '1px solid rgba(127,119,221,0.5)'
                    : '1px solid rgba(255,255,255,0.08)',
                  color: active === f ? '#AFA9EC' : 'rgba(160,155,210,0.5)',
                }}
              >
                {f}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Cards */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                whileHover={{ y: -6 }}
                className="flex flex-col gap-4 p-6 rounded-2xl cursor-pointer"
                style={{
                  background: 'var(--bg-surface)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  transition: 'border-color 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${project.color}60`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                }}
              >

                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                  style={{ background: project.bg }}
                >
                  {project.icon}
                </div>

                {/* Name & Type */}
                <div>
                  <h3
                    className="font-display font-bold text-base mb-1"
                    style={{ color: '#f0eeff' }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="font-mono text-xs tracking-widest"
                    style={{ color: 'rgba(160,155,210,0.4)' }}
                  >
                    {project.type}
                  </p>
                </div>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed font-light flex-1"
                  style={{ color: 'rgba(160,155,210,0.55)' }}
                >
                  {project.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded font-mono text-xs"
                      style={{
                        background: project.bg,
                        color: project.color,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </section>
    </>
  )
}