/* eslint-disable react/prop-types */

import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "./Button";

const ShowProductById = () => {
    const url = "https://phase2-aio.vercel.app";
    const [showProduct, setShowProduct] = useState({});
    const {id} = useParams()

    async function fetchProduct() {
        try {
            const {data} = await axios.get(`${url}/apis/pub/branded-things/products/${id}`)
            setShowProduct(data.data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=> {
        console.log('jalanin use effect');
        fetchProduct()
    },[])

  return (
    <>
      <section id="id" className="flex py-[200px] px-20 pb-32 justify-between " >
        <div className="w-3/5 flex flex-col">
            <img className="object-cover rounded-xl h-full w-4/6 " src={showProduct.imgUrl} alt="" />
            {/* <h1 className="text-5xl">{showProduct.imgUrl}</h1> */}
        </div>
        <div className="w-3/5 flex flex-col gap-8">
            
            <h1 className="text-7xl font-semibold first-letter:uppercase tracking-[2px]  ">{showProduct.name}</h1>
        <h1 className="text-5xl font-semibold tracking-wide"> Rp. {showProduct.price}</h1>
        <p className="uppercase text-4xl ">Stock : {showProduct.stock}</p>
        <p className="text-2xl font-[300] tracking-tighter ">{showProduct.description}</p>
        <Button  title={'Buy now'}/>
        </div>
      </section>
    </>
  );
};

export default ShowProductById;
