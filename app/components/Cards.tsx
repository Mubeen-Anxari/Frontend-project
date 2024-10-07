import React from "react";
import Image from "next/image";

export default function Cards() {
  return (
  <div>
    <div className=" mt-16">
      <Image src='/Vector.png' width={300} height={300} alt="vector"></Image>
    </div>
      <div className=" flex justify-center  mt-10">
      {" "}
      <div className=" flex  justify-between flex-col md:flex-row  gap-8  ">
        <div className="relative w-64 h-80 lg:w-96 md:h-96 overflow-hidden rounded-lg shadow-lg">
          {/* Image */}
          <Image
            className="object-cover w-full h-full"
            src="/Appetizer.jpg" // Replace with your image path
            alt="Appetizer"
            width={356}
            height={420}
          />

          {/* Text Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <h2 className="text-white text-2xl font-bold">Appetizer</h2>
          </div>
        </div>
        <div className="relative w-64 h-80 lg:w-96 md:h-96  overflow-hidden rounded-lg shadow-lg">
          {/* Image */}
          <Image
            className="object-cover w-full h-full"
            src="/Desert.webp" // Replace with your image path
            alt="Desert"
            width={356}
            height={420}
          />

          {/* Text Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <h2 className="text-white text-2xl font-bold">Desert</h2>
          </div>
        </div>
        <div className="relative w-64 h-80 lg:w-96 md:h-96  overflow-hidden rounded-lg shadow-lg">
          {/* Image */}
          <Image
            className="object-cover w-full h-full"
            src="/Beverage.jpg" // Replace with your image path
            alt="Beverage"
            width={356}
            height={420}
          />

          {/* Text Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <h2 className="text-white text-2xl font-bold">Beverage</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
