import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ["About", "Services", "Why Us", "Contact"];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-100">
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-[#FE4411] flex items-center justify-center text-white tracking-tighter" style={{ fontWeight: 800 }}>
            T
          </div>
          <span className="text-black tracking-tight" style={{ fontWeight: 800 }}>Tiyasan</span>
        </a>

        <ul className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase().replace(" ", "-")}`} className="hover:text-[#FE4411] transition-colors text-[#636363]" style={{ fontWeight: 500 }}>
                {l}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <button className="px-5 py-2.5 rounded-full bg-[#FE4411] text-white hover:bg-[#e63c0e] transition-all hover:shadow-lg hover:shadow-orange-200" style={{ fontWeight: 600 }}>
            Get Started
          </button>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-black" aria-label="Menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-slate-100 px-6 py-4 space-y-3 bg-white">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase().replace(" ", "-")}`} className="block text-slate-700">{l}</a>
          ))}
          <button className="w-full mt-2 px-5 py-3 rounded-full bg-[#FE4411] text-white" style={{ fontWeight: 600 }}>
            Get Started
          </button>
        </div>
      )}
    </header>
  );
}
