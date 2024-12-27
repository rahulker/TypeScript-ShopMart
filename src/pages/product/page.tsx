import { ChangeEvent, useEffect, useState } from "react";
import { handleCategory } from "../../utils/apis/services/product";
import { useRouteLoaderData } from "react-router-dom";
import { Card } from "../../Components/exports";
import { categoryType } from "../../utils/interfaces/common";

const Page = () => {
  let newData = [];
  const data = useRouteLoaderData("Root");
  const [category, setCategory] = useState<categoryType>({
    categoryAll: {
      label: "All",
      slugValue: null,
    },
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

  if (category.categoryAll.label != "All") {
    newData = data.filter(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (item: any) => item.category === category.categoryAll.slugValue
    );
  }

  function handleSelectNewCategory(e: ChangeEvent<HTMLSelectElement>) {
    const selectedValue: object | string =
      category.gotCategory.find(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (item: any) => item.name === e.target.value
      ) || "";
    const slugVal = selectedValue ? selectedValue.slug : null;
    setCategory((state) => ({
      ...state,
      categoryAll: { label: e.target.value, slugValue: slugVal },
    }));
  }

  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">Product</h2>
        <div className="border px-2 gap-2 py-2 border-black rounded-lg md:w-auto flex items-center w-fit">
          <select
            className="w-full"
            onChange={(e) => handleSelectNewCategory(e)}
          >
            <option>All</option>
            {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              category.gotCategory.map((item: string | number | any) => (
                <option key={item.name}>{item.name}</option>
              ))
            }
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
