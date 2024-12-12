import { RouterProvider } from "react-router-dom";
import { router } from "./Components/Routes";

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
