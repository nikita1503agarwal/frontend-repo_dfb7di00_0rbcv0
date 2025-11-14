export default function CTA() {
  return (
    <section id="communaute" className="relative w-full bg-[#0a0a0f] py-20 text-white">
      <div className="pointer-events-none absolute inset-0" style={{
        background: 'radial-gradient(60% 60% at 50% 50%, rgba(34,211,238,0.12) 0%, rgba(217,70,239,0.08) 50%, transparent 100%)'
      }} />
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="overflow-hidden rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-white/5 to-white/[0.03] p-8 text-center shadow-[0_0_80px_-20px_rgba(34,211,238,0.35)]">
          <h3 className="text-2xl font-extrabold sm:text-3xl">Construisons le média ensemble</h3>
          <p className="mx-auto mt-2 max-w-2xl text-white/75">
            Rejoins une communauté de joueurs exigeants et bienveillants. Ton avis compte, tes idées aussi.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <a href="#" className="group relative inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03] active:scale-[0.98]">
              <span className="absolute -inset-px rounded-lg opacity-70 blur-md transition-opacity group-hover:opacity-100" style={{
                background: 'linear-gradient(90deg, rgba(34,211,238,0.6), rgba(217,70,239,0.6))'
              }} />
              <span className="relative">Rejoindre le Discord</span>
            </a>
            <a href="#" className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 hover:bg-white/10">
              Suivre nos réseaux
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
