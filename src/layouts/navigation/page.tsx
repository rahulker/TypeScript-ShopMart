import { CiMenuBurger, CiSearch } from "react-icons/ci";
import { Logo, NavHeader } from "../../Components/exports";
import { useEffect, useState } from "react";
import { RxAvatar } from "react-icons/rx";
import { HiXMark } from "react-icons/hi2";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { rootState } from "../../store/store";
import { handleShowModel } from "../../store/slices/common";
import { navigationLabel } from "../../utils/constants/navigationLabel";
import { handleLogOut } from "../../store/slices/userSlice";

const Page = () => {
  const [showMenu, setShowMenu] = useState(false);
  const isLogin = useSelector((state: rootState) => state.user.isLogin);
  const totalItem = useSelector((state: rootState) => state.cart.totalItem);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleShowMenu() {
    setShowMenu((state) => !state);
  }

  function handleLogUserOut() {
    setShowMenu(false);
    window.scrollTo(0, 0);
    dispatch(handleLogOut());
    navigate("/");
  }

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
    return () => {
      document.body.style.overflow = "scroll";
    };
  });

  function handleShowModelSearch() {
    dispatch(handleShowModel());
  }

  return (
    <>
      <nav className="hidden lg:flex items-center justify-evenly p-2 md:p-4 md:py-2 bg-white drop-shadow-lg">
        <NavHeader />
      </nav>
      <nav className="flex lg:hidden relative items-center justify-between p-2 md:p-4 md:py-2 bg-white drop-shadow-lg">
        <Logo />
        <div className="flex items-center gap-3.5">
          <CiSearch
            size={22}
            onClick={handleShowModelSearch}
            className="cursor-pointer"
          />
          {showMenu ? (
            <HiXMark
              className="cursor-pointer"
              onClick={handleShowMenu}
              size={22}
            />
          ) : (
            <CiMenuBurger
              className="cursor-pointer"
              onClick={handleShowMenu}
              size={22}
            />
          )}
          {isLogin && (
            <NavLink to="/user-profile" className="cursor-pointer">
              <RxAvatar size={22} />
            </NavLink>
          )}
        </div>
      </nav>
      <div
        className={`absolute w-full lg:hidden grid grid-cols-2 h-screen ${
          showMenu ? "right-0" : "right-full"
        } transition-all`}
      >
        <div className="px-4 z-50 flex flex-col items-start pt-4 gap-5 bg-white shadow-lg w-full">
          {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            navigationLabel.map((item: any) => (
              <NavLink
                to={item.path}
                onClick={() => {
                  window.scrollTo(0, 0);
                  setShowMenu(false);
                }}
                className="w-full"
                key={item.id}
              >
                {item.name == "Cart" ? item.name + `(${totalItem})` : item.name}
              </NavLink>
            ))
          }
          {!isLogin ? (
            <NavLink
              className="w-full text-left"
              onClick={() => {
                window.scrollTo(0, 0);
                setShowMenu(false);
              }}
              to="/login"
            >
              Log in
            </NavLink>
          ) : (
            <button
              className="w-full text-left"
              onClick={handleLogUserOut}
              type="button"
            >
              Log out
            </button>
          )}
        </div>
        <div className={`${showMenu && "bg-black z-50 opacity-30"} `}></div>
      </div>
    </>
  );
};

export default Page;
