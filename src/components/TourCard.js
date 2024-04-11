import React, { useEffect } from "react";
import { formatDistanceToNow } from "date-fns";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { LuCalendarDays } from "react-icons/lu";
import "./TourCard.css";
import AOS from "aos";
import { Link } from "react-router-dom";

export default function TourCard({ data }) {
  const formatTimestamp = (timestamp) => {
    return formatDistanceToNow(new Date(timestamp), { addSuffix: true });
  };
  const limitDescription = (description) => {
    const words = description.split(" "); // Split description into array of words
    const limitedWords = words.slice(0, 20); // Take first 20 words
    return limitedWords.join(" "); // Join the first 20 words back into a string
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div
        className="card my-3 tourcard"
        data-aos="fade-right"
        data-aos-duration="600"
        style={{ maxWidth: "100vw" }}
      >
        <div className="row g-0">
          <div className="col-md-4  card-image">
            <img
              src={data?.image}
              className="img-fluid rounded-start   "
              alt="Tour_image"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title text-uppercase  tour-name">
                {data?.name}
              </h5>
              <div className="d-flex justify-content-between ">
                <strong className="text-muted">{data?.destination}</strong>
                <strong className="text-danger price">₹{data?.price}</strong>
              </div>
              <p className="card-text tour-description">{`${limitDescription(
                data?.description
              )} ...`}</p>
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
                    <strong className="text-muted">{data?.startDate}</strong>
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
        </div>
      </div>
    </div>
  );
}
