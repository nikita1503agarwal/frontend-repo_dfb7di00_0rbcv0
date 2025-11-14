import XPCount from './XPCount'

export default function Stats() {
  const stats = [
    { value: 39100000, label: 'de joueurs en France', source: 'Médiamétrie 2023', prefix: '+', suffix: ' XP unlocked' },
    { value: 72, label: 'des Français jouent', source: 'Médiamétrie 2023', prefix: 'Population scanned: ', suffix: '% gamers' },
    { value: 3.32e9, label: 'de joueurs dans le monde', source: 'Exploding Topics 2024', prefix: 'Global players: ', suffix: '' },
    { value: 1, label: 'ne fait pas confiance aux avis en ligne sur 2', source: 'OCDE', prefix: 'Trust check: ', suffix: '/2' },
  ]

  return (
    <section className="relative w-full bg-[#07070b] py-16 text-white">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <h2 className="text-2xl font-bold sm:text-3xl">Nos chiffres</h2>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs text-white/80 ring-1 ring-white/10">
            Projet encadré par Pépite Pays de la Loire
          </span>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6">
              <div className="text-xl font-extrabold tracking-tight">
                <XPCount target={s.value} prefix={s.prefix} suffix={s.suffix} />
              </div>
              <div className="mt-1 text-sm text-white/80">{s.label}</div>
              <div className="mt-2 text-xs text-white/50">Source: {s.source}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-4">
          <div className="h-10 w-10 rounded bg-white/10 ring-1 ring-white/10" aria-label="Logo placeholder" />
          <div className="text-sm text-white/70">Espace logo partenaire</div>
        </div>
      </div>
    </section>
  )
}
