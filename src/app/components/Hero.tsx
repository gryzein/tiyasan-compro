import { ArrowRight, Sparkles, Brain, Workflow, ShieldCheck, Headphones } from "lucide-react";
import { HeroIllustration } from "./HeroIllustration";

const categories = [
  { icon: Brain, title: "Strategy", desc: "AI-first roadmaps tailored to your enterprise." },
  { icon: Workflow, title: "Planning", desc: "ERPNext architecture & process automation." },
  { icon: ShieldCheck, title: "Security", desc: "Red-team audits & compliance hardening." },
  { icon: Headphones, title: "Support", desc: "Managed services with SLA guarantees." },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute top-20 -right-40 w-[500px] h-[500px] rounded-full bg-orange-50 blur-3xl opacity-60" />
      <div className="absolute -bottom-20 -left-40 w-[400px] h-[400px] rounded-full bg-orange-100 blur-3xl opacity-40" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-16 lg:pt-24 lg:pb-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-100 mb-8">
              <Sparkles className="w-4 h-4 text-[#FE4411]" />
              <span className="text-[#FE4411] tracking-wide" style={{ fontWeight: 500, fontSize: "0.875rem" }}>
                Top Managed Provider
              </span>
            </div>

            <h1 className="text-black tracking-tight leading-[1.05]" style={{ fontWeight: 800, fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)" }}>
              Agentic ERP &{" "}
              <span className="relative inline-block">
                <span className="text-[#FE4411]">IT Services</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                  <path d="M2 9C50 3 150 3 298 9" stroke="#FE4411" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            <p className="mt-8 max-w-2xl leading-relaxed text-[#6b6b6b]" style={{ fontWeight: 300, fontSize: "1.125rem" }}>
              AI-powered autonomous agents built on ERPNext. Streamline operations, automate decisions, and scale your enterprise with intelligent systems designed for tomorrow.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#FE4411] text-white hover:bg-[#e63c0e] transition-all hover:shadow-xl hover:shadow-orange-200 hover:-translate-y-0.5" style={{ fontWeight: 600 }}>
                Explore Our Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-slate-200 text-black hover:border-[#FE4411] hover:text-[#FE4411] transition-all" style={{ fontWeight: 600 }}>
                Contact Us
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <HeroIllustration />
          </div>
        </div>

        {/* Category grid */}
        <div className="mt-16 lg:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((c) => (
            <div key={c.title} className="group bg-white p-6 rounded-2xl border border-slate-100 hover:border-[#FE4411] hover:shadow-xl hover:shadow-orange-100/40 transition-all cursor-pointer">
              <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center mb-4 group-hover:bg-[#FE4411] transition-colors">
                <c.icon className="w-6 h-6 text-[#FE4411] group-hover:text-white transition-colors" strokeWidth={1.75} />
              </div>
              <h3 className="text-black mb-2" style={{ fontWeight: 700, fontSize: "1.125rem" }}>{c.title}</h3>
              <p className="text-[#585858] leading-relaxed" style={{ fontWeight: 300, fontSize: "0.875rem" }}>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
