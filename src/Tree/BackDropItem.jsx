import { ItemCxt } from "../store/ItemCxt";
import { useContext } from "react";
const BackDropItem = ({ fruit }) => {
  const { addNewItem, removeItem } = useContext(ItemCxt);
  const increaseItem = () => {
    addNewItem({ ...fruit, amount: 1 });
  };
  const decreaseItem = () => {
    removeItem(fruit.id);
  };

  const { id, name, price, amount } = fruit;
  return (
    <div className="card-container">
      <div>
        <h4>{name}</h4>
        <p>price $ - {price}</p>
      </div>
      <div className="btn-input-container">
        <p className="count-qty">X {amount}</p>
        <div className="backdropBtn">
          <button onClick={increaseItem}>+</button>
          <button onClick={decreaseItem}>-</button>
        </div>
      </div>
    </div>
  );
};

export default BackDropItem;
