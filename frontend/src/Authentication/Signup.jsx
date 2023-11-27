import { unwrapResult } from '@reduxjs/toolkit';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { register } from '../containers/User/userSlice';

// Validation schema defined outside the component
const validationSchema = Yup.object({
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long'),
});

const SignUp = ({ goBack, enteredEmail, handleCloseSuccess }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [focused, setFocused] = useState(null);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: enteredEmail,
      password: '',
      phone: '',
      address: '',
      username: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        setIsLoading(true);
        const action = register(values);
        const resultAction = await dispatch(action);
        unwrapResult(resultAction);
        handleCloseSuccess();
      } catch (error) {
        console.log('Failed to register:', error);
      } finally {
        setIsLoading(false);
      }
    },
  });

  return (
    <div>
      <button onClick={goBack} className="absolute left-4 top-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <div className="flex justify-center mb-4">
        <img
          src="https://i.ibb.co/h9qBfDY/logoshoepee.png"
          alt="Your Logo"
          className="w-16 h-16"
        />
      </div>
      <form className="space-y-6" onSubmit={formik.handleSubmit}>
        <h3 className="text-xl font-medium text-dark dark:text-black">
          HELLO! WELCOME TO SHOEPEE
        </h3>
        <p className="text-gray-700 dark:text-gray-500">
          We are glad to see you again! Please create a password to continue.
        </p>
        <div className="text-left">
          <div className="my-5 mr-5 relative overflow-hidden">
            <label
              htmlFor="email"
              className="bg-gradient-to-r text-gray-600 bg-clip-text text-xs  font-semibold uppercase transition-all duration-300 "
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formik.values.email}
              className="form-input w-full border-0 border-b-2 border-gray-300 bg-white bg-opacity-80 placeholder-gray-400 focus:border-gray-300 focus:ring-0"
              disabled
            />
          </div>
          <div className="my-5 mr-5 relative overflow-hidden">
            <label
              htmlFor="password"
              className={`bg-gradient-to-r bg-clip-text text-xs text-transparent font-semibold uppercase transition-all duration-300 ${
                focused === 1
                  ? 'from-red-600 to-pink-600'
                  : 'from-gray-600 to-gray-600'
              }`}
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              className="form-input w-full border-0 border-b-2 border-gray-300 bg-white bg-opacity-80 placeholder-gray-400 focus:border-gray-300 focus:ring-0"
              onFocus={() => setFocused(1)}
              onBlur={() => setFocused(null)}
            />

            <span
              className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-red-400 to-pink-400 transition-all duration-300 ease-in transform ${
                focused === 1 ? 'w-full' : 'w-0'
              }`}
              aria-hidden="true"
            />
          </div>
          {formik.errors.password ? (
            <div className="text-sm text-gray-500">
              {formik.errors.password}
            </div>
          ) : null}
        </div>

        <button
          type="submit"
          disabled={isLoading || !formik.isValid}
          className="w-full text-white bg-red-900 hover:bg-black focus:ring-4 focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-800 dark:hover-bg-red-700 dark:focus-ring-blue-800"
        >
          {isLoading ? (
            <span className="loading loading-spinner"></span>
          ) : (
            'SIGN UP'
          )}
        </button>
      </form>
    </div>
  );
};

export default SignUp;
