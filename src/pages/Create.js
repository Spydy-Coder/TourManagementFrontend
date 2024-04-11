import React from "react";
import Navbar from "../components/Navbar";
import SidebarCustom from "../components/SidebarCustom";
import "./Create.css";
import CreateForm from "../components/CreateForm";
import { useState,useEffect } from "react";

export default function Create() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Only run once on component mount
  return (
    <div className="container">
      <Navbar />
      <div className="row">
        <div className="col-2 col-md-3">
          <SidebarCustom windowWidth={windowWidth} />
        </div>
        <div className="col-10 col-md-9 form-container d-flex justify-content-center align-items-center flex-column p-2 pb-3">
          <h4 className="text-uppercase mb-3 form-heading">
            Add a new package
          </h4>
          <CreateForm />
        </div>
      </div>
    </div>
  );
}
