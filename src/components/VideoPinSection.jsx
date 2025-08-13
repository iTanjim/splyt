import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";
import { useEffect } from "react";

// 1) register the plugin once
gsap.registerPlugin(ScrollTrigger);

const VideoPinSection = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  // 2) force a refresh after all assets load so start/end positions are accurate
  useEffect(() => {
    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);

  useGSAP(() => {
    if (isMobile) return;

    gsap.timeline({
      scrollTrigger: {
        trigger: ".vd-pin-section",
        start: "top top",
        end: "+=220%",
        scrub: true,
        pin: true,
      },
    });
    gsap.to(".video-box", {
      clipPath: "circle(100% at 50% 50%)",
      ease: "linear",
      scrollTrigger: {
        trigger: ".vd-pin-section",
        start: "top top",
        end: "+=100%",
        scrub: true,
      },
    });
  }, [isMobile]);

  return (
    <section className="vd-pin-section h-screen overflow-hidden">
      <div
        className="video-box w-full h-full"
        style={{
          clipPath: isMobile
            ? "circle(100% at 50% 50%)"
            : "circle(6% at 50% 50%)",
        }}
      >
        <video
          className="w-full h-full object-cover"
          src="/videos/pin-video.mp4"
          playsInline
          muted
          loop
          autoPlay
        />
        <div className="abs-center md:scale-100 scale-150 flex justify-center">
          <img
            className="spin-circle md:w-2/3 w-1/2 bg-amber-600 amber-mask"
            src="/images/circle-text.svg"
            alt=""
          />
          <div className="play-btn">
            <img className="w-[3vw] ml-[0.5vw]" src="/images/play.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPinSection;
