import React from "react";
import Card from "./SingleCard";
import { CardText } from "../../Assets/Data/CardText";
const Cards = () => {
  return (
    <div className="flex flex-col items-center text-white lg:flex-row lg:justify-around">
      {CardText.map((card, index) => {
        return (
          <Card
            key={index}
            index={index}
            title={card.title}
            description={card.description}
            color={card.color}
            icon={card.icon}
          />
        );
      })}
    </div>
  );
};

export default Cards;
