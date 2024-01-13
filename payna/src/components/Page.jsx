// import React from 'react'
import { Icon } from "@iconify/react";
import foto from "../assets/foto.png";
import { TypeAnimation } from "react-type-animation";

const Page = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${foto})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="h-screen">
      <div className="flex flex-col gap-4 px-12 py-[400px] text-white ">
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "Only on this week hurry up",
            1500,
            "50% Off for all Shoes",
            1500, // wait 1s before replacing "Mice" with "Hamsters"
            "60% Off for all Shirts",
            1500,
            "Buy 2 get 3 ! ",
            1500,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: "5em", display: "inline-block" }}
          repeat={Infinity}
        />
        {/* <h4 className="text-6xl py-2 uppercase  tracking-[12px] ">50% Off for all Shoes </h4> */}
        {/* <h4 className="text-lg ">Featured </h4> */}
        <div className="flex flex-col">
          <p className="w-[80%] tracking-wide font-[200]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
            nibh pharetra ultrices pellentesque. Amet nunc vel aliquet augue
            tellus at bibendum molestie sem. Sed turpis cras arcu pharetra,
            pharetra.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            tellus at bibendum molestie sem. Sed turpis cras arcu pharetra,
            pharetra.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <a href="#products">
            <p className="text-md tracking-widest uppercase py-10 flex items-center gap-8 ">
              view products
              <Icon
                className="flex justify-center text-2xl items-center"
                icon="tabler:arrow-right"
              />
            </p>
          </a>
        </div>
      </div>
      {/* <h1 className="px-10 text-end text-white  py-20 text-8xl">
      FASHION SHOW
        </h1> */}
      {/* Content */}
    </section>
  );
};

export default Page;
