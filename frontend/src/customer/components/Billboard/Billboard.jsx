import { BillboardData } from "./BillboardData";
import AliceCarousel from "react-alice-carousel";
import React from "react";
import "react-alice-carousel/lib/alice-carousel.css";

const Billboard = () => {
  const items = BillboardData.map((item) => (
    <div key={item.id} className="relative">
      <img
        className="cursor-pointer rounded-lg transition duration-300 mx-auto p-4 object-cover h-64 md:h-96 lg:h-auto"
        role="presentation"
        src={item.image}
        alt=""
      />
      <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 right-0 p-4 text-white text-center">
        <h2 className="text-xl font-semibold">{item.title}</h2>
      </div>
    </div>
  ));

  return (
    <AliceCarousel
      items={items}
      disableButtonsControls
      disableDotsControls
      autoPlay
      autoPlayInterval={3000}
      infinite
    />
  );
};

export default Billboard;
