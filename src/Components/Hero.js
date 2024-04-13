import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero-sec" >
      <img src="./heroimg.png" alt="" className="hero-img" />
      <h1 className="hero-head">Online Experiences</h1>
      <p className="hero-con">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </div>
  );
}

export default Hero;
