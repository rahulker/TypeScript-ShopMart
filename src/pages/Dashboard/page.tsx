import { RxArrowRight } from "react-icons/rx";
import { NavLink, useRouteLoaderData } from "react-router-dom";
import { Card } from "../../Components/exports";

const Page = () => {
  const data = useRouteLoaderData("Root");
  const shuffle = [...data].sort(() => Math.random() - 0.5);
  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="font-bold md:text-2xl text-base">Feature Product</h2>
        <NavLink
          to="/product"
          className="flex items-center gap-1.5 text-base hover:font-bold"
        >
          View more
          <RxArrowRight />
        </NavLink>
      </div>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {shuffle
          .slice(0, 8)
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          .map((item: any) => (
            <Card item={item} key={item.id} />
          ))}
      </div>
    </>
  );
};

export default Page;
