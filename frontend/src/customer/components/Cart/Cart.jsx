import CloseIcon from '@mui/icons-material/Close';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  getCartAsync,
  removeFromCartAsync,
} from '../../../containers/Cart/cartSlice';
import { useNavigate } from 'react-router-dom';

const Cart = ({ cartItems }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const navigateToProductDetail = (productId) => {
    navigate(`/products/${productId}`);
  };

  useEffect(() => {
    dispatch(getCartAsync());
  }, [dispatch]);

  const handleRemoveFromCart = (cartItemId) => {
    dispatch(removeFromCartAsync(cartItemId))
      .then(() => dispatch(getCartAsync()))
      .catch((error) => console.error('Error removing item from cart:', error));
  };

  return (
    <div className="overflow-x-auto">
      <div className="flex justify-between items-center px-6 py-4 border-b border-gray-300">
        <h1 className="font-bold text-2xl text-gray-900">Cart</h1>
        <p className="font-medium font-sans text-gray-700">
          {cartItems?.length} items
        </p>
      </div>
      <div className="min-w-full">
        <div className="divide-y divide-gray-300">
          {cartItems
            ?.slice()
            .sort((a, b) => a.cartItemId - b.cartItemId)
            .map((item) => (
              <div key={item.cartItemId} className="hover:bg-neutral-50">
                <div className="flex items-center justify-between px-6 py-4">
                  <div className="flex items-center">
                    {/* Image and Name Container */}
                    <div className="mr-4">
                      <h2
                        className="text-lg font-bold pb-4 text-gray-800 cursor-pointer"
                        onClick={() =>
                          navigateToProductDetail(
                            item.shoe?.shoeModelDto?.modelname
                          )
                        }
                      >
                        {item.shoe?.shoeModelDto?.modelname}
                      </h2>
                      <div className="flex items-center gap-4">
                        <img
                          className="h-24 w-24 object-cover rounded-md cursor-pointer"
                          src={item.shoe?.imageUrl}
                          alt={item.shoe?.description}
                          onClick={() =>
                            navigateToProductDetail(
                              item.shoe?.shoeModelDto?.modelname
                            )
                          }
                        />
                        <div>
                          <p className="text-gray-600">
                            Inspiration Name: {item.shoe?.name}
                          </p>
                          <p className="text-gray-600">Size: {item.size}</p>
                          <p className="text-gray-600">Qty: {item.quantity}</p>
                        </div>
                      </div>
                    </div>
                    {/* Size and Quantity */}
                  </div>
                  <div>
                    <p className="text-lg font-medium text-gray-800">
                      {item.totalprice.toLocaleString('de-DE')} VND
                    </p>
                  </div>
                </div>
                <div className="flex justify-end px-6 py-4">
                  <button
                    onClick={() => handleRemoveFromCart(item.cartItemId)}
                    className="flex items-center gap-2 text-gray-600 hover:text-red-600"
                  >
                    <CloseIcon className="text-lg" /> Remove Item
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
