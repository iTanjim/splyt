import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { GSDevTools } from "gsap/GSDevTools";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";

gsap.registerPlugin(GSDevTools, SplitText, ScrollTrigger);

const MessageSection = () => {
  useGSAP(() => {
    document.fonts.ready.then(() => {
      const firstMsgSplit = SplitText.create(".first-message", {
        type: "words",
      });
      const secondtMsgSplit = SplitText.create(".second-message", {
        type: "words",
      });
      const prgtMsgSplit = SplitText.create(".message-content p", {
        type: "words, lines",
        linesClass: "paragraph-line",
      });

      gsap.to(firstMsgSplit.words, {
        color: "#faeade",
        ease: "power3.in",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".message-content",
          start: "top center",
          end: "30% center",
          scrub: true,
        },
      });
      gsap.to(secondtMsgSplit.words, {
        color: "#faeade",
        ease: "power3.in",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".message-content",
          start: "30% center",
          end: "50% center",
          scrub: true,
        },
      });
      let prgTl = gsap.timeline({
        paused: true,
        scrollTrigger: {
          trigger: ".message-content p",
          toggleActions: "play play play reverse",
          start: "-50% 80%",
        },
      });
      prgTl.from(prgtMsgSplit.words, {
        yPercent: 300,
        ease: "back(-1)",
        stagger: 0.01,
      });

      const revealTl = gsap.timeline({
        delay: 1,
        scrollTrigger: {
          trigger: ".msg-text-scroll",
          start: "top 60%",
          scrub: true,
        },
      });
      revealTl.to(".msg-text-scroll", {
        duration: 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "back",
      });
    });
  });

  return (
    <section className="message-content">
      <div className="container mx-auto flex-center py-28 relative">
        <div className="w-full h-full">
          <div className="msg-wrapper">
            <h1 className="first-message">stir up your fearless</h1>

            <div
              style={{
                clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
              }}
              className="msg-text-scroll"
            >
              <div className="bg-lime-300 md:pb-5 pb-3 px-5 slime">
                <h2 className="text-red-brown">Fuel up</h2>
              </div>
            </div>
            <h1 className="second-message">
              your future with every gulp of protein
            </h1>
          </div>

          <div className="flex-center md:mt-20 mt-10">
            <div className="max-w-md px-10 flex-center">
              <p className="md:text-[1.9vw] text-[2.5vw]">
                Lorem ipsum dolor sit amet consectetur adipisicingelit. Quas ut
                atque blanditiis quo, itaque excepturi. Sapiente corrupti ab
                officiis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageSection;
