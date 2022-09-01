import React from "react";
import { Link } from "react-router-dom";
import AppItem from "./AppItem";

export default function List(props) {
  const idtoken = localStorage.getItem("idToken");
  const isLoggedIn = !!idtoken;
  return (
    <Link to={props.LinkTo} className="grow">
      <div className="bg-white rounded-lg hover:bg-opacity-10 hover:bg-black mr-4 overflow-hidden p-3">
        <img
          src={props.ImageSrc}
          className=" w-full h-48 rounded-lg object-cover shadow-md"
          alt="Error loading"
        />

        <AppItem
          name={props.Name}
          rating={props.rating}
          image={props.ImageSrc}
          type={props.type}
        />
      </div>
    </Link>
  );
}
