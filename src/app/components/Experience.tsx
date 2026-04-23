import { ArrowRight, Quote } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Experience() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80"
                alt="TNT engineering team collaborating"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-8 -right-4 lg:right-8 bg-[#FE4411] text-white rounded-3xl p-6 shadow-2xl shadow-orange-300/50 max-w-[220px]">
              <div className="tracking-tight leading-none" style={{ fontWeight: 800, fontSize: "3rem" }}>8+</div>
              <div className="mt-2 opacity-90" style={{ fontWeight: 500, fontSize: "0.9rem" }}>
                Years delivering enterprise IT excellence
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <span className="text-[#FE4411] tracking-widest uppercase" style={{ fontWeight: 600, fontSize: "0.75rem" }}>
              Our Experience
            </span>
            <h2 className="mt-4 text-black tracking-tight leading-[1.1]" style={{ fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3.25rem)" }}>
              For over 8 years, we have been <span className="text-[#FE4411]">providing IT support</span> to various companies in Indonesia.
            </h2>
            <p className="mt-6 leading-relaxed text-[#5d5d5d]" style={{ fontWeight: 300, fontSize: "1.125rem" }}>
              From Yogyakrta to every corner of Southeast Asia, PT Tiyasan Nusantara Teknologi has been the trusted partner behind hundreds of digital transformations pairing deep engineering with strategic intelligence.
            </p>

            {/* Testimonial */}
            

            <button className="mt-10 group inline-flex items-center gap-2 text-[#FE4411]" style={{ fontWeight: 600 }}>
              Read more stories
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
