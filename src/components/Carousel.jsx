import React, { useState, useEffect, useRef } from "react";
import jag1 from "../assets/tsc.jpg";
import jag2 from "../assets/page3.avif";
import jag3 from "../assets/page4.avif";
import "../css/page4.css";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const images = [
  {
    src: jag1,
    alt: "JAGUAR TCS RACING",
    description: "The ultimate balance between power and efficiency.",
    button: "Learn More ",
  },
  {
    src: jag2,
    alt: "THE NEW ERA BEGINS",
    description:
      "By 2025, Jaguar will be reimagined as an all-electric modern electric luxury brand.",
    button: "Learn More ",
  },
  {
    src: jag3,
    alt: "ELECTRIFYING POWER",
    description: "Thrilling to drive, Easy to live with.",
    button: "Learn More ",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 768);

  const page4 = useRef(null);
  const slider = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: page4.current,
        start: "top 70%",
        end: "top 50%",
        scrub: true,
        // markers: true,
      },
    });

    tl.from(page4.current, {
      scale: "0.8",
    });
  });

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      {isWideScreen ? (
        <div
          ref={page4}
          className="carousel-container relative w-[99%] h-[40vh] mx-auto overflow-hidden sm:overflow-visible sm:w-[95vw] sm:h-[75vh]"
        >
          <div ref={slider} className="absolute inset-0 flex items-center justify-between z-[100]">
            <button
              className="bg-transparent p-3 text-black h-full rounded-full"
              onClick={prevSlide}
            >
              <FaAngleLeft className="text-3xl text-white" />
            </button>
            <button
              className="bg-transparent p-3 text-black h-full rounded-full"
              onClick={nextSlide}
            >
              <FaAngleRight className="text-3xl text-white" />
            </button>
          </div>
          <div className="w-full">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-[100%] mx-auto h-full object-contain sm:object-cover sm:w-full"
                />
                <div className="absolute bottom-0 bg-black text-white p-4 w-full translate-y-[100%] sm:bg-opacity-60 sm:translate-y-[100%] sm:flex sm:justify-between">
                  <h2 className="flex items-center font-custom1 sm:text-[1.5rem]">
                    <FaAngleRight className="text-[1.5rem]" />
                    {image.alt}
                  </h2>
                  <p className="p-2 font-custom2 sm:text-[1.4rem]">
                    {image.description}
                  </p>
                  <button className="bg-white font-custom1 tracking-tighter text-black px-4 py-2 hover:bg-black hover:text-white">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex-container">
          {images.map((image, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={image.src} alt={image.alt} className="flex-img" />
              <div className="bg-black opacity-55 text-white p-4 w-full">
                <h2 className="flex items-center font-custom1">
                  <FaAngleRight className="text-[1rem]" />
                  {image.alt}
                </h2>
                <p className="p-2 font-custom2">{image.description}</p>
                <button className="bg-gray-900 text-sm p-2 font-custom2">
                  {image.button}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Carousel;
