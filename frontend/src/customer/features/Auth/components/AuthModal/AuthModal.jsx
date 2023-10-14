import React, { useState } from "react";
import { Box, Modal } from "@mui/material";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  outline: 0,
  boxShadow: 24,
  p: 4,
};

const AuthModal = ({ handleClickOpen, handleClose }) => {
  const [email, setEmail] = useState("");
  const [showInitialScreen, setShowInitialScreen] = useState(true);
  const [isSignInVisible, setIsSignInVisible] = useState(false);
  const [isSignUpVisible, setIsSignUpVisible] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [enteredEmail, setEnteredEmail] = useState(""); // Lưu email được nhập từ bên ngoài

  const handleContinue = () => {
    if (
      !email ||
      !email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)
    ) {
      setEmailError("This field is required");
      return;
    } else {
      setEmailError("");
    }

    // Lưu email được nhập từ bên ngoài vào trạng thái
    setEnteredEmail(email);

    // Implement logic to check if the email exists in your database.
    const emailExists = false; // Replace with your actual logic

    if (emailExists) {
      setShowInitialScreen(false);
      setIsSignInVisible(true);
      setIsSignUpVisible(false);
    } else {
      setShowInitialScreen(false);
      setIsSignInVisible(false);
      setIsSignUpVisible(true);
    }
  };

  const handleBackToAuthModal = () => {
    setIsSignInVisible(false);
    setIsSignUpVisible(false);
    setShowInitialScreen(true);
  };

  return (
    <div>
      <Modal
        open={handleClickOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="bg-white shadow-md rounded p-4 text-center">
          <button
            onClick={handleClose}
            className="text-gray-500 hover:text-gray-700 absolute top-2 right-2"
          >
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          {showInitialScreen ? (
            <div>
              <div className="flex justify-center mb-4">
                <img
                  src="./logoshoepee.png"
                  alt="Your Logo"
                  className="w-16 h-16"
                />
              </div>
              <h2 className="text-2xl font-bold mb-4">
                HELLO! WELCOME TO SHOEPEE
              </h2>
              <p className="text-gray-700 text-sm mb-4">
                We are glad to see you again! Please enter your email to
                continue.
              </p>
              <div className="text-left mb-4">
                <h3 className="text-lg font-bold mb-2">SIGN IN OR SIGN UP</h3>
                <input
                  type="email"
                  id="emailInput"
                  placeholder="Enter your email (e.g., name@gmail.com)"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border border-gray-400 p-3 rounded w-full"
                  required
                />
                {emailError && (
                  <div className="text-red-600 text-sm mt-1">{emailError}</div>
                )}
              </div>
              <button
                onClick={handleContinue}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Continue
              </button>
            </div>
          ) : isSignInVisible ? (
            <SignIn
              goBack={handleBackToAuthModal}
              enteredEmail={enteredEmail}
            />
          ) : isSignUpVisible ? (
            <SignUp
              goBack={handleBackToAuthModal}
              enteredEmail={enteredEmail}
            />
          ) : (
            <div>
              <button onClick={handleBackToAuthModal}>Back to AuthModal</button>
            </div>
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default AuthModal;
