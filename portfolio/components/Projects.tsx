'use client'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import NodesBackground from '@/components/NodesBackground'

// ── EDIT YOUR DATA ──────────────────────────────────────────────────────────
const FEATURED = {
  num: '01',
  name: 'DeepFake Detection Model',
  tagline: 'Detects Morphed faces and StyleGAN generated faces in real time',
  description: 'Trained and deployed a Deep Learning model to detect Deepfake face images with upto 99% validation accuracy. Used EfficientNet B-4 for transfer learning on over 200k sample images. Deployed using huggingface spaces and vercel',
  stack: ['Python', 'Deep Learning', 'CNN', 'Computer Vision', 'Node.js'],
  outcome: 'Realtime Detection · 95% Accuracy in testing',
  github: 'https://github.com/suyashjaiswal-gif/deepfake-detector',
  live: 'https://deepfake-detector-gray.vercel.app/',
}

const PROJECTS = [
  {
    num: '02', name: 'Mental Health Classifier',
    tagline: 'ML based classifier for textual social media posts into 5 categories',
    stack: ['Python', 'FastAPI', 'NLP'],
    outcome: '75% Testing Accuracy',
    github: 'https://github.com/suyashjaiswal-gif/mental-health-classifier', live: 'https://huggingface.co/spaces/suyashjaiswal/mental-health-classifier1',
  },
  {
    num: '03', name: 'LabSync: Laboratory Management',
    tagline: 'A Web based laboratory management and smart scheduling solution for institutes and universities',
    stack: ['Java', 'SpringBoot', 'React', 'MySQL', 'Hibernate'],
    outcome: 'Genetic Algorithm for robust scheduling',
    github: 'https://github.com/suyashjaiswal-gif/Labsync', live: null,
  },
  {
    num: '04', name: 'Automated Code Quality Checker',
    tagline: 'Automatically generates a report on new code pushed into the project',
    stack: ['JavaScript', 'AWS', 'CICD', 'SonarQube', 'Jenkins'],
    outcome: 'Automated bug detection pipeline',
    github: 'https://github.com/suyashjaiswal-gif/quality-check-demo', live: null,
  },
]
// ────────────────────────────────────────────────────────────────────────────

function Tag({ label }: { label: string }) {
  return (
    <span className="font-mono text-xs text-ink-muted border border-rule bg-surface px-2 py-1">
      {label}
    </span>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden px-6 py-28">
      <NodesBackground opacity={0.7} />
      <div className="relative z-10 max-w-6xl mx-auto">

        <div className="flex items-baseline gap-4 mb-16 border-b border-rule pb-5">
          <span className="font-mono text-xs text-ink-muted">01</span>
          <h2 className="text-2xl font-bold tracking-tight">Projects</h2>
          <span className="font-mono text-xs text-ink-muted ml-auto">{PROJECTS.length + 1} selected works</span>
        </div>

        {/* Featured */}
        <motion.div
          initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="border border-rule mb-5 grid lg:grid-cols-2 group hover:border-cobalt hover:shadow-md hover:-translate-y-1 transition-all duration-300"
        >
          <div className="bg-surface h-56 lg:h-auto flex items-center justify-center border-b lg:border-b-0 lg:border-r border-rule group-hover:border-cobalt transition-colors duration-300 overflow-hidden relative">
            <img src="/deepfake_thumbnail.png" alt={FEATURED.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>

          <div className="p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between mb-5">
                <div>
                  <p className="font-mono text-xs text-cobalt mb-1 uppercase tracking-widest">Featured &nbsp;·&nbsp; {FEATURED.num}</p>
                  <h3 className="text-xl font-bold">{FEATURED.name}</h3>
                  <p className="text-sm text-ink-muted mt-1">{FEATURED.tagline}</p>
                </div>
                <div className="flex gap-3 shrink-0 ml-4">
                  <a href={FEATURED.github} target="_blank" rel="noopener noreferrer"
                    className="text-ink-muted hover:text-cobalt transition-colors"><FaGithub size={15} /></a>
                  <a href={FEATURED.live} target="_blank" rel="noopener noreferrer"
                    className="text-ink-muted hover:text-cobalt transition-colors"><ExternalLink size={15} /></a>
                </div>
              </div>
              <p className="text-sm text-ink-muted leading-relaxed mb-5">{FEATURED.description}</p>
              <div className="flex flex-wrap gap-2">
                {FEATURED.stack.map(t => <Tag key={t} label={t} />)}
              </div>
            </div>
            <div className="border-t border-rule mt-6 pt-5">
              <p className="font-mono text-xs text-ink-muted">↳ {FEATURED.outcome}</p>
            </div>
          </div>
        </motion.div>

        {/* Secondary grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {PROJECTS.map((p, i) => (
            <motion.div key={p.num}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="border border-rule p-6 flex flex-col gap-4 hover:border-cobalt hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <p className="font-mono text-xs text-ink-muted mb-1">{p.num}</p>
                  <h3 className="font-bold text-sm">{p.name}</h3>
                  <p className="text-xs text-ink-muted mt-1 leading-relaxed">{p.tagline}</p>
                </div>
                <div className="flex gap-2 shrink-0">
                  <a href={p.github} target="_blank" rel="noopener noreferrer"
                    className="text-ink-muted hover:text-cobalt transition-colors"><FaGithub size={13} /></a>
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer"
                      className="text-ink-muted hover:text-cobalt transition-colors"><ExternalLink size={13} /></a>
                  )}
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {p.stack.map(t => <Tag key={t} label={t} />)}
              </div>
              <div className="mt-auto pt-3 border-t border-rule">
                <p className="font-mono text-xs text-ink-muted">↳ {p.outcome}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
