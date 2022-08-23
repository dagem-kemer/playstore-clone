import "./App.css";
import React from "react";
import List from "./Components/List";
import NavBar from "./Components/NavBar";
import Search from "./Components/Search";
import ListWrapper from "./Components/ListWrapper";
function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Search />
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
    </React.Fragment>
  );
}

export default App;
