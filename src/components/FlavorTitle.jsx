import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const FlavorTitle = () => {
  useGSAP(() => {
    document.fonts.ready.then(() => {
      const firstTextSplit = SplitText.create(".first-text-split h1", {
        type: "chars",
      });
      const secondTextSplit = SplitText.create(".second-text-split h1", {
        type: "chars",
      });

      gsap.from(firstTextSplit.chars, {
        yPercent: -150,
        stagger: 0.03,
        opacity: 0,
        ease: "power1.inOut",
        rotation: -5,
        scrollTrigger: {
          trigger: ".flavor-section",
          toggleActions: "play play play reverse",
          start: "top 80%",
          end: "20% 80%",
        },
      });
      gsap.from(secondTextSplit.chars, {
        yPercent: 500,
        stagger: 0.01,
        opacity: 0,
        rotate: 9,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".flavor-section",
          toggleActions: "play play play reverse",
          start: "20% 80%",
        },
      });
      gsap.to(".flavor-text-scroll", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 0.65,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".flavor-section",
          toggleActions: "play play play reverse",
          start: "top center",
          end: "center 80%",
        },
      });
    });
  });
  return (
    <div className="general-title col-center h-full 2xl:gap-32 xl:gap-24 gap-16">
      <div className="overflow-hidden 2xl:py-0 py-3 first-text-split">
        <h1>We have 6</h1>
      </div>
      <div
        style={{ clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" }}
        className="flavor-text-scroll"
      >
        <div className="bg-sky-500 pb-5 2xl:pt-0 pt-3 2xl:px-5 px-3">
          <h2 className="text-milk text-shadow-[1px_1px_2px_black]">
            freaking
          </h2>
        </div>
      </div>
      <div className="overflow-hidden 2xl:py-0 py-3 second-text-split">
        <h1>delicious flavors</h1>
      </div>
    </div>
  );
};

export default FlavorTitle;
