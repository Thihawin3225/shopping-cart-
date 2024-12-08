import React, { useContext, useState } from "react";
import { ItemCxt } from "../store/ItemCxt";

const Card = ({ fruit }) => {
  const [qty, setQty] = useState(1);
  const updateqty = +qty;
  const { addNewItem } = useContext(ItemCxt);

  const { id, name, price } = fruit;
  const handleAddToCart = () => {
    if (updateqty < 1 || updateqty > 5) {
      alert(
        "haha child play ? try again and surrend for valid input , Thank!!!"
      );
    }
    const itemToAdd = {
      id,
      name,
      price,
      amount: updateqty,
    };
    addNewItem(itemToAdd);
  };
  return (
    <div className="card-container">
      <div>
        <h4>{name}</h4>
        <p>price $ - {price}</p>
      </div>
      <div className="btn-input-container">
        <input
          type="number"
          className="addtocart-input"
          min={1}
          max={5}
          value={qty}
          onChange={(e) => {
            setQty(e.target.value);
          }}
        />
        <button className="addtocart-btn" onClick={handleAddToCart}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Card;
