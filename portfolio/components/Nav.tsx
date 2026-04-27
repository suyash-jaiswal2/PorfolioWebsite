'use client'
import { useEffect, useState, useRef } from 'react'

const NAV_LINKS = [
  { id: 'projects',     label: 'Projects' },
  { id: 'skills',       label: 'Skills' },
  /*{ id: 'achievements', label: 'Achievements' },*/
  { id: 'resume',       label: 'Resume' },
  { id: 'contact',      label: 'Contact' },
]

export default function Nav() {
  const [active,   setActive]   = useState('')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -40% 0px' }
    )

    NAV_LINKS.forEach(s => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })

    // Set initial active state based on hash or default to empty
    const currentHash = window.location.hash.replace('#', '')
    if (currentHash) {
      setActive(currentHash)
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect()
    }
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-bg/90 backdrop-blur-md border-b border-rule' : ''
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        <a href="#" className="flex items-center font-mono text-sm text-ink-muted hover:text-ink transition-colors">
          SJ<span className="text-cobalt font-bold">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((s) => (
            <a key={s.id} href={`#${s.id}`}
              className={`text-sm transition-colors relative pb-0.5 ${
                active === s.id ? 'text-ink' : 'text-ink-muted hover:text-ink'
              }`}
            >
              {s.label}
              {active === s.id && (
                <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-cobalt" />
              )}
            </a>
          ))}
        </div>

        <a href="#contact"
          className="hidden md:flex items-center text-sm px-4 py-2 border border-cobalt text-cobalt hover:bg-cobalt hover:text-white transition-all duration-200 font-mono"
        >
          hire me
        </a>

        <button onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-1" aria-label="Toggle menu"
        >
          <span className={`block w-5 h-px bg-ink transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-px bg-ink transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-ink transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-rule bg-bg px-6 py-4 space-y-4">
          {NAV_LINKS.map((s) => (
            <a key={s.id} href={`#${s.id}`} onClick={() => setMenuOpen(false)}
              className="block text-sm text-ink-muted hover:text-ink py-1"
            >
              {s.label}
            </a>
          ))}
          <a href="#contact"
            className="block text-sm font-mono text-cobalt border border-cobalt px-4 py-2 text-center"
          >
            hire me
          </a>
        </div>
      )}
    </nav>
  )
}
