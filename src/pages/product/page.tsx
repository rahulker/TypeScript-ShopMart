import { ChangeEvent, useEffect, useState } from "react";
import { handleCategory } from "../../utils/apis/services/product";
import { useRouteLoaderData } from "react-router-dom";
import { Card } from "../../Components/exports";
import { categoryType } from "../../utils/interfaces/common";

const Page = () => {
  let newData = [];
  const data = useRouteLoaderData("Root");
  const [category, setCategory] = useState<categoryType>({
    categoryAll: "All",
    gotCategory: [],
  });

  useEffect(() => {
    async function getCategory() {
      const newData = await handleCategory();
      setCategory((state) => ({ ...state, gotCategory: newData }));
    }
    getCategory();
    return () => {};
  }, []);

  if (category.categoryAll != "All") {
    newData = data.filter(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (item: any) => item.category === category.categoryAll
    );
  }

  function handleSelectNewCategory(e: ChangeEvent<HTMLSelectElement>) {
    setCategory((state) => ({
      ...state,
      categoryAll: e.target.value,
    }));
  }

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-2.5  sm:items-center sm:justify-between">
        <h2 className="lg:text-3xl sm:text-xl text-base md:text-2xl font-bold">
          Product
        </h2>
        <div className="border px-2 gap-2  py-2 border-black rounded-lg md:w-auto flex items-center w-fit">
          <select
            className="w-full focus:outline-none cursor-pointer"
            onChange={(e) => handleSelectNewCategory(e)}
          >
            <option>All</option>
            {category.gotCategory.map((item: string) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {newData.length > 0
          ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
            newData?.map((item: any) => <Card item={item} key={item.id} />)
          : // eslint-disable-next-line @typescript-eslint/no-explicit-any
            data?.map((item: any) => <Card item={item} key={item.id} />)}
      </div>
    </>
  );
};

export default Page;
