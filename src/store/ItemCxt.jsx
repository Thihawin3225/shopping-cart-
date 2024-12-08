import { createContext, useReducer } from "react";
const initialState = {
  item: [],
  totalAmount: 0,
};

export const ItemCxt = createContext({
  item: [],
  totalAmount: 0,
  addNewItem: (item) => {},
  removeItem: (id) => {},
});
const firstReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const existingIndex = state.item.findIndex((items) => {
      return items.id === action.item.id;
    });
    const sameItem = state.item[existingIndex];

    let updateItem;
    if (sameItem) {
      const updateItems = {
        ...sameItem,
        amount: sameItem.amount + action.item.amount,
      };
      updateItem = [...state.item];

      updateItem[existingIndex] = updateItems;
    } else {
      updateItem = state.item.concat(action.item);
    }

    const updateTotalAmount =
      state.totalAmount + action.item.amount * action.item.price;

    return {
      ...state,
      item: updateItem,
      totalAmount: updateTotalAmount,
    };
  }
  if (action.type === "REMOVE_ITEM") {
    const sameIdArr = state.item.findIndex((item) => {
      return item.id === action.id;
    });
    const sameIdItem = state.item[sameIdArr];
    const updateItems = {
      ...sameIdItem,
      amount: sameIdItem.amount - 1,
    };
    let updateItem;
    updateItem = [...state.item];
    updateItem[sameIdArr] = updateItems;
    const updateTotalAmount = state.totalAmount - sameIdItem.price;
    if (sameIdItem.amount === 1) {
      updateItem = state.item.filter((item) => {
        return item.id !== action.id;
      });
    }
    return {
      item: updateItem,
      totalAmount: updateTotalAmount,
    };
  }
  return initialState;
};

const ItemCxtProvider = ({ children }) => {
  const [itemState, dispatchItem] = useReducer(firstReducer, initialState);
  const addNewItem = (item) => {
    dispatchItem({ type: "ADD_ITEM", item });
  };
  const removeItem = (id) => {
    dispatchItem({ type: "REMOVE_ITEM", id });
  };
  const item = {
    item: itemState.item,
    totalAmount: itemState.totalAmount,
    addNewItem,
    removeItem,
  };
  return <ItemCxt.Provider value={item}>{children}</ItemCxt.Provider>;
};

export default ItemCxtProvider;
