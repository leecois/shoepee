import React from "react";

const HeroMessage = () => {
  return (
    <div className="relative">
      {/* Video Section */}
      <div className="relative h-screen">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
        >
          <source
            src="https://images.vans.com/is/content/VansBrand/english/customs/lp-evolution-2023/clp-hero-slip-on.mp4" // Replace with the URL of your video
            type="video/mp4"
          />
          {/* You can add multiple source elements for different video formats */}
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      </div>
      {/* Text Section */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          CUSTOMIZED BY YOU
        </h1>
        <p className="text-lg md:text-xl font-normal mb-8">
          A tradition since 1966, the creativity is still in your hands. Pick
          your shoe and make them yours.
        </p>
        <button className="bg-gray-600 hover:bg-black text-white font-bold py-3 px-8 rounded-full">
          Customise
        </button>
      </div>
    </div>
  );
};

export default HeroMessage;