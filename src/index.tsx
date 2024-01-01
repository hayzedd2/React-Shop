import React from "react";
import ReactDOM from "react-dom/client";
import Shop from "./components/Shop";
import SingleProduct from "./fetch/SingleProduct";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Navbar from "./components/Navbar";
import CategoryShop from "./components/CategoryShop";

const RoutesList = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar/>}>
        <Route path="/" element={<App />} />
        <Route path="/:slug" element={<SingleProduct />} />
        <Route path="/categories/:category_id" element={<CategoryShop/>} />
      </Route>
    </Routes>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RoutesList />
    </BrowserRouter>
  </React.StrictMode>
);
