import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Product from "./Product.jsx";
import Customer from "./Customer.jsx";
import Seller from "./Seller.jsx";
import Data from "./Data.jsx";
import DataLayout from "./DataLayout.jsx";
import ProductDetail from "./ProductDetail.jsx";
import Image from "./Image.jsx";
import NotFound from "./NotFound.jsx";
import ProductSearch from "./ProductSearch.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/data" element={<DataLayout />}>
          {" "}
          {/*kalau element nya diinisialisasi kan menjadi parent component, cocok untuk outlet */}
          <Route index element={<Data />} />
          <Route path="product" element={<Product />} />
          <Route path="product/search" element={<ProductSearch />} />
          <Route path="customer" element={<Customer />} />
          <Route path="seller" element={<Seller />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="images/*" element={<Image />} />
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
