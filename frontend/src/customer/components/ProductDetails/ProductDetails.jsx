import { ShieldCheckIcon } from '@heroicons/react/24/outline';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  addToCartAsync,
  getCartAsync,
} from '../../../containers/Cart/cartSlice';
import { fetchShoeImages } from '../../../hooks/CartData';
import Alert from '../Alert';
import Inspiration from './Inspiration';
import Size from './Size';
import YourDesign from './YourDesign';

const ProductDetails = ({ product, userLoggedIn }) => {
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [selectedShoe, setSelectedShoe] = useState(null);
  const [selectedShoeImages, setSelectedShoeImages] = useState([]);
  const [selectedSize, setSelectedSize] = useState(null);
  const [showInspiration, setShowInspiration] = useState(true);
  const dispatch = useDispatch();
  const handleCustomizeClick = () => {
    const customizeUrl = `/customize?modelname=${product.modelname}`;
    window.location.href = customizeUrl;
  };

  const handleShoeButtonClick = (shoe) => {
    setSelectedShoe(shoe);
    setSelectedShoeImages(shoe.imageUrls);
  };

  useEffect(() => {
    setSelectedShoe(product?.shoes?.[0] || null);
  }, [product]);

  useEffect(() => {
    if (selectedShoe?.id) {
      fetchShoeImages(selectedShoe.id)
        .then(setSelectedShoeImages)
        .catch(console.error);
    }
  }, [selectedShoe]);

  const handleAddToCart = async () => {
    if (!userLoggedIn) {
      setIsAlertOpen(true);
      return;
    }

    const cartItem = {
      shoeId: selectedShoe.id,
      size: selectedSize,
      quantity: 1,
    };

    dispatch(addToCartAsync(cartItem)).then((action) => {
      if (!action.error) {
        // Refetch the cart data
        dispatch(getCartAsync());
      }
    });
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  const renderShoeImages = () => {
    if (!selectedShoeImages.length)
      return <p>No images available for the selected shoe.</p>;
    return selectedShoeImages.map((image, index) => (
      <div key={image.id || index}>
        <img
          src={image.imageUrl}
          alt={`Shoe Images ${index}`}
          className="object-contain w-full h-full rounded-sm"
        />
      </div>
    ));
  };

  return (
    <div className="mx-auto py-8 px-4 w-full max-w-7xl bg-white">
      <div className="mx-auto max-w-2xl lg:max-w-none grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="order-2 lg:order-1 relative rounded-sm">
          {selectedShoeImages && selectedShoeImages.length > 0 ? (
            <div className="grid grid-cols-2 gap-2 lg:grid-cols-2 lg:gap-2">
              {renderShoeImages()}
            </div>
          ) : selectedShoe ? (
            <div>
              <img
                src={selectedShoe.imageUrl}
                alt="Shoe Images"
                className="object-contain w-full h-full rounded-sm"
              />
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
            <p className="pr-5 border-r border-gray-200 text-2xl text-gray-700 font-sans">
              ${selectedShoe?.price}
            </p>
            <div className="pl-5 pr-3 flex items-center">
              <span className="ml-2 text-sm text-gray-400 font-medium">
                Custom Shoes
              </span>
            </div>
          </div>
          <div className="mt-4">
            <button
              onClick={() => setShowInspiration(true)}
              className={`mr-4 text-xl font-semibold border-b-4 ${
                showInspiration ? 'border-red-600' : ''
              }`}
            >
              Inspiration
            </button>
            <button
              onClick={() => setShowInspiration(false)}
              className={`text-xl font-semibold border-b-4 ${
                !showInspiration ? 'border-red-600' : ''
              }`}
            >
              Your Designs
            </button>
          </div>

          {/* Toggle between Inspiration and YourDesign */}
          {showInspiration ? (
            <Inspiration
              product={product}
              selectedShoe={selectedShoe}
              handleShoeButtonClick={handleShoeButtonClick}
            />
          ) : (
            <YourDesign
              selectedShoeImages={selectedShoeImages}
              handleShoeButtonClick={handleShoeButtonClick}
            />
          )}

          {/* Size */}
          <Size
            product={product}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
          />

          {/* TODO: Add to cart form */}

          {selectedSize && selectedShoe ? (
            <div className="mt-4 py-2 w-full inline-block rounded-md outline-8 transition delay-150 text-base text-red-300 font-semibold tracking-wide ">
              <Alert
                isOpen={isAlertOpen}
                onClose={() => setIsAlertOpen(false)}
              />

              <button
                onClick={handleAddToCart}
                className="w-full btn inline-block btn-neutral btn-active rounded-md font-semibold"
              >
                Add to Cart
              </button>
            </div>
          ) : (
            <div className="mt-4 py-2 w-full inline-block rounded-md outline-8 transition delay-150 text-base text-red-300 font-semibold tracking-wide ">
              <button
                disabled="disabled"
                className="w-full btn inline-block rounded-md text-black-2 font-semibold"
              >
                Add to Cart
              </button>
            </div>
          )}
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
      {/* <h3 className="mt-10 text-lg text-gray-700 font-semibold">Overview</h3> */}
      <p className="mt-2 text-md text-gray-500 font-medium">
        {product.description}
      </p>
    </div>
  );
};

export default ProductDetails;
