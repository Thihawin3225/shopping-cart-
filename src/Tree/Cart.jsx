import React, { useContext } from "react";
import BackDropItem from "./BackDropItem";
import { ItemCxt } from "../store/ItemCxt";

const Cart = ({ closeHandler }) => {
  const { item, totalAmount } = useContext(ItemCxt);
  return (
    <div className="cart-container">
      <h2 style={{ textAlign: "center" }}>Your Shoppin Cat</h2>
      {item.length < 1 && (
        <p style={{ textAlign: "center", margin: "10px 0" }}>
          No Item yet? Add Item.
        </p>
      )}
      <div className="backdropItemContainer">
        {item.map((fruit) => (
          <BackDropItem key={item.id} fruit={fruit} />
        ))}
      </div>
      <hr />
      <div className="total-amount">
        <p>Total Amount</p>
        <p>$ {totalAmount}</p>
      </div>
      <div className="orderClose">
        <button
          className="closebtn"
          onClick={() => {
            closeHandler();
          }}
        >
          Close
        </button>
        {!item.length < 1 && (
          <button
            className="orderbtn"
            onClick={() => {
              alert("Your Order Sucessful");
            }}
          >
            Order
          </button>
        )}
      </div>
    </div>
  );
};

export default Cart;
