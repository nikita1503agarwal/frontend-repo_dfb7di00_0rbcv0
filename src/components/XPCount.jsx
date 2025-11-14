import { useEffect, useState } from 'react'

export default function XPCount({ target = 1000, prefix = '+', suffix = ' XP', duration = 1400, className = '' }) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    const start = performance.now()
    let raf
    function tick(t) {
      const p = Math.min(1, (t - start) / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      setVal(Math.floor(target * eased))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, duration])

  return (
    <span className={`tabular-nums ${className}`}>
      <span className="text-cyan-300 drop-shadow-[0_0_10px_rgba(34,211,238,0.35)]">{prefix}{val.toLocaleString('fr-FR')}</span>
      <span className="text-fuchsia-300">{suffix}</span>
    </span>
  )
}
