import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../../../containers/Cart/cartSlice';

const Cart = ({ cartItems }) => {
  const dispatch = useDispatch();
  cartItems = useSelector((state) => state.cart.cartItems);
  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="flex justify-center items-center h-full">
        <p className="text-lg font-bold text-gray-700">
          THERE ARE NO ITEMS IN YOUR CART.
        </p>
      </div>
    );
  }

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead className="ltr:text-left rtl:text-right">
          <tr>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Item description
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Style
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Price
            </th>
          </tr>
        </thead>

        {cartItems?.map((item) => (
          <tbody className="divide-y divide-gray-200">
            <tr className="hover:bg-gray-100">
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                <div className="flex items-center">
                  <img
                    className="h-full w-32 object-contain mr-4"
                    src={item.image}
                    alt="cartImage"
                  />
                  <div>
                    <div className="font-bold">{item.name}</div>
                    <div className="text-sm">SIZE: {item.price}</div>
                    <button onClick={() => handleRemoveFromCart(item.id)}>
                      Remove from Cart
                    </button>
                  </div>
                </div>
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700"></td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {item.size}
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default Cart;
