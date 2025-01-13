import { RxArrowRight } from "react-icons/rx";
import { NavLink, useRouteLoaderData } from "react-router-dom";
import { Card } from "../../Components/exports";
import { Swiper, SwiperSlide } from "swiper/react";
import { IMAGEPATH } from "../../utils/constants/image";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useRef } from "react";

const Page = () => {
  const data = useRouteLoaderData("Root");
  const shuffle = [...data].sort(() => Math.random() - 0.5);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  useEffect(() => {
    if (navigationPrevRef.current && navigationNextRef.current) {
      const swiperInstance = document.querySelector(".swiper")?.swiper;
      if (swiperInstance) {
        swiperInstance.params.navigation.prevEl = navigationPrevRef.current;
        swiperInstance.params.navigation.nextEl = navigationNextRef.current;
        swiperInstance.navigation.init();
        swiperInstance.navigation.update();
      }
    }
  }, []);

  return (
    <>
      <div className="flex flex-col gap-8 w-full">
        <div className="2xl:-mx-20 xl:-mt-10 lg:-mx-10 lg:-mt-5 -mx-4 -mt-5">
          <Swiper
            spaceBetween={25}
            slidesPerView={1}
            autoplay={{ delay: 2000 }}
            loop
            modules={[Autoplay, Pagination, Navigation]}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onBeforeInit={(swiper: any) => {
              swiper.params.navigation.nextEl = navigationNextRef.current;
              swiper.params.navigation.prevEl = navigationPrevRef.current;
            }}
          >
            <SwiperSlide>
              <img
                src={IMAGEPATH.banner1}
                className="w-full h-[280px] sm:h-[300px] md:h-[380px] lg:h-[580px] object-cover"
                alt="banner 1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={IMAGEPATH.banner2}
                className="w-full h-[280px] sm:h-[300px] md:h-[380px] lg:h-[580px] object-cover"
                alt="banner 2"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={IMAGEPATH.banner3}
                className="w-full h-[280px] sm:h-[300px] md:h-[380px] lg:h-[580px] object-cover"
                alt="banner 3"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="flex gap-2.5 w-full justify-end">
          <button
            className="py-3 text-center px-4 bg-black text-white focus:outline-none hover:text-black hover:bg-white rounded-xl hover:drop-shadow-lg border border-black transition-all"
            type="button"
            ref={navigationPrevRef}
          >
            <FaChevronLeft />
          </button>
          <button
            className="py-3 text-center px-4 bg-black text-white focus:outline-none hover:text-black hover:bg-white rounded-xl hover:drop-shadow-lg border border-black transition-all"
            type="button"
            ref={navigationNextRef}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
      <div>
        <div className="flex justify-between mt-5 items-center">
          <h2 className="font-bold md:text-2xl text-base">Feature Product</h2>
          <NavLink
            to="/product"
            className="flex items-center gap-1.5 text-base hover:font-bold"
          >
            View more
            <RxArrowRight />
          </NavLink>
        </div>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {shuffle
            .slice(0, 8)
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .map((item: any) => (
              <Card item={item} key={item.id} />
            ))}
        </div>
      </div>
    </>
  );
};

export default Page;
