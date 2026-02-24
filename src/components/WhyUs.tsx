import { ShieldCheck, Truck, Undo2, HeadphonesIcon } from "lucide-react";

export default function WhyUs() {
  return (
    <section className="py-16 lg:py-24 bg-zinc-50 border-y border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 mb-4">
            La nueva forma de comprar
          </h2>
          <p className="text-lg text-zinc-600">
            Olvídate de las tiendas de dropshipping tradicionales. Ofrecemos una experiencia premium, rápida y segura.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-100">
            <div className="w-12 h-12 bg-zinc-100 rounded-2xl flex items-center justify-center mb-6">
              <Truck className="w-6 h-6 text-zinc-900" />
            </div>
            <h3 className="text-lg font-bold text-zinc-900 mb-2">Envío 24-48h</h3>
            <p className="text-zinc-600 text-sm leading-relaxed">
              Trabajamos con almacenes locales para que recibas tu pedido en tiempo récord.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-100">
            <div className="w-12 h-12 bg-zinc-100 rounded-2xl flex items-center justify-center mb-6">
              <ShieldCheck className="w-6 h-6 text-zinc-900" />
            </div>
            <h3 className="text-lg font-bold text-zinc-900 mb-2">Pago Contra Reembolso</h3>
            <p className="text-zinc-600 text-sm leading-relaxed">
              Paga en efectivo directamente al repartidor cuando recibas tu paquete. Cero riesgos.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-100">
            <div className="w-12 h-12 bg-zinc-100 rounded-2xl flex items-center justify-center mb-6">
              <Undo2 className="w-6 h-6 text-zinc-900" />
            </div>
            <h3 className="text-lg font-bold text-zinc-900 mb-2">Devoluciones Fáciles</h3>
            <p className="text-zinc-600 text-sm leading-relaxed">
              ¿No te convence? Tienes 30 días para devolverlo sin preguntas ni complicaciones.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-100">
            <div className="w-12 h-12 bg-zinc-100 rounded-2xl flex items-center justify-center mb-6">
              <HeadphonesIcon className="w-6 h-6 text-zinc-900" />
            </div>
            <h3 className="text-lg font-bold text-zinc-900 mb-2">Soporte 24/7</h3>
            <p className="text-zinc-600 text-sm leading-relaxed">
              Nuestro equipo está siempre disponible vía WhatsApp o email para ayudarte.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
