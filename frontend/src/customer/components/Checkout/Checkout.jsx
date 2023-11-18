import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
  getCartAsync,
  placeOrderAsync,
} from '../../../containers/Cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

const validationSchema = Yup.object({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  email: Yup.string()
    .email('Please enter a valid email address.')
    .required('Required'),
  address: Yup.string().required('Required'),
  phone: Yup.string().required('Required'),
});

const Checkout = ({ onSuccess, disabled }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [orderAddress, setOrderAddress] = useState('');
  const cartId = useSelector((state) => state.cart.cartId);
  const cartEmail = useSelector((state) => state.cart.user.email);

  const initialValues = {
    firstName: '',
    lastName: '',
    email: cartEmail || '',
    address: '',
    phone: '',
  };

  const handleConfirm = (values) => {
    setCustomerName(`${values.firstName} ${values.lastName}`);
    setOrderAddress(values.address);
    setIsModalOpen(true);
  };

  const handleSubmit = async () => {
    const orderData = {
      customerName,
      orderAddress,
      orderPhone: initialValues.phone,
      cartId,
    };

    try {
      const action = await dispatch(placeOrderAsync(orderData));
      if (!action.error) {
        dispatch(getCartAsync());
        setIsModalOpen(false);
        onSuccess();
      }
    } catch (error) {
      // Handle submission errors
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-screen-lg mx-auto p-6">
      <h1 className="text-3xl font-serif font-bold text-gray-800 mb-8">
        1. Shipping & Delivery{' '}
        <LockOutlinedIcon className="align-middle text-lg" />
      </h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleConfirm}
      >
        <Form disabled={disabled} className="space-y-4">
          <div className="mb-4">
            <label htmlFor="firstName" className="label">
              <span className="label-text">First Name*</span>
            </label>
            <Field
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Type here"
              className="input input-bordered w-full max-w-full"
            />
            <ErrorMessage
              name="firstName"
              component="div"
              className="text-red-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="lastName" className="label">
              <span className="label-text">Last Name*</span>
            </label>
            <Field
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Type here"
              className="input input-bordered w-full max-w-full"
            />
            <ErrorMessage
              name="lastName"
              component="div"
              className="text-red-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="label">
              <span className="label-text">Email*</span>
            </label>
            <Field
              type="text"
              id="email"
              name="email"
              placeholder="Type here"
              className="input input-bordered w-full max-w-full"
              disabled
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="address" className="label">
              <span className="label-text">Address*</span>
            </label>
            <Field
              type="text"
              id="address"
              name="address"
              placeholder="Type here"
              className="input input-bordered w-full max-w-full"
            />
            <ErrorMessage
              name="address"
              component="div"
              className="text-red-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="label">
              <span className="label-text">Phone*</span>
            </label>
            <Field
              type="text"
              id="phone"
              name="phone"
              placeholder="Type here"
              className="input input-bordered w-full max-w-full"
            />
            <ErrorMessage
              name="phone"
              component="div"
              className="text-red-500"
            />
          </div>

          <button
            type="submit"
            disabled={disabled}
            className="w-full py-3 rounded-md bg-black text-white hover:bg-gray-800 transition-all"
          >
            Save and Continue
          </button>
        </Form>
      </Formik>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative rounded-lg bg-white p-8 shadow-2xl">
            <h2 className="text-2xl font-serif font-bold text-gray-800 mb-4">
              Confirm Address
            </h2>
            <p className="mt-2 text-md text-gray-500">
              <span className="font-semibold">Is this address correct?</span> If
              yes, click 'Yes, I'm sure'.
            </p>

            <p className="mt-2 text-md ml-4 text-gray-500">{customerName}</p>
            <p className="mt-2 text-md ml-4 text-gray-500">{orderAddress}</p>

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
