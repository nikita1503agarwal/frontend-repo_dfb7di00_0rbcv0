export default function LoaderHUD({ label = 'Loading save data…', className = '' }) {
  return (
    <div className={`inline-flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/80 ${className}`}>
      <div className="relative h-4 w-4">
        <div className="absolute inset-0 rounded-full border-2 border-cyan-400/40" />
        <div className="absolute inset-0 animate-spin-slow rounded-full border-2 border-fuchsia-400/70 border-t-transparent" />
      </div>
      <span>{label}</span>
    </div>
  )
}
