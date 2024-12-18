import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
const Navbar = ({ isAuthenticated, onLogout, user }) => {
  const navigate = useNavigate();
  return (
    <div className="d-flex justify-content between p-2">
      <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{width:"100vw"}}>
        <div className="container-fluid">
          <h1 className="navbar-brand">ElectronicShop</h1>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
             
              {isAuthenticated ? (
                <>
                  <NavLink className="nav-link" to="/profile">
                    Profile
                  </NavLink>
                  <NavLink>
                    <button
                      onClick={() => {
                        onLogout();
                        navigate("/");
                      }}
                      className="nav-link"
                    >
                      Logout
                    </button>
                  </NavLink>
                  <NavLink>
                    <span className="badge badge-warning text-primary">{user.name}</span>
                  </NavLink>
                </>
              ) : (
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              )}

              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
              
              
            </div>
          </div>
        </div>
        <IoCartOutline style={{fontSize:'50px'}} />
      </nav>
    </div>
  );
};

export default Navbar;
