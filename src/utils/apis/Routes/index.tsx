import { createBrowserRouter } from "react-router-dom";
import Root from "../../../layouts/root/page";
import {
  BuyNow,
  Cart,
  Dashboard,
  LogIn,
  Product,
  ProductDetail,
  SignUp,
  UserProfile,
} from "../../../pages/exports";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/product",
        element: <Product />,
        children: [
          {
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
    ],
  },
]);
