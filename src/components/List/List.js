import React from "react";
import { Link } from "react-router-dom";
import StarIcon from "../icons/StarIcon";

export default function List(props) {
  const idtoken = localStorage.getItem("idToken");
  const isLoggedIn = !!idtoken;
  return (
    <React.Fragment>
      <Link to={props.LinkTo} className="grow">
        <div className="bg-white rounded-lg hover:bg-opacity-10 hover:bg-black mr-4 overflow-hidden p-3">
          <img
            src={props.ImageSrc}
            className=" w-full h-48 rounded-lg object-cover shadow-md"
            alt="Error loading"
          />

          <div className="flex my-4">
            <div className="w-[64px] h-[64px] rounded-2xl  overflow-hidden shadow-md">
              <img
                src={props.ImageSrc}
                className="h-full w-full object-cover "
              />
            </div>

            <div className="ml-4 text-darkGrey flex flex-col justify-evenly">
              <p className="text-base">{props.Name}</p>
              <p className="text-xs">Strategy</p>
              <div className="flex items-baseline">
                <span className="text-sm mr-1">{props.rating}</span>
                <StarIcon />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </React.Fragment>
  );
}
