import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "María G.",
    role: "Comprador Verificado",
    text: "El envío fue súper rápido, me llegó al día siguiente. El producto es tal cual se describe. Muy contenta con la compra.",
    rating: 5,
    image: "https://picsum.photos/seed/user1/100/100"
  },
  {
    id: 2,
    name: "Carlos M.",
    role: "Comprador Verificado",
    text: "Poder pagar contra reembolso me dio mucha confianza. El repartidor fue muy amable. Repetiré seguro.",
    rating: 5,
    image: "https://picsum.photos/seed/user2/100/100"
  },
  {
    id: 3,
    name: "Laura P.",
    role: "Comprador Verificado",
    text: "Tuve una duda con mi pedido y me atendieron por WhatsApp al instante. Un servicio al cliente de 10.",
    rating: 5,
    image: "https://picsum.photos/seed/user3/100/100"
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 mb-4">
            Lo que dicen de nosotros
          </h2>
          <p className="text-lg text-zinc-600">
            Más de 10.000 clientes satisfechos en toda España.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="bg-zinc-50 p-8 rounded-3xl border border-zinc-100">
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-zinc-700 leading-relaxed mb-8">"{testimonial.text}"</p>
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="font-bold text-zinc-900">{testimonial.name}</div>
                  <div className="text-sm text-zinc-500">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
