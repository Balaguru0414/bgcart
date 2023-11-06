import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Buy from "../pages/Buy";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Sell from "../pages/Sell";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/buy" element={<Buy />} />
      <Route path="/sell" element={<Sell />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};

export default Routers;
