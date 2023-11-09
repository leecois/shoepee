import { Checkbox } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../containers/User/userSlice";
import { unwrapResult } from "@reduxjs/toolkit";

const SignUp = ({ goBack, enteredEmail, handleCloseSuccess }) => {
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = new FormData(event.currentTarget);
      const userData = {
        email: enteredEmail,
        password: data.get("password"),
        address: data.get("address"),
        username: data.get("username") || enteredEmail, // Auto set username to email
        phone: 123123123,
      };

      setIsLoading(true);

      const action = register(userData);
      const resultAction = await dispatch(action);
      const user = unwrapResult(resultAction);

      // Close modal on successful registration
      handleCloseSuccess();
    } catch (error) {
      console.log("Failed to register:", error);
    } finally {
      setIsLoading(false);
    }
  };

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
        <img src="logoshoepee.png" alt="Your Logo" className="w-16 h-16" />
      </div>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <h3 className="text-xl font-medium text-white dark:text-black">
          HELLO! WELCOME TO SHOEPEE
        </h3>
        <p className="text-gray-700 dark:text-gray-500">
          We are glad to see you again! Please create a password to continue.
        </p>
        <div className="text-left">
          <label
            htmlFor="Email"
            className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
          >
            <input
              type="email"
              name="email"
              id="email"
              value={enteredEmail}
              className="peer w-full border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
              required=""
              readOnly
            />
            <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
              Email
            </span>
          </label>
        </div>
        <div className="text-left">
          <label
            htmlFor="Username"
            className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
          >
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="peer w-full border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
              required=""
            />
            <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
              Password
            </span>
          </label>
        </div>
        <div className="text-left">
          <div className="flex items-center">
            <Checkbox className="text-white dark:text-black" />
            <label className="text-sm">I have read the Shoepee Terms</label>
          </div>
          <div className="flex items-center">
            <Checkbox className="text-white dark:text-black" />
            <label className="text-sm">
              I have read and agree to the Privacy Policy
            </label>
          </div>
        </div>
        <div className="flex justify-between">
          <button
            type="submit"
            className="w-full text-white bg-red-900 hover:bg-black focus:ring-4 focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-800 dark:hover-bg-red-700 dark:focus-ring-blue-800"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "SIGN UP"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;