'use client'
import { useEffect, useRef } from 'react'

export default function TopoBackground({ opacity = 1 }: { opacity?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    let animId: number = 0
    let t = 0
    let lastTime = 0
    let running = true
    const FPS = 16
    const INTERVAL = 1000 / FPS
    const MAX_RINGS = 12          // Reduced from 20 for better performance
    const DPR = 1                // intentionally ignore retina for background

    const resize = () => {
      canvas.width = canvas.offsetWidth * DPR
      canvas.height = canvas.offsetHeight * DPR
    }

    const draw = (now: number) => {
      if (!running) {
        animId = 0
        return
      }
      animId = requestAnimationFrame(draw)
      if (now - lastTime < INTERVAL) return
      lastTime = now

      const w = canvas.width
      const h = canvas.height

      ctx.clearRect(0, 0, w, h)

      const cx = w * 0.65
      const cy = h * 0.5
      const step = 0.1          // Increased step to reduce points per ring

      ctx.lineWidth = 1.5

      // Outer rings
      ctx.strokeStyle = 'rgba(27,79,216,0.08)'
      for (let i = 0; i < MAX_RINGS; i++) {
        const r = (30 + i * 70)
        ctx.beginPath()
        for (let a = 0; a <= Math.PI * 2; a += step) {
          const wobble =
            1 +
            0.20 * Math.sin(a * 3.7 + r * 0.04 + t * 0.8) +
            0.12 * Math.cos(a * 6.1 - r * 0.02 + t * 0.5)
          const px = cx + Math.cos(a) * r * wobble
          const py = cy + Math.sin(a) * r * 0.52 * wobble
          a === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py)
        }
        ctx.closePath()
        ctx.stroke()
      }

      // Inner rings (offset between outer)
      ctx.strokeStyle = 'rgb(27, 79, 216,0.06)'
      for (let i = 0; i < MAX_RINGS; i++) {
        const r = (65 + i * 70)
        ctx.beginPath()
        for (let a = 0; a <= Math.PI * 2; a += step) {
          const wobble =
            1 +
            0.14 * Math.sin(a * 5.1 + r * 0.03 - t * 0.6) +
            0.09 * Math.cos(a * 2.9 + r * 0.05 + t * 0.4)
          const px = cx + Math.cos(a) * r * wobble
          const py = cy + Math.sin(a) * r * 0.52 * wobble
          a === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py)
        }
        ctx.closePath()
        ctx.stroke()
      }

      t += 0.018
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        running = entry.isIntersecting
        if (running && animId === 0) {
          animId = requestAnimationFrame(draw)
        }
      },
      { threshold: 0, rootMargin: '-10% 0px' }
    )
    observer.observe(canvas)

    const onVisibility = () => {
      running = document.visibilityState === 'visible'
      if (running && animId === 0) {
        animId = requestAnimationFrame(draw)
      }
    }
    document.addEventListener('visibilitychange', onVisibility)

    resize()
    animId = requestAnimationFrame(draw)
    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
      document.removeEventListener('visibilitychange', onVisibility)
      observer.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{ opacity }}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  )
}