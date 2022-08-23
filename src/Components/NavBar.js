import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="mb-2 nav">
      <div className="float-right mt-5 ">
        <Link className="mr-4  px-6 py-2 border   rounded-full  border-red-500 text-red-700">
          Login
        </Link>
        <Link className="mr-4  px-6 py-2 border   rounded-full  border-red-500 bg-red-700 text-white">
          Sign up
        </Link>
      </div>
    </nav>
  );
}
