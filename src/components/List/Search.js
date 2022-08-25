import React from "react";
import { FaSearch } from "react-icons/fa";
import styles from "./search.module.css";

export default function Search() {
  return (
    // <div className="text-center ">
    <div className={`${styles.search}`}>
      <span>
        <FaSearch className={`${styles.icon}`}></FaSearch>
      </span>

      <input
        placeholder="search"
        // className="pl-2 border border-black w-96 rounded-full h-8"
        className="focus:outline-0 w-96 pl-8 rounded-full h-10 "
      />
      <button className="ml-3 border w-20 h-10  rounded-full  bg-orange-400 text-white">
        Search
      </button>
    </div>
  );
}
