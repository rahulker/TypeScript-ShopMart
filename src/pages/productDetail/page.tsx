import { useEffect, useState } from "react";
import { useParams, useRouteLoaderData } from "react-router-dom";
import { handleSingleProduct } from "../../utils/apis/services/product";
import { Button, Card } from "../../Components/exports";
import { useDispatch } from "react-redux";
import { handleAddItem } from "../../store/slices/cartSlice";

const Page = () => {
  const originalData = useRouteLoaderData("Root");
  const dispatch = useDispatch();
  const shuffleData = [...originalData].sort(() => Math.random() - 0.5);
  const { id } = useParams();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any>({});
  useEffect(() => {
    async function getSingleProduct() {
      const res = await handleSingleProduct(id);
      setData(res);
    }
    getSingleProduct();
  }, [id]);
  function handleAddToCart() {
    dispatch(handleAddItem(data));
  }
  return (
    <section className="mx-20 my-10">
      {Object.keys(data).length <= 0 ? (
        <p className="text-center">Loading data</p>
      ) : (
        <div className="grid xl:grid-cols-[20%_40%] lg:grid-cols-[20%_60%] grid-cols-1 lg:gap-14 gap-4 items-center justify-center">
          <div>
            <img
              src={data?.image}
              alt={data?.title}
              className="w-1/2 sm:w-[40%] mx-auto lg:w-auto"
            />
          </div>
          <div>
            <h2 className="md:text-2xl text-lg font-medium">{data?.title}</h2>
            <div className="flex flex-col md:flex-row lg:items-start xl:items-center md:items-center lg:flex-col xl:flex-row lg:gap-2 xl:gap-20 md:mt-5 mt-2.5 gap-1.5 sm:gap-3.5 md:gap-4">
              <p className="md:text-xl">Category: {data?.category}</p>
              <p className="md:text-xl">price: ${data?.price}</p>
            </div>
            <div className="mt-5">
              <p className="md:text-base text-sm text-left w-auto ">
                {data?.description ||
                  "There is no description about this product"}
              </p>
            </div>
            <div className="lg:mt-10 mt-4 flex items-center gap-4">
              <Button text="Add to cart" onClick={() => handleAddToCart()} />
              <Button text="Buy now" isLink otherLink link="/buy-now" />
            </div>
          </div>
        </div>
      )}
      <div className="mt-5">
        <h2 className="text-2xl font-bold ">Similar product</h2>
        <div className="mt-4 grid grid-cols-4 gap-4">
          {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            shuffleData.slice(0, 4).map((item: any) => (
              <Card item={item} key={item.id} />
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Page;
