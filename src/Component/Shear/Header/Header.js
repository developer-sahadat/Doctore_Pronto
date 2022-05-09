import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="container">
      <div class="navbar  bg-base-100">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink className="nav_link" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="nav_link" to="/about">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink className="nav_link" to="/appointment">
                  Appointment
                </NavLink>
              </li>
              <li>
                <NavLink className="nav_link" to="/reviews">
                  Reviews
                </NavLink>
              </li>
              <li>
                <NavLink className="nav_link" to="/contact-us">
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink className="nav_link" to="/login">
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
          <Link to="/" className="navbar_title">
            <h5 className="navbar_title_text">Doctor Pronto</h5>
          </Link>
        </div>
        <div class="navbar-end hidden lg:flex">
          <ul class="menu menu-horizontal p-0 navigation_link">
            <li>
              <NavLink className="nav_link" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="nav_link" to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className="nav_link" to="/appointment">
                Appointment
              </NavLink>
            </li>
            <li>
              <NavLink className="nav_link" to="/reviews">
                Reviews
              </NavLink>
            </li>
            <li>
              <NavLink className="nav_link" to="/contact-us">
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink className="nav_link" to="/login">
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
