import useSWRImmutable from "swr/immutable";
import { Product } from "../components";
import { fetchProducts } from "../utils/queries";

import Spinner from "./Spinner";

const Products = () => {
  const { data: products, isLoading } = useSWRImmutable(
    `*[_type == "product"]{image,price,name,slug}`,
    (query) => fetchProducts(query)
  );
  // const [products, setProducts] = useState(null);
  // const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   const fetcher = async () => {
  //     const response = await client.fetch(
  //       `*[_type == "product"]{image,price,name,slug}`
  //     );
  //     return response;
  //   };
  //   fetcher().then((response) => setProducts(response));
  // }, []);

  if (isLoading) return <Spinner />;
  return (
    <div className="mx-auto max-w-2xl py-12 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products?.map((product) => (
          <Product key={product.name} productData={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
