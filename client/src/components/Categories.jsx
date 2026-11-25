function Categories(){
    return(
        <section  className="bg-zinc-950 py-16">
            <h1 className="text-center text-3xl text-amber-500 pb-20">
                Nos Categories de PC 
            </h1>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="bg-zinc-800 text-amber-400 p-4 rounded-md ">PC portable pour etudiants</div>
                <div className="bg-zinc-800 text-amber-400 p-4 rounded-md">PC gaming</div>
                <div className="bg-zinc-800 text-amber-400  p-4 rounded-md">Accessoires</div>
                <div className="bg-zinc-800 text-amber-400 p-4 rounded-md">Ecran externe</div>
            </div>


        </section>
    )
}
export default Categories
