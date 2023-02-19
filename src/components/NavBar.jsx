import React from "react";
import { Cart } from "../components";
import { AiOutlineShopping } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useAppcontext } from "../context/AppContext";

const NavBar = () => {
  const { toggleCart, showCart, totalQuantity } = useAppcontext();

  return (
    <div className="flex justify-around items-center h-20">
      <p className="logo">
        <Link
          className="text-2xl strokeLine text-transparent hover:text-black"
          to="/"
        >
          Jio sneakers
        </Link>
      </p>

      <button type="button" className="relative" onClick={toggleCart}>
        <AiOutlineShopping size={25} />
        <span className="flex justify-center items-center bg-black text-white rounded-full w-5 h-5 absolute top-0 -right-3">
          {totalQuantity}
        </span>
      </button>
      <div className="absolute">{showCart && <Cart />}</div>
    </div>
  );
};

export default NavBar;
