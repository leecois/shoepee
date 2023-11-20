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
            <p className="text-xl font-semibold">
              Starting at $99
            </p>
            <div className="mt-6">
              <Link
                to="/products"
                className="inline-block bg-black text-white text-sm font-semibold uppercase tracking-widest py-3 px-6 rounded-full hover:bg-opacity-90 transition ease-in-out duration-300"
              >
                Shop Now
              </Link>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
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
