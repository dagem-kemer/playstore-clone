import React, { useContext, useEffect, useState } from "react";
import List from "../components/List/List";
import NavBar from "../components/List/NavBar";
import Search from "../components/List/Search";
import ListWrapper from "../components/List/ListWrapper";
import { Outlet } from "react-router-dom";
import AppBar from "../components/Detail/AppBar";
import { collection, getDocs } from "@firebase/firestore";
import { db } from "../components/FireBase/firebase-config";
import { DetailContext } from "../App";

export default function ListPage() {
  const { detailData, setDetailData } = useContext(DetailContext);
  const AppDetailCollection = collection(db, "Apps");
  useEffect(() => {
    const getAppDetail = async () => {
      const data = await getDocs(AppDetailCollection);
      setDetailData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      const localData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      localStorage.setItem("detailData", JSON.stringify(localData));
      // console.log(JSON.parse(localStorage.getItem("detailData")));
    };
    getAppDetail();
  }, []);
  const [searchedValue, setSearchedValue] = useState("");
  const searchValue = (searchValue) => {
    setSearchedValue(searchValue);
  };
  // value = [
  //   ...value.filter((data) =>
  //     data.Name.toLowerCase().includes(searchedValue.toLowerCase())
  //   ),
  // ];

  return (
    <React.Fragment>
      {/* <NavBar /> */}
      <AppBar searchValue={searchValue} />
      {/* <Search /> */}
      {!searchedValue && (
        <ListWrapper>
          {detailData &&
            detailData.map((data) => (
              <List
                Name={data.Name}
                type={data.Type}
                rating={data.Rating}
                ImageSrc={data.ImageSrc}
                LinkTo={data.id}
                key={data.id}
              />
            ))}
        </ListWrapper>
      )}
      {searchedValue && (
        <ListWrapper>
          {detailData.filter((data) =>
            data.Name.toLowerCase().includes(searchedValue.toLowerCase())
          ).length > 0 ? (
            detailData
              .filter((data) =>
                data.Name.toLowerCase().includes(searchedValue.toLowerCase())
              )
              .map((data) => (
                <List
                  Name={data.Name}
                  type={data.Type}
                  rating={data.Rating}
                  ImageSrc={data.ImageSrc}
                  LinkTo={data.id}
                  key={data.id}
                />
              ))
          ) : (
            <h2>Could not find anything</h2>
          )}
        </ListWrapper>
      )}
      <Outlet />
    </React.Fragment>
  );
}
