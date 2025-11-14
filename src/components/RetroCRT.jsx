export default function RetroCRT({ children, className = '' }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Scanlines */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[length:100%_3px] mix-blend-overlay" />
      {/* Subtle chromatic aberration border */}
      <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10" />
      <div className="relative">{children}</div>
    </div>
  )
}
