// import React from 'react'
import foto from "../assets/hero1.png";
import { Icon } from "@iconify/react";
import foto2 from "../assets/hero2.png";
import { motion } from "framer-motion";

const Hero2 = () => {
  return (
    <section className="px-12 bg-black text-white flex flex-col h-[1000px] py-20">
      <div className="flex  justify-between">
        <motion.div
          className="w-[30%]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}>
          <img className="object-cover" src={foto} alt="" />
        </motion.div>
        <div className="w-[65%] py-10">
          <div className="flex flex-col gap-10">
            <motion.p
              className="w-[80%]  text-5xl font-semibold "
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.5, duration: 1 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}>
              Indulge in timeless fashion trends at our exclusive Based in
              Jakarta, Indonesia
            </motion.p>
            <motion.p
              className="w-[50%]"
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
              pharetra.
            </motion.p>
            <a href="#">
              <motion.p
                className="text-xl py-10 flex items-center gap-3 "
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.5, duration: 1.3 }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}>
                About us
                <Icon
                  className="flex justify-center text-2xl items-center"
                  icon="tabler:arrow-right"
                />
              </motion.p>
            </a>
          </div>
        </div>
      </div>
      <motion.div
        className="flex justify-end "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.6, duration: 1.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}>
        <img className="object-cover  w-[45%]" src={foto2} alt="" />
      </motion.div>
    </section>
  );
};

export default Hero2;
