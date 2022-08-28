import react, { useEffect, useState, useContext } from "react";
import "./output.css";
import { DetailContext } from "../../App";
import { useParams } from "react-router-dom";

import React from "react";
const Appdetail = () => {
  const { detailData, setDetailData } = useContext(DetailContext);
  const params = useParams();
  let data = [];
  data = [...JSON.parse(localStorage.getItem("detailData"))];

  data = [data.find((data) => data.id === params.list)];

  return (
    <div>
      {data.map((data) => (
        <React.Fragment>
          <div class="py-8 flex">
            <img
              class="mr-5 w-25"
              src="https://play-lh.googleusercontent.com/c2DcVsBUhJb3UlAGABHwafpuhstHwORpVwWZ0RvWY7NPrgdtT2o4JRhcyO49ehhUNRca=s200-rw"
            />
            <img
              class="mr-5"
              src="https://play-lh.googleusercontent.com/c2DcVsBUhJb3UlAGABHwafpuhstHwORpVwWZ0RvWY7NPrgdtT2o4JRhcyO49ehhUNRca=s200-rw"
            />
            <img
              class="mr-5"
              src="https://play-lh.googleusercontent.com/c2DcVsBUhJb3UlAGABHwafpuhstHwORpVwWZ0RvWY7NPrgdtT2o4JRhcyO49ehhUNRca=s200-rw"
            />
            <img
              class="mr-5"
              src="https://play-lh.googleusercontent.com/c2DcVsBUhJb3UlAGABHwafpuhstHwORpVwWZ0RvWY7NPrgdtT2o4JRhcyO49ehhUNRca=s200-rw"
            />
            <img src="https://play-lh.googleusercontent.com/c2DcVsBUhJb3UlAGABHwafpuhstHwORpVwWZ0RvWY7NPrgdtT2o4JRhcyO49ehhUNRca=s200-rw" />
          </div>
          <div>
            <p class="font-bold text-2xl mb-2">About this app</p>
            <p class="non-italic">{data.Description}</p>
            <pre class="font-bold mb-4">Updated on Aug 15 2022</pre>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Appdetail;
