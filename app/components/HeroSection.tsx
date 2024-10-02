"use client"
import React from "react";
export default function HeroSection() {
    const handleClick=()=>{
        alert("Welcome to  our website")
    }
  return (
    <div className="relative flex justify-center items-center bg-center bg-cover h-screen">
      {/* Background Image with Opacity */}
      <div
        className="absolute inset-0 bg-white opacity-120"
        style={{
          backgroundImage: "url('https://img.freepik.com/premium-photo/set-pizza-italian-cuisine-top-view-wooden-background-copy-space_187166-12537.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Content on top of the background */}
      <div className="relative z-10 text-center max-w-full px-4">
        <h1 className="text-3xl md:text-5xl font-serif lg:text-7xl text-white">
          The fastest delivery in{" "}
        </h1>
        <h1 className="text-3xl md:text-5xl font-serif  lg:text-6xl mt-2 text-white">
          Your city
        </h1>

        <div className="mt-4">
          <h1 className="text-base md:text-2xl text-white ">
            Visit our restaurant to taste our Italian cuisine or{" "}
          </h1>
          <h1 className="text-base md:text-xl mt-1 text-white ">
            simply order it from our website
          </h1>
        </div>

        <div className="mt-6">
          <button onClick={handleClick} className="border p-2 border-white rounded-full h-12 w-36 text-white">
            Order now
          </button>
        </div>
      </div>
    </div>
  );
}
