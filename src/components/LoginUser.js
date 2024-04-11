import React from "react";
import logo from "../images/icons/logo.png";
import video from "../video/video.mp4";
import { useNavigate } from "react-router";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import "./login.css";

function LoginUser() {
  const navigate = useNavigate();
  const afterLogin = async (response) => {
    // console.log(response);
    const decode = jwtDecode(response.credential);
    console.log(decode);

    //Making API request to make user........
    const res = await fetch("http://localhost:8080/api/client/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: decode.name,
        email: decode.email,
        image: decode.picture,
      }),
    });
    console.log(typeof (await res.status));

    if ((await res.status) === 200) {
      //Save the auth-token and redirect.
      localStorage.clear();
      localStorage.setItem("token", await res.text());
      localStorage.setItem("role","client");
      navigate("/packages");

      console.log("Logged in Successfully");
    } else {
      console.log("Invalid Credentials");
    }
  };
  return (
    <div class="con">
      <div class="video">
        <video
          class="sub-container"
          autoPlay
          muted
          loop
          controls={false}
          src={video}
          type="video/mp4"
        />
        <div class="button-container">
          <h3 className="text-uppercase login-heading">User Login Page</h3>
          <div className="p-5">
            <img src={logo} alt="This is the logo" width="130px" />
          </div>
          <div class="shadow-2xl">
            <GoogleLogin
              onSuccess={afterLogin}
              onError={() => {
                console.log("Login Failed");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginUser;
