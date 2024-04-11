import React, { useEffect } from "react";
import "./EditForm.css";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";

export default function EditForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    destination: "",
    days: "",
    startDate: "",
    endDate: "",
    image: "",
    price: "",
    description: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/pin/display/${id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              token: localStorage.getItem("token"),
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setFormData({
          name: jsonData.name,
          destination: jsonData.destination,
          days: jsonData.days,
          startDate: jsonData.startDate,
          endDate: jsonData.endDate,
          image: jsonData.image,
          price: jsonData.price,
          description: jsonData.description,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the fetchData function
  }, [id]);

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
      startDate: "",
      endDate: "",
      image: "",
      price: "",
      description: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const timestamp = new Date().toISOString();
      const updatedData = { ...formData, timestamp };

      const response = await fetch(`http://localhost:8080/api/pin/edit/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          token: localStorage.getItem("token"),
        },
        body: JSON.stringify(updatedData),
      });

      console.log(updatedData);
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Updated Successfully!',
      });

      navigate("/admin/dashboard");

      const responseData = await response.json();

      console.log("Server response:", responseData);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="edit-form p-3">
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
          <button
            type="submit"
            className="btn form-button"
            onClick={handleSubmit}
          >
            Update
          </button>

          <button type="reset" class="btn form-button" onClick={handleClear}>
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}
