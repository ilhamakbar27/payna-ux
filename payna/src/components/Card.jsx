/* eslint-disable react/prop-types */
// import React from 'react'

// eslint-disable-next-line react/prop-types
const Card = ({ product }) => {
  return (
    <>
      {/* <a href="#prod"></a> */}
      <div className="hover:ease-out hover:scale-105 hover:transition-all duration-300 py-4">
        <a href="#id">
          <img
            className="h-full   w-full object-cover"
            src={product.imgUrl}
            alt="Streetwear Product Image"
          />
        </a>

        <div className="flex py-2 justify-between">
          <div className="flex flex-col gap-1">
            <h1 className="uppercase tracking-widest text-start text-xl ">
              {product.name}
            </h1>
            <h4>{product.Category.name}</h4>
          </div>
          <div className="flex flex-col ">
            <h3 className="text-xl font-semibold pl-5">Rp.{product.price}</h3>
            <h3 className="text-lg  text-end"> Stock :{product.stock} </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
