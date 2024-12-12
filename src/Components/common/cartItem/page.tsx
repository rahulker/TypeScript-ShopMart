import { useDispatch } from "react-redux";
import { Button } from "../../exports";
import { handleAddItem, handleRmvItem } from "../../../store/slices/cartSlice";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Page = ({ item }: any) => {
  const dispatch = useDispatch();
  function handleAddQuantity() {
    dispatch(handleAddItem(item));
  }
  function handleRmvQuantity() {
    dispatch(handleRmvItem(item));
  }
  return (
    <div className="grid grid-cols-3  justify-between gap-10 items-center px-4 py-5 border border-black rounded-lg">
      {/* image */}
      <div className="w-fit">
        <img
          src={item.image}
          alt={item.title}
          className="md:w-40 md:h-40 object-contain sm:w-1/4 w-1/2 mx-auto"
        />
      </div>
      {/* item name */}
      <div className="flex items-start flex-col gap-4 w-fit">
        <h2 className="text-xl">{item.title}</h2>
        <div>
          <p>Price: ${item.price}</p>
          <p>category: {item.category}</p>
        </div>
      </div>
      {/* increment and decrement */}
      <div className="w-fit justify-self-end flex items-center gap-4">
        <Button
          text="-"
          classCss="rounded-full px-5 cursor-pointer"
          onClick={() => handleRmvQuantity()}
        />
        <p className="px-5 py-2.5 border border-black rounded-lg">
          {item?.quantity}
        </p>
        <Button
          text="+"
          classCss="rounded-full px-5 cursor-pointer"
          onClick={() => handleAddQuantity()}
        />
      </div>
    </div>
  );
};

export default Page;
