import React, { useState } from "react";

const SignIn = ({ goBack, enteredEmail }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userData = {
      email: data.get("email"),
      password: data.get("password"),
    };
    console.log("userData", userData);
  };
  const [email, setEmail] = useState("");
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
        <img src="./logoshoepee.png" alt="Shoepee" className="w-16 h-16" />
      </div>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <h3 className="text-xl font-medium text-white dark:text-black">
          HELLO! WELCOME TO SHOEPEE
        </h3>
        <p className="text-gray-700 dark:text-gray-700">
          We are glad to see you again! Please enter your password to continue.
        </p>
        <div className="text-left">
          <label
            htmlFor="email"
            className="text-sm font-medium text-gray-900 dark:text-gray-500"
          >
            Email
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
            className="text-sm font-medium text-gray-900 dark:text-gray-500"
          >
            Password
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
        <div className="flex justify-between">
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
          <a
            href="#"
            className="text-sm text-blue-700 hover:underline dark:text-blue-500"
          >
            Lost Password?
          </a>
        </div>
        <button
            type="submit"
            className="w-full text-white bg-red-900 hover:bg-black focus:ring-4 focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-800 dark:hover-bg-red-700 dark:focus-ring-blue-800"
          >
            SIGN IN
          </button>
      </form>
    </div>
  );
};

export default SignIn;
