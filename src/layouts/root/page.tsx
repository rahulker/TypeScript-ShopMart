import { Outlet } from "react-router-dom";
import { Navigation } from "../exports";
import { Toaster } from "react-hot-toast";

const Page = () => {
  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          className: "",
          duration: 1500,
          style: {
            background: "#ffffff",
            color: "black",
            fontWeight: "600",
            marginTop: "58px",
            fontSize: "12px",
          },

          success: {
            duration: 1500,
          },
          error: {
            duration: 1500,
          },
        }}
      />
      <Navigation />
      <section className="mx-20 my-10">
        <Outlet />
      </section>
    </>
  );
};

export default Page;
