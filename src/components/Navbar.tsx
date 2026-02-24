import { Search, Heart, ShoppingBag, Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button className="lg:hidden p-2 text-zinc-600 hover:text-zinc-900">
            <Menu className="w-5 h-5" />
          </button>
          <a href="#" className="text-2xl font-extrabold tracking-tighter text-zinc-900 flex items-center gap-1">
            DROPES<span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
          </a>
        </div>

        <ul className="hidden lg:flex items-center gap-8">
          <li><a href="#" className="text-sm font-medium text-zinc-900 hover:text-zinc-600 transition-colors">Inicio</a></li>
          <li><a href="#" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">Tecnología</a></li>
          <li><a href="#" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">Hogar</a></li>
          <li><a href="#" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">Belleza</a></li>
          <li><a href="#" className="text-sm font-medium text-red-600 hover:text-red-700 transition-colors">Ofertas</a></li>
        </ul>

        <div className="flex items-center gap-2 sm:gap-4">
          <button className="p-2 text-zinc-600 hover:text-zinc-900 transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button className="hidden sm:block p-2 text-zinc-600 hover:text-zinc-900 transition-colors">
            <Heart className="w-5 h-5" />
          </button>
          <button className="p-2 text-zinc-600 hover:text-zinc-900 transition-colors relative">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-4 h-4 bg-zinc-900 text-white text-[10px] font-bold rounded-full flex items-center justify-center">2</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
