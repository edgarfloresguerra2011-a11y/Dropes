import { ShoppingBag, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-zinc-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold tracking-wide uppercase mb-6">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
            Top Ventas 2025
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-zinc-900 leading-[1.1] mb-6">
            Productos virales.<br />
            <span className="text-zinc-500">Sin esperas.</span>
          </h1>
          <p className="text-lg text-zinc-600 mb-8 max-w-lg leading-relaxed">
            Descubre los artículos más buscados con envío exprés 24-48h. Paga cómodamente al recibir tu pedido con nuestro servicio Contra Reembolso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-zinc-900 text-white rounded-xl font-semibold hover:bg-zinc-800 transition-all active:scale-95">
              <ShoppingBag className="w-5 h-5" />
              Comprar Ahora
            </button>
            <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-zinc-900 border border-zinc-200 rounded-xl font-semibold hover:bg-zinc-50 transition-all active:scale-95">
              Ver Colección
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          
          <div className="mt-10 flex items-center gap-6 text-sm text-zinc-500 font-medium">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <img className="w-8 h-8 rounded-full border-2 border-white" src="https://picsum.photos/seed/1/100/100" alt="User" referrerPolicy="no-referrer" />
                <img className="w-8 h-8 rounded-full border-2 border-white" src="https://picsum.photos/seed/2/100/100" alt="User" referrerPolicy="no-referrer" />
                <img className="w-8 h-8 rounded-full border-2 border-white" src="https://picsum.photos/seed/3/100/100" alt="User" referrerPolicy="no-referrer" />
              </div>
              <span>+50k Clientes</span>
            </div>
            <div className="w-1 h-1 bg-zinc-300 rounded-full"></div>
            <div className="flex items-center gap-1">
              <span className="text-yellow-400 text-lg">★</span>
              <span className="text-zinc-900 font-bold">4.9/5</span>
              <span>Valoración</span>
            </div>
          </div>
        </div>

        <div className="relative lg:h-[600px] rounded-3xl overflow-hidden bg-zinc-200">
          <img 
            src="https://picsum.photos/seed/hero/800/1000" 
            alt="Hero Product" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl flex items-center justify-between">
            <div>
              <div className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-1">Producto Estrella</div>
              <div className="font-semibold text-zinc-900">Auriculares Noise Cancelling Pro</div>
            </div>
            <div className="bg-zinc-900 text-white px-3 py-1.5 rounded-lg font-bold">
              29,99€
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
