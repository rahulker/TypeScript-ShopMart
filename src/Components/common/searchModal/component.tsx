/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch } from "react-redux";
import { handleHideModel } from "../../../store/slices/common";
import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useRouteLoaderData } from "react-router-dom";
import { HiXMark } from "react-icons/hi2";
import { SearchItem } from "../../exports";
import { useDebounce } from "@uidotdev/usehooks";

const Component = () => {
  const dispatch = useDispatch();
  const [SearchData, setSearchData] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const deBoundSearch = useDebounce(SearchData, 1000);
  const data = useRouteLoaderData("Root");
  const [searchDataArr, setSearchDataArr] = useState<any[]>([]);

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === "Escape") {
      dispatch(handleHideModel());
    }
  }

  function handleChangeInput(e: ChangeEvent<HTMLInputElement>) {
    setLoading(true);
    setSearchData(e.target.value);
  }

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "scroll";
    };
  });

  useEffect(() => {
    const handleKeyDownTyped = (e: KeyboardEvent) => handleKeyDown(e);
    document.addEventListener(
      "keydown",
      handleKeyDownTyped as unknown as EventListener
    );
    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDownTyped as unknown as EventListener
      );
    };
  }, []);

  useEffect(() => {
    if (deBoundSearch !== "") {
      setLoading(false);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      const newData = data?.filter((item: any) =>
        item.title.toLowerCase().includes(deBoundSearch.toLowerCase())
      );
      setSearchDataArr(newData);
    } else {
      setLoading(false);
      setSearchDataArr([]);
    }
  }, [deBoundSearch, data]);

  return (
    <div className="modal__backdrop !z-[100] h-screen">
      <div className="modal__container  md:h-auto">
        <div className="grid sm:grid-cols-[91%_5%] grid-cols-[auto_10%] gap-6 items-center">
          <div className="bg-[#F0F5FF] grid grid-cols-[10%_auto] sm:grid-cols-[5%_93.5%] items-center gap-2 pl-2.5 lg:min-w-[400px]">
            <CiSearch size={25} />
            <span className="border-l border-gray-300">
              <input
                type="text"
                className="bg-transparent w-full p-2 pr-0 focus:border-none placeholder:text-black"
                autoFocus
                placeholder="Search"
                onChange={(e) => handleChangeInput(e)}
              />
            </span>
          </div>
          <div
            onClick={() => dispatch(handleHideModel())}
            className="cursor-pointer"
          >
            <HiXMark size={25} />
          </div>
        </div>
        <div className="mt-4 !overflow-y-scroll">
          {loading ? (
            <p className="text-center text-xl mt-3">Searching...</p>
          ) : searchDataArr?.length > 0 ? (
            searchDataArr?.slice(0, 4).map((item: any) => {
              return (
                <SearchItem
                  item={item}
                  key={item.id}
                  dispatch={dispatch}
                  handleShowModel={handleHideModel}
                />
              );
            })
          ) : (
            data?.slice(0, 4).map((item: any) => {
              return (
                <SearchItem
                  item={item}
                  key={item.id}
                  dispatch={dispatch}
                  handleShowModel={handleHideModel}
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Component;
