import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../customer/components/Footer/Footer";
import Location from "../customer/components/Location/Location";
import Navigation from "../customer/components/Navigation/Navigation";
import ProductDetail from "../customer/components/ProductDetails/ProductDetails";
import HomePage from "../customer/pages/HomePage/HomePage";
import ProductPage from "../customer/pages/ProductPage/ProductPage";

const CustomerRouters = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/product" element={<ProductPage />}></Route>
        <Route
          path="/product/productdetail"
          element={<ProductDetail />}
        ></Route>
        <Route path="/location" element={<Location />}></Route>
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CustomerRouters;
