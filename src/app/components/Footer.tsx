import { MapPin, Mail, Phone, Linkedin, Twitter, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 rounded-lg bg-[#FE4411] flex items-center justify-center text-white" style={{ fontWeight: 800 }}>T</div>
              <span className="text-white tracking-tight" style={{ fontWeight: 800 }}>Tiyasan</span>
            </div>
            <p className="leading-relaxed mb-6 text-[#585858]" style={{ fontWeight: 300 }}>
              PT Tiyasan Nusantara Teknologi building the next generation of intelligent enterprise systems.
            </p>
            <div className="flex gap-3">
              {[Linkedin, Twitter, Github].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-[#585858] flex items-center justify-center hover:bg-[#FE4411] hover:border-[#FE4411] transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white mb-5 tracking-tight" style={{ fontWeight: 700 }}>Quick Links</h4>
            <ul className="space-y-3" style={{ fontWeight: 300 }}>
              {["About Us", "Our Team", "Careers", "Blog", "Contact"].map((l) => (
                <li key={l}><a href="#" className="hover:text-[#FE4411] transition-colors text-[#585858]">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-5 tracking-tight" style={{ fontWeight: 700 }}>Services</h4>
            <ul className="space-y-3" style={{ fontWeight: 300 }}>
              {["Agentic ERP", "Custom Software", "ERPNext Modules", "Managed Services", "Blockchain & Web3"].map((l) => (
                <li key={l}><a href="#" className="hover:text-[#FE4411] transition-colors text-[#585858]">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-5 tracking-tight" style={{ fontWeight: 700 }}>Contact</h4>
            <ul className="space-y-4 text-slate-400" style={{ fontWeight: 300 }}>
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-[#FE4411] shrink-0 mt-0.5" />
                <span className="text-[#585858]">Sleman, DI Yogyakarta, Indonesia</span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-[#FE4411] shrink-0 mt-0.5" />
                <a href="mailto:hello@tnt.co.id" className="hover:text-[#FE4411] transition-colors text-[#585858]">halo@tiyasan.com</a>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-[#FE4411] shrink-0 mt-0.5" />
                <a href="tel:+622100000" className="hover:text-[#FE4411] transition-colors text-[#585858]">+62 85235353944</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[#585858] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#585858]" style={{ fontWeight: 300 }}>
            © 2026 PT. Tiyasan Nusantara Teknologi. All rights reserved.
          </p>
          <div className="flex gap-6 text-[#585858]" style={{ fontWeight: 300 }}>
            <a href="#" className="hover:text-[#FE4411] transition-colors text-[#585858]">Privacy</a>
            <a href="#" className="hover:text-[#FE4411] transition-colors">Terms</a>
            <a href="#" className="hover:text-[#FE4411] transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
