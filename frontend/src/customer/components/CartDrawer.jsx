import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import * as React from 'react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import useProductDetail from '../../hooks/useProductDetail';
import useSizeData from '../../hooks/useSizeData';
import { addToCart } from '../../containers/Cart/cartSlice';
import { useDispatch } from 'react-redux';
import StorageKeys from '../../constants/storage-keys';
import axios from 'axios';
import { Snackbar } from '@mui/material';

export default function CartDrawer() {
  const [quantity] = useState(0);
  const dispatch = useDispatch();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size before adding to cart.');
      return;
    }
    const cartItem = {
      productId: product.id,
      name: product.modelname,
      image: product.imageurl,
      price: product.price,
      size: selectedSize,
      quantity: quantity + 1,
    };

    // Dispatch the action to update the cart state
    const action = addToCart(cartItem);
    dispatch(action);
    // Post the cart data to the API
    postCartData([cartItem]);
    setSnackbarOpen(true);
  };
  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackbarOpen(false);
  };
  const postCartData = async (cartData) => {
    const url = `http://3.1.85.78/api/v1/auth/add?token=${localStorage.getItem(
      StorageKeys.TOKEN
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
  const { sizeList } = useSizeData();
  const [state, setState] = useState({
    right: false,
  });
  const [searchParams] = useSearchParams();
  const modelname = searchParams.get('modelname');
  const { product } = useProductDetail(modelname);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const [selectedSize, setSelectedSize] = useState(null);

  const buttonLabel = `$${product?.price}.00`;

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 330 }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <img
        alt="shoe"
        className="object-contain w-full rounded-sm"
        src={product?.imageurl}
      />
      <div className="p-4">
        <div className="flex justify-between">
          <h1 className="font-mono text-2xl font-bold">{product.modelname}</h1>
          <p className="font-mono text-lg font-bold">${product?.price}.00</p>
        </div>

        <h3 className="text-sm text-gray-700 font-semibold">Size</h3>
        <div className="mt-2 grid grid-cols-2 lg:grid-cols-2 gap-2">
          {sizeList?.map((size) => (
            <button
              key={size.id}
              type="button"
              className={`p-3 inline-flex flex-col items-center space-y-2 rounded-lg border-2 ${
                selectedSize === size.size
                  ? 'border border-red-400'
                  : 'border border-gray-200'
              } text-left`}
              onClick={() => setSelectedSize(size.size)}
            >
              <span className="text-base text-gray-700 font-semibold">
                {size.size}
              </span>
            </button>
          ))}
        </div>

        <button
          onClick={handleAddToCart}
          className="font-mono mt-4 p-2 mb-2 border-meta-3 border-b-2 rounded hover:bg-gray-100 w-full"
        >
          Add to Cart
        </button>
        <button
          className="font-mono mt-4 p-2 mb-2 border-meta-6 border-b-2 rounded hover:bg-gray-100 w-full"
          onClick={() => (window.location.href = '/cart')}
        >
          Go to Cart
        </button>
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={3000}
          onClose={handleSnackbarClose}
          message="Item added to cart"
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        />
      </div>
    </Box>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <button
            onClick={toggleDrawer(anchor, true)}
            className="glass font-mono text-white p-2 mb-2 border-b-2 border-meta-3 font-bold rounded hover:bg-gray-500 w-full"
          >
            {buttonLabel} BUY
          </button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
