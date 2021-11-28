import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="wrapper my-3 mx-4 d-flex flex-row justify-content-between align-items-center">
        <h1 className="mb-0">mtthw.</h1>
        <div className="d-flex flex-row align-items-center">
          <li className="ms-3">
            <Link to="/">home</Link>
          </li>
          <li className="ms-3">
            <Link to="/statistics">statistics</Link>
          </li>
        </div>
      </div>
    </nav>
  );
}
