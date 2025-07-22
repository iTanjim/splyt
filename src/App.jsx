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

gsap.registerPlugin(GSDevTools, SplitText, ScrollTrigger);

const App = () => {
  return (
    <ReactLenis root>
      <main>
        <NavBar />
        <HeroSection />
        <MessageSection />
        <FlavorSection />
        <div className="h-dvh border border-red"></div>
      </main>
    </ReactLenis>
  );
};

export default App;
