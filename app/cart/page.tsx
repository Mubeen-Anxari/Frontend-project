"use client";
import React from "react";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { AddToCart, removeFromCart, clearCart } from "../redux/slice";
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
import "react-toastify/dist/ReactToastify.css"; // Ensure this import for toast styling
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebase";
import { useAuth } from "../components/context/AuthContext";

export default function AddToCarts() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const cartUser = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const { currentUser } = useAuth();

  const addOrder = async () => {
    try {
      const orderRef = await addDoc(collection(db, "orders"), {
        items: cartUser.cart,
        totalAmount,
        totalItems,
        userId: currentUser?.uid,
        createdAt: new Date(),
      });
      console.log("Order added with ID: ", orderRef.id);
      dispatch(clearCart()); // Clear the cart after successful order
    } catch (error) {
      console.error("Error adding order: ", error);
    }
    toast.success("Thanks for your order", {
      position: "top-center",
      autoClose: 3000,
    });
  };

  // Total Items Calculation
  const totalItems = cartUser.cart.reduce((total, item) => {
    return total + (item.quantity ? item.quantity : 1); // Default quantity is 1 if undefined
  }, 0);

  // Total Amount Calculation
  const totalAmount = cartUser.cart
    .reduce((total, item) => {
      const quantity = item.quantity || 1; // Default quantity is 1 if undefined
      const price = typeof item.price === 'string' ? item.price : (item.price || 0).toString(); // Ensure price is a string
      return total + (Number(price.replace("$", "")) * Number(quantity));
    }, 0)
    .toFixed(2); // Format to 2 decimal places

  console.log(totalAmount);
  console.log("cartUser:", cartUser.cart);
  
  return (
    <div className="">
      <nav className="bg-sky-600 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-3xl font-bold italic">Tasty Pizza</h1>
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
                    <ModalHeader className="flex justify-center items-center text-black flex-col gap-1">
                      Summary
                    </ModalHeader>
                    <ModalBody>
                      <div className="flex flex-col space-y-4">
                        <div className="flex justify-between">
                          <h2 className="text-black font-semibold">
                            Total Items:
                          </h2>
                          <p className="text-black">{totalItems}</p>
                        </div>

                        <div className="flex flex-col">
                          <label htmlFor="shipping" className="text-black mb-1">
                            Shipping Address:
                          </label>
                          <input
                            id="shipping"
                            className="border border-gray-300 rounded-md p-2 w-full"
                            type="text"
                            placeholder="Enter your address for shipping"
                          />
                        </div>

                        <div className="flex justify-between">
                          <h2 className="text-black font-semibold">
                            Discount:
                          </h2>
                          <p className="text-black">0%</p>
                        </div>

                        <div className="flex justify-between">
                          <h2 className="text-black font-semibold">
                            Total Amount:
                          </h2>
                          <p className="text-black font-bold">${totalAmount}</p>
                        </div>
                      </div>
                      <h1 className="flex justify-center mt-10 text-green-700 text-md font-bold">
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
                          onClick={() => {
                            addOrder();
                            onClose();
                          }}
                          className="bg-purple-800 hover:bg-cyan-600 text-white shadow-lg shadow-indigo-500/20"
                        >
                          Confirm
                        </Button>
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
      {cartUser.cart.length===0?<h1 className="flex justify-center ml-10 mt-10 text-3xl font-bold text-[#000000]">
        Your Cart is Empty
      </h1>:<></>}
        {cartUser.cart.length > 0 && (
            <div className="flex justify-center pb-2 mt-4">
              <Button color="danger" onClick={() => dispatch(clearCart())}>Cancel Orders</Button>
            </div>
          )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {cartUser.cart.map((item) => {
          return (
            <div key={item.id} className="bg-white shadow-md p-4 rounded-lg">
              <div className="flex h-[384px] justify-center items-center overflow-hidden">
                <Image
                  className="rounded-lg"
                  src={item.image}
                  height={384}
                  width={384}
                  alt={item.name}
                />
              </div>
              <div className="mt-4 text-center">
                <h2 className="text-2xl font-bold text-[#67666A]">
                  {item.name}
                </h2>
                <p className="text-xl font-semibold text-[#C10000]">
                  {item.price}
                </p>
                <p className="text-[#67666A] mt-2">{item.description}</p>
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
                <p>{item.quantity || 0}</p>
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
      <ToastContainer />
    </div>
  );
}
