'use client'
import { useEffect, useRef } from 'react'

export default function NodesBackground({ opacity = 1 }: { opacity?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number = 0
    let lastTime = 0
    let running = true
    const FPS = 16
    const INTERVAL = 1000 / FPS
    const NODE_COUNT = 30 // Reduced from 40 for better performance
    const s = 1 // intentionally ignore retina to save GPU fill-rate

    type Node = { x: number; y: number; vx: number; vy: number; r: number }
    const nodes: Node[] = []

    const initNodes = () => {
      nodes.length = 0
      for (let i = 0; i < NODE_COUNT; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3 * s,
          vy: (Math.random() - 0.5) * 0.3 * s,
          r: (1.8 + Math.random() * 1.8) * s,
        })
      }
    }

    const resize = () => {
      canvas.width = canvas.offsetWidth * s
      canvas.height = canvas.offsetHeight * s
      initNodes()
    }

    const CONNECT_DIST = 75 * s

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

      for (const n of nodes) {
        n.x += n.vx
        n.y += n.vy
        if (n.x < 0 || n.x > w) n.vx *= -1
        if (n.y < 0 || n.y > h) n.vy *= -1
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < CONNECT_DIST) {
            ctx.strokeStyle = `rgba(27,79,216,${0.12 * (1 - dist / CONNECT_DIST)})`
            ctx.lineWidth = 0.6 * s
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
          }
        }
      }

      ctx.fillStyle = 'rgba(27,79,216,0.18)'
      for (const n of nodes) {
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fill()
      }
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