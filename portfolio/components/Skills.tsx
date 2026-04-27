'use client'
import { m } from 'framer-motion'
import NodesBackground from '@/components/NodesBackground'

// ── EDIT YOUR SKILLS ────────────────────────────────────────────────────────
const SKILLS: Record<string, string[]> = {
  Languages: ['C', 'C++', 'Python', 'Java', 'JavaScript'],
  'Data Science': ['Pandas', 'Scikit-Learn', 'Seaborn', 'MatPlotLib', 'SQL', 'Postgres', 'Tableau', 'PowerBI'],
  'Web & Development': ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'Three.js', 'React.js', 'Angular.js', 'Next.js', 'TypeScript'],
  'Cloud & DevOps': ['AWS (EC2, S3)', 'Docker', 'Jenkins', 'SonarQube', 'Vercel', 'Render', 'HuggingFace', 'GitHub'],
  'AI Tools': ['Claude', 'GPTCodex', 'AntiGravity', 'Cursor', 'GitHub Copilot', 'GenAI Tools'],
  '3D Tools': ['Blender', 'Maya', 'Substance Painter', 'AutoCAD'],
  'Soft Skills': ['Problem Solving', 'Punctuality', 'Adaptability', 'Creativity', 'Teamwork'],
  'Core CS': ['DSA', 'OS', 'DBMS', 'Computer Networks', 'OOP', 'System Design'],
}
// ────────────────────────────────────────────────────────────────────────────

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden px-6 py-28 bg-surface">
      <NodesBackground opacity={0.8} />
      <div className="relative z-10 max-w-6xl mx-auto">
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.03 }}
          viewport={{ once: true }}
          className="absolute -top-16 -left-10 text-[200px] leading-none font-bold tracking-tighter pointer-events-none select-none -z-10 text-ink"
        >
          02
        </m.div>

        <div className="flex items-baseline gap-4 mb-16 border-b border-rule pb-5 relative z-10">
          <span className="font-mono text-xs text-ink-muted">02</span>
          <h2 className="text-2xl font-bold tracking-tight">Skills</h2>
        </div>

        <div className="space-y-8">
          {Object.entries(SKILLS).map(([cat, list], i) => (
            <m.div key={cat}
              initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 sm:grid-cols-[130px_1fr] items-start gap-4 sm:gap-8"
            >
              <p className="font-mono text-[10px] text-ink-muted uppercase tracking-widest pt-1.5">{cat}</p>
              <div className="flex flex-wrap gap-3">
                {list.map(skill => (
                  <div key={skill} className="relative group">
                    <span
                      className="inline-block font-mono text-xs text-ink border border-rule bg-bg px-3 py-1.5 hover:border-cobalt hover:text-cobalt transition-colors duration-150 cursor-default"
                    >
                      {skill}
                    </span>
                    {/* Tooltip */}
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-ink text-bg text-[10px] px-2 py-1 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                      Proficient
                      {/* Triangle */}
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-ink" />
                    </div>
                  </div>
                ))}
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  )
}
