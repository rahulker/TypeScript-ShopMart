import { Button } from "../../exports";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Page = ({ item }: any) => {
  return (
    <div className="flex flex-col gap-4 shadow-lg px-2 py-3 border border-black rounded-lg justify-evenly">
      <img
        src={item.image}
        alt={item.title}
        className="mx-auto  w-[200px] h-[200px] object-contain"
      />
      <div>
        <h2 className="md:text-xl w-[260px] sm:w-auto text-lg des leading-[30px]">
          {item.title}
        </h2>
        <p className="des text-sm w-[260px] sm:w-auto mt-2 leading-[18px]">
          {item.description}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <div>
          <p className="text-sm leading-3">Price: ${item.price}</p>
        </div>
        <div>
          <p className="text-sm leading-3">category: {item.category}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button isLink id={item.id} text="view more" classCss="w-full" />
        <Button
          text="buy now"
          classCss="w-full"
          isLink
          otherLink
          link="/buy-now"
        />
      </div>
    </div>
  );
};

export default Page;
