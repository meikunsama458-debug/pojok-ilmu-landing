import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Tutors from "./components/Tutors";
import Programs from "./components/Programs";
import LearningMethod from "./components/LearningMethod";
import LearningFocus from "./components/LearningFocus";
import Benefits from "./components/Benefits";
import Testimonials from "./components/Testimonials";
import Registration from "./components/Registration";
import Scheduling from "./components/Scheduling";
import ServiceArea from "./components/ServiceArea";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

function App() {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <main
      className={
        isDark
          ? "min-h-screen bg-slate-950 text-white transition-colors duration-300"
          : "min-h-screen bg-[#FDFCF5] text-slate-950 transition-colors duration-300"
      }
    >
      <Navbar isDark={isDark} setIsDark={setIsDark} />

      <Hero isDark={isDark} />

      <About isDark={isDark} />

      <Tutors isDark={isDark} />

      <Programs isDark={isDark} />

      <LearningMethod isDark={isDark} />

      <LearningFocus isDark={isDark} />

      <Benefits isDark={isDark} />

      <Testimonials isDark={isDark} />

      <Registration isDark={isDark} />

      <Scheduling isDark={isDark} />

      <ServiceArea isDark={isDark} />

      <FAQ isDark={isDark} />

      <CTA isDark={isDark} />

      <Footer isDark={isDark} />

      <FloatingWhatsApp />
    </main>
  );
}

export default App;
