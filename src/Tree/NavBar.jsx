import React, { useContext, useState } from "react";
import { ItemCxt } from "../store/ItemCxt";

const NavBar = ({ openHandler }) => {
  const { item } = useContext(ItemCxt);

  const updateCartNumber = item.reduce((currentValue, item) => {
    return currentValue + item.amount;
  }, 0);

  return (
    <div className="nav-container">
      <h2 className="logo">Shopping</h2>
      <button className="cart-btn" onClick={openHandler}>
        Cart({updateCartNumber})
      </button>
    </div>
  );
};

export default NavBar;
