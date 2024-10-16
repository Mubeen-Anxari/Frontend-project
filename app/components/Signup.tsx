"use client";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { auth } from "../config/firebase";

export default function SignUp() {
  const router = useRouter();

  const handleAdd = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Typecast e.target to HTMLFormElement
    const form = e.target as HTMLFormElement;

    const formData = new FormData(form);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    console.log("Email:", email);
    console.log("Password:", password);

    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = auth.currentUser;
      console.log(user);

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleAdd} className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-gray-700">
          Email
        </label>
        <input
          id="email"
          required
          type="email"
          name="email"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          placeholder="Enter your email"
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-gray-700">
          Password
        </label>
        <input
          id="password"
          required
          type="password"
          name="password"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          placeholder="Enter your password"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-200"
      >
        SignUp
      </button>
    </form>
  );
}
