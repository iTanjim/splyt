import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ClipPathTitle = ({ title, color, bg, className, borderColor }) => {
  useGSAP(() => {
    const cptTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".benefit-section",
        start: "top center",
        markers: true,
        scrub: true,
      },
    });
    cptTl.to(".boxe", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      stagger: 0.1,
    });
  });

  return (
    <div className="general-title">
      <div
        style={{ clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)" }}
        className={`${className} border text-nowrap boxe`}
      >
        <div
          className="pb-5 md:px-14 px-3 md:pt-0 pt-3"
          style={{ backgroundColor: bg }}
        >
          <h2 style={{ color: color }}>{title}</h2>
        </div>
      </div>
    </div>
  );
};

export default ClipPathTitle;
