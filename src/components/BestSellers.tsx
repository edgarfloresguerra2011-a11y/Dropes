import { Heart, ShoppingBag } from "lucide-react";

const products = [
  {
    id: 1,
    image: "https://picsum.photos/seed/prod1/400/400",
    tag: "OFERTA",
    brand: "Audio",
    name: "Auriculares Inalámbricos BT 5.0 ANC",
    stars: 5,
    reviews: "1.4K",
    priceNow: "29,99€",
    priceWas: "64,99€",
  },
  {
    id: 2,
    image: "https://picsum.photos/seed/prod2/400/400",
    tag: "NUEVO",
    brand: "Fitness",
    name: "Smartwatch Ultra con GPS",
    stars: 5,
    reviews: "892",
    priceNow: "39,99€",
    priceWas: "79,99€",
  },
  {
    id: 3,
    image: "https://picsum.photos/seed/prod3/400/400",
    tag: "VIRAL",
    brand: "Hogar",
    name: "Lámpara Luna 3D Táctil",
    stars: 4.5,
    reviews: "678",
    priceNow: "19,99€",
    priceWas: "39,99€",
  },
  {
    id: 4,
    image: "https://picsum.photos/seed/prod4/400/400",
    tag: "",
    brand: "Belleza",
    name: "Masajeador Eléctrico Cervical",
    stars: 5,
    reviews: "2.1K",
    priceNow: "24,99€",
    priceWas: "54,99€",
  },
  {
    id: 5,
    image: "https://picsum.photos/seed/prod5/400/400",
    tag: "",
    brand: "Smart Home",
    name: "Tira LED RGB WiFi Alexa",
    stars: 5,
    reviews: "1.9K",
    priceNow: "14,99€",
    priceWas: "29,99€",
  },
  {
    id: 6,
    image: "https://picsum.photos/seed/prod6/400/400",
    tag: "OFERTA",
    brand: "Deporte",
    name: "Bandas Elásticas Fitness Set",
    stars: 5,
    reviews: "3.2K",
    priceNow: "12,99€",
    priceWas: "24,99€",
  },
  {
    id: 7,
    image: "https://picsum.photos/seed/prod7/400/400",
    tag: "NUEVO",
    brand: "Mascotas",
    name: "Bebedero Automático Gatos",
    stars: 4.5,
    reviews: "445",
    priceNow: "22,99€",
    priceWas: "44,99€",
  },
  {
    id: 8,
    image: "https://picsum.photos/seed/prod8/400/400",
    tag: "",
    brand: "Skincare",
    name: "Suero Vitamina C Anti-Age",
    stars: 5,
    reviews: "1.1K",
    priceNow: "18,99€",
    priceWas: "47,99€",
  }
];

export default function BestSellers({ onBuy }: { onBuy: (product: any) => void }) {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-end mb-10 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900">
              Lo más vendido
            </h2>
            <p className="mt-2 text-zinc-500">Los productos favoritos de nuestros clientes.</p>
          </div>
          <a href="#" className="text-sm font-semibold text-zinc-900 hover:text-zinc-600 underline underline-offset-4">
            Ver todo el catálogo
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 sm:gap-x-6 lg:gap-x-8">
          {products.map(product => (
            <div key={product.id} className="group relative flex flex-col">
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-zinc-100 mb-4">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                {product.tag && (
                  <div className="absolute top-3 left-3 bg-white px-2 py-1 rounded text-[10px] font-bold tracking-wider uppercase text-zinc-900 shadow-sm">
                    {product.tag}
                  </div>
                )}
                <button className="absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-sm text-zinc-600 opacity-0 -translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 hover:text-red-500 hover:bg-white">
                  <Heart className="w-4 h-4" />
                </button>
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                  <button 
                    onClick={(e) => { e.preventDefault(); onBuy(product); }}
                    className="w-full bg-zinc-900/90 backdrop-blur-md text-white py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 hover:bg-zinc-900"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    Añadir
                  </button>
                </div>
              </div>
              
              <div className="flex flex-col flex-1">
                <div className="text-xs font-medium text-zinc-500 mb-1">{product.brand}</div>
                <h3 className="text-sm font-semibold text-zinc-900 mb-1 line-clamp-2">
                  <a href="#">
                    <span aria-hidden="true" className="absolute inset-0 z-10 bottom-16"></span>
                    {product.name}
                  </a>
                </h3>
                <div className="flex items-center gap-1 mb-2">
                  <span className="text-yellow-400 text-xs">{'★'.repeat(Math.floor(product.stars))}{product.stars % 1 !== 0 ? '½' : ''}</span>
                  <span className="text-xs text-zinc-500">({product.reviews})</span>
                </div>
                <div className="mt-auto flex items-baseline gap-2">
                  <span className="text-lg font-bold text-zinc-900">{product.priceNow}</span>
                  <span className="text-sm text-zinc-400 line-through">{product.priceWas}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
