"use client";
import axios from "axios";
import { endpointServerChangedSubscribe } from "next/dist/build/swc/generated-native";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Product = () => {
  const { id } = useParams();
  const [product, setproduct] = useState([]);
  useEffect(() => {
    const productdata = async () => {
      try {
        const det = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setproduct(det.data);
        console.log("product data yaha hai", det.data);
      } catch (e) {
        console.log(e);
      }
    };
    productdata();
  }, [id]);
  return (
    <>
      <div className="h-screen ">
        <div className="h-2/3 m-20 border rounded-lg flex ">
          <div className="w-1/2 m-4">
            <Image height={170} width={170} alt="pic" src={product.image} />
          </div>
          <div className="w-1/2 m-4">two</div>
        </div>
      </div>
    </>
  );
};

export default Product;
