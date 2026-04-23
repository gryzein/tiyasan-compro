import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroIllustration() {
  return (
    <div className="relative w-full aspect-square max-w-[580px] mx-auto">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-100/60 via-transparent to-transparent rounded-[3rem] blur-2xl" />

      <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl shadow-orange-200/50">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80"
          alt="Modern AI enterprise technology"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
        <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[2.5rem] pointer-events-none" />
      </div>

      <div className="absolute top-6 right-[-8px] lg:right-[-16px] z-30 bg-white rounded-2xl shadow-2xl shadow-black/10 border border-slate-100 px-5 py-4 animate-[float_6s_ease-in-out_infinite]">
        <div className="flex items-center gap-2 mb-1">
          <div className="relative">
            <div className="w-2 h-2 rounded-full bg-[#FE4411]" />
            <div className="absolute inset-0 w-2 h-2 rounded-full bg-[#FE4411] animate-ping" />
          </div>
          <span className="text-[#585858] tracking-widest uppercase" style={{ fontWeight: 600, fontSize: "0.65rem" }}>AGENT · LIVE</span>
        </div>
        <div className="text-black" style={{ fontWeight: 800, fontSize: "1.5rem" }}>
          99.9<span className="text-[#FE4411]">%</span>
        </div>
        <div className="text-[#585858]" style={{ fontWeight: 400, fontSize: "0.7rem" }}>System Uptime</div>
      </div>

      <div className="absolute bottom-8 left-[-8px] lg:left-[-16px] z-30 bg-black rounded-2xl shadow-2xl shadow-black/20 px-5 py-4 animate-[float_7s_ease-in-out_infinite_1s]">
        <div className="flex items-center gap-2 mb-2">
          <svg viewBox="0 0 24 24" className="w-3 h-3 text-[#FE4411]" fill="currentColor">
            <path d="M12 0 L14 10 L24 12 L14 14 L12 24 L10 14 L0 12 L10 10 Z" />
          </svg>
          <span className="text-[#585858] tracking-widest uppercase" style={{ fontWeight: 600, fontSize: "0.65rem" }}>AI Insight</span>
        </div>
        <div className="text-white" style={{ fontWeight: 800, fontSize: "1.25rem" }}>+48%</div>
        <div className="text-white/70" style={{ fontWeight: 400, fontSize: "0.7rem" }}>Efficiency gain</div>
      </div>

      <div className="absolute bottom-16 right-6 z-30 bg-[#FE4411] rounded-full shadow-xl shadow-orange-300/50 px-4 py-2.5 flex items-center gap-2 animate-[float_5s_ease-in-out_infinite_0.5s]">
        <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
          <svg viewBox="0 0 12 12" className="w-3 h-3 text-white">
            <path d="M2 6 L5 9 L10 3" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <span className="text-white" style={{ fontWeight: 600, fontSize: "0.8rem" }}>ERPNext Connected</span>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
}
