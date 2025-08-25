"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";

// Optional: React icons for custom arrows
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Custom Arrow Components
const CustomPrevArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 left-[-30px] z-10 transform -translate-y-1/2 cursor-pointer"
    onClick={onClick}
  >
    <FaArrowLeft size={24} />
  </div>
);

const CustomNextArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 right-[-30px] z-10 transform -translate-y-1/2 cursor-pointer"
    onClick={onClick}
  >
    <FaArrowRight size={24} />
  </div>
);

const Hero = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  const images = [
    "/one.jpg",
    "/two.jpg",
    "/three.jpg",
    "/four.jpg",
    "/five.jpg",
    "/six.jpg",
  ];

  return (
    <div className="max-w-[1200px] mx-auto my-6 relative">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index}>
            <div className="w-full h-[500px] relative rounded overflow-hidden">
              <Image
                src={src}
                alt={`Slide ${index}`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
