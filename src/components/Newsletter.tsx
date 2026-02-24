export default function Newsletter() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-zinc-900 rounded-[2rem] p-8 md:p-16 overflow-hidden relative">
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-96 h-96 bg-zinc-800 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-96 h-96 bg-zinc-800 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
                Únete a nuestra comunidad
              </h2>
              <p className="text-lg text-zinc-400 mb-8">
                Recibe ofertas exclusivas, novedades y un 10% de descuento en tu primera compra.
              </p>
              <div className="flex items-center gap-4 text-sm text-zinc-400">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                  Sin spam
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                  Cancela cuando quieras
                </div>
              </div>
            </div>
            
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Tu correo electrónico" 
                className="w-full bg-white/10 border border-white/20 rounded-xl py-4 px-6 text-white placeholder:text-zinc-500 outline-none focus:border-white focus:bg-white/15 transition-all"
                required
              />
              <button 
                type="submit"
                className="w-full bg-white text-zinc-900 py-4 rounded-xl font-bold text-sm transition-all hover:bg-zinc-100 active:scale-[0.98]"
              >
                Suscribirme y conseguir 10%
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
