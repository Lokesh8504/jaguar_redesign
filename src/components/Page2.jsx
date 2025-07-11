import React, { useEffect, useRef } from "react";
import "../css/page2.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import video from "../assets/vedio.mp4";
import jag3 from "../assets/owners2.jpg";

const Page2 = () => {
  const parent = useRef(null);
  const videoDiv = useRef(null);
  const heading1 = useRef(null);
  const heading2 = useRef(null);
  const heading3 = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: parent.current,
          start: "top top",
          pin: true,
          scrub: true,
        },
      });

      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: parent.current,
          start: "top 60%",
          scrub: true,
        },
      });

      tl2.from(heading1.current, {
        transform: "translateY(100%)",
        ease: "power4",
        duration: 1,
      });
      tl2.from(heading2.current, {
        transform: "translateY(100%)",
        ease: "power4",
        duration: 1,
      });
      tl2.from(heading3.current, {
        transform: "translateY(100%)",
        ease: "power4",
        duration: 1,
      });
      tl2.from(
        videoDiv.current,
        {
          opacity: 0,
          x: "30%",
          ease: "power3",
          duration: 1,
        },
        "-=0.5"
      );

      tl2.to(
        videoDiv.current,
        {
          width: "150%",
          height: "100%",
          scale: 1.2,
          top: 0,
          left: "-6%",
          ease: "circ.inOut",
          duration: 2,
        },
        "-=0.5"
      );
    });

    return () => mm.revert(); // Clean up the media query
  }, []);

  return (
    
    <div
      ref={parent}
      className="w-[100vw] h-fit text-[2.5rem] tracking-tighter text-gray-600 font-custom1 bg-white flex flex-col justify-center items-center gap-4 sm:text-[9rem] sm:h-screen sm:items-start sm:mb-0"
    >
     
      <div className="w-[100vw] relative ml-[5%] flex flex-col items-center sm:items-start gap-4 sm:gap-0 sm:mx-auto sm:w-[80vw]">
        <div className="overflow-hidden">
          <h1 ref={heading1} className="part2-h1">
            GRACE
          </h1>
        </div>
        <div className="overflow-hidden">
          <h1 ref={heading2}>SPACE</h1>
        </div>
        <div className="overflow-hidden">
          <video
            ref={videoDiv}
            className="video w-[65%] w:h-[100vh] z-[2] top-16 ml-20 sm:absolute rounded-xl sm:w-[30%] sm:top-[39%] sm:left-[45%] sm:rounded-3xl"
            autoPlay
            loop
            muted
            src={video}
          ></video>
        </div>
        <div className="overflow-hidden">
          <h1 ref={heading3} className=" ml-[0%] sm:mx-auto">
            AND PACE
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Page2;
