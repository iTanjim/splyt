import { useRef } from "react";
import { cards } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const TestimonialSection = () => {
  const vdRef = useRef([]);

  useGSAP(() => {
    gsap.set(".testimonials-section", {
      marginTop: "-140vh",
    });
  });

  const handlePlay = (index) => {
    const video = vdRef.current[index];
    video.play();
  };
  const handlePause = (index) => {
    const video = vdRef.current[index];
    video.pause();
  };
  return (
    <section className="testimonials-section">
      <div className="absolute size-full flex flex-col items-center pt-[5vw]">
        <h1 className="text-black first-title">What's</h1>
        <h1 className="text-light-brown sec-title">Everyone</h1>
        <h1 className="text-black third-title">Saying</h1>
      </div>
      <div className="pin-box">
        {cards.map((card, index) => {
          return (
            <div
              key={card.name + index}
              className={`vd-card ${card.translation} ${card.rotation}`}
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
                className="size-full object-cover"
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
