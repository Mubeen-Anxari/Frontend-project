"use client"
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Show success toast
    toast.success("Your message has been sent!");

    // Log form data
    console.log("Form Data Submitted:", formData);

    // Reset the form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="flex justify-center">
      {/* ToastContainer to show toast notifications */}
      <ToastContainer />
      <div className="max-w-[900px] m-auto rounded-xl mt-20 p-10 py-10 bg-[#F6F6F6]">
        <div className="flex justify-center flex-col items-center">
          <h1 className="font-bold text-4xl w-96">Share your opinion</h1>
          <h1 className="font-bold text-4xl">with us</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mt-4 flex md:flex-row flex-col gap-10">
            <div className="flex flex-col gap-4">
              <div className="flex items-center bg-white w-96 rounded-full md:rounded-xl p-2 h-20">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full bg-transparent outline-none p-4"
                />
              </div>
              <div className="flex items-center gap-3 bg-white w-96 rounded-full md:rounded-xl p-2 h-20">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full bg-transparent outline-none p-4"
                />
              </div>
            </div>
            <div className="bg-white w-96 rounded-full md:rounded-xl items-start p-4 h-44">
              <input
                className="w-full bg-transparent outline-none p-4 h-full"
                type="text"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write Something"
              />
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <button
              type="submit"
              className="border border-[#C10000] rounded-full p-2 w-24 text-[#C10000]"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
