import React from "react";

import { urlFor } from "../utils/client";

const FooterBanner = ({ footerBannerData }) => {
  const { image, smallText, midText, discount, saleTime } = footerBannerData;

  return (
    <div className="flex flex-col-reverse md:flex-row lg:gap-20 bg-red-400 w-fit mx-auto p-10 xl:p-12 rounded-3xl sm:rounded-[100px]">
      <div className="grid ml-5 gap-5 self-center">
        <div className="self-end justify-self-center max-w-md">
          <p className="text-2xl md:text-4xl lg:text-5xl uppercase font-semibold">
            {smallText}
          </p>
          <h2 className="mid-text uppercase strokeLine text-transparent hover:text-black font-semibold transition duration-500 ease-in-out">
            {midText}
          </h2>
        </div>
        <div className="justify-self-start w-fit  py-3">
          <h2 className="font-bold text-lg sm:text-xl md:text-2xl text-gray-700">
            Discount
          </h2>
          <p className="text-gray-600 text-lg sm:text-xl md:text-2xl my-1 mx-5">
            {discount}
          </p>
          <p className="text-gray-600 text-lg sm:text-xl md:text-2xl lg:text-3xl">
            {saleTime}
          </p>
        </div>
      </div>
      <img
        src={urlFor(image)}
        className="footer-sneaker -mt-20  self-center flex-1"
        loading="lazy"
      />
    </div>
  );
};

export default FooterBanner;
