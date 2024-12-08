import React from "react";
import NavBar from "../Tree/NavBar";
import Description from "../Tree/Description.Jsx";

const Header = ({ openHandler }) => {
  return (
    <div>
      <NavBar openHandler={openHandler} />
      <Description />
    </div>
  );
};

export default Header;
