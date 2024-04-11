import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminPortal from "./pages/AdminPortal";
import Create from "./pages/Create";

import Home from "./pages/Home";
import Login from "./components/Login";
import Tour from "./pages/Tour";
import Packages from "./pages/Packages";
import TourUser from "./pages/TourUser";
import LoginUser from "./components/LoginUser";
import ShowBooking from "./components/ShowBooking";

import Edit from "./pages/Edit";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/dashboard" element={<AdminPortal />} />
        <Route path="/create" element={<Create />} />
        <Route path="/tour/:tourId" element={<Tour />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/touruser/:tourId" element={<TourUser />} />
        <Route path="/clientlogin" element={<LoginUser />} />
        <Route path="showbooking/:tourId" element={<ShowBooking />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </Router>
  );
}

export default App;
