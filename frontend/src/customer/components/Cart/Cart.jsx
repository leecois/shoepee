import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';
import {
  getCartAsync,
  removeFromCartAsync,
} from '../../../containers/Cart/cartSlice';
import { cartTotalSelector } from '../../../containers/selectors';

const Cart = ({ cartItems }) => {
  const dispatch = useDispatch();
  const cartTotal = useSelector(cartTotalSelector);

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
      <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
        <h1 className="font-serif font-bold text-2xl text-gray-900">Cart</h1>
        <p className="font-medium text-gray-600">
          {cartItems?.length} items | ${cartTotal}
        </p>
      </div>
      <table className="min-w-full text-sm bg-white">
        <tbody className="divide-y divide-gray-200">
          {cartItems?.map((item) => (
            <tr key={item.cartItemId} className="hover:bg-gray-100">
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <img
                    className="h-20 w-20 object-cover mr-4"
                    src={item.shoe?.imageUrl}
                    alt={item.shoe?.description}
                  />
                  <div>
                    <p className="font-medium text-gray-800 whitespace-nowrap">
                      {item.shoe?.shoeModelDto?.modelname}
                    </p>
                    <p className="text-gray-600 whitespace-nowrap">
                      Size: {item.size}
                    </p>
                    <p className="text-gray-600 whitespace-nowrap">
                      Qty: {item.quantity}
                    </p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 text-gray-800">${item.totalprice}</td>
              <td className="px-6 py-4">
                <button
                  onClick={() => handleRemoveFromCart(item.shoe?.id)}
                  className="flex items-center gap-2 text-gray-600 hover:text-red-600"
                >
                  <CloseIcon className="text-lg" /> Remove
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
