'use client'
import { motion } from 'framer-motion'
import { Download, ExternalLink, Award, FileText } from 'lucide-react'

// ── EDIT YOUR DATA ──────────────────────────────────────────────────────────
const CERTS = [
  { name: 'Industry Ready Tech Foundations',         issuer: 'LNT Edutech', year: '2026', href: 'https://drive.google.com/file/d/1pLd-Dx1br-Qhyh7v5rd2B5i_2YGu8N5A/view?usp=sharing', id: 'LTET/JAN26/NAIP/B3/0041' },
  { name: 'Google AI for Anyone',          issuer: 'Google',   year: '2024', href: 'https://courses.edx.org/certificates/85894c91771249ceaacf0325af5822b3', id: '85894c91771249ceaacf0325af5822b3' },
  { name: 'Data Visualization and Building Dashboards with Excel and Cognos',   issuer: 'IBM',     year: '2024', href: 'https://courses.edx.org/certificates/f501d397b57543b69924a18984fda431', id: 'f501d397b57543b69924a18984fda431' },
  { name: 'Java Programming Fundamentals',        issuer: 'Infosys Springboard',     year: '2026', id: ''},
  { name: 'Critical Thinking & Problem Solving',        issuer: 'RITx',     year: '2024', href: 'https://courses.edx.org/certificates/56d9d51679a8449cbe7ba18241e6c559', id: '56d9d51679a8449cbe7ba18241e6c559'},
  { name: 'Teamwork & Collaboration', issuer: 'RITx',           year: '2024', href: 'https://courses.edx.org/certificates/e648c7200e2244cd9cad9e670fbea087', id: 'e648c7200e2244cd9cad9e670fbea087' },
  { name: 'Measuring Sustainable Development',     issuer: 'SDGAcademyX',          year: '2024', href: 'https://courses.edx.org/certificates/5bed7c081ca74effbb651d0ea484e7fa', id: '5bed7c081ca74effbb651d0ea484e7fa' },
  { name: 'Introduction to Social-Emotional Learning (SEL)',     issuer: 'UC Riverside',          year: '2024', href: 'https://courses.edx.org/certificates/47983740b694497fa010f7bd08b8f35d', id: '47983740b694497fa010f7bd08b8f35d' },
  { name: 'Introduction to Personal Financial Planning',     issuer: 'Indiana University',          year: '2024', href: 'https://courses.edx.org/certificates/7d3473aab029498d9fb639f6c1e42fd2', id: '7d3473aab029498d9fb639f6c1e42fd2' },
]

const PROFILES = [
  { label: 'GitHub',    url: 'github.com/suyashjaiswal-gif',      href: 'https://github.com/suyashjaiswal-gif' },
  { label: 'LinkedIn',  url: 'linkedin.com/in/suyash-jaiswal', href: 'https://www.linkedin.com/in/suyash-jaiswal-801815350' },
  { label: 'LeetCode',  url: 'leetcode.com/suyash_jaiswal_',    href: 'https://leetcode.com/u/suyash_jaiswal_' },
  { label: 'Portfolio', url: 'suyashjaiwal.dev',                 href: '#' },
]
// ────────────────────────────────────────────────────────────────────────────

export default function Resume() {
  return (
    <section id="resume" className="px-6 py-28 bg-surface">
      <div className="max-w-6xl mx-auto">

        <div className="flex items-baseline gap-4 mb-16 border-b border-rule pb-5">
          <span className="font-mono text-xs text-ink-muted">04</span>
          <h2 className="text-2xl font-bold tracking-tight">Resume &amp; Credentials</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12">

          {/* LEFT */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="border border-rule bg-bg p-6"
            >
              <div className="flex items-center gap-2 mb-3">
                <FileText size={14} className="text-cobalt" />
                <span className="font-semibold text-sm">Resume</span>
              </div>
              <p className="font-mono text-xs text-ink-muted mb-1">Last updated · April 2026</p>
              <p className="text-xs text-ink-muted mb-5">One-page · ATS-optimized · PDF</p>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-cobalt text-white text-sm w-full py-3 hover:bg-cobalt-dim transition-colors"
              >
                <Download size={13} /> Download Resume
              </a>
            </motion.div>

            <div>
              <p className="font-mono text-[10px] text-ink-muted uppercase tracking-widest mb-3">Profiles</p>
              <div className="space-y-2">
                {PROFILES.map(p => (
                  <a key={p.label} href={p.href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-between border border-rule bg-bg px-4 py-3 hover:border-cobalt transition-colors group"
                  >
                    <div>
                      <p className="text-sm font-medium">{p.label}</p>
                      <p className="font-mono text-xs text-ink-muted">{p.url}</p>
                    </div>
                    <ExternalLink size={12} className="text-ink-muted group-hover:text-cobalt transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <p className="font-mono text-[10px] text-ink-muted uppercase tracking-widest mb-6">Certifications</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
              {CERTS.map((cert, i) => (
                <motion.a key={cert.name} href={cert.href} target="_blank" rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.4, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  className="block border border-rule bg-bg p-5 hover:border-cobalt transition-colors duration-200 group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <Award size={13} className="text-copper" />
                    <span className="font-mono text-xs text-ink-muted">{cert.year}</span>
                  </div>
                  <h3 className="text-xs font-semibold leading-snug mb-1 group-hover:text-cobalt transition-colors">
                    {cert.name}
                  </h3>
                  <p className="font-mono text-[10px] text-ink-muted">{cert.issuer}</p>
                  <p className="font-mono text-[10px] text-rule mt-2 group-hover:text-ink-muted transition-colors">
                    {cert.id}
                  </p>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
