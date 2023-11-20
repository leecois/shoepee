import React from 'react';
import { Link } from 'react-router-dom';

function ProductList() {
  const modelList = [
    {
      id: '1',
      modelname: 'Model 1',
      shoes: [
        {
          imageUrl: 'https://example.com/image1.jpg',
        },
        // Add more shoes as needed
      ],
      brandDto: {
        brandName: 'Brand 1',
      },
      price: '100',
    },
    {
      id: '2',
      modelname: 'Model 2',
      shoes: [
        {
          imageUrl: 'https://example.com/image2.jpg',
        },
        // Add more shoes as needed
      ],
      brandDto: {
        brandName: 'Brand 2',
      },
      price: '200',
    },
    {
      id: '2',
      modelname: 'Model 2',
      shoes: [
        {
          imageUrl: 'https://example.com/image2.jpg',
        },
        // Add more shoes as needed
      ],
      brandDto: {
        brandName: 'Brand 2',
      },
      price: '200',
    },
    {
      id: '2',
      modelname: 'Model 2',
      shoes: [
        {
          imageUrl: 'https://example.com/image2.jpg',
        },
        // Add more shoes as needed
      ],
      brandDto: {
        brandName: 'Brand 2',
      },
      price: '200',
    },
    
    // Add more models as needed
  ];
  if (modelList.length === 0 || !modelList) {
    // Display loading placeholders if modelList is empty or loading
    return (
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {[...Array(12)].map((_, index) => (
          <div key={index} className="animate-pulse space-y-2">
            <div className="h-60 bg-gray-300 rounded-lg"></div>
            <div className="h-4 bg-gray-300 rounded"></div>
            <div className="h-4 bg-gray-300 rounded"></div>
            <div className="h-4 bg-gray-300 rounded"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {modelList?.map((model) => (
        <div key={model.id} className="group p-4 bg-white shadow-lg rounded-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl">
          <Link to={`/products/${model.modelname}`} className="block">
            <img
              src={model.shoes[0]?.imageUrl}
              alt={model.modelname}
              className="h-60 w-full rounded-t-lg object-cover"
            />
            <div className="py-4">
              <span className="text-sm text-gray-500 font-semibold">
                {model.brandDto.brandName}
              </span>
              <h3 className="text-lg text-gray-900 font-bold group-hover:underline">
                {model.modelname}
              </h3>
              <p className="text-md text-gray-900 font-semibold">
                ${model.price}
              </p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
