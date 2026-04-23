import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-50 via-white to-orange-50 border border-orange-100 p-12 lg:p-20">
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#FE4411] opacity-10 blur-3xl" />
          <div className="relative max-w-3xl">
            <h2 className="text-black tracking-tight leading-[1.1]" style={{ fontWeight: 800, fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}>
              Ready to build with <span className="text-[#FE4411]">intelligent systems</span>?
            </h2>
            <p className="mt-6 text-slate-600 leading-relaxed" style={{ fontWeight: 300, fontSize: "1.125rem" }}>
              Let's discuss how Agentic ERP and AI-driven infrastructure can transform your operation. Our team responds within one business day.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#FE4411] text-white hover:bg-[#e63c0e] transition-all hover:shadow-xl hover:shadow-orange-200" style={{ fontWeight: 600 }}>
                Schedule Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-slate-300 text-black hover:border-[#FE4411] hover:text-[#FE4411] transition-all" style={{ fontWeight: 600 }}>
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
