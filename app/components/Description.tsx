import React from "react";
import Image from "next/image";

export default function Description() {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <div className=" font-bold  mx-2">
      <Image  
          src="/welcome.png" 
          height={500} 
          width={450} 
          alt="Welcome Image" 
        />
      </div>
      <h2 className="text-xl md:text-2xl lg:text-3xl text-[#67666A] italic font-bold font-serif">
        Welcome  to Naples
      </h2>
      <div className="text-base md:text-lg lg:text-xl">
        <p className="flex justify-center text-[#67666A] w-[450px]">
          We started working in 2007, and in 2012 we were able to
        </p>
        <p className="flex justify-center text-[#67666A] w-[450px]">
          open our second branch, and now we have several
        </p>
        <p className="flex justify-center text-[#67666A] w-[450px]">
          branches all over the country.
        </p>
      </div>
      <div className="mt-4"> {/* Added margin for spacing */}
        <Image 
          src="/Vector.png" 
          height={300} 
          width={350} 
          alt="Welcome Image" 
        />
      </div>
    </div>
  );
}
