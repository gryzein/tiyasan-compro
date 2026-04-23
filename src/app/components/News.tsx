import { ArrowUpRight, Calendar } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const articles = [
  {
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    tag: "Agentic AI",
    date: "Apr 18, 2026",
    title: "Why autonomous ERP agents are the next decade of enterprise software",
  },
  {
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    tag: "Cybersecurity",
    date: "Apr 10, 2026",
    title: "Inside our red team playbook: how we break before attackers do",
  },
  {
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    tag: "ERPNext",
    date: "Mar 28, 2026",
    title: "Five ERPNext customizations that paid for themselves in 90 days",
  },
];

export function News() {
  return (
    <section className="py-24 lg:py-32 bg-slate-50/50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <span className="text-[#FE4411] tracking-widest uppercase" style={{ fontWeight: 600, fontSize: "0.75rem" }}>
              Insights
            </span>
            <h2 className="mt-4 text-black tracking-tight leading-[1.1]" style={{ fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3.25rem)" }}>
              Get informed about <span className="text-[#FE4411]">IT</span>
            </h2>
          </div>
          <button className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-slate-200 text-black hover:border-[#FE4411] hover:text-[#FE4411] transition-all self-start md:self-end" style={{ fontWeight: 600 }}>
            View All Articles
            <ArrowUpRight className="w-4 h-4 group-hover:rotate-12 transition-transform" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((a) => (
            <article key={a.title} className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl hover:shadow-orange-100/40 hover:-translate-y-1 transition-all cursor-pointer">
              <div className="relative aspect-[16/10] overflow-hidden">
                <ImageWithFallback
                  src={a.img}
                  alt={a.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#FE4411] text-white" style={{ fontWeight: 600, fontSize: "0.7rem" }}>
                  {a.tag}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-[#585858] mb-3" style={{ fontWeight: 400, fontSize: "0.75rem" }}>
                  <Calendar className="w-3.5 h-3.5" />
                  {a.date}
                </div>
                <h3 className="text-black tracking-tight leading-snug group-hover:text-[#FE4411] transition-colors" style={{ fontWeight: 700, fontSize: "1.125rem" }}>
                  {a.title}
                </h3>
                <div className="mt-5 inline-flex items-center gap-2 text-[#FE4411]" style={{ fontWeight: 600, fontSize: "0.875rem" }}>
                  Read Article
                  <ArrowUpRight className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
