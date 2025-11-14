import RetroCRT from './RetroCRT'

export default function ValueProp() {
  const items = [
    { title: 'Actu jeux vidéo', desc: 'News claires, vérifiées, sans sensationnalisme.' },
    { title: 'Articles de joueurs', desc: 'Des points de vue honnêtes, écrits par ceux qui jouent vraiment.' },
    { title: 'Guides & tips', desc: 'Des guides utiles, pas des farm-tutos de 30 minutes.' },
    { title: 'Recommandations', desc: 'Découvre des pépites adaptées à ton style de jeu.' },
    { title: 'Forums & débats', desc: 'Un espace sain pour échanger entre passionnés.' },
  ]

  return (
    <section className="relative w-full bg-[#0a0a0f] py-16 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-50" style={{
        background: 'radial-gradient(50% 40% at 50% 0%, rgba(34,211,238,0.15) 0%, rgba(217,70,239,0.08) 40%, transparent 100%)'
      }} />
      <div className="relative mx-auto max-w-7xl px-6">
        <h2 className="mb-10 text-2xl font-bold tracking-tight sm:text-3xl">
          Ce que tu trouves chez nous
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <RetroCRT key={it.title} className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-transform hover:scale-[1.01]">
              <div className="pointer-events-none absolute -inset-px opacity-0 blur-xl transition-opacity group-hover:opacity-100" style={{
                background: 'linear-gradient(120deg, rgba(34,211,238,0.25), rgba(217,70,239,0.25))'
              }} />
              <h3 className="relative mb-2 text-lg font-semibold text-cyan-300 hover-glitch">
                {it.title}
              </h3>
              <p className="relative text-sm text-white/75">{it.desc}</p>
            </RetroCRT>
          ))}
        </div>
      </div>
    </section>
  )
}
