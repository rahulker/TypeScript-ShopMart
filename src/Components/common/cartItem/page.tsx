import { useDispatch } from "react-redux";

import { handleAddItem, handleRmvItem } from "../../../store/slices/cartSlice";
import { successToast } from "../../../utils/helper/toast";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Page = ({ item }: any) => {
  const dispatch = useDispatch();
  function handleAddQuantity() {
    dispatch(handleAddItem(item));
    successToast("Cart updated successfully");
  }
  function handleRmvQuantity() {
    dispatch(handleRmvItem(item));
    successToast("Cart updated successfully");
  }
  return (
    <div className="grid md:grid-cols-4 grid-cols-1 items-center   mx-auto xl:gap-52 gap-5 border border-black md:px-8 md:py-5 px-4 py-2.5 rounded-lg shadow-sm">
      <img
        src={item.image}
        alt={item.title}
        className="md:w-40 md:h-40 object-contain sm:w-1/4 w-1/2 mx-auto"
      />
      <div className="flex items-start md:gap-4 gap-2 flex-col md:col-span-2">
        <h2 className="xl:text-3xl lg:text-xl text-lg font-semibold">
          {item.title}
        </h2>
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-5 gap-2.5 ">
          <p className="text-xl font-medium">category: {item.category}</p>
          <p className="text-xl font-medium">price: ₹{item.price}</p>
        </div>
      </div>
      <div className="flex items-center justify-end md:justify-center gap-1.5 lg:gap-4 md:gap-2">
        <button
          type="button"
          onClick={() => handleRmvQuantity()}
          className="px-4 py-2 bg-black rounded-full text-white hover:bg-white hover:text-black border border-black transition-colors"
        >
          -
        </button>
        <p className="py-2 px-3 rounded-xl w-12 text-center border border-black ">
          {item.quantity}
        </p>

        <button
          type="button"
          onClick={() => handleAddQuantity()}
          className="px-4 py-2 bg-black rounded-full text-white hover:bg-white hover:text-black border border-black transition-colors"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Page;
