export default function Footer() {
  return (
    <footer className="w-full bg-black py-10 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-sm text-white/60">
            Mentions légales: projet éditorial en constitution, association loi 1901 en cours.
          </p>
          <p className="text-sm text-white/60">Projet en construction, comme ton backlog.</p>
        </div>
        <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="mt-4 text-xs text-white/40">© {new Date().getFullYear()} Média des joueurs</div>
      </div>
    </footer>
  );
}
