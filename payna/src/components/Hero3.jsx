// import React from 'react'
import { Icon } from "@iconify/react";
import foto3 from "../assets/hero3.png";
// import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from "framer-motion";
// // Import Swiper styles
// import 'swiper/css';

const Hero3 = () => {
  return (
    <section
      id="featured"
      style={{
        backgroundImage: `url(${foto3})`,
        // backgroundSize: "cover",
      }}
      className="h-screen py-32 justify-start ">
      <div className="flex flex-col gap-4 px-12 py-24 text-white ">
        <motion.h4
          className="text-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
          >
          Featured Project
        </motion.h4>
        <motion.p
          className="w-[40%] tracking-wide font-[200]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.5, duration: 1.2 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
          nibh pharetra ultrices pellentesque. Amet nunc vel aliquet augue
          tellus at bibendum molestie sem. Sed turpis cras arcu pharetra,
          pharetra.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Elementum nibh pharetra ultrices pellentesque. Amet nunc vel aliquet
          augue tellus at bibendum molestie sem. Sed turpis cras arcu pharetra,
          pharetra.
        </motion.p>

        <motion.h4 className="text-5xl py-2 uppercase  tracking-[15px]"
        
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.5, duration: 1.3 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        
        >
          Elegant Dancing
        </motion.h4>
        <a href="#">
          <motion.p className="text-md tracking-widest uppercase py-4 flex items-center gap-8 "
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.5 }}
             transition={{ delay: 0.5, duration: 1.5 }}
             variants={{
               hidden: { opacity: 0, x: 50 },
               visible: { opacity: 1, x: 0 },
             }}
          
          >
            view project
            <Icon
              className="flex justify-center text-2xl items-center"
              icon="tabler:arrow-right"
            />
          </motion.p>
        </a>
      </div>
    </section>
  );
};

export default Hero3;
