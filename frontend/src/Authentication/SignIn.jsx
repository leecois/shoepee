import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { unwrapResult } from '@reduxjs/toolkit';
import { login } from '../containers/User/userSlice';
import { useSnackbar } from 'notistack';

const SignIn = ({ goBack, enteredEmail, handleCloseSuccess }) => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  // Validation schema using Yup
  const validationSchema = Yup.object({
    password: Yup.string().required('Password is required'),
  });

  // Formik setup
  const formik = useFormik({
    initialValues: {
      email: enteredEmail,
      password: '',
    },
    validationSchema,
    onSubmit: async (values, { setFieldError }) => {
      try {
        setIsLoading(true);
        const action = login(values);
        const resultAction = await dispatch(action);
        unwrapResult(resultAction);

        enqueueSnackbar('Login Successful!', { variant: 'success' });
        handleCloseSuccess();
      } catch (error) {
        setIsLoading(false);
        if (error.response && error.response.status === 401) {
          setFieldError('password', 'Password is incorrect');
        } else {
          enqueueSnackbar('Failed to login: ' + error.message, {
            variant: 'error',
          });
        }
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
          alt="Shoepee"
          className="w-16 h-16"
        />
      </div>
      <form className="space-y-6" onSubmit={formik.handleSubmit}>
        <h3 className="text-xl font-medium text-black dark:text-black">
          HELLO! WELCOME TO SHOEPEE
        </h3>
        <p className="text-gray-700 dark:text-gray-700">
          We are glad to see you again! Please enter your password to continue.
        </p>
        <div className="text-left">
          <label
            htmlFor="email"
            className="relative mb-4 block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
          >
            <input
              type="email"
              id="email"
              name="email"
              className="peer w-full border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
              value={formik.values.email}
              onChange={formik.handleChange}
              disabled
            />
            <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
              Email
            </span>
          </label>
          <label
            htmlFor="password"
            className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
          >
            <input
              type="password"
              id="password"
              name="password"
              className="peer w-full border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
              Password
            </span>
          </label>
          {formik.errors.password ? (
            <div className="text-sm text-gray-500">
              {formik.errors.password}
            </div>
          ) : null}
        </div>
        {/* <div className="flex justify-between">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="remember"
                aria-describedby="remember"
                type="checkbox"
                className="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded dark:border-gray-500 dark:focus-ring-blue-600 dark:ring-offset-gray-800"
                required=""
              />
            </div>
            <div className="text-sm ml-3">
              <label
                htmlFor="remember"
                className="font-medium text-gray-700 dark:text-gray-500"
              >
                Remember me
              </label>
            </div>
          </div>
        </div> */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full text-white bg-red-900 hover:bg-black focus:ring-4 focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-800 dark:hover-bg-red-700 dark:focus-ring-blue-800"
        >
          {isLoading ? 'Loading...' : 'Sign In'}
        </button>
      </form>
    </div>
  );
};

export default SignIn;
