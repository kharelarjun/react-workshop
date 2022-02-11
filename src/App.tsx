import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomeComponent from "./pages/HomeComponent";
import ProfileComponent from "./pages/ProfileComponent";

function App() {
  return (
    <Router>
      <nav
        style={{ width: 100, display: "flex", justifyContent: "space-between" }}
      >
        <Link to="/">Home</Link>

        <Link to="/profile">Profile</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/profile" element={<ProfileComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
