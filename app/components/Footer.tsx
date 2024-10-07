import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { IoLogoInstagram } from "react-icons/io";
import { IoCallOutline } from "react-icons/io5";
import { MdFacebook } from "react-icons/md";
import { RxTwitterLogo } from "react-icons/rx";

export default function Footer() {
  return (
   <div className="mt-10">
     <div className=" bg-[#F6F6F6] py-10">
      <div className="max-w-[1200px] m-auto ">
        <div className=" flex justify-center ">
        <div className=" flex flex-col gap-20 lg:flex-row  ">
          <div className=" flex flex-col lg:flex-row gap-6   lg:gap-32">
            <div className=" flex flex-col gap-2">
              <h1 className=" font-bold text-xl">Contact</h1>
              <div className=" flex gap-2">
                <div className=" mt-1">
                  <HiOutlineMail />
                </div>{" "}
                <h1 className="  text-[#67666]">Naples@email.com</h1>
              </div>
              <div className="flex gap-2">
                <div className="mt-1">
                  <IoCallOutline />
                </div>
                <h1 className="  text-[#67666]"> 573 - 8304 - 0830 - 246</h1>
              </div>
            </div>
            <div className=" flex flex-col gap-2">
              <h1 className=" font-bold text-xl">Info</h1>
              <div className=" flex gap-2">
                <h1 className="  text-[#67666]">About us</h1>
              </div>
              <div className="flex gap-2">
                <h1 className="  text-[#67666]"> Our stores</h1>
              </div>
              <div className="flex gap-2">
                <h1 className="  text-[#67666]"> Food recipes</h1>
              </div>
              <div className="flex gap-2">
                <h1 className="  text-[#67666]"> Our Chefs</h1>
              </div>
            </div>
            <div className=" flex flex-col gap-2">
              <h1 className=" font-bold text-xl">Help</h1>
              <div className=" flex gap-2">
                <h1 className=" text-[#67666]">Find a tasting </h1>
              </div>
              <div className="flex gap-2">
                <h1 className="  text-[#67666]"> Take an order</h1>
              </div>
              <div className="flex gap-2">
                <h1 className="  text-[#67666]"> Privacy policy</h1>
              </div>
              <div className="flex gap-2">
                <h1 className="  text-[#67666]"> Terms and conditions</h1>
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-10">
            <h1 className=" font-bold text-3xl">Naples</h1>
            <div></div>
            <div className=" flex gap-1">
              <IoLogoInstagram />
              <MdFacebook />
              <RxTwitterLogo />
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
   </div>
  );
}
