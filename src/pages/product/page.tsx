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
      const data = await handleCategory();
      setCategory((state) => ({ ...state, gotCategory: data }));
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
    setCategory((state) => ({ ...state, categoryAll: e.target.value }));
  }

  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">Product</h2>
        <div className="border px-2 gap-2 py-2 border-black rounded-lg md:w-auto flex items-center w-fit">
          <select className="w-full" onChange={handleSelectNewCategory}>
            <option>All</option>
            {category.gotCategory.map((item: string | number) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-4 grid-rows-2 gap-4">
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
