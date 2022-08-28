import { useContext } from "react";

import "./output.css";
import { Link, useParams } from "react-router-dom";
import React from "react";
import { DetailContext } from "../../App";

const Applogo = () => {
  const params = useParams();
  const { detailData, setDetailData } = useContext(DetailContext);
  const idToken = localStorage.getItem("idToken");
  const isLoggedIn = !!idToken;

  let data = [];
  data = [...data, detailData.find((data) => data.id === params.list)];
  const Name = data[0].Name;
  return (
    <div>
      {data.map((data) => (
        <React.Fragment>
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
