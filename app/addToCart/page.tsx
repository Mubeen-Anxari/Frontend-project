"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { AddToCart, removeFromCart, setLoggedIn } from "../redux/slice";
import { getAllProducts } from "../util";
import { Product } from "../types/products";
import { useRouter } from "next/navigation";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { useAuth } from "../components/context/AuthContext";

export default function AddToCartsPage() {
  const cartUser = useAppSelector((state) => state.cart.cart);
  const dispatch = useAppDispatch();
  const [products, setProducts] = useState<Product[]>([]);
  const { currentUser } = useAuth();
  const router = useRouter();

  const fetchProducts = async () => {
    try {
      const products = await getAllProducts();
      setProducts(products as Product[]);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
    // Set logged in status based on currentUser
    dispatch(setLoggedIn(!!currentUser));
  }, [currentUser, dispatch]);

  if (products.length === 0) {
    return <div>Loading products...</div>;
  }

  const handleAddToCart = (item: Product) => {
    if (!currentUser) {
      router.push('/login'); // Redirect to login if not logged in
      return;
    }
    dispatch(AddToCart({ ...item, quantity: 1 }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Popular Pizzas of Naples
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((item) => {
          const isExist = cartUser?.find(
            (cartItem) => cartItem?.id === item?.id
          ) || { quantity: 0 };
          return (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
            >
              <div className="flex h-[384px] justify-center items-center overflow-hidden">
                <Image
                  className="rounded-lg"
                  src={item.image}
                  height={384}
                  width={384}
                  alt={item.name}
                />
              </div>
              <div className="p-4 flex-grow flex flex-col justify-between">
                <div>
                  <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold">${item.price}</span>
                  {!isExist.quantity ? (
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="bg-[#CA1000] text-white px-4 py-2 rounded-full hover:bg-red-700 transition"
                    >
                      Add to Cart
                    </button>
                  ) : (
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => dispatch(removeFromCart(item))}
                        className="bg-[#CA1000] text-white w-8 h-8 rounded-full hover:bg-red-700 transition"
                      >
                        -
                      </button>
                      <span className="font-semibold">{isExist.quantity}</span>
                      <button
                        onClick={() =>
                          dispatch(
                            AddToCart({
                              ...item,
                              quantity: isExist.quantity + 1,
                            })
                          )
                        }
                        className="bg-[#CA1000] text-white w-8 h-8 rounded-full hover:bg-red-700 transition"
                      >
                        +
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
