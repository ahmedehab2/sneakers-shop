import React from "react";
import { Link, useParams } from "react-router-dom";
import { urlFor } from "../utils/client";

const Product = ({ productData }) => {
  const { price, name, image, slug } = productData;

  return (
    <Link to={`/product/${slug?.current}`} className="group">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
        <img
          src={urlFor(image[0])}
          alt={name}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
          loading="lazy"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{name}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">${price}</p>
    </Link>
  );
};

export default Product;
