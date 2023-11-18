import React, { useEffect } from 'react';

const AlertModal = ({ message, type, isVisible, onClose }) => {
  useEffect(() => {
    let timer;
    if (isVisible) {
      timer = setTimeout(onClose, 1000);
    }

    return () => clearTimeout(timer);
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div
      role="alert"
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${
        isVisible ? '' : 'hidden'
      }`}
    >
      <div className="w-auto bg-opacity-75  bg-gray-300 border-x-meta-3 border-l-4 p-4">
        <h3 className={`font-bold text-lg text-black-2`}>{message}</h3>
      </div>
    </div>
  );
};

export default AlertModal;
