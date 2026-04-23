import { ArrowRight, Phone, Mail } from "lucide-react";

export function ContactStrip() {
  return (
    <section id="contact" className="relative bg-[#FE4411] overflow-hidden">

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <h2 className="text-white tracking-tight leading-[1.1]" style={{ fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              Ready to build with intelligent systems?
            </h2>
            <p className="mt-4 text-white/90 leading-relaxed max-w-xl" style={{ fontWeight: 300, fontSize: "1.05rem" }}>
              Talk to our engineers about Agentic ERP, automation, and secure infrastructure. We respond within one business day.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-4">
            <button className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white text-[#FE4411] hover:bg-black hover:text-white transition-all shadow-xl shadow-black/10" style={{ fontWeight: 700 }}>
              Schedule Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <div className="flex flex-col sm:flex-row lg:flex-row gap-4 text-white">
              <a href="tel:+622100000" className="flex items-center gap-3 hover:underline">
                <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-white/70 leading-none" style={{ fontWeight: 400, fontSize: "0.7rem" }}>WhatsApp</div>
                  <div className="leading-none mt-1" style={{ fontWeight: 600, fontSize: "0.9rem" }}>+62 85235353944</div>
                </div>
              </a>
              <a href="mailto:hello@tnt.co.id" className="flex items-center gap-3 hover:underline">
                <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-white/70 leading-none" style={{ fontWeight: 400, fontSize: "0.7rem" }}>Email</div>
                  <div className="leading-none mt-1" style={{ fontWeight: 600, fontSize: "0.9rem" }}>halo@tiyasan.com</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
