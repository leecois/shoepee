import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center overflow-hidden">
      <div className="pt-10 sm:pt-20 lg:pt-40 w-full flex flex-col lg:flex-row">
        {/* :HERO MAIN */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center text-gray-600">
          {" "}
          {/* Container */}
          {/* ::Hero Inner */}
          <div className="p-5 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
            {/* Hero Title */}
            <h1 className="py-10 text-3xl sm:text-5xl font-light tracking-wide leading-tight select-none">
              <span className="text-meta-7 font-semibold">Shoe</span>pee,{" "}
              <br />
              <span className="text-meta-3 font-semibold">Shoe</span> by you
              custom shoes.
            </h1>
            {/* Starting Price */}
            <p className="text-lg font-semibold text-gray-400 tracking-wide select-none">
              Starting at $1
            </p>
            {/* Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center">
              <Link to={`/products`}
                className=" transition ease-in-out delay-150  hover:-translate-z-1 hover:scale-110 hover:background-color: #EF4444; duration-300 m-1.5 py-2.5 px-5 rounded-md bg-black text-white font-semibold uppercase hover:bg-red-800"
              >
                Start your customize
              </Link>
              
            </div>
          </div>
        </div>
        {/* :HERO ILLUSTRATION */}
        <div className="relative w-full lg:w-1/2 flex flex-col justify-center items-center overflow-hidden">
          <img
            src="/assets/publiceye.jpg"
            alt=""
            className="w-2/3 lg:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
