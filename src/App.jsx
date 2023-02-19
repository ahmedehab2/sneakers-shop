import useSWRImmutable from "swr/immutable";
import {
  Footer,
  FooterBanner,
  HeroBanner,
  NavBar,
  BestSellerProducts,
} from "./components";
import Spinner from "./components/Spinner";
import { fetchBanner } from "./utils/queries";

function App() {
  const { data, isLoading } = useSWRImmutable(
    `*[_type == "banner"]{
      image,desc,buttonText,smallText,midText,largeText1,discount,saleTime
   }`,
    (query) => fetchBanner(query)
  );

  if (isLoading) return <Spinner />;
  console.log(data);
  return (
    <>
      <HeroBanner HeroBannerData={data && data[0]} />

      <div className="text-center mt-10">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-gray-600 uppercase ">
          Best Seller Products
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-400 px-5">
          Sneakers There are many variations passages
        </p>
      </div>

      <BestSellerProducts />

      <FooterBanner footerBannerData={data && data[0]} />
    </>
  );
}

export default App;
