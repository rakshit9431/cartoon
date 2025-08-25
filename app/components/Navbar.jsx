import React from "react";
import {
  IoIosSearch,
  IoIosBasket,
  IoIosHeart,
  IoIosMore,
} from "react-icons/io";
const Navbar = () => {
  return (
    <>
      <div className="border h-20  bg-gray-200 flex ">
        <div className="w-1/2  flex items-center">
          <h1 className="m-5 font-bold text-3xl italic ">LIFESTYLE</h1>
          <div className=" w-3/2 h-10 mr-5 p-0.5 rounded bg-gray-300 flex items-center">
            <IoIosSearch className=" rounded opacity-15 h-full w-7" />
            <input
              className="text  w-full h-full rounded bg-gray-300 text-center "
              placeholder="Serch your producct"
            ></input>
          </div>
        </div>
        <div className="w-1/2  flex justify-end gap-10 mr-15 items-center ">
          <div className="p-1.5 bg-orange-300 rounded">SIGN UP/SIGN IN</div>
          <div className="flex flex-col justify-center items-center">
            <IoIosHeart className="text-gray-900 text-3xl " />
            <p>Favorites</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <IoIosBasket className="text-gray-900 text-3xl pl-2" />
            <p>basket</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <IoIosMore className="text-gray-900 text-3xl pl-2" />
            <p>more</p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-10 font-bold py-4 bg-white shadow">
        <a
          href="#"
          className="text-gray-700 hover:text-orange-500 text-sm font-medium"
        >
          Women
        </a>
        <a
          href="#"
          className="text-gray-700 hover:text-orange-500 text-sm font-medium"
        >
          Men
        </a>
        <a
          href="#"
          className="text-gray-700 hover:text-orange-500 text-sm font-medium"
        >
          Kids
        </a>
        <a
          href="#"
          className="text-gray-700 hover:text-orange-500 text-sm font-medium"
        >
          Shoes & Bags
        </a>
        <a
          href="#"
          className="text-gray-700 hover:text-orange-500 text-sm font-medium"
        >
          Beauty
        </a>
        <a
          href="#"
          className="text-gray-700 hover:text-orange-500 text-sm font-medium"
        >
          Home & Living
        </a>
        <a
          href="#"
          className="text-gray-700 hover:text-orange-500 text-sm font-medium"
        >
          Babyshop
        </a>
        <a
          href="#"
          className="text-gray-700 hover:text-orange-500 text-sm font-medium"
        >
          Festive
        </a>
        <a
          href="#"
          className="text-gray-700 hover:text-orange-500 text-sm font-medium"
        >
          Watches
        </a>
        <a
          href="#"
          className="text-gray-700 hover:text-orange-500 text-sm font-medium"
        >
          Gen Z
        </a>
        <a
          href="#"
          className="text-gray-700 hover:text-orange-500 text-sm font-medium"
        >
          LUXE
        </a>
      </div>
    </>
  );
};

export default Navbar;
