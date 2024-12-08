import React from "react";
import Card from "../Tree/Card";

const Body = () => {
  const fruits = [
    {
      id: 1,
      name: "Orange",
      price: 3000,
    },
    {
      id: 2,
      name: "Banana",
      price: 1500,
    },
    {
      id: 3,
      name: "Apple",
      price: 2000,
    },
    {
      id: 4,
      name: "Coconut",
      price: 5000,
    },
  ];
  return (
    <div>
      {fruits.map((fruit) => (
        <Card key={fruit.id} fruit={fruit} />
      ))}
    </div>
  );
};

export default Body;
