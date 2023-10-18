import React, { useRef } from "react";
import { shoesData } from "./shoeData";

const OptionModal = ({ selectedShoe, closeModal }) => {
  const modalRef = useRef(null);

  const selectedShoeData = shoesData.find((shoe) => shoe.id === selectedShoe);

  return (
    <div
      ref={modalRef}
      className="fixed top-0 left-0 flex h-full min-h-screen w-full items-center justify-center bg-black bg-opacity-90 p-4"
    >
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="w-full h-full bg-white py-2 px-2 text-center md:py-20 md:px-20">
          <button
            onClick={closeModal}
            className="text-gray-500 hover:text-gray-700 absolute top-4 right-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <header className="bg-gray-100 p-4">
            <div className="flex justify-center mb-4">
              <img
                src="./logoshoepee.png"
                alt="Shoepee"
                className="w-16 h-16"
              />
            </div>
            <h3 className="pb-2 text-xl font-bold text-dark sm:text-2xl">
              STYLE OPTIONS
            </h3>
          </header>
          <fieldset className="grid grid-cols-3 gap-4">
            <legend className="sr-only">Style Options</legend>
            {selectedShoeData && (
              <button className="relative group h-64 sm:h-80 lg:h-96">
                <span className="absolute inset-0 border-2 border-dashed border-black"></span>
                <div className="relative flex h-full transform items-end border-2 border-black bg-light-yellow transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                  <div className="p-4 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
                    <img
                      src={selectedShoeData.image}
                      alt={selectedShoeData.name}
                      className="w-full h-auto object-cover transition duration-500"
                    />
                    <h2 className="mt-4 text-xl font-medium sm:text-2xl">
                      {selectedShoeData.name}
                    </h2>
                  </div>
                  <div className="absolute p-4 opacity-0 transition-opacity group-hover:opacity-100 sm:p-6 lg:p-8">
                    <h3 className="mt-4 text-xl font-medium sm:text-2xl">
                      {selectedShoeData.name}
                    </h3>
                    <p className="mt-4 text-sm sm:text-base">
                      {selectedShoeData.description}
                    </p>
                    <p className="mt-8 font-bold">{selectedShoeData.price}</p>
                  </div>
                </div>
              </button>
            )}
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default OptionModal;
