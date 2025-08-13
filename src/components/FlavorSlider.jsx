import { useGSAP } from "@gsap/react";
import { flavorlists } from "../constants";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import CustomEase from "gsap/CustomEase";
gsap.registerPlugin(CustomEase);

const FlavorSlider = () => {
  CustomEase.create("fastInOut", "M0,0 C0.05,0 0.95,1 1,1");
  const sliderRef = useRef();
  const isTablet = useMediaQuery({
    query: "(max-width: 1024px)",
  });
  useEffect(() => {
    console.log("ran");
  }, [isTablet]);
  useGSAP(() => {
    const scrollAmount = sliderRef.current.scrollWidth - window.innerWidth;

    if (isTablet) return;
    const pinDistance = scrollAmount * 0.95;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".flavor-section",
        pin: true,
        markers: true,
        start: "top top",
        // end: `+=${scrollAmount / 2}px`,
        end: `+=${pinDistance / 1.5}px 90%`,
        scrub: true,
      },
    });

    gsap.to(".flavor-section", {
      x: `-${scrollAmount + window.innerWidth * 1.7}px`,
      ease: "fastInOut",
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top top",
        end: `+=${pinDistance / 1.5}px`,
        scrub: true,
      },
    });

    // const titleTl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: ".flavor-section",
    //     start: "top top",
    //     end: "bottom 80%",
    //     ease: "power1.inOut",
    //     scrub: true,
    //   },
    // });
    // titleTl
    //   .to(".first-text-split", {
    //     xPercent: -30,
    //   })
    //   .to(
    //     ".flavor-text-scroll",
    //     {
    //       xPercent: -32,
    //     },
    //     "<"
    //   )
    //   .to(
    //     ".second-text-split",
    //     {
    //       xPercent: -20,
    //     },
    //     "<"
    //   );
  }, [isTablet]);

  return (
    <div className="slider-wrapper" ref={sliderRef}>
      <div className="flavors">
        {flavorlists.map((flavor) => (
          <div
            key={flavor.name}
            className={`relative z-30 md:shadow-[4px_4px_15px_5px_rgba(0,0,0,0.5)] rounded-[2.6rem] lg:w-[50vw] w-95 lg:h-[70vh] md:w-[60vw] md:h-[50vh] h-80 flex-none ${flavor.rotation} will-change-transform`}
          >
            <img
              src={`/images/${flavor.color}-bg.svg`}
              alt=""
              className="absolute bottom-0 md:w-full md:h-full object-cover md:rounded-[2.5rem]"
            />

            <img
              src={`/images/${flavor.color}-drink.webp`}
              alt=""
              className="drinks drop-shadow-[3px_3px_17px_black]"
            />

            <img
              src={`/images/${flavor.color}-elements.webp`}
              alt=""
              className="elements"
            />

            <h1 className="text-[4vw]">{flavor.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlavorSlider;
