import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomeComponent from "./pages/HomeComponent";
import ProfileComponent, { AboutComponent } from "./pages/AboutComponent";

function App() {
  return (
    <Router>
      <nav
        style={{ width: 100, display: "flex", justifyContent: "space-between" }}
      >
        <Link to="/">Home</Link>
        <Link to="/about/arjun">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/about/:user" element={<AboutComponent />} />
      </Routes>
      <div>Footer</div>
    </Router>
  );
}

export default App;
