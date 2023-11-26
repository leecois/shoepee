import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import {
  getCartAsync,
  placeOrderAsync,
} from '../../../containers/Cart/cartSlice';
import userApi from '../../../api/userApi';
import { fetchOrders } from '../../../containers/Cart/orderSlice';
import { useNavigate } from 'react-router-dom';

const validationSchema = Yup.object({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  email: Yup.string()
    .email('Please enter a valid email address.')
    .required('Required'),
  address: Yup.string().required('Required'),
  phone: Yup.string().required('Required'),
  paymentMethod: Yup.string().required('Required'),
});

const Checkout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [orderDetails, setOrderDetails] = useState({
    customerName: '',
    orderAddress: '',
    orderPhone: '',
  });
  const cartId = useSelector((state) => state.cart.cartId);
  const cartEmail = useSelector((state) => state.cart.user?.email);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const orders = useSelector((state) => state.orders.content);
  const [sortedOrders, setSortedOrders] = useState([]);
  const [focused, setFocused] = useState(null);

  const initialValues = {
    firstName: '',
    lastName: '',
    email: cartEmail || '',
    address: '',
    phone: '',
    paymentMethod: 'COD',
  };

  const handleConfirm = (values) => {
    setOrderDetails({
      customerName: `${values.firstName} ${values.lastName}`,
      orderAddress: values.address,
      orderPhone: values.phone,
      paymentMethod: values.paymentMethod,
    });
    setIsModalOpen(true);
  };

  const handleSubmit = async () => {
    const orderData = {
      ...orderDetails,
      cartId,
    };

    try {
      const action = await dispatch(placeOrderAsync(orderData));
      if (!action.error) {
        dispatch(getCartAsync());
        setIsModalOpen(false);
        setOrderPlaced(true); // Indicate successful order placement
      }
    } catch (error) {
      console.error('Order submission failed:', error);
    }
  };

  useEffect(() => {
    if (orderPlaced) {
      dispatch(fetchOrders());
      setOrderPlaced(false); // Reset the flag
    }
  }, [orderPlaced, dispatch]);

  useEffect(() => {
    // Sort orders
    if (orders.length > 0) {
      const sorted = [...orders].sort(
        (a, b) => new Date(b.orderCreateAt) - new Date(a.orderCreateAt)
      );
      setSortedOrders(sorted);
    }
  }, [orders]);

  useEffect(() => {
    const latestOrder = sortedOrders[0];
    if (
      latestOrder &&
      latestOrder.paymentMethod === 'VNPAY' &&
      orderDetails.paymentMethod === 'VNPAY'
    ) {
      const orderToPay = {
        orderId: latestOrder.orderId,
      };

      userApi
        .payOrder(orderToPay)
        .then((response) => {
          window.open(response, '_blank');
          navigate('/user/purchase');
        })
        .catch((error) => {
          console.error('Payment failed:', error);
        });
    }
  }, [sortedOrders, orderDetails, navigate]);

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-screen-lg mx-auto p-6">
      <h1 className="text-3xl font-mono font-bold text-gray-800 mb-8">
        Shipping Informations
      </h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleConfirm}
      >
        <Form className="space-y-4">
          <div className="mb-4">
            <label
              htmlFor="firstName"
              className={`bg-gradient-to-r bg-clip-text text-xs text-transparent font-semibold uppercase transition-all duration-300 ${
                focused === 3
                  ? 'from-gray-800 to-gray-400'
                  : 'from-gray-600 to-gray-600'
              }`}
            >
              First Name
            </label>
            <Field
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              className="form-input w-full border-0 border-b-2 border-gray-300 bg-white bg-opacity-80 placeholder-gray-400 focus:border-gray-300 focus:ring-0"
            />

            <ErrorMessage
              name="firstName"
              component="div"
              className={`bg-gradient-to-r bg-clip-text text-xs text-transparent font-semibold uppercase transition-all duration-300 ${
                focused === 3
                  ? 'from-red-800 to-red-400'
                  : 'from-red-600 to-red-600'
              }`}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="lastName"
              className={`bg-gradient-to-r bg-clip-text text-xs text-transparent font-semibold uppercase transition-all duration-300 ${
                focused === 3
                  ? 'from-gray-800 to-gray-400'
                  : 'from-gray-600 to-gray-600'
              }`}
            >
              Last Name
            </label>
            <Field
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              className="form-input w-full border-0 border-b-2 border-gray-300 bg-white bg-opacity-80 placeholder-gray-400 focus:border-gray-300 focus:ring-0"
            />
            <ErrorMessage
              name="lastName"
              component="div"
              className={`bg-gradient-to-r bg-clip-text text-xs text-transparent font-semibold uppercase transition-all duration-300 ${
                focused === 3
                  ? 'from-red-800 to-red-400'
                  : 'from-red-600 to-red-600'
              }`}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="address"
              className={`bg-gradient-to-r bg-clip-text text-xs text-transparent font-semibold uppercase transition-all duration-300 ${
                focused === 3
                  ? 'from-gray-800 to-gray-400'
                  : 'from-gray-600 to-gray-600'
              }`}
            >
              Address
            </label>
            <Field
              type="text"
              id="address"
              name="address"
              placeholder=""
              className="form-input w-full border-0 border-b-2 border-gray-300 bg-white bg-opacity-80 placeholder-gray-400 focus:border-gray-300 focus:ring-0"
            />
            <ErrorMessage
              name="address"
              component="div"
              className={`bg-gradient-to-r bg-clip-text text-xs text-transparent font-semibold uppercase transition-all duration-300 ${
                focused === 3
                  ? 'from-red-800 to-red-400'
                  : 'from-red-600 to-red-600'
              }`}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="phone"
              className={`bg-gradient-to-r bg-clip-text text-xs text-transparent font-semibold uppercase transition-all duration-300 ${
                focused === 3
                  ? 'from-gray-800 to-gray-400'
                  : 'from-gray-600 to-gray-600'
              }`}
            >
              Phone
            </label>
            <Field
              type="text"
              id="phone"
              name="phone"
              placeholder="(+84) 123 456 789"
              className="form-input w-full border-0 border-b-2 border-gray-300 bg-white bg-opacity-80 placeholder-gray-400 focus:border-gray-300 focus:ring-0"
            />
            <ErrorMessage
              name="phone"
              component="div"
              className={`bg-gradient-to-r bg-clip-text text-xs text-transparent font-semibold uppercase transition-all duration-300 ${
                focused === 3
                  ? 'from-red-800 to-red-400'
                  : 'from-red-600 to-red-600'
              }`}
            />
          </div>

          <div className="mx-auto py-6">
            <h1 className="text-3xl font-mono font-bold text-gray-800 mb-8">
              Payment Method
            </h1>
            <div className="space-y-4">
              {/* COD Option */}
              <label className="flex items-center space-x-3">
                <Field
                  type="radio"
                  name="paymentMethod"
                  value="COD"
                  className="radio text-black focus:ring-black"
                />
                <span className="text-sm font-medium text-gray-700">
                  COD (Cash On Delivery)
                </span>
              </label>

              {/* Bank Online Option */}
              <label className="flex items-center space-x-3">
                <Field
                  type="radio"
                  name="paymentMethod"
                  value="VNPAY"
                  className="radio text-black focus:ring-black"
                />
                <div className="flex items-center space-x-2">
                  <img
                    src="/vnpay.svg"
                    alt="Bank Logo"
                    className="h-6 w-auto"
                  />
                </div>
              </label>
            </div>
            <ErrorMessage
              name="paymentMethod"
              component="div"
              className="text-red-500 mt-2"
            />
          </div>

          <button
            type="submit"
            className="w-full btn bg-black text-white hover:bg-gray-700 px-6 py-3 rounded-md font-semibold"
          >
            Place Order
          </button>
        </Form>
      </Formik>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative rounded-lg bg-white p-8 shadow-2xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Confirm Address
            </h2>
            <p className="mt-2 text-md text-gray-500">
              <span className="font-semibold">Is this address correct?</span> If
              yes, click 'Yes, I'm sure'.
            </p>

            <p className="mt-2 text-md ml-4 text-gray-500">
              {orderDetails.customerName}
            </p>
            <p className="mt-2 text-md ml-4 text-gray-500">
              {orderDetails.orderAddress}
            </p>

            <p className="mt-2 text-md text-gray-500">
              <span className="font-semibold">Not correct? </span>Click 'No, go
              back' to go back and make changes.
            </p>

            <div className="mt-4 flex gap-2">
              <button
                type="button"
                className="rounded bg-meta-3/10 px-4 py-2 text-sm font-medium text-meta-3"
                onClick={handleSubmit}
              >
                Yes, I'm sure
              </button>

              <button
                type="button"
                className="rounded bg-gray-50 px-4 py-2 text-sm font-medium text-gray-600"
                onClick={handleCancel}
              >
                No, go back
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
