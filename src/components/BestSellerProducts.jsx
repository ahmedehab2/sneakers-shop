import React from "react";
import useSWRImmutable from "swr/immutable";
import { client } from "../utils/client";
import Product from "./Product";
import Spinner from "./Spinner";

const BestSellerProducts = () => {
  const { data: products, isLoading } = useSWRImmutable(
    `*[_type == "product"]{image,price,name,slug}`,
    (query) => client.fetch(query)
  );

  if (isLoading) return <Spinner />;

  return (
    <div className="mx-auto max-w-2xl py-12 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products?.slice(0, 4).map((product) => (
          <Product key={product.name} productData={product} />
        ))}
      </div>
    </div>
  );
};
export default BestSellerProducts;
