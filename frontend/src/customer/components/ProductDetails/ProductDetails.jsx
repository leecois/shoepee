import React, { useState } from "react";
import {
  CheckIcon,
  QuestionMarkCircleIcon,
  ShieldCheckIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import Collection from "../Product/Collection";

const ProductDetail = () => {
  const product = {
    name: "DISNEY X VANS CUSTOMS MICKEY ULTRARANGE EXO SHOE",
    price: 140,
    rating: 4.7,
    reviewsNbr: 944,
    href: "#link",
    hrefTwitter: "#twitter",
    hrefEmail: "#email",
    pictures: [
      "https://images.vans.com/is/image/Vans/VN0A3VC1_539_HERO?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0",
      "https://images.vans.com/is/image/Vans/VN0A3VC1_539_ALT1?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0",
      "https://images.vans.com/is/image/Vans/VN0A3VC1_539_ALT2?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0",
      "https://images.vans.com/is/image/Vans/VN0A3VC1_539_ALT3?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0",
    ],
    alt: "Bag Elite Black",
    description:
      "For the past 100 years, Disney stories have inspired creators, influenced pop-culture, and brought us together. To celebrate this monumental anniversary, Vans Customs is proud to offer a range of magical prints that pay tribute to Disney’s beloved characters and villainous standouts. Vans Customs have been a tradition since 1966, when Paul Van Doren made shoes with any fabric people brought by the shop. Today, the creativity is still in your hands. Pick your shoe, pick your colors and patterns, and make them yours.",
    inStock: true,
    sizes: [
      {
        capacity: "M 3.5 / W 5.0",
      },
      {
        capacity: "M 4.0 / W 5.5",
      },
      {
        capacity: "M 4.5 / W 6.0",
      },
      {
        capacity: "M 5.0 / W 6.5",
      },
      {
        capacity: "M 5.5 / W 7.0",
      },
    ],
  };

  const [selectedSize, setSelectedSize] = useState(null);

  const starsNumber = Math.floor(product.rating);
  const isHalfStar = !Number.isInteger(product.rating);
  const emptyStars = 5 - Math.ceil(product.rating);

  return (
    <div className="mx-auto py-8 px-4 w-full max-w-7xl bg-white">
      <div className="mx-auto max-w-2xl lg:max-w-none grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Product Pictures */}
        <div className="order-2 lg:order-1 relative rounded-sm">
          <div className="grid grid-cols-2 gap-2 lg:grid-cols-2 lg:gap-2">
            {product.pictures.map((picture, index) => (
              <div key={index}>
                <img
                  src={picture}
                  alt={product.alt}
                  className="object-contain w-full h-full rounded-sm"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="order-1 lg:order-2 col-span-full lg:col-span-1 lg:max-w-xl flex flex-col items-start">
          <h1 className="text-3xl sm:text-4xl text-gray-700 font-extrabold tracking-wide">
            {product.name}
          </h1>
          <div className="mt-5 flex items-center">
            <p className="pr-5 border-r border-gray-200 text-2xl text-gray-700 font-normal">
              ${product.price}
            </p>
            <div className="pl-5 pr-3 flex items-center">
              <div className="flex items-center space-x-1">
                {[...Array(starsNumber)].map((star, index) => (
                  <span key={index} className="flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-yellow-400 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                    </svg>
                  </span>
                ))}
                {isHalfStar && (
                  <span className="flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-yellow-400 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524v-12.005zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z" />
                    </svg>
                  </span>
                )}
                {[...Array(emptyStars)].map((star, index) => (
                  <span key={index} className="flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-gray-300 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                    </svg>
                  </span>
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-400 font-medium">
                {product.reviewsNbr} reviews
              </span>
            </div>
          </div>
          <div className="mt-5">
            {product.inStock ? (
              <p className="flex items-center space-x-1 text-sm text-gray-700 font-semibold">
                <CheckIcon className="mr-2 w-5 h-5 text-green-500" />
                In stock and ready to ship
              </p>
            ) : (
              <p className="flex items-center space-x-1 text-sm text-gray-700 font-semibold">
                <XMarkIcon className="mr-2 w-5 h-5 text-red-500" />
                Unavailable for the moment
              </p>
            )}
          </div>
          <div className="mt-10 w-full">
            <h3 className="text-sm text-gray-700 font-semibold">Size</h3>
            <div className="mt-2 grid grid-cols-2 lg:grid-cols-2 gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size.capacity}
                  type="button"
                  className={`p-3 inline-flex flex-col items-center space-y-2 rounded-lg border-2 ${
                    selectedSize === size.capacity
                      ? "border border-red-400"
                      : "border border-gray-200"
                  } text-left`}
                  onClick={() => setSelectedSize(size.capacity)}
                >
                  <span className="text-base text-gray-700 font-semibold">
                    {size.capacity}
                  </span>
                </button>
              ))}
            </div>
            <a
              href="#sizeGuide"
              className="mt-5 inline-flex items-center text-sm text-gray-400 font-medium hover:text-gray-700"
            >
              What size should I buy?
              <QuestionMarkCircleIcon className="ml-2 w-4 h-4" />
            </a>
          </div>
          <button className="mt-10 py-2 w-full inline-block rounded-md bg-red-500 text-base text-white font-semibold tracking-wide hover:bg-red-600">
            Add to cart
          </button>
          <p className="mt-3 w-full inline-flex justify-center items-center text-sm text-gray-500 font font-semibold">
            <ShieldCheckIcon className="mr-2 w-4 h-4" />
            Lifetime Guarantee
          </p>
        </div>
      </div>
      <h3 className="mt-10 text-lg text-gray-700 font-semibold">Overview</h3>
      <p className="mt-2 text-md text-gray-500 font-medium">
        {product.description}
      </p>
      <Collection />
    </div>
  );
};

export default ProductDetail;
