import { useEffect, useState } from 'react'

export default function HUDOverlay({ className = '' }) {
  // subtle sweep scan animation trigger
  const [tick, setTick] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setTick(t => (t + 1) % 1000), 3000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden>
      {/* Corner brackets */}
      <div className="absolute left-6 top-6 h-8 w-8 opacity-60">
        <div className="absolute inset-0 border-t-2 border-l-2 border-cyan-400/60 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
      </div>
      <div className="absolute right-6 top-6 h-8 w-8 opacity-60">
        <div className="absolute inset-0 border-t-2 border-r-2 border-fuchsia-400/60 drop-shadow-[0_0_8px_rgba(217,70,239,0.6)]" />
      </div>
      <div className="absolute left-6 bottom-6 h-8 w-8 opacity-60">
        <div className="absolute inset-0 border-b-2 border-l-2 border-fuchsia-400/60 drop-shadow-[0_0_8px_rgba(217,70,239,0.6)]" />
      </div>
      <div className="absolute right-6 bottom-6 h-8 w-8 opacity-60">
        <div className="absolute inset-0 border-b-2 border-r-2 border-cyan-400/60 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
      </div>

      {/* Reticle */}
      <div className="absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 opacity-40">
        <svg width="160" height="160" viewBox="0 0 160 160" fill="none" className="animate-pulse-slow">
          <circle cx="80" cy="80" r="54" stroke="url(#g)" strokeWidth="1.5" />
          <circle cx="80" cy="80" r="2" fill="#22d3ee" />
          <path d="M80 10v18M80 132v18M10 80h18M132 80h18" stroke="#d946ef" strokeOpacity="0.6" strokeWidth="1.5" />
          <defs>
            <linearGradient id="g" x1="0" y1="0" x2="160" y2="0">
              <stop stopColor="#22d3ee" stopOpacity="0.8" />
              <stop offset="1" stopColor="#d946ef" stopOpacity="0.8" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Sweep scanner */}
      <div key={tick} className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/5 to-transparent animate-scan-y" />
    </div>
  )
}
