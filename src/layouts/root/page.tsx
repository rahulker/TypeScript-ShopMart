import { Outlet } from "react-router-dom";
const api = import.meta.env.PRODUCT_BASE_API;
console.log(api);

const Root = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default Root;
