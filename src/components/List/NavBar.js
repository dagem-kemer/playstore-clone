import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import styles from "./NavBar.module.css";
import { Loginslice } from "../../Store/store";

export default function NavBar() {
  const idtoken = localStorage.getItem("idToken");
  const isLoggedIn = !!idtoken;
  const [state, setState] = useState(false);
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(Loginslice.logout());
    localStorage.removeItem("idToken");
    setState((prev) => !prev);
  };
  return (
    <nav className={`mb-2 ${styles.nav}`}>
      <div className="float-right mt-5 ">
        {!isLoggedIn && (
          <Link
            to="./sign-in"
            className="mr-4  px-6 py-2 border   rounded-full  border-red-500 text-red-700"
          >
            Login
          </Link>
        )}
        {!isLoggedIn && (
          <Link
            to="./sign-up"
            className="mr-4  px-6 py-2 border   rounded-full  border-red-500 bg-red-700 text-white"
          >
            Sign up
          </Link>
        )}
        {isLoggedIn && (
          <button onClick={logout}>
            <Link
              to="/"
              className="mr-4  px-6 py-2 border   rounded-full  border-red-500 bg-red-700 text-white"
            >
              Logout
            </Link>
          </button>
        )}
      </div>
    </nav>
  );
}
