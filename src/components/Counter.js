import React from "react";
import CountUp from "react-countup";
import "./Counter.css"

export default function Counter() {
  return (
    <div className="conntainer my-3 counter">
      <div className="row">
        <div className="col">
          <h4 className="text-uppercase text-center">Total Customers</h4>
          <h3 className="text-center">
            <CountUp start={0} end={250} duration={5}/>
          </h3>
        </div>
        <div className="col">
          <h4 className="text-uppercase text-center">Total Tours</h4>
          <h3 className="text-center">
            <CountUp start={0} end={56} duration={5}/>
          </h3>
        </div>
        <div className="col">
          <h4 className="text-uppercase text-center">Total Cities</h4>
          <h3 className="text-center">
            <CountUp start={0} end={36} duration={5}/>
          </h3>
        </div>
      </div>
    </div>
  );
}
