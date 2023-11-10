import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCartAsync,
  removeFromCartAsync
} from '../../../containers/Cart/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cart);
  const { cartItems, isLoading, error } = cartState;

  useEffect(() => {
    dispatch(getCartAsync());
  }, [dispatch]);

  const handleRemoveFromCart = (cartItemId) => {
    dispatch(removeFromCartAsync({ cartItemId }));
  };

  // Filter out items that are not available
  const availableCartItems = cartItems.filter(item => item.shoe.status === 'available');

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!availableCartItems || availableCartItems.length === 0) {
    return (
      <div className="flex justify-center items-center h-full">
        <p className="text-lg font-bold text-gray-700">
          THERE ARE NO ITEMS IN YOUR CART.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead className="ltr:text-left rtl:text-right">
          <tr>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-left">
              Item description
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-left">
              Size
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-left">
              Quantity
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-left">
              Price
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-left">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {availableCartItems?.map((item) => (
            <tr key={item.cartItemId} className="hover:bg-gray-100">
              <td className="whitespace-nowrap flex items-center px-4 py-2 font-medium text-gray-900">
                <div className="flex items-center">
                  <img
                    className="h-32 w-32 object-cover mr-4"
                    src={item.shoe?.imageUrl}
                    alt={item.shoe?.description}
                  />
                </div>
                <p>{item.shoe?.shoeModelDto?.modelname}</p>
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {item.size}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {item.quantity}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                ${item.totalprice.toFixed(2)}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                <button
                  onClick={() => handleRemoveFromCart(item.cartItemId)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove from Cart
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
