"use client";
import NavBar from "./components/NavBar";
import HeroSection from "./sections/HeroSection";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { GSDevTools } from "gsap/GSDevTools";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis } from "lenis/react";
import MessageSection from "./sections/MessageSection";
import FlavorSection from "./sections/FlavorSection";
import NutritionSection from "./sections/NutritionSection";
import BenefitSection from "./sections/BenefitSection";
import TestimonialSection from "./sections/TestimonialSection";

gsap.registerPlugin(GSDevTools, SplitText, ScrollTrigger);

const App = () => {
  return (
    <ReactLenis root>
      <main className="overflow-hidden md:overflow-auto">
        <NavBar />
        <HeroSection />
        <MessageSection />

        <FlavorSection />
        <NutritionSection />

        <div>
          <BenefitSection />
          <TestimonialSection />
        </div>
        <div className="h-dvh border border-red"></div>
      </main>
    </ReactLenis>
  );
};

export default App;
