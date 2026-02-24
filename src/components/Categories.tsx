import { ArrowRight } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Tecnología",
    image: "https://picsum.photos/seed/cat1/600/800",
    items: "124 productos"
  },
  {
    id: 2,
    name: "Hogar",
    image: "https://picsum.photos/seed/cat2/600/800",
    items: "86 productos"
  },
  {
    id: 3,
    name: "Belleza",
    image: "https://picsum.photos/seed/cat3/600/800",
    items: "52 productos"
  },
  {
    id: 4,
    name: "Deporte",
    image: "https://picsum.photos/seed/cat4/600/800",
    items: "93 productos"
  }
];

export default function Categories() {
  return (
    <section className="py-16 lg:py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-end mb-10 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900">
              Categorías
            </h2>
            <p className="mt-2 text-zinc-500">Encuentra exactamente lo que buscas.</p>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {categories.map(category => (
            <a key={category.id} href="#" className="group relative h-64 sm:h-80 rounded-3xl overflow-hidden block">
              <img 
                src={category.image} 
                alt={category.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-zinc-900/20 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{category.name}</h3>
                  <p className="text-sm text-zinc-300">{category.items}</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white transition-transform duration-300 group-hover:translate-x-2 group-hover:bg-white group-hover:text-zinc-900">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
