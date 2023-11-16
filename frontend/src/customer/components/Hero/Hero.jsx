import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center bg-white overflow-hidden">
      <div className="pt-5 sm:pt-15 lg:pt-28 w-full flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center text-black">
          <div className="p-5 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
            <h1 className="py-10 text-4xl sm:text-6xl font-bold tracking-tighter leading-tight select-none">
              <span className="text-meta-1">Shoepee,</span> <br />
              <span className="text-meta-6">Your Style,</span> <br />
              <span className="text-meta-3">Your Way</span>
            </h1>
            <p className="text-xl font-semibold text-gray-600 tracking-tight select-none">
              Starting at $99
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center">
              <Link
                to={`/products`}
                className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 m-1.5 py-3 px-6 rounded-md bg-black text-white font-semibold uppercase hover:bg-red-600"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
        <div className="relative w-full lg:w-1/2 lg:right-16 sm:right-0 flex justify-center items-center overflow-hidden pointer-events-none select-none">
          <img
            src="/assets/publiceye.jpg"
            alt="Featured Shoe"
            className="w-2/3 lg:w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
