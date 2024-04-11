import React, { useState, useEffect} from "react";
import { formatDistanceToNow } from "date-fns";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { LuCalendarDays } from "react-icons/lu";
import { useNavigate, useParams } from "react-router";
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";
import tourback from "../images/tour-bg-2.jpeg";
import Navbar from "../components/Navbar";
import "./TourUser.css";
import Swal from "sweetalert2";

export default function TourUser() {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const { tourId } = useParams(); // Assuming you're using React Router's useParams hook
  const [person, setPerson] = useState(1);
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const handleIncrement = () => {
    setPerson(person + 1);
  };

  const handleDecrement = () => {
    if (person > 1) {
      setPerson(person - 1);
    }
  };

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
    fetchData();
  }, []);

  const sendOrder = async () => {
    try {
      const response = await fetch("https://safar-yr0y.onrender.com/api/booking/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token: localStorage.getItem("token"),
        },
        body: JSON.stringify({
          tourid: parseInt(tourId),
          noofperson: person,
          totalprice: person * data?.price,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to perform buy action");
      }

      // If the response is successful, you can handle it accordingly
      const responseData = await response.json();
      console.log("Buy request successful:", responseData.message);
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Booked Successfully!",
      });

      navigate("/packages");
    } catch (error) {
      console.error("Error performing buy action:", error);
    }
  };

  const handleBuy = async () => {
    if (token && role === "client") {
      sendOrder();
    } else if (token && role !== "client") {
      Swal.fire({
        icon: "info",
        title: "Login",
        text: "Please Login as Client!",
      });
    } else {
      navigate("/clientlogin");
    }
  };

  const formatTimestamp = (timestamp) => {
    if (!timestamp) return "";
    return formatDistanceToNow(new Date(timestamp), { addSuffix: true });
  };
  return (
    <div className="container touruserind">
      <Navbar />

      <div className="row">
        <div className="col-12 col-md-5">
          <img
            className="img-fluid"
            src={tourback}
            style={{ minHeight: "80vh" }}
            alt="not found"
            data-aos="fade-right"
          />
        </div>
        <div className="col-12 col-md-7 d-flex align-items-center flex-column justify-content-center">
          <h5 className="text-uppercase tour-card-head">
            Navigate your adventures seamlessly
          </h5>

          <div
            className="card my-3 tourcard "
            style={{ maxWidth: "100vw" }}
            data-aos="fade-right"
            data-aos-duration="600"
          >
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

          <div className="d-flex gap-4 bottom">
            <div className="d-flex gap-3 mt-1">
              <button className="inc-btn" onClick={handleDecrement}>
                <CiSquareMinus color="black" size={30} />
              </button>
              <span className="personholder text-center px-2">{person}</span>
              <button
                className="inc-btn "
                style={{ backgroundColor: "white" }}
                onClick={handleIncrement}
              >
                <CiSquarePlus color="black" size={30} />
              </button>
            </div>
            <button className="btn buy-btn" onClick={handleBuy}>
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
