import { Brain, Layers, Shield, Zap, ArrowUpRight } from "lucide-react";

const features = [
  { icon: Brain, title: "AI-First Approach", desc: "Every solution starts with intelligence at its core not an afterthought." },
  { icon: Layers, title: "ERPNext Expertise", desc: "Deep mastery of Frappe framework, DocTypes, and enterprise deployments." },
  { icon: Shield, title: "Red Team Auditing", desc: "We secure systems the way adversaries attack them with rigorous pen-testing." },
  { icon: Zap, title: "Agile Execution", desc: "Ship value in sprints, not semesters. Transparent, measurable, relentless." },
];

export function Differently() {
  return (
    <section id="why-us" className="relative bg-black py-24 lg:py-32 overflow-hidden">
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#FE4411] blur-3xl opacity-15" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#FE4411] blur-3xl opacity-10" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-6">
            <span className="text-[#FE4411] tracking-widest uppercase" style={{ fontWeight: 600, fontSize: "0.75rem" }}>
              Why Tiyasan
            </span>
            <h2 className="mt-4 text-white tracking-tight leading-[1.1]" style={{ fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3.25rem)" }}>
              We do things differently at <span className="text-[#FE4411]">Tiyasan Nusantara</span>.
            </h2>
          </div>
          <div className="lg:col-span-6 flex items-end">
            <p className="leading-relaxed text-[#585858]" style={{ fontWeight: 300, fontSize: "1.125rem" }}>
              Four principles shape how we architect, build, and defend the enterprise systems of tomorrow. Not buzzwords the operating code of our craft.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-[#FE4411] hover:border-[#FE4411] transition-all hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="w-12 h-12 rounded-xl bg-[#FE4411] group-hover:bg-white flex items-center justify-center transition-colors">
                  <f.icon className="w-6 h-6 text-white group-hover:text-[#FE4411] transition-colors" strokeWidth={1.75} />
                </div>
                
              </div>
              <h3 className="text-white tracking-tight mb-3" style={{ fontWeight: 700, fontSize: "1.25rem" }}>{f.title}</h3>
              <p className="group-hover:text-white/90 leading-relaxed text-[#585858]" style={{ fontWeight: 300, fontSize: "0.9rem" }}>
                {f.desc}
              </p>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
