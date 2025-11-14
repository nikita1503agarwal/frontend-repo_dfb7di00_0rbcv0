import { useState, useEffect } from 'react'

// Glitch text with controlled randomness
export default function GlitchText({ children, className = '' }) {
  const [glitch, setGlitch] = useState(false)

  useEffect(() => {
    const id = setInterval(() => {
      setGlitch(true)
      setTimeout(() => setGlitch(false), 120)
    }, 3500)
    return () => clearInterval(id)
  }, [])

  return (
    <span className={`relative inline-block ${className}`}>
      <span className={`relative z-10 transition-transform ${glitch ? 'translate-x-[1px]' : ''}`}>{children}</span>
      <span className={`pointer-events-none absolute inset-0 select-none mix-blend-screen text-cyan-400 ${glitch ? 'translate-x-[2px] opacity-60' : 'opacity-0'} transition-all duration-100`}>{children}</span>
      <span className={`pointer-events-none absolute inset-0 select-none mix-blend-screen text-fuchsia-400 ${glitch ? '-translate-x-[2px] opacity-60' : 'opacity-0'} transition-all duration-100`}>{children}</span>
    </span>
  )
}
