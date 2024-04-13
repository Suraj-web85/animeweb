import React from "react";
import Card from "./Card";
import "./Cards.css";
import data from "../data/data.json";

function Cards(props) {
  const cards = data.map((item) => {
    return (<Card 
    key={item.id}
    // img={item.img} 
    // title={item.title}
    // category={item.category} 
    // duration={item.duration}
    // openSpots={item.openSpots}
    // item = {item}
    {...item}

    />)
  });

  return ( <div className="cards">
  {cards}</div>)
 
}

export default Cards;
