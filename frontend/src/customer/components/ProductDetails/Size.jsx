// Size.js
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline';
import React from 'react';
import useSizeData from '../../../hooks/useSizeData';

const Size = ({ selectedSize, setSelectedSize }) => {
  const { sizeList } = useSizeData();

  return (
    <div className="mt-4 w-full">
      <div className="flex justify-between">
        <h3 className="text-md text-gray-700 font-semibold">Size</h3>
        <a
          href="#sizeGuide"
          className="inline-flex items-`enter code here`center text-sm text-gray-400 font-medium hover:text-gray-700"
        >
          What size should I buy?
          <QuestionMarkCircleIcon className="ml-2 w-4 h-4" />
        </a>
      </div>

      <div className="mt-2 grid grid-cols-3 lg:grid-cols-4 gap-2">
        {sizeList?.map((size) => (
          <button
            key={size.id}
            type="button"
            className={`p-3 inline-flex flex-col items-center space-y-2 rounded-lg border-2 ${
              selectedSize === size.size // Use the size property for comparison
                ? 'border border-red-400'
                : 'border border-gray-200'
            } text-left`}
            onClick={() => setSelectedSize(size.size)} // Set selectedSize to the size property
          >
            <span className="text-base text-gray-700 font-semibold">
              {size.size}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Size;
