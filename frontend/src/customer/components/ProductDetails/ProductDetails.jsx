import { Switch } from '@headlessui/react';
import { ShieldCheckIcon } from '@heroicons/react/24/outline';
import CloseIcon from '@mui/icons-material/Close';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Alert, Collapse, IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  addToCartAsync,
  addToCartCustomizationAsync,
  getCartAsync,
} from '../../../containers/Cart/cartSlice';
import { fetchShoeImages } from '../../../hooks/CartData';
import AlertSign from '../AlertSign';
import Inspiration from './Inspiration';
import Size from './Size';
import YourDesign from './YourDesign';

const ProductDetails = ({ product, userLoggedIn }) => {
  const [hasShoe, setHasShoe] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [isToastOpen, setIsToastOpen] = useState(false);
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

  const handleBuyCustomization = async () => {
    if (!userLoggedIn) {
      setIsAlertOpen(true);
      return;
    }
    const customizationItem = {
      shoeId: selectedShoe.id,
      quantity: 1,
    };

    dispatch(addToCartCustomizationAsync(customizationItem)).then((action) => {
      if (!action.error) {
        dispatch(getCartAsync());
      }
    });
  };

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
        // Refetch the cart data
        dispatch(getCartAsync());
      }
    });
  };

  const handleBuyClick = () => {
    if (hasShoe) {
      handleBuyCustomization();
    } else {
      handleAddToCart();
    }
  };

  const handleToggle = () => {
    setHasShoe(!hasShoe);
    // Cập nhật giá cả nếu cần
    // ...
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
    <div className="min-h-screen mx-auto py-8 px-4 w-full max-w-7xl bg-white">
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
          <div className="flex gap-2 items-center justify-between mt-4">
            <Switch
              checked={hasShoe}
              onChange={handleToggle}
              className={`toggle`}
            >
              <span
                className={`${hasShoe ? 'translate-x-6' : 'translate-x-1'}`}
              />
            </Switch>
            <div
              className="tooltip tooltip-right"
              data-tip="I already own this shoe model"
            >
              <InfoOutlinedIcon viewBox="0 0 24 26" />
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
            <YourDesign />
          )}

          {!hasShoe && (
            <Size
              product={product}
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
            />
          )}

          <div className="mt-4 py-2 w-full inline-block rounded-md outline-8 transition delay-150 text-base text-red-300 font-semibold tracking-wide ">
            <AlertSign
              isOpen={isAlertOpen}
              onClose={() => setIsAlertOpen(false)}
            />
            <Collapse in={isToastOpen}>
              <Alert
                severity="error"
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      setIsToastOpen(false);
                    }}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
                sx={{ mb: 2 }}
              >
                Please select a size before adding to cart!
              </Alert>
            </Collapse>

            <button
              onClick={handleBuyClick}
              className="w-full btn inline-block btn-neutral btn-active rounded-md font-semibold"
            >
              {hasShoe ? 'Buy Customization' : 'Buy Shoe + Customization'}
            </button>
          </div>

          <button
            onClick={handleCustomizeClick}
            className="mt-4 py-2 w-full inline-block rounded-md border-2 border-black outline-8 transition delay-150 text-base font-semibold tracking-wide hover:bg-black hover:text-white"
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
