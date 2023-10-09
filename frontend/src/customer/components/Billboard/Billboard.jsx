import { BillboardData } from "./BillboardData";
import AliceCarousel from "react-alice-carousel";
import React from "react";
import "react-alice-carousel/lib/alice-carousel.css";

const Billboard = () => {
  const items = BillboardData.map((item) => (
    <img
      className="cursor-pointer rounded-lg transition duration-300 mx-auto p-4"
      role="presentation"
      src={item.image}
      alt=""
    />
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
