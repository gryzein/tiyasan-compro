export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5">
            <span className="text-[#FE4411] tracking-widest uppercase" style={{ fontWeight: 600, fontSize: "0.75rem" }}>
              About TNT
            </span>
            <h2 className="mt-4 text-black tracking-tight leading-[1.1]" style={{ fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3.25rem)" }}>
              Engineering the future of enterprise software.
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-6">
            <p className="text-slate-600 leading-relaxed" style={{ fontWeight: 300, fontSize: "1.125rem" }}>
              PT. Tiyasan Nusantara Teknologi is a forward-thinking IT solutions company headquartered in Jakarta Selatan, specializing in AI-integrated enterprise systems. We architect software that thinks, adapts, and scales.
            </p>
            <p className="text-slate-600 leading-relaxed" style={{ fontWeight: 300, fontSize: "1.125rem" }}>
              From autonomous ERP agents to blockchain infrastructure, our team merges deep engineering craft with strategic intelligence — empowering organizations across Southeast Asia to operate faster, safer, and smarter.
            </p>
            <div className="pt-6 flex items-center gap-10">
              <div>
                <div className="text-black tracking-tight" style={{ fontWeight: 800, fontSize: "2rem" }}>ISO</div>
                <div className="text-[#585858]" style={{ fontWeight: 400 }}>27001 Aligned</div>
              </div>
              <div className="w-px h-12 bg-slate-200" />
              <div>
                <div className="text-black tracking-tight" style={{ fontWeight: 800, fontSize: "2rem" }}>ID</div>
                <div className="text-[#585858]" style={{ fontWeight: 400 }}>Jakarta HQ</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
