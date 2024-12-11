import { RouterProvider } from "react-router-dom";
import { router } from "./Components/Routes";
import { handleSingleProduct } from "./utils/apis/services/product";
import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function name() {
      const res = await handleSingleProduct(1);
      setData(res);
    }
    name();

    return () => {};
  }, []);
  console.log(data);

  return <RouterProvider router={router} />;
};

export default App;
