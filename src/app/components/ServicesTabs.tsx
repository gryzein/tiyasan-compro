import { useState } from "react";
import { ArrowRight, Bot, Code2, Blocks, ShieldCheck, Globe, Link2 } from "lucide-react";

const tabs = [
  { icon: Bot, title: "Agentic ERP", desc: "Autonomous AI agents that plan, decide, and execute across your operation built natively on ERPNext and Frappe." },
  { icon: Blocks, title: "ERPNext Modules", desc: "Custom DocTypes, workflows, and integrations that extend ERPNext into the exact system your business needs." },
  { icon: Code2, title: "Custom Software", desc: "Bespoke CRM, LMS and enterprise platforms crafted to match your exact workflows and scale with your team." },
  { icon: ShieldCheck, title: "IT Managed Services", desc: "24/7 infrastructure operations, monitoring, and red-team cybersecurity audits for enterprise peace of mind." },
  { icon: Globe, title: "Website Development", desc: "High-performance web experiences built with Next.js, React, and Tailwind tuned for conversion and speed." },
  { icon: Link2, title: "Blockchain & Web3", desc: "Smart contracts, tokenization, and decentralized apps engineered with production-grade security." },
];

export function ServicesTabs() {
  const [active, setActive] = useState(0);
  const Current = tabs[active];

  return (
    <section id="services" className="relative bg-black py-24 lg:py-32 overflow-hidden">
      <div className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full bg-[#FE4411] blur-3xl opacity-10" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mb-16">
          <span className="text-[#FE4411] tracking-widest uppercase" style={{ fontWeight: 600, fontSize: "0.75rem" }}>
            What We Do
          </span>
          <h2 className="mt-4 text-white tracking-tight leading-[1.1]" style={{ fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3.25rem)" }}>
            Find out more about our <span className="text-[#FE4411]">IT services</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Tabs list */}
          <div className="lg:col-span-5 space-y-2">
            {tabs.map((t, i) => (
              <button
                key={t.title}
                onClick={() => setActive(i)}
                className={`w-full group flex items-center justify-between text-left px-6 py-5 rounded-2xl transition-all ${
                  active === i
                    ? "bg-[#FE4411] shadow-2xl shadow-orange-600/30"
                    : "bg-white/5 hover:bg-white/10 border border-white/5"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${active === i ? "bg-white/20" : "bg-white/10"}`}>
                    <t.icon className="w-5 h-5 text-white" strokeWidth={1.75} />
                  </div>
                  <span className="text-white" style={{ fontWeight: 600, fontSize: "1rem" }}>{t.title}</span>
                </div>
                <ArrowRight className={`w-5 h-5 text-white transition-transform ${active === i ? "translate-x-0" : "-translate-x-2 opacity-40 group-hover:opacity-100 group-hover:translate-x-0"}`} />
              </button>
            ))}
          </div>

          {/* Preview panel */}
          <div className="lg:col-span-7">
            <div className="relative h-full rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-10 lg:p-12 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-[#FE4411] blur-3xl opacity-20" />
              <div className="relative h-full flex flex-col justify-between gap-10 min-h-[380px]">
                <div className="w-16 h-16 rounded-2xl bg-[#FE4411] flex items-center justify-center">
                  <Current.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-white tracking-tight mb-4" style={{ fontWeight: 800, fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
                    {Current.title}
                  </h3>
                  <p className="text-[#585858] leading-relaxed mb-8" style={{ fontWeight: 300, fontSize: "1.125rem" }}>
                    {Current.desc}
                  </p>
                  <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black hover:bg-[#FE4411] hover:text-white transition-all" style={{ fontWeight: 600 }}>
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
