import RetroCRT from './RetroCRT'

const team = [
  {
    name: 'Alex',
    role: 'Rédac chef & tryharder',
    desc: 'A joué à tout, surtout quand il ne faut pas. Déteste le clickbait, adore les patch notes.',
    img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=640&auto=format&fit=crop'
  },
  {
    name: 'Sam',
    role: 'Community & support',
    desc: 'Toujours là pour calmer le chat. Main support IRL, mais carry en organisation.',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=640&auto=format&fit=crop'
  },
  {
    name: 'Jules',
    role: 'Tech & design',
    desc: 'Fait des choses qui brillent sans faire mal aux yeux. Clavier custom > tout.',
    img: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=640&auto=format&fit=crop'
  }
];

export default function Team() {
  return (
    <section className="relative w-full bg-[#07070b] py-16 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-50" style={{
        background: 'radial-gradient(60% 60% at 80% 0%, rgba(34,211,238,0.12) 0%, rgba(217,70,239,0.06) 50%, transparent 100%)'
      }} />
      <div className="relative mx-auto max-w-7xl px-6">
        <h2 className="mb-10 text-2xl font-bold tracking-tight sm:text-3xl">L'équipe</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m) => (
            <RetroCRT key={m.name} className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-[0_0_40px_-15px_rgba(34,211,238,0.35)]">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img src={m.img} alt={m.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                {/* Stylized avatar overlay */}
                <div className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{
                  background: 'radial-gradient(60%_60%_at_50%_40%,rgba(34,211,238,0.15)_0%,rgba(217,70,239,0.12)_45%,transparent_100%)'
                }} />
              </div>
              <div className="relative p-5">
                <h3 className="text-lg font-semibold text-cyan-300">{m.name}</h3>
                <div className="text-sm text-white/70">{m.role}</div>
                <p className="mt-2 text-sm text-white/75">{m.desc}</p>
                {/* XP micro-reaction */}
                <div className="mt-3 text-[11px] text-white/60">Astuce: survolez la carte pour voir l'effet "loading screen"</div>
              </div>
            </RetroCRT>
          ))}
        </div>
      </div>
    </section>
  );
}
