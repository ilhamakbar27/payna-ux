import { Swiper, SwiperSlide } from "swiper/react";
//
import foto6 from "../assets/poto6.png";
import foto7 from "../assets/poto7.png";
import foto8 from "../assets/poto8.png";
import foto9 from "../assets/poto9.png";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/a11y";
import "swiper/css/autoplay";
// swiper/css/autoplay
const SwiperTest = () => {
  return (
    <div id="showcase" className="bg-black ">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        autoplay={{ delay: 1500 }}>
        <SwiperSlide>
          <section
            style={{
              backgroundImage: `url(${foto6})`,
            //   backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            className="">
            <div className="flex flex-col gap-4 px-12 py-[400px] text-white ">
              <h4 className="text-6xl py-2 uppercase  tracking-[12px] ">
                NEW faces
              </h4>
              {/* <h4 className="text-lg ">Featured </h4> */}
              <div className="flex flex-col">
                <p className="w-[80%] tracking-wide font-[200]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Elementum nibh pharetra ultrices pellentesque. Amet nunc vel
                  aliquet augue tellus at bibendum molestie sem. Sed turpis cras
                  arcu pharetra, pharetra.Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. tellus at bibendum molestie sem.
                  Sed turpis cras arcu pharetra, pharetra.Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit.
                </p>
                <a href="#">
                  <p className="text-md tracking-widest uppercase py-10 flex items-center gap-8 ">
                    view products
                    {/* <Icon
                className="flex justify-center text-2xl items-center"
                icon="tabler:arrow-right"
              /> */}
                  </p>
                </a>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section
            style={{
              backgroundImage: `url(${foto7})`,
            //   backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            className="">
            <div className="flex flex-col gap-4 px-12 py-[400px] text-white ">
              <h4 className="text-6xl py-2 uppercase  tracking-[12px] ">
                brand new day
              </h4>
              {/* <h4 className="text-lg ">Featured </h4> */}
              <div className="flex flex-col">
                <p className="w-[80%] tracking-wide font-[200]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Elementum nibh pharetra ultrices pellentesque. Amet nunc vel
                  aliquet augue tellus at bibendum molestie sem. Sed turpis cras
                  arcu pharetra, pharetra.Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. tellus at bibendum molestie sem.
                  Sed turpis cras arcu pharetra, pharetra.Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit.
                </p>
                <a href="#">
                  <p className="text-md tracking-widest uppercase py-10 flex items-center gap-8 ">
                    view products
                    {/* <Icon
                className="flex justify-center text-2xl items-center"
                icon="tabler:arrow-right"
              /> */}
                  </p>
                </a>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <SwiperSlide>
            <section
              style={{
                backgroundImage: `url(${foto8})`,
                // backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              className="">
              <div className="flex flex-col gap-4 px-12 py-[400px] text-white ">
                <h4 className="text-6xl py-2 uppercase  tracking-[12px] ">
                  NEW faces
                </h4>
                {/* <h4 className="text-lg ">Featured </h4> */}
                <div className="flex flex-col">
                  <p className="w-[80%] tracking-wide font-[200]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Elementum nibh pharetra ultrices pellentesque. Amet nunc vel
                    aliquet augue tellus at bibendum molestie sem. Sed turpis
                    cras arcu pharetra, pharetra.Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. tellus at bibendum molestie
                    sem. Sed turpis cras arcu pharetra, pharetra.Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <a href="#">
                    <p className="text-md tracking-widest uppercase py-10 flex items-center gap-8 ">
                      view products
                      {/* <Icon
                className="flex justify-center text-2xl items-center"
                icon="tabler:arrow-right"
              /> */}
                    </p>
                  </a>
                </div>
              </div>
            </section>
          </SwiperSlide>
        </SwiperSlide>
        <SwiperSlide>
          <SwiperSlide>
            <section
              style={{
                backgroundImage: `url(${foto9})`,
                //  backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
              }}
              className="">
              <div className="flex flex-col gap-4 px-12 py-[400px] text-white ">
                <h4 className="text-6xl py-2 uppercase  tracking-[12px] ">
                  NEW faces
                </h4>
                {/* <h4 className="text-lg ">Featured </h4> */}
                <div className="flex flex-col">
                  <p className="w-[80%] tracking-wide font-[200]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Elementum nibh pharetra ultrices pellentesque. Amet nunc vel
                    aliquet augue tellus at bibendum molestie sem. Sed turpis
                    cras arcu pharetra, pharetra.Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. tellus at bibendum molestie
                    sem. Sed turpis cras arcu pharetra, pharetra.Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <a href="#">
                    <p className="text-md tracking-widest uppercase py-10 flex items-center gap-8 ">
                      view products
                      {/* <Icon
                className="flex justify-center text-2xl items-center"
                icon="tabler:arrow-right"
              /> */}
                    </p>
                  </a>
                </div>
              </div>
            </section>
          </SwiperSlide>
        </SwiperSlide>
        ...
      </Swiper>
    </div>
  );
};

export default SwiperTest;
