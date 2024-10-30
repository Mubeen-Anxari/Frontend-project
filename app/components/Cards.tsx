"use client"
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Cards() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.05, transition: { duration: 0.3 } }
  };

  return (
  <div>
    <div className="mt-16">
      <Image src='/Vector.png' width={300} height={300} alt="vector" />
    </div>
    <div className="flex justify-center mt-10">
      <div className="flex justify-between flex-col md:flex-row gap-8">
        {[
          { src: "/Appetizer.jpg", alt: "Appetizer" },
          { src: "/Desert.webp", alt: "Desert" },
          { src: "/Beverage.jpg", alt: "Beverage" }
        ].map((item, index) => (
          <motion.div
            key={index}
            className="relative w-64 h-80 lg:w-96 md:h-96 overflow-hidden rounded-lg shadow-lg"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            <Image
              className="object-cover w-full h-full"
              src={item.src}
              alt={item.alt}
              width={356}
              height={420}
            />
            <motion.div 
              className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-white text-2xl font-bold">{item.alt}</h2>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
  );
}
