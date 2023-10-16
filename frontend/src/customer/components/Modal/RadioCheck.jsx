import React, { useState } from "react";

const RadioCheck = ({ selectedBrand, setSelectedBrand }) => {
  // Khai báo state cho thương hiệu được chọn
  const [brand, setBrand] = useState("Nike");

  // Khi người dùng chọn thương hiệu mới
  const handleBrandChange = (newBrand) => {
    setBrand(newBrand);
    setSelectedBrand(newBrand);
  };

  // Danh sách các thương hiệu
  const brands = ["Nike", "Gucci", "Adidas", "Reebok", "Converse", "Vans"];

  return (
    <>
      <fieldset className="grid grid-cols-6 gap-4">
        <legend className="sr-only">Brand Options</legend>

        {brands.map((brand) => (
          <div key={brand}>
            <input
              type="radio"
              name="BrandOption"
              value={brand}
              id={brand}
              className="peer hidden [&:checked_+_label_svg]:block"
              checked={selectedBrand === brand}
              onChange={() => handleBrandChange(brand)}
            />

            <label
              htmlFor={brand}
              className={`block cursor-pointer rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500 ${
                selectedBrand === brand ? "peer-checked:text-blue-600" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <p className="text-gray-700">{brand}</p>

                <svg
                  className={`h-5 w-5 ${
                    selectedBrand === brand ? "text-blue-600" : "hidden"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </label>
          </div>
        ))}
      </fieldset>
    </>
  );
};

export default RadioCheck;
