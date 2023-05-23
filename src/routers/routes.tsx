import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "../pages/About/about";
import Dashboard from "../pages/Dashboard/dashboard";
//import Navbar from "../pages/Navbar/Navbar";

function MyRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          {" "}
        </Route>
        <Route path="/about" element={<About />}>
          {" "}
        </Route>
      </Routes>
    </Router>
  );
}

export default MyRoutes;
