import React from "react";
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import Footer from "../components/Footer";
import StyleComponent from "../components/StyleComponent";
import Counter from "../components/Counter";
import Reviews from "../components/Reviews";

export default function Home() {
  return (
    <div className="container">
      <Navbar />
      <Intro />
      <StyleComponent />
      <hr></hr>
      <Reviews/>
      <hr></hr>
      <Counter />
      <Footer />
      
    </div>
  );
}
