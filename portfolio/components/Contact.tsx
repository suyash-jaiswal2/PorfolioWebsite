'use client'
import { m } from 'framer-motion'
import { Mail, ArrowUpRight, Send } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { useState } from 'react'
import TopoBackground from '@/components/TopoBackground'

// ── EDIT YOUR INFO ───────────────────────────────────────────────────────────
const EMAIL = 'jaiswalsuyash631@gmail.com'
const GITHUB = 'https://github.com/suyashjaiswal-gif'
const LINKEDIN = 'https://www.linkedin.com/in/suyash-jaiswal-801815350'
// Sign up free at formspree.io → create a form → paste the endpoint below
const FORMSPREE = 'https://formspree.io/f/xojyygow'
// ────────────────────────────────────────────────────────────────────────────

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(FORMSPREE, {
        method: 'POST',
        body: new FormData(e.currentTarget),
        headers: { Accept: 'application/json' },
      })
      setStatus(res.ok ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden px-6 py-32">
      <TopoBackground opacity={0.6} />
      <div className="max-w-6xl mx-auto">

        <div className="flex items-baseline gap-4 mb-16 border-b border-rule pb-5">
          <span className="font-mono text-xs text-ink-muted">05</span>
          <h2 className="text-2xl font-bold tracking-tight">Contact</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* LEFT */}
          <m.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Let&apos;s build<br />
              something{' '}
              <span className="text-cobalt">worth<br />shipping.</span>
            </h3>
            <p className="text-ink-muted leading-relaxed mb-8 max-w-sm">
              Open to full-time roles, internships, and well-scoped freelance work.
              If you think we&apos;d work well together, reach out directly.
            </p>

            <div className="space-y-2">
              {[
                { icon: Mail, label: 'Email', value: EMAIL, href: `mailto:${EMAIL}` },
                { icon: FaGithub, label: 'GitHub', value: 'github.com/suyashjaiswal-gif', href: GITHUB },
                { icon: FaLinkedin, label: 'LinkedIn', value: 'linkedin.com/in/suyash-jaiswal', href: LINKEDIN },
              ].map(({ icon: Icon, label, value, href }) => (
                <a key={label} href={href}
                  target={label === 'Email' ? undefined : '_blank'} rel="noopener noreferrer"
                  className="flex items-center justify-between border border-rule px-5 py-4 hover:border-cobalt hover:bg-surface transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <Icon size={14} className="text-ink-muted group-hover:text-cobalt transition-colors" />
                    <div>
                      <p className="font-mono text-[10px] text-ink-muted uppercase tracking-widest">{label}</p>
                      <p className="text-sm text-ink mt-0.5">{value}</p>
                    </div>
                  </div>
                  <ArrowUpRight size={13} className="text-ink-muted group-hover:text-cobalt transition-colors" />
                </a>
              ))}
            </div>
          </m.div>

          {/* RIGHT: form */}
          <m.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-mono text-[10px] text-ink-muted uppercase tracking-widest mb-6">Send a quick note</p>

            {status === 'sent' ? (
              <div className="border border-emerald-300 bg-emerald-50 p-8 text-center">
                <p className="font-semibold text-emerald-700 mb-1">Message sent.</p>
                <p className="text-sm text-emerald-600">I&apos;ll get back to you within 12 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { name: 'name', label: 'Your name', type: 'text', placeholder: 'Jane Smith' },
                  { name: 'email', label: 'Your email', type: 'email', placeholder: 'jane@company.com' },
                ].map(f => (
                  <div key={f.name}>
                    <label className="font-mono text-xs text-ink-muted block mb-2">{f.label}</label>
                    <input name={f.name} type={f.type} placeholder={f.placeholder} required
                      className="w-full bg-transparent border border-rule px-4 py-3 text-sm text-ink placeholder-ink-faint focus:outline-none focus:border-cobalt transition-colors"
                    />
                  </div>
                ))}
                <div>
                  <label className="font-mono text-xs text-ink-muted block mb-2">Message</label>
                  <textarea name="message" rows={4} required
                    placeholder="Hi, I came across your portfolio and..."
                    className="w-full bg-transparent border border-rule px-4 py-3 text-sm text-ink placeholder-ink-faint focus:outline-none focus:border-cobalt transition-colors resize-none"
                  />
                </div>
                {status === 'error' && (
                  <p className="font-mono text-xs text-red-500">Something went wrong. Email me directly.</p>
                )}
                <button type="submit" disabled={status === 'sending'}
                  className="flex items-center justify-center gap-2 bg-cobalt text-white text-sm w-full py-3 hover:bg-cobalt-dim transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <Send size={13} />
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
                <p className="font-mono text-xs text-ink-muted text-center">Usually responds within 12 hours.</p>
              </form>
            )}
          </m.div>
        </div>

        <div className="border-t border-rule mt-24 pt-8 flex flex-wrap items-center justify-between gap-4">
          <span className="font-mono text-xs text-ink-muted">Suyash Jaiswal · {new Date().getFullYear()}</span>
          <span className="font-mono text-xs text-ink-muted">Next.js · Tailwind · Vercel</span>
        </div>
      </div>
    </section>
  )
}
