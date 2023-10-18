import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../customer/pages/HomePage/HomePage";
import Footer from "../customer/components/Footer/Footer";
import Navigation from "../customer/components/Navigation/Navigation";
import Location from "../customer/components/Location/Location";
import Product from "../customer/components/Product/Product";
import SignIn from "../customer/features/Auth/components/SignIn/SignIn";
import SignUp from "../customer/features/Auth/components/SignUp/SignUp";
import ProductDetail from "../customer/components/ProductDetails/ProductDetails";
import productApi from "../api/productApi";

const CustomerRouters = () => {
  useEffect(() => {
    const fetchProducts = async () => {
      const params = {
        _limit: 10,
      };
      const response = await productApi.getAll(params);
      console.log(response);
    };
    fetchProducts();
  }, []);
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route
          path="/product/productdetail"
          element={<ProductDetail />}
        ></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/location" element={<Location />}></Route>
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CustomerRouters;
