'use client'
import { motion } from 'framer-motion'
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

        <div className="flex items-baseline gap-4 mb-16 border-b border-rule pb-5">
          <span className="font-mono text-xs text-ink-muted">02</span>
          <h2 className="text-2xl font-bold tracking-tight">Skills</h2>
        </div>

        <div className="space-y-8">
          {Object.entries(SKILLS).map(([cat, list], i) => (
            <motion.div key={cat}
              initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 sm:grid-cols-[130px_1fr] items-start gap-4 sm:gap-8"
            >
              <p className="font-mono text-[10px] text-ink-muted uppercase tracking-widest pt-1.5">{cat}</p>
              <div className="flex flex-wrap gap-3">
                {list.map(skill => (
                  <span key={skill}
                    className="font-mono text-xs text-ink border border-rule bg-bg px-3 py-1.5 hover:border-cobalt hover:text-cobalt transition-colors duration-150 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
