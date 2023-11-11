import React from 'react';
import FullModal from '../Modal/FullModal';
import { Link } from 'react-router-dom';

export const StepCustomize = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Shoepee Shoe Customize
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="d0d83814-78b6-480f-9a5f-7f637616b267"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#d0d83814-78b6-480f-9a5f-7f637616b267)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">HOW</span>
          </span>{' '}
          TO CUSTOMIZE
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          There’s no wrong way to customize. Check out the easy steps below and
          get started.
        </p>
      </div>
      <div className="relative grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2">
        <div className="absolute inset-0 flex items-center justify-center sm:hidden lg:flex">
          <div className="w-px h-full bg-gray-300 lg:w-full lg:h-px" />
        </div>
        <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
          {/* Step 1 */}
          <img
            src="https://images.vans.com/is/image/VansBrand/english/customs/lp-evolution-2023/clp-icon-pick-your-style.svg?$fullres$&fmt=png-alpha"
            alt="Step 1"
            className="mb-4 mx-auto w-20 h-20"
          />
          <div className="flex items-center justify-between mb-2">
            <p className="text-lg font-bold leading-5">
              CHOOSE YOUR SHOE STYLE
            </p>
            <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-deep-purple-accent-400 bg-indigo-50">
              1
            </p>
          </div>
          <p className="text-sm text-gray-900">
            The first step in creating your own Shoepee shoes is to choose the
            style that you want to customize.
          </p>
        </div>
        <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
          {/* Step 2 */}
          <img
            src="https://images.vans.com/is/image/VansBrand/english/customs/lp-evolution-2023/clp-icon-select-upgrades.svg?$fullres$&fmt=png-alpha"
            alt="Step 2"
            className="mb-4 mx-auto w-20 h-20"
          />
          <div className="flex items-center justify-between mb-2">
            <p className="text-lg font-bold leading-5">CHOOSE YOUR COLORS</p>
            <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-deep-purple-accent-400 bg-indigo-50">
              2
            </p>
          </div>
          <p className="text-sm text-gray-900">
            You can choose different colors for different parts of the shoe,
            such as the upper, the swoosh, and the outsole.
          </p>
        </div>
        <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
          {/* Step 3 */}
          <img
            src="https://images.vans.com/is/image/VansBrand/english/customs/lp-evolution-2023/clp-icon-personal-touch.svg?$fullres$&fmt=png-alpha"
            alt="Step 3"
            className="mb-4 mx-auto w-20 h-20"
          />
          <div className="flex items-center justify-between mb-2">
            <p className="text-lg font-bold leading-5">
              ADD YOUR PERSONAL TOUCH
            </p>
            <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-deep-purple-accent-400 bg-indigo-50">
              3
            </p>
          </div>
          <p className="text-sm text-gray-900">
            Now it’s time to add your personal touch to your design.
          </p>
        </div>
        <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
          {/* Step 4 */}
          <img
            src="https://images.vans.com/is/image/VansBrand/creative-tools-icon-designashoe?$scale-original$&fmt=png8-alpha"
            alt="Step 4"
            className="mb-4 mx-auto w-20 h-20"
          />
          <div className="flex items-center justify-between mb-2">
            <p className="text-lg font-bold leading-5">REVIEW AND PURCHASE</p>
            <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-deep-purple-accent-400 bg-indigo-50">
              4
            </p>
          </div>
          <p className="text-sm text-gray-900">
            Shoepee also offers free shipping and returns on all custom orders,
            so you can shop with confidence.
          </p>
        </div>
      </div>
      <div className="mt-10 flex flex-col text-center">
        <Link
          to={`/products`}
          className=" transition ease-in-out delay-150  hover:-translate-z-1 hover:scale-110 hover:background-color: #EF4444; duration-300 m-1.5 py-2.5 px-5 rounded-md bg-black text-white font-semibold uppercase hover:bg-red-800"
        >
          Start your customize
        </Link>
      </div>
    </div>
  );
};

export default StepCustomize;
