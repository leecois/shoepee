import React from 'react';
import {
  cartProductImagesSelector,
  cartProductNamesSelector,
  cartProductPricesSelector,
  cartProductSizesSelector,
  cartTotalSelector,
} from '../../../containers/selectors';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cartTotal = useSelector(cartTotalSelector);
  const cartName = useSelector(cartProductNamesSelector);
  const cartImage = useSelector(cartProductImagesSelector);
  const cartSize = useSelector(cartProductSizesSelector);
  const cartPrice = useSelector(cartProductPricesSelector);
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

        <tbody className="divide-y divide-gray-200">
          <tr className="hover:bg-gray-100">
            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              <div className="flex items-center">
                <img
                  className="h-full w-32 object-contain mr-4"
                  src={cartImage}
                  alt="cartImage"
                />
                <div>
                  <div className="font-bold">{cartName}</div>
                  <div className="text-sm">SIZE: {cartSize}</div>
                </div>
              </div>
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
              {cartTotal}
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
              {cartPrice}
            </td>
          </tr>
        </tbody>

        <tbody className="divide-y divide-gray-200">
          <tr className="hover:bg-gray-100">
            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              <div className="flex items-center">
                <img
                  className="h-full w-32 object-contain mr-4"
                  src={cartImage}
                  alt="cartImage"
                />
                <div>
                  <div className="font-bold">{cartName}</div>
                  <div className="text-sm">SIZE: {cartSize}</div>
                </div>
              </div>
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
              {cartTotal}
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
              {cartPrice}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
