import { Box, Modal } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../constants/index';
import SignIn from './SignIn';
import SignUp from './Signup';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  outline: 0,
  boxShadow: 24,
  p: 4,
};

const AuthModal = ({ handleClickOpen, handleClose }) => {
  const [email, setEmail] = useState('');
  const [showInitialScreen, setShowInitialScreen] = useState(true);
  const [isSignInVisible, setIsSignInVisible] = useState(false);
  const [isSignUpVisible, setIsSignUpVisible] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasSignedUp, setHasSignedUp] = useState(false);
  const [focused, setFocused] = useState(null);
  const navigate = useNavigate();

  const handleContinue = () => {
    if (!email || !email.match(/^[a-zA-Z0-9._%+-]+@gmail\.com$/)) {
      setEmailError('This field is required. Please enter a valid @gmail.com.');
      return;
    } else {
      setEmailError('');
    }

    setEnteredEmail(email);
    let emailExists = false;
    let isCheckEmailSuccess = false;
    setIsLoading(true);

    axios
      .get(`${API_BASE_URL}/auth/existuser/${email}`)
      .then((response) => {
        emailExists = response.data.email;
        isCheckEmailSuccess = true;
      })
      .catch(() => {
        isCheckEmailSuccess = true;
      })
      .finally(() => {
        setIsLoading(false);

        if (isCheckEmailSuccess) {
          if (emailExists) {
            setShowInitialScreen(false);
            setIsSignInVisible(true);
            setIsSignUpVisible(false);
          } else {
            setShowInitialScreen(false);
            setIsSignInVisible(false);
            setIsSignUpVisible(true);
          }
        } else {
          setEmailError(
            'There was an error checking the email. Please try again.'
          );
        }
      });
  };

  const handleBackToAuthModal = () => {
    setIsSignInVisible(false);
    setIsSignUpVisible(false);
    setShowInitialScreen(true);
  };
  const handleCloseSuccess = () => {
    setIsSignUpVisible(false);
    setIsSignInVisible(false);
  };
  const handleSignInSuccess = () => {
    handleClose();
  };
  const handleSignUpSuccess = () => {
    setHasSignedUp(true);
    setIsSignUpVisible(false);
    setIsSignInVisible(false);
  };
  const handleUpdateProfile = () => {
    navigate(`/user/account/profile`);
    window.location.reload();
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
                  src="https://i.ibb.co/h9qBfDY/logoshoepee.png"
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
                <div className="my-5 mr-5 relative overflow-hidden">
                  <label
                    htmlFor="email"
                    className={`bg-gradient-to-r bg-clip-text text-xs text-transparent font-semibold uppercase transition-all duration-300 ${
                      focused === 1
                        ? 'from-red-600 to-pink-600'
                        : 'from-gray-600 to-gray-600'
                    }`}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="emailInput"
                    placeholder="@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                {emailError && (
                  <div className="text-red-600 text-sm mt-1">{emailError}</div>
                )}
              </div>
              <button
                onClick={handleContinue}
                className="w-full text-white bg-red-900 hover:bg-black focus:ring-4 focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-800 dark:hover-bg-red-700 dark:focus-ring-blue-800"
              >
                {isLoading ? (
                  <span className="loading loading-spinner"></span>
                ) : (
                  'Continue'
                )}
              </button>
            </div>
          ) : isSignInVisible ? (
            <SignIn
              goBack={handleBackToAuthModal}
              enteredEmail={enteredEmail}
              handleCloseSuccess={handleSignInSuccess}
            />
          ) : isSignUpVisible ? (
            <SignUp
              goBack={handleBackToAuthModal}
              enteredEmail={enteredEmail}
              handleCloseSuccess={handleSignUpSuccess}
            />
          ) : hasSignedUp ? (
            <div>
              <button onClick={handleUpdateProfile}>Update your profile</button>
            </div>
          ) : null}
        </Box>
      </Modal>
    </div>
  );
};

export default AuthModal;
