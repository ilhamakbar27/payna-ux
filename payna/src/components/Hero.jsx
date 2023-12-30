import heroImg from "../assets/image 3.png"
import img2 from "../assets/Group 6.png"

const Hero = () => {
  return (
    <>
      <section className=" py-10 max-md:py-1 flex  max-lg:flex-col justify-between">
        <div className=" px-20 max-md:px-5 py-20 max-h-xl   flex flex-col gap-10 max-md:gap-7 max-lg:w-full w-[50%]">
          <div className="flex gap-6 flex-col">
            <h1 className="font-bold max-md:text-4xl text-6xl">
              Manage Payroll
            </h1>
            <h1 className="font-bold max-md:text-4xl  text-6xl">
              Like an Expert
            </h1>
          </div>
          <p className="text-lg font-[300]">
            Payna is helping you to setting up the payroll without required any
            finance skills or knowledge before
          </p>
          <button className="bg-[#1F7CFF] hover:bg-blue-700 text-xl py-4 px-8 w-[40%] max-md:w-[70%] max-md:py-3 max-md:px-5 rounded-full font-semibold text-white">
            Get Started
          </button>
        </div>
        <div className="w-[45%] max-lg:hidden relative  pt-5 pr-10">
          <img
            className="object-cover absolute  rounded-3xl"
            src={heroImg}
            alt=""
          />
          <img
            className="absolute top-20 left-[27vw]"
            src={img2}
            alt=""
          />
          <img
            className="absolute top-40 right-[37vw]"
            src="Group 7.png"
            alt=""
          />
        </div>
      </section>
      <div className="flex px-20 max-md:px-5 max-lg:gap-8 font-semibold lg:gap-[200px] text-xl max-lg:flex-col md:justify-between">
        <p className="max-md:hidden">Trusted by Global Companies</p>
        <p className="md:hidden">Trusted by Global Companies</p>
        <img className="flex h-full w-full  " src="Group 14.png" alt="" />
      </div>
    </>
  );
};

export default Hero;
