import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import AdminRouters from './Routers/AdminRouters';
import CustomerRouters from './Routers/CustomerRouters';
import StorageKeys from './constants/storage-keys';
import ErrorPage from './customer/pages/ErrorPage'; // Import the ErrorPage component

const App = () => {
  const userRole = JSON.parse(localStorage.getItem(StorageKeys.USER)) || ''; 

  return (
    <div className="">
      <Routes>
        <Route path="/*" element={<CustomerRouters />} />
        {userRole && userRole.role === 'ADMIN' ? (
          <Route path="/admin/*" element={<AdminRouters />} />
        ) : (
          <Route path="/admin/*" element={<ErrorPage />} /> 
        )}
      </Routes>
    </div>
  );
};

export default App;
