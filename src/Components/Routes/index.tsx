import { createBrowserRouter } from "react-router-dom";
import { Root } from "../../layouts/exports";
import {
  BuyNow,
  Cart,
  Dashboard,
  LogIn,
  Product,
  ProductDetail,
  SignUp,
  UserProfile,
} from "../../pages/exports";
import { allProduct } from "../../utils/apis/services/product";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: () => allProduct(),
    id: "Root",
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/product",
        children: [
          {
            index: true,
            element: <Product />,
          },
          {
            index: false,
            path: "/product/:id",
            element: <ProductDetail />,
          },
        ],
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/user-profile",
        element: <UserProfile />,
      },
      {
        path: "/buy-now",
        element: <BuyNow />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "*",
        element: <Dashboard />,
      },
    ],
  },
]);
