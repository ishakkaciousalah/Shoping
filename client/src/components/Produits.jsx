function Produits({weAdd ,like , jaimeCount1 ,like2 , like3 , jaimeCount2 , jaimeCount3}) {
  return (
    <section id="pc-portables" className="bg-zinc-950 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-2xl font-bold text-amber-400 sm:text-3xl">
          PC populaires
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="overflow-hidden rounded-md border border-zinc-800 bg-zinc-900 transition hover:border-zinc-700">
            <img
              className="h-52 w-full bg-zinc-800 object-contain p-4"
              src="https://tse4.mm.bing.net/th/id/OIP.BEURqYUANjONXEqth1pIKAAAAA?r=0&w=400&h=400&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="PC portable Dell Latitude"
            />

            <div className="p-5">
              <h3 className="text-lg font-semibold text-zinc-100">
                PC Dell Latitude pour Etudiant
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                Core i5 • 16 Go RAM • 512 Go SSD
              </p>
              <p className="mt-4 text-xl font-bold text-amber-400">
                100 000 DA
              </p>

              <button
                type="button"
                onClick={weAdd}
                className="mt-4 w-full rounded-md bg-amber-400 px-4 py-2 font-semibold text-zinc-950 transition-colors hover:bg-amber-300"
              >
                Ajouter au panier
              </button>
              <button
                type="button"
                onClick={like}
                className="mt-4 w-full rounded-md bg-amber-400 px-4 py-2 font-semibold text-zinc-950 transition-colors hover:bg-amber-300"
              >
                J'aime {jaimeCount1}
              </button>
            </div>
          </div>

          <div className="overflow-hidden rounded-md border border-zinc-800 bg-zinc-900 transition hover:border-zinc-700">
            <img
              className="h-52 w-full bg-zinc-800 object-contain p-4"
              src="https://cdn.mos.cms.futurecdn.net/U5Fdom8yDwVcEivFjiqajF-1200-80.jpg"
              alt="PC portable Dell Latitude"
            />

            <div className="p-5">
              <h3 className="text-lg font-semibold text-zinc-100">
                PC Gaming
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
               Ryzen 7 • RTX • 32 Go RAM
              </p>
              <p className="mt-4 text-xl font-bold text-amber-400">
                200 000 DA
              </p>

              <button
                type="button"
                onClick={weAdd}
                className="mt-4 w-full rounded-md bg-amber-400 px-4 py-2 font-semibold text-zinc-950 transition-colors hover:bg-amber-300"
              >
                Ajouter au panier
              </button>
              <button
                type="button"
                onClick={like2}
                className="mt-4 w-full rounded-md bg-amber-400 px-4 py-2 font-semibold text-zinc-950 transition-colors hover:bg-amber-300"
              >
                J'aime {jaimeCount2}
              </button>
            </div>
          </div>

          <div className="overflow-hidden rounded-md border border-zinc-800 bg-zinc-900 transition hover:border-zinc-700">
            <img
              className="h-52 w-full bg-zinc-800 object-contain p-4"
              src="https://tse3.mm.bing.net/th/id/OIP.HqSW_Umsez1NkK1lFzVrewAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="PC portable Dell Latitude"
            />

            <div className="p-5">
              <h3 className="text-lg font-semibold text-zinc-100">
                PC macbook air M5
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                M5 • 32 Go RAM • 512 Go SSD
              </p>
              <p className="mt-4 text-xl font-bold text-amber-400">
                100 000 DA
              </p>

              <button
                type="button"
                onClick={weAdd}
                className="mt-4 w-full rounded-md bg-amber-400 px-4 py-2 font-semibold text-zinc-950 transition-colors hover:bg-amber-300"
              >
                
                Ajouter au panier
              </button>
              <button
                type="button"
                onClick={like3}
                className="mt-4 w-full rounded-md bg-amber-400 px-4 py-2 font-semibold text-zinc-950 transition-colors hover:bg-amber-300"
              >
                J'aime {jaimeCount3}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Produits;
