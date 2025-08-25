"use client";
import Image from "next/image";
import Card from "./components/Card";
import { useEffect, useState } from "react";
import axios from "axios";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Offer from "./components/Offer";

export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const resp = await axios.get("https://fakestoreapi.com/products");
        console.log(resp);
        setData(resp.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchdata();
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <Offer />
      <div className="h-screen flex flex-wrap gap-4 justify-center items-center m-15  ">
        {data.map((item) => (
          <Card key={item.id} item={item} />
        ))}
        ;
      </div>
    </>
  );
}
