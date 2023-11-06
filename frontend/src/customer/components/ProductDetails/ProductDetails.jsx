import {
  CheckIcon,
  ShieldCheckIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../containers/Cart/cartSlice';
import AddToCartForm from '../Cart/AddToCartForm';
import Inspiration from './Inspiration';
import Size from './Size';
import YourDesign from './YourDesign';

const ProductDetails = ({ product }) => {
  const [quantity] = useState(0);
  const [selectedShoe, setSelectedShoe] = useState(null);
  const [selectedShoeImages, setSelectedShoeImages] = useState([]);
  const [selectedSize, setSelectedSize] = useState(null);
  const [showInspiration, setShowInspiration] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (product && product.shoe && product.shoe.length > 0) {
      setSelectedShoe(product.shoe[0]);
    }
  }, [product]);
  const postCartData = async (cartData) => {
    const url = `http://3.1.85.78/api/v1/auth/addcart'
    )}`;
    try {
      const response = await axios.post(url, cartData);
      if (response.status === 200) {
        console.log('Cart data posted successfully:', response.data);
        // Handle the response data or perform any necessary actions
      } else {
        console.error('Error posting cart data:', response.data);
      }
    } catch (error) {
      console.error('Error posting cart data:', error);
    }
  };

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
    const cartItem = {
      productId: product.id,
      name: product.modelname,
      image: product.imageurl,
      price: product.price,
      size: selectedSize,
      shoe: selectedShoe,
      quantity: quantity + 1,
    };

    // Dispatch the action to update the cart state
    const action = addToCart(cartItem);
    dispatch(action);

    // Post the cart data to the API
    postCartData([cartItem]);
  };

  const handleCustomizeClick = () => {
    const customizeUrl = `/customize?modelname=${product.modelname}`;
    window.location.href = customizeUrl;
  };

  const handleShoeButtonClick = (shoe) => {
    setSelectedShoe(shoe);
    setSelectedShoeImages(shoe.imageUrls);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mx-auto py-8 px-4 w-full max-w-7xl bg-white">
      <div className="mx-auto max-w-2xl lg:max-w-none grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="order-2 lg:order-1 relative rounded-sm">
          {selectedShoeImages && selectedShoeImages.length > 0 ? (
            <div className="grid grid-cols-2 gap-2 lg:grid-cols-2 lg:gap-2">
              {selectedShoeImages.map((image, index) => (
                <div key={index}>
                  <img
                    src={image.imageUrl}
                    alt={`Shoe Images ${index}`}
                    className="object-contain w-full h-full rounded-sm"
                  />
                </div>
              ))}
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
              ${product.price}
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
            <div className="mt-10 py-2 w-full inline-block rounded-md bg-red-600 hover:bg-red-700 text-base text-white font-semibold tracking-wide ">
              <AddToCartForm onAddToCart={handleAddToCart} />
            </div>
          ) : null}
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
      {/* <Collection /> */}
    </div>
  );
};

export default ProductDetails;
