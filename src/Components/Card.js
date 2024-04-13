import React from "react";
import "./Card.css";


function Card(props) {
  // console.log(props)
  return (


    <div className="card-cont">

      {props.openSpots === 0 &&
        <div className="card-badge">
        SOLD OUT
      </div>}
      <img src={props.img} alt="" className="cd-img" />

      <div className="title">{props.title} </div>
      <div>
        <span className="gap" >{props.category}</span>
        <span>{props.duration}</span>
      </div>
  
    </div>
  );
}

export default Card;
