import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCartAsync,
  removeFromCartAsync,
} from '../../../containers/Cart/cartSlice';

const Cart = ({ cartItems }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartAsync());
  }, [dispatch]);

  const handleRemoveFromCart = (cartItemId) => {
    dispatch(removeFromCartAsync(cartItemId))
      .then(() => {
        dispatch(getCartAsync());
      })
      .catch((error) => {
        console.error('Error removing item from cart:', error);
      });
  };



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
          {cartItems?.map((item) => (
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
                  onClick={() => handleRemoveFromCart(item.shoe?.id)}
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
