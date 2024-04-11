import React from "react";
import "./CreateForm.css";
import { useState } from "react";
import Swal from 'sweetalert2';

export default function CreateForm() {
  const [formData, setFormData] = useState({
    name: "",
    destination: "",
    days: "",
    startDate: null,
    endDate: null,
    image: "",
    price: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleClear = () => {
    setFormData({
      name: "",
      destination: "",
      days: "",
      startDate: null,
      endDate: null,
      image: "",
      price: "",
      description: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const timestamp = new Date().toISOString();

    const finalData = {
      ...formData,
      timestamp: timestamp,
    };

    try {
      const response = await fetch("http://localhost:8080/api/pin/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token: localStorage.getItem("token"),
        },
        body: JSON.stringify(finalData),
      });
      const data = await response.json();
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Tour Created!',
      });
      console.log("Server response:", data.message);
      handleClear();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="create-form p-3">
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="name" className="mb-2">
            Name of the Tour:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter Name of Tour"
            onChange={handleChange}
            value={formData.name}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="destination" className="mb-2">
            Destination:
          </label>
          <input
            type="text"
            className="form-control"
            id="destination"
            placeholder="Enter Destination"
            onChange={handleChange}
            value={formData.destination}
            required
          />
        </div>
        <div className="d-flex gap-3 justify-content-between">
          <div className="form-group mb-3">
            <label htmlFor="days" className="mb-2">
              Days:
            </label>
            <input
              type="number"
              className="form-control"
              id="days"
              placeholder="Enter Number of Days"
              onChange={handleChange}
              value={formData.days}
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="startDate" className="mb-2">
              Start Date:
            </label>
            <input
              type="date"
              className="form-control"
              id="startDate"
              placeholder="Enter Start Date"
              onChange={handleChange}
              value={formData.startDate}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="endDate" className="mb-2">
              End Date:
            </label>
            <input
              type="date"
              className="form-control"
              id="endDate"
              placeholder="Enter End Date"
              onChange={handleChange}
              value={formData.endDate}
            />
          </div>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="image" className="mb-2">
            Image Link:
          </label>
          <input
            type="text"
            className="form-control"
            id="image"
            placeholder="Enter Image Link"
            onChange={handleChange}
            value={formData.image}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="price" className="mb-2">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            placeholder="Enter Price"
            onChange={handleChange}
            value={formData.price}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="description mb-2">Description:</label>
          <textarea
            className="form-control mt-2"
            id="description"
            rows="5"
            placeholder="Enter Description"
            onChange={handleChange}
            value={formData.description}
            required
          ></textarea>
        </div>
        <div className="d-flex gap-4">
          <button type="submit" className="btn form-button">
            Submit
          </button>
          <button type="reset" class="btn form-button" onClick={handleClear}>
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}
