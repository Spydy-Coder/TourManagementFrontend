import React, { useState, useEffect } from "react";
import { formatDistanceToNow } from "date-fns";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { LuCalendarDays } from "react-icons/lu";
import { useParams } from "react-router";
import tourback from "../images/tour-bg-2.jpeg";
import Navbar from "../components/Navbar";
import "./Tour.css"
import { Link } from "react-router-dom";

export default function Tour() {
  const [data, setData] = useState(null);
  const { tourId } = useParams(); // Assuming you're using React Router's useParams hook

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://safar-yr0y.onrender.com/api/pin/display/${tourId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              token: localStorage.getItem("token"), // Replace 'your_access_token' with your actual token
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the fetchData function
  }, []);
  const formatTimestamp = (timestamp) => {
    if (!timestamp) return "";
    return formatDistanceToNow(new Date(timestamp), { addSuffix: true });
  };
  return (
    <div className="container tourind">
        <Navbar/>
      <div className="row">
        <div className="col-12 col-md-5">
          <img className="img-fluid" src={tourback} style={{minHeight:"80vh"}} alt="not found" />
        </div>
        <div className="col-12 col-md-7 d-flex align-items-center flex-column justify-content-center">
            <h5 className="text-uppercase tour-card-head">Navigate your adventures seamlessly</h5>
          <div className="card my-3 tourcard " style={{ maxWidth: "100vw" }}>
            <div className="row g-0">
              
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title text-uppercase  tour-name">
                    {data?.name}
                  </h5>
                  <div className="d-flex justify-content-between ">
                    <strong className="text-muted">{data?.destination}</strong>
                    <strong className="text-danger price">
                      ₹{data?.price}
                    </strong>
                  </div>
                  <p className="card-text tour-description">
                    {data?.description}
                  </p>
                  <div className="d-flex justify-content-between flex-md-row flex-column ">
                    <p className="card-text">
                      <h6 className="mb-0">
                        <LuCalendarDays size={20} className="me-1 mb-2" /> Days
                      </h6>
                      <strong className="text-muted">{data?.days} </strong>
                    </p>
                    <div className="d-flex justify-content-between gap-4">
                      <p className="card-text text-center">
                        <h6 className="mb-0">
                          <IoCalendarNumberOutline
                            size={20}
                            className="me-1 mb-1"
                          />
                          Start Date
                        </h6>
                        <strong className="text-muted">
                          {data?.startDate}
                        </strong>
                      </p>
                      <p className="card-text text-center">
                        <h6 className="mb-0">
                          <IoCalendarNumberOutline
                            size={20}
                            className="me-1 mb-1"
                          />
                          End Date
                        </h6>
                        <strong className="text-muted">{data?.endDate}</strong>
                      </p>
                    </div>
                  </div>

                  <p className="card-text text-end">
                    <small className="text-muted">
                      Last Updated on:{" "}
                      <strong>{formatTimestamp(data?.timestamp)}</strong>
                    </small>
                  </p>
                </div>
              </div>
              <div className="col-md-4  card-image">
                <img
                  src={data?.image}
                  className="img-fluid rounded-end   "
                  alt="Tour_image"
                />
              </div>
            </div>
          </div>
          <Link to={`/showbooking/${tourId}`}><button type="button" className="booking-btn">Show Bookings</button></Link>
        </div>
      </div>
    </div>
  );
}
