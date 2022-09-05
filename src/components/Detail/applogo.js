import { useEffect, useReducer, useState } from "react";
// import "./appdetail.css";
// import "./output.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import React from "react";
import { DetailContext } from "../../App";
import { db } from "../FireBase/firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
} from "@firebase/firestore";
const Applogo = () => {
  const navigate = useNavigate();
  const [rerender, setRerender] = useState(false);
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
        name: [
          [
            ...action.payload.docs.map((doc) => ({
              ...doc.data(),
              id: doc.id,
            })),
          ].find((data) => data.id === params.list),
        ][0].Name,
      };
    } else if (action.type === "saveDownloadList") {
      return {
        ...state,
        downloads: [
          ...action.payload.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          })),
        ].find(
          (data) =>
            data.AppId === params.list &&
            localStorage.getItem("email") === data.Email
        ),
      };
    }
    return { ...state };
  };
  const initialState = {
    data: [],
    filteredData: [],
    name: "",
    downloads: "",
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    const AppDetailCollection = collection(db, "Apps");
    const DownloadCollection = collection(db, "Downloads");
    const getAppDetail = async () => {
      const data = await getDocs(AppDetailCollection);
      dispatch({ type: "getData", payload: data });

      const downloadData = await getDocs(DownloadCollection);
      dispatch({ type: "saveDownloadList", payload: downloadData });
    };

    getAppDetail();
  }, [rerender]);
  const idToken = localStorage.getItem("idToken");
  const isLoggedIn = !!idToken;
  const [navStyle, setNavStyle] = useState("topnav");
  const download = () => {
    setRerender((prev) => !prev);
    const downloadCollection = collection(db, "Downloads");
    const downloadData = {
      Email: localStorage.getItem("email"),
      AppName: state.data[0].Name,
      AppId: params.list,
    };
    addDoc(downloadCollection, downloadData);
    const AppDetailCollection = doc(db, "Apps", params.list);
    const down = {
      DownloadNo: (state.data[0].DownloadNo + 1) / 1,
    };
    updateDoc(AppDetailCollection, down);
  };
  return (
    <div>
      {state.data.map((data, index) => (
        <React.Fragment key={index}>
          <nav className="mb-4">
            <ul className={navStyle} id="myTopnav">
              <li className="navigation hamburger">
                <button
                  href="javascript:void(0);"
                  className="icon"
                  onClick={() =>
                    setNavStyle((prev) =>
                      prev === "topnav" ? `${prev + " responsive"}` : "topnav"
                    )
                  }
                >
                  <i className="fa fa-bars"></i>&#9776;
                </button>
              </li>
              <a href="">
                <li className="navigation">Google playStore</li>
              </a>
              <Link to="/">
                <li className="navigation">Apps</li>
              </Link>
              <a href="">
                <li className="navigation">Games</li>
              </a>
              <a href="">
                <li className="navigation">Trending</li>
              </a>
              <button
                onClick={() => {
                  localStorage.removeItem("idToken");
                  localStorage.removeItem("email");
                  navigate(`/${params.list}`);
                }}
                className="navigation-right"
              >
                <li className="navigation">Logout</li>
              </button>
            </ul>
          </nav>
          <div className="flex">
            <h1 className="text-6xl font-bold py-2">{data.Name}</h1>

            <div>
              <img
                className="grid justify-items-end rounded-3xl w-20"
                src={data.ImageSrc}
              />
            </div>
          </div>
          <div className="py-8">
            <ul className="text-gray-500 flex">
              <li className="border-r border-gray-400 mr-8">
                {data.ReviewNo} reviews
              </li>
              <li className="border-r border-gray-400 mr-8">
                {data.DownloadNo} downloads
              </li>
              <li>Rated for 18+</li>
              {state.downloads && (
                <li style={{ color: "red", marginLeft: "10px" }}>
                  You have downloaded this App
                </li>
              )}
            </ul>
          </div>
          <div>
            {isLoggedIn && (
              <button onClick={state.downloads ? null : download}>
                <a
                  href="/components.zip"
                  download={state.name}
                  className="mr-8 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-8 rounded-full"
                >
                  Install
                </a>
              </button>
            )}
            {!isLoggedIn && (
              <Link
                to="/sign-in"
                className="mr-8 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-8 rounded-full"
              >
                Install
              </Link>
            )}
            <button className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded">
              Add to wishlist
            </button>
            <p className="mt-8">Available in your country</p>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};
export default Applogo;
