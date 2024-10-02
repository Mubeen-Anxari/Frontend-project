import React from "react";

export default function Description() {
  return (
    <div className=" flex flex-col items-center justify-center mt-10">
      <h1 className="text-3xl md:text-4xl lg:text-6xl text-[#F0F0F0] italic font-bold font-serif ">
        Welcome to Naples
      </h1>
      <h1 className="text-xl md:text-2xl lg:text-3xl  text-[#67666A] italic font-bold font-serif ">
        Welcome to Naples
      </h1>
      <div className="text-base md:text-lg lg:text-xl ">
        <p className=" flex justify-center text-[#67666A] w-[500px]">
          We started working in 2007 and in 2012 we were able to{" "}
        </p>
        <p className=" flex justify-center  text-[#67666A] w-[500px]">
       open our second branch and now we have several 
        </p>
        <p className=" flex justify-center  text-[#67666A] w-[500px]">
        branches all over the country.
        </p>
      </div>{" "}
    </div>
  );
}