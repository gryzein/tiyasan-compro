import { Brain, Layers, Shield } from "lucide-react";

const values = [
  {
    icon: Brain,
    title: "AI-First Approach",
    desc: "Every solution we build begins with intelligence at its core — not as an afterthought but as the foundational layer driving every decision and workflow.",
  },
  {
    icon: Layers,
    title: "ERPNext Expertise",
    desc: "Deep mastery of the ERPNext ecosystem — from Frappe framework internals to custom DocTypes and production-grade enterprise deployments.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    desc: "Red team auditing, penetration testing, and compliance-ready infrastructure. We secure systems the way adversaries attack them.",
  },
];

export function ValueProp() {
  return (
    <section id="why-us" className="py-24 lg:py-32 bg-black relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#FE4411] blur-3xl opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-20">
          <span className="text-[#FE4411] tracking-widest uppercase" style={{ fontWeight: 600, fontSize: "0.75rem" }}>
            Why TNT
          </span>
          <h2 className="mt-4 text-white tracking-tight leading-[1.1]" style={{ fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3.25rem)" }}>
            Three principles that define how we build.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <div key={v.title} className="group">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[#585858] tracking-tight" style={{ fontWeight: 800, fontSize: "1.25rem" }}>
                  0{i + 1}
                </span>
                <div className="flex-1 h-px bg-slate-700 group-hover:bg-[#FE4411] transition-colors" />
                <v.icon className="w-7 h-7 text-[#FE4411]" strokeWidth={1.5} />
              </div>
              <h3 className="text-white tracking-tight mb-4" style={{ fontWeight: 700, fontSize: "1.5rem" }}>
                {v.title}
              </h3>
              <p className="text-slate-400 leading-relaxed" style={{ fontWeight: 300 }}>
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
