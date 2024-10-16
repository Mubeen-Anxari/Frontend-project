"use client";
import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import SignUp from "./Signup";
import Login from "./Login";

export default function Auth() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <>
      <Button onPress={onOpen} color="secondary">
        Login
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
                {isLogin ? "Login" : "Sign Up"}
              </ModalHeader>
              <ModalBody>
                {isLogin ? <Login /> : <SignUp />}
                <p className="text-center text-white">
                  {isLogin ? (
                    <p>
                      Need an account?
                      <span
                        onClick={toggleForm}
                        className="cursor-pointer text-indigo-500"
                      >
                        {" "}
                        Sign Up
                      </span>
                    </p>
                  ) : (
                    <p>
                      Already have an account?
                      <span
                        onClick={toggleForm}
                        className="cursor-pointer text-indigo-500"
                      >
                        {" "}
                        Login
                      </span>
                    </p>
                  )}
                </p>
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
    </>
  );
}
