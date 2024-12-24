/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from "react-redux";
import { rootState } from "../../store/store";
import { Button, CartItem } from "../../Components/exports";

const Page = () => {
  const cartData = useSelector((state: rootState) => state.cart.item);
  const totalPrice = cartData.reduce(
    (total: number, item: any) => (total = item.price * item.quantity),
    0
  );
  return (
    <>
      <h2 className="text-4xl font-bold capitalize">your cart</h2>
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
              <Button otherLink isLink link="/buy-now" text="Buy now" />
              <p>Total: ${totalPrice.toFixed(2)}</p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Page;
