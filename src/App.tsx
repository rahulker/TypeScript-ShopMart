import { RouterProvider } from "react-router-dom";
import { router } from "./utils/apis/Routes";

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
