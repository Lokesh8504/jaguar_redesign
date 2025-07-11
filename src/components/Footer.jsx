// Footer.js
import React, { useEffect, useRef } from "react";
import { BsInstagram } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
import { RiLinkedinFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa6";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Footer = () => {
  const textUp = useRef(null);
  const Footerparent = useRef(null);
  const options = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: Footerparent.current,
        start: "-10% 30%",
        end:"top 30%",
        stagger: true,
        scrub: true,
        // markers: true,
      },
    });

    tl.from(textUp.current, {
      y: "80%",
      ease: "power1.out", // Use an easing function that smooths out the animation
      duration: 1.5,
    })
    .from(options.current, {
      opacity: 0.25,
      ease: "power1.out",
      duration: 1.5,
    });

  }, []);

  return (
    <div
      ref={Footerparent}
      className="top-[0vh] h-[100vh] bottom-0 w-full bg-gray text-center"
    >
      <div className="fixed top-0 bg-black w-full h-full z-[-1] flex flex-col justify-between">
        <div className="w-full h-[15vh] flex pt-[15vh]  flex-col justify-between sm:pt-[5vh]">
          <h1 className="text-white font-custom4 text-[1.1rem] mb-4">
            JOIN THE CONVERSATION
          </h1>
          <div className="w-full flex justify-evenly items-center text-[1.7rem] text-white sm:text-[3rem]">
            <BsInstagram /> <FaXTwitter /> <AiOutlineYoutube />
            <RiLinkedinFill />
            <FaFacebookF />
          </div>

          <div ref={options} className="flex flex-col gap-10 text-white justify-start text-[0.8rem] sm:text-[1.2rem] mt-10 sm:flex sm:flex-row sm:w-full sm:justify-around">
            <div className=" flex items-start flex-col sm:gap-3">
              <h1 className="font-custom1">VECHILE</h1>
              <p className="font-custom2 text-[1.1rem] sm:text-[1.2rem] leading-none">
                Jaguar F-Pace
              </p>
              <p className="font-custom2 text-[1.1rem] sm:text-[1.2rem] leading-none">
                Explore our Vechile
              </p>
              <p className="font-custom2 text-[1.1rem] sm:text-[1.2rem] leading-none">
                Special Vechile Operations
              </p>
            </div>
            <div className=" flex items-start flex-col sm:gap-3">
              <h1 className="font-custom1">OWNERS</h1>
              <p className="font-custom2 text-[1.1rem] sm:text-[1.2rem] leading-none">
                Ownership Service
              </p>
              <p className="font-custom2 text-[1.1rem] sm:text-[1.2rem] leading-none">
                Incontrol
              </p>
              <p className="font-custom2 text-[1.1rem] sm:text-[1.2rem] leading-none">
                Software Update
              </p>
            </div>
            <div className=" flex items-start flex-col sm:gap-3">
              <h1 className="font-custom1">Explore</h1>
              <p className="font-custom2 text-[1.1rem] sm:text-[1.2rem] leading-none">
                Jaguar TCS racing
              </p>
            </div>
          </div>

          <div ref={options} className="text-white flex flex-col items-start font-custom1 leading-none mt-10 sm:flex sm:flex-row w-full sm:justify-around sm:items-center sm:pt-[10vh]">
            <p>CHANGE MARKET</p>
            <p>CAREERS</p>
            <p>TERMS & CONDITIONS</p>
            <button className="bg-white text-black p-2 mt-4 sm:mt-0">SHOW MORE</button>
          </div>
        </div>
        <div
          ref={textUp}
          className="text-[5rem] text-white flex font-custom1 tracking-[-5px] leading-none sm:w-full sm:mx-auto sm:text-[15rem] sm:flex sm:items-center sm:tracking-normal sm:justify-center"
        >
          <div>
            <h1>J</h1>
          </div>
          <div>
            <h1>A</h1>
          </div>
          <div>
            <h1>G</h1>
          </div>
          <div>
            <h1>U</h1>
          </div>
          <div>
            <h1>A</h1>
          </div>
          <div>
            <h1>R</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
