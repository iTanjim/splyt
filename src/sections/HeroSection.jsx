import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { GSDevTools } from "gsap/GSDevTools";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(GSDevTools, SplitText, ScrollTrigger);

function HeroSection() {
  useGSAP(() => {
    document.fonts.ready.then(() => {
      init();
    });
    const init = () => {
      const titleSplit = SplitText.create(".hero-title", {
        type: "chars",
      });
      const tl = gsap.timeline({
        delay: 0.75,
      });
      tl.to(".hero-content", {
        opacity: 1,
        y: 0,
        ease: "power1.inOut",
      })
        .to(
          ".hero-text-scroll",
          {
            duration: 1,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "circ.inOut",
          },
          "-=.5"
        )
        .from(
          titleSplit.chars,
          { yPercent: 100, stagger: 0.02, ease: "back(3)" },
          "-=.5"
        );

      const heroTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero-container",
          start: "1% top",
          end: "bottom top",
          scrub: true,
        },
      });

      heroTl.to(".hero-container", {
        rotate: 5,
        scale: 0.9,
        yPercent: 30,
        ease: "",
      });
      //   GSDevTools.create({ animation: tl });
    };
  });

  return (
    <section className="bg-main-bg">
      <div className="hero-container">
        <img
          src="/images/static-img.png"
          alt=""
          className="abs-center object-cover scale-100 md:scale-150"
        />
        <div className="hero-content opacity-0">
          <div className="overflow-hidden">
            <h1 className="hero-title">Freaking delicious</h1>
          </div>
          <div
            style={{ clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)" }}
            className="hero-text-scroll"
          >
            <div className="hero-subtitle">
              <h1>Protein + caffine</h1>
            </div>
          </div>

          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            perferendis, reiciendis sapiente temporibus et sit enim
            reprehenderit architecto
          </h2>

          <div className="hero-button">
            <p>Chugg TS</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
