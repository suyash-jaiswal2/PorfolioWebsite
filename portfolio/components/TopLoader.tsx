'use client'

import { m } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function TopLoader() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <m.div
      initial={{ width: '0%', opacity: 1 }}
      animate={{ width: '100%', opacity: 0 }}
      transition={{
        width: { duration: 1.5, ease: 'easeOut' },
        opacity: { duration: 0.3, delay: 1.2, ease: 'easeOut' },
      }}
      className="fixed top-0 left-0 h-1 bg-cobalt z-[100]"
    />
  )
}
