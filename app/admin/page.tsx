"use client";
import Image from "next/image";
import Link from "next/link";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Modal,
} from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { useAuth } from "../components/context/AuthContext";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth, db, storage } from "../config/firebase";
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
} from "@nextui-org/react";
import { IoSearchCircleOutline } from "react-icons/io5";
import { uploadBytes } from "firebase/storage";
import { getDownloadURL, ref } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";
import { getAllProducts, getOrders } from "../util";
type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
};
export default function Admin() {
  const [products, setProducts] = useState<Product[]>([]);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const fetchProducts = async () => {
    const products = await getAllProducts();
    setProducts(products as Product[]);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAdd = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!image) {
        throw new Error("No image selected");
      }

      const storageRef = ref(storage, `products/${Date.now()}_${image.name}`);
      const uploadTask = await uploadBytes(storageRef, image);
      const downloadURL = await getDownloadURL(uploadTask.ref);

      const data = {
        name,
        price,
        description,
        image: downloadURL,
      };
      await addDoc(collection(db, "products"), data);
      console.log("Uploaded data:", data);
    } catch (error) {
      console.log("Error uploading image:", error);
    }
  };

  const router = useRouter();
  const { currentUser } = useAuth();

  useEffect(() => {
    if (!currentUser?.isAdmin) {
      signOut(auth);
      router.push("/");
    }
  }, [currentUser, router]);

  return (
    <div className="flex bg-gray-100 h-screen">
      <div className="flex md:w-1/6 bg-black h-screen flex-col gap-4">
        <h1 className="text-4xl font-bold text-white text-center">Admin</h1>
        <h1 className="text-2xl p-2 font-bold text-white">Products</h1>
        <h1 className="text-2xl p-2 font-bold text-white">Users</h1>
        <Link href="/order">
          <h1 className="text-2xl p-2 font-bold text-white">Orders</h1>
        </Link>{" "}
      </div>
      <div className="flex-1 p-4">
        <div className="flex justify-end items-center mb-4">
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="secondary"
                name={currentUser?.displayName ?? ""}
                size="sm"
                src={currentUser?.photoURL ?? ""}
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">{currentUser?.email}</p>
              </DropdownItem>
              <DropdownItem
                key="logout"
                className="h-14 gap-2"
                onPress={() => signOut(auth)}
              >
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
        <div className="flex justify-between items-center mb-4">
          <Input
            classNames={{
              base: "max-w-full sm:max-w-[10rem] h-10",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper:
                "h-full font-normal text-default-500 w-[200px] bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="Search the product..."
            size="sm"
            startContent={<IoSearchCircleOutline size={18} />}
            type="search"
          />
          <Button onPress={onOpen} color="secondary">
            Add Products
          </Button>
          <Modal
            backdrop="opaque"
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            radius="lg"
            classNames={{
              body: "py-6",
              backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
              base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",
              header: "border-b-[1px] border-[#292f46]",
              footer: "border-t-[1px] border-[#292f46]",
              closeButton: "hover:bg-white/5 active:bg-white/10",
            }}
          >
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    Modal Title
                  </ModalHeader>
                  <ModalBody>
                    <form className="flex flex-col gap-4" onSubmit={handleAdd}>
                      <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border-2 border-gray-100 rounded-md p-2"
                        type="text"
                        placeholder="Add the product name "
                      />
                      <input
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="border-2 border-gray-100 rounded-md p-2"
                        type="text"
                        placeholder="Add the product price "
                      />
                      <input
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="border-2 border-gray-100 rounded-md p-2"
                        type="text"
                        placeholder="Add the product description"
                      />
                      <input
                        // value={image instanceof File ? image.name : ''}
                        onChange={(e) => {
                          const files = e.target.files;
                          if (files && files.length > 0) {
                            setImage(files[0]);
                          }
                        }}
                        className="border-2 border-gray-100 rounded-md p-2"
                        type="file"
                        placeholder="Add the product image"
                      />
                      <button
                        type="submit"
                        className=" bg-cyan-500 text-white font-bold rounded-md p-2"
                      >
                        Add Product
                      </button>
                    </form>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" variant="light" onPress={onClose}>
                      Close
                    </Button>
                    <Button
                      className="bg-[#6f4ef2] shadow-lg shadow-indigo-500/20"
                      onPress={onClose}
                    >
                      Action
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </div>
        <div>
          <Table aria-label="Example static collection table">
            <TableHeader>
              <TableColumn>Image</TableColumn>
              <TableColumn>Name</TableColumn>
              <TableColumn>Price</TableColumn>
              <TableColumn>Description</TableColumn>
            </TableHeader>
            <TableBody>
              {products.map((item) => {
                return (
                  <TableRow key={item.id}>
                    <TableCell>
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={50}
                        height={50}
                      />
                    </TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.price}</TableCell>
                    <TableCell>{item.description}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
