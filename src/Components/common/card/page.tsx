import { useDispatch } from "react-redux";
import { Button } from "../../exports";
import { useNavigate } from "react-router-dom";
import { handleCardBuyNow } from "../../../store/slices/cartSlice";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Page = ({ item }: any) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleBuyNow() {
    dispatch(handleCardBuyNow(item));
    navigate("/buy-now");
  }
  return (
    <div className="flex flex-col gap-4 shadow-lg px-2 sm:px-4 py-3 border border-black rounded-lg justify-between items-center ">
      <img
        src={item.image}
        alt={item.title}
        className="mx-auto  w-[200px] h-[200px] object-contain"
      />
      <div className="w-full">
        <h2 className="md:text-xl sm:w-[260px] w-auto text-lg des leading-[30px]">
          {item.title}
        </h2>
        <p className="des text-sm w-[260px] des sm:w-auto mt-2 leading-[18px]">
          {item.description}
        </p>
        <div className="flex items-start flex-col gap-2.5 mt-4">
          <div>
            <p className="text-sm leading-3">Price: ${item.price}</p>
          </div>
          <div>
            <p className="text-sm leading-3">category: {item.category}</p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 w-full">
        <Button
          isLink
          id={item.id}
          text="view more"
          classCss="w-full !rounded-lg"
        />
        <Button
          text="Buy now"
          onClick={handleBuyNow}
          classCss="w-full !rounded-lg"
        />
      </div>
    </div>
  );
};

export default Page;
