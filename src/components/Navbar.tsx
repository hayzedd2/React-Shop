import React from "react";
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingBag } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { Outlet } from "react-router-dom";

const Navbar = () => {
  return (
   <>
    <nav className="w-full font-crimson xl:block sm:hidden">
      <header className="max-w-[75rem] mx-auto flex py-6 items-center px-4">
        <div className="logo basis-[30%]">
          <h1 className="font-[700] text-[2.2rem]">HaYzedd</h1>
        </div>
        <div className="links basis-[40%]">
          <ul className="flex items-center gap-[4rem] font-[500] font-afacad text-[1.25rem]">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Shop</a>
            </li>
            <li>
              <a href="">Categories</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
        <div className="icons basis-[30%] flex gap-[2.5rem] items-center justify-end text-[1.4rem]">
          <IoSearch />
          <MdFavoriteBorder />
          <MdOutlineShoppingBag />
        </div>
      </header>
    </nav>
    <Outlet/>
   </>
  );
};

export default Navbar;
