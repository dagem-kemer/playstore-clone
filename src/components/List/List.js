import React from "react";
import { Link } from "react-router-dom";
import StarIcon from "../icons/StarIcon";
import styles from "./List.module.css";

export default function List(props) {
  const idtoken = localStorage.getItem("idToken");
  const isLoggedIn = !!idtoken;
  return (
    <React.Fragment>
      <Link to={props.LinkTo}>
        <div className="bg-white rounded-lg hover:bg-opacity-10 hover:bg-black mx-4 my-8 overflow-hidden w-[calc(75vw - 96px)] md:w-[calc(50vw-96px)] lg:w-[416px] p-3">
          <img
            src={props.ImageSrc}
            className=" w-full h-48 rounded-lg object-cover"
            alt="Error loading"
          />

          <div className="flex my-4">
            <div className="w-[64px] h-[64px] rounded-2xl  overflow-hidden">
              <img
                src={props.ImageSrc}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="ml-4">
              <p className=" text-md">{props.Name}</p>
              <p className=" text">{props.type}</p>
              <div className="flex items-baseline">
                <span className="">{props.rating}</span>
                <StarIcon />

                {/* <div className="2xl:ml-72 xl:ml-64 lg:ml-52 md:ml-64 sm:ml-96 ml-72  mt-6 bg-red-100 px-4 text-center rounded">
                  {props.type}
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </React.Fragment>
  );
}
