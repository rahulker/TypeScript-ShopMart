import { CiMenuBurger, CiSearch } from "react-icons/ci";
import { Logo, NavHeader } from "../../Components/exports";
import { useState } from "react";
import { FaCross } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";

const Page = () => {
  const [showMenu, setShowMenu] = useState(false);
  function handleShowMenu() {
    setShowMenu((state) => !state);
  }
  return (
    <>
      <nav className="hidden lg:flex items-center justify-evenly p-2 md:p-4 md:py-2 bg-white drop-shadow-lg">
        <NavHeader />
      </nav>
      <nav className="flex lg:hidden items-center justify-between p-2 md:p-4 md:py-2 bg-white drop-shadow-lg">
        <Logo />
        <div className="flex items-center gap-2.5">
          <CiSearch size={25} />
          {showMenu ? <FaCross size={25} /> : <CiMenuBurger size={25} />}
          <RxAvatar size={25} />
        </div>
      </nav>
    </>
  );
};

export default Page;
