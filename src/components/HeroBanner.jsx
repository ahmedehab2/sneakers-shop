import React from "react";
import { useNavigate } from "react-router-dom";
import { urlFor } from "../utils/client";
import { GoArrowSmallRight } from "react-icons/go";

export default function HeroBanner({ HeroBannerData }) {
  const navigate = useNavigate();
  const { image, desc, buttonText, smallText, midText, largeText1 } =
    HeroBannerData;

  return (
    <div className="relative flex items-center justify-between gap-10 lg:justify-evenly flex-col bg-gray-200 lg:w-11/12 h-fit mx-auto px-5 py-8 xl:p-10 rounded-xl">
      <div className="w-full md:w-5/6 flex flex-col mt-20">
        <p className="text-xl sm:text-3xl md:text-4xl xl:text-3xl uppercase font-semibold">
          {smallText}
        </p>
        <h2 className="text-2xl sm:text-4xl md:text-5xl xl:text-6xl uppercase font-semibold ">
          {midText}
        </h2>
        <h1 className="large-text font-extrabold text-white uppercase xl:pl-5">
          {largeText1}
        </h1>

        <img
          src={urlFor(image)}
          className="hero-sneaker absolute top-10 lg:top-0 right-[2%] z-10 basis-10"
          loading="lazy"
        />
      </div>
      <button
        onClick={() => navigate("/products")}
        className="h-fit lg:h-10 text-xs sm:text-sm md:text-base lg:text-lg w-fit flex items-center justify-center uppercase font-semibold px-8 border border-black hover:bg-black hover:text-white transition duration-500 ease-in-out rounded-lg"
      >
        {buttonText}
        <GoArrowSmallRight className="h-8 ml-2" />
      </button>
      <div className="max-w-xs p-2 self-start">
        <h2 className="font-bold text-center text-gray-600">DESCRIPTION</h2>
        <p className="text-gray-400 text-center text-xs">{desc}</p>
      </div>
    </div>
  );
}
