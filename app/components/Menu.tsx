import React from "react";
import Image from "next/image";
import { LiaPlusSolid } from "react-icons/lia";
import { RxCross2 } from "react-icons/rx";

export default function Menu() {
  return (
    <div className="flex flex-col mt-10 mb-2">
      {/* Flex Container for Menu Button and Items */}
      <div className="flex gap-4 items-center w-full p-4">
        {/* Menu Button */}
        <div className="bg-red-600 h-20 lg:h-28 w-40 md:w-44 lg:w-48 text-white font-semibold flex items-center justify-center rounded-full">
          Menu
        </div>

        {/* Scrollable Item List */}
        <div className="flex flex-1 overflow-x-scroll gap-4 pl-4">
          {/* Item 1 */}
          <div className="w-64 lg:w-72 h-20 lg:h-28 p-2 flex items-center justify-center bg-white border border-red-500 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.25),_0_0_0_2px_rgba(255,0,0,1)]">
            <div className="flex gap-4 md:gap-6 lg:gap-10">
              <div className="flex gap-2 items-center">
                <Image
                  className="w-16 h-16 md:w-12 md:h-12 lg:w-24 lg:h-24"
                  src="/pizza3.png"
                  width={96}
                  height={96}
                  alt="Pizza"
                />
                <Image
                  className="h-10 w-px md:w-1 lg:h-20"
                  src="/line.png"
                  width={2}
                  height={96}
                  alt="line"
                />
              </div>
              <div className="flex items-center justify-center gap-2">
                <h1 className="font-bold">Pizza</h1>
                <div className="flex items-center justify-center bg-[#C10000] text-white h-6 w-6 rounded-full p-1">
                  <RxCross2 />
                </div>
              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div className="w-64 lg:w-72 h-20 lg:h-28 p-2 flex items-center justify-center bg-white border border-red-500 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.25),_0_0_0_2px_rgba(255,0,0,1)]">
            <div className="flex gap-4 md:gap-6 lg:gap-10">
              <div className="flex gap-2 items-center">
                <Image
                  className="w-16 h-16 md:w-12 md:h-12 lg:w-24 lg:h-24"
                  src="/burger.png"
                  width={96}
                  height={96}
                  alt="Burger"
                />
                <Image
                  className="h-10 w-px md:w-1 lg:h-20"
                  src="/line.png"
                  width={2}
                  height={96}
                  alt="line"
                />
              </div>
              <div className="flex items-center justify-center gap-2">
                <h1 className="font-bold">Burger</h1>
                <div className="flex items-center justify-center bg-[#C10000] text-white h-6 w-6 rounded-full p-1">
                  <LiaPlusSolid />
                </div>
              </div>
            </div>
          </div>

          {/* Item 3 */}
          <div className="w-64 lg:w-72 h-20 lg:h-28 p-2 flex items-center justify-center bg-white border border-red-500 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.25),_0_0_0_2px_rgba(255,0,0,1)]">
            <div className="flex gap-4 md:gap-6 lg:gap-10">
              <div className="flex gap-2 items-center">
                <Image
                  className="w-16 h-16 md:w-12 md:h-12 lg:w-24 lg:h-24"
                  src="/pasta.png"
                  width={96}
                  height={96}
                  alt="Pasta"
                />
                <Image
                  className="h-10 w-px md:w-1 lg:h-20"
                  src="/line.png"
                  width={2}
                  height={96}
                  alt="line"
                />
              </div>
              <div className="flex items-center justify-center gap-2">
                <h1 className="font-bold">Pasta</h1>
                <div className="flex items-center justify-center bg-[#C10000] text-white h-6 w-6 rounded-full p-1">
                  <LiaPlusSolid />
                </div>
              </div>
            </div>
          </div>

          {/* Item 4 */}
          <div className="w-64 lg:w-72 h-20 lg:h-28 p-2 flex items-center justify-center bg-white border border-red-500 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.25),_0_0_0_2px_rgba(255,0,0,1)]">
            <div className="flex gap-4 md:gap-6 lg:gap-10">
              <div className="flex gap-2 items-center">
                <Image
                  className="w-16 h-16 md:w-12 md:h-12 lg:w-24 lg:h-24"
                  src="/pizza3.png"
                  width={96}
                  height={96}
                  alt="Pizza"
                />
                <Image
                  className="h-10 w-px md:w-1 lg:h-20"
                  src="/line.png"
                  width={2}
                  height={96}
                  alt="line"
                />
              </div>
              <div className="flex items-center justify-center gap-2">
                <h1 className="font-bold">Pizza</h1>
                <div className="flex items-center justify-center bg-[#C10000] text-white h-6 w-6 rounded-full p-1">
                  <LiaPlusSolid />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
