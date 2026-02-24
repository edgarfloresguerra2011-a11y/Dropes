import { Truck, ShieldCheck, Undo2, Banknote } from "lucide-react";

export default function TrustRibbon() {
  return (
    <div className="border-y border-zinc-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-zinc-200">
          <div className="py-6 px-4 flex flex-col items-center text-center gap-3">
            <Truck className="w-6 h-6 text-zinc-900" />
            <div>
              <div className="text-sm font-bold text-zinc-900">Envío 24-48h</div>
              <div className="text-xs text-zinc-500 mt-0.5">España y Portugal</div>
            </div>
          </div>
          <div className="py-6 px-4 flex flex-col items-center text-center gap-3">
            <Banknote className="w-6 h-6 text-zinc-900" />
            <div>
              <div className="text-sm font-bold text-zinc-900">Contra Reembolso</div>
              <div className="text-xs text-zinc-500 mt-0.5">Paga al recibir</div>
            </div>
          </div>
          <div className="py-6 px-4 flex flex-col items-center text-center gap-3">
            <ShieldCheck className="w-6 h-6 text-zinc-900" />
            <div>
              <div className="text-sm font-bold text-zinc-900">Pago Seguro</div>
              <div className="text-xs text-zinc-500 mt-0.5">100% encriptado</div>
            </div>
          </div>
          <div className="py-6 px-4 flex flex-col items-center text-center gap-3">
            <Undo2 className="w-6 h-6 text-zinc-900" />
            <div>
              <div className="text-sm font-bold text-zinc-900">Devoluciones</div>
              <div className="text-xs text-zinc-500 mt-0.5">30 días de garantía</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
