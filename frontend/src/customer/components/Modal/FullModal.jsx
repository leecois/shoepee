import React, { useRef, useState } from "react";
import RadioCheck from "./RadioCheck";
import OptionModal from "./OptionModal";

const FullModal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState("Nike"); // Thương hiệu mặc định

  const trigger = useRef(null);
  const modal = useRef(null);

  const openModal = () => {
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = "auto";
  };

  // Xác định danh sách giày dựa trên thương hiệu đã chọn
  const shoesData = [
    {
      id: 1,
      brand: "Nike",
      name: "Nike Air Max",
      image: "https://images.vans.com/is/image/VansBrand/customs-sk8hi-classic?$scale-original$",
    },
    {
      id: 2,
      brand: "Gucci",
      name: "Gucci Sneakers",
      image: "https://images.vans.com/is/image/VansBrand/customs-ultrarange?$scale-original$",
    },
    {
      id: 3,
      brand: "Adidas",
      name: "Adidas Superstar",
      image: "https://images.vans.com/is/image/VansBrand/customs-authentic-classic?$scale-original$",
    },
    {
      id: 4,
      brand: "Vans",
      name: "Puma Suede",
      image: "https://images.vans.com/is/image/VansBrand/customs-slipon-classic?$scale-original$",
    },
    {
      id: 5,
      brand: "Vans",
      name: "Reebok Classic",
      image: "https://images.vans.com/is/image/VansBrand/customs-era-classic?$scale-original$",
    },
    {
      id: 6,
      brand: "Vans",
      name: "Converse Chuck Taylor",
      image: "https://images.vans.com/is/image/VansBrand/customs-oldskool-classic?$scale-original$",
    },
    {
      id: 7,
      brand: "Vans",
      name: "Vans Old Skool",
      image: "https://images.vans.com/is/image/VansBrand/customs-slipon-classic?$scale-original$",
    },
  ];

  const filteredShoes = shoesData.filter(
    (shoe) => shoe.brand === selectedBrand
  );

  return (
    <>
      <div className="container mx-auto py-20 relative">
        <OptionModal />
        <button
          ref={trigger}
          onClick={openModal}
          className={`px-6 py-3 text-base font-medium rounded-full bg-primary`}
        >
          Open Modal
        </button>
        <div
          className={`fixed top-0 left-0 flex h-full min-h-screen w-full items-center justify-center bg-black bg-opacity-90 px-4 py-5 ${
            modalOpen ? "block" : "hidden"
          }`}
        >
          <div
            ref={modal}
            className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
          >
            <div className="w-full h-full bg-white py-2 px-2 text-center md:py-[20px] md:px-[20px]">
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
                <RadioCheck
                  selectedBrand={selectedBrand}
                  setSelectedBrand={setSelectedBrand}
                />
              </header>
              <div className="overflow-y-auto max-h-[500px] bg-light-yellow">
                <ul className="grid gap-4 mb-4 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredShoes.map((shoe) => (
                    <li key={shoe.id}>
                      <button className="block ml-4 mb-4 overflow-hidden group ">
                        <img
                          src={shoe.image}
                          alt={shoe.name}
                          className="w-full object-cover transition duration-500 group-hover:scale-105"
                        />

                        <div className="relative pt-3 ">
                          <h3 className="text-lg font-bold text-gray-700 group-hover:text-red-500">
                            {shoe.name}
                          </h3>
                        </div>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FullModal;
