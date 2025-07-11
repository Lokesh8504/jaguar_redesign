// components/Loader.js
import React, { useState, useEffect } from "react";
import "../css/loader.css";
import logo from '../assets/logo.avif'
const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`absolute z-[10] w-[100vw] h-screen ${
        loading ? "" : "hidden"
      }`}
    >
      <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] overflow-hidden z-[2]">
        <img src={logo} className="w-full text-white jag-logo leading-none" />
      </div>
      <div className="flex">
        <div className="slide w-[25%] h-screen bg-[black]"></div>
        <div className="slide w-[25%] h-screen bg-[black]"></div>
        <div className="slide w-[25%] h-screen bg-[black]"></div>
        <div className="slide w-[25%] h-screen bg-[black]"></div>
      </div>
    </div>
  );
};

export default Loader;
