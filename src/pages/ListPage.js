import React from "react";
import List from "../components/List/List";
import NavBar from "../components/List/NavBar";
import Search from "../components/List/Search";
import ListWrapper from "../components/List/ListWrapper";
import { Outlet } from "react-router-dom";
import AppBar from "../components/Detail/AppBar";

export default function ListPage() {
  return (
    <React.Fragment>
      {/* <NavBar /> */}
      <AppBar />
      {/* <Search /> */}
      <ListWrapper>
        <List
          Name="Apex legends"
          type="Game"
          price="300"
          rating={5}
          ImageSrc="Apex.jpg"
        />
        <List
          Name="TikTok"
          type="Social"
          price="0"
          rating={4.9}
          ImageSrc="calc.jpg"
        />
      </ListWrapper>
      <Outlet />
    </React.Fragment>
  );
}
