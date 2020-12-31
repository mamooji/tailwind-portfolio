import React from "react";
import Card from "./SingleCard";
import { CardText } from "../../Assets/Data/CardText";
const Cards = () => {
  return (
    // <div className="flex flex-col justify-center text-white sm:flex-row sm:justify-around">
    <div className="flex flex-wrap justify-center text-white">
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
