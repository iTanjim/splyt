import { useEffect, useRef, useState } from "react";
import { cards } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const TestimonialSection = () => {
  const vdRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState(null);

  useGSAP(() => {
    gsap.set(".testimonials-section", {
      marginTop: "-140vh",
    });

    // gsap.timeline({
    //   scrollTrigger: {
    //     trigger: ".testimonials-section",
    //     start: "top bottom",
    //     end: "200% true",
    //     scrub: true,
    //     pin: true,
    //   },
    // });
    const titleTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".testimonials-section",
        start: "top bottom",
        end: "200% bottom",
        scrub: true,
      },
    });

    titleTl
      .to(".testimonials-section .first-title", {
        xPercent: 60,
      })
      .to(
        ".testimonials-section .sec-title",
        {
          xPercent: 30,
        },
        "<"
      )
      .to(
        ".testimonials-section .third-title",
        {
          xPercent: -70,
        },
        "<"
      );

    const pinTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".pin-box",
        start: "-15% top",
        end: "100% top",
        pin: true,
        scrub: 1,
        markers: true,
      },
    });
    pinTl.from(".vd-card", {
      yPercent: 150,
      stagger: 0.15,
      ease: "linear",
    });
  });

  const handlePlay = (index) => {
    setActiveIndex(index);
    const video = vdRef.current[index];
    video?.play();
    video.style.zIndex = "100";
  };
  const handlePause = (index) => {
    setActiveIndex(null);
    const video = vdRef.current[index];
    video.style.zIndex = "-1";
    video?.pause();
  };

  return (
    <section className="testimonials-section">
      <div className="absolute size-full flex flex-col items-center pt-[5vw] mate">
        <h1 className="text-black first-title md:text-[20vw]">What's</h1>
        <h1 className="text-light-brown sec-title md:text-[20vw]">Everyone</h1>
        <h1 className="text-black third-title md:text-[20vw]">Saying</h1>
      </div>

      <div className="pin-box top-0">
        {cards.map((card, index) => {
          return (
            <div
              key={card.name + index}
              className={`vd-card ${card.translation} ${
                card.rotation
              } relative ${
                activeIndex === index ? "z-[100]" : ""
              } cursor-pointer`}
              onMouseEnter={() => {
                handlePlay(index);
              }}
              onMouseLeave={() => {
                handlePause(index);
              }}
            >
              <video
                ref={(el) => {
                  return (vdRef.current[index] = el);
                }}
                src={card.src}
                className={`size-full object-cover border-[.3vw] md:rounded-[1vw] rounded-3xl ${
                  activeIndex === index ? "border-black" : "border-milk"
                } relative`}
                playsInline
                muted
                loop
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TestimonialSection;
