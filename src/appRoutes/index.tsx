import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Product from "../pages/Product";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
