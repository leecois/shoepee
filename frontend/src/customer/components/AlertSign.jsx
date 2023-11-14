import React from 'react';
import AuthModal from '../../Authentication/AuthModal';
import { useState } from 'react';

const Alert = ({ isOpen, onClose }) => {
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const handleClickOpen = () => {
    setOpenAuthModal(true);
  };
  const handleClose = () => {
    setOpenAuthModal(false);
  };
  if (!isOpen) return null;
  return (
    <div
      role="alert"
      className="rounded-xl relative border border-gray-100 bg-white p-4 justify-between items-center shadow-md"
    >
      <div className="flex items-start gap-4">
        <div className="flex-1">
          <strong className="block font-medium text-gray-900">
            Login to your account to add to cart and more.
          </strong>

          <div className="mt-4 flex gap-2">
            <button
              onClick={handleClickOpen}
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
            >
              <button className="text-sm"> Sign In </button>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </button>
          </div>
        </div>

        <button
          onClick={onClose}
          className="text-gray-500 transition hover:text-gray-600"
        >
          <span className="sr-only">Dismiss popup</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <AuthModal handleClickOpen={openAuthModal} handleClose={handleClose} />
    </div>
  );
};

export default Alert;
