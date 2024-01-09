// import React from 'react'

const Card = () => {
  return (
    <>
      <div className="hover:ease-out hover:scale-105 hover:transition-all duration-300 py-4">
        <img
          className="h-20vh   w-30vw object-cover"
          src="https://i.pinimg.com/474x/47/0d/03/470d03b1168c3174b9f000d61a411ddc.jpg"
          alt="Streetwear Product Image"
        />
        <div className="flex py-2 justify-between">
          <div className="flex flex-col gap-1">
            <h1 className="uppercase tracking-widest text-start text-xl ">
              Baju bonge
            </h1>
            <h4>Streetwear</h4>
          </div>
          <div className="flex flex-col ">
            <h3 className="text-2xl font-semibold pl-5">$100</h3>
            {/* <h3 className="text-xl font-semibold pl-10">baju </h3> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
