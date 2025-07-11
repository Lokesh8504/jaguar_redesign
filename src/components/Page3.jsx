import React, { useEffect, useRef } from "react";
import "../css/page3.css";
import jag1 from "../assets/jag1.avif";
import jag2 from "../assets/E-pace.webp";
import jag3 from "../assets/I-pace.webp";
import jag4 from "../assets/XF.avif";
import jag5 from "../assets/XE.avif";
import jag6 from "../assets/F-type.avif";
import jag7 from "../assets/F-pace-back.webp";
import jag8 from "../assets/E-pace-back.jpeg";
import jag9 from "../assets/I-pace2.jpeg";
import jag10 from "../assets/XE_side.avif";
import jag11 from "../assets/XE2.avif";
import jag12 from "../assets/F-type2.avif";
import jag13 from "../assets/cs16.jpg";
import jag14 from "../assets/cs17.avif";
import jag15 from "../assets/cs75.webp";
import { FaAngleRight } from "react-icons/fa6";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Atropos from "atropos/react";

gsap.registerPlugin(ScrollTrigger);

const carsData = [
  {
    imgSrc: jag1,
    hoverImgSrc: jag7,
    name: "F-Pace",
    description: "Luxury performance SUV offering practicality and efficiency",
  },
  {
    imgSrc: jag2,
    hoverImgSrc: jag8,
    name: "E-Pace",
    description:
      "Jaguar's first compact SUV is a unique combination of looks, agility and dynamic driving.",
  },
  {
    imgSrc: jag3,
    hoverImgSrc: jag9,
    name: "I-Pace",
    description: "Introducing Jaguar's first ever performance SUV.",
  },
  {
    imgSrc: jag4,
    hoverImgSrc: jag5,
    name: "XF",
    description:
      "Luxury business saloon with distinctive design. dynamic drive and state-of-the-art technologies.",
  },
  {
    imgSrc: jag10,
    hoverImgSrc: jag11,
    name: "XE",
    description:
      "The most advanced, efficient and refined sports saloon that jaguar has ever produced.",
  },
  {
    imgSrc: jag6,
    hoverImgSrc: jag12,
    name: "F-Type",
    description: "A true Jaguar's sports car.",
  },
];

const carsData2 = [
  {
    imgSrc: jag15,
    name: "CX-75",
    description:
      "Created to celebrate 75 years of Jaguar, C-X75 is the ultimate expression of our design and engineering innovation.",
  },
  {
    imgSrc: jag13,
    name: "CX-16",
    description:
      "Seductive design, innovative technology and revolutionary all new aluminium architecture, C-X17 is Jaguar's exciting all new Sports Crossover concept vehicle",
  },
  {
    imgSrc: jag14,
    name: "CX-17",
    description:
      "Seductive design, innovative technology and revolutionary all new aluminium architecture, C-X17 is Jaguar's exciting all new Sports Crossover concept vehicle",
  },
];

const Page3 = () => {
  const carsContainerRef = useRef(null);
  const carsSliderRef = useRef(null);
  const model = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: carsContainerRef.current,
        start: "top top",
        bottom: "110% top",
        pin: true,
        scrub: true,
      },
    });

    tl.to(carsSliderRef.current, {
      x: "-35%",
      ease: "power1.out",
      duration: 1.5,
      trigger: carsSliderRef.current,
    });
  }, []);

  return (
    <div className="w-full h-fit pt-20 overflow-hidden relative bg-white">
      <h1 className="text-4xl mb-6 font-custom1 text-gray-600 flex justify-center sm:text-8xl sm:mb-20">
        Models
      </h1>

      <div
        ref={model}
        className="cars grid grid-cols-2 gap-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-2"
      >
        {carsData.map((car, index) => (
          <div
            key={index}
            className="car1 relative h-[200px] object-cover bg-gray-600 sm:h-[450px] hover:scale-[1] hover:z-10 transition-all overflow-hidden"
          >
            <div>
              <img
                className="w-full h-full object-contain overflow-hidden"
                src={car.imgSrc}
                alt={car.name}
              />
              <img
                className="w-full h-full object-contain absolute top-100% bottom-img overflow-hidden"
                src={car.hoverImgSrc}
                alt={`${car.name}`}
              />
            </div>

            <div className="cars-desc absolute bottom-0 translate-y-[75%] z-2 sm:translate-y-[2%]">
              <p className="font-custom1 text-[1.3rem] text-gray-300 flex items-center gap-1 sm:text-[2rem]">
                <FaAngleRight className="text-[1rem] sm:text-[2rem]" />
                {car.name}
              </p>
              <p className="font-custom3 w-full text-[0.8rem] text-gray-300 flex items-center gap-1 sm:text-[1rem]">
                {car.description}
              </p>
              <button className="bg-white text-black px-2 py-1 text-[1rem] font-custom1 mt-4 hover:scale-[1.1] transition-all">
                <div className="w-full h-full bg-red-200"></div>
                <p className="z-[2] bg-inherit">Explore</p>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="concept-container sm:h-[110vh]" ref={carsContainerRef}>
        <h1 className="text-4xl font-custom1 text-gray-600 flex justify-center sm:text-8xl py-[15vh] sm:py-[5vh] top-0 h-fit concept-car">
          Concept Cars
        </h1>

        <div
          className="w-[300vw] h-fit flex translate-x-[0vw] sm:h-[60vh]"
          ref={carsSliderRef}
        >
          {carsData2.map((car, index) => (
            <div key={index} className={`mb-10 sm:h-[65vh] sm:mb-0`}>
              <img
                src={car.imgSrc}
                className="w-[100vw] sm:h-[100%] object-cover sm:w-[70vw] sm:mx-auto"
                alt={car.name}
              />
              <div className="p-4 flex-1">
                <h2 className="flex items-center font-custom1">
                  <FaAngleRight className="text-[1rem]" />
                  {car.name}
                </h2>
                <p className="p-2 font-custom2 sm:w-[70%]">{car.description}</p>
                <p className="p-2 font-custom1 sm:w-[70%]">Learn More</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page3;
