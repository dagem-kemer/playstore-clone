import React, { useContext, useEffect, useState } from "react";
import List from "../components/List/List";
import NavBar from "../components/List/NavBar";
import Search from "../components/List/Search";
import ListWrapper from "../components/List/ListWrapper";
import { Outlet } from "react-router-dom";
import { collection, getDocs } from "@firebase/firestore";
import { db } from "../components/FireBase/firebase-config";
import { DetailContext } from "../App";
export default function ListPage() {
  const { detailData, setDetailData } = useContext(DetailContext);
  // const [appDetail, setAppDetail] = useState([]);
  const AppDetailCollection = collection(db, "Apps");
  useEffect(() => {
    const getAppDetail = async () => {
      const data = await getDocs(AppDetailCollection);
      // setAppDetail(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setDetailData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getAppDetail();
  }, []);

  return (
    <React.Fragment>
      <NavBar />
      <Search />
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
      <Outlet />
    </React.Fragment>
  );
}
