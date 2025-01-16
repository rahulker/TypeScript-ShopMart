import { CiSearch } from "react-icons/ci";
import { Logo } from "../exports";
import { navigationLabel } from "../../utils/constants/navigationLabel";
import { NavLink, useNavigate } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { rootState } from "../../store/store";
import { handleLogOut } from "../../store/slices/userSlice";
import { handleShowModel } from "../../store/slices/common";
const normalClass =
  "font-light text-base text-sm hover:font-bold drop-shadow-lg transition-all ";
const activeCss = "font-semibold text-sm drop-shadow-lg";
const Component = () => {
  const isLogin: boolean = useSelector(
    (state: rootState) => state.user.isLogin
  );
  const totalItem: number = useSelector(
    (state: rootState) => state.cart.totalItem
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function handleLogOutUser() {
    dispatch(handleLogOut());
    navigate("/");
  }
  function showModel() {
    dispatch(handleShowModel());
  }
  return (
    <>
      <Logo />
      {/* search */}
      <div
        className="bg-[#F0F5FF] grid grid-cols-[5%_95%] items-center gap-4 px-4  lg:min-w-[400px]"
        onClick={() => showModel()}
      >
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
          <button
            className="hover:font-semibold"
            onClick={handleLogOutUser}
            type="button"
          >
            Log out
          </button>
          <NavLink to="/user-profile" className="flex items-center gap-2">
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
