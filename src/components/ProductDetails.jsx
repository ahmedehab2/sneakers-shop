import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { BiMinusCircle, BiPlusCircle } from "react-icons/bi";
import { urlFor } from "../utils/client";
import { fetchProduct } from "../utils/queries";
import { useAppcontext } from "../context/AppContext";
import { NavBar } from "../components";
import { Toaster } from "react-hot-toast";

const ProductDetails = () => {
  const [product] = useLoaderData();
  const { details, name, price, image } = product;
  const [quantity, setQuantity] = useState(1);
  const { AddToCart } = useAppcontext();

  const incrementQuantity = () =>
    setQuantity((prevQunatity) => prevQunatity + 1);

  const decrementQuantity = () =>
    setQuantity((prevQunatity) =>
      prevQunatity > 1 ? prevQunatity - 1 : prevQunatity
    );
  return (
    <>
      <Toaster />

      <section>
        <div className="flex justify-between mx-auto max-w-screen-xl px-4 py-8">
          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
            <div className="grid gap-4 md:grid-cols-1">
              <img
                alt="product"
                src={urlFor(image[0])}
                className="rounded-xl xl:max-w-lg  lg:aspect-1 lg:object-contain"
                loading="lazy"
              />
            </div>

            <div>
              <div className="mt-8 flex justify-between">
                <div className="max-w-[35ch]">
                  <h1 className="text-2xl font-bold">{name}</h1>

                  <p className="mt-0.5 text-sm">Highest Rated Product</p>

                  <div className="mt-2 -ml-0.5 flex">
                    <svg
                      className="h-5 w-5 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <svg
                      className="h-5 w-5 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <svg
                      className="h-5 w-5 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <svg
                      className="h-5 w-5 text-gray-200"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>

                <p className="text-lg font-bold">${price}</p>
              </div>

              <details className="relative mt-4">
                <summary className="block">
                  <div>
                    <div className="max-w-none group-open:hidden">
                      <p>{details}</p>
                    </div>
                  </div>
                </summary>
              </details>

              <fieldset className="my-5">
                <legend className="mb-1 text-sm font-medium">Color</legend>
                <div className="flow-root">
                  <div className="-m-0.5 flex flex-wrap">
                    <label for="color_tt" className="cursor-pointer p-0.5">
                      <input
                        type="radio"
                        name="color"
                        id="color_tt"
                        className="peer sr-only"
                      />

                      <span className="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                        Texas Tea
                      </span>
                    </label>

                    <label for="color_fr" className="cursor-pointer p-0.5">
                      <input
                        type="radio"
                        name="color"
                        id="color_fr"
                        className="peer sr-only"
                      />

                      <span className="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                        Fiesta Red
                      </span>
                    </label>

                    <label for="color_cb" className="cursor-pointer p-0.5">
                      <input
                        type="radio"
                        name="color"
                        id="color_cb"
                        className="peer sr-only"
                      />

                      <span className="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                        Cobalt Blue
                      </span>
                    </label>
                  </div>
                </div>
              </fieldset>

              <fieldset className="mt-4">
                <legend className="mb-1 text-sm font-medium">Size</legend>

                <div className="flow-root">
                  <div className="-m-0.5 flex flex-wrap">
                    <label for="size_xs" className="cursor-pointer p-0.5">
                      <input
                        type="radio"
                        name="size"
                        id="size_xs"
                        className="peer sr-only"
                      />

                      <span className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                        XS
                      </span>
                    </label>

                    <label for="size_s" className="cursor-pointer p-0.5">
                      <input
                        type="radio"
                        name="size"
                        id="size_s"
                        className="peer sr-only"
                      />

                      <span className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                        S
                      </span>
                    </label>

                    <label for="size_m" className="cursor-pointer p-0.5">
                      <input
                        type="radio"
                        name="size"
                        id="size_m"
                        className="peer sr-only"
                      />

                      <span className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                        M
                      </span>
                    </label>

                    <label for="size_l" className="cursor-pointer p-0.5">
                      <input
                        type="radio"
                        name="size"
                        id="size_l"
                        className="peer sr-only"
                      />

                      <span className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                        L
                      </span>
                    </label>

                    <label for="size_xl" className="cursor-pointer p-0.5">
                      <input
                        type="radio"
                        name="size"
                        id="size_xl"
                        className="peer sr-only"
                      />

                      <span className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                        XL
                      </span>
                    </label>
                  </div>
                </div>
              </fieldset>
              <div className="mt-8 flex  flex-col gap-3">
                <label htmlFor="btns" className="text-sm font-medium">
                  Quantity
                </label>
                <div
                  id="btns"
                  className="w-20 flex justify-between items-center"
                >
                  <button onClick={decrementQuantity}>
                    <BiMinusCircle size={30} />
                  </button>
                  <span className="text-lg font-medium">{quantity}</span>
                  <button onClick={incrementQuantity}>
                    <BiPlusCircle size={30} />
                  </button>
                </div>
              </div>
              <div className="mt-8 flex">
                <button
                  onClick={() => AddToCart(product, quantity)}
                  className="h-10 w-fit flex items-center justify-center uppercase font-semibold px-8 border border-black hover:bg-black hover:text-white transition duration-500 ease-in-out rounded-lg "
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
export function detailsloader({ params }) {
  return fetchProduct(params.slug);
}
