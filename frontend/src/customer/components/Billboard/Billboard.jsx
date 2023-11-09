import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { BillboardData } from "./BillboardData";

const Billboard = () => {
  const items = BillboardData.map((item) => (
    <div key={item.id} className="relative">
      <img
        className="cursor-pointer rounded-lg transition duration-300 mx-auto p-4 object-cover h-64 md:h-96 lg:h-auto"
        role="presentation"
        src={item.image}
        alt=""
      />
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
