import { useState } from "react";
import { X, CheckCircle2, ShieldCheck, Truck, CreditCard } from "lucide-react";

export default function CheckoutModal({ product, onClose }: { product: any, onClose: () => void }) {
  const [step, setStep] = useState<"cart" | "upsell" | "checkout" | "success">("cart");
  const [loading, setLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<"cod" | "card">("cod");

  const handleNext = (nextStep: "upsell" | "checkout" | "success") => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(nextStep);
    }, 600);
  };

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-zinc-900/40 backdrop-blur-sm">
      <div className="bg-white rounded-3xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl relative animate-pop-in">
        <button onClick={onClose} className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-zinc-100 text-zinc-500 hover:bg-zinc-200 hover:text-zinc-900 transition-colors z-10">
          <X className="w-4 h-4" />
        </button>

        {step === "cart" && (
          <div className="p-6 sm:p-8">
            <h3 className="text-2xl font-extrabold text-zinc-900 mb-6">Tu Carrito</h3>
            <div className="flex gap-4 items-center bg-zinc-50 border border-zinc-200 rounded-2xl p-4 mb-6">
              <img src={product.image} alt={product.name} className="w-20 h-20 rounded-xl object-cover" referrerPolicy="no-referrer" />
              <div className="flex-1">
                <div className="text-sm font-semibold text-zinc-900 mb-1 line-clamp-2">{product.name}</div>
                <div className="text-lg font-bold text-zinc-900">{product.priceNow}</div>
              </div>
            </div>
            
            <div className="space-y-3 mb-8 bg-zinc-50 p-5 rounded-2xl border border-zinc-100">
              <div className="flex justify-between text-sm text-zinc-600">
                <span>Subtotal</span>
                <span className="font-medium text-zinc-900">{product.priceNow}</span>
              </div>
              <div className="flex justify-between text-sm text-emerald-600 font-medium">
                <span>Envío (24-48h)</span>
                <span>GRATIS</span>
              </div>
              <div className="h-px bg-zinc-200 my-2"></div>
              <div className="flex justify-between text-lg font-bold text-zinc-900">
                <span>Total</span>
                <span>{product.priceNow}</span>
              </div>
            </div>

            <button 
              onClick={() => handleNext("upsell")}
              disabled={loading}
              className="w-full bg-zinc-900 text-white py-4 rounded-xl font-bold text-sm transition-all hover:bg-zinc-800 active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {loading ? "Cargando..." : "Finalizar Compra"}
            </button>
          </div>
        )}

        {step === "upsell" && (
          <div className="p-6 sm:p-8 text-center">
            <div className="inline-block bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-6">
              Oferta Exclusiva
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 mb-3 leading-tight">
              Añade un 2º artículo con <span className="text-red-600">50% EXTRA</span>
            </h3>
            <p className="text-zinc-600 text-sm mb-8">
              El 85% de los clientes compran 2 unidades para regalar.
            </p>

            <div className="bg-white border-2 border-red-500 rounded-2xl p-4 mb-8 relative text-left shadow-lg shadow-red-500/10">
              <div className="absolute -top-3 right-4 bg-red-500 text-white text-[10px] font-bold px-3 py-1 rounded-full">
                OFERTA ÚNICA
              </div>
              <div className="flex gap-4 items-center">
                <img src={product.image} alt={product.name} className="w-16 h-16 rounded-xl object-cover" referrerPolicy="no-referrer" />
                <div>
                  <div className="text-sm font-semibold text-zinc-900 mb-1 line-clamp-1">+1 {product.name}</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-lg font-bold text-red-600">14,99€</span>
                    <span className="text-xs text-zinc-400 line-through">{product.priceNow}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <button 
                onClick={() => handleNext("checkout")}
                disabled={loading}
                className="w-full bg-red-600 text-white py-4 rounded-xl font-bold text-sm transition-all hover:bg-red-700 active:scale-[0.98] disabled:opacity-50 shadow-lg shadow-red-600/20"
              >
                {loading ? "Añadiendo..." : "¡Sí, quiero añadirlo!"}
              </button>
              <button 
                onClick={() => handleNext("checkout")}
                className="w-full bg-white text-zinc-500 py-3 rounded-xl font-medium text-sm transition-all hover:text-zinc-900 hover:bg-zinc-50"
              >
                No gracias, continuar con mi pedido
              </button>
            </div>
          </div>
        )}

        {step === "checkout" && (
          <div className="p-6 sm:p-8">
            <h3 className="text-2xl font-extrabold text-zinc-900 mb-6">Finalizar Pedido</h3>
            
            <div className="grid grid-cols-2 gap-3 mb-6">
              <button 
                onClick={() => setPaymentMethod("cod")}
                className={`p-4 rounded-2xl border-2 flex flex-col items-center gap-2 transition-all ${paymentMethod === 'cod' ? 'border-zinc-900 bg-zinc-50' : 'border-zinc-200 hover:border-zinc-300'}`}
              >
                <Truck className={`w-6 h-6 ${paymentMethod === 'cod' ? 'text-zinc-900' : 'text-zinc-400'}`} />
                <span className={`text-xs font-bold ${paymentMethod === 'cod' ? 'text-zinc-900' : 'text-zinc-500'}`}>Contra Reembolso</span>
              </button>
              <button 
                onClick={() => setPaymentMethod("card")}
                className={`p-4 rounded-2xl border-2 flex flex-col items-center gap-2 transition-all ${paymentMethod === 'card' ? 'border-zinc-900 bg-zinc-50' : 'border-zinc-200 hover:border-zinc-300'}`}
              >
                <CreditCard className={`w-6 h-6 ${paymentMethod === 'card' ? 'text-zinc-900' : 'text-zinc-400'}`} />
                <span className={`text-xs font-bold ${paymentMethod === 'card' ? 'text-zinc-900' : 'text-zinc-500'}`}>Tarjeta / Bizum</span>
              </button>
            </div>

            <form className="space-y-4 mb-6" onSubmit={(e) => { e.preventDefault(); handleNext("success"); }}>
              <div className="grid grid-cols-2 gap-4">
                <input required type="text" placeholder="Nombre" className="w-full bg-zinc-50 border border-zinc-200 rounded-xl py-3 px-4 text-sm outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-all" />
                <input required type="text" placeholder="Apellidos" className="w-full bg-zinc-50 border border-zinc-200 rounded-xl py-3 px-4 text-sm outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-all" />
              </div>
              <input required type="tel" placeholder="Teléfono (Para el repartidor)" className="w-full bg-zinc-50 border border-zinc-200 rounded-xl py-3 px-4 text-sm outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-all" />
              <input required type="text" placeholder="Dirección completa" className="w-full bg-zinc-50 border border-zinc-200 rounded-xl py-3 px-4 text-sm outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-all" />
              <div className="grid grid-cols-2 gap-4">
                <input required type="text" placeholder="Código Postal" className="w-full bg-zinc-50 border border-zinc-200 rounded-xl py-3 px-4 text-sm outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-all" />
                <input required type="text" placeholder="Ciudad" className="w-full bg-zinc-50 border border-zinc-200 rounded-xl py-3 px-4 text-sm outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-all" />
              </div>
              
              <button 
                type="submit"
                disabled={loading}
                className="w-full bg-zinc-900 text-white py-4 rounded-xl font-bold text-sm transition-all hover:bg-zinc-800 active:scale-[0.98] disabled:opacity-50 mt-2 flex items-center justify-center gap-2"
              >
                {loading ? "Procesando..." : paymentMethod === 'cod' ? "Confirmar Pedido (Pagar al recibir)" : "Ir al Pago Seguro"}
              </button>
            </form>

            <div className="flex items-center justify-center gap-2 text-xs text-zinc-500">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              Tus datos están seguros y encriptados.
            </div>
          </div>
        )}

        {step === "success" && (
          <div className="p-8 sm:p-12 text-center">
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-emerald-600" />
            </div>
            <h3 className="text-3xl font-extrabold text-zinc-900 mb-4">¡Pedido Confirmado!</h3>
            <p className="text-zinc-600 mb-8 leading-relaxed">
              Tu pedido ha sido registrado con éxito. Lo prepararemos de inmediato.
              <br /><br />
              {paymentMethod === 'cod' && (
                <strong className="text-zinc-900 bg-zinc-100 px-3 py-1 rounded-lg inline-block mt-2">
                  Recuerda tener el importe en efectivo preparado.
                </strong>
              )}
            </p>
            <button 
              onClick={onClose}
              className="w-full bg-zinc-100 text-zinc-900 py-4 rounded-xl font-bold text-sm transition-all hover:bg-zinc-200 active:scale-[0.98]"
            >
              Volver a la tienda
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
