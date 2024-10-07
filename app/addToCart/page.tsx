"use client";
import React from "react";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { AddToCart, removeFromCart } from "../redux/slice"; // Ensure removeFromCart is imported
export const carts = [
  {
    id: 1,
    image: "/cartPizza.png",
    pizzaName: "Margherita pizza",
    pizzaPrice: 60,
    pizzaDescription:
      "Pepperoni sausage, Cheese pizza, Red bell pepper, Ketchup, Thyme, Tomato",
  },
  {
    id: 2,
    image: "/pizza4.png",
    pizzaName: "Pepperoni pizza",
    pizzaPrice: 55,
    pizzaDescription:
      "Pepperoni sausage, Cheese pizza, Red bell pepper, Ketchup, Thyme, Tomato",
  },
  {
    id: 3,
    image: "/cartPizza2.png",
    pizzaName: "Vegetables pizza",
    pizzaPrice: 50,
    pizzaDescription:
      "Pepperoni sausage, Cheese pizza, Red bell pepper, Ketchup, Thyme, Tomato",
  },
];

export default function AddToCarts() {
  
  const cartUser = useAppSelector((state) => state.cart.cart); // Retrieve the cart from Redux store
  const dispatch = useAppDispatch();

  return (
    <div>
      

      {carts?.map((item) => {
        const isExit = cartUser?.find((cartItem) => cartItem.id === item.id); // Check if the item exists in the Redux cart

        return (
          <div key={item.id}>
            <div className="flex flex-col flex-1 overflow-scroll gap-4">
              <div className="flex mt-10">
                <h1 className="ml-10 text-3xl font-bold text-[#000000]">
                  Popular Pizzas of Naples
                </h1>
              </div>
              <div className="flex">
                <div className="w-1/5"></div>
                <div className="flex justify-around bg-[#67666A] w-4/5">
                  <h1 className="font-bold text-white text-2xl">
                    {item.pizzaName}
                  </h1>
                  <h1 className="font-bold text-white">${item?.pizzaPrice}</h1>
                </div>
              </div>
              <div className="flex bg-[#DEDEDE] py-4 justify-between">
                <div className="ml-8">
                  <Image
                    className="h-64 w-64 md:h-80 md:w-80 lg:h-96 lg:w-96"
                    src={item.image}
                    height={384}
                    width={384}
                    alt="pizza"
                  />
                </div>
                <div className="flex font-bold text-lg md:text-xl lg:text-2xl mt-20">
                  <ul className="flex flex-col gap-4 text-[#67666A]">
                    <div className="flex gap-3">
                      <p className="mt-2 bg-[#67666A] h-2 w-2 rounded-full"></p>
                      <li className="w-[250px]">{item?.pizzaDescription}</li>
                    </div>
                  </ul>
                </div>

                <div className="flex items-end">
                  {!isExit ? (
                    <button
                      onClick={() => {
                        dispatch(AddToCart({ ...item, quantity: 1 }));
                      }}
                      className="bg-[#CA1000]   text-white p-4 rounded-full"
                    >
                      Add to Cart
                    </button>
                  ) : (
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          dispatch(AddToCart(item));
                        }}
                        className="bg-[#CA1000]  text-white p-2 rounded-full"
                      >
                        +
                      </button>
                      <p>{isExit?.quantity}</p>
                      <button
                        onClick={() => {
                          dispatch(removeFromCart(item));
                        }}
                        className="bg-[#CA1000]  text-white p-2 rounded-full"
                      >
                        -
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
