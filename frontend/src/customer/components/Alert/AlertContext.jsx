import React, { createContext, useContext, useState } from 'react';

const AlertContext = createContext();

export const useAlert = () => {
  return useContext(AlertContext);
};

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState({ isVisible: false, message: '', type: '' });

  const showAlert = (message, type) => {
    setAlert({ isVisible: true, message, type });
  };

  const hideAlert = () => {
    setAlert({ isVisible: false, message: '', type: '' });
  };

  return (
    <AlertContext.Provider value={{ alert, showAlert, hideAlert }}>
      {children}
    </AlertContext.Provider>
  );
};
