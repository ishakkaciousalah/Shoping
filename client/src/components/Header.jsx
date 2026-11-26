function Header({panierCount}) {
  return (
    <header className="border-b border-zinc-800 bg-zinc-950 text-zinc-100">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <a
          href="/"
          className="text-3xl font-bold tracking-tight text-amber-400"
        >
          Shopp.ing
        </a>

        <nav className="flex flex-wrap items-center gap-4 text-sm font-medium text-zinc-300">
          <a
            href="#Categories"
            className="transition-colors hover:text-amber-400"
          >
            PC portables
          </a>
          <a
            href="#Produits"
            className="transition-colors hover:text-amber-400"
          >
            PC Gaming
          </a>
          
          
        </nav>

        <form className="flex min-w-48 flex-1 items-center gap-2 sm:max-w-xs">
          <input
            type="search"
            placeholder="Rechercher un produit"
            aria-label="Rechercher un produit"
            className="w-full rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none focus:border-amber-400"
          />
        </form>

        <button
          type="button"
          className="rounded-md bg-amber-400 px-4 py-2 text-sm font-semibold text-zinc-950 transition-colors hover:bg-amber-300"
        >
          Panier {panierCount}
        </button>
      </div>
    </header>
  );
}

export default Header;