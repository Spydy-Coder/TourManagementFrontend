import React, { useEffect } from "react";
import { useState } from "react";
import TourCardUser from "../components/TourCardUser";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Packages.css";

export default function Packages() {
  const [Tour, setTour] = useState(null);

  useEffect(() => {
    const fetchPin = async () => {
      const response = await fetch("http://localhost:8080/api/pin/displayAllForClient", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          token: localStorage.getItem("token"),
        },
      });
      // console.log(response);
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        return;
      }
      if (!response.ok) {
        setTour({ tourId: false });
        console.log("this is running");
        return;
      }
      const json = await response.json();
      console.log(json);
      setTour(json);
    };
    fetchPin();
  }, []);
  return (
    <div className="container packages">
      <Navbar />
      <h6 className="text-uppercase head my-4 fw-bold text-center">
        "Book your dream getaway and create unforgettable memories with loved
        ones"
      </h6>
      <div className="row">
        {Tour?.map((data, index) => (
          <div key={index} className="col-md-6">
            <Link
              to={`/touruser/${data.tourId}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <TourCardUser data={data} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
