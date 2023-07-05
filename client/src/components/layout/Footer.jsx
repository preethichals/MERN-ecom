import React from "react";
import { GrCart } from "react-icons/gr";

function Footer() {
  return (
    <>
      <div className="row bg-dark text-white p-2 ">
        <div className="col text-center m-auto px-3">
          <h1
            className=" text-capitalize cursive mt-3 rounded-3 w-auto"
            style={{ color: "#f9487b", backgroundColor: "#fff" }}
          >
            {" "}
            <GrCart /> Online Shop
          </h1>
          <h6 className="">ADDRESS :</h6>
          <h6 className=" fw-lighter"> 28 White tower, Street Name</h6>
          <h6 className=" fw-lighter">123 Street, City</h6>
          <h6 className="">
            Email : <span className="fw-lighter">abcinfo@gamil.com</span>
          </h6>

          <h6 className="">
            TELEPHONE : <span className=" fw-lighter">+912345678</span>
          </h6>
        </div>
        <div
          className="col text-center m-auto border-start border-end border-light"
          style={{ letterSpacing: "0.2rem" }}
        >
          <h5 className="text-uppercase text-decoration-underline">Menu</h5>
          <h6 className=" fw-lighter">Home</h6>
          <h6 className=" fw-lighter">Product</h6>
          <h6 className=" fw-lighter">Blog</h6>
          <h6 className=" fw-lighter">About</h6>
          <h6 className=" fw-lighter">Shipping</h6>
        </div>
        <div
          className="col text-center m-auto border-end border-light"
          style={{ letterSpacing: "0.2rem" }}
        >
          <h5 className="text-uppercase text-decoration-underline fw-semibold ">
            Account
          </h5>
          <h6 className=" fw-lighter">Log-In</h6>
          <h6 className=" fw-lighter">Register</h6>
          <h6 className=" fw-lighter">Shopping</h6>
          <h6 className=" fw-lighter">Contact</h6>
          <h6 className=" fw-lighter">CheckOut</h6>
        </div>
        <div className="col flex-column text-center m-auto">
          <h5 className="text-uppercase text-decoration-underline">
            News Letter
          </h5>
          <div className="my-2">
            <input
              type="text"
              placeholder="Your Name"
              className=" rounded-1 p-2 text-capitalize"
            />
          </div>

          <div className="my-2">
            <input
              type="text"
              placeholder="Your Email"
              className=" rounded-1 p-2 text-capitalize "
            />
          </div>
          <div>
            <button className="btn btn-info">Subscribe Now</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
