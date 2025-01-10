import { Outlet } from "react-router-dom";
import { Navigation } from "../exports";
import { Toaster } from "react-hot-toast";
import { Footer, SearchModel } from "../../Components/exports";
import { useSelector } from "react-redux";
import { rootState } from "../../store/store";

const Page = () => {
  const showModal = useSelector((state: rootState) => state.commmon.showModal);
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
      {showModal ? <SearchModel /> : <></>}
      <Navigation />
      <section className="xl:mx-20 xl:my-10 lg:mx-10 lg:my-5 mx-4 my-5">
        <Outlet />
      </section>
      <Footer />
    </>
  );
};

export default Page;
