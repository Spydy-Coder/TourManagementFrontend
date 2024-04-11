import React from "react";
import bg from "../images/bg.jpg";
import intro from "../images/intro.jpg";
import "./Reviews.css";
import ReviewCard from "./ReviewCard";

export default function Reviews() {
  return (
    <div className="bg container " id="reviews">
      <h4 className="text-uppercase first-heading d-inline-block ">
        Where Adventures Begin:
      </h4>
      <h2 className="brand-name d-inline-block ms-2">Safar</h2>
      <h2 className="second-heading ">Customer Reviews</h2>
      <div className="row mt-2">
        <div className="col-6">
          <div className="row ">
            <div className="col">
              <ReviewCard username={"Bikash Dalai"} destination={"Goa Trip"}/>
            </div>
            <div className="col"></div>
          </div>
          <div className="row">
            <div className="col"></div>
            <div className="col">
              <ReviewCard username={"Anshuman Saini"} destination={"Sikkim Trip"}/>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <ReviewCard username={"Aakash"} destination={"Manali Trip"}/>
            </div>
            <div className="col"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
