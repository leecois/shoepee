import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../customer/pages/HomePage/HomePage";
import Footer from "../customer/components/Footer/Footer";
import Navigation from "../customer/components/Navigation/Navigation";
import Product from "../customer/components/Product/Product";
import SignIn from "../customer/features/Auth/components/SignIn/SignIn";
import SignUp from "../customer/features/Auth/components/SignUp/SignUp";

const CustomerRouters = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CustomerRouters;
