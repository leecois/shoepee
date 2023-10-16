import { Checkbox } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, register } from "../../../../../State/Auth/Action";

const SignUp = ({ goBack, enteredEmail }) => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector((store) => store);

  useEffect(() => {
    if (jwt) {
      dispatch(getUser());
    }
  }, [jwt, auth.jwt]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userData = {
      email: data.get("email"),
      password: data.get("password"),
    };
    dispatch(register(userData));
    console.log("userData", userData);
  };
  const [password, setPassword] = useState("");

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
        <img src="./logoshoepee.png" alt="Your Logo" className="w-16 h-16" />
      </div>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <h3 className="text-xl font-medium text-white dark:text-black">
          HELLO! WELCOME TO SHOEPEE
        </h3>
        <p className="text-gray-700 dark:text-gray-300">
          We are glad to see you again! Please create a password to continue.
        </p>
        <div>
          <label
            htmlFor="email"
            className="text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Your email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={enteredEmail} // Sử dụng enteredEmail thay vì email
            className="bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-black focus:border-black w-full p-2.5"
            required=""
            readOnly
          />
        </div>
        <div className="text-left">
          <label
            htmlFor="password"
            className="text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Create Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-black focus:border-black w-full p-2.5"
            required=""
          />
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
          >
            SIGN UP
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
