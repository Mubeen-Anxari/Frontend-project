"use client";
import React from "react";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { AddToCart, removeFromCart } from "../redux/slice";
import { useDisclosure } from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import { toast, ToastContainer } from "react-toastify";

export default function AddToCarts() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const cartUser = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    toast.success("Thanks for your order", {
      position: "top-center",
      autoClose: 3000,
    });
  };

  // Calculate total amount using reduce
  const totalAmount = cartUser.cart.reduce((total, item) => {
    return total + item.pizzaPrice * item.quantity; // Update according to your quantity field
  }, 0);

  return (
    <div className="">
      <nav className=" bg-sky-600 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className=" text-white text-3xl font-bold italic">Tasty Pizza</h1>
          <div className="text-white text-2xl font-bold">
            <Button onPress={onOpen} color="secondary">
              Order Now
            </Button>
            <Modal
              backdrop="opaque"
              isOpen={isOpen}
              onOpenChange={onOpenChange}
              radius="lg"
              classNames={{
                body: "py-6",
                backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
                base: "border-[#292f46] bg-[#19172c] dark:bg-white text-[#a8b0d3]",
                header: "border-b-[1px] border-[#292f46]",
                footer: "border-t-[1px] border-[#292f46]",
                closeButton: "hover:bg-white/5 active:bg-white/10",
              }}
            >
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className=" flex justify-center items-center text-black flex-col gap-1">
                      Summary
                    </ModalHeader>
                    <ModalBody>
                      <div className=" flex justify-between">
                        <h1 className="text-black">Total Items:</h1>
                        <p className="text-black">{cartUser.cart.length}</p>
                      </div>

                      <div className=" flex justify-between">
                        <p className="text-black">Shipping:</p>
                        <input
                          className="border border-green-600 rounded-xl p-1 "
                          type="text"
                          placeholder="Enter your address here for shipping"
                        />
                      </div>
                      <div className=" flex justify-between">
                        <h1 className=" text-black">Discount:</h1>
                        <h1 className=" text-black">0%</h1>
                      </div>
                      <div className="flex justify-between">
                        <h1 className=" text-black">Total Amount:</h1>
                        <h1 className=" text-black">${totalAmount.toFixed(2)}</h1>
                      </div>
                      <h1 className=" flex justify-center mt-10 text-green-700 text-md font-bold">
                        "If you want to place an order, click on confirm."
                      </h1>
                    </ModalBody>
                    <ModalFooter>
                      <Button
                        className="bg-red-800 text-white hover:bg-black"
                        onPress={onClose}
                      >
                        Close
                      </Button>
                      <div>
                        <Button
                          onClick={handleClick}
                          className="bg-purple-800 hover:bg-cyan-600 text-white shadow-lg shadow-indigo-500/20"
                          onPress={onClose}
                        >
                          Confirm
                        </Button>
                        <ToastContainer />
                      </div>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>
          </div>
        </div>
      </nav>
      <h1 className="flex justify-center ml-10 mt-10 text-3xl font-bold text-[#000000]">
        Popular Pizzas of Naples
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {cartUser?.cart?.map((item) => {
          return (
            <div key={item.id} className="bg-white shadow-md p-4 rounded-lg">
              <div className="flex justify-center">
                <Image
                  className="rounded-lg"
                  src={item.image}
                  height={384}
                  width={384}
                  alt={item.pizzaName}
                />
              </div>
              <div className="mt-4 text-center">
                <h2 className="text-2xl font-bold text-[#67666A]">
                  {item.pizzaName}
                </h2>
                <p className="text-xl font-semibold text-[#C10000]">
                  ${item?.pizzaPrice}
                </p>
                <p className="text-[#67666A] mt-2">{item.pizzaDescription}</p>
              </div>
              <div className="flex gap-2 mt-4 justify-center">
                <button
                  onClick={() => {
                    dispatch(AddToCart(item));
                  }}
                  className="bg-[#CA1000] text-white p-2 rounded-full"
                >
                  +
                </button>
                <p>{item.quantity}</p>
                <button
                  onClick={() => {
                    dispatch(removeFromCart(item));
                  }}
                  className="bg-[#CA1000] text-white p-2 rounded-full"
                >
                  -
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
