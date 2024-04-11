import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { googleLogout } from "@react-oauth/google";
import { LuLogOut } from "react-icons/lu";

export default function Navbar() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    let currUser = localStorage.getItem("token");
    if (currUser) {
      const fetchData = async () => {
        try {
          const response = await fetch("http://localhost:8080/api/auth/check", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              token: currUser,
              role: localStorage.getItem("role")
            },
          });
          if (!response.ok) {
            setUserData({ id: false });
            console.log("this is running");
            return;
          }
          const json = await response.json();
          setUserData(json);
          console.log(json);
          localStorage.setItem("role",json.role);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    } else {
      setUserData(null);
    }
  }, []);

  const logout = () => {
    console.log("loggingout");
    googleLogout();
    localStorage.clear();
    setUserData(null);
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <a className="navbar-brand brand-name fs-1" href="/">
          Safar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end "
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <a
              className="nav-link active fs-5 me-2"
              aria-current="page"
              href="/"
            >
              Home
            </a>
            <a className="nav-link fs-5 me-2" href="/#reviews">
              Reviews
            </a>
            <a className="nav-link fs-5 me-2" href="/packages">
              Packages
            </a>
            <a className="nav-link fs-5 me-4" href="/#footer">
              Contact
            </a>
          </div>

          {userData && userData.role === "client" ? (
            <a href="/">
              <button className="btn  me-2 nav-button" type="button">
                User
              </button>
            </a>
          ) : (
            <a href="/clientlogin">
              <button className="btn  me-2 nav-button" type="button">
                User
              </button>
            </a>
          )}

          {userData && userData.role === "admin" ? (
            <a href="/admin/dashboard">
              <button className="btn  me-2 nav-button" type="button">
                Admin
              </button>
            </a>
          ) : (
            <a href="/login">
              <button className="btn  me-2 nav-button" type="button">
                Admin
              </button>
            </a>
          )}

          {userData ? (
            <button
              className="btn nav-button logout"
              type="button"
              onClick={() => {
                logout();
              }}
            >
              <LuLogOut size={23} className="ms-1" />
            </button>
          ) : null}
        </div>
      </div>
    </nav>
  );
}
