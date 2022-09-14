import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { auth } from "../filebase/config";
import K from "./Navbar.module.css"
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-transparent py-2 fixed-top">
        <nav class="navbar navbar-expand-lg ">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              Life Luxury
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse  " id="navbarNavAltMarkup">
              <div class="navbar-nav ">
                <NavLink
                  className="nav-link"
                  activeClassName="active_class"
                  exact
                  to="/"
                >
                  Home
                </NavLink>
                <NavLink
                  className="nav-link"
                  activeClassName="active_class"
                  exact
                  to="/Rooms"
                >
                  Rooms
                </NavLink>
                <NavLink
                  className="nav-link"
                  activeClassName="active_class"
                  exact
                  to="/About"
                >
                  About
                </NavLink>
                <NavLink
                  className="nav-link"
                  activeClassName="active_class"
                  exact
                  to="/Contact"
                >
                  Contact
                </NavLink>
                <NavLink to="/" className={K.bn} onClick={() => auth.signOut()}>
                   Log out
                </NavLink>
                
              </div>
            </div>
          </div>
        </nav>
      </nav>
    </>
  )
}
export default Navbar
