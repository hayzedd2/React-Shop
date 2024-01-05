import React from "react";
import { FaAngleRight, FaAngleDown } from "react-icons/fa6";
import CategoriesList from "../fetch/CategoriesList";
import Products from "./Products";
const Shop = () => {
  return (
    <section>
      <div className="bg-[#f3f2ee] my-2">
        <div className="container max-w-[75rem] px-4 mx-auto py-7 font-afacad">
          <h1 className="text-[1.85rem] font-[500] mb-2">Shop</h1>
          <p className="text-[1.3rem] font-[400] flex gap-2 items-center">
            <a href="">Home</a>
            <FaAngleRight className="text-[1rem]" />
            <span className="text-[1.3rem] font-[400] text-[#b7b7b7]">
              shop
            </span>
          </p>
        </div>
      </div>
      <div className="flex xl:flex-nowrap sm:flex-wrap max-w-[75rem] px-4 mx-auto py-7 font-afacad my-4 gap-[2rem]">
        <div className="category-flex xl:basis-[20%] sm:basis-[100%]">
          <CategoriesList />
        </div>
        <div className="product-flex xl:basis-[80%] sm:basis-[100%] items-center justify-center">
          <Products />
        </div>
      </div>
    </section>
  );
};

export default Shop;
