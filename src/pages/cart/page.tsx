/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch, useSelector } from "react-redux";
import { rootState } from "../../store/store";
import { Button, CartItem } from "../../Components/exports";
import { handleBuyNowCart } from "../../store/slices/cartSlice";
import { useNavigate } from "react-router-dom";

const Page = () => {
  const cartData = useSelector((state: rootState) => state.cart.item);
  const totalPrice = cartData.reduce(
    (total: number, item: any) => (total = item.price * item.quantity),
    0
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleBuyNow() {
    dispatch(handleBuyNowCart());
    navigate("/buy-now");
  }

  return (
    <>
      <h2 className=" text-xl sm:text-2xl md:text-3xl font-bold capitalize">
        your cart
      </h2>
      <div className="mt-8">
        {cartData.length <= 0 ? (
          <p className="text-gray-400 text-center text-xl">
            Your cart is empty
          </p>
        ) : (
          <>
            <div className="flex flex-col gap-4">
              {cartData.map((item: any) => (
                <CartItem item={item} key={item.id} />
              ))}
            </div>
            <hr className="mt-10 border-top border-black" />
            <div className="mt-5 flex items-center justify-end gap-9">
              <Button onClick={handleBuyNow} text="Buy now" />
              <p>Total: ${totalPrice.toFixed(2)}</p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Page;
