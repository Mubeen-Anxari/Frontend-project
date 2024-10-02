"use client"
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import Logo from "./Logo";
import { IoIosSearch } from "react-icons/io";
import Image from "next/image";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaAngleDown, FaRegUserCircle } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

export default function App() {
  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];
  return (
    <Navbar maxWidth="full" isBordered>
      <NavbarContent className="justify-end md:hidden">
        <NavbarMenuToggle icon={<RxHamburgerMenu color="black" size={25} />} />
      </NavbarContent>
      <NavbarContent className="sm:hidden" justify="center">
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden md:flex" justify="start">
        <NavbarBrand className="mr-4">
          <Logo />
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-10">
          <NavbarItem className=" flex gap-1 ">
            <Link className="font-bold " color="foreground" href="/Detail">
              Home
            </Link>
          </NavbarItem>
         
          <NavbarItem>
            <Link color="foreground" href="#">
           <div className="flex gap-1 ">
            <h1>Menu</h1>
            <div className=" pt-1">
            <FaAngleDown />

            </div>
           </div>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Services
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
            Contact us
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
            Shop
            </Link>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        <Input
          classNames={{
            base: " bg-[#DBDBDB] rounded-xl  md:flex h-10 w-full lg:w-[300px]  text-[#000000]  ",
            mainWrapper: "h-full",
            input: "text-small ",
            inputWrapper:
              "h-full  font-normal  text-default-500 ",
              
          }}
          placeholder="Search something..."
          size="sm"
          startContent={<IoIosSearch className=" text-[#000000]" />}
          type="search"
        />
      
      </NavbarContent>

      <NavbarMenu className="  pt-10">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}