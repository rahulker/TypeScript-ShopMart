import { CiSearch } from "react-icons/ci";
import { Logo } from "../exports";
import { navigationLabel } from "../../utils/constants/navigationLabel";
import { NavLink } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
import { useSelector } from "react-redux";
import { rootState } from "../../store/store";
const normalClass =
  "font-light text-base text-sm hover:font-bold drop-shadow-lg transition-all ";
const activeCss = "font-semibold text-sm drop-shadow-lg";
const Component = () => {
  const isLogin = useSelector((state: rootState) => state.user.isLogin);
  const totalItem = useSelector((state: rootState) => state.cart.totalItem);
  return (
    <>
      <Logo />
      {/* search */}
      <div className="bg-[#F0F5FF] grid grid-cols-[5%_95%]  items-center gap-4 px-4  lg:min-w-[400px]">
        <CiSearch size={25} />
        <span className="border-l border-gray-300">
          <input
            type="text"
            className="bg-transparent w-full p-2 pr-0 focus:border-none placeholder:text-black"
            placeholder="Search"
          />
        </span>
      </div>
      {/* links */}
      <ul className="flex items-center gap-6">
        {navigationLabel.map((item) => (
          <NavLink
            className={({ isActive }: { isActive: boolean }) =>
              isActive ? activeCss : normalClass
            }
            key={item.id}
            to={item.path}
          >
            {item.name}
            {item.name === "Cart" ? `(${totalItem})` : ""}
          </NavLink>
        ))}
      </ul>
      {/* user Login */}
      {isLogin ? (
        <div className="flex  items-center gap-5">
          <button className="hover:font-semibold">Log out</button>
          <NavLink to="/user" className="flex items-center gap-2">
            <RxAvatar size={25} />
          </NavLink>
        </div>
      ) : (
        <NavLink
          to="/login"
          className={({ isActive }: { isActive: boolean }) =>
            isActive ? activeCss : normalClass
          }
        >
          Log in
        </NavLink>
      )}
    </>
  );
};

export default Component;
