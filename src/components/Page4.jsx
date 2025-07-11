import React from "react";
import Carousel from "./Carousel";

const Page4 = () => {
  return (
    <div className="w-full sm:h-[120vh] bg-white">
      <h1 className="text-4xl font-custom1 text-gray-600 flex justify-center sm:text-8xl py-16 z-[100]">
        Future Plans
      </h1> 
      <Carousel />
    </div>
  );
};

export default Page4;
