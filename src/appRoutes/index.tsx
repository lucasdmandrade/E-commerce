import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import FinalizePurchase from "../pages/FinalizePurchase";

import Product from "../pages/Product";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/finalização-de-compra" element={<FinalizePurchase />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
