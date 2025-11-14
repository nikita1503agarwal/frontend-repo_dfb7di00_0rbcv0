import { useEffect, useRef } from 'react'

// Lightweight pixel dust using canvas, optimized for subtlety
export default function PixelDust({ color = 'rgba(56,189,248,0.18)', count = 40, className = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const ctx = canvas.getContext('2d')
    let raf
    let W, H

    const particles = Array.from({ length: count }, () => ({
      x: Math.random(),
      y: Math.random(),
      s: Math.random() * 2 + 1,
      v: 0.02 + Math.random() * 0.05,
      a: Math.random() * Math.PI * 2
    }))

    function resize() {
      W = canvas.clientWidth
      H = canvas.clientHeight
      canvas.width = W * dpr
      canvas.height = H * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    function step(t) {
      ctx.clearRect(0, 0, W, H)
      for (const p of particles) {
        p.x += Math.cos(p.a) * p.v * 0.002
        p.y += Math.sin(p.a) * p.v * 0.002
        p.a += 0.003
        if (p.x < -0.05) p.x = 1.05
        if (p.x > 1.05) p.x = -0.05
        if (p.y < -0.05) p.y = 1.05
        if (p.y > 1.05) p.y = -0.05
        const px = p.x * W
        const py = p.y * H
        ctx.fillStyle = color
        ctx.fillRect(px, py, p.s, p.s)
      }
      raf = requestAnimationFrame(step)
    }

    const obs = new ResizeObserver(resize)
    obs.observe(canvas)
    resize()
    raf = requestAnimationFrame(step)

    return () => {
      cancelAnimationFrame(raf)
      obs.disconnect()
    }
  }, [color, count])

  return <canvas ref={ref} className={`pointer-events-none absolute inset-0 ${className}`} />
}
