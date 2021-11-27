import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="wrapper py-3 px-5 d-flex flex-row justify-content-between align-items-center">
        <h1 className="mb-0">Logo</h1>
        <div className="d-flex flex-row align-items-center">
          <li className="ms-3">
            <Link to="/">Home</Link>
          </li>
          <li className="ms-3">
            <Link to="/statistics">Statistics</Link>
          </li>
        </div>
      </div>
    </nav>
  );
}
