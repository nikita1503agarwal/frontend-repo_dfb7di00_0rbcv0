import Spline from '@splinetool/react-spline'
import HUDOverlay from './HUDOverlay'
import PixelDust from './PixelDust'
import GlitchText from './GlitchText'

export default function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[560px] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/UiMDkOJtlS5O5Vaz/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Neon gradient overlay for contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/90" />
      <div className="pointer-events-none absolute inset-0" style={{
        background: 'radial-gradient(60% 60% at 50% 20%, rgba(0,255,255,0.15) 0%, rgba(255,0,255,0.08) 50%, transparent 100%)'
      }} />

      {/* HUD elements + pixel dust */}
      <PixelDust className="z-0" />
      <HUDOverlay className="z-0" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-start justify-center gap-6 px-6">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300 ring-1 ring-white/15 backdrop-blur">
          <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_20px_3px_rgba(34,211,238,0.6)]" />
          Media jeux vidéo
        </span>

        <h1 className="text-3xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
          <GlitchText className="block drop-shadow-[0_0_20px_rgba(34,211,238,0.35)]">Marre du putaclic et des pseudo-journalistes ?</GlitchText>
        </h1>

        <p className="max-w-2xl text-lg text-white/80 sm:text-xl">
          Le média créé par des joueurs, pour des joueurs.
        </p>

        <p className="max-w-2xl text-base text-white/70">
          Transparence totale, avis de vrais joueurs, actu sans bullshit. On parle franchement, on va droit au but.
        </p>

        <div className="mt-2 flex flex-wrap items-center gap-4">
          <a
            href="#communaute"
            className="group relative inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_40px_-10px_rgba(99,102,241,0.6)] transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            <span className="absolute -inset-px rounded-lg opacity-70 blur-md transition-opacity group-hover:opacity-100" style={{
              background: 'linear-gradient(90deg, rgba(34,211,238,0.6), rgba(217,70,239,0.6))'
            }} />
            <span className="relative">Rejoindre la communauté</span>
          </a>
        </div>
      </div>
    </section>
  )
}
