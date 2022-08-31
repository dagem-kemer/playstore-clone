import react, { useEffect, useState, useContext, useReducer } from "react";
// import "./output.css";
// import "./appdetail.css";
import { DetailContext } from "../../App";
import { useParams } from "react-router-dom";
import { db } from "../FireBase/firebase-config";
import { collection, getDocs } from "@firebase/firestore";
import React from "react";

const Appdetail = () => {
  const params = useParams();
  const reducer = (state, action) => {
    if (action.type === "filter") {
      return {
        ...state,
        filteredData: [...state.data].find((data) => data.id === params.list),
      };
    } else if (action.type === "getData") {
      return {
        ...state,
        data: [
          [
            ...action.payload.docs.map((doc) => ({
              ...doc.data(),
              id: doc.id,
            })),
          ].find((data) => data.id === params.list),
        ],
      };
    }
    return { ...state };
  };
  const initialState = {
    data: [],
    filteredData: [],
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    const AppDetailCollection = collection(db, "Apps");
    const getAppDetail = async () => {
      const data = await getDocs(AppDetailCollection);
      dispatch({ type: "getData", payload: data });
    };

    getAppDetail();
  }, []);
  // console.log(state.data);
  return (
    <div>
      {state.data.map((data, index) => (
        <React.Fragment key={index}>
          <section className="flex app-list app-previews-flexbox">
            <img
              className="mr-5 w-25"
              src="https://play-lh.googleusercontent.com/c2DcVsBUhJb3UlAGABHwafpuhstHwORpVwWZ0RvWY7NPrgdtT2o4JRhcyO49ehhUNRca=s200-rw"
            />
            <img
              className="mr-5"
              src="https://play-lh.googleusercontent.com/c2DcVsBUhJb3UlAGABHwafpuhstHwORpVwWZ0RvWY7NPrgdtT2o4JRhcyO49ehhUNRca=s200-rw"
            />
            <img
              className="mr-5"
              src="https://play-lh.googleusercontent.com/c2DcVsBUhJb3UlAGABHwafpuhstHwORpVwWZ0RvWY7NPrgdtT2o4JRhcyO49ehhUNRca=s200-rw"
            />
            <img
              className="mr-5"
              src="https://play-lh.googleusercontent.com/c2DcVsBUhJb3UlAGABHwafpuhstHwORpVwWZ0RvWY7NPrgdtT2o4JRhcyO49ehhUNRca=s200-rw"
            />
            <img src="https://play-lh.googleusercontent.com/c2DcVsBUhJb3UlAGABHwafpuhstHwORpVwWZ0RvWY7NPrgdtT2o4JRhcyO49ehhUNRca=s200-rw" />
          </section>
          <div>
            <p className="font-bold text-2xl mb-3">About this app</p>
            <p className="non-italic">{data.Description}</p>
            <p className="font-bold mb-4">Updated on Aug 15 2022</p>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Appdetail;
