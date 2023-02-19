import React from "react";
import { AiOutlineClose, AiOutlineShoppingCart } from "react-icons/ai";
import { BiMinusCircle, BiPlusCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useAppcontext } from "../context/AppContext";
import { urlFor } from "../utils/client";

const Cart = () => {
  const {
    showCart,
    toggleCart,
    incrementQuantity,
    decrementQuantity,
    incrementCartQuantity,
    decrementCartQuantity,
    totalPrice,
    totalQuantity,
    cartItems,
    removeFromCart,
  } = useAppcontext();

  if (!showCart) return;
  return (
    <div
      className="relative z-20"
      aria-labelledby="slide-over-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-60 animate-opacity"></div>

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 animate-slide-in">
            <div className="pointer-events-auto w-screen max-w-md">
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div className="ml-3 flex h-7 items-center">
                  <button
                    type="button"
                    className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                    onClick={toggleCart}
                  >
                    <span className="sr-only">Close panel</span>

                    <AiOutlineClose />
                  </button>
                </div>
                {cartItems.length >= 1 ? (
                  <>
                    <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <h2
                          className="text-lg font-medium text-gray-900"
                          id="slide-over-title"
                        >
                          Shopping cart
                        </h2>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul
                            role="list"
                            className="-my-6 divide-y divide-gray-200"
                          >
                            {cartItems.map(
                              ({ price, name, image, quantity, _id }) => (
                                <div key={_id} className="flex py-6">
                                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                    <img
                                      src={urlFor(image[0])}
                                      alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                                      className="h-full w-full object-cover object-center"
                                    />
                                  </div>

                                  <div className="ml-4 flex flex-1 flex-col">
                                    <div>
                                      <div className="flex justify-between text-base font-medium text-gray-900">
                                        <h3>
                                          <a href="#">{name}</a>
                                        </h3>
                                        <p className="ml-4">${price}</p>
                                      </div>
                                      <p className="mt-1 text-sm text-gray-500">
                                        Salmon
                                      </p>
                                    </div>
                                    <div className="flex flex-1 items-end justify-between text-sm">
                                      <div className="mt-8 flex  flex-col gap-3">
                                        <label
                                          htmlFor="btns"
                                          className="text-sm font-medium"
                                        >
                                          Quantity
                                        </label>
                                        <div
                                          id="btns"
                                          className="w-16 flex justify-between items-center"
                                        >
                                          <button
                                            onClick={() =>
                                              decrementCartQuantity(
                                                _id,
                                                quantity,
                                                price
                                              )
                                            }
                                          >
                                            <BiMinusCircle size={20} />
                                          </button>
                                          <span className="text-md font-medium">
                                            {quantity}
                                          </span>
                                          <button
                                            onClick={() =>
                                              incrementCartQuantity(
                                                _id,
                                                quantity,
                                                price
                                              )
                                            }
                                          >
                                            <BiPlusCircle size={20} />
                                          </button>
                                        </div>
                                      </div>

                                      <div className="flex">
                                        <button
                                          onClick={() =>
                                            removeFromCart(_id, quantity, price)
                                          }
                                          type="button"
                                          className="font-medium text-indigo-600 hover:text-indigo-500"
                                        >
                                          Remove
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>${totalPrice}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">
                        Shipping and taxes calculated at checkout.
                      </p>
                      <div className="mt-6">
                        <a
                          href="#"
                          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                          Checkout
                        </a>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or
                          <Link
                            onClick={toggleCart}
                            to="/"
                            className="ml-2 font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </Link>
                        </p>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="flex flex-col w-full h-full justify-center items-center gap-5">
                    <AiOutlineShoppingCart size={50} />
                    <h2 className="text-gray-700 text-lg">Cart is empty</h2>
                    <Link
                      to="/products"
                      onClick={toggleCart}
                      className="h-10 w-fit flex items-center justify-center px-5 border border-black hover:bg-black hover:text-white transition duration-500 ease-in-out rounded-lg "
                    >
                      Get some products
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
