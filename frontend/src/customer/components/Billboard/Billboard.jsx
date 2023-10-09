import { BillboardData } from "./BillboardData";
import AliceCarousel from "react-alice-carousel";
import React from "react";
import "react-alice-carousel/lib/alice-carousel.css";

const Billboard = () => {
  const items = BillboardData.map((item) => (
    <div key={item.id} className="relative">
      <img
        className="cursor-pointer rounded-lg transition duration-300 mx-auto p-4"
        role="presentation"
        src={item.image}
        alt=""
      />
      <div className="absolute bottom-0 left-0 right-0 p-8 flex justify-center">
        <h2 className="text-xl font-semibold text-center">{item.title}</h2>
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
