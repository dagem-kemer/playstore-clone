import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux/es/exports";
import styles from "./NavBar.module.css";
import { Loginslice } from "../../Store/store";
export default function NavBar() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const idtoken = useSelector((state) => state.idToken);
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(Loginslice.logout());
    console.log(isLoggedIn);
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
          <Link
            to="./"
            className="mr-4  px-6 py-2 border   rounded-full  border-red-500 bg-red-700 text-white"
          >
            <button onClick={logout}>Logout</button>
          </Link>
        )}
      </div>
    </nav>
  );
}
