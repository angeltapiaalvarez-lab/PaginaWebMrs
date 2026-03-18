import React from "react";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import CoursesSection from "./components/CoursesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";

export default function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-slate-50 font-sans text-slate-800">
      <HeroSection />
      <FeaturesSection />
      <CoursesSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}
