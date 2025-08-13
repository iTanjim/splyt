import { useGSAP } from "@gsap/react";
import ClipPathTitle from "../components/ClipPathTitle";
import { clipPathTitles } from "../constants";
import gsap from "gsap";
import VideoPinSection from "../components/VideoPinSection";

const BenefitSection = () => {
  useGSAP(() => {
    const cptTl = gsap.timeline({
      delay: 1,
      scrollTrigger: {
        trigger: ".benefit-section",
        start: "top 60%",
        end: "top top",
        scrub: 1,
      },
    });
    cptTl
      .to(".benefit-section .first-title", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        opacity: 1,
        ease: "circ.out",
      })
      .to(".benefit-section .second-title", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        opacity: 1,
        ease: "circ.out",
      })
      .to(".benefit-section .third-title", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        opacity: 1,
        ease: "circ.out",
      })
      .to(".benefit-section .fourth-title", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        opacity: 1,
        ease: "circ.out",
      });
  });

  return (
    <div className="benefit-section">
      <div className="container mx-auto pt-20">
        <div className="col-center">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            ab animi veritatis harum voluptas facere perferendis consequuntur
          </p>

          <div className="mt-20 col-center">
            {clipPathTitles.map((box) => (
              <ClipPathTitle
                key={box.title}
                title={box.title}
                color={box.color}
                bg={box.bg}
                className={box.className}
                borderColor={box.borderColor}
              />
            ))}
          </div>

          <div className="md:mt-0 mt-10">
            <p className="font-paragraph">And much more...</p>
          </div>
        </div>
      </div>

      <div className="relative overlay-box">
        <VideoPinSection />
      </div>
    </div>
  );
};

export default BenefitSection;
