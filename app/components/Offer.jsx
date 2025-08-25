import React from "react";
import Image from "next/image";

const Offer = () => {
  return (
    <>
      {/* one */}
      <h1 className="font-bold mx-10 px-10 text-2xl underline-offset-4">
        Unskippable Offers
      </h1>
      <div className="flex  h-70 mx-10 justify-center gap-5 items-center px-8">
        <div className="w-50 h-60 shadow-lg rounded-2xl ">
          <div className="relative w-full h-[200px] ">
            <Image
              src={"/image/1.jpg"}
              alt="pic"
              fill
              className="rounded-2xl"
            />
          </div>
          <h1 className=" text-center font-bold text-lg m-1">Flat 50% off</h1>
        </div>
        {/* two */}
        <div className="w-50 h-60 shadow-lg rounded-2xl ">
          <div className="relative w-full h-[200px] ">
            <Image
              src={"/image/2.jpg"}
              alt="pic"
              fill
              className="rounded-2xl"
            />
          </div>
          <h1 className=" text-center font-bold text-lg m-1">Flat 50% off</h1>
        </div>
        {/* three */}
        <div className="w-50 h-60 shadow-lg rounded-2xl ">
          <div className="relative w-full h-[200px] ">
            <Image
              src={"/image/3.jpg"}
              alt="pic"
              fill
              className="rounded-2xl"
            />
          </div>
          <h1 className=" text-center font-bold text-lg m-1">Flat 50% off</h1>
        </div>
        {/* four */}
        <div className="w-50 h-60 shadow-lg rounded-2xl ">
          <div className="relative w-full h-[200px] ">
            <Image
              src={"/image/4.jpg"}
              alt="pic"
              fill
              className="rounded-2xl"
            />
          </div>
          <h1 className=" text-center font-bold text-lg m-1">Flat 50% off</h1>
        </div>
        {/* five */}
        <div className="w-50 h-60 shadow-lg rounded-2xl ">
          <div className="relative w-full h-[200px] ">
            <Image
              src={"/image/5.jpg"}
              alt="pic"
              fill
              className="rounded-2xl"
            />
          </div>
          <h1 className=" text-center font-bold text-lg m-1">Flat 50% off</h1>
        </div>
        {/* six */}
        <div className="w-50 h-60 shadow-lg rounded-2xl ">
          <div className="relative w-full h-[200px] ">
            <Image
              src={"/image/6.jpg"}
              alt="pic"
              fill
              className="rounded-2xl"
            />
          </div>
          <h1 className=" text-center font-bold text-lg m-1">Flat 50% off</h1>
        </div>
      </div>
      <div className="mx-10 my-2 ">
        <div className="relative  h-[325px] m-8">
          <Image
            src={"/image/hero.jpg"}
            alt="pic"
            fill
            quality={100}
            className=" object-contain w-full"
          />
        </div>
      </div>
    </>
  );
};

export default Offer;
