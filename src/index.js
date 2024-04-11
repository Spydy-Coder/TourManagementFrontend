import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { GoogleOAuthProvider } from "@react-oauth/google";

const id=process.env.REACT_APP_CLIENT_ID;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={id}>
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
