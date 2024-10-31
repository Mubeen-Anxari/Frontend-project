"use client";
import React, { useEffect, useState } from "react";
import { getOrders } from "../util";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "@nextui-org/react";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";

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
  status: string; // Added status field
};

export default function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isDeleting, setIsDeleting] = useState<{ [key: string]: boolean }>({});

  const fetchOrders = async () => {
    const fetchedOrders = await getOrders();
    setOrders(fetchedOrders as Order[]);
  };

  const deleteOrder = async (orderId: string) => {
    setIsDeleting(prev => ({ ...prev, [orderId]: true }));
    try {
      await deleteDoc(doc(db, "orders", orderId));
      setOrders(prevOrders => prevOrders.filter(order => order.id !== orderId));
      toast.success("Order deleted successfully");
    } catch (error) {
      console.error("Error deleting order:", error);
      toast.error("Failed to delete order");
    } finally {
      setIsDeleting(prev => ({ ...prev, [orderId]: false }));
    }
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
        <Table aria-label="Example static collection table">
          <TableHeader>
            <TableColumn>Order ID</TableColumn>
            <TableColumn>Total Items</TableColumn>
            <TableColumn>Total Amount</TableColumn>
            <TableColumn>Status</TableColumn>
            <TableColumn>Actions</TableColumn>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.totalItems}</TableCell>
                <TableCell>${order.totalAmount}</TableCell>
                <TableCell>{order.status}</TableCell>
                <TableCell>
                  <Button 
                    color={order.status === "pending" ? "danger" : "success"} 
                    onClick={() => deleteOrder(order.id)}
                    disabled={isDeleting[order.id]}
                  >
                    {isDeleting[order.id] ? "Canceling......." : order.status === "pending" ? "Cancel Order" : "Completed Order"}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
      <ToastContainer />
    </div>
  );
}
