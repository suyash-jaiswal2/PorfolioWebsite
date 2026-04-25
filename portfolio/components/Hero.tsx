'use client'
import { motion } from 'framer-motion'
import { ArrowRight, Download, MapPin } from 'lucide-react'
import TopoBackground from '@/components/TopoBackground'

const rise = (delay = 0) => ({
  initial:    { opacity: 0, y: 22 },
  animate:    { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
})

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex flex-col justify-center pt-24 pb-12 px-6">
      <TopoBackground opacity={0.9} />
      <div className="max-w-6xl mx-auto w-full">

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_200px] gap-12 lg:gap-24 items-end mb-12">

          {/* LEFT */}
          <div>
            <motion.div {...rise(0)} className="mb-8">
              <span className="inline-flex items-center gap-2 font-mono text-xs text-ink-muted border border-rule px-3 py-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                Available · Graduating May 2027
              </span>
            </motion.div>

            <motion.h1 {...rise(0.1)}
              className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight leading-[0.9] mb-5"
            >
              Suyash<br />
              <span className="text-cobalt">Jaiswal</span>
            </motion.h1>

            <motion.p {...rise(0.2)}
              className="text-lg lg:text-xl text-ink max-w-xl leading-relaxed mb-4"
            >
              Computer Science Engineer.{' '}
              <span className="text-ink-muted">
                I build systems that scale, interfaces that think, and tools that actually get used.
              </span>
            </motion.p>

            <motion.div {...rise(0.25)}
              className="flex items-center gap-1.5 text-sm text-ink-muted mb-10"
            >
              <MapPin size={12} />
              <span className="font-mono">MIT World Peace University &nbsp;·&nbsp; Pune, Maharashtra</span>
            </motion.div>

            <motion.div {...rise(0.3)} className="flex flex-wrap items-center gap-4">
              <a href="#projects"
                className="inline-flex items-center gap-2 bg-cobalt text-white text-sm font-medium px-6 py-3 hover:bg-cobalt-dim transition-colors duration-200"
              >
                See my work <ArrowRight size={14} />
              </a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-ink-muted border border-rule px-6 py-3 hover:border-ink hover:text-ink transition-all duration-200"
              >
                <Download size={14} /> Resume
              </a>
            </motion.div>
          </div>

          {/* RIGHT: metadata */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex flex-col gap-6"
          >
            {[
              { label: 'Degree', value: 'B.Tech CSE' },
              { label: 'Focus',  value: 'Full Stack · AI & ML · Data Science' },
              { label: 'CGPA',   value: '7.39 / 10' },
            ].map((item) => (
              <div key={item.label} className="border-l-2 border-rule pl-4 space-y-0.5">
                <p className="font-mono text-[10px] text-ink-muted uppercase tracking-widest">{item.label}</p>
                <p className="text-sm text-ink">{item.value}</p>
              </div>
            ))}
            <div className="border-l-2 border-cobalt pl-4 space-y-0.5">
              <p className="font-mono text-[10px] text-ink-muted uppercase tracking-widest">Status</p>
              <p className="text-sm text-emerald-600 font-medium">Open to work</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom strip */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="border-t border-rule pt-5 flex flex-wrap items-center justify-between gap-4"
        >
          <div className="flex items-center gap-6">
            {[
              { label: 'GitHub',   href: 'https://github.com/suyashjaiswal-gif' },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/suyash-jaiswal-801815350' },
              { label: 'LeetCode', href: 'https://leetcode.com/u/suyash_jaiswal_/' },
            ].map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                className="font-mono text-xs text-ink-muted hover:text-cobalt transition-colors"
              >
                {link.label} ↗
              </a>
            ))}
          </div>
          <span className="font-mono text-xs text-ink-muted">scroll to explore ↓</span>
        </motion.div>
      </div>
    </section>
  )
}
