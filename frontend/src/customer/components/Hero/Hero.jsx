import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-white text-black overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-6">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tighter leading-tight">
              <span className="block text-red-600">Shoepee,</span>
              <span className="block text-red-700">Your Style,</span>
              <span className="block text-red-800">Your Way</span>
            </h1>
            <div className="mt-6">
              <Link
                to="/products"
                className="group relative inline-flex items-center  px-7 py-3.5 rounded shadow-lg outline-none bg-gradient-to-br from-pink-500 to-yellow-500 text-lg text-white font-medium transition-all duration-200 ease-out hover:text-yellow-700 hover:from-transparent hover:to-transparent hover:shadow-none active:top-0.5 focus:outline-none"
              >
                <span
                  className="absolute h-0 w-0.5 right-0 top-0 bg-gradient-to-br from-pink-500 to-yellow-500 transition-all duration-500 ease-out group-hover:h-full"
                  aria-hidden="true"
                />
                <span
                  className="absolute left-0 bottom-0 bg-gradient-to-br from-pink-500 to-yellow-500 transition-all duration-500 ease-out w-0.5 h-0 group-hover:h-full"
                  aria-hidden="true"
                />
                Shop Now
                <span
                  className="absolute left-0 bottom-0 bg-gradient-to-br from-pink-500 to-yellow-500 transition-all duration-500 ease-out w-0 h-0.5 group-hover:w-full"
                  aria-hidden="true"
                />
                <span
                  className="absolute w-0 h-0.5 right-0 top-0 bg-gradient-to-br from-pink-500 to-yellow-500 transition-all duration-500 ease-out group-hover:w-full"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
          <div className="m-auto">
            <img
              src="/assets/publiceye.jpg"
              alt="Featured Shoe"
              className="max-w-md lg:max-w-2xl object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
