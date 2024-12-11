import { CiShoppingCart } from "react-icons/ci";
import { NavLink } from "react-router-dom";
const Page = () => {
  return (
    <NavLink to="/" className="flex items-center ">
      <CiShoppingCart size={50} />
      <div className="flex flex-col items-start gap-0">
        <h2 className="text-2xl font-medium">Shop</h2>
        <p className="text-xl -mt-1">Mart</p>
      </div>
    </NavLink>
  );
};

export default Page;
