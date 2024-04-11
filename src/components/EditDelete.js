import React from "react";
import { Link } from "react-router-dom";

export default function EditDelete({ data }) {
  const handleDelete = async () => {
    try {
      // Make API call to delete the element
      const response = await fetch(
        `http://localhost:8080/api/pin/delete/${data.tourId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            token: localStorage.getItem("token"),
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to delete data");
      }
      // Show alert that the item is deleted
      alert("Deleted");
      // Navigate back to the admin dashboard directly by changing the URL
      window.location.href = "/admin/dashboard";
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };
  return (
    <div className="container">
      <div className="d-flex gap-3 justify-content-end">
        <Link
          to={`/edit/${data.tourId}`}
          className="btn text-white fw-bold"
          style={{ minWidth: "90px" }}
        >
          Edit
        </Link>
        <button
          className="btn text-white fw-bold"
          style={{ minWidth: "90px" }}
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
