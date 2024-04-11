import React from "react";
import "./Intro.css";
import intro from "../images/intro-transformed.jpeg";
import { Link } from "react-router-dom";

const scrollToElement = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export default function Intro() {
  const handleClick = () => {
    scrollToElement("stylecomponent");
  };
  return (
    <div className="container intro mt-5">
      <div className="row">
        <div className="col-12 col-md-7">
          <h1 className="display-3">
            Travel, enjoy and live a new and full life
          </h1>
          <p className="mt-3">
            Navigate the World with Ease. Embark on unforgettable journeys with
            Safar, your premier destination for seamless tour management.
            Whether you're exploring ancient ruins, lounging on pristine
            beaches, or immersing yourself in vibrant cultures, Safar ensures
            every step of your adventure is smooth and memorable. Discover new
            horizons and create lifelong memories with Safar as your trusted
            travel companion.
          </p>

          <button className="btn intro-button me-2  mt-2" type="button" onClick={handleClick}>
            Explore
          </button>
        </div>
        <div className="col-12 col-md-5">
          <img src={intro} className="img-fluid" alt="Not found" loading="lazy" />
        </div>
      </div>
    </div>
  );
}
