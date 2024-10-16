"use client";
import React, { useEffect, useState } from "react";
import { getOrders } from "../util";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Button } from "@nextui-org/react";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";

type Order = {
  id: string;
  items: Array<{
    id: string;
    name: string;
    price: number;
    quantity: number;
  }>;
  totalAmount: number;
  totalItems: number;
  userId: string;
  createdAt: Date;
};

export default function Orders() {

  const [orders, setOrders] = useState<Order[]>([]);

  const fetchOrders = async () => {
    const fetchedOrders = await getOrders();
    setOrders(fetchedOrders as Order[]);
  };
  const deleteOrder = async (orderId: string) => {
    await deleteDoc(doc(db, "orders", orderId));
    fetchOrders(); // Refresh the orders list after deletion
    toast.success("Order deleted successfully");
  };

  useEffect(() => {
    fetchOrders();
  }, []);

 console.log(orders);
 

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Your Orders</h1>
      </div>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        orders.map((order) => (
          <div key={order.id} className="bg-white shadow-md rounded-lg p-4 mb-4">
            <h2 className="text-xl font-semibold mb-2">Order ID: {order.id}</h2>
            <p className="mb-2">Total Items: {order.totalItems}</p>
            <p className="mb-2">Total Amount: ${order.totalAmount}</p>
            <h3 className="font-semibold mt-4 mb-2">Items:</h3>
            <ul>
              {order.items.map((item) => (
                <li key={item.id} className="mb-2">
                  {item.name} - Quantity: {item.quantity} - Price: {item.price}
                </li>
              ))}
            </ul>
            <Button color="danger" onClick={() => deleteOrder(order.id)}>
              Delete Order
            </Button>
          </div>
        ))
      )}
      <ToastContainer />
    </div>
  );
}
