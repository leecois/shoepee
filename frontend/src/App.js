import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AdminRouters from './Routers/AdminRouters';
import CustomerRouters from './Routers/CustomerRouters';
const App = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/*" element={<CustomerRouters />}></Route>
        <Route path="/admin/*" element={<AdminRouters />}></Route>
      </Routes>
    </div>
  );
};

export default App;
