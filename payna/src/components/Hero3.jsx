// import React from 'react'
import { Icon } from "@iconify/react";
import foto3 from "../assets/hero3.png";
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';


const Hero3 = () => {
  return (
    <section id="featured"
      style={{
        backgroundImage: `url(${foto3})`,
        // backgroundSize: "cover",
      }}
      className="h-screen py-32 justify-start ">
      <div className="flex flex-col gap-4 px-12 py-24 text-white ">
      <h4 className="text-lg ">Featured Project</h4>
        <p className="w-[40%] tracking-wide font-[200]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
          nibh pharetra ultrices pellentesque. Amet nunc vel aliquet augue
          tellus at bibendum molestie sem. Sed turpis cras arcu pharetra,
          pharetra.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Elementum nibh pharetra ultrices pellentesque. Amet nunc vel aliquet
          augue tellus at bibendum molestie sem. Sed turpis cras arcu pharetra,
          pharetra.
        </p>
        <h4 className="text-5xl py-2 uppercase  tracking-[15px] ">Elegant Dancing</h4>
        <a href="#">
              <p className="text-md tracking-widest uppercase py-4 flex items-center gap-8 ">
                view project
                <Icon
                  className="flex justify-center text-2xl items-center"
                  icon="tabler:arrow-right"
                />
              </p>
            </a>
      </div>
    </section>
  );
};

export default Hero3;
