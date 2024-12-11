import { Outlet } from "react-router-dom";
import { Navigation } from "../exports";

const Page = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

export default Page;
