// import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from "./pages/home/home";
import Job from "./pages/jobPost"
import OneJobPost from "./pages/oneJob";
import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobpost" element={<Job />} />
        <Route path="/onejobpost" element={<OneJobPost />} />

      </Routes>
    </Router>
  );
}