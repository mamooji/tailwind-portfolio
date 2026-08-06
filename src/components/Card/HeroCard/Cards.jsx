import React from "react";
import Card from "./SingleCard";
import { CardText } from "../../../Assets/Data/CardText";

const Cards = () => (
  <section className="border-t border-ink/15">
    <div className="mx-auto max-w-[1280px] px-8">
      <div className="grid md:grid-cols-3">
        {CardText.map((card, index) => (
          <Card key={card.title} index={index} {...card} />
        ))}
      </div>
    </div>
  </section>
);

export default Cards;
