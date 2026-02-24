export default function PaymentMethods() {
  return (
    <section className="py-12 bg-white border-y border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <div className="text-sm font-bold text-zinc-900">Pago 100% Seguro</div>
              <div className="text-xs text-zinc-500">Transacciones encriptadas</div>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            <div className="h-10 px-4 bg-zinc-50 border border-zinc-200 rounded-lg flex items-center justify-center text-sm font-bold text-zinc-700">
              Contra Reembolso
            </div>
            <div className="h-10 px-4 bg-zinc-50 border border-zinc-200 rounded-lg flex items-center justify-center text-sm font-bold text-blue-600">
              Visa
            </div>
            <div className="h-10 px-4 bg-zinc-50 border border-zinc-200 rounded-lg flex items-center justify-center text-sm font-bold text-red-500">
              Mastercard
            </div>
            <div className="h-10 px-4 bg-zinc-50 border border-zinc-200 rounded-lg flex items-center justify-center text-sm font-bold text-sky-500">
              Bizum
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
