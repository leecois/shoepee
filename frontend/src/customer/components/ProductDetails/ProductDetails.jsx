import {
  CheckIcon,
  QuestionMarkCircleIcon,
  ShieldCheckIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import React, { useState } from 'react';
import Collection from '../Product/Collection';
import AddToCartForm from '../Cart/AddToCartForm';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../containers/Cart/cartSlice';
import axios from 'axios';
import { useEffect } from 'react';

const ProductDetails = ({ product }) => {
  const [quantity] = useState(0);
  const [selectedShoe, setSelectedShoe] = useState(null);
  useEffect(() => {
    if (product && product.shoe && product.shoe.length > 0) {
      setSelectedShoe(product.shoe[0]);
    }
  }, [product]);

  const [selectedShoeImages, setSelectedShoeImages] = useState([]);
  // Function to fetch shoe images based on shoe ID using Axios
  const fetchShoeImages = async (shoeId) => {
    try {
      const response = await axios.get(
        `http://3.1.85.78/api/v1/auth/getimageshoe/${shoeId}`
      );
      if (response.status === 200) {
        setSelectedShoeImages(response.data);
      }
    } catch (error) {
      console.error('Error fetching shoe images:', error);
    }
  };

  useEffect(() => {
    if (selectedShoe) {
      fetchShoeImages(selectedShoe.id);
    }
  }, [selectedShoe]);

  const handleAddToCart = () => {
    const action = addToCart({
      id: product.id,
      name: product.modelname,
      image: product.imageurl,
      price: product.price,
      size: selectedSize,
      quantity: quantity + 1,
    });
    dispatch(action);
    console.log(action);
  };
  const handleCustomizeClick = () => {
    const customizeUrl = '/customize';
    window.location.href = customizeUrl;
  };
  const handleShoeButtonClick = (shoe) => {
    setSelectedShoe(shoe);
    setSelectedShoeImages(shoe.imageUrls);
  };
  const [selectedSize, setSelectedSize] = useState(null);

  const dispatch = useDispatch();

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mx-auto py-8 px-4 w-full max-w-7xl bg-white">
      <div className="mx-auto max-w-2xl lg:max-w-none grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="order-2 lg:order-1 relative rounded-sm">
          {/* Image of single shoe */}
          {selectedShoeImages && selectedShoeImages.length > 0 ? (
            <div className="grid grid-cols-2 gap-2 lg:grid-cols-2 lg:gap-2">
              {selectedShoeImages.map((image, index) => (
                <div key={index}>
                  <img
                    src={image.imageUrl}
                    alt={`Shoe Imag`}
                    className="object-contain w-full h-full rounded-sm"
                  />
                </div>
              ))}
            </div>
          ) : (
            <p>No images available for the selected shoe.</p>
          )}
        </div>

        <div className="order-1 lg:order-2 col-span-full lg:col-span-1 lg:max-w-xl flex flex-col items-start">
          <h1 className="text-3xl sm:text-4xl text-gray-700 font-extrabold tracking-wide">
            {product.modelname}
          </h1>
          <div className="mt-5 flex items-center">
            <p className="pr-5 border-r border-gray-200 text-2xl text-gray-700 font-normal">
              ${product.price}
            </p>
            <div className="pl-5 pr-3 flex items-center">
              <div className="flex items-center space-x-1">
                <span className="flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-yellow-400 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                  </svg>
                </span>
                {product.rating % 1 !== 0 && (
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

                <span className="flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-gray-300 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                  </svg>
                </span>
              </div>
              <span className="ml-2 text-sm text-gray-400 font-medium">
                {product.reviewsNbr}
                {' reviews'}
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
          {/* Inspiration */}
          <div className="mt-4 w-full">
            <h3 className="text-sm text-gray-700 font-semibold">Inspiration</h3>
            <div className="flex">
              {product.shoe?.map((shoe) => (
                <button
                  key={shoe.id}
                  type="button"
                  className={` inline-flex flex-col items-center mx-2 mt-4 space-y-2 rounded-3xl border-2 ${
                    selectedShoe === shoe
                      ? 'border border-red-400'
                      : 'border border-gray-200'
                  } text-left`}
                  onClick={() => handleShoeButtonClick(shoe)}
                >
                  <img
                    src={shoe.imageUrl}
                    alt={shoe.alt}
                    className="object-cover p-1 w-22 h-22 rounded-3xl"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Size */}
          <div className="mt-4 w-full">
            <h3 className="text-sm text-gray-700 font-semibold">Size</h3>

            <div className="mt-2 grid grid-cols-2 lg:grid-cols-2 gap-2">
              {product.sizes?.map((size) => (
                <button
                  key={size}
                  type="button"
                  className={`p-3 inline-flex flex-col items-center space-y-2 rounded-lg border-2 ${
                    selectedSize === size
                      ? 'border border-red-400'
                      : 'border border-gray-200'
                  } text-left`}
                  onClick={() => setSelectedSize(size)}
                >
                  <span className="text-base text-gray-700 font-semibold">
                    {size}
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
          {/* TODO: Add to cart form */}
          <div className="mt-10 py-2 w-full inline-block rounded-md bg-red-600 hover:bg-red-700 text-base transition delay-150 text-white font-semibold tracking-wide ">
            <AddToCartForm onAddToCart={handleAddToCart} />
          </div>
          <button
            onClick={handleCustomizeClick}
            className="mt-4 py-2 w-full inline-block rounded-md border-2 outline-8 transition delay-150 text-base text-red font-semibold tracking-wide hover:text-red-600"
          >
            CUSTOMIZE
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

export default ProductDetails;
