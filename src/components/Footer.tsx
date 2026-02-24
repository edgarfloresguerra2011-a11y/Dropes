import { Instagram, Facebook, Twitter, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 pt-16 pb-8 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 mb-16">
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="text-2xl font-extrabold tracking-tight text-white mb-6 block">
              DROPES
            </a>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              Tu tienda de confianza. Productos virales, envío rápido y pago contra reembolso.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-zinc-700 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-zinc-700 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-zinc-700 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Tienda</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-zinc-400 hover:text-white text-sm transition-colors">Novedades</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white text-sm transition-colors">Lo más vendido</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white text-sm transition-colors">Ofertas</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white text-sm transition-colors">Categorías</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Soporte</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-zinc-400 hover:text-white text-sm transition-colors">Seguimiento de pedido</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white text-sm transition-colors">Envíos y entregas</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white text-sm transition-colors">Devoluciones</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white text-sm transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-zinc-400 hover:text-white text-sm transition-colors">Aviso Legal</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white text-sm transition-colors">Política de Privacidad</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white text-sm transition-colors">Términos y Condiciones</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white text-sm transition-colors">Política de Cookies</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} DROPES. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-2 text-zinc-500 text-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            Pago 100% Seguro
          </div>
        </div>
      </div>
    </footer>
  );
}
