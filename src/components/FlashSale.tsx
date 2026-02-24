import { useEffect, useState } from "react";

export default function FlashSale() {
  const [timeLeft, setTimeLeft] = useState({ h: 8, m: 47, s: 22 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { h, m, s } = prev;
        if (s > 0) {
          s--;
        } else {
          s = 59;
          if (m > 0) {
            m--;
          } else {
            m = 59;
            if (h > 0) {
              h--;
            }
          }
        }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="py-10 px-6 md:py-[60px] md:px-20 bg-c-black">
      <div className="bg-c-card border border-c-border rounded-[20px] p-8 md:p-14 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-[60px] items-center relative overflow-hidden">
        <div className="absolute -top-20 right-[200px] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(255,69,0,0.1),transparent_70%)] pointer-events-none"></div>
        <div className="absolute right-[50px] top-1/2 -translate-y-1/2 font-display text-[180px] font-extrabold tracking-[-0.05em] text-white/5 pointer-events-none select-none hidden md:block">
          SALE
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="inline-flex items-center gap-1.5 bg-c-orange py-1 px-3.5 rounded-md text-[11px] font-extrabold tracking-[0.15em] uppercase">
              ⚡ Flash Sale
            </div>
            <div className="text-[13px] text-c-gray">Sólo por tiempo limitado</div>
          </div>
          <div className="font-display text-[48px] md:text-[64px] font-extrabold tracking-[-0.04em] leading-none mb-3">
            HASTA <span className="text-c-orange">70%</span><br />DESCUENTO
          </div>
          <div className="text-c-gray text-[14px]">Aprovecha antes de que acabe el contador</div>
          
          <div className="flex gap-2.5 mt-7">
            <div className="bg-c-black border border-c-border2 rounded-xl py-3.5 px-[18px] text-center min-w-[74px]">
              <div className="font-display text-[38px] font-extrabold leading-none text-c-orange tracking-[-0.02em]">
                {String(timeLeft.h).padStart(2, '0')}
              </div>
              <div className="text-[10px] uppercase tracking-[0.12em] text-c-gray mt-1">Horas</div>
            </div>
            <div className="font-display text-[30px] text-c-gray self-center mb-3.5">:</div>
            <div className="bg-c-black border border-c-border2 rounded-xl py-3.5 px-[18px] text-center min-w-[74px]">
              <div className="font-display text-[38px] font-extrabold leading-none text-c-orange tracking-[-0.02em]">
                {String(timeLeft.m).padStart(2, '0')}
              </div>
              <div className="text-[10px] uppercase tracking-[0.12em] text-c-gray mt-1">Min</div>
            </div>
            <div className="font-display text-[30px] text-c-gray self-center mb-3.5">:</div>
            <div className="bg-c-black border border-c-border2 rounded-xl py-3.5 px-[18px] text-center min-w-[74px]">
              <div className="font-display text-[38px] font-extrabold leading-none text-c-orange tracking-[-0.02em]">
                {String(timeLeft.s).padStart(2, '0')}
              </div>
              <div className="text-[10px] uppercase tracking-[0.12em] text-c-gray mt-1">Seg</div>
            </div>
          </div>
        </div>

        <div className="hidden md:flex gap-4 relative z-10">
          <div className="w-[180px] shrink-0 bg-c-black border border-c-border2 rounded-[14px] overflow-hidden transition-all duration-300 ease-out-custom cursor-pointer hover:-translate-y-1 hover:border-c-orange/30 hover:shadow-[0_12px_30px_rgba(0,0,0,0.5)]">
            <div className="h-[140px] flex items-center justify-center text-[60px] relative bg-gradient-to-br from-[#1c0a32] to-[#380d68]">
              <span className="relative z-10">🎧</span>
              <div className="absolute top-2.5 left-2.5 bg-c-orange text-white py-1 px-2.5 rounded-md text-[10px] font-bold tracking-[0.07em] uppercase z-20">-55%</div>
            </div>
            <div className="p-3.5">
              <div className="text-[12px] font-medium mb-2 leading-[1.3]">Auriculares BT Premium</div>
              <div className="flex items-center gap-1.5">
                <span className="text-[16px] font-bold">24,99€</span>
                <span className="text-[11px] text-c-gray line-through">54,99€</span>
              </div>
            </div>
          </div>
          <div className="w-[180px] shrink-0 bg-c-black border border-c-border2 rounded-[14px] overflow-hidden transition-all duration-300 ease-out-custom cursor-pointer hover:-translate-y-1 hover:border-c-orange/30 hover:shadow-[0_12px_30px_rgba(0,0,0,0.5)]">
            <div className="h-[140px] flex items-center justify-center text-[60px] relative bg-gradient-to-br from-[#0a141c] to-[#0d2238]">
              <span className="relative z-10">⌚</span>
              <div className="absolute top-2.5 left-2.5 bg-c-orange text-white py-1 px-2.5 rounded-md text-[10px] font-bold tracking-[0.07em] uppercase z-20">-40%</div>
            </div>
            <div className="p-3.5">
              <div className="text-[12px] font-medium mb-2 leading-[1.3]">Smartwatch Fitness Pro</div>
              <div className="flex items-center gap-1.5">
                <span className="text-[16px] font-bold">35,99€</span>
                <span className="text-[11px] text-c-gray line-through">59,99€</span>
              </div>
            </div>
          </div>
          <div className="w-[180px] shrink-0 bg-c-black border border-c-border2 rounded-[14px] overflow-hidden transition-all duration-300 ease-out-custom cursor-pointer hover:-translate-y-1 hover:border-c-orange/30 hover:shadow-[0_12px_30px_rgba(0,0,0,0.5)]">
            <div className="h-[140px] flex items-center justify-center text-[60px] relative bg-gradient-to-br from-[#1c100a] to-[#381d0d]">
              <span className="relative z-10">💆</span>
              <div className="absolute top-2.5 left-2.5 bg-[#FF2D55] text-white py-1 px-2.5 rounded-md text-[10px] font-bold tracking-[0.07em] uppercase z-20">-60%</div>
            </div>
            <div className="p-3.5">
              <div className="text-[12px] font-medium mb-2 leading-[1.3]">Masajeador Cervical</div>
              <div className="flex items-center gap-1.5">
                <span className="text-[16px] font-bold">19,99€</span>
                <span className="text-[11px] text-c-gray line-through">49,99€</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
