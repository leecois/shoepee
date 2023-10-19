import React, { useEffect, useState } from "react";
import brandApi from "../../../api/brandApi";

const RadioCheck = ({ selectedBrand, setSelectedBrand }) => {
  // Khai báo state cho thương hiệu được chọn
  const [brandList, setBrandList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await brandApi.getAll();
        setBrandList(data);
      } catch (error) {
        console.log("Non-response Error:", error.message);
        // Handle the error as needed
      }
    })();
  }, []);

  // Khi người dùng chọn thương hiệu mới
  const handleBrandChange = (newBrand) => {
    setSelectedBrand(newBrand);
  };

  return (
    <fieldset className="grid grid-cols-6 gap-4">
      <legend className="sr-only">Brand Options</legend>
      {brandList.map((brand) => (
        <div key={brand.brandId}>
          <input
            type="radio"
            name="BrandOption"
            value={brand.brandName} // Change value to brand name
            id={brand.brandName} // Change ID to brand name
            className="peer hidden [&:checked_+_label_svg]:block"
            checked={selectedBrand === brand.brandName} // Compare with brand name
            onChange={() => handleBrandChange(brand.brandName)} // Change to brand name
          />

          <label
            htmlFor={brand.brandName} // Change to brand name
            className={`block cursor-pointer rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500 ${
              selectedBrand === brand.brandName
                ? "peer-checked:text-blue-600"
                : ""
            }`}
          >
            <div className="flex items-center justify-between">
              <p className="text-gray-700">{brand.brandName}</p>

              <svg
                className={`h-5 w-5 ${
                  selectedBrand === brand.brandName ? "text-blue-600" : "hidden"
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
  );
};

export default RadioCheck;
