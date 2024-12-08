import React, { useState } from "react";
import "./Main.css";
import Header from "./conpoment/Header";
import Body from "./conpoment/Body";
import BackDrop from "./conpoment/BackDrop";
import ItemCxtProvider from "./store/ItemCxt";

const App = () => {
  const [isClose, setClose] = useState(true);
  const closeHandler = () => {
    setClose(true);
  };
  const openHandler = () => {
    setClose(false);
  };
  return (
    <ItemCxtProvider>
      <Header openHandler={openHandler} />
      <Body />
      <BackDrop closeHandler={closeHandler} isClose={isClose} />
    </ItemCxtProvider>
  );
};

export default App;
