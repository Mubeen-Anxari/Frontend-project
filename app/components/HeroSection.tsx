"use client"
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS file for toastify

export default function HeroSection() {
    const handleClick = () => {
        toast.success("Thanks for Order", {
          position: "top-center", // Correct position string
          autoClose: 3000, // Optional: Auto close the toast after 3 seconds
        });
    };

    return (
        <div className="relative flex justify-center items-center  h-screen">
            {/* Background Image with Opacity */}
            <div
                className="absolute bg-contain inset-0 bg-white opacity-120"
                style={{
                    backgroundImage:
                        "url('https://img.freepik.com/premium-photo/background-italian-food-assortment-pizza-black-wooden-background-free-space-text-top-view_187166-21063.jpg')",
                    backgroundSize: "cover",
                    background:"contain"
                }}
            ></div>

            {/* Content on top of the background */}
            <div className="relative z-10 text-center max-w-full px-4">
                <h1 className="text-3xl font-semibold md:text-5xl font-serif lg:text-7xl text-white">
                    The fastest delivery in{" "}
                </h1>
                <h1 className="text-3xl font-semibold md:text-5xl font-serif lg:text-6xl mt-2 text-white">
                    Your city
                </h1>

                <div className="mt-4">
                    <h1 className="text-base md:text-2xl font-semibold text-white ">
                        Visit our restaurant to taste our Italian cuisine or{" "}
                    </h1>
                    <h1 className="text-base md:text-xl font-semibold mt-1 text-white ">
                        simply order it from our website
                    </h1>
                </div>

                <div className="mt-6">
                    <button onClick={handleClick} className="border font-semibold p-2 border-white rounded-full h-12 w-36 text-white">
                        Order now
                    </button>
                </div>
            </div>

            {/* This is where Toast notifications will appear */}
            <ToastContainer />
        </div>
    );
}
