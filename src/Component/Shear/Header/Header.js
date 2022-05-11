import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../../../FirebaseInit/Init";
import Loading from "../Loading/Loading";
import "./Header.css";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  if (loading) {
    return <Loading />;
  }
  const menuItems = (
    <>
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
          Contact
        </NavLink>
      </li>
      <li>
        {user ? (
          <button className="nav_link" onClick={() => signOut(auth)}>
            Sign Out
          </button>
        ) : (
          <NavLink className="nav_link" to="/login">
            Login
          </NavLink>
        )}
      </li>
    </>
  );

  return (
    <div className="container">
      <div className="navbar  ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <Link to="/" className="navbar_title">
            <h5 className="navbar_title_text">Doctor Pronto</h5>
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0 navigation_link">
            {menuItems}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
