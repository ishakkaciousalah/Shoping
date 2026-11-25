function Landing() {
  return (
    <main className="min-h-screen bg-zinc-950 font-sans text-zinc-100">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-amber-400">
              PERFORMANCE • FIABILITÉ • CONSEIL
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Le bon PC pour chaque projet.
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-8 text-zinc-300">
              Gaming, études ou travail : découvrez des ordinateurs adaptés à
              vos besoins, avec des performances optimales et un design moderne.
            </p>

            <button
              type="button"
              className="mt-8 inline-flex rounded-md bg-amber-400 px-5 py-3 font-semibold text-zinc-950 transition hover:bg-amber-300"
            >
              Découvrir nos produits
            </button>
          </div>

          <div className="flex items-center justify-center">
            <img
              className="w-full max-w-lg rounded-md border border-zinc-800 object-cover"
              src="https://tse1.mm.bing.net/th/id/OIP.5PbFpf6bFKJXt-9UqnwhEwHaEK?r=0&w=840&h=472&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Ordinateur portable présenté dans la boutique Shoping"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Landing;