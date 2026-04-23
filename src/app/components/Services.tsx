import { Bot, Code2, Blocks, ShieldCheck, Globe, Link2, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "Agentic ERP",
    desc: "Autonomous AI agents built on ERPNext that plan, decide, and execute across your entire operation.",
  },
  {
    icon: Code2,
    title: "Custom Software Development",
    desc: "Tailored CRM, LMS, and enterprise platforms crafted to match your exact business workflow.",
  },
  {
    icon: Blocks,
    title: "ERPNext Module Development",
    desc: "Custom modules, DocTypes, and integrations that extend ERPNext into a system uniquely yours.",
  },
  {
    icon: ShieldCheck,
    title: "IT Managed Services",
    desc: "End-to-end infrastructure operations, monitoring, and cybersecurity with 24/7 SOC coverage.",
  },
  {
    icon: Globe,
    title: "Website Development",
    desc: "High-performance digital experiences built with Next.js, React, and modern frameworks.",
  },
  {
    icon: Link2,
    title: "Blockchain & Web3",
    desc: "Smart contracts, tokenization, and decentralized applications engineered for production scale.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-slate-50/50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-16">
          <span className="text-[#FE4411] tracking-widest uppercase" style={{ fontWeight: 600, fontSize: "0.75rem" }}>
            What We Do
          </span>
          <h2 className="mt-4 text-black tracking-tight leading-[1.1]" style={{ fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3.25rem)" }}>
            Solutions engineered for ambitious enterprises.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative bg-white p-8 rounded-2xl border border-slate-100 hover:border-[#FE4411] hover:shadow-xl hover:shadow-orange-100/40 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-orange-50 flex items-center justify-center mb-6 group-hover:bg-[#FE4411] transition-colors">
                <s.icon className="w-7 h-7 text-[#FE4411] group-hover:text-white transition-colors" strokeWidth={1.5} />
              </div>
              <h3 className="text-black tracking-tight mb-3" style={{ fontWeight: 700, fontSize: "1.375rem" }}>
                {s.title}
              </h3>
              <p className="text-slate-600 leading-relaxed" style={{ fontWeight: 300 }}>
                {s.desc}
              </p>
              <ArrowUpRight className="absolute top-8 right-8 w-5 h-5 text-slate-300 group-hover:text-[#FE4411] group-hover:rotate-12 transition-all" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
