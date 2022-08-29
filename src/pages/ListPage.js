import React, { useContext, useEffect, useState } from "react";
import List from "../components/List/List";
import ListWrapper from "../components/List/ListWrapper";
import { Outlet } from "react-router-dom";
import AppBar from "../components/Detail/AppBar";
import { collection, getDocs } from "@firebase/firestore";
import { db } from "../components/FireBase/firebase-config";
import { DetailContext } from "../App";
import Heading from "../components/ui/Heading";
import Chip from "../components/ui/Chips";
import AppList from "../components/List/AppList";

export default function ListPage() {
  const { detailData, setDetailData } = useContext(DetailContext);
  const AppDetailCollection = collection(db, "Apps");
  useEffect(() => {
    const getAppDetail = async () => {
      const data = await getDocs(AppDetailCollection);
      setDetailData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      const localData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      localStorage.setItem("detailData", JSON.stringify(localData));
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
    <>
      <AppBar searchValue={searchValue} />
      <main className="mt-[88px] lg:mx-[60px] mb-12">
        {/* <NavBar /> */}

        <Heading>Premium Apps</Heading>
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

        <Heading>Top Charts</Heading>

        <div className="gap-3 flex items-center px-3 mb-2">
          <Chip label="Top free" active />
          <Chip label="Top grossing" />
          <Chip label="Top paid" />
        </div>

        <AppList apps={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]} />
      </main>
    </>
  );
}

//
{
  /* <Heading>Premium Apps</Heading>

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

<Heading>Top Charts</Heading>

<div className="gap-3 flex items-center px-3 mb-2">
  <Chip label="Top free" active />
  <Chip label="Top grossing" />
  <Chip label="Top paid" />
</div>

<AppList apps={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]} />
</main> */
}
