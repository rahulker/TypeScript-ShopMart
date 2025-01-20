import { CiShoppingCart } from "react-icons/ci";
import { NavLink } from "react-router-dom";
const Page = ({ onShowMenu }: { onShowMenu: (action: any) => void }) => {
  function handleOnClick() {
    onShowMenu(false);
  }
  return (
    <NavLink to="/" onClick={handleOnClick} className="flex items-center ">
      <CiShoppingCart size={50} />
      <div className="flex flex-col items-start gap-0">
        <h2 className="md:text-2xl text-xl font-medium">Shop</h2>
        <p className="md:text-xl text-lg -mt-1">Mart</p>
      </div>
    </NavLink>
  );
};

export default Page;
