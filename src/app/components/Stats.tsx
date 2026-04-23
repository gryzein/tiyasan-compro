const stats = [
  { value: "8+", label: "Years of Experience" },
  { value: "50+", label: "Clients Served" },
  { value: "80+", label: "Projects Completed" },
  { value: "99%", label: "Uptime Guarantee" },
];

export function Stats() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`px-6 py-4 ${i !== 0 ? "lg:border-l border-slate-200" : ""}`}
            >
              <div className="text-black tracking-tight leading-none" style={{ fontWeight: 800, fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
                {s.value.includes("%") || s.value.includes("+") ? (
                  <>
                    {s.value.replace(/[+%]/g, "")}
                    <span className="text-[#FE4411]">{s.value.match(/[+%]/)?.[0]}</span>
                  </>
                ) : s.value}
              </div>
              <div className="mt-3 text-[#585858]" style={{ fontWeight: 400 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
