'use client'
import { m } from 'framer-motion'
import { Trophy, Star, Code2, Award, Users, BookOpen } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import NodesBackground from '@/components/NodesBackground'

// ── EDIT YOUR ACHIEVEMENTS ──────────────────────────────────────────────────
const ITEMS: {
  icon: LucideIcon
  title: string
  org: string
  description: string
  year: string
  accent: 'cobalt' | 'copper' | 'green'
}[] = [
    {
      icon: Trophy,
      title: 'Smart India Hackathon — Finalist',
      org: 'Ministry of Education, Govt. of India',
      description: 'Reached national finals out of 100,000+ participants. Built an AI-powered advisory tool in 36 hours.',
      year: '2024', accent: 'copper',
    },
    {
      icon: Star,
      title: "Dean's List — 3 Consecutive Semesters",
      org: 'Your University',
      description: 'Ranked in top 5% of the CSE cohort. Recipient of merit scholarship worth ₹50,000.',
      year: '2023–24', accent: 'cobalt',
    },
    {
      icon: Code2,
      title: 'LeetCode — Knight Badge',
      org: 'leetcode.com/yourusername',
      description: '1850+ rating. Solved 450+ problems. Ranked in top 5% globally.',
      year: 'Ongoing', accent: 'green',
    },
    {
      icon: Users,
      title: 'Open Source Contributor',
      org: 'Project / Org Name',
      description: '12 PRs merged across 3 repositories. Improved performance of core utility by 30%.',
      year: '2024', accent: 'cobalt',
    },
    {
      icon: Award,
      title: 'Google Summer of Code — Applicant',
      org: 'Google',
      description: 'Shortlisted proposal for [Org Name]. Contributed 5 qualifying issues.',
      year: '2024', accent: 'copper',
    },
    {
      icon: BookOpen,
      title: 'Research Paper — Accepted',
      org: 'Conference / Journal Name',
      description: 'Co-authored paper on [topic]. Accepted at [venue] with X% acceptance rate.',
      year: '2025', accent: 'cobalt',
    },
  ]
// ────────────────────────────────────────────────────────────────────────────

const ACCENT = { cobalt: 'text-cobalt', copper: 'text-copper', green: 'text-emerald-600' }

export default function Achievements() {
  return (
    <section id="achievements" className="relative overflow-hidden px-6 py-28">
      <NodesBackground opacity={1} />
      <div className="relative z-10 max-w-6xl mx-auto">

        <div className="flex items-baseline gap-4 mb-16 border-b border-rule pb-5">
          <span className="font-mono text-xs text-ink-muted">03</span>
          <h2 className="text-2xl font-bold tracking-tight">Achievements</h2>
          <span className="font-mono text-xs text-ink-muted ml-auto">{ITEMS.length} highlights</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ITEMS.map((item, i) => {
            const Icon = item.icon
            return (
              <m.div key={item.title}
                initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="border border-rule p-6 flex gap-5 hover:border-cobalt transition-colors duration-300"
              >
                <div className={`mt-0.5 shrink-0 ${ACCENT[item.accent]}`}>
                  <Icon size={16} />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <h3 className="font-semibold text-sm leading-snug">{item.title}</h3>
                      <p className="font-mono text-xs text-cobalt mt-0.5">{item.org}</p>
                    </div>
                    <span className="font-mono text-xs text-ink-muted shrink-0">{item.year}</span>
                  </div>
                  <p className="text-sm text-ink-muted leading-relaxed">{item.description}</p>
                </div>
              </m.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
