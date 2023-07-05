import React from "react";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";
import { GrCart } from "react-icons/gr";

import { useAuth } from "../../context/auth";
import { useCart } from "../../context/cart.js";

function Header() {
  const [auth, setAuth] = useAuth();
  // eslint-disable-next-line
  const [cart, setCart] = useCart();

  // logout function
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("LogOut Succesfull");
  };
  return (
    <>
      <div className="bg-black ">
        <p className="container-fluid mb-0 text-white fw-lighter">
          Free shipping for standard order over 500
        </p>
      </div>
      {/* <div className="bg-dark text-light px-4 py-1 fw-lighter">
        <span style={{ letterSpacing: "0.2em" }}>
          Send Your Query ( Mail-Id : onlineshop@support.com ){" "}
        </span>
        <span className="float-end">Call us : +012-3456789</span>
      </div> */}
      <nav
        className="container-fluid navbar navbar-expand-md shadow sticky-top bg-nav opacity-75"
        style={{ backgroundColor: "#fdefef" }}
      >
        <div className="container text-uppercase fs-6 lh-lg ">
          {/* Logo */}
          <h1
            to={"/"}
            className="text-capitalize logo-cursive my-auto rounded-3 text-decoration-none"
            style={{ color: "#f9487b" }}
          >
            {" "}
            <GrCart /> Online Shop
          </h1>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div
              className="navbar-nav fs-5 ms-auto fw-bold text-black "
              style={{ letterSpacing: "0.2rem" }}
            >
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
              <NavLink to="/plan" className="nav-link">
                Shop
              </NavLink>

              {!auth.user ? (
                <>
                  <NavLink to="/register" className="nav-link">
                    Register
                  </NavLink>
                  <NavLink to="/login" className="nav-link">
                    Login
                  </NavLink>
                </>
              ) : (
                <>
                  <NavLink
                    to={`/dashboard/${
                      auth?.user?.role === 1 ? "admin" : "user"
                    }`}
                    className="nav-link"
                  >
                    Dashboard
                  </NavLink>

                  <NavLink
                    onClick={handleLogout}
                    to="/login"
                    className="nav-link"
                  >
                    Logout
                  </NavLink>
                  <NavLink to="/cart" className="nav-link">
                    Cart
                    <GrCart />
                    <span className="position-realtive top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {cart?.length}
                    </span>
                  </NavLink>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
