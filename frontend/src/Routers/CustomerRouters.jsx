import React from "react";
import { Routes, Route } from 'react-router-dom';
import HomePage from "../customer/pages/HomePage/HomePage";
import Footer from "../customer/components/Footer/Footer";
import Navigation from "../customer/components/Navigation/Navigation";
import Product from "../customer/components/Product/Product";
import SignIn from "../customer/Auth/SignIn";
import SignUp from "../customer/Auth/SignUp";
import Location from "../customer/components/Location/Location";

const CustomerRouters = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/SignIn" element={<SignIn />}></Route>
        <Route path="/SignUp" element={<SignUp />}></Route>
        <Route path="/Location" element={<Location />}></Route>
      </Routes>
      <div>
        <Footer />
      </div>
    </div >
  );
};

export default CustomerRouters;
