import { Link } from "react-router-dom";
import React from "react";
import logo from "../assets/Logo.svg";

export default function Nav() {
  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div>
        <ul>
          <li>
            <Link to="/" className="hover-effect">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover-effect">About</Link>
          </li>
          <li>
            <Link to="/reservations" className="hover-effect">Reservations</Link>
          </li>
          <li>
            <Link to="/order" className="hover-effect">Order Online</Link>
          </li>
          <li>
            <Link to="/login" className="hover-effect">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}