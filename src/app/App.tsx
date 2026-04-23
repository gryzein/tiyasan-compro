import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ServicesTabs } from "./components/ServicesTabs";
import { Experience } from "./components/Experience";
import { Differently } from "./components/Differently";
import { Stats } from "./components/Stats";
import { ContactStrip } from "./components/ContactStrip";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
      <Navbar />
      <main>
        <Hero />
        <ServicesTabs />
        <Experience />
        <Differently />
        <Stats />
        <ContactStrip />
      </main>
      <Footer />
    </div>
  );
}
