import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

const VideoPinSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });
  useGSAP(() => {
    if (!isMobile) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".vd-pin-section",
          start: "top top",
          end: "+=100%",
          scrub: 1,
          markers: true,
          pin: true,
        },
      });

      tl.to(".video-box", {
        clipPath: "circle(100% at 50% 50%)",
        ease: "linear",
      });
    }
  });
  return (
    <section className="vd-pin-section border-red border-2">
      <div
        style={{
          clipPath: isMobile
            ? "circle(100% at 50% 50%)"
            : "circle(6% at 50% 50%)",
        }}
        className="size-full video-box"
      >
        <video
          src="\videos\pin-video.mp4"
          playsInline
          muted
          loop
          autoPlay
        ></video>

        <div className="abs-center md:scale-100 scale-150 flex justify-center">
          <img
            src="\images\circle-text.svg"
            alt=""
            className="spin-circle md:size-2/3 size-1/2 bg-amber-600 amber-mask"
          />
          <div className="play-btn">
            <img
              src="\images\play.svg"
              alt=""
              className="size-[3vw] ml-[0.5vw]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPinSection;
