import { useContext, useMemo, useState } from "react";
import "./appdetail.css";
import "./output.css";
import { Link, useParams } from "react-router-dom";
import React from "react";
import { DetailContext } from "../../App";

const Applogo = () => {
  const params = useParams();
  const { detailData, setDetailData } = useContext(DetailContext);
  const idToken = localStorage.getItem("idToken");
  const isLoggedIn = !!idToken;
  JSON.parse(localStorage.getItem("detailData"));
  let data = [];
  data = [...JSON.parse(localStorage.getItem("detailData"))];
  data = [data.find((data) => data.id === params.list)];
  const Name = data[0].Name;
  const [navStyle, setNavStyle] = useState("topnav");
  return (
    <div>
      {data.map((data) => (
        <React.Fragment>
          <nav class="mb-4">
            <ul class={navStyle} id="myTopnav">
              <li class="navigation hamburger">
                <button
                  href="javascript:void(0);"
                  class="icon"
                  onClick={() =>
                    setNavStyle((prev) =>
                      prev === "topnav" ? `${prev + " responsive"}` : "topnav"
                    )
                  }
                >
                  <i class="fa fa-bars"></i>&#9776;
                </button>
              </li>
              <a href="">
                <li class="navigation">Kemer Store</li>
              </a>
              <Link to="/">
                <li class="navigation">Apps</li>
              </Link>
              <a href="">
                <li class="navigation">Games</li>
              </a>
              <a href="">
                <li class="navigation">Trending</li>
              </a>
              <a href="" target="__blank" class="navigation-right">
                <li class="navigation">Logout</li>
              </a>
            </ul>
          </nav>
          <div class="flex">
            <h1 class="text-6xl font-bold py-2">{data.Name}</h1>

            <div>
              <img
                class="grid justify-items-end rounded-3xl w-20"
                src={data.ImageSrc}
              />
            </div>
          </div>
          <div class="py-8">
            <ul class="text-gray-500 flex">
              <li class="border-r border-gray-400 mr-8">
                {data.ReviewNo} reviews
              </li>
              <li class="border-r border-gray-400 mr-8">
                {data.DownloadNo} downloads
              </li>
              <li>Rated for 18+</li>
            </ul>
          </div>
          <div>
            {isLoggedIn && (
              <a
                href="/components.zip"
                download={Name}
                class="mr-8 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-8 rounded-full"
              >
                Install
              </a>
            )}
            {!isLoggedIn && (
              <Link
                to="/sign-in"
                class="mr-8 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-8 rounded-full"
              >
                Install
              </Link>
            )}
            <button class="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded">
              Add to wishlist
            </button>
            <p class="mt-8">Available in your country</p>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};
export default Applogo;
