import { Outlet } from "react-router-dom";
import { Navigation } from "../exports";
import { Toaster } from "react-hot-toast";
import { Footer, SearchModel } from "../../Components/exports";
import { useSelector } from "react-redux";
import { rootState } from "../../store/store";
import { useEffect, useState } from "react";

const Page = () => {
  const [applyMargin, setApplyMargin] = useState<boolean>(true);
  const [currentwidth, setCurrentwidth] = useState<number>(0);
  const showModal = useSelector((state: rootState) => state.commmon.showModal);
  useEffect(() => {
    handleGetBrowserWidth();
    window.addEventListener("resize", handleGetBrowserWidth);
    return () => {
      window.removeEventListener("resize", handleGetBrowserWidth);
    };
  }, []);

  function handleGetBrowserWidth() {
    setCurrentwidth(window.innerWidth);
  }

  useEffect(() => {
    if (currentwidth >= 1023) {
      setApplyMargin(true);
    } else {
      setApplyMargin(false);
    }
  }, []);

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
            marginTop: applyMargin ? "58px" : "0",
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
      <section className="2xl:mx-20 xl:my-10 lg:mx-10 lg:my-5 mx-4 my-5">
        <Outlet />
      </section>
      <Footer />
    </>
  );
};

export default Page;
