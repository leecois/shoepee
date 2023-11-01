import React from 'react';

const RadioCheck = ({ selectedBrand, setSelectedBrand, data }) => {
  // Extract unique brand names using a Set
  const uniqueBrands = [...new Set(data.map((brands) => brands.brand.name))];

  const handleBrandChange = (newBrand) => {
    setSelectedBrand(newBrand);
  };

  return (
    <fieldset className="grid grid-cols-6 gap-4">
      <legend className="sr-only">Brand Options</legend>
      {uniqueBrands.map((brandName) => (
        <div key={brandName}>
          <input
            type="radio"
            name="BrandOption"
            value={brandName}
            id={brandName}
            className="peer hidden [&:checked_+_label_svg]:block"
            checked={selectedBrand === brandName}
            onChange={() => handleBrandChange(brandName)}
          />

          <label
            htmlFor={brandName}
            className={`block cursor-pointer rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500 ${
              selectedBrand === brandName ? 'peer-checked:text-blue-600' : ''
            }`}
          >
            <div className="flex items-center justify-between">
              <p className="text-gray-700">{brandName}</p>

              <svg
                className={`h-5 w-5 ${
                  selectedBrand === brandName ? 'text-blue-600' : 'hidden'
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
