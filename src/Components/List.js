import React from "react";
import { Link } from "react-router-dom";
import ListWrapper from "./ListWrapper";
export default function List(props) {
  return (
    <React.Fragment>
      <Link to="./x">
        <div className="bg-white rounded-lg mx-4 my-8 pt-4  overflow-hidden shadow ">
          <img
            src={`./Images/${props.ImageSrc}`}
            className=" w-5/6 h-48 rounded-t-lg mt-2 mx-auto "
            alt="Error loading"
          />
          <p className="text-green-800 mt-2 text-center text-2xl">
            {props.Name}
          </p>
          <div className="text-center ">
            <div className="List">
              <img src="./Images/star.jpg" width={35} className="star" />
              <span className="Rating">{props.rating}</span>

              <div className="ml-72  mt-6 bg-red-100 px-4 text-center rounded">
                {props.type}
              </div>
            </div>
          </div>
          <hr className="mt-6 " />
        </div>
      </Link>
    </React.Fragment>
  );
}
