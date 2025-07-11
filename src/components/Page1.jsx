import React, { useState } from "react";
import "../css/page1.css";
import bg from "../assets/bg-main.webp";
import logo from "../assets/jag2.jpeg";
import Logo from "./Logo";
import jag1 from "../assets/F-type.avif";
import jag2 from "../assets/owners.jpeg";
import jag3 from "../assets/owners2.jpg";
import jag4 from "../assets/owners3.avif";

const Page1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(jag1);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = (image) => {
    setCurrentImage(image);
  };

  return (
    <div className="w-[100vw] overflow-hidden">
      <div className="w-full h-[100vh] opacity-40 overflow-hidden absolute bottom-0">
        <img className="w-full object-cover h-full" src={jag2} alt="" />
      </div>
      <div className="header w-full fixed flex justify-between items-center p-6 sm:pr-20 z-[100]">
        <img
          src={logo}
          alt="Logo"
          className="w-[30%] mirrored-image z-10 bg-transparent sm:w-[10%]"
        />

        <div
          className={`nav-menu bg-black w-full h-screen top-0 left-0 absolute ${
            isOpen ? "open" : ""
          } text-white flex flex-col justify-center font-custom1 text-4xl gap-4 tracking-tighter sm:text-7xl`}
        >
          <div className="w-full flex flex-col items-start flex-grow justify-center z-[100]">
            <div className="p-8">
              <div
                className="relative overflow-hidden group"
                onMouseEnter={() => handleMouseEnter(jag1)}
              >
                <div className="elem flex h-[6vh] flex-col translate-y-[-0%] group-hover:translate-y-[-100%] transition-transform duration-500 ease-in-out sm:h-[10vh]">
                  <h1>VEHICLE</h1>
                  <h1>VEHICLE</h1>
                </div>
              </div>
              <div
                className="relative overflow-hidden group"
                onMouseEnter={() => handleMouseEnter(jag2)}
              >
                <div className="elem flex h-[6vh] flex-col translate-y-[-0%] group-hover:translate-y-[-100%] transition-transform duration-500 ease-in-out sm:h-[10vh]">
                  <h1>PURCHASE</h1>
                  <h1>PURCHASE</h1>
                </div>
              </div>
              <div
                className="relative overflow-hidden group"
                onMouseEnter={() => handleMouseEnter(jag3)}
              >
                <div className="elem flex h-[6vh] flex-col translate-y-[-0%] group-hover:translate-y-[-100%] transition-transform duration-500 ease-in-out sm:h-[10vh]">
                  <h1>OWNERS</h1>
                  <h1>OWNERS</h1>
                </div>
              </div>
              <div
                className="relative overflow-hidden group"
                onMouseEnter={() => handleMouseEnter(jag4)}
              >
                <div className="elem flex h-[6vh] flex-col translate-y-[-0%] group-hover:translate-y-[-100%] transition-transform duration-500 ease-in-out sm:h-[10vh]">
                  <h1>EXPLORE</h1>
                  <h1>EXPLORE</h1>
                </div>
              </div>
            </div>

            <div className="w-[100vw] h-[100vh] object-contain absolute z-[-1] opacity-20 transition-transform duration-500 ease-in-out">
              <img src={currentImage} alt="" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="text-[15px] links z-[100] pl-8 mb-2 leading-6 tracking-wide font-custom3 sm:w-full sm:flex sm:justify-around sm:text-[17px]">
            <a href="#" className="block">
              Facebook
            </a>
            <a href="#" className="block">
              Twitter
            </a>
            <a href="#" className="block">
              Instagram
            </a>
            <a href="#" className="block">
              LinkedIn
            </a>
          </div>
        </div>

        <div className="flex items-center justify-between gap-6">
          <div className="gap-6 hidden sm:inline-flex">
            <div className=" h-[3vh] overflow-hidden">
              <div className="hover:translate-y-[-50%] transition-transform duration-500 ease-out">
                <h1 className="font-custom1">Models</h1>
                <h1 className="font-custom1">Models</h1>
              </div>
            </div>
            <div className=" h-[3vh] overflow-hidden">
              <div className="hover:translate-y-[-50%] transition-transform duration-500 ease-out">
                <h1 className="font-custom1">future plans</h1>
                <h1 className="font-custom1">future plans</h1>
              </div>
            </div>

            <div className=" h-[3vh] overflow-hidden">
              <div className="hover:translate-y-[-50%] transition-transform duration-500 ease-out">
                <h1 className="font-custom1">concept cars</h1>
                <h1 className="font-custom1">concept cars</h1>
              </div>
            </div>
          </div>
          <div
            className={`burger-icon ${isOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
      </div>
      <div
        data-scroll
        data-scroll-speed="0.7"
        className="h-screen w-full flex flex-col items-center justify-center sm:h-[100vh] bg-gray-100"
      >
        <div className="h-[40%] w-[100%] bg-red- z-[1] sm:h-[90%] sm:z-[1] sm:w-[60%]">
          <Logo />
        </div>
        <div className="overflow-hidden animate-text-container h-[18px] sm:mt-[-100px] z-[1]">
          <div className="w-full h-[50px] flex flex-col items-center justify-center animate-text-container">
            <h1 className="font-custom1 text-[1.1rem] tracking-[-2px] leading-none text-gray-800 animate-slogan1">
              The Art of performance
            </h1>
            <h1 className="font-custom1 text-[1.1rem] tracking-[-2px] leading-none text-gray-800 animate-slogan2">
              Grace, Elegance, Performance
            </h1>
            <h1 className="font-custom1 text-[1.1rem] tracking-[-2px] leading-none text-gray-800 animate-slogan3">
              The ambition to leap forward.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page1;
