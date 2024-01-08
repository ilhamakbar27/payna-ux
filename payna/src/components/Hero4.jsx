import foto4 from "../assets/foto4.png";
import { Icon } from "@iconify/react";
const Hero4 = () => {
  return (
    <>
      <section className=" h-[700px] py-28">
        <div className="flex justify-between">
          <div className="w-[45%] flex justify-center">
            <div className="flex flex-col justify-end items-end gap-6">
              <h2 className="text-5xl w-[80%] font-semibold 
              ">Vintage Elegance: Unforgettable Deals Await!</h2>
              <p className="w-[80%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Elementum nibh pharetra ultrices pellentesque. Amet nunc vel
                aliquet augue tellus at bibendum molestie sem. Sed turpis cras
                arcu pharetra, pharetra.Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Elementum nibh pharetra ultrices pellentesque.
                Amet nunc vel aliquet augue tellus at bibendum molestie sem. Sed
                turpis cras arcu pharetra, pharetra.
              </p>
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
          </div>
          <div className="w-[50%]">
            <img className="object-cover" src={foto4} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero4;
