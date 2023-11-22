import { ShieldCheckIcon } from '@heroicons/react/24/outline';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  addToCartAsync,
  getCartAsync,
} from '../../../containers/Cart/cartSlice';
import Toast from '../Alert/Alert';
import { useAlert } from '../Alert/AlertContext';
import AlertSign from '../AlertSign';
import Inspiration from './Inspiration';
import Size from './Size';
import YourDesign from './YourDesign';

const ProductDetails = ({ product, userLoggedIn }) => {
  const { showAlert } = useAlert();
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [isToastOpen, setIsToastOpen] = useState(false);
  const [selectedShoe, setSelectedShoe] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [showInspiration, setShowInspiration] = useState(true);

  const dispatch = useDispatch();
  const handleCustomizeClick = () => {
    const customizeUrl = `/customize?modelname=${product.modelname}`;
    window.location.href = customizeUrl;
  };

  const handleShoeButtonClick = (shoe) => {
    setSelectedShoe(shoe);
  };

  useEffect(() => {
    if (product?.customizedShoes && Array.isArray(product.customizedShoes)) {
      const sortedShoes = [...product.customizedShoes].sort(
        (a, b) => a.id - b.id
      );
      setSelectedShoe(sortedShoes[0]);
    } else {
      setSelectedShoe(null);
    }
  }, [product]);

  const handleAddToCart = async () => {
    if (!userLoggedIn) {
      setIsAlertOpen(true);
      return;
    }

    if (!selectedSize) {
      setIsToastOpen(true);
      setTimeout(() => setIsToastOpen(false), 3000);
      return;
    }

    const cartItem = {
      shoeId: selectedShoe.id,
      size: selectedSize,
      quantity: 1,
    };

    dispatch(addToCartAsync(cartItem)).then((action) => {
      if (!action.error) {
        dispatch(getCartAsync());
        showAlert('Added to Bag', 'success');
      }
    });
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen mx-auto py-8 px-4 w-full max-w-7xl bg-white">
      <div className="mx-auto max-w-2xl lg:max-w-none grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="order-2 lg:order-1 rounded overflow-hidden">
          {selectedShoe ? (
            <div className="flex justify-center items-center rounded-lg shadow-lg border-2 p-1">
              <img
                src={selectedShoe?.imageUrl}
                alt="Shoe Images"
                className="object-cover w-full h-full shadow-lg rounded-lg"
              />
            </div>
          ) : (
            <div className="flex items-center justify-center bg-black border-yellow-500 border-2 p-4">
              <p className="text-center text-yellow-500 font-mono text-xl">
                No images available for the selected shoe.
              </p>
            </div>
          )}
        </div>

        <div className="order-1 lg:order-2 col-span-full lg:col-span-1 lg:max-w-xl flex flex-col items-start">
          <h1 className="text-4xl font-mono text-black font-extrabold">
            {product.modelname}{' '}
          </h1>
          <div className="mt-5 flex items-center">
            <p className="text-2xl font-mono text-black pr-5">
              ${selectedShoe?.price}
            </p>
          </div>
          <div className="mt-4 ">
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
            <YourDesign />
          )}

          <Size
            product={product}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
            isToastOpen={isToastOpen}
            setIsToastOpen={setIsToastOpen}
          />

          <div className="mt-4 py-2 w-full inline-block rounded-md outline-8 transition delay-150 text-base text-red-300 font-semibold tracking-wide ">
            <AlertSign
              isOpen={isAlertOpen}
              onClose={() => setIsAlertOpen(false)}
            />
          </div>

          <button
            onClick={handleAddToCart}
            className="mt-4 btn btn-outline btn-block"
          >
            Add To Cart
          </button>
          <p className="mt-3 w-full inline-flex justify-center items-center text-sm text-gray-500 font font-semibold">
            <ShieldCheckIcon className="mr-2 w-4 h-4" />
            Lifetime Guarantee
          </p>
        </div>
      </div>
      {/* <h3 className="mt-10 text-lg text-gray-700 font-semibold">Overview</h3> */}
      <div className="mt-8 p-6 border-2 rounded-lg shadow-lg">
        <h1 className="text-2xl text-black-2 font-mono font-bold mb-4">
          {selectedShoe?.name}
        </h1>
        <p className="text-black-2 text-lg font-light">
          {selectedShoe?.description}
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;
