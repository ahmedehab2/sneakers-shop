import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Spinner = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <AiOutlineLoading3Quarters
        size={30}
        fill="red"
        className="animate-spin"
      />
    </div>
  );
};

export default Spinner;
