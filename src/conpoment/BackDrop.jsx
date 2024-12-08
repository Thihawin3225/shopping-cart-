import React from "react";
import Cart from "../Tree/Cart";

const BackDrop = ({ closeHandler, isClose }) => {
  return (
    <>
      {!isClose && (
        <div
          className="backdrop"
          onClick={() => {
            closeHandler();
          }}
        ></div>
      )}
      {!isClose && <Cart closeHandler={closeHandler} />}
    </>
  );
};

export default BackDrop;
