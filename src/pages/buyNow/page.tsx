import { useDispatch, useSelector } from "react-redux";
import { rootState } from "../../store/store";
import { Button, BuyNowCard } from "../../Components/exports";
import { useNavigate } from "react-router-dom";
import {
  handleBuyNowCartRemove,
  handleRmvItem,
  handleSingleRemoveBuyNow,
} from "../../store/slices/cartSlice";
import { errorToast, successToast } from "../../utils/helper/toast";

const Page = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const buyNowDetail: any = useSelector(
    (state: rootState) => state.cart.buyNow
  );
  const isLogin = useSelector((state: rootState) => state.user.isLogin);
  const userData = useSelector((state: rootState) => state.user.userDetail);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const arr = Array.isArray(buyNowDetail);
  const totalPrize = arr
    ? buyNowDetail.reduce(
        (total, item) => (total = item.price * item.quantity),
        0
      )
    : buyNowDetail.price;
  const content = arr ? (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    buyNowDetail.map((item: any) => (
      <BuyNowCard item={item} id={item.id} data={arr} />
    ))
  ) : (
    <BuyNowCard item={buyNowDetail} id={buyNowDetail.id} />
  );

  function buyCart() {
    if (isLogin) {
      dispatch(handleBuyNowCartRemove());
      successToast("Payment Successful");
      navigate("/");
    } else {
      errorToast("Please login");
      navigate("/login");
    }
  }
  function handleBuySingleItem() {
    if (isLogin) {
      dispatch(handleSingleRemoveBuyNow());
      dispatch(handleRmvItem(buyNowDetail));
      successToast("Payment Successful");
      navigate("/");
    } else {
      errorToast("please login");
      navigate("/login");
    }
  }

  return (
    <div className="grid lg:grid-cols-[60%_auto] gap-5">
      <main>
        {arr && <h2 className="mb-2 text-xl">List of product</h2>}
        <div className="flex items-center flex-col gap-4 max-h-[600px] overflow-y-scroll">
          {content}
        </div>
      </main>
      <aside>
        <div>
          <h2 className="text-2xl">Deliver To:</h2>
          <div className="ml-4 mt-4">
            <p className="text-xl capitalize">Name: {userData.name || "N/A"}</p>
            <p className="text-xl capitalize mt-2">
              Phone number: {userData.phoneNum || "N/A"}
            </p>
            <p className="text-xl mt-2">Email: {userData.email || "N/A"}</p>
            <p className="text-xl mt-2">Address: {userData.address || "N/A"}</p>
          </div>
          <div className="flex items-start sm:items-center flex-col sm:flex-row gap-5 ml-4 mt-8">
            <p>Total Price: ${totalPrize.toFixed(2)}</p>
            <Button
              text="Pay Now"
              onClick={
                arr
                  ? () => {
                      buyCart();
                    }
                  : () => {
                      handleBuySingleItem();
                    }
              }
            />
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Page;
